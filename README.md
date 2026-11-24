# Umar Mukthar — Personal Developer Portfolio

Personal developer portfolio website showcasing engineering projects, machine learning models, hybrid retrieval architectures, and modern full-stack web applications.

- **Live Portfolio:** [https://umar-mukthar.is-a.dev](https://umar-mukthar.is-a.dev)
- **Vercel Deployment:** [https://umar-mukthar-portfolio.vercel.app](https://umar-mukthar-portfolio.vercel.app)
- **GitHub Repository:** [https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio](https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio)

---

## About the Developer

**Umar Mukthar** is an Artificial Intelligence and Machine Learning graduate (B.E. AIML, Chennai Institute of Technology, 2022–2026, CGPA: 8.54 / 10.0) passionate about building intelligent applications, machine learning systems, and practical software solutions.

- **Specializations:** Deep Learning, Neural Sequence Modeling, Hybrid Retrieval-Augmented Generation (RAG), Computer Vision, and Microservice APIs.
- **Problem Solving:** Over 800 algorithmic challenges solved across competitive programming platforms:
  - **LeetCode:** [umarom98425](https://leetcode.com/umarom98425/) (800+ solved, rating 1,480+, top 25% globally)
  - **CodeChef:** [umarom98425](https://www.codechef.com/users/umarom98425) (rating 1,004+)
  - **Codeforces:** [UMARMUKTHAR](https://codeforces.com/profile/UMARMUKTHAR) (rating 847)

---

## Technologies & Tools

### Frontend & Core
- **Framework:** React 19, TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4, CSS Custom Properties
- **Icons & Effects:** Lucide React, Canvas Confetti

### Engineering Practices & Architecture
- **Design:** Dark charcoal theme (`#09090b`), glassmorphism, responsive across mobile, tablet, and desktop viewports (320px–1920px).
- **Accessibility:** Skip-to-content navigation, button groups with `aria-pressed`, explicit form labels, and visible focus indicators (`focus:ring-2`).
- **SEO & Search Indexing:** Canonical URLs pointing to `https://umar-mukthar.is-a.dev`, Open Graph, Twitter Card tags, valid `robots.txt`, XML sitemap, and Schema.org `Person` JSON-LD structured data.

---

## Featured Projects Highlighted in the Portfolio

1. **Predictive Text Generator (NeuroText AI V2)**
   - Custom 3.2M-parameter Bidirectional LSTM language model with embedding and dropout layers.
   - Evaluated on a leak-free 80/10/10 title split: 15.18% Top-1, 27.44% Top-5 on 4,862 unseen sequences (587.82 Perplexity).
   - Low-latency sub-5ms CPU forward-pass inference via FastAPI, integrated with Cloudflare Workers AI for general-mode drafting.

2. **OmniMind AI — Multimodal Knowledge Assistant**
   - Grounded document assistant supporting multi-format ingestion (PDF, DOCX, XLSX, CSV).
   - In-memory hybrid retrieval pairing 128-dimensional dense semantic hash vectors with BM25 lexical keyword matching (0.27ms avg latency).
   - Provenance tracking with chunk attribution and dual-engine cloud LLM routing (Groq and Google Gemini).

3. **Image Recognition App & Explainable AI**
   - Deep learning computer vision platform built with PyTorch MobileNetV3-Small for ImageNet-1K (1,000 object categories) classification.
   - Live Grad-CAM (Gradient-weighted Class Activation Mapping) saliency heatmaps backpropagated from layer `features.12` for visual decision transparency.

4. **FraudGuard AI — Financial Fraud Detection**
   - Decision-support prototype combining XGBoost classification with local SHAP feature attributions.
   - Evaluated on an 8,000-sample holdout split of a calibrated 40k synthetic benchmark (99.04% accuracy, 82.89% precision, 77.50% recall).

5. **ChurnIQ — Customer Churn Retention Platform**
   - Subscriber attrition analytics model trained with zero data leakage (95.29% accuracy, 97.70% precision, 0.9483 ROC-AUC).
   - Features an interactive What-If counterfactual scenario simulator and client-generated PDF audit assessments.

6. **BazaarFlow LUXE — Luxury E-Commerce Platform**
   - Monorepo full-stack platform built with NestJS, Next.js 16, PostgreSQL, TypeORM, Redis, and Stripe checkout.
   - Includes an administrative management portal with TOTP two-factor authentication and real-time shipment tracking.

7. **CodersCave Software Suite & Developer Hub**
   - Centralized developer toolbelt elevating four desktop utilities (audio recorder, safe calculator, cryptographic password generator, and typing speed tester) into a modern full-stack application.

---

## Project Structure

```
umar-mukthar-portfolio/
├── public/
│   ├── avatar.jpg          # Authentic GitHub profile portrait
│   ├── favicon.svg         # Monogram SVG favicon
│   ├── robots.txt          # Search engine crawl directives & sitemap location
│   └── sitemap.xml         # XML sitemap pointing to https://umar-mukthar.is-a.dev/
├── src/
│   ├── assets/             # Static graphics and icons
│   ├── components/
│   │   ├── Certifications.tsx # Professional credentials grid
│   │   ├── Contact.tsx        # Validated contact form with endpoint / mailto fallback
│   │   ├── Education.tsx      # Academic degree & coursework card
│   │   ├── Experience.tsx     # Work timeline and technical contributions
│   │   ├── Footer.tsx         # Verified social links and back-to-top control
│   │   ├── Hero.tsx           # Headline, bio, avatar, metrics, and terminal card
│   │   ├── Icons.tsx          # Custom accessible SVG icons for GitHub & LinkedIn
│   │   ├── Navbar.tsx         # Responsive navbar with accessible mobile drawer
│   │   ├── Projects.tsx       # Filterable projects grid with evaluation disclosures
│   │   └── Skills.tsx         # Categorized technical competencies and coding handles
│   ├── data/
│   │   └── portfolio.ts       # Structured portfolio data model and metrics
│   ├── App.tsx                # Main layout with skip-to-content landmark
│   ├── index.css              # Tailwind base imports, design tokens, and glow effects
│   └── main.tsx               # React application entry point
├── .env.example               # Environment variables template
├── .gitignore                 # Excludes secrets, node_modules, and build outputs
├── index.html                 # Semantic HTML shell, SEO metadata, and JSON-LD schema
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration with Tailwind CSS plugin
```

---

## Getting Started

### Prerequisites
- **Node.js:** v20.19+ or v22.12+ (Recommended: Node.js 22 LTS)
- **Package Manager:** npm v10+

### Installation

```bash
# Clone the repository
git clone https://github.com/UMARMUKTHAR03/umar-mukthar-portfolio.git
cd umar-mukthar-portfolio

# Install project dependencies
npm ci
```

### Local Development

```bash
# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Contact Form Endpoint Setup (Optional)

The contact form is configured to work out-of-the-box. If no external backend endpoint is specified, it opens a pre-filled draft directly in the visitor's default email client (`mailto:`).

To connect an external form service (such as Formspree or Web3Forms):
1. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and set your endpoint URL:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

---

## Build & Deployment Instructions

### Production Build

```bash
# Typecheck and compile production bundle
npm run build
```

The optimized static production bundle will be output to the `dist/` directory.

### Code Quality & Linting

```bash
# Run oxlint checks
npm run lint
```

### Deployment to Vercel

This project is deployed to Vercel and configured for automatic continuous deployment from the `main` branch:

1. Import the repository `UMARMUKTHAR03/umar-mukthar-portfolio` in [Vercel](https://vercel.com).
2. Set the build command to `npm run build` and output directory to `dist`.
3. In Project Settings, ensure the Node.js version is set to **22.x**.
4. Set the custom production domain to `umar-mukthar.is-a.dev` (with CNAME record configured according to `is-a.dev` instructions).

---

## Contact & Social Links

- **Website:** [https://umar-mukthar.is-a.dev](https://umar-mukthar.is-a.dev)
- **Email:** [umarom98425@gmail.com](mailto:umarom98425@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/umarmukthar03/](https://www.linkedin.com/in/umarmukthar03/)
- **GitHub:** [https://github.com/UMARMUKTHAR03](https://github.com/UMARMUKTHAR03)
- **LeetCode:** [https://leetcode.com/umarom98425/](https://leetcode.com/umarom98425/)
- **Codeforces:** [https://codeforces.com/profile/UMARMUKTHAR](https://codeforces.com/profile/UMARMUKTHAR)
- **CodeChef:** [https://www.codechef.com/users/umarom98425](https://www.codechef.com/users/umarom98425)

---

## License

This project is open-source and available under the [MIT License](LICENSE).
