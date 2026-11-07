# HYPOTHESIQ

> **Think. Test. Trace.**

An independent, interactive engineering investigation workspace designed for technical builders, researchers, and systems engineers who require clarity in complex computing environments.

[![Deploy Vite site to GitHub Pages](https://github.com/pranjalisantani/hypothesiq/actions/workflows/deploy.yml/badge.svg)](https://github.com/pranjalisantani/hypothesiq/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live-GitHub%20Pages-0a84ff)](https://pranjalisantani.github.io/hypothesiq/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 1. Overview

**HYPOTHESIQ** provides a structured, empirical environment for technical investigation and reasoning. It connects the reasoning process across code editors, terminals, GitHub, and development infrastructure:

* **Think**: Formulate testable hypotheses, diagnose anomalies, and structure technical inquiry.
* **Test**: Execute controlled experiments, inspect system behaviors, and collect empirical evidence.
* **Trace**: Document root causes, record architectural decisions, and preserve reusable engineering knowledge.

---

## 2. Key Architecture & Features

* **Cinematic Atmospheric Interface**: Custom particle canvas simulation (`Atmosphere`), glassmorphic depth layers, and custom cursor telemetry.
* **Interactive Diagnostic Boot**: Hardware-accelerated diagnostic ticker, system calibration sequence, and smooth view transitions.
* **Builder Archive & 3D Tilt**: Perspective-correct 3D tilt portrait cards with dynamic specular highlights and mouse tracking.
* **Investigation Archive**: Interactive category filtering across technical workshops, build sessions, and practitioner discussions.
* **Interactive Guide**: Rule-based diagnostic assistant (`HYPOTHESIQ GUIDE`) providing quick access to workspace documentation and inquiry channels.
* **Ambient Sound System**: Spatial low-frequency audio engine with dual-key backward-compatible preference persistence.
* **Product Honesty by Design**: Clear client-side demonstration indicators, transparent non-transmission notices, and non-misleading interface controls.

---

## 3. Technology Stack

* **Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 8](https://vite.dev/)
* **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Typography**: DM Sans, Playfair Display, DM Mono
* **Deployment**: GitHub Pages via GitHub Actions (`actions/deploy-pages@v4`)

---

## 4. Local Development

### Prerequisites
* **Node.js**: `v20.x` or `v24.x`
* **npm**: `v10.x` or `v11.x`

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pranjalisantani/hypothesiq.git
   cd hypothesiq
   ```

2. **Install dependencies**:
   ```bash
   npm ci
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build production bundle**:
   ```bash
   npm run build
   ```

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 5. Deployment

Automated CI/CD is configured via GitHub Actions in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Every push to the `main` branch triggers:
1. Fresh Ubuntu runner initialization
2. Deterministic dependency resolution via `npm ci`
3. Production compilation via `npm run build`
4. Automated deployment to GitHub Pages at:
   **[https://pranjalisantani.github.io/hypothesiq/](https://pranjalisantani.github.io/hypothesiq/)**

---

## 6. Author

* **Architect & Developer**: **Pranjali Santani**
* **GitHub Profile**: [@pranjalisantani](https://github.com/pranjalisantani)

---

## 7. License

This project is open source and available under the [MIT License](LICENSE).
