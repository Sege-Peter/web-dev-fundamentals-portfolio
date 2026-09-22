/**
 * Practical Example 02: Responsive Navbar Drawer Controller
 * Handles hamburger toggling, ARIA states, backdrop clicks,
 * Escape key dismissal, and link selection.
 */

'use strict';

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const drawerOverlay = document.getElementById('drawer-overlay');
const navLinks = document.querySelectorAll('.nav-link, .btn-nav');

function toggleDrawer() {
  const isOpen = navMenu.classList.toggle('is-open');
  hamburger.classList.toggle('is-active');
  drawerOverlay.classList.toggle('is-active');
  
  // Synchronize accessibility attribute
  hamburger.setAttribute('aria-expanded', String(isOpen));
  
  // Prevent background scroll when drawer is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeDrawer() {
  navMenu.classList.remove('is-open');
  hamburger.classList.remove('is-active');
  drawerOverlay.classList.remove('is-active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

// Event Listeners
hamburger.addEventListener('click', toggleDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Close menu when clicking on any link inside drawer
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('is-open')) {
      closeDrawer();
    }
  });
});

// Close menu on Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu.classList.contains('is-open')) {
    closeDrawer();
  }
});
