export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI / ML' | 'Full-Stack' | 'Computer Vision' | 'Python & Systems';
  featured: boolean;
  metrics: { label: string; value: string; condition?: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  evaluationNote: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  techStack: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeText: string;
  verificationNote: string;
}

export interface CodingProfile {
  platform: string;
  username: string;
  stats: string;
  highlight: string;
  url: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Umar Mukthar",
    title: "AI & Machine Learning Engineer | Python Developer | Full-Stack Developer",
    shortBio:
      "I'm an Artificial Intelligence and Machine Learning graduate passionate about building intelligent applications, machine learning systems, and practical software solutions. I enjoy transforming ideas into useful products through Python, AI, and modern web technologies.",
    location: "Chennai, India",
    status: "Available for Full-time Roles & High-Impact Projects",
    email: "umarom98425@gmail.com",
    github: "https://github.com/UMARMUKTHAR03",
    linkedin: "https://www.linkedin.com/in/umarmukthar03/",
    domain: "https://umar-mukthar.is-a.dev",
    avatarUrl: "/avatar.jpg",
    hasResumeFile: false, // Flag indicating whether Umar_Mukthar_Resume.pdf exists in /public
    education: {
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      institution: "Chennai Institute of Technology",
      period: "2022 – 2026",
      cgpa: "8.54 / 10.0",
      highlights: [
        "Specialization in Deep Learning, Natural Language Processing, and Data Structures",
        "800+ Algorithmic challenges solved across LeetCode, CodeChef, and Codeforces",
        "Active member of AI & Innovation research clubs"
      ]
    }
  },

  skills: {
    "Artificial Intelligence & ML": [
      "PyTorch", "Scikit-Learn", "FastAPI", "SHAP Explainability", 
      "MobileNetV3 (CV)", "BiLSTM (NLP)", "XGBoost", "LightGBM", 
      "Hybrid Retrieval (RAG)", "Feature Engineering"
    ],
    "Programming Languages": [
      "Python (Advanced)", "TypeScript", "JavaScript", "SQL", "C++", "HTML5/CSS3"
    ],
    "Backend & APIs": [
      "FastAPI", "NestJS", "Node.js", "Express", "RESTful APIs", "JWT & 2FA Auth"
    ],
    "Frontend Engineering": [
      "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Vite", "Responsive UX"
    ],
    "Databases & Cloud": [
      "PostgreSQL", "TypeORM", "Prisma", "Redis", "Supabase", "Git/GitHub", "Docker", "Render", "Vercel"
    ],
    "Software Practices": [
      "Microservices", "Data Preprocessing", "Model Evaluation & Benchmarking", "Clean Architecture", "CI/CD"
    ]
  },

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "umarom98425",
      stats: "800+ Problems Solved",
      highlight: "Rating: 1,480+ • Top 25% Globally",
      url: "https://leetcode.com/umarom98425/",
      icon: "Code2"
    },
    {
      platform: "CodeChef",
      username: "umarom98425",
      stats: "Rating: 1004+",
      highlight: "Div 3 & 4 Competitions",
      url: "https://www.codechef.com/users/umarom98425",
      icon: "Terminal"
    },
    {
      platform: "Codeforces",
      username: "UMARMUKTHAR",
      stats: "Rating: 847",
      highlight: "Active Problem Solver",
      url: "https://codeforces.com/profile/UMARMUKTHAR",
      icon: "Cpu"
    }
  ] as CodingProfile[],

  experiences: [
    {
      company: "SkillVertex",
      role: "Artificial Intelligence Intern",
      period: "May 2024 – June 2024",
      location: "Bengaluru, India (Remote)",
      type: "Internship",
      summary: "Applied machine learning algorithms, customer churn prediction pipelines, and deep-learning-based fraud detection techniques during internship research.",
      bullets: [
        "Evaluated machine learning algorithms for customer churn prediction with zero data leakage principles.",
        "Implemented and benchmarked deep-learning and gradient-boosted decision architectures for financial fraud detection.",
        "Conducted exploratory feature importance and model performance evaluations across synthetic and benchmark data cohorts."
      ],
      techStack: ["Python", "Machine Learning", "Deep Learning", "Scikit-Learn", "Feature Engineering"]
    },
    {
      company: "CodersCave",
      role: "Python Developer Intern",
      period: "November 2023 – December 2023",
      location: "Remote",
      type: "Internship",
      summary: "Engineered four core Python desktop utility applications: sound recorder, calculator, random password generator, and typing speed tester.",
      bullets: [
        "Developed a standalone audio sound recorder with audio capture and file export capabilities.",
        "Built an interactive desktop calculator with arithmetic expression parsing and error handling.",
        "Created a cryptographic random password generator with customizable character sets and strength validation.",
        "Implemented an interactive typing-speed tester calculating real-time WPM and accuracy metrics."
      ],
      techStack: ["Python", "Tkinter", "Audio Processing", "Cryptography", "Algorithms"]
    }
  ] as Experience[],

  projects: [
    {
      id: "predictive-text-generator",
      title: "Predictive Text Generator (NeuroText AI V2)",
      subtitle: "Custom 3.2M-Parameter BiLSTM Sequence Model & Low-Latency CPU Inference",
      category: "AI / ML",
      featured: true,
      description: "A production-grade language platform featuring a custom 3.2M-parameter Bidirectional LSTM neural network trained on authentic Medium technical publications. Features a leak-free title-split evaluation and sub-5ms CPU forward-pass latency.",
      metrics: [
        { label: "Model Architecture", value: "3.2M-Param BiLSTM", condition: "100d Embed -> 150u BiLSTM -> Linear" },
        { label: "Holdout Accuracy", value: "15.18% Top-1 / 27.44% Top-5", condition: "Evaluated on 4,862 unseen sequences (587.82 Perplexity)" },
        { label: "CPU Inference", value: "<5ms forward pass", condition: "Measured local PyTorch CPU forward pass" }
      ],
      tags: ["Python", "PyTorch", "BiLSTM", "FastAPI", "React", "Cloudflare Workers AI"],
      githubUrl: "https://github.com/UMARMUKTHAR03/predictive-text-generator",
      liveUrl: "https://umarmukthar03.github.io/predictive-text-generator/",
      highlights: [
        "Leak-free evaluation: Title-level 80/10/10 split executed prior to n-gram sequence generation to ensure 0% data leakage.",
        "Sub-5ms local CPU inference forward pass on PyTorch container with authentic Softmax probabilities.",
        "Integrated dual-mode inference with Cloudflare Workers AI (Gemma 4 26B-A4B-IT MoE) for general writing."
      ],
      evaluationNote: "Reported metrics (15.18% Top-1, 27.44% Top-5) were measured on an authentic holdout test set of 4,862 unseen sequences with 587.82 perplexity."
    },
    {
      id: "rag-ai-chatbot",
      title: "OmniMind AI — Multimodal Knowledge Assistant",
      subtitle: "Session-Isolated Hybrid Retrieval Engine & Multi-Format Document Grounding",
      category: "AI / ML",
      featured: true,
      description: "Enterprise knowledge assistant unifying PDF, DOCX, XLSX, and audio inputs with strict factual grounding. Combines 128-dimensional dense semantic hash vectors with BM25 lexical keyword scoring for sub-millisecond retrieval.",
      metrics: [
        { label: "Retrieval Latency", value: "0.27ms avg", condition: "Evaluated in-memory hybrid search" },
        { label: "Sanity Benchmark", value: "MRR 1.000 (Sanity)", condition: "Measured on 4-document multi-format sanity benchmark" },
        { label: "Document Formats", value: "PDF, XLSX, DOCX, CSV", condition: "With chunk-level source provenance" }
      ],
      tags: ["Python", "FastAPI", "Hybrid Search", "Groq Whisper", "Google Gemini", "React 19"],
      githubUrl: "https://github.com/UMARMUKTHAR03/rag-ai-chatbot",
      liveUrl: "https://umarmukthar03.github.io/rag-ai-chatbot/",
      highlights: [
        "Cross-platform hybrid retrieval pairing 128-dim dense hash projections with lexical BM25 matching.",
        "Strict provenance tracking mapping citations directly back to source documents and page units.",
        "Dual-engine cloud LLM routing across Groq and Google Gemini with Whisper Large v3 voice input."
      ],
      evaluationNote: "Benchmark Notice: The reported MRR 1.000 was measured on a deterministic 4-document multi-format sanity test to verify retrieval ranking integrity, not an exhaustive open-domain accuracy guarantee across massive multi-gigabyte corpora."
    },
    {
      id: "image-recognition-app",
      title: "Image Recognition App & Explainable AI",
      subtitle: "PyTorch MobileNetV3-Small Classifier with Grad-CAM Saliency Heatmaps",
      category: "Computer Vision",
      featured: true,
      description: "Deep learning computer vision platform engineered with PyTorch MobileNetV3-Small for ImageNet-1K (1,000 object classes) classification, paired with Grad-CAM activation mapping for visual decision transparency.",
      metrics: [
        { label: "Model Architecture", value: "MobileNetV3-Small", condition: "Pretrained ImageNet-1K weights" },
        { label: "Taxonomy", value: "1,000 ImageNet Classes", condition: "Full ImageNet-1K object categories" },
        { label: "Explainability", value: "Grad-CAM Conv Saliency", condition: "Computed on convolutional layer features.12" }
      ],
      tags: ["PyTorch", "MobileNetV3-Small", "Grad-CAM", "FastAPI", "React 19", "TorchVision"],
      githubUrl: "https://github.com/UMARMUKTHAR03/image-recognition-app",
      liveUrl: "https://umarmukthar03.github.io/image-recognition-app/",
      highlights: [
        "Lightweight MobileNetV3-Small architecture balancing ImageNet-1K precision with low CPU resource overhead.",
        "Authentic Grad-CAM backpropagation generating Jet colormap overlays from layer features.12 activations.",
        "Full image pipeline with TorchVision transforms, batch image evaluation, and CSV export."
      ],
      evaluationNote: "Utilizes official MobileNetV3-Small weights pretrained on ImageNet-1K. Forward inference and Grad-CAM activation overlays are executed live on image bytes."
    },
    {
      id: "fraud-detection-system",
      title: "FraudGuard AI — Financial Fraud Detection",
      subtitle: "Calibrated Decision Support Prototype with SHAP TreeExplainer",
      category: "AI / ML",
      featured: false,
      description: "A financial fraud detection decision-support prototype pairing an XGBoost champion classifier with SHAP feature explainability, risk tier thresholds, and CSV batch scoring.",
      metrics: [
        { label: "Benchmark Accuracy", value: "99.04%", condition: "Measured on 8,000 holdout records of calibrated 40k benchmark" },
        { label: "Benchmark Precision", value: "82.89%", condition: "XGBoost holdout precision on synthetic benchmark" },
        { label: "Holdout Recall", value: "77.50%", condition: "155 true positives, 45 false negatives" }
      ],
      tags: ["Python", "XGBoost", "FastAPI", "SHAP", "React", "Synthetic Benchmark"],
      githubUrl: "https://github.com/UMARMUKTHAR03/fraud-detection-system",
      liveUrl: "https://umarmukthar03.github.io/fraud-detection-system/",
      highlights: [
        "Trained and evaluated on a 40,000-record calibrated benchmark with ~2% fraud prevalence.",
        "Local feature attribution watermarks computed via SHAP TreeExplainer for decision transparency.",
        "Configurable decision thresholds mapping probabilities into Low, Medium, High, and Critical tiers."
      ],
      evaluationNote: "Dataset Disclosure: This prototype was evaluated on a calibrated synthetic benchmark of 40,000 records. It has not been validated on real bank or live cardholder transactions and is designed as an educational/portfolio decision-support system."
    },
    {
      id: "customer-churn-prediction",
      title: "ChurnIQ — Customer Churn Retention Platform",
      subtitle: "Explainable Machine Learning with Counterfactual What-If Simulator",
      category: "AI / ML",
      featured: false,
      description: "An explainable customer attrition analytics platform utilizing benchmarked Gradient Boosting models trained with zero data leakage, paired with SHAP explainability and What-If simulation.",
      metrics: [
        { label: "Holdout Accuracy", value: "95.29%", condition: "Benchmarked Gradient Boosting classifier" },
        { label: "Precision Rate", value: "97.70%", condition: "Holdout precision (only 6 false positives)" },
        { label: "ROC-AUC Score", value: "0.9483", condition: "Receiver Operating Characteristic curve" }
      ],
      tags: ["Python", "Scikit-Learn", "SHAP", "FastAPI", "What-If Simulator", "Zero Data Leakage"],
      githubUrl: "https://github.com/UMARMUKTHAR03/customer-churn-prediction",
      liveUrl: "https://umarmukthar03.github.io/customer-churn-prediction/",
      highlights: [
        "Rigorous preprocessing pipeline ensuring zero data leakage between training and evaluation splits.",
        "Interactive What-If counterfactual simulator executing real-time re-inference on modified terms.",
        "Automated client-side PDF retention assessment reports with SHAP feature risk drivers."
      ],
      evaluationNote: "Metrics (95.29% accuracy, 97.70% precision, 0.9483 ROC-AUC) were benchmarked on holdout test splits with 898 true negatives and only 6 false positives."
    },
    {
      id: "bazaarflow-luxe",
      title: "BazaarFlow LUXE — Luxury E-Commerce",
      subtitle: "Monorepo with NestJS, Next.js 16, PostgreSQL, Redis & Stripe",
      category: "Full-Stack",
      featured: true,
      description: "Full-featured, enterprise-grade luxury e-commerce platform built on a scalable NestJS backend and Next.js 16 frontend with Stripe payment flows, Redis caching, and dual JWT/Cookie auth systems.",
      metrics: [
        { label: "Backend Core", value: "NestJS + PostgreSQL", condition: "TypeORM schema with ACID compliance" },
        { label: "Frontend", value: "Next.js 16 + Tailwind", condition: "App router & server-side rendering" },
        { label: "Security", value: "HttpOnly 2FA + RBAC", condition: "Separate admin portal with TOTP" }
      ],
      tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "TypeORM", "Stripe", "Redis"],
      githubUrl: "https://github.com/UMARMUKTHAR03/ecommerce-platform",
      liveUrl: "https://bazaarflow-luxe.vercel.app",
      highlights: [
        "Separate administrative portal with two-factor authentication (TOTP) and IP-based access defense.",
        "Real-time shipment tracking integration (REDX tracking API) and automated receipt generation.",
        "Atomic database migrations and ACID-compliant order lifecycle state machine."
      ],
      evaluationNote: "Deployed full-stack application featuring production PostgreSQL database, Stripe checkout webhooks, and Redis session caching."
    },
    {
      id: "coderscave-mini-projects-hub",
      title: "Python Software Suite & Developer Hub",
      subtitle: "Multi-Tool Productivity & Utility Applications",
      category: "Python & Systems",
      featured: false,
      description: "A centralized developer toolbelt elevating four Python desktop projects into a unified modern web dashboard: audio voice recorder, typing speed tester, cryptographic password generator, and calculator.",
      metrics: [
        { label: "Tools Unified", value: "4 Modules", condition: "Recorder, Calculator, Password, Typing" },
        { label: "Frontend/Backend", value: "React 18 + FastAPI", condition: "TypeScript & Python 3.11" },
        { label: "Audio & Crypto", value: "Web Audio + Web Crypto", condition: "Safe client-side execution" }
      ],
      tags: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS", "Web Audio API"],
      githubUrl: "https://github.com/UMARMUKTHAR03/coderscave-mini-projects-hub",
      liveUrl: "https://umarmukthar03.github.io/coderscave-mini-projects-hub/",
      highlights: [
        "Elevates original CodersCave Python desktop tools into high-performance web applications.",
        "Interactive live typing tester with real-time WPM calculation and error highlight.",
        "Cryptographically secure password generation with client-side Web Crypto API."
      ],
      evaluationNote: "Preserves the algorithmic functionality of the four original internship desktop utilities inside a unified modern web platform."
    }
  ] as Project[],

  certifications: [
    {
      title: "Computer Vision",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      date: "October 2023",
      badgeText: "Elite Certification",
      verificationNote: "Coursework covering image processing, feature extraction, filtering, optical flow, and deep visual models."
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "January 2024",
      badgeText: "Specialization Certificate",
      verificationNote: "Neural networks, optimization algorithms, convolutional networks, sequence models, and hyperparameter tuning."
    },
    {
      title: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 2024",
      badgeText: "Verified Credential",
      verificationNote: "Network protocols, OSI model, IP addressing, routing fundamentals, and modern network security."
    },
    {
      title: "Applied Data Science Lab",
      issuer: "WorldQuant University",
      date: "June 2025",
      badgeText: "Professional Lab Badge",
      verificationNote: "End-to-end practical data science projects including exploratory analytics, machine learning pipelines, and predictive modeling."
    }
  ] as Certification[]
};
