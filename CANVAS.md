# Session Canvas
*Centralized scratchpad for the Hexagonal Triality System.*

## 🔗 Critical Links
- **Operational Fabric (Google Sheet):** [12.16 New Fabric](https://docs.google.com/spreadsheets/d/1LjVIn1d8gS4sJ5Hgxf4t92elN04zuorw6meNqaFpPHE/edit?usp=drive_link)
- **Project Location:** `crimson-skylab` (Local) / `GitHub` (Remote)

## 🏛️ System Architecture
**Goal:** Seamless, centralized, infinitely mobile system.
- **Authority:** Google Cloud Hub.
- **Operations:** "New Fabric" Sheet + Apps Script.
- **Agents:**
    - Google Antigravity (Local VS Code)
    - Cloud Shell Terminal CLI (Gemini)
    - Perplexity Comet Browser
    - Gemini App Site
- **Sync:** GitHub (Code/Notes) + Clasp (Apps Script).

## ☁️ Cloud Shell Handoff Protocol
**When arriving at work (Google Cloud Shell):**

1.  **Clone the Repo:**
    ```bash
    git clone https://github.com/mret3672-sys/Fractal-Repo-3672.git
    cd Fractal-Repo-3672
    ```

2.  **Verify Environment:**
    ```bash
    chmod +x cloud_shell_verify.sh
    ./cloud_shell_verify.sh
    ```

3.  **Troubleshooting:**
    - If `Clasp Auth` is missing: Run `clasp login --no-localhost`.
    - If `clasp` command not found: Run `npm install -g @google/clasp`.

## Current Status
- [x] Environment Setup (Windows/Gemini CLI)
- [x] Clasp Authentication Verified (.clasprc.json found)
- [x] Conductor Tracks Initialized (.antigravity/conductor/tracks.md)
- [x] Project Cloned: **crimson-skylab** (Script ID: `19zaPl...B9o`)
- [x] Initialized Git & Pushed to GitHub: [Fractal-Repo-3672](https://github.com/mret3672-sys/Fractal-Repo-3672)

## Next Objectives
- [ ] Review `Code.js` logic.
- [ ] Connect "New Fabric" Sheet to Apps Script.
- [ ] Set up GitHub Actions for auto-deploy.

## Project Files
- `appsscript.json`
- `Code.js`
- `TemporalTrigger.js`
