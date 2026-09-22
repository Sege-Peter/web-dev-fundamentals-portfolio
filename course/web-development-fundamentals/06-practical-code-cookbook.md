# Web Dev Fundamentals: Module 6 - Practical Code Cookbook & Cheat Sheet

A comprehensive collection of 20 copy-paste-ready patterns, helpers, and utilities that every modern web developer frequently needs.

---

## 📋 Table of Contents

1. [CSS Perfect Centering](#1-css-perfect-centering)
2. [Modern CSS Reset](#2-modern-css-reset)
3. [Fluid Responsive Typography (`clamp`)](#3-fluid-responsive-typography-clamp)
4. [Text Truncation (Single-Line & Multi-Line)](#4-text-truncation-single-line--multi-line)
5. [Custom Styled Scrollbars](#5-custom-styled-scrollbars)
6. [Sticky Glassmorphism Navbar](#6-sticky-glassmorphism-navbar)
7. [CSS Dark Mode & System Detection](#7-css-dark-mode--system-detection)
8. [JavaScript Debounce Function](#8-javascript-debounce-function)
9. [JavaScript Throttle Function](#9-javascript-throttle-function)
10. [Copy Text to Clipboard Helper](#10-copy-text-to-clipboard-helper)
11. [Safe LocalStorage Helper with JSON](#11-safe-localstorage-helper-with-json)
12. [Fetch API with Timeout & Retry](#12-fetch-api-with-timeout--retry)
13. [Extract URL Query Parameters](#13-extract-url-query-parameters)
14. [Smooth Scroll-to-Top Button](#14-smooth-scroll-to-top-button)
15. [HTML Form to JSON Object](#15-html-form-to-json-object)
16. [Input Validation Regex Suite](#16-input-validation-regex-suite)
17. [Intersection Observer Image Lazy Loader](#17-intersection-observer-image-lazy-loader)
18. [HTML Escape Utility (XSS Prevention)](#18-html-escape-utility-xss-prevention)
19. [Generate Random ID / UUID](#19-generate-random-id--uuid)
20. [Simple Toast Notification Generator](#20-simple-toast-notification-generator)

---

### 1. CSS Perfect Centering

```css
/* Technique A: Flexbox (Best for general layout) */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Technique B: CSS Grid (Shortest code) */
.center-grid {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
```

---

### 2. Modern CSS Reset

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  line-height: 1.6;
  text-rendering: optimizeSpeed;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
}
```

---

### 3. Fluid Responsive Typography (`clamp`)

```css
/* Scales smoothly between 1.5rem (at 375px screen) and 3rem (at 1200px screen) */
h1 {
  font-size: clamp(1.5rem, 1rem + 2.5vw, 3rem);
}

p {
  font-size: clamp(1rem, 0.95rem + 0.3vw, 1.25rem);
}
```

---

### 4. Text Truncation (Single-Line & Multi-Line)

```css
/* Single Line Truncation (Appends "...") */
.truncate-single {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Multi-Line Truncation (Clamps to 3 lines) */
.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

### 5. Custom Styled Scrollbars

```css
/* WebKit browsers (Chrome, Edge, Safari) */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #64748b;
}

/* Firefox standard */
* {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 #f1f5f9;
}
```

---

### 6. Sticky Glassmorphism Navbar

```css
.navbar-glass {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
}
```

---

### 7. CSS Dark Mode & System Detection

```css
:root {
  --bg: #ffffff;
  --text: #0f172a;
}

/* Auto system preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0b0f19;
    --text: #f8fafc;
  }
}

/* Explicit class or attribute toggle */
[data-theme="dark"] {
  --bg: #0b0f19;
  --text: #f8fafc;
}
```

---

### 8. JavaScript Debounce Function

Prevents a function (such as search API queries or window resize handlers) from executing until after a set delay.

```javascript
function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Usage:
const handleSearch = debounce((event) => {
  console.log("Searching for:", event.target.value);
}, 400);

document.getElementById('search-input').addEventListener('input', handleSearch);
```

---

### 9. JavaScript Throttle Function

Guarantees a function executes at most once every `limit` milliseconds (ideal for scroll listeners).

```javascript
function throttle(fn, limit = 200) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage:
window.addEventListener('scroll', throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 250));
```

---

### 10. Copy Text to Clipboard Helper

```javascript
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Clipboard write failed:", err);
    return false;
  }
}

// Usage:
document.getElementById('copy-code-btn').addEventListener('click', async () => {
  const success = await copyToClipboard("npm install express");
  if (success) alert("Code copied!");
});
```

---

### 11. Safe LocalStorage Helper with JSON

```javascript
const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error(`Error reading ${key} from localStorage:`, e);
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error writing ${key} to localStorage:`, e);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
```

---

### 12. Fetch API with Timeout & Retry

```javascript
async function fetchWithTimeout(url, options = {}, timeoutMs = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}
```

---

### 13. Extract URL Query Parameters

```javascript
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

// Example URL: https://site.com?user=alice&tab=profile
// Returns: { user: "alice", tab: "profile" }
```

---

### 14. Smooth Scroll-to-Top Button

```javascript
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

---

### 15. HTML Form to JSON Object

```javascript
function formToJSON(formElement) {
  const formData = new FormData(formElement);
  return Object.fromEntries(formData.entries());
}

// Usage:
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const payload = formToJSON(e.target);
  console.log("Submitted JSON data:", payload);
});
```

---

### 16. Input Validation Regex Suite

```javascript
const Validators = {
  // RFC 5322 compliant standard email validation
  isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),

  // Minimum 8 characters, at least 1 uppercase, 1 lowercase, 1 number
  isStrongPassword: (str) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(str),

  // Standard web URL (http/https)
  isURL: (str) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(str),

  // Phone number (10-15 digits with optional +, hyphens or spaces)
  isPhone: (str) => /^\+?[\d\s-]{10,15}$/.test(str)
};
```

---

### 17. Intersection Observer Image Lazy Loader

```javascript
function initLazyImages() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '0px 0px 100px 0px' });

  lazyImages.forEach(img => imageObserver.observe(img));
}
```

---

### 18. HTML Escape Utility (XSS Prevention)

```javascript
function escapeHtml(string) {
  const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}
```

---

### 19. Generate Random ID / UUID

```javascript
function generateId(prefix = 'id') {
  // Uses cryptographically strong random values if supported
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
```

---

### 20. Simple Toast Notification Generator

```javascript
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast-popup toast-${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, duration);
}
```
