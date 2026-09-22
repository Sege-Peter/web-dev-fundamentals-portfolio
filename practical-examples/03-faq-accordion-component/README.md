# Practical Lab 03: Accessible FAQ Accordion Component

A modern FAQ Accordion using modern CSS Grid (`grid-template-rows: 0fr` to `1fr`) for transitions, keyboard navigation (Arrow Up/Down keys), and ARIA control attributes.

---

## 🎯 What Learners Will Master

1. **Modern CSS Height Transition Hack**:
   - Animate from height 0 to dynamic auto content height smoothly using `grid-template-rows: 0fr` ➔ `1fr` without hardcoding pixel heights or calculating `offsetHeight`.
2. **Accessible Keyboard Navigation**:
   - Tab into triggers.
   - Use <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys to navigate between questions.
3. **Event Delegation**:
   - A single listener on `#faq-accordion` captures clicks from any trigger efficiently.
