# Module 4: GitHub Collaboration, Pull Requests & Workflows

GitHub is the cloud platform that hosts Git repositories and provides collaborative tools: Pull Requests, Issue Tracking, Code Review, Discussions, and CI/CD Automation.

---

## 1. Remote Repositories

A remote is a shared repository hosted on a server or service like GitHub.

```bash
# List configured remotes with fetch/push URLs
git remote -v

# Link a local repository to GitHub
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Rename a remote
git remote rename origin upstream

# Change remote URL
git remote set-url origin git@github.com:USERNAME/REPO-NAME.git
```

---

## 2. Synchronizing: Fetch, Pull, and Push

### `git fetch` vs. `git pull`
- `git fetch`: Downloads commits, files, and refs from the remote repository into your local repository, but **does not alter your working files or merge anything**.
- `git pull`: Performs a `git fetch` followed immediately by a `git merge` into your current branch.

```bash
# Fetch latest data without modifying working tree
git fetch origin

# Pull and merge remote changes into current branch
git pull origin main

# Push a new branch and set upstream tracking (-u)
git push -u origin feature/responsive-navbar

# Subsequent pushes on this branch simply need:
git push
```

---

## 3. The GitHub Collaboration Workflows

### Model A: Shared Repository (Team Work)
Used in company or internal course team projects where members have direct write access:
1. Clone the repository.
2. Create a feature branch: `git switch -c feature/footer-links`.
3. Commit changes.
4. Push to remote: `git push -u origin feature/footer-links`.
5. Open a **Pull Request (PR)** on GitHub targeting `main`.
6. Team members review and approve.
7. Merge PR on GitHub.

### Model B: Fork & Pull Request (Open Source & Course Submissions)
Used when you don't have direct write access to the upstream repository:
1. **Fork** the original repository on GitHub to your personal account.
2. Clone your personal fork locally.
3. Configure upstream remote:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPO.git
   ```
4. Create feature branch, commit, and push to your fork (`origin`).
5. Open a Pull Request from your fork back to the original repository.

---

## 4. Crafting High-Quality Pull Requests (PRs)

A great PR speeds up reviews and demonstrates professional engineering standards:

- **Title**: Clear, imperative summary (e.g., `feat: implement accessible contact form validation`).
- **Context / Why**: Explain what problem this PR solves.
- **Changes Made**: Bulleted list of key technical modifications.
- **Visuals**: Screenshots or animated GIFs for UI changes.
- **Issue Linking**: Use keywords like `Fixes #24` or `Closes #15` so GitHub automatically closes related issues upon merge.

---

## 5. GitHub Actions (CI/CD Automation)

GitHub Actions runs automated workflows whenever events occur in your repository (like a push or pull request).

Create a workflow file at `.github/workflows/lint-check.yml`:

```yaml
name: Code Quality Check

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Check HTML & JS Syntax
        run: |
          node -c js/app.js
```

---

## 6. GitHub Pages Free Hosting

Host any static HTML/CSS/JS site for free on GitHub:
1. Push your code to your GitHub repository.
2. In the repository, go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose Branch: `main`, Folder: `/ (root)`.
5. Click **Save**.
6. Your site will be published at `https://<username>.github.io/<repository-name>/`.
