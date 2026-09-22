# Practical Lab 04: Dynamic Todo Tracker with LocalStorage

A full CRUD (Create, Read, Update, Delete) state-driven application with browser persistence and XSS injection defense.

---

## 🎯 What Learners Will Master

1. **State-Driven UI Architecture**:
   - Single source of truth array `todos = [...]`.
   - Re-rendering UI declaratively from current state and filter.
2. **Browser Persistence (`localStorage`)**:
   - `JSON.stringify()` serialization when mutating tasks.
   - `JSON.parse()` deserialization upon page startup.
3. **Event Delegation Pattern**:
   - Listening to click events on the parent `<ul>` instead of binding individual event handlers to every single task item.
4. **Security Best Practice (XSS Defense)**:
   - Sanitizing untrusted user inputs with `escapeHtml()` before rendering to the DOM.
