/**
 * Web Development Fundamentals Portfolio - Client Application
 * Demonstrating: DOM Manipulation, Event Listeners, LocalStorage,
 * Array Methods, Dynamic Rendering, and Form Validation.
 */

'use strict';

// ==========================================================================
// 1. DATA: COURSE PROJECTS & LAB ASSIGNMENTS
// ==========================================================================
const courseProjects = [
  {
    id: 1,
    title: "Semantic Documentation Page",
    category: "html-css",
    categoryLabel: "HTML & CSS",
    icon: "📄",
    description: "A comprehensive reference guide built using purely semantic HTML5 elements (article, section, nav) and CSS custom properties.",
    tags: ["HTML5", "CSS3", "Typography", "Accessibility"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Responsive Flexbox & Grid Gallery",
    category: "html-css",
    categoryLabel: "HTML & CSS",
    icon: "🎨",
    description: "A dynamic photo gallery that transitions seamlessly between mobile, tablet, and widescreen layouts using CSS Grid and Flexbox.",
    tags: ["CSS Grid", "Flexbox", "Media Queries", "UI/UX"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Interactive DOM Task Manager",
    category: "javascript",
    categoryLabel: "JavaScript",
    icon: "✅",
    description: "A productivity app featuring full CRUD capabilities, event delegation, client-side data persistence via localStorage, and filtering.",
    tags: ["ES6 JS", "DOM API", "LocalStorage", "Event Delegation"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Web Development Quiz App",
    category: "javascript",
    categoryLabel: "JavaScript",
    icon: "❓",
    description: "An interactive multiple-choice quiz testing core HTML/CSS/JS knowledge with score tracking, countdown timer, and immediate feedback.",
    tags: ["JavaScript", "State Management", "DOM Events", "JSON"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Async Weather & Fetch Dashboard",
    category: "capstone",
    categoryLabel: "Capstone",
    icon: "⛅",
    description: "A client-side dashboard that consumes public REST APIs using Promises and async/await to render real-time weather and forecast data.",
    tags: ["Async/Await", "Fetch API", "REST API", "Error Handling"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Course Capstone: Personal Brand Site",
    category: "capstone",
    categoryLabel: "Capstone",
    icon: "🚀",
    description: "Final comprehensive portfolio project integrating all course milestones: responsive architecture, clean semantics, and vanilla JS interactions.",
    tags: ["Full Stack Prep", "Git Workflow", "CI/CD", "Responsive"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

// ==========================================================================
// 2. DOM ELEMENTS
// ==========================================================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');
const formAlert = document.getElementById('form-alert');

// ==========================================================================
// 3. THEME CONTROLLER (LIGHT / DARK MODE)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('webdev-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('webdev-theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// ==========================================================================
// 4. MOBILE NAVIGATION DRAWER
// ==========================================================================
function initNavigation() {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a navigation link is clicked
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ==========================================================================
// 5. DYNAMIC PROJECTS RENDERING & FILTERING
// ==========================================================================
function renderProjects(filter = 'all') {
  if (!projectsGrid) return;

  // Filter projects by category
  const filteredList = filter === 'all' 
    ? courseProjects 
    : courseProjects.filter(p => p.category === filter);

  projectsGrid.innerHTML = '';

  if (filteredList.length === 0) {
    projectsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  filteredList.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    const tagsHtml = project.tags
      .map(tag => `<span class="tech-pill">${tag}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-thumbnail">
        <span class="project-icon" aria-hidden="true">${project.icon}</span>
        <span class="project-category-tag">${project.categoryLabel}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech">
          ${tagsHtml}
        </div>
        <div class="project-links">
          <a href="${project.demoUrl}" class="project-link" aria-label="Live demo for ${project.title}">
            Live Demo ↗
          </a>
          <a href="${project.githubUrl}" class="project-link" aria-label="Source code for ${project.title}">
            Source Code ↗
          </a>
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });
}

function initProjectFilters() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });
}

// ==========================================================================
// 6. ACCESSIBLE FORM VALIDATION & HANDLING
// ==========================================================================
function initContactForm() {
  if (!contactForm) return;

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showFieldError(nameInput, true);
      isValid = false;
    } else {
      showFieldError(nameInput, false);
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showFieldError(emailInput, true);
      isValid = false;
    } else {
      showFieldError(emailInput, false);
    }

    // Validate Message (min 10 characters)
    if (messageInput.value.trim().length < 10) {
      showFieldError(messageInput, true);
      isValid = false;
    } else {
      showFieldError(messageInput, false);
    }

    if (isValid) {
      // Simulate successful submission
      showFormAlert(`Thank you, ${nameInput.value.trim()}! Your message has been received.`, 'success');
      contactForm.reset();
    }
  });

  // Clear errors on input
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      showFieldError(input, false);
    });
  });
}

function showFieldError(inputElement, isError) {
  const formGroup = inputElement.closest('.form-group');
  if (!formGroup) return;
  if (isError) {
    formGroup.classList.add('has-error');
  } else {
    formGroup.classList.remove('has-error');
  }
}

function showFormAlert(message, type) {
  if (!formAlert) return;
  formAlert.textContent = message;
  formAlert.className = `form-alert ${type}`;
  formAlert.classList.remove('hidden');

  setTimeout(() => {
    formAlert.classList.add('hidden');
  }, 4500);
}

// ==========================================================================
// 7. ACTIVE NAVIGATION LINK ON SCROLL (INTERSECTION OBSERVER)
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// ==========================================================================
// 8. APPLICATION INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  renderProjects('all');
  initProjectFilters();
  initContactForm();
  initScrollSpy();
  console.log("Web Development Fundamentals Portfolio loaded successfully.");
});
