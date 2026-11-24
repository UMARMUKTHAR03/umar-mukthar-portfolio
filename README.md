# Umar Mukthar — Personal Developer Portfolio

> **Production Developer Portfolio** showcasing machine learning systems, deep neural sequence models, hybrid RAG document assistants, and scalable full-stack applications.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

- **Domain:** [https://umarom.com](https://umarom.com)
- **GitHub:** [https://github.com/UMARMUKTHAR03](https://github.com/UMARMUKTHAR03)
- **LinkedIn:** [https://www.linkedin.com/in/umarmukthar03/](https://www.linkedin.com/in/umarmukthar03/)
- **Contact:** [umarom98425@gmail.com](mailto:umarom98425@gmail.com)

---

## 🌟 Key Highlights & Engineering Competencies

- **Education:** B.E. in Artificial Intelligence and Machine Learning from Chennai Institute of Technology (2022–2026), **CGPA: 8.54 / 10.0**.
- **Problem Solving & Competitive Programming:**
  - **LeetCode:** `umarom98425` — 800+ Solved, Rating 1,480+, Top 25% globally.
  - **CodeChef:** `umarom98425` — Rating 1004+.
  - **Codeforces:** `UMARMUKTHAR` — Rating 847.
- **Featured Systems:**
  - **Predictive Text Generator (NeuroText AI V2):** Custom 3.2M-param BiLSTM model evaluated with a leak-free title-level split, achieving 15.18% Top-1 and 27.44% Top-5 accuracy on 4,862 unseen sequences with sub-5ms CPU inference.
  - **OmniMind AI (Hybrid RAG):** Grounded multimodal document assistant pairing 128-dimensional dense hash vectors with BM25 lexical ranking (0.27ms avg latency; 1.000 MRR on a 4-document multi-format sanity benchmark).
  - **Image Recognition App:** PyTorch MobileNetV3-Small classifier across 1,000 ImageNet-1K object categories with live Grad-CAM convolutional saliency heatmaps.
  - **FraudGuard AI:** XGBoost decision-support model evaluated on a 40k calibrated synthetic benchmark (99.04% acc, 82.89% precision, 77.50% recall) with SHAP explainability.
  - **ChurnIQ:** Zero data-leakage customer retention analytics engine (95.29% holdout acc, 97.70% precision, 0.9483 ROC-AUC) with counterfactual What-If simulation.
  - **BazaarFlow LUXE:** Enterprise luxury e-commerce platform built with NestJS, Next.js 16, PostgreSQL, Redis, Stripe, and TOTP 2FA admin authentication.
  - **CodersCave Software Suite:** Python desktop tools (Audio Recorder, Safe Calculator, Crypto Password Generator, Typing Tester) elevated into a modern web platform.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion, Lucide React icons, Canvas Confetti.
- **Design Philosophy:** Premium dark charcoal palette (`#09090b`), emerald/cyan glowing accents, high-contrast accessible typography, glassmorphism, responsive across 320px–1920px viewports.
- **Accessibility:** Semantic landmarks, skip-to-content navigation, button groups with `aria-pressed`, proper form labels, and visible focus rings.
- **SEO:** Canonical URL, Open Graph and Twitter Cards, robots.txt, sitemap.xml, and Schema.org JSON-LD structured data.

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js:** v20.19+ or v22.12+ (Recommended: Node.js 22 LTS)
- **npm:** v10+

### Installation

```bash
# Clone the repository
git clone https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio.git
cd umar-mukthar-portfolio

# Install dependencies
npm ci

# Optional: configure contact form endpoint
cp .env.example .env

# Run local development server
npm run dev
```

### Production Build & Preview

```bash
# Typecheck & build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact Form Configuration

By default, if no external endpoint is configured, the contact form opens an automated pre-filled email draft (`mailto:`) in the visitor's default email client.

To connect a backend form service (e.g. Formspree or Web3Forms):
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Set your endpoint URL:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
3. Deploy to your hosting provider with the environment variable set.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
