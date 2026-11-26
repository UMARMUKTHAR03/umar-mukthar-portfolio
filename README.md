# Umar Mukthar — Personal Developer Portfolio

Personal developer portfolio website showcasing machine learning models, hybrid retrieval architectures, computer vision tools, and full-stack web applications.

[![Live Site](https://img.shields.io/badge/Live_Site-umar--mukthar.is--a.dev-10b981?style=for-the-badge&logo=vercel&logoColor=white)](https://umar-mukthar.is-a.dev/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

- **Live Production URL:** [https://umar-mukthar.is-a.dev/](https://umar-mukthar.is-a.dev/)
- **Vercel Deployment:** [https://umar-mukthar-portfolio.vercel.app/](https://umar-mukthar-portfolio.vercel.app/)
- **GitHub Repository:** [https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio](https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio)

---

## Table of Contents

1. [About the Developer](#about-the-developer)
2. [Education and Academic Background](#education-and-academic-background)
3. [Technical Skills and Technology Stack](#technical-skills-and-technology-stack)
4. [Featured Projects](#featured-projects)
5. [Coding Profiles and Achievements](#coding-profiles-and-achievements)
6. [Key Portfolio Features](#key-portfolio-features)
7. [SEO, Accessibility, and Responsive Design](#seo-accessibility-and-responsive-design)
8. [Actual Project Directory Structure](#actual-project-directory-structure)
9. [Prerequisites](#prerequisites)
10. [Installation and Local Development](#installation-and-local-development)
11. [Environment Configuration](#environment-configuration)
12. [Production Build and Lint Commands](#production-build-and-lint-commands)
13. [Deployment Information](#deployment-information)
14. [Contact and Social Links](#contact-and-social-links)
15. [License](#license)

---

## About the Developer

**Umar Mukthar** is an undergraduate student pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning (2022–2026) at Chennai Institute of Technology. He develops machine learning models, retrieval-augmented generation (RAG) pipelines, computer vision prototypes, and full-stack web applications.

- **Focus Areas:** Deep Learning, Natural Language Processing, Computer Vision, Model Inference, Full-Stack Development, and RESTful APIs.
- **Internships:** Completed virtual internships and technical training with AICTE–EduSkills, Cognifyz Technologies, CodersCave, and SkillVertex.
- **Problem Solving:** Over 800 algorithmic challenges solved across LeetCode, CodeChef, and Codeforces.

---

## Education and Academic Background

- **Degree:** Bachelor of Engineering in Artificial Intelligence and Machine Learning
- **Institution:** Chennai Institute of Technology, Chennai, Tamil Nadu, India
- **Period:** 2022 – 2026
- **Cumulative GPA:** 8.54 / 10.0
- **Academic Program:** Undergraduate engineering curriculum in Artificial Intelligence and Machine Learning.

---

## Technical Skills and Technology Stack

### Selected Primary Dependencies

| Category | Package | Declared Version (`package.json`) | Resolved Version (`package-lock.json`) |
| :--- | :--- | :--- | :--- |
| **Framework** | `react` | `^19.3.1` | `19.3.1` |
| **DOM Renderer** | `react-dom` | `^19.3.1` | `19.3.1` |
| **Client Routing** | `react-router-dom` | `^7.18.6` | `7.18.6` |
| **Animations** | `framer-motion` | `^14.14.0` | `14.14.0` |
| **Visual Effects** | `canvas-confetti` | `^1.9.4` | `1.9.4` |
| **Icons** | `lucide-react` | `^1.79.0` | `1.79.0` |
| **Class Utilities** | `clsx` | `^2.1.1` | `2.1.1` |
| **Class Utilities** | `tailwind-merge` | `^3.7.1` | `3.7.1` |
| **Build Tool** | `vite` | `^8.3.6` | `8.3.8` |
| **Compiler Plugin** | `@vitejs/plugin-react` | `^6.1.2` | `6.3.0` |
| **Type Checker** | `typescript` | `~7.0.2` | `7.0.2` |
| **Styling Engine** | `tailwindcss` | `^4.3.5` | `4.3.5` |
| **Vite Style Plugin** | `@tailwindcss/vite` | `^4.3.5` | `4.3.5` |
| **Linter** | `oxlint` | `^1.90.0` | `1.95.0` |
| **Browser Automation** | `puppeteer` | `^25.18.1` | `25.18.1` |

### Broader Developer Competencies

- **Programming Languages:** Python, Java, SQL, JavaScript, TypeScript, C++
- **AI & Machine Learning:** PyTorch, TensorFlow, Scikit-Learn, Computer Vision, NLP, Deep Learning, Generative AI, Neural Networks, XGBoost, LightGBM, SHAP
- **Frameworks & Backend:** FastAPI, Flask, Spring Boot, REST APIs, JWT, Spring Security
- **Frontend & UI:** React, HTML5, CSS3, Tailwind CSS, Vite, Responsive Design
- **AI Tools & Vector Retrieval:** LangChain, ChromaDB, SHAP, Groq Whisper
- **Databases & Cloud:** MySQL, PostgreSQL, AWS, Docker, Git, GitHub Actions, Vercel

---

## Featured Projects

All project descriptions, evaluation benchmarks, and links reflect the implementations documented in `src/data/portfolio.ts`:

### 1. Predictive Text Generator (NeuroText AI V2)
- **Description:** Real-time next-token prediction and autocompletion platform powered by a custom bidirectional LSTM sequence model, paired with an optional Cloudflare Workers AI general-drafting mode.
- **Tech Stack:** Python, PyTorch, BiLSTM, FastAPI, React, Cloudflare Workers AI.
- **Evaluation & Benchmarks:**
  - **Architecture:** 3.2M-parameter BiLSTM (100d Embedding $\rightarrow$ 150u BiLSTM $\rightarrow$ Dense Linear layer).
  - **Holdout Accuracy:** 15.18% Top-1, 27.44% Top-5 measured on a holdout split of 4,862 unseen sequences (587.82 Perplexity).
  - **CPU Inference:** Sub-5ms forward pass measured locally under `torch.inference_mode()`.
  - **Data Leakage Control:** Document/title-level 80/10/10 partition executed prior to n-gram sequence generation.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/predictive-text-generator) | [Live Demo](https://umarmukthar03.github.io/predictive-text-generator/)

### 2. OmniMind AI — Multimodal Knowledge Assistant
- **Description:** Grounded document assistant featuring in-memory hybrid search, multi-format file ingestion (PDF, DOCX, XLSX, CSV), provenance tracking, and dual-engine cloud LLM routing.
- **Tech Stack:** Python, FastAPI, In-Memory Hybrid Search (Dense Hash + BM25), Groq Whisper Large v3, Google Gemini, React 19.
- **Evaluation & Benchmarks:**
  - **Retrieval Latency:** 0.27ms average in-memory hybrid search.
  - **Sanity Benchmark:** MRR 1.000 measured on a deterministic 4-document multi-format sanity benchmark to verify retrieval ranking integrity.
  - **Provenance Tracking:** Citations mapped directly to source documents and section chunks.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/rag-ai-chatbot) | [Live Demo](https://umarmukthar03.github.io/rag-ai-chatbot/)

### 3. Image Recognition App & Explainable AI
- **Description:** Computer vision web platform classifying images across 1,000 ImageNet categories with Grad-CAM saliency heatmaps for decision transparency.
- **Tech Stack:** PyTorch, MobileNetV3-Small, Grad-CAM, FastAPI, React 19, TorchVision.
- **Evaluation & Benchmarks:**
  - **Model:** Pretrained MobileNetV3-Small on ImageNet-1K object categories.
  - **Explainability:** Grad-CAM activation heatmaps backpropagated from the final convolutional layer (`features.12`).
  - **Features:** Batch image evaluation, top-5 logits display, and CSV diagnostic export.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/image-recognition-app) | [Live Demo](https://umarmukthar03.github.io/image-recognition-app/)

### 4. FraudGuard AI — Financial Fraud Detection
- **Description:** Financial fraud detection decision-support prototype combining an XGBoost classifier with local SHAP feature attributions, risk tier thresholds, and CSV batch scoring.
- **Tech Stack:** Python, XGBoost, FastAPI, SHAP TreeExplainer, React.
- **Evaluation & Benchmarks:**
  - **Benchmark Accuracy:** 99.04% measured on 8,000 holdout records from a calibrated synthetic benchmark of 40,000 records (~2% fraud prevalence).
  - **Precision & Recall:** 82.89% precision, 77.50% recall (155 true positives, 45 false negatives).
  - **Dataset Disclosure:** Evaluated on a calibrated synthetic benchmark for educational decision support; has not been tested on live cardholder transactions.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/fraud-detection-system) | [Live Demo](https://umarmukthar03.github.io/fraud-detection-system/)

### 5. ChurnIQ — Customer Churn Retention Platform
- **Description:** Customer attrition analytics platform utilizing a Gradient Boosting classification model, SHAP explainability, and an interactive What-If scenario simulator.
- **Tech Stack:** Python, Scikit-Learn, Gradient Boosting, SHAP, FastAPI, React.
- **Evaluation & Benchmarks:**
  - **Holdout Accuracy:** 95.29% accuracy on holdout test splits (898 true negatives, 6 false positives).
  - **Precision & ROC-AUC:** 97.70% precision, 0.9483 ROC-AUC score.
  - **Data Leakage Control:** Preprocessing scalers and encoders fit strictly on the training partition.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/customer-churn-prediction) | [Live Demo](https://umarmukthar03.github.io/customer-churn-prediction/)

### 6. BazaarFlow LUXE — Luxury E-Commerce Platform
- **Description:** Full-stack e-commerce web application built as a monorepo with customer storefront and administrative management portal.
- **Tech Stack:** NestJS, Next.js 16, TypeScript, PostgreSQL, TypeORM, Redis, Stripe Checkout.
- **Features & Implementation:**
  - **Security:** Separate administrative portal with TOTP two-factor authentication and role-based access control.
  - **Integrations:** Real-time courier tracking (REDX API), automated PDF invoices, and webhook-driven order fulfillment state machine.
  - **Data Integrity:** ACID-compliant atomic order state machine with TypeORM migrations.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/ecommerce-platform) | [Live Demo](https://bazaarflow-luxe.vercel.app)

### 7. Python Software Suite & Developer Hub
- **Description:** Centralized developer toolbelt elevating four Python utilities into a unified web application dashboard.
- **Tech Stack:** Python, FastAPI, React, TypeScript, Tailwind CSS.
- **Modules Included:**
  - In-browser voice audio recorder with WAV blob encoding and playback.
  - Live typing speed and accuracy diagnostics (WPM calculator).
  - Cryptographic password generator with adjustable character entropy.
  - Mathematical evaluation calculator with input validation.
- **Links:** [GitHub Repository](https://github.com/UMARMUKTHAR03/coderscave-mini-projects-hub) | [Live Demo](https://umarmukthar03.github.io/coderscave-mini-projects-hub/)

---

## Coding Profiles and Achievements

- **LeetCode:** [umarom98425](https://leetcode.com/umarom98425/)
  - **Challenges Solved:** 800+
  - **Contest Rating:** 1,480+ (Top 25% globally)
- **CodeChef:** [umarom98425](https://www.codechef.com/users/umarom98425)
  - **Contest Rating:** 1,004+ (Active Contestant)
- **Codeforces:** [UMARMUKTHAR](https://codeforces.com/profile/UMARMUKTHAR)
  - **Contest Rating:** 847 (Contest Participant)

---

## Key Portfolio Features

- **Multilingual Welcome Intro:** Animated greeting overlay cycling automatically through 10 languages (Arabic, Tamil, Hindi, Urdu, Malayalam, Bengali, Indonesian, Turkish, Persian, and English) with RTL support for Arabic, Urdu, and Persian, language font fallbacks, and `prefers-reduced-motion` detection.
- **Project Deep-Dives:** Individual detail views (`/project/:id`) displaying problem statements, architecture overviews, challenges and solutions, holdout metrics, and code links.
- **Work Timeline:** Internship section (`/experience`) detailing four internships with responsibilities, technical stacks, and PDF certificates.
- **Certifications Directory:** Filterable certifications section (`/certifications`) with credential IDs and PDF certificates across AWS Cloud, DeepLearning.AI, Cisco, IBM, and Celonis.
- **Preference Controls:** Dark and light theme toggle, ambient animation and sound controls, persisted via `localStorage`.
- **Accessible Contact Form:** Form validation with support for external POST endpoints and an automatic `mailto:` draft fallback.

---

## SEO, Accessibility, and Responsive Design

- **Dynamic Canonical & Title Management:** The application's `HeadManager` dynamically sets `<link rel="canonical">`, `<meta property="og:url">`, and `<meta property="twitter:url">` for each route based on `location.pathname`, and updates `document.title` across the primary navigation routes:
  - `/` $\rightarrow$ `https://umar-mukthar.is-a.dev/` (`Umar Mukthar | AI & ML Engineer`)
  - `/about` $\rightarrow$ `https://umar-mukthar.is-a.dev/about` (`About Me | Umar Mukthar`)
  - `/work` $\rightarrow$ `https://umar-mukthar.is-a.dev/work` (`Projects & Portfolio | Umar Mukthar`)
  - `/experience` $\rightarrow$ `https://umar-mukthar.is-a.dev/experience` (`Experience | Umar Mukthar`)
  - `/certifications` $\rightarrow$ `https://umar-mukthar.is-a.dev/certifications` (`Certifications | Umar Mukthar`)
- **Metadata:** Open Graph tags, Twitter summary card, XML sitemap (`/sitemap.xml`), crawler directives (`/robots.txt`), and Schema.org `Person` JSON-LD structured data.
- **Web Accessibility (a11y):** Skip-to-content anchor link (`#main-content`), ARIA button states (`aria-pressed`, `aria-label`), visible focus rings (`focus:ring-2`), and semantic HTML elements.
- **Responsive Layout:** Responsive layout testing from mobile screens (320px) up to desktop displays (1920px).

---

## Actual Project Directory Structure

```text
umar-mukthar-portfolio/
├── public/
│   ├── certificates/          # Credential PDF files
│   ├── projects/              # Project screenshots and diagrams
│   ├── _redirects             # SPA static redirect rule
│   ├── avatar.jpg             # Profile photo
│   ├── favicon.svg            # Custom SVG monogram favicon
│   ├── icons.svg              # SVG icons sprite
│   ├── robots.txt             # Search crawler directives
│   ├── sitemap.xml            # Production XML sitemap
│   └── Umar_Mukthar_Resume.pdf # Resume PDF
├── src/
│   ├── assets/                # Asset graphics
│   ├── components/            # Reusable components
│   │   ├── Certifications.tsx # Certifications grid component
│   │   ├── Contact.tsx        # Contact section wrapper
│   │   ├── Education.tsx      # Education section component
│   │   ├── Experience.tsx     # Experience timeline component
│   │   ├── Footer.tsx         # Footer with verified links
│   │   ├── GetInTouch.tsx     # Contact form with validation and mailto fallback
│   │   ├── Hero.tsx           # Hero introduction section
│   │   ├── Icons.tsx          # Custom SVG icon components
│   │   ├── Navbar.tsx         # Responsive navigation bar
│   │   ├── Projects.tsx       # Filterable projects grid
│   │   ├── Skills.tsx         # Skills matrix component
│   │   └── WelcomeOverlay.tsx # Multilingual greeting overlay
│   ├── context/
│   │   └── AppContext.tsx     # Theme and preference state context
│   ├── data/
│   │   └── portfolio.ts       # Structured portfolio data source of truth
│   ├── pages/                 # Route page components
│   │   ├── AboutPage.tsx      # About page
│   │   ├── CertificationDetail.tsx # Single certification view
│   │   ├── CertificationsPage.tsx  # Certifications list page
│   │   ├── ExperienceDetail.tsx    # Single experience view
│   │   ├── ExperiencePage.tsx      # Experience list page
│   │   ├── ProjectDetail.tsx       # Project case study view
│   │   └── WorkPage.tsx            # Projects portfolio page
│   ├── App.css                # Application styles
│   ├── App.tsx                # Main application component & HeadManager
│   ├── index.css              # Tailwind CSS styles and theme tokens
│   └── main.tsx               # React application entry point
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── .oxlintrc.json             # Oxlint configuration
├── index.html                 # HTML shell and metadata
├── package.json               # Project manifest and dependencies
├── package-lock.json          # Dependency lockfile
├── tsconfig.app.json          # App TypeScript configuration
├── tsconfig.json              # TypeScript root configuration
├── tsconfig.node.json         # Node/Vite TypeScript configuration
├── vercel.json                # Vercel SPA rewrite configuration
└── vite.config.ts             # Vite build configuration
```

---

## Prerequisites

- **Node.js:** `v20.19+` or `v22.12+` (Recommended: Node.js 22 LTS)
- **Package Manager:** `npm` v10+ (bundled with Node.js)
- **Git:** v2.30+

---

## Installation and Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio.git
   cd umar-mukthar-portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm ci
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open `http://localhost:5173` in your browser.

---

## Environment Configuration

The application runs locally and in production without required environment variables.

To route contact form submissions to a custom endpoint or third-party form handler:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Define `VITE_CONTACT_FORM_ENDPOINT`:
   ```env
   # Optional external POST endpoint (e.g., Formspree, Web3Forms)
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```

> **Fallback Behavior:** If `VITE_CONTACT_FORM_ENDPOINT` is not defined or left blank, submitting the contact form opens the visitor's local email client with a pre-filled `mailto:` draft containing their name, email, subject, and message.

---

## Production Build and Lint Commands

Compile the TypeScript application and build the production bundle:

```bash
# Typecheck and build static production bundle
npm run build
```

Compiled assets are written to the `dist/` directory.

### Code Quality and Linting

Run Oxlint checks:

```bash
# Run oxlint across the project
npm run lint
```

### Preview Production Build

Preview the compiled `dist/` directory locally:

```bash
# Serve local preview of the production build
npm run preview
```

---

## Deployment Information

The portfolio is deployed on **Vercel** connected to the `main` branch.

- **Custom Domain:** `https://umar-mukthar.is-a.dev/`
- **DNS Setup:** `is-a.dev` A record pointing to Vercel IP `216.198.79.1`.
- **SPA Rewrites:** Defined in [vercel.json](file:///vercel.json):
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```
- **Vercel Build Settings:**
  - **Framework Preset:** Vite
  - **Build Command:** `npm run build` (`tsc -b && vite build`)
  - **Output Directory:** `dist`
  - **Node.js Version:** `22.x`

---

## Contact and Social Links

- **Website:** [umar-mukthar.is-a.dev](https://umar-mukthar.is-a.dev/)
- **Email:** [umarom98425@gmail.com](mailto:umarom98425@gmail.com)
- **GitHub:** [UMARMUKTHAR03](https://github.com/UMARMUKTHAR03)
- **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/umarmukthar03/)
- **Telegram:** [Telegram](https://t.me/Umarom98425)
- **LeetCode:** [LeetCode](https://leetcode.com/umarom98425/)
- **CodeChef:** [CodeChef](https://www.codechef.com/users/umarom98425)
- **Codeforces:** [Codeforces](https://codeforces.com/profile/UMARMUKTHAR)

---

## License

This repository does not currently include an open-source license file. All rights are reserved by the author.
