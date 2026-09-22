# 🎓 Web Development & Git/GitHub Curriculum Index

Welcome to the comprehensive course curriculum for **Git & GitHub Mastery** and **Web Development Fundamentals**.

This complete curriculum is divided into two structured learning tracks designed to take you from foundational principles to professional engineering practices.

---

## 📌 Track 1: Git & GitHub Mastery

Master distributed version control, teamwork workflows, branch management, and open-source collaboration on GitHub.

1. [**Module 1: Git Core Concepts & Environment Setup**](git-and-github/01-git-core-concepts-and-setup.md)
   - VCS comparison (Centralized vs Distributed)
   - Git's mental model: Snapshots vs Deltas
   - The Three States: Working Tree, Staging Area (Index), and Repository (`.git`)
   - Global configuration, line ending normalization (`core.autocrlf`), and SSH authentication

2. [**Module 2: Daily Git Commands & Workflow**](git-and-github/02-daily-git-commands-and-workflow.md)
   - Initializing and cloning repositories
   - Inspecting changes: `git status -s`, `git diff`, and `git diff --staged`
   - Conventional Commits standard
   - Undoing changes safely: `git restore`, `git revert`, and `git commit --amend`
   - Temporary shelving with `git stash` and configuring `.gitignore`

3. [**Module 3: Branching, Merging & Conflict Resolution**](git-and-github/03-branching-merging-and-conflicts.md)
   - Anatomy of a branch pointer
   - Branch lifecycle: creation, switching (`git switch`), and deletion
   - Fast-Forward merges vs Three-Way merges
   - Merge vs Rebase rules
   - Resolving merge conflicts step-by-step with conflict marker breakdown

4. [**Module 4: GitHub Collaboration, Pull Requests & Workflows**](git-and-github/04-github-collaboration-and-workflows.md)
   - Working with remotes: `git fetch` vs `git pull` vs `git push -u`
   - Shared Repository model vs Fork & Pull Request model
   - Crafting high-impact Pull Requests and Code Reviews
   - GitHub Actions CI/CD automation basics
   - Free static site hosting with GitHub Pages

5. [**Module 5: Git Cheatsheet & Emergency Recovery Guide**](git-and-github/05-git-cheatsheet-and-recovery.md)
   - Fixing "Detached HEAD" states
   - Rescuing lost commits using `git reflog`
   - Undoing accidental commits with `git reset`
   - Productivity aliases cheatsheet

6. [**Module 6: Hands-On Git Interactive Terminal Exercises**](git-and-github/06-hands-on-git-exercises.md)
   - 6 copy-and-run practical terminal challenges
   - Simulating and resolving real merge conflicts on your machine
   - Branch stashing and commit amendment drills

---

## 🌐 Track 2: Foundations of Modern Web Development

Learn the core technologies, browser mechanics, and modern toolchains that power the World Wide Web.

1. [**Module 1: How the Web Works & Developer Tools**](web-development-fundamentals/01-how-the-web-works-and-devtools.md)
   - The Client-Server model & URL anatomy
   - DNS resolution, TCP handshake, and TLS/HTTPS encryption
   - HTTP request/response cycle, methods, and status codes
   - The Browser Rendering Engine pipeline (DOM ➔ CSSOM ➔ Render Tree ➔ Layout ➔ Paint ➔ Compositing)
   - Browser DevTools mastery (Elements, Console, Network, Application tabs)

2. [**Module 2: Semantic HTML5 & Web Accessibility (a11y)**](web-development-fundamentals/02-semantic-html5-and-accessibility.md)
   - HTML5 document boilerplate and mobile viewport meta tag
   - Landmark semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
   - Proper heading hierarchy (`<h1>`-`<h6>`) rules
   - Accessible form controls, labels, and ARIA attributes
   - Media semantics and SEO best practices

3. [**Module 3: Modern CSS3 Layouts & Architecture**](web-development-fundamentals/03-modern-css3-layouts-and-architecture.md)
   - The Cascade, Specificity calculations, and Inheritance
   - The CSS Box Model and universal `box-sizing: border-box` reset
   - Modern Flexbox 1D layout (axes, alignment, wrapping, flex factors)
   - Modern CSS Grid 2D layout (`repeat(auto-fill, minmax(...))`, `fr` units)
   - Mobile-First responsive design & media queries
   - CSS Custom Properties (Variables) and Dark/Light theming

4. [**Module 4: Vanilla JavaScript (ES6+) & DOM Interactivity**](web-development-fundamentals/04-vanilla-javascript-and-dom.md)
   - Single-threaded execution, Call Stack, and Event Loop
   - Primitive vs Reference types
   - ES6+ syntax: `const`/`let`, arrow functions, template strings, destructuring, spread/rest
   - Functional array methods: `.filter()`, `.map()`, `.reduce()`
   - DOM manipulation (selecting, mutating, dynamic node creation)
   - Event handling, Bubbling, Capturing, and Event Delegation
   - Asynchronous JS with `fetch()` and `async/await`
   - Client-side data persistence with `localStorage`

5. [**Module 5: Developer Tools, Security & Engineering Roadmap**](web-development-fundamentals/05-developer-ecosystem-tools-and-roadmap.md)
   - Node.js & npm package management (semantic versioning, dependencies)
   - Code quality linters & formatters (ESLint, Prettier)
   - Web performance & Core Web Vitals (LCP, INP, CLS)
   - Core web security: XSS prevention, CORS rules, and HTTPS
   - Complete 4-phase Full-Stack Engineering Roadmap

6. [**Module 6: Practical Code Cookbook & Cheat Sheet**](web-development-fundamentals/06-practical-code-cookbook.md)
   - 20 copy-paste-ready HTML, CSS, & Vanilla JS code recipes
   - Perfect centering, responsive typography, debounce, safe storage, and regex suite

---

## 🧪 Standalone Copyable Labs & Component Templates

Check out the [`practical-examples/`](../practical-examples/README.md) directory for 5 self-contained, fully functioning starter labs learners can copy directly:

1. [**Accessible Interactive Modal**](../practical-examples/01-accessible-interactive-modal/README.md)
2. [**Responsive Navbar Drawer**](../practical-examples/02-responsive-navbar-drawer/README.md)
3. [**Accessible FAQ Accordion**](../practical-examples/03-faq-accordion-component/README.md)
4. [**Dynamic Task Tracker with LocalStorage**](../practical-examples/04-dynamic-todo-localstorage/README.md)
5. [**Async Fetch Developer Quote Generator**](../practical-examples/05-async-fetch-quote-generator/README.md)
