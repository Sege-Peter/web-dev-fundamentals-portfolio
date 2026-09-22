# Module 1: Git Core Concepts & Environment Setup

## 1. What is Version Control?

A **Version Control System (VCS)** records changes to a file or set of files over time so you can recall specific versions later, compare changes, see who modified what, and collaborate safely without overwriting teammates' work.

### Centralized vs. Distributed Version Control

| Feature | Centralized VCS (e.g. SVN) | Distributed VCS (e.g. Git) |
| :--- | :--- | :--- |
| **Repository Location** | Single central server only | Every developer has a full local clone |
| **Offline Work** | Limited; requires network to commit | Complete; commit, branch, diff offline |
| **Speed** | Network dependent | Instantaneous local disk operations |
| **Reliability** | Single point of failure | Redundant copies across all collaborators |

---

## 2. Git's Internal Mental Model: Snapshots, Not Deltas

Most traditional VCS store information as a list of file-based changes (deltas).

Git thinks of its data more like a **stream of snapshots**:
- Every time you commit, Git takes a picture of what all your files look like at that moment and stores a reference to that snapshot.
- To be efficient, if files have not changed, Git doesn't store the file again—just a link to the previous identical file it already has stored.

```text
[Commit 1] ────> [Commit 2] ────> [Commit 3]
  File A (v1)      File A (v2)      File A (v2 - link)
  File B (v1)      File B (v1)      File B (v2)
  File C (v1)      File C (v1)      File C (v1 - link)
```

---

## 3. The Three Areas of Git

Understanding Git requires understanding its **three primary states**:

1. **Working Directory (Working Tree)**:
   - The actual files on your hard drive that you are currently editing.
2. **Staging Area (The Index)**:
   - A preparatory staging ground formatted into a manifest file (`.git/index`). It holds the exact changes you intend to include in your next commit.
3. **Repository (`.git` directory)**:
   - Where Git permanently stores metadata and object databases for your project snapshots.

```text
+---------------------+         git add          +--------------------+
|  Working Directory  |  ──────────────────────>  |    Staging Area    |
|   (Modified Files)  |                           |      (Index)       |
+---------------------+                           +--------------------+
           ▲                                                 │
           │                                                 │ git commit
           │                                                 ▼
           │             git checkout / switch    +--------------------+
           └───────────────────────────────────── |   Git Repository   |
                                                  |    (Commit History)|
                                                  +--------------------+
```

---

## 4. Initial Git Configuration

Before making commits, configure your developer identity. Git embeds this info in every snapshot you create.

### Identity Setup

```bash
# Set your name and email globally
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set the default branch name to 'main'
git config --global init.defaultBranch main
```

### Windows Line Endings (CRLF vs LF)

Windows uses Carriage Return + Line Feed (`\r\n`), while macOS/Linux uses Line Feed (`\n`). Configure Git to normalize line endings automatically:

```bash
# On Windows:
git config --global core.autocrlf true

# On macOS / Linux:
git config --global core.autocrlf input
```

### Verify Configuration

```bash
git config --list --show-origin
```

---

## 5. Authentication: HTTPS vs. SSH Keys

When pushing to GitHub, you need secure authentication:

### Option A: Personal Access Token (HTTPS)
GitHub does not accept account passwords for command-line Git operations.
1. Go to **GitHub Settings → Developer Settings → Personal Access Tokens → Tokens (classic)**.
2. Generate a token with `repo` scope.
3. Use the token as your password when Git prompts.

### Option B: SSH Key (Recommended for long-term development)
Generate an ed25519 SSH key:
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```
Press Enter to accept default location (`~/.ssh/id_ed25519`). Then copy your public key:
```powershell
Get-Content ~/.ssh/id_ed25519.pub | Set-Clipboard
```
Paste it into **GitHub Settings → SSH and GPG Keys → New SSH Key**.
Test connection:
```bash
ssh -T git@github.com
```
