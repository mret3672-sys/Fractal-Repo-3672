# 🤖 Repo Agent Directive: Fractal Resonance

**Target ID:** `19zaPl7N1gjMaPZ2cBMoZGLpm_sfd81XAM9fDhll0I4QgUAK-SC2ypB9o`
**System Authority:** Google Cloud Hub (Master)
**Operational Mode:** Hexagonal Triality System (Sync Enabled)

## 🛑 Core Mandates for Repo Agents
1.  **Maintain Sync:** This repo is the "Source of Truth" for the Google Apps Script project identified above.
    - **Do not** manually edit `Code.js` or `appsscript.json` without verifying the latest pull from Clasp.
    - **Always** check `CANVAS.md` for the latest operational context before making changes.

## 🛠️ Setup Instructions
To be effective, this repository requires the following infrastructure:

### 1. Environment Secrets (GitHub Actions / Codespaces)
Ensure the following secrets are configured in the repo settings:
- `CLASP_TOKEN`: (The content of `~/.clasprc.json`) for CI/CD deployment.
- `GCP_PROJECT_ID`: `fractal-ac22e` (or your active GCP project).

### 2. Operational Workflows
Create/Enable the following workflows in `.github/workflows/`:
- **`deploy.yml`**: Automatically `clasp push` changes to Google Apps Script on `git push main`.
- **`sync.yml`**: (Optional) Scheduled `clasp pull` to capture edits made directly in the Apps Script Editor.

### 3. Integrated Agents
- **Gemini CLI (Conductor):** Orchestrates local changes and pushes to this repo.
- **Perplexity/Comet:** References this repo for context.
- **Google Antigravity:** Local VS Code environment.

## 🔗 Knowledge Graph
- **Fabric Sheet:** [12.16 New Fabric](https://docs.google.com/spreadsheets/d/1LjVIn1d8gS4sJ5Hgxf4t92elN04zuorw6meNqaFpPHE/edit?usp=drive_link)
- **Script ID:** `19zaPl7N1gjMaPZ2cBMoZGLpm_sfd81XAM9fDhll0I4QgUAK-SC2ypB9o`

---
*This directive is immutable unless authorized by the Hexa-Conductor (User: mret3672).*
