/**
 * Practical Example 03: FAQ Accordion Controller
 * Demonstrates:
 *  - Event delegation on accordion container
 *  - Modern CSS Grid 0fr -> 1fr height animation
 *  - Accessibility ARIA state tracking
 *  - Single-open accordion logic (closing sibling tabs)
 */

'use strict';

const accordion = document.getElementById('faq-accordion');

accordion.addEventListener('click', (event) => {
  const trigger = event.target.closest('.accordion-trigger');
  if (!trigger) return;

  const contentId = trigger.getAttribute('aria-controls');
  const content = document.getElementById(contentId);
  if (!content) return;

  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

  // Option: Single-open accordion behavior (Close other items)
  const allTriggers = accordion.querySelectorAll('.accordion-trigger');
  const allContents = accordion.querySelectorAll('.accordion-content');

  allTriggers.forEach(t => t.setAttribute('aria-expanded', 'false'));
  allContents.forEach(c => c.classList.remove('is-open'));

  // Toggle clicked item
  if (!isExpanded) {
    trigger.setAttribute('aria-expanded', 'true');
    content.classList.add('is-open');
  }
});

// Keyboard navigation (Arrow Up / Arrow Down support)
accordion.addEventListener('keydown', (event) => {
  const triggers = Array.from(accordion.querySelectorAll('.accordion-trigger'));
  const activeIndex = triggers.indexOf(document.activeElement);

  if (activeIndex === -1) return;

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const nextIndex = (activeIndex + 1) % triggers.length;
    triggers[nextIndex].focus();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const prevIndex = (activeIndex - 1 + triggers.length) % triggers.length;
    triggers[prevIndex].focus();
  }
});
