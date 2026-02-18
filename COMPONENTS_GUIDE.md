# Shared Components Guide

This project now uses shared components for navigation and footer across all pages.

## Components Location
- **Navigation**: `src/nav.html`
- **Footer**: `src/footer.html`
- **Head/SEO Template**: `src/head-seo.html`

## How to Use

### For Static HTML (Current Setup)
Components are embedded directly in each HTML file. Copy the content from the respective files.

### For Dynamic/Server-Side Rendering (Future Enhancement)
You can use server-side includes or a build tool like:
- PHP: `<?php include('src/nav.html'); ?>`
- Node.js/Express: Template engines like EJS or Handlebars
- Build tools: Gulp, Webpack, Vite

## Page Structure

Each page should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include shared head-seo.html content -->
    <!-- Add page-specific SEO meta tags -->
    <title>Page Title | Cricket PEI</title>
</head>
<body>
    <!-- Include nav.html content -->

    <!-- Page-specific content -->

    <!-- Include footer.html content -->
</body>
</html>
```

## Pages to Update
- ✅ index.html
- ✅ about.html
- ✅ board.html
- ✅ gallery.html
- ✅ programs.html
- ✅ schedule.html
- ✅ privacy.html

## SEO Meta Tags by Page

### Home (index.html)
- Title: "Cricket PEI | Official Home of Island Cricket"
- Description: Main landing page for Cricket PEI

### About (about.html)
- Title: "Our Story | Cricket PEI"
- Description: Learn about Cricket PEI's mission and history

### Board (board.html)
- Title: "Leadership | Cricket PEI"
- Description: Meet the leadership team of Cricket PEI

### Gallery (gallery.html)
- Title: "Match Gallery | Cricket PEI"
- Description: Explore photos from cricket matches on PEI

### Programs (programs.html)
- Title: "Cricket Programs | Cricket PEI"
- Description: Discover cricket programs available on PEI

### Schedule (schedule.html)
- Title: "CCL Schedule | Cricket PEI"
- Description: View the CCL cricket schedule

### Privacy (privacy.html)
- Title: "Privacy Policy | Cricket PEI"
- Description: Privacy policy for Cricket PEI
