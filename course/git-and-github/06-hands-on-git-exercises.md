# Module 6: Hands-On Git Interactive Terminal Exercises

Practice makes permanent. Follow these step-by-step exercises by copying and running the commands in your terminal to build muscle memory.

---

## 🏋️ Exercise 1: Initialize, Stage & Commit

**Goal**: Create a sandbox directory, initialize Git, configure tracking, and commit your first snapshot.

```bash
# 1. Create a practice sandbox directory
mkdir git-practice-sandbox
cd git-practice-sandbox

# 2. Initialize a repository with default branch 'main'
git init -b main

# 3. Create your first file
echo "<h1>Hello Git World</h1>" > index.html

# 4. Check status to see untracked file
git status -s
# Output: ?? index.html

# 5. Stage the file
git add index.html

# 6. Check status to see staged file
git status -s
# Output: A  index.html

# 7. Commit with Conventional Commit message
git commit -m "feat: initial commit with welcome header"

# 8. Verify the commit history
git log --oneline
```

---

## 🏋️ Exercise 2: Branching & Fast-Forward Merging

**Goal**: Create a feature branch, make a change, and merge it back into `main`.

```bash
# 1. Create and switch to a new branch
git switch -c feature/add-footer

# 2. Add a footer to your file
echo "<footer><p>Copyright 2026</p></footer>" >> index.html

# 3. Commit the change on the feature branch
git add index.html
git commit -m "feat: add copyright footer"

# 4. Switch back to main
git switch main

# 5. Merge the feature branch into main (Fast-Forward)
git merge feature/add-footer

# 6. Delete the merged feature branch
git branch -d feature/add-footer
```

---

## 🏋️ Exercise 3: Simulating and Resolving a Real Merge Conflict

**Goal**: Intentionally create conflicting edits on two branches and resolve the conflict cleanly.

```bash
# 1. Create branch-A and modify line 1 of index.html
git switch -c branch-a
echo "<h1>Design System Alpha</h1>" > index.html
git commit -am "feat: update title on branch-a"

# 2. Switch back to main and create branch-B
git switch main
git switch -c branch-b
echo "<h1>Design System Beta</h1>" > index.html
git commit -am "feat: update title on branch-b"

# 3. Switch to main and merge branch-a first
git switch main
git merge branch-a
# (Succeeds via Fast-Forward)

# 4. Now attempt to merge branch-b (Conflict triggered!)
git merge branch-b
# Output:
# CONFLICT (content): Merge conflict in index.html
# Automatic merge failed; fix conflicts and then commit the result.

# 5. Inspect the conflict markers in index.html
cat index.html
# <<<<<<< HEAD
# <h1>Design System Alpha</h1>
# =======
# <h1>Design System Beta</h1>
# >>>>>>> branch-b

# 6. Resolve: Choose the final version (e.g. combine them)
echo "<h1>Design System Alpha & Beta Combined</h1>" > index.html

# 7. Stage and complete the merge
git add index.html
git commit -m "merge: resolve title conflict between branch-a and branch-b"

# 8. Clean up branches
git branch -d branch-a branch-b
```

---

## 🏋️ Exercise 4: Working with `git stash`

**Goal**: Pause work on a feature without committing broken code to fix an urgent bug.

```bash
# 1. Start an uncompleted change
echo "<p>Work in progress notes...</p>" >> index.html
git status -s
# Output:  M index.html

# 2. Stash your uncommitted work
git stash save "WIP: unfinished draft notes"

# 3. Verify working directory is clean
git status
# Output: nothing to commit, working tree clean

# 4. Make urgent hotfix
echo "<!-- Hotfix meta tag -->" >> index.html
git commit -am "fix: urgent metadata hotfix"

# 5. Restore your shelved work
git stash pop

# 6. Verify your WIP notes are back!
git status -s
```

---

## 🏋️ Exercise 5: Undoing Mistakes (`git restore` & `git revert`)

**Goal**: Practice discarding accidental changes and reverting historical commits.

```bash
# Scenario A: Discard unstaged accidental deletion
echo "Accidental wrong code" >> index.html
git status -s
# Discard the edits:
git restore index.html

# Scenario B: Safely revert a bad historical commit
echo "<!-- Buggy snippet -->" >> index.html
git commit -am "feat: buggy feature"

# Revert the latest commit without rewriting history
git revert HEAD --no-edit

# Verify a new reverting commit was created
git log --oneline -n 3
```
