# Zwane Foods Website

## Student Information

- **Name:** Buhle Mdlalose
- **Student Number:** ST10522161
- **Institution:** Rosebank College
- **Module:** Web Development (WEDE5020)
- **Year:** 2026

## Project Overview

Zwane Foods is a fictional food business that provides fresh groceries, bakery products, beverages and ready-made meals. This website gives customers information about the business, its products, store locations and ways to contact the business.

## Website Goals

- Introduce Zwane Foods and its services.
- Display product categories and starting prices.
- Allow visitors to search and filter product categories.
- Provide product enquiry and general contact forms.
- Share store information for Johannesburg and Durban.
- Provide a responsive and accessible experience on desktop, tablet and mobile devices.

## Pages

1. `index.html` — Home page and food photograph.
2. `about.html` — Business information, mission, vision, team and FAQ accordion.
3. `products.html` — Product categories with search and category filtering.
4. `enquiry.html` — Product enquiry form with client-side validation.
5. `contact.html` — Store information, approximate city map and general contact form.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, media queries and relative units)
- JavaScript (DOM manipulation, form validation, filtering and interactive features)
- Leaflet and OpenStreetMap for the location map
- Git and GitHub for version control

## Project Structure

```text
ZwaneFoods/
├── css/
│   └── style.css
├── images/
│   ├── food.jpg
│   ├── food-medium.jpg
│   └── food-small.jpg
├── js/
│   └── script.js
├── 3.4.1.jpg
├── 3.4.2.jpg
├── 3.4.3 Tablet.jpg
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
└── README.md
```

## Part 1 — Planning and HTML Structure

Part 1 covered the website proposal, target audience, content research, sitemap, file organisation and the five initial HTML pages.

## Part 2 — CSS Styling and Responsive Design

Part 2 added an external stylesheet, base styles, typography, Flexbox and Grid layouts, visual styling and responsive breakpoints. The site was tested at desktop, tablet and mobile viewport sizes. Responsive images were added using the `picture`, `srcset` and `sizes` features.

## Part 3 — Functionality and SEO

### JavaScript functionality

- Added product search that filters product cards as the visitor types.
- Added a category selector to filter groceries, bakery products, beverages and ready-made meals.
- Added a no-results message and live product count.
- Added an accessible FAQ accordion on the About page.
- Added a lightbox so the homepage food image can be enlarged and closed.
- Added an interactive Leaflet map on the Contact page. Its Johannesburg and Durban markers show approximate city-centre locations, not verified store coordinates.

### Form validation and submission

Both forms validate required fields, email format and message length before attempting submission. They use the FormSubmit AJAX endpoint so messages can be sent without navigating away from the page.

**Important setup before publishing:** replace `your-business-email@example.com` in `js/script.js`, `enquiry.html` and `contact.html` with the real business email address. FormSubmit may require the recipient to confirm/activate the first submission. Until a real email address is configured and activated, the forms validate the information but do not deliver messages.

### Search engine optimisation

- Added a unique page title and meta description to each page.
- Added keyword, author, robots and theme-colour metadata.
- Added canonical page URLs and Open Graph metadata to improve link previews when pages are shared.
- Kept page headings in a meaningful hierarchy.
- Used descriptive alternative text for the homepage food image.
- Kept internal navigation links between the five pages.
- Added `robots.txt` and `sitemap.xml`.
- Used responsive layouts and image variants to support mobile usability and performance.

### Off-page and local SEO

The website can be promoted by sharing its published URL on relevant social media profiles and asking relevant local directories or partner websites to link to it. Open Graph metadata was added to make shared page links display a title and description. Actual social posts and backlinks still need to be created outside the website. The contact page includes Johannesburg and Durban location information. The map markers are approximate city locations and should be replaced with verified store coordinates if the business details become real.

## Part 2 Feedback and Corrections

The Part 2 document supplied for this project contains the website implementation and screenshots, but it does not include readable lecturer comments or a detailed Part 2 marks/feedback breakdown. The changes recorded in this Part 3 changelog therefore include corrections identified during a review of the supplied project files. Any lecturer-specific corrections should be added once the marked feedback is available.

## Changelog

### Version 1.0 — Initial website

- Created the project folder and five HTML pages.
- Added the initial page content and navigation links.

### Version 1.1 — Part 1 content

- Added the Zwane Foods business overview, products, store information and forms.
- Added the README project overview and sitemap.

### Version 2.0 — Part 2 styling

- Added the shared external CSS stylesheet.
- Added base styles, typography, colours, buttons, cards and page layouts.
- Used Flexbox and CSS Grid to organise page content.
- Added hover, focus and active states.

### Version 2.1 — Part 2 responsive design

- Added desktop, tablet and mobile media queries.
- Used relative units for scalable spacing and text.
- Added responsive food image variants using `picture`, `srcset` and `sizes`.
- Tested the layout at desktop, tablet and mobile viewport sizes.

### Version 3.0 — Part 3 functionality and SEO

- Corrected the JavaScript filename mismatch: the original file was named `scipt.js`, while the HTML pages referenced `script.js`. Renamed the file and linked the correctly named script to all pages.
- Added live product search, category filtering, a product count and a no-results message.
- Added an accessible FAQ accordion to the About page.
- Added an image lightbox to the homepage.
- Added an interactive Leaflet map with clearly labelled approximate Johannesburg and Durban city-centre markers.
- Added client-side form validation and an AJAX email-submission workflow to the enquiry and contact forms.
- Added unique SEO titles and meta descriptions, keyword metadata, author metadata and robots directives to all five pages.
- Added `robots.txt` and `sitemap.xml`.
- Resized and compressed the three food photographs to reduce image file sizes while retaining separate desktop, tablet and mobile versions.
- Updated the README with Part 3 functionality, setup requirements, references and this changelog.

## Testing Checklist

- [ ] Open each of the five HTML pages and test the navigation links.
- [ ] Search for a product and test each category filter.
- [ ] Search for a term with no matches and confirm the no-results message appears.
- [ ] Open and close each FAQ item using the accordion button.
- [ ] Open and close the homepage image lightbox, including with the Escape key.
- [ ] Submit each form with missing or invalid information and confirm validation appears.
- [ ] Configure and activate the real email address, then test successful form delivery.
- [ ] Check the contact map and its external map links.
- [ ] Test desktop, tablet and mobile layouts in browser Developer Tools.
- [ ] Check that `robots.txt` and `sitemap.xml` load after deployment.

## Deployment — GitHub Pages

The repository can be published free using GitHub Pages:

1. Open the repository: https://github.com/Buhlezwane/zwane-foods-website
2. Select **Settings**, then **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. Wait for GitHub Pages to publish the website. The expected project URL is https://buhlezwane.github.io/zwane-foods-website/.
6. Open the published URL and test every page and feature.

## GitHub Repository

https://github.com/Buhlezwane/zwane-foods-website

## References

- FormSubmit. (n.d.). *FormSubmit AJAX documentation*. https://formsubmit.co/
- Leaflet. (n.d.). *Leaflet quick start guide*. https://leafletjs.com/examples/quick-start/
- Mozilla Developer Network. (n.d.). *HTML forms: Validation*. https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
- Mozilla Developer Network. (n.d.). *Responsive images*. https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images
- OpenStreetMap. (n.d.). *Copyright and attribution*. https://www.openstreetmap.org/copyright
- Google Search Central. (n.d.). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide
