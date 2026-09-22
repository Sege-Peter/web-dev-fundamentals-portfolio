# Web Dev Fundamentals: Module 3 - Modern CSS3 Layouts & Architecture

CSS (Cascading Style Sheets) turns raw structural markup into responsive, accessible, beautiful interfaces across screens of any resolution.

---

## 1. The Core Triad: Cascade, Specificity & Inheritance

### 1. Specificity Hierarchy
When multiple conflicting rules match an element, specificity determines the winner:

```text
Inline Styles (style="...") ──> (1, 0, 0, 0)
IDs (#header)               ──> (0, 1, 0, 0)
Classes, Attributes (.btn)  ──> (0, 0, 1, 0)
Elements, Pseudo-elements   ──> (0, 0, 0, 1)
```

> [!TIP]
> Avoid using IDs for CSS styling or using `!important`. Style with single or double class selectors for maintainable code.

### 2. Inheritance
Some properties inherit down from parents to children automatically (`color`, `font-family`, `line-height`), while layout properties (`margin`, `padding`, `border`, `width`) do not.

---

## 2. The CSS Box Model & Border-Box

Every element rendered on a web page is surrounded by a rectangular box:

```text
+------------------------------------------+
|                 MARGIN                   |
|  +------------------------------------+  |
|  |              BORDER                |  |
|  |  +------------------------------+  |  |
|  |  |           PADDING            |  |  |
|  |  |  +------------------------+  |  |  |
|  |  |  |        CONTENT         |  |  |  |
|  |  |  +------------------------+  |  |  |
|  |  +------------------------------+  |  |
|  +------------------------------------+  |
+------------------------------------------+
```

### The Standard CSS Reset:
By default in legacy CSS (`content-box`), adding padding and borders makes an element wider than its declared `width`. Use `border-box` so that width includes padding and border:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

---

## 3. Mastering Flexbox (1-Dimensional Layouts)

Flexbox arranges items along a **single axis** (either a row or a column).

```css
.nav-container {
  display: flex;
  flex-direction: row;            /* Main axis direction */
  justify-content: space-between; /* Alignment along MAIN axis */
  align-items: center;            /* Alignment along CROSS axis */
  gap: 1.5rem;                    /* Modern gap spacing between items */
}

.nav-item {
  flex: 1; /* Shorthand for: flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}
```

### Flex Alignment Cheat Sheet:
- `justify-content`: `flex-start` | `center` | `flex-end` | `space-between` | `space-around` | `space-evenly`
- `align-items`: `stretch` | `center` | `flex-start` | `flex-end` | `baseline`

---

## 4. Mastering CSS Grid (2-Dimensional Layouts)

CSS Grid arranges items simultaneously across **both rows and columns**.

```css
/* Responsive, auto-wrapping card grid without media queries! */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
```

- `repeat(auto-fill, ...)`: Fills the container with as many columns as will fit.
- `minmax(280px, 1fr)`: Each column must be at least `280px` wide, but can expand evenly up to `1fr` (fraction of remaining space).

---

## 5. Mobile-First Responsive Design

Mobile-first means designing the core layout for small screens first, then layering on complexity as screen width expands using `@media (min-width: ...)`:

```css
/* Base styles (Mobile Phone: 0px and up) */
.hero-layout {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

/* Tablet (768px and up) */
@media (min-width: 768px) {
  .hero-layout {
    padding: 3rem;
  }
}

/* Desktop Monitor (1024px and up) */
@media (min-width: 1024px) {
  .hero-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}
```

---

## 6. CSS Custom Properties (Variables) & Theming

CSS variables allow reusable design tokens that can change dynamically at runtime:

```css
:root {
  --font-main: 'Inter', sans-serif;
  --color-primary: #3b82f6;
  --bg-surface: #ffffff;
  --text-main: #0f172a;
}

[data-theme="dark"] {
  --bg-surface: #0f172a;
  --text-main: #f8fafc;
  --color-primary: #60a5fa;
}

body {
  background-color: var(--bg-surface);
  color: var(--text-main);
  font-family: var(--font-main);
  transition: background-color 0.3s ease;
}
```
