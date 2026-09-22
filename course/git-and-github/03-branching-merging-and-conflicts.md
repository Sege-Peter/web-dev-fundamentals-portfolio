# Module 3: Branching, Merging & Conflict Resolution

Branches are the superpower of Git. In Git, a branch is simply a lightweight, movable pointer to a 40-character SHA-1 commit hash. Creating a branch takes milliseconds and uses virtually no disk space.

---

## 1. Branching Fundamentals

```text
main:     C1 ─── C2 ─── C3
                          \
feature:                   C4 ─── C5
```

### Branch Management Commands
```bash
# List local branches (* indicates current branch)
git branch

# List all local and remote tracking branches
git branch -a

# Create a new branch without switching to it
git branch feature/theme-switcher

# Switch to a branch (modern command)
git switch feature/theme-switcher

# Create and switch in a single command
git switch -c feature/theme-switcher

# Delete a merged branch
git branch -d feature/theme-switcher

# Force delete an unmerged branch
git branch -D feature/theme-switcher
```

---

## 2. Merging Branches

When your feature is complete and tested, integrate it back into your primary branch (e.g. `main`).

### Fast-Forward Merge
Occurs when the target branch (`main`) has had no new commits since the feature branch was created. Git simply moves the pointer forward:

```bash
git switch main
git merge feature/theme-switcher
```

### Three-Way Merge (Recursive / Ort)
Occurs when both `main` and `feature` have progressed independently. Git creates a new **merge commit** with two parent commits.

```bash
git switch main
git merge feature/contact-form
```

---

## 3. Merge vs. Rebase

| Action | `git merge` | `git rebase` |
| :--- | :--- | :--- |
| **History** | Preserves exact chronological timeline and branching topology | Rewrites history into a clean, linear sequence |
| **Traceability** | Easy to see where features started and ended | Eliminates merge commit noise |
| **Golden Rule** | Safe everywhere | **Never rebase commits that have been pushed to a public/shared branch!** |

### How Rebase Works:
```bash
# On your feature branch:
git switch feature/my-feature
git rebase main
# Replays your feature commits on top of the latest main commit
```

---

## 4. Resolving Merge Conflicts Step-by-Step

A conflict happens when two branches modify the **exact same lines of a file** or one branch deletes a file that another modified.

### Scenario:
Git stops the merge and marks the conflict:
```text
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

### Step 1: Identify Conflicted Files
```bash
git status
```
Conflicted files appear under `Unmerged paths: both modified`.

### Step 2: Open and Understand Conflict Markers
Open the conflicted file in your editor. You will see markers:

```html
<<<<<<< HEAD (Current Branch, e.g. main)
<h1 class="hero-title">Welcome to Web Development</h1>
=======
<h1 class="hero-title">Mastering Modern Web Development</h1>
>>>>>>> feature/new-headline (Incoming Branch)
```

- Everything between `<<<<<<< HEAD` and `=======` is what existed on the branch you are currently on.
- Everything between `=======` and `>>>>>>> [branch]` is what exists on the branch you are merging in.

### Step 3: Resolve the Conflict
1. Decide which version to keep, or manually combine both:
```html
<h1 class="hero-title">Mastering Modern Web Development</h1>
```
2. **Remove all conflict marker lines** (`<<<<<<<`, `=======`, `>>>>>>>`).

### Step 4: Stage and Finalize
```bash
# 1. Stage the resolved file
git add index.html

# 2. Check status to ensure conflicts are resolved
git status

# 3. Finalize the merge commit
git commit -m "merge: resolve conflict in index.html headline"
```

To abort a merge if things get messy:
```bash
git merge --abort
```
