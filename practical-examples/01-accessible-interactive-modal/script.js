/**
 * Practical Example 01: Accessible Modal Window Controller
 * Features:
 *  - Focus trapping inside modal
 *  - Escape key handling
 *  - Background scroll lock
 *  - ARIA attribute synchronizing
 *  - Return focus to trigger button on close
 */

'use strict';

const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const cancelModalBtn = document.getElementById('cancel-modal-btn');
const confirmModalBtn = document.getElementById('confirm-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');

let lastFocusedElement = null;

// Selectable interactive elements within the modal for focus trapping
const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function openModal() {
  lastFocusedElement = document.activeElement; // Remember what had focus
  
  modalOverlay.classList.add('is-open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // Focus the first interactive element inside modal
  const focusableElements = modalOverlay.querySelectorAll(focusableSelector);
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }

  // Attach global keyboard listeners
  document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
  modalOverlay.classList.remove('is-open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  // Remove listener
  document.removeEventListener('keydown', handleKeyDown);

  // Return focus back to the button that opened it
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function handleKeyDown(event) {
  // Close on Escape key
  if (event.key === 'Escape' || event.key === 'Esc') {
    closeModal();
    return;
  }

  // Trap Focus when user presses Tab
  if (event.key === 'Tab') {
    const focusable = modalOverlay.querySelectorAll(focusableSelector);
    if (focusable.length === 0) return;

    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    if (event.shiftKey) { // Shift + Tab (backward)
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else { // Tab (forward)
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }
}

// Event Listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
cancelModalBtn.addEventListener('click', closeModal);
confirmModalBtn.addEventListener('click', () => {
  alert("Action confirmed!");
  closeModal();
});

// Close when clicking outside dialog (on backdrop overlay)
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
