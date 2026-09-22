# Module 2: Daily Git Commands & Workflow

Mastering the day-to-day commands that keep your development clean, traceable, and reversible.

---

## 1. Creating and Cloning Repositories

### Initializing a New Repository
```bash
# In an existing project directory:
git init -b main
```
This creates a hidden `.git` folder holding Git's database and references.

### Cloning an Existing Repository
```bash
# Clone via HTTPS:
git clone https://github.com/owner/repository-name.git

# Clone via SSH:
git clone git@github.com:owner/repository-name.git
```

---

## 2. Inspecting and Staging Changes

### Checking Status
```bash
# Full detailed status
git status

# Compact short status (M = modified, A = added, ?? = untracked)
git status -s
```

### Staging Files (`git add`)
```bash
# Stage a specific file
git add index.html

# Stage all files in the current directory and subdirectories
git add .

# Stage in chunks interactively (great for reviewing code before staging)
git add -p
```

### Inspecting Changes (`git diff`)
```bash
# Compare unstaged working tree changes against staging area
git diff

# Compare staged changes against the latest commit (HEAD)
git diff --staged

# Compare a specific file
git diff style.css
```

---

## 3. Creating Clean Commits

A commit represents an atomic, self-contained unit of work.

```bash
# Standard commit with descriptive message
git commit -m "feat: add mobile navigation drawer toggle"

# Stage all tracked modified files and commit in one step
git commit -am "fix: correct navbar z-index on scroll"
```

### Professional Commit Message Standard (Conventional Commits)
Use this structure: `<type>: <short imperative summary>`:
- `feat`: A new feature (e.g. `feat: implement dark mode switcher`)
- `fix`: A bug fix (e.g. `fix: correct email regex in contact form`)
- `docs`: Documentation updates (e.g. `docs: update installation instructions in README`)
- `style`: Formatting, white-space, semicolon fixes (no code logic changes)
- `refactor`: Refactoring code without altering external behavior
- `test`: Adding or correcting tests

---

## 4. History Inspection (`git log`)

```bash
# Condensed one-line history with abbreviated SHA-1
git log --oneline

# Visual graph showing branches and merges
git log --oneline --graph --all --decorate

# Show statistics of files modified and lines added/deleted
git log --stat -n 5
```

---

## 5. Undoing Mistakes Safely

### Discarding Unstaged Changes in Working Tree
```bash
# Discard modifications to a specific file
git restore index.html

# Discard all unstaged changes in the directory
git restore .
```

### Unstaging a Staged File (Keep changes on disk)
```bash
git restore --staged index.html
```

### Amending the Most Recent Commit
Did you forget a file or make a typo in the last commit message?
```bash
git add forgotten-file.js
git commit --amend -m "feat: corrected commit message"
```
> [!WARNING]
> Never amend commits that have already been pushed to a public remote branch shared with other team members.

### Reverting an Old Commit (Safe for Shared Branches)
Creates a new commit that applies the exact inverse of an earlier commit:
```bash
git revert <commit-hash>
```

---

## 6. Temporary Shelving with `git stash`

When you need to switch branches urgently but have unfinished, uncommitted work:

```bash
# Save uncommitted changes to stash stack
git stash save "WIP: halfway through project filter"

# View your saved stashes
git stash list

# Re-apply the most recent stash and remove it from stack
git stash pop

# Discard the top stash
git stash drop
```

---

## 7. Ignoring Files with `.gitignore`

Patterns to exclude sensitive data, build artifacts, or environment files:

```gitignore
# Ignore operating system files
.DS_Store
Thumbs.db

# Ignore dependencies
node_modules/

# Ignore environment variables & secrets
.env
.env.local
*.key
*.pem

# Ignore build output
dist/
build/
```
