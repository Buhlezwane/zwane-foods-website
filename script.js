// Zwane Foods - interactive website functionality
// Update this address to the real business email before publishing.
const BUSINESS_EMAIL = "your-business-email@example.com";

document.addEventListener("DOMContentLoaded", () => {
    // Product search and category filtering
    const productSearch = document.getElementById("productSearch");
    const categoryFilter = document.getElementById("categoryFilter");
    const productCards = Array.from(document.querySelectorAll(".product-card[data-category]"));
    const productCount = document.getElementById("productCount");
    const noProducts = document.getElementById("noProducts");

    function filterProducts() {
        if (!productSearch || !categoryFilter) return;
        const searchTerm = productSearch.value.trim().toLowerCase();
        const selectedCategory = categoryFilter.value;
        let visibleCount = 0;

        productCards.forEach((card) => {
            const text = card.textContent.toLowerCase();
            const matchesSearch = text.includes(searchTerm);
            const matchesCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
            const showCard = matchesSearch && matchesCategory;
            card.hidden = !showCard;
            if (showCard) visibleCount += 1;
        });

        if (productCount) {
            productCount.textContent = `Showing ${visibleCount} of ${productCards.length} product categories`;
        }
        if (noProducts) noProducts.hidden = visibleCount !== 0;
    }

    productSearch?.addEventListener("input", filterProducts);
    categoryFilter?.addEventListener("change", filterProducts);

    // Accessible FAQ accordion
    document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const panel = trigger.closest(".faq-item")?.querySelector(".accordion-panel");
            const isExpanded = trigger.getAttribute("aria-expanded") === "true";
            trigger.setAttribute("aria-expanded", String(!isExpanded));
            if (panel) panel.hidden = isExpanded;
        });
    });

    // Form validation and email hand-off
    function setupEmailForm(formId, statusId, subject) {
        const form = document.getElementById(formId);
        const status = document.getElementById(statusId);
        if (!form) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                if (status) status.textContent = "Please complete all fields correctly before submitting.";
                return;
            }

            const formData = new FormData(form);
            const name = String(formData.get("name") || formData.get("contactName") || "").trim();
            const email = String(formData.get("email") || formData.get("contactEmail") || "").trim();
            const message = String(formData.get("message") || formData.get("contactMessage") || "").trim();
            const product = String(formData.get("product") || "").trim();
            const body = [
                `Name: ${name}`,
                `Email: ${email}`,
                product ? `Product: ${product}` : "",
                "",
                message
            ].filter(Boolean).join("\n");

            if (BUSINESS_EMAIL === "your-business-email@example.com") {
                if (status) status.textContent = "Your details are valid. Add the real business email in js/script.js and in this form's action URL before enabling email delivery.";
                return;
            }

            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) submitButton.disabled = true;
            if (status) status.textContent = "Sending your message...";

            fetch(`https://formsubmit.co/ajax/${encodeURIComponent(BUSINESS_EMAIL)}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    message: body,
                    _subject: subject,
                    _captcha: "false"
                })
            })
                .then((response) => {
                    if (!response.ok) throw new Error("The message could not be sent.");
                    return response.json();
                })
                .then((result) => {
                    if (result.success === "false") throw new Error("The email service did not accept the message.");
                    if (status) status.textContent = "Thank you. Your message has been sent successfully.";
                    form.reset();
                })
                .catch(() => {
                    if (status) status.textContent = "The message could not be sent right now. Please try again later or use the business email address directly.";
                })
                .finally(() => {
                    if (submitButton) submitButton.disabled = false;
                });
        });
    }

    setupEmailForm("enquiryForm", "enquiryStatus", "Zwane Foods product enquiry");
    setupEmailForm("contactForm", "contactStatus", "Message to Zwane Foods");

    // Leaflet map: approximate city-centre markers only, not exact store addresses
    const mapElement = document.getElementById("storeMap");
    if (mapElement && window.L) {
        const johannesburg = [-26.2041, 28.0473];
        const durban = [-29.8587, 31.0218];
        const map = L.map(mapElement).setView([-28.1, 29.5], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);
        L.marker(johannesburg).addTo(map).bindPopup("Johannesburg — approximate city location");
        L.marker(durban).addTo(map).bindPopup("Durban — approximate city location");
    } else if (mapElement) {
        mapElement.innerHTML = '<p class="map-fallback">The interactive map could not load. Use the OpenStreetMap links below to view each city.</p>';
    }

    // Simple lightbox for the homepage food image
    const heroImage = document.querySelector(".hero picture img");
    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    function openLightbox(sourceImage) {
        if (!sourceImage || !lightbox || !lightboxImage) return;
        lightboxImage.src = sourceImage.dataset.full || sourceImage.currentSrc || sourceImage.src;
        lightboxImage.alt = sourceImage.alt;
        lightbox.hidden = false;
        closeLightbox?.focus();
    }

    [heroImage, ...document.querySelectorAll(".gallery-image")].filter(Boolean).forEach((image) => {
        image.addEventListener("click", () => openLightbox(image));
        image.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openLightbox(image);
            }
        });
    });
    closeLightbox?.addEventListener("click", () => {
        if (lightbox) lightbox.hidden = true;
        heroImage?.focus();
    });
    lightbox?.addEventListener("click", (event) => {
        if (event.target === lightbox) lightbox.hidden = true;
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && lightbox && !lightbox.hidden) lightbox.hidden = true;
    });
});
