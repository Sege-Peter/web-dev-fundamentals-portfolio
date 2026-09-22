# Web Dev Fundamentals: Module 2 - Semantic HTML5 & Web Accessibility (a11y)

HTML (HyperText Markup Language) is the structural skeleton of every web application. Writing clean, semantic, accessible HTML ensures your pages are usable by everyone—including screen readers, assistive technology, and search engine crawlers.

---

## 1. The Standard HTML5 Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding ensures correct rendering of global symbols and emojis -->
  <meta charset="UTF-8" />
  
  <!-- Viewport meta tag: ESSENTIAL for responsive mobile rendering -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <meta name="description" content="Concise summary for search engine results (SEO)." />
  <title>Accessible Web Development Document</title>

  <!-- External Stylesheet -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- All visible user interface components live here -->
</body>
</html>
```

### Why the Viewport Meta Tag Matters:
Without `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, mobile browsers assume a desktop monitor layout (~980px width) and shrink the page down to fit on a mobile screen, forcing users to pinch-to-zoom.

---

## 2. Semantic Landmarks vs. `<div>` Soup

Non-semantic elements (`<div>`, `<span>`) carry zero semantic meaning; they are purely generic style containers.

Semantic elements describe their content and meaning to browsers, search engines, and screen reader users:

| Semantic Tag | Purpose & Usage |
| :--- | :--- |
| `<header>` | Introductory content, branding, logo, or navigational aid for a page or section. |
| `<nav>` | Section of major site navigation links. |
| `<main>` | The unique, central content of the document. Must only appear once per page. |
| `<section>` | A standalone thematic grouping of content, typically with a heading. |
| `<article>` | Self-contained, independently distributable content (e.g., blog post, product card, forum message). |
| `<aside>` | Indirectly related sidebar content, callouts, or glossaries. |
| `<footer>` | Closing information: copyright, author, legal links, back-to-top. |

---

## 3. Heading Hierarchy Rules

Heading tags (`<h1>` through `<h6>`) construct the document outline:

- **Rule 1**: Exactly one `<h1>` per page representing the core subject.
- **Rule 2**: Never skip heading levels (e.g. going from `<h2>` directly to `<h4>` breaks screen reader table-of-contents navigation).
- **Rule 3**: Never choose a heading tag based on visual text size (use CSS for sizing).

---

## 4. Accessible, Bulletproof Forms

Forms are the primary interactive channel for users. Accessible form markup is mandatory:

```html
<form action="/api/contact" method="POST" class="contact-form">
  <!-- Every input MUST be associated with a <label> via 'id' and 'for' -->
  <div class="form-group">
    <label for="user-email">Email Address <span aria-hidden="true">*</span></label>
    <input 
      type="email" 
      id="user-email" 
      name="email" 
      placeholder="you@example.com" 
      required 
      aria-required="true"
      autocomplete="email"
    />
  </div>

  <div class="form-group">
    <label for="user-message">Your Message</label>
    <textarea 
      id="user-message" 
      name="message" 
      rows="4" 
      required
    ></textarea>
  </div>

  <button type="submit" class="btn btn-primary">Submit Message</button>
</form>
```

> [!IMPORTANT]
> A placeholder is **not** a replacement for a `<label>`. Placeholders disappear upon typing and fail accessibility contrast requirements.

---

## 5. Media & Accessibility (a11y) Essentials

### Accessible Images
```html
<!-- Meaningful content image: describe what is depicted -->
<img src="diagram.png" alt="Diagram showing the client-server request cycle" loading="lazy" />

<!-- Purely decorative image: use empty alt="" so screen readers ignore it -->
<img src="decorative-blob.svg" alt="" aria-hidden="true" />
```

### Links vs. Buttons
- **Use `<a>` (Hyperlink)** when navigating to a new URL, page, or anchor `#section`.
- **Use `<button>`** when triggering an action on the current page (opening a modal, submitting a form, toggling a menu).

### Key WAI-ARIA Attributes
- `aria-label`: Provides an accessible text name for icon-only buttons (e.g., `<button aria-label="Close dialog">✕</button>`).
- `aria-expanded`: Informs screen readers if a collapsible element or drawer is currently `true` or `false`.
- `aria-hidden="true"`: Hides purely visual elements or icons from assistive tech.
