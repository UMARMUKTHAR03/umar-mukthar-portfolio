export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI / ML' | 'Full-Stack' | 'Computer Vision' | 'Python & Systems';
  featured: boolean;
  image?: string;
  metrics: { label: string; value: string; condition?: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  evaluationNote: string;
  problemStatement: string;
  objectives: string[];
  architectureOverview: string;
  implementationDetails: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  futureImprovements: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  projectsCompleted: string[];
  skillsGained: string[];
  achievements: string[];
  certificateProofNote?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeText: string;
  credentialId?: string;
  credentialUrl?: string;
  skillsCovered: string[];
  description: string;
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
      "Artificial Intelligence & Machine Learning engineer passionate about neural sequence modeling, deep learning architectures, retrieval-augmented systems, and scalable full-stack applications. Transforming real-world engineering challenges into high-performance software through Python, PyTorch, and modern web technologies.",
    location: "Tamil Nadu, India",
    status: "Available for High-Impact Roles & Collaborations",
    email: "umarom98425@gmail.com",
    github: "https://github.com/UMARMUKTHAR03",
    linkedin: "https://www.linkedin.com/in/umarmukthar03/",
    domain: "https://umar-mukthar.is-a.dev",
    avatarUrl: "/avatar.jpg",
    hasResumeFile: false,
    education: {
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      institution: "Chennai Institute of Technology",
      period: "2022 – 2026",
      cgpa: "8.54 / 10.0",
      location: "Chennai, Tamil Nadu, India",
      highlights: [
        "Specialization in Deep Learning, Sequence Models, and Data Structures & Algorithms",
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
      stats: "800+ Solved",
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
      id: "skillvertex-ai-intern",
      company: "SkillVertex",
      role: "Artificial Intelligence Intern",
      period: "May 2024 – June 2024",
      duration: "2 Months",
      location: "Bengaluru, India (Remote)",
      type: "Internship",
      summary: "Evaluated machine learning algorithms, customer churn prediction pipelines, and deep-learning-based fraud detection techniques during internship research.",
      responsibilities: [
        "Evaluated machine learning algorithms for customer churn prediction with zero data leakage principles.",
        "Implemented and benchmarked deep-learning and gradient-boosted decision architectures for financial fraud detection.",
        "Conducted exploratory feature importance and model performance evaluations across synthetic and benchmark data cohorts.",
        "Designed feature engineering pipelines using Scikit-Learn and Pandas to maximize precision and recall trade-offs."
      ],
      techStack: ["Python", "Machine Learning", "Deep Learning", "Scikit-Learn", "Feature Engineering", "Pandas"],
      projectsCompleted: [
        "Customer churn prediction evaluation with zero data leakage",
        "Deep-learning and gradient boosted decision ensemble benchmarking for fraud risk"
      ],
      skillsGained: [
        "Zero-leakage cross-validation methodologies",
        "Hyperparameter optimization and model explainability",
        "Imbalanced dataset handling using SMOTE and threshold calibration"
      ],
      achievements: [
        "Achieved 95.29% holdout accuracy on customer churn retention benchmark",
        "Delivered comparative technical reports contrasting neural vs tree-based classification"
      ],
      certificateProofNote: "Internship completed with formal evaluation and verification available upon request."
    },
    {
      id: "coderscave-python-intern",
      company: "CodersCave",
      role: "Python Developer Intern",
      period: "November 2023 – December 2023",
      duration: "2 Months",
      location: "Remote",
      type: "Internship",
      summary: "Engineered four core Python desktop utility applications: sound recorder, calculator, random password generator, and typing speed tester.",
      responsibilities: [
        "Developed a standalone audio sound recorder with dynamic audio capture and export capabilities.",
        "Built an interactive desktop calculator with arithmetic expression parsing and error handling.",
        "Created a cryptographic random password generator with customizable character sets and strength validation.",
        "Implemented an interactive typing-speed tester calculating real-time WPM and accuracy metrics."
      ],
      techStack: ["Python", "Tkinter", "Audio Processing", "Cryptography", "Algorithms"],
      projectsCompleted: [
        "Voice Recorder with audio capture",
        "Safe Calculator with token parsing",
        "Cryptographic Password Generator",
        "Typing Speed Tester with WPM metrics"
      ],
      skillsGained: [
        "Desktop UI event loops and asynchronous input handling",
        "Cryptographic entropy and random number generation",
        "Lexical parsing of mathematical syntax without unsafe eval"
      ],
      achievements: [
        "Successfully delivered all four utility engines within deadlines with clean modular codebases",
        "Formed the architectural foundation later modernized into the CodersCave Mini Projects Hub"
      ],
      certificateProofNote: "Internship verification and repository code artifacts are publicly accessible on GitHub."
    }
  ] as Experience[],

  projects: [
    {
      id: "predictive-text-generator",
      title: "Predictive Text Generator (NeuroText AI V2)",
      subtitle: "Custom 3.2M-Parameter BiLSTM Sequence Model & Low-Latency CPU Inference",
      category: "AI / ML",
      featured: true,
      image: "/projects/predictive-dashboard.png",
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
      evaluationNote: "Reported metrics (15.18% Top-1, 27.44% Top-5) were measured on an authentic holdout test set of 4,862 unseen sequences with 587.82 perplexity.",
      problemStatement: "Traditional predictive typing solutions either rely on gigantic multi-gigabyte LLMs with high latency and heavy cloud compute requirements, or rudimentary n-gram statistics that lack semantic context.",
      objectives: [
        "Design and train a custom lightweight neural sequence model with low memory footprint (<400MB RSS).",
        "Deliver sub-5ms forward-pass inference on standard CPU servers for real-time keystroke suggestions.",
        "Ensure rigorous 0% train/test data leakage via pre-generation title partitioning."
      ],
      architectureOverview: "Dual-mode pipeline: A local PyTorch container runs the 3.2M BiLSTM (100d embedding, 150 bidirectional hidden units, 7,299 vocabulary projection head) for technical text, alongside an asynchronous Cloudflare Workers AI connector running Google Gemma 4 26B-A4B-IT for general email composition.",
      implementationDetails: [
        "PyTorch CPU inference loop optimized using torch.inference_mode() and pre-computed token tables.",
        "FastAPI asynchronous REST gateway with /predict, /generate, and telemetry endpoints.",
        "React + Vite frontend with live keystroke event listener, debouncing, and probability pill visualization."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing train-test data leakage when generating overlapping n-gram training sequences.",
          solution: "Enforced document/title-level partitioning before generating token sequences, guaranteeing unseen validation tokens."
        },
        {
          challenge: "Operating within free-tier container memory limits (512MB RAM ceiling).",
          solution: "Pruned vocabulary to 7,299 high-frequency tokens and eliminated heavy runtime transformer weights, maintaining peak RSS at 381MB."
        }
      ],
      futureImprovements: [
        "Quantization to INT8 using ONNX Runtime for an additional 2x throughput boost.",
        "User-specific adapter weights for fine-tuned personal vocabulary adaptation."
      ]
    },
    {
      id: "rag-ai-chatbot",
      title: "OmniMind AI — Multimodal Knowledge Assistant",
      subtitle: "Session-Isolated Hybrid Retrieval Engine & Multi-Format Document Grounding",
      category: "AI / ML",
      featured: true,
      image: "/projects/rag-dashboard.png",
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
      evaluationNote: "Benchmark Notice: The reported MRR 1.000 was measured on a deterministic 4-document multi-format sanity test to verify retrieval ranking integrity, not an exhaustive open-domain accuracy guarantee across massive multi-gigabyte corpora.",
      problemStatement: "Standard RAG systems often experience hallucinations, slow vector database lookups with heavy native dependencies, and opaque citations without verifiable source chunk provenance.",
      objectives: [
        "Build a dependency-light in-memory hybrid retrieval engine operating with sub-millisecond ranking.",
        "Enforce strict chunk attribution displaying exact file origin and section boundaries.",
        "Unify multi-format document ingestion (PDF, DOCX, XLSX, CSV, audio dictation)."
      ],
      architectureOverview: "Client UI submits queries or documents to a FastAPI gateway. The SemanticVectorIndex chunks text with semantic overlaps, extracts 128-dim hash vectors, and executes reciprocal rank fusion with BM25 scoring before feeding verified context to Groq or Google Gemini.",
      implementationDetails: [
        "Lightweight pure-Python vector index eliminating heavy C++ compilation dependencies.",
        "In-browser voice dictation transcribed via Groq Whisper Large v3 Turbo in under 800ms.",
        "Session-isolated ephemeral storage in /tmp ensuring privacy and zero persistence of confidential files."
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling complex tabular formats (XLSX, CSV) without losing column-row context.",
          solution: "Implemented markdown-table serialization per chunk so numerical headers persist across embeddings."
        },
        {
          challenge: "Native vector database installation failures on diverse deployment hosts.",
          solution: "Engineered a pure algebraic hash-vector calculation with cosine similarity, guaranteeing 100% portability."
        }
      ],
      futureImprovements: [
        "Multi-modal diagram understanding with Gemini Vision integration.",
        "Local open-weights fallback via Ollama for offline air-gapped deployments."
      ]
    },
    {
      id: "image-recognition-app",
      title: "Image Recognition App & Explainable AI",
      subtitle: "PyTorch MobileNetV3-Small Classifier with Grad-CAM Saliency Heatmaps",
      category: "Computer Vision",
      featured: true,
      image: "/projects/vision-prediction.png",
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
      evaluationNote: "Utilizes official MobileNetV3-Small weights pretrained on ImageNet-1K. Forward inference and Grad-CAM activation overlays are executed live on image bytes.",
      problemStatement: "Deep convolutional neural networks act as black-box decision systems, making it difficult for end-users to trust and verify why an image was categorized into a specific class.",
      objectives: [
        "Implement a responsive web classification studio classifying images across 1,000 ImageNet-1K categories.",
        "Provide explainable visual saliency heatmaps via Grad-CAM without slowing down inference.",
        "Support batch evaluation and CSV export for automated validation workflows."
      ],
      architectureOverview: "Uploaded images are validated and normalized with TorchVision. MobileNetV3-Small computes top-5 class logits. Simultaneously, backward gradients flow into the final convolutional layer (features.12) to compute normalized alpha-blended activation heatmaps.",
      implementationDetails: [
        "Thread-safe singleton model inference service under torch.inference_mode().",
        "Grad-CAM hook capturing forward feature maps and backward gradients for class-specific localization.",
        "Client-side canvas rendering of Jet color-gradient overlays on top of the original image."
      ],
      challengesAndSolutions: [
        {
          challenge: "Grad-CAM computational overhead during real-time image uploads.",
          solution: "Restricted gradient backpropagation strictly to the final convolutional block, keeping explanation latency under 120ms."
        },
        {
          challenge: "Handling varied image orientations, color spaces (RGBA/CMYK), and oversized uploads.",
          solution: "Implemented PIL and TorchVision preprocessing transforming any valid image into standardized [1, 3, 224, 224] RGB tensors."
        }
      ],
      futureImprovements: [
        "Bounding-box object detection integration using YOLOv8-Nano.",
        "Webcam real-time video stream classification via WebRTC."
      ]
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
      evaluationNote: "Deployed full-stack application featuring production PostgreSQL database, Stripe checkout webhooks, and Redis session caching.",
      problemStatement: "High-ticket e-commerce requires strict consistency, high availability, fraud-resistant administrative access, and atomic payment state transitions.",
      objectives: [
        "Build a robust monorepo separating customer storefront and administrative operations.",
        "Implement dual authentication: customer JWT sessions alongside strict HttpOnly cookie TOTP 2FA for administrators.",
        "Integrate automated real-time courier tracking APIs and webhook-driven order fulfillment."
      ],
      architectureOverview: "NestJS modular microservices architecture connected to PostgreSQL via TypeORM migrations, with Redis for rate-limiting and session caching. The Next.js 16 frontend uses server components for fast SEO indexing and client islands for dynamic cart interactions.",
      implementationDetails: [
        "ACID-compliant payment state machine executing atomic inventory decrements upon Stripe webhook verification.",
        "Custom NestJS guards enforcing role-based access control (Admin, Superadmin, Manager) and IP allowlists.",
        "Automated TypeORM migrations with 13-digit JavaScript timestamp conventions."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing cross-site token interception in administrative panels.",
          solution: "Replaced localStorage JWT storage with SameSite=Strict HttpOnly Secure cookies and same-origin proxy rewrites."
        },
        {
          challenge: "Database synchronization race conditions during concurrent checkout spikes.",
          solution: "Implemented pessimistic row locking in TypeORM transactions during inventory reservation."
        }
      ],
      futureImprovements: [
        "GraphQL federation for external merchant syndication.",
        "AI-driven visual search for luxury apparel recommendations."
      ]
    },
    {
      id: "fraud-detection-system",
      title: "FraudGuard AI — Financial Fraud Detection",
      subtitle: "Calibrated Decision Support Prototype with SHAP TreeExplainer",
      category: "AI / ML",
      featured: true,
      image: "/projects/fraud-dashboard.png",
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
      evaluationNote: "Dataset Disclosure: This prototype was evaluated on a calibrated synthetic benchmark of 40,000 records. It has not been validated on real bank or live cardholder transactions and is designed as an educational/portfolio decision-support system.",
      problemStatement: "Financial institutions face extreme class imbalance in fraud detection; models must minimize false negatives while maintaining high precision to avoid legitimate transaction friction.",
      objectives: [
        "Train gradient-boosted decision ensembles balancing precision and recall on low-prevalence transaction data.",
        "Provide real-time SHAP feature attributions showing exactly why a transaction was flagged.",
        "Deploy a lightweight FastAPI inference microservice with batch CSV upload capability."
      ],
      architectureOverview: "25 input transaction attributes (Time, Amount, V1–V20, derived temporal features, and risk score) are validated by Pydantic, scaled, and scored by an XGBoost model. SHAP TreeExplainer computes local force plots before JSON response dispatch.",
      implementationDetails: [
        "Benchmarked XGBoost against LightGBM and Random Forest baselines.",
        "Configurable probability thresholds separating transactions into Low, Medium, High, and Critical risk tiers.",
        "Ephemeral SQLite audit logging for recent transactions."
      ],
      challengesAndSolutions: [
        {
          challenge: "Extreme class imbalance (~2% fraudulent transactions).",
          solution: "Applied scale_pos_weight optimization and tuned decision thresholds on precision-recall curves rather than raw accuracy."
        },
        {
          challenge: "SHAP calculation latency on low-compute containers.",
          solution: "Utilized TreeExplainer with pre-computed background summaries, reducing explanation time to <15ms."
        }
      ],
      futureImprovements: [
        "Graph neural network (GNN) modeling to capture transaction rings and mule account networks.",
        "Kafka stream ingestion for real-time asynchronous scoring."
      ]
    },
    {
      id: "customer-churn-prediction",
      title: "ChurnIQ — Customer Churn Retention Platform",
      subtitle: "Explainable Machine Learning with Counterfactual What-If Simulator",
      category: "AI / ML",
      featured: true,
      image: "/projects/churn-dashboard.png",
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
      evaluationNote: "Metrics (95.29% accuracy, 97.70% precision, 0.9483 ROC-AUC) were benchmarked on holdout test splits with 898 true negatives and only 6 false positives.",
      problemStatement: "Customer attrition directly impacts Monthly Recurring Revenue (MRR); retention agents require not just predictions, but actionable counterfactual recommendations to save at-risk accounts.",
      objectives: [
        "Build a leak-free predictive classification pipeline forecasting subscriber churn probability.",
        "Develop an interactive What-If scenario simulator showing how contract modifications reduce churn risk.",
        "Generate audit-ready client-side PDF reports for retention strategy meetings."
      ],
      architectureOverview: "Preprocessing pipelines transform customer billing, contract, and usage metrics. A trained Gradient Boosting classifier computes churn likelihood, while a SHAP model highlights key positive and protective drivers.",
      implementationDetails: [
        "Zero-leakage pipeline fitting scalers and encoders strictly on the training partition.",
        "Counterfactual simulator re-evaluating risk in real time as contract duration or discounts are toggled.",
        "Client-side executive PDF generation using jsPDF with risk telemetry charts."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing subtle data leakage during categorical encoding and imputation.",
          solution: "Encapsulated all transformations into Scikit-Learn Pipelines fitted strictly on train splits."
        },
        {
          challenge: "Empowering non-technical retention staff with clear insights.",
          solution: "Translated complex SHAP values into plain-English playbooks (e.g., 'Upgrade to annual contract reduces risk by 28%')."
        }
      ],
      futureImprovements: [
        "Survival analysis modeling customer lifetime duration probabilities.",
        "Automated email outreach triggers via CRM webhook integrations."
      ]
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
      evaluationNote: "Preserves the algorithmic functionality of the four original internship desktop utilities inside a unified modern web platform.",
      problemStatement: "Desktop utility scripts in Tkinter often lack cross-platform accessibility, mobile responsiveness, and modern interactive visual feedback.",
      objectives: [
        "Preserve the algorithmic core of four original Python applications within modern full-stack web standards.",
        "Implement real-time audio visualization using the Web Audio API.",
        "Ensure secure client-side cryptographic randomness without network latency."
      ],
      architectureOverview: "A unified dashboard hosting four modular engines: audio recorder (HTML5 Canvas + MediaRecorder), typing velocity engine (keystroke delta timers), password generator (window.crypto), and safe calculator (tokenized parser).",
      implementationDetails: [
        "Safe two-pass lexical math evaluator replacing dangerous eval() calls.",
        "Real-time oscilloscope audio waveform rendered at 60 FPS on canvas.",
        "Live typing accuracy scoring with mistake position indexing and persistent speed history."
      ],
      challengesAndSolutions: [
        {
          challenge: "Eliminating security risks in mathematical formula parsing.",
          solution: "Built a custom token-based arithmetic parser enforcing operator precedence without executing dynamic code."
        },
        {
          challenge: "Lag-free audio visualization during long recording sessions.",
          solution: "Utilized AnalyserNode with requestAnimationFrame for efficient memory management."
        }
      ],
      futureImprovements: [
        "Export recordings directly to cloud audio storage.",
        "Add multi-language code typing speed benchmark modes."
      ]
    }
  ] as Project[],

  certifications: [
    {
      id: "nptel-computer-vision",
      title: "Computer Vision",
      issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
      date: "October 2023",
      badgeText: "Elite Certification",
      credentialId: "NPTEL23CS105S44890123",
      skillsCovered: ["Image Processing", "Feature Extraction", "Edge Detection", "Optical Flow", "Deep Visual Models", "Convolutional Neural Networks"],
      description: "Rigorous academic certification administered by IIT faculties covering mathematical and computational foundations of computer vision, spatial filtering, geometric transformations, stereo vision, and modern neural architectures.",
      verificationNote: "Official NPTEL Elite Certification verified through the Swayam / NPTEL examination registry."
    },
    {
      id: "coursera-deep-learning",
      title: "Deep Learning Specialization",
      issuer: "Coursera & DeepLearning.AI",
      date: "January 2024",
      badgeText: "Specialization Certificate",
      credentialId: "COURSERA-DL-SPEC-UM03",
      skillsCovered: ["Neural Networks", "Optimization Algorithms", "Convolutional Networks", "Sequence Models (LSTM/GRU)", "Hyperparameter Tuning", "TensorFlow & Keras"],
      description: "Five-course comprehensive deep learning specialization covering neural network fundamentals, backpropagation calculus, optimization techniques (Adam, RMSprop), CNN vision models, and RNN/LSTM sequence architectures.",
      verificationNote: "Completed coursework and hands-on lab evaluations certified by DeepLearning.AI."
    },
    {
      id: "cisco-networking-essentials",
      title: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      date: "May 2024",
      badgeText: "Verified Credential",
      credentialId: "CISCO-NET-ESS-132471",
      skillsCovered: ["TCP/IP & OSI Model", "IP Addressing & Subnetting", "Routing Fundamentals", "Network Security", "Packet Analysis"],
      description: "Foundational networking qualification covering internet protocols, local area networks, transport layer sockets, subnet design, packet routing, and network defense strategies essential for distributed backend engineering.",
      verificationNote: "Issued directly by Cisco Networking Academy upon practical laboratory and exam completion."
    },
    {
      id: "worldquant-applied-data-science",
      title: "Applied Data Science Lab",
      issuer: "WorldQuant University",
      date: "June 2025",
      badgeText: "Professional Lab Badge",
      credentialId: "WQU-ADSL-2025-06",
      skillsCovered: ["Exploratory Data Analysis", "Predictive Modeling", "Supervised & Unsupervised Learning", "SQL & Database Queries", "Data Visualization"],
      description: "Practical engineering lab solving real-world data science problems across housing price prediction, customer segmentation, earthquake damage modeling, and economic forecasting using Python data science ecosystems.",
      verificationNote: "Awarded by WorldQuant University upon rigorous code submission and peer-reviewed project delivery."
    }
  ] as Certification[]
};
