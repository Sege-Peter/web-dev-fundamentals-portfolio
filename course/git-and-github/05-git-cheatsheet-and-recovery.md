# Module 5: Git Cheatsheet & Emergency Recovery Guide

Every developer encounters moments of confusion in Git. Here is your reference guide to recovering from any situation and working at peak efficiency.

---

## 1. Emergency Recovery Recipes

### 🚨 Scenario 1: "I'm stuck in a 'Detached HEAD' state!"
- **What it means**: You checked out a specific commit hash rather than a branch pointer. Any new commits will become orphaned if you switch away.
- **Fix**: Create a new branch pointing to this state:
  ```bash
  git switch -c recovery-branch
  ```
  Or return safely to your main branch:
  ```bash
  git switch main
  ```

---

### 🚨 Scenario 2: "I accidentally committed to the wrong branch!"
You made commits on `main` that should have been on `feature/login`:
```bash
# 1. Create the feature branch at the current commit
git branch feature/login

# 2. Reset the current branch (main) back one commit, discarding it from main
git reset --hard HEAD~1

# 3. Switch to your new feature branch where the commit is preserved
git switch feature/login
```

---

### 🚨 Scenario 3: "I want to undo my last commit but keep all my code changes!"
```bash
# Moves HEAD back one commit; changes stay staged
git reset --soft HEAD~1

# Moves HEAD back one commit; changes stay in working directory (unstaged)
git reset HEAD~1
```

---

### 🚨 Scenario 4: "I accidentally deleted a branch or made a terrible mistake! Help!"
Git rarely deletes commits immediately. The **Reference Log (`reflog`)** records every time HEAD moved:

```bash
# 1. Inspect recent HEAD movements
git reflog
```
Output:
```text
3481f15 HEAD@{0}: commit: Initial commit
a1b2c3d HEAD@{1}: commit: my lost work
```
```bash
# 2. Recover lost commit to a new branch
git switch -c recovered-work a1b2c3d
```

---

## 2. Essential Command Cheatsheet

| Command | Action |
| :--- | :--- |
| `git init -b main` | Initialize a new local Git repository with default branch `main` |
| `git clone <url>` | Download a remote repository and checkout default branch |
| `git status -s` | View concise status of working directory & staged files |
| `git add .` | Stage all modified and new files |
| `git commit -m "msg"` | Record staged changes as a new snapshot commit |
| `git log --oneline --graph` | Display visual ASCII commit graph |
| `git switch -c <name>` | Create and switch to a new branch |
| `git switch <name>` | Switch to an existing branch |
| `git merge <name>` | Merge specified branch into the active branch |
| `git stash` | Shelve uncommitted modifications temporarily |
| `git stash pop` | Reapply the most recently shelved changes |
| `git remote add <name> <url>` | Connect local repository to remote (e.g. GitHub) |
| `git push -u origin <branch>` | Upload commits to remote branch and set upstream tracking |
| `git pull origin <branch>` | Download and merge changes from remote branch |

---

## 3. Recommended Productivity Aliases

Add these time-saving shortcuts to your global Git configuration:

```bash
git config --global alias.st "status -s"
git config --global alias.co "switch"
git config --global alias.cob "switch -c"
git config --global alias.lg "log --oneline --graph --all --decorate"
git config --global alias.unstage "restore --staged"
```

Now you can simply type:
```bash
git st      # short status
git lg      # visual graph
```
