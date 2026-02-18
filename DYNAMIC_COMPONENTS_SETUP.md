# Dynamic Component Loading Setup (Optional)

Currently, nav and footer components are embedded in each HTML file. To enable **dynamic component loading**, follow these options:

## Option 1: JavaScript Fetch API (Recommended for Static Sites)

### Add this script before closing `</body>`:

```html
<script>
  async function loadComponents() {
    try {
      // Load Navigation
      const navResponse = await fetch('./src/nav.html');
      const navHTML = await navResponse.text();
      document.body.insertAdjacentHTML('afterbegin', navHTML);

      // Load Footer
      const footerResponse = await fetch('./src/footer.html');
      const footerHTML = await footerResponse.text();
      document.body.insertAdjacentHTML('beforeend', footerHTML);

      // Reinitialize scripts if needed
      if (window.initializeNav) window.initializeNav();
    } catch (error) {
      console.error('Error loading components:', error);
    }
  }

  // Load components when DOM is ready
  document.addEventListener('DOMContentLoaded', loadComponents);
</script>
```

### Updated HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Head content -->
</head>
<body>
  <!-- Nav and Footer will be injected here -->

  <!-- Page-specific content -->

  <!-- Component loading script -->
  <script src="./src/load-components.js"></script>
</body>
</html>
```

---

## Option 2: Server-Side Includes (SSI)

If your server supports Server-Side Includes (.shtml files):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Head content -->
</head>
<body>
  <!--#include virtual="src/nav.html" -->

  <!-- Page-specific content -->

  <!--#include virtual="src/footer.html" -->
</body>
</html>
```

### Enable on Apache (.htaccess):
```apache
AddType text/html .html
AddOutputFilter INCLUDES .html
```

---

## Option 3: Node.js/Express with EJS

### Install dependencies:
```bash
npm install express ejs
```

### Create `server.js`:
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Cricket PEI | Official Home of Island Cricket',
    description: '...'
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Create `views/layout.ejs`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title><%= title %></title>
  <meta name="description" content="<%= description %>">
  <!-- Other head content -->
</head>
<body>
  <%- include('../partials/nav.html') %>

  <%- body %>

  <%- include('../partials/footer.html') %>
</body>
</html>
```

---

## Option 4: Static Site Generator (Hugo)

### Create `layouts/partials/nav.html`:
```html
<!-- Nav component -->
```

### Create `layouts/partials/footer.html`:
```html
<!-- Footer component -->
```

### Use in `layouts/base.html`:
```html
<!DOCTYPE html>
<html>
<head>
  {{ partial "head.html" . }}
</head>
<body>
  {{ partial "nav.html" . }}
  {{ block "main" . }}{{ end }}
  {{ partial "footer.html" . }}
</body>
</html>
```

---

## Option 5: Build Tools (Webpack/Vite)

### Install loader:
```bash
npm install html-loader
```

### Webpack config:
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
};
```

### Import in JavaScript:
```javascript
import nav from './src/nav.html';
import footer from './src/footer.html';

document.body.insertAdjacentHTML('afterbegin', nav);
document.body.insertAdjacentHTML('beforeend', footer);
```

---

## Comparison Table

| Method | Setup Difficulty | Performance | Dynamic Updates | Best For |
|--------|------------------|-------------|-----------------|----------|
| **Current (Static)** | Easy | Excellent | Manual | Static sites, simplicity |
| **Fetch API** | Easy | Good | Yes | GitHub Pages, Netlify |
| **SSI** | Medium | Excellent | Yes | Traditional hosting |
| **Express/Node.js** | Medium | Good | Yes | Full-stack apps |
| **Hugo/Jekyll** | Hard | Excellent | Build-time | Large content sites |
| **Webpack/Vite** | Hard | Excellent | Yes | Modern web apps |

---

## Recommendation

### For Quick Implementation:
Use **Option 1 (Fetch API)** - No server changes needed, works everywhere

### For Best Performance:
Use **Current Static Setup** - Fastest, simplest, no JavaScript overhead

### For Scalability:
Use **Option 3 (Express)** or **Option 4 (Hugo)** - Better for large teams

---

## Migration Steps (If Implementing Dynamic Loading)

1. **Create `src/load-components.js`**:
```javascript
async function loadComponents() {
  const components = {
    nav: './src/nav.html',
    footer: './src/footer.html'
  };

  for (const [selector, path] of Object.entries(components)) {
    const response = await fetch(path);
    const html = await response.text();
    document.body.insertAdjacentHTML(
      selector === 'nav' ? 'afterbegin' : 'beforeend',
      html
    );
  }
}

document.addEventListener('DOMContentLoaded', loadComponents);
```

2. **Update HTML files**:
```html
<!-- Remove embedded nav and footer -->
<!-- Add script before </body> -->
<script src="./src/load-components.js"></script>
```

3. **Test across all pages**

---

## Notes

- **Current setup** is production-ready and optimized
- Components are DRY (Don't Repeat Yourself) in `src/` folder
- Can migrate to dynamic loading anytime without losing functionality
- All SEO meta tags are preserved in current implementation
