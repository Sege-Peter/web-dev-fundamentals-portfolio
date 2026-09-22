# Practical Lab 01: Accessible Modal Window

A production-ready, standalone, accessible modal component built with pure HTML, CSS, and Vanilla JavaScript.

---

## 🎯 What Learners Will Master

1. **WAI-ARIA Dialog Standards**:
   - `role="dialog"` & `aria-modal="true"`.
   - `aria-labelledby` and `aria-describedby` linking dialog headings to assistive tech.
2. **Keyboard Focus Trapping**:
   - Keeping keyboard focus cycling strictly inside the modal while open.
   - Restoring focus back to the opening trigger button when closed.
3. **Event Management**:
   - Listening to global keydown for the <kbd>Escape</kbd> key.
   - Backdrop click detection via `event.target === modalOverlay`.
   - Scroll-locking the background body.

---

## 📋 Quick Copy-Paste Guide

1. Copy the `modal-overlay` container markup into your HTML before `</body>`.
2. Add the CSS rules to your stylesheet.
3. Initialize the `openModal()` and `closeModal()` handlers in your JavaScript.

Test locally by opening `index.html` in your browser.
