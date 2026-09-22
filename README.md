# 🌐 Web Development Fundamentals Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A clean, modern, fully responsive web developer portfolio built from scratch with **pure Semantic HTML5, modern CSS3 (Flexbox & CSS Grid), and Vanilla JavaScript (ES6+)**.

Designed specifically as a template and milestone showcase for **Web Development Fundamentals Courses**, bootcamps, and foundational computer science programs.

---

## 📖 Table of Contents

- [📚 Complete Course Curriculum (Git & Web Dev)](#-complete-course-curriculum)
- [🌟 Features & Learning Concepts](#-features--learning-concepts)
- [📂 Project Directory Structure](#-project-directory-structure)
- [🚀 Quick Start (Running Locally)](#-quick-start-running-locally)
- [📦 How to Publish this Public Repository to GitHub](#-how-to-publish-this-public-repository-to-github)
- [🌐 Free Hosting via GitHub Pages](#-free-hosting-via-github-pages)
- [🧱 Course Fundamentals Breakdown](#-course-fundamentals-breakdown)
- [📝 Customization Guide](#-customization-guide)
- [📜 License](#-license)

---

## 📚 Complete Course Curriculum

This repository includes a complete, self-paced course curriculum stored directly in the [`course/`](course/README.md) directory:

### 🐙 Track 1: Git & GitHub Mastery
- [**Module 1: Git Core Concepts & Environment Setup**](course/git-and-github/01-git-core-concepts-and-setup.md)
- [**Module 2: Daily Git Commands & Workflow**](course/git-and-github/02-daily-git-commands-and-workflow.md)
- [**Module 3: Branching, Merging & Conflict Resolution**](course/git-and-github/03-branching-merging-and-conflicts.md)
- [**Module 4: GitHub Collaboration, Pull Requests & Workflows**](course/git-and-github/04-github-collaboration-and-workflows.md)
- [**Module 5: Git Cheatsheet & Emergency Recovery Guide**](course/git-and-github/05-git-cheatsheet-and-recovery.md)

### 🌐 Track 2: Foundations of Modern Web Development
- [**Module 1: How the Web Works & Developer Tools**](course/web-development-fundamentals/01-how-the-web-works-and-devtools.md)
- [**Module 2: Semantic HTML5 & Web Accessibility (a11y)**](course/web-development-fundamentals/02-semantic-html5-and-accessibility.md)
- [**Module 3: Modern CSS3 Layouts & Architecture**](course/web-development-fundamentals/03-modern-css3-layouts-and-architecture.md)
- [**Module 4: Vanilla JavaScript (ES6+) & DOM Interactivity**](course/web-development-fundamentals/04-vanilla-javascript-and-dom.md)
- [**Module 5: Developer Tools, Security & Engineering Roadmap**](course/web-development-fundamentals/05-developer-ecosystem-tools-and-roadmap.md)

---

## 🌟 Features & Learning Concepts

- **100% Native Web Standards**: Zero external frameworks, bundlers, or heavy library dependencies.
- **Semantic HTML5**: Utilizes landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`) for accessibility (a11y) and SEO.
- **Modern CSS Architecture**:
  - CSS Custom Properties (Variables) for theming.
  - Full Dark Mode & Light Mode support with `localStorage` persistence and automatic system preference detection (`prefers-color-scheme`).
  - 1D Layouts with **Flexbox** & 2D Layouts with **CSS Grid**.
  - Mobile-first responsive navigation drawer and media queries.
- **Vanilla JavaScript (ES6+)**:
  - Dynamic project card rendering from JavaScript object arrays.
  - Interactive project filtering by course category.
  - Client-side form validation with accessible error messaging.
  - Active navigation highlight on scroll via `IntersectionObserver`.

---

## 📂 Project Directory Structure

```text
web-dev-fundamentals-portfolio/
│
├── course/                     # Complete Web Development & Git/GitHub Course
│   ├── README.md               # Curriculum roadmap & syllabus index
│   ├── git-and-github/         # Track 1: 5 comprehensive Git & GitHub modules
│   └── web-development-fundamentals/ # Track 2: 5 comprehensive Web Dev modules
│
├── index.html                  # Main semantic HTML5 document
├── css/
│   └── style.css               # Modular styles, CSS variables, grid/flex, responsive rules
├── js/
│   └── app.js                  # Vanilla ES6+ application logic and DOM handling
├── assets/
│   └── favicon.svg             # SVG Favicon icon
├── .gitignore                  # Git ignore configuration
├── LICENSE                     # MIT Open Source License
└── README.md                   # Repository documentation and course guide
```

---

## 🚀 Quick Start (Running Locally)

### Option 1: Direct in Browser
Simply double-click [`index.html`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/index.html) or right-click and choose **Open With -> Chrome / Edge / Firefox**.

### Option 2: Using VS Code Live Server (Recommended for coursework)
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (`ritwickdey.LiveServer`).
3. Click **"Go Live"** in the status bar, or right-click `index.html` and select **"Open with Live Server"**.
4. The site will automatically launch at `http://127.0.0.1:5500`.

### Option 3: Using Python HTTP Server (Built-in)
In PowerShell or your terminal inside the project directory:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000`.

---

## 📦 How to Publish this Public Repository to GitHub

This repository is initialized locally with Git. Follow these steps to publish it to your GitHub profile as a **Public Repository**:

### Step 1: Create a new repository on GitHub
1. Go to [GitHub.com/new](https://github.com/new) and log into your account.
2. Enter a repository name (e.g. `web-dev-fundamentals-portfolio`).
3. Set visibility to **Public**.
4. **Leave all checkboxes unchecked** (Do *not* initialize with README, .gitignore, or license, as we have already created them).
5. Click **Create repository**.

### Step 2: Link and Push your local repository
Open PowerShell or your command prompt in this directory (`C:\Users\HomePC\web-dev-fundamentals-portfolio`) and run:

```bash
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your GitHub details:
git remote add origin https://github.com/YOUR-USERNAME/web-dev-fundamentals-portfolio.git
git branch -M main
git push -u origin main
```

*(If you use SSH, use `git remote add origin git@github.com:YOUR-USERNAME/web-dev-fundamentals-portfolio.git`)*

---

## 🌐 Free Hosting via GitHub Pages

Once your code is pushed to GitHub, you can publish it live to the web for free so instructors and peers can view it:

1. In your GitHub repository, navigate to **Settings** (gear icon).
2. On the left sidebar under *Code and automation*, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. Within 1-2 minutes, GitHub Pages will deploy your site to:
   ```
   https://<your-username>.github.io/web-dev-fundamentals-portfolio/
   ```

---

## 🧱 Course Fundamentals Breakdown

| Pillar | Concepts Implemented | File Reference |
| :--- | :--- | :--- |
| **HTML5** | Semantic tags, document structure, forms, ARIA attributes, meta tags | [`index.html`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/index.html) |
| **CSS3** | CSS Variables, Box Model, Flexbox, CSS Grid, Media Queries, Dark Theme | [`css/style.css`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/css/style.css) |
| **JavaScript** | DOM API, event listeners, array methods, regex form validation, Web Storage | [`js/app.js`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/js/app.js) |

---

## 📝 Customization Guide

1. **Update Personal Information**:
   - Open [`index.html`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/index.html) and modify the author meta tag, header logo, hero headline, and contact details.
2. **Add Your Own Course Projects**:
   - Open [`js/app.js`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/js/app.js) and update the `courseProjects` array with your assignment names, descriptions, and GitHub links.
3. **Customize Colors & Branding**:
   - In [`css/style.css`](file:///C:/Users/HomePC/web-dev-fundamentals-portfolio/css/style.css), edit the `:root` variables (`--primary`, `--font-sans`, etc.) to match your personal brand.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Feel free to use it for personal portfolio submissions, course assignments, or instructional materials!
