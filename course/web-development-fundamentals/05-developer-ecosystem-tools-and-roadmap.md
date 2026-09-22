# Web Dev Fundamentals: Module 5 - Developer Tools, Security, & Engineering Roadmap

Moving beyond basic static sites requires understanding professional tooling, security safeguards, and the wider modern web engineering landscape.

---

## 1. Node.js & Package Management (npm)

Even for pure frontend development, **Node.js** powers modern developer tooling.

### What is npm (Node Package Manager)?
npm is the world's largest software registry. It manages external libraries, compilers, linters, and local development servers.

```bash
# Initialize a new package.json file
npm init -y

# Install a production dependency
npm install lodash

# Install a development-only tool (linters, bundlers)
npm install -D prettier eslint
```

### Semantic Versioning (`semver`)
Version format: `MAJOR.MINOR.PATCH` (e.g. `2.4.1`)
- **MAJOR**: Breaking changes that alter public APIs.
- **MINOR**: New features added in a backward-compatible manner.
- **PATCH**: Backward-compatible bug fixes.
- `^2.4.1`: Automatically accept minor and patch updates (up to `< 3.0.0`).
- `~2.4.1`: Automatically accept patch updates only (up to `< 2.5.0`).

---

## 2. Code Quality Tools: Prettier & ESLint

- **Prettier**: An opinionated code formatter that standardizes indentation, quotes, line width, and semicolons across your entire team.
- **ESLint**: A static code analysis tool that flags potential bugs, unreachable code, unclosed tags, and syntax anti-patterns before runtime.

---

## 3. Web Performance & Core Web Vitals

Google ranks web experiences using three primary **Core Web Vitals**:

| Metric | Target | What It Measures | Optimization Strategy |
| :--- | :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 2.5s` | Loading speed of the main visual hero block | Optimize and compress images (WebP/AVIF), prioritize critical CSS |
| **INP (Interaction to Next Paint)** | `< 200ms` | Page responsiveness to user clicks/touches | Minimize long-running JavaScript execution on the main thread |
| **CLS (Cumulative Layout Shift)** | `< 0.1` | Visual stability (prevent content jumping) | Always include explicit `width` and `height` attributes on images |

---

## 4. Fundamental Web Security

### 1. Cross-Site Scripting (XSS)
- **Vulnerability**: Malicious scripts injected into benign web pages via unescaped user inputs.
- **Defense**: Always use `.textContent` instead of `.innerHTML` when rendering user-submitted text. Sanitize dynamic HTML using libraries like DOMPurify.

### 2. Cross-Origin Resource Sharing (CORS)
- **Concept**: A security mechanism enforced by browsers that restricts web pages from making AJAX requests to a different domain/origin than the one that served the web page, unless the remote server explicitly sends header:
  `Access-Control-Allow-Origin: *`

### 3. HTTPS & Transport Layer Security
- Ensures data transmitted between client and server is encrypted, tamper-proof, and authenticated. Always enforce HTTPS in production.

---

## 5. The Full-Stack Web Development Roadmap

```text
[ Phase 1: Foundations ] (This Course)
  ├── Semantic HTML5 & WCAG Accessibility
  ├── CSS3 (Box Model, Flexbox, Grid, Custom Properties)
  ├── Vanilla JavaScript (ES6+, DOM, Events, Async Fetch)
  └── Git & GitHub (Branching, PRs, GitHub Pages)
         │
         ▼
[ Phase 2: Modern Frontend ]
  ├── TypeScript (Static Typing)
  ├── Component Frameworks (React, Vue, or Svelte)
  ├── Utility CSS (Tailwind CSS)
  └── Client-side Routing & Global State
         │
         ▼
[ Phase 3: Backend & Databases ]
  ├── Server Runtimes (Node.js, Python, or Go)
  ├── REST APIs & GraphQL
  ├── Databases (PostgreSQL, SQLite, MongoDB)
  └── Authentication (OAuth2, JWT, Sessions)
         │
         ▼
[ Phase 4: DevOps & Production ]
  ├── Automated Testing (Vitest, Jest, Playwright)
  ├── CI/CD Pipelines (GitHub Actions)
  ├── Containerization (Docker)
  └── Cloud Deployment (Vercel, AWS, Cloudflare)
```
