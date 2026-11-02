// Wait until the webpage has finished loading
document.addEventListener("DOMContentLoaded", function () {

    // Find the enquiry form
    const enquiryForm = document.getElementById("enquiryForm");

    // Check if the enquiry form exists on the page
    if (enquiryForm) {

        // Run this code when the form is submitted
        enquiryForm.addEventListener("submit", function (event) {

            // Stop the form from refreshing the page
            event.preventDefault();

            // Display a confirmation message
            alert("Thank you! Your enquiry has been submitted.");

            // Clear the form
            enquiryForm.reset();
        });
    }


    // Find the contact form
    const contactForm = document.getElementById("contactForm");

    // Check if the contact form exists
    if (contactForm) {

        // Run this code when the contact form is submitted
        contactForm.addEventListener("submit", function (event) {

            // Stop the form from refreshing the page
            event.preventDefault();

            // Display a confirmation message
            alert("Thank you for contacting Zwane Foods.");

            // Clear the form
            contactForm.reset();
        });
    }

});