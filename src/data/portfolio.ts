export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'AI / ML' | 'Full-Stack' | 'Computer Vision' | 'Python & Systems';
  featured: boolean;
  image?: string;
  architectureImage?: string;
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
  program?: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  certificateFile?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  category: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  certificateFile?: string;
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
    title: "AI & Machine Learning Engineer | Full-Stack Developer",
    shortBio:
      "Fresh Artificial Intelligence and Machine Learning graduate (2026) from Chennai Institute of Technology with skills in Python, NLP, Computer Vision, and Full-Stack Development. Hands-on experience developing machine-learning models, AI-powered applications, and Python-based tools through virtual internships and academic research projects.",
    location: "Tamil Nadu, India",
    email: "umarom98425@gmail.com",
    github: "https://github.com/UMARMUKTHAR03",
    linkedin: "https://www.linkedin.com/in/umarmukthar03/",
    telegram: "https://t.me/Umarom98425",
    domain: "https://umar-mukthar.is-a.dev",
    avatarUrl: "/avatar.jpg",
    resumeUrl: "/Umar_Mukthar_Resume.pdf",
    education: {
      degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
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
    "Programming Languages": ["Python", "Java", "SQL", "JavaScript", "TypeScript", "C++"],
    "AI & Machine Learning": [
      "PyTorch", "TensorFlow", "Scikit-Learn", "Computer Vision", "NLP",
      "Deep Learning", "Generative AI", "Neural Networks", "XGBoost", "LightGBM", "SHAP"
    ],
    "Frameworks & Backend": ["FastAPI", "Flask", "Spring Boot", "REST APIs", "JWT", "Spring Security"],
    "Frontend & UI": ["React", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"],
    "AI Tools & Vector Stores": ["LangChain", "ChromaDB", "SHAP", "Groq Whisper", "Prompt Engineering"],
    "Databases & Cloud": ["MySQL", "PostgreSQL", "AWS", "Cloud Computing", "Docker", "Git", "GitHub Actions", "Vercel"]
  },

  skillsTicker: [
    "Python", "Artificial Intelligence", "Machine Learning", "Deep Learning",
    "Generative AI", "Computer Vision", "Natural Language Processing", "Neural Networks",
    "TensorFlow", "PyTorch", "Flask", "Full-Stack Development", "HTML", "CSS",
    "JavaScript", "Cloud Computing", "AWS", "Data Science", "SQL", "Git", "API Development"
  ],

  codingProfiles: [
    {
      platform: "LeetCode",
      username: "umarom98425",
      stats: "800+ Solved",
      highlight: "Rating: 1480 • Top 25%",
      url: "https://leetcode.com/umarom98425/",
      icon: "Code2"
    },
    {
      platform: "CodeChef",
      username: "umarom98425",
      stats: "Rating: 1004+",
      highlight: "Active Contestant",
      url: "https://www.codechef.com/users/umarom98425",
      icon: "Terminal"
    },
    {
      platform: "Codeforces",
      username: "UMARMUKTHAR",
      stats: "Rating: 847",
      highlight: "Contest Participant",
      url: "https://codeforces.com/profile/UMARMUKTHAR",
      icon: "Cpu"
    }
  ] as CodingProfile[],

  experiences: [
    {
      id: "aicte-eduskills-intern",
      company: "All India Council for Technical Education (AICTE)",
      program: "AICTE–EduSkills Virtual Internship",
      role: "AI-ML Virtual Intern",
      period: "October 2024 – December 2024",
      duration: "10 Weeks",
      location: "Remote",
      type: "Virtual Internship",
      summary:
        "Successfully completed a 10-week AI-ML Virtual Internship through the AICTE–EduSkills Virtual Internship program at Chennai Institute of Technology, supported by the India Edu Program and Google for Developers.",
      responsibilities: [
        "Gained exposure to Artificial Intelligence and Machine Learning concepts.",
        "Developed an understanding of AI/ML applications through structured virtual internship activities.",
        "Strengthened technical knowledge of AI and ML fundamentals.",
        "Explored practical applications of artificial intelligence and machine learning."
      ],
      techStack: ["Artificial Intelligence", "Machine Learning", "AI Fundamentals", "Technical Learning"],
      certificateFile: "/certificates/eduskillcerti.pdf"
    },
    {
      id: "cognifyz-web-intern",
      company: "Cognifyz Technologies",
      role: "Web Development Intern",
      period: "May 2024 – June 2024",
      duration: "2 Months",
      location: "Remote",
      type: "Internship",
      summary:
        "Completed a Web Development Internship at Cognifyz Technologies from May to June 2024, focusing on hands-on web assignments, structured problem-solving, and responsive design.",
      responsibilities: [
        "Worked on web development assignments and practical technical tasks.",
        "Strengthened web development knowledge through hands-on learning.",
        "Improved technical problem-solving and attention to detail.",
        "Demonstrated communication, coordination, and adaptability.",
        "Developed practical experience through continuous learning and assigned activities."
      ],
      techStack: ["Web Development", "HTML", "Frontend Development", "Problem Solving", "Communication"],
      certificateFile: "/certificates/COGNIFYZ.pdf"
    },
    {
      id: "coderscave-python-intern",
      company: "CodersCave",
      role: "Python Development Intern",
      period: "November 2023 – December 2023",
      duration: "2 Months",
      location: "Remote",
      type: "Virtual Internship",
      summary:
        "Completed a virtual internship in Python Development at CodersCave, engineering desktop tools and utility applications with modular Python codebases.",
      responsibilities: [
        "Developed a Calculator application using Python.",
        "Built a Voice Recorder application using Python libraries.",
        "Applied programming concepts to practical development tasks.",
        "Practiced debugging and logical problem-solving.",
        "Strengthened Python programming skills through hands-on assignments."
      ],
      techStack: ["Python", "Application Development", "Debugging", "Problem Solving"],
      certificateFile: "/certificates/CODERSCAVE.pdf"
    },
    {
      id: "skillvertex-ai-intern",
      company: "SkillVertex",
      role: "Artificial Intelligence Intern",
      period: "May 2023 – June 2023",
      duration: "2 Months",
      location: "Remote",
      type: "Internship",
      summary:
        "Completed Artificial Intelligence training at SkillVertex from May to June 2023, gaining foundational knowledge across ML, NLP, computer vision, and robotics.",
      responsibilities: [
        "Gained foundational knowledge of Artificial Intelligence.",
        "Studied Machine Learning, Natural Language Processing, Computer Vision, and Robotics.",
        "Explored AI concepts and their applications to real-world problems.",
        "Participated in technical assignments, learning activities, and projects.",
        "Strengthened analytical thinking and problem-solving skills."
      ],
      techStack: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics"],
      certificateFile: "/certificates/skillvertex.pdf"
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
      architectureOverview: "Dual-mode pipeline: A local PyTorch container runs the 3.2M BiLSTM for technical text, alongside an asynchronous Cloudflare Workers AI connector running Google Gemma 4 for general text composition.",
      implementationDetails: [
        "PyTorch CPU inference loop optimized using torch.inference_mode().",
        "FastAPI asynchronous REST gateway with /predict, /generate, and telemetry endpoints.",
        "React + Vite frontend with live keystroke event listener and debouncing."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing train-test data leakage when generating overlapping n-gram training sequences.",
          solution: "Enforced document/title-level partitioning before generating token sequences, guaranteeing unseen validation tokens."
        }
      ],
      futureImprovements: [
        "Quantization to INT8 using ONNX Runtime for additional throughput.",
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
      evaluationNote: "Benchmark Notice: The reported MRR 1.000 was measured on a deterministic 4-document multi-format sanity test to verify retrieval ranking integrity.",
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
      metrics: [
        { label: "Model Architecture", value: "MobileNetV3-Small", condition: "Pretrained ImageNet-1K weights" },
        { label: "Taxonomy", value: "1,000 ImageNet Classes", condition: "Full ImageNet-1K object categories" },
        { label: "Explainability", value: "Grad-CAM Conv Saliency", condition: "Computed on final convolutional layer" }
      ],
      tags: ["PyTorch", "MobileNetV3-Small", "Grad-CAM", "FastAPI", "React 19", "TorchVision"],
      githubUrl: "https://github.com/UMARMUKTHAR03/image-recognition-app",
      liveUrl: "https://umarmukthar03.github.io/image-recognition-app/",
      highlights: [
        "Lightweight MobileNetV3-Small architecture balancing ImageNet-1K precision with low CPU resource overhead.",
        "Authentic Grad-CAM backpropagation generating Jet colormap overlays for explainability.",
        "Full image pipeline with TorchVision transforms, batch image evaluation, and CSV export."
      ],
      evaluationNote: "Utilizes official MobileNetV3-Small weights pretrained on ImageNet-1K. Forward inference and Grad-CAM activation overlays are executed live on image bytes.",
      problemStatement: "Deep convolutional neural networks act as black-box decision systems, making it difficult for end-users to trust and verify why an image was categorized into a specific class.",
      objectives: [
        "Implement a responsive web classification studio classifying images across 1,000 ImageNet-1K categories.",
        "Provide explainable visual saliency heatmaps via Grad-CAM without slowing down inference.",
        "Support batch evaluation and CSV export for automated validation workflows."
      ],
      architectureOverview: "Uploaded images are validated and normalized with TorchVision. MobileNetV3-Small computes top-5 class logits. Simultaneously, backward gradients flow into the final convolutional layer to compute normalized alpha-blended activation heatmaps.",
      implementationDetails: [
        "Thread-safe singleton model inference service under torch.inference_mode().",
        "Grad-CAM hook capturing forward feature maps and backward gradients for class-specific localization.",
        "Client-side canvas rendering of Jet color-gradient overlays on top of the original image."
      ],
      challengesAndSolutions: [
        {
          challenge: "Grad-CAM computational overhead during real-time image uploads.",
          solution: "Restricted gradient backpropagation strictly to the final convolutional block, keeping explanation latency under 120ms."
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
      image: "/projects/bazaarflow-homepage.png",
      architectureImage: "/projects/bazaarflow-product-detail.png",
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
      evaluationNote: "Dataset Disclosure: This prototype was evaluated on a calibrated synthetic benchmark of 40,000 records. It has not been validated on real bank or live cardholder transactions and is designed as an educational decision-support system.",
      problemStatement: "Financial institutions face extreme class imbalance in fraud detection; models must minimize false negatives while maintaining high precision to avoid legitimate transaction friction.",
      objectives: [
        "Train gradient-boosted decision ensembles balancing precision and recall on low-prevalence transaction data.",
        "Provide real-time SHAP feature attributions showing exactly why a transaction was flagged.",
        "Deploy a lightweight FastAPI inference microservice with batch CSV upload capability."
      ],
      architectureOverview: "25 input transaction attributes are validated by Pydantic, scaled, and scored by an XGBoost model. SHAP TreeExplainer computes local force plots before JSON response dispatch.",
      implementationDetails: [
        "Benchmarked XGBoost against LightGBM and Random Forest baselines.",
        "Configurable probability thresholds separating transactions into Low, Medium, High, and Critical risk tiers."
      ],
      challengesAndSolutions: [
        {
          challenge: "Extreme class imbalance (~2% fraudulent transactions).",
          solution: "Applied scale_pos_weight optimization and tuned decision thresholds on precision-recall curves rather than raw accuracy."
        }
      ],
      futureImprovements: [
        "Graph neural network (GNN) modeling to capture transaction rings and mule account networks."
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
        "Counterfactual simulator re-evaluating risk in real time as contract duration or discounts are toggled."
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing subtle data leakage during categorical encoding and imputation.",
          solution: "Encapsulated all transformations into Scikit-Learn Pipelines fitted strictly on train splits."
        }
      ],
      futureImprovements: [
        "Survival analysis modeling customer lifetime duration probabilities."
      ]
    },
    {
      id: "coderscave-mini-projects-hub",
      title: "Python Software Suite & Developer Hub",
      subtitle: "Multi-Tool Productivity & Utility Applications",
      category: "Python & Systems",
      featured: true,
      image: "/projects/coderscave-dashboard.png",
      description: "A centralized developer toolbelt elevating four Python desktop projects into a unified modern web dashboard: audio voice recorder, typing speed tester, cryptographic password generator, and calculator.",
      metrics: [
        { label: "Tools Unified", value: "4 Modules", condition: "Audio, Crypto, Typing, Calculator" },
        { label: "Frontend/Backend", value: "React 18 + FastAPI", condition: "Modernized from Tkinter desktop core" }
      ],
      tags: ["Python", "FastAPI", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/UMARMUKTHAR03/coderscave-mini-projects-hub",
      liveUrl: "https://umarmukthar03.github.io/coderscave-mini-projects-hub/",
      highlights: [
        "Consolidated 4 standalone Python desktop utilities into a responsive single-page application.",
        "Real-time audio recording in-browser with blob playback and download.",
        "Cryptographic password generation with customizable entropy."
      ],
      evaluationNote: "Modernized web application unifying original internship desktop utilities built during CodersCave internship.",
      problemStatement: "Utility applications are often fragmented across disparate CLI scripts or desktop UI loops, lacking centralized deployment and web accessibility.",
      objectives: [
        "Modernize desktop Tkinter tools into a fast, accessible web portal.",
        "Deliver sub-second response times for cryptographic and mathematical operations via FastAPI.",
        "Provide in-browser recording without third-party audio plugin dependencies."
      ],
      architectureOverview: "FastAPI handles arithmetic validation and audio processing endpoints, while React and Tailwind render a modular tabbed interface with real-time state management.",
      implementationDetails: [
        "Audio recording via Web Audio API with WAV container encoding.",
        "Real-time typing speed calculation with live WPM and accuracy telemetry."
      ],
      challengesAndSolutions: [
        {
          challenge: "Cross-browser compatibility for browser audio capture.",
          solution: "Implemented MediaRecorder API fallback with PCM blob transcoding."
        }
      ],
      futureImprovements: [
        "Speech-to-text transcription for recorded audio notes."
      ]
    }
  ] as Project[],

  certifications: [
    // A. Energy and Sustainability
    {
      id: "energy-literacy",
      title: "Certificate of Energy Literacy",
      issuer: "Energy Swaraj Foundation",
      issued: "January 2024",
      category: "Sustainability and Other Learning",
      credentialId: "ELT24-1-f6c3",
      description: "Successfully completed the Energy Literacy Training program offered by the Energy Swaraj Foundation, covering 12 modules. Gained knowledge of energy generation and consumption, energy wastage, carbon footprint, environmental impact, energy conservation, alternative energy solutions, carbon neutrality, solar energy misconceptions, and approaches to adopting solar energy solutions.",
      skills: ["Energy Literacy", "Renewable Energy", "Sustainability", "Carbon Footprint Awareness", "Energy Conservation"],
      certificateFile: "/certificates/UMAR MUKTHAR O M-ELT (1).pdf"
    },
    // B. AWS and Cloud Computing
    {
      id: "aws-cloud-solutions-architect",
      title: "AWS Cloud Solutions Architect",
      issuer: "Amazon Web Services (AWS) via Coursera",
      issued: "January 2024",
      category: "Cloud Computing and AWS",
      description: "Successfully completed the AWS Cloud Solutions Architect Professional Certificate, consisting of four courses offered through Coursera by Amazon Web Services. Developed foundational knowledge of cloud architecture, AWS services, cloud infrastructure, and data lake design. Learned about deploying cloud solutions involving networks, systems, and application services, while preparing for the AWS Certified Solutions Architect – Associate examination.",
      skills: ["Amazon Web Services", "Cloud Computing", "Cloud Architecture", "Solution Architecture"],
      certificateFile: "/certificates/AWS Cloud Solutions Architect.pdf"
    },
    {
      id: "aws-cloud-technical-essentials",
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS) via Coursera",
      issued: "January 2024",
      category: "Cloud Computing and AWS",
      description: "Successfully completed the AWS Cloud Technical Essentials course, authorized by Amazon Web Services and offered through Coursera. Developed foundational knowledge of AWS cloud computing concepts, core AWS services, cloud infrastructure, and the fundamentals of building and deploying applications in the AWS Cloud.",
      skills: ["AWS", "Cloud Computing", "Cloud Infrastructure", "Application Deployment"],
      certificateFile: "/certificates/AWS Cloud Technical Essentials.pdf"
    },
    {
      id: "architecting-solutions-on-aws",
      title: "Architecting Solutions on AWS",
      issuer: "Amazon Web Services (AWS) via Coursera",
      issued: "January 2024",
      category: "Cloud Computing and AWS",
      description: "Successfully completed the Architecting Solutions on AWS course, authorized by Amazon Web Services and offered through Coursera. Gained foundational knowledge of AWS cloud architecture, cloud solution design, and the principles of building scalable, reliable, and cost-effective cloud solutions.",
      skills: ["AWS", "Cloud Computing", "Cloud Architecture", "Solution Architecture"],
      certificateFile: "/certificates/Architecting Solutions on AWS.pdf"
    },
    {
      id: "designing-data-lakes-aws",
      title: "Introduction to Designing Data Lakes on AWS",
      issuer: "Amazon Web Services (AWS) via Coursera",
      issued: "January 2024",
      category: "Cloud Computing and AWS",
      description: "Successfully completed the Introduction to Designing Data Lakes on AWS course, authorized by Amazon Web Services and offered through Coursera. Gained foundational knowledge of AWS data lakes and their role in storing, managing, and analyzing large volumes of data to support data-driven decision-making.",
      skills: ["AWS", "Data Lakes", "Cloud Computing", "Data Storage", "Data Management"],
      certificateFile: "/certificates/Introduction to Designing Data Lakes on AWS.pdf"
    },
    {
      id: "exam-prep-aws-solutions-architect",
      title: "Exam Prep: AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS) via Coursera",
      issued: "January 2024",
      category: "Cloud Computing and AWS",
      description: "Successfully completed the Exam Prep: AWS Certified Solutions Architect – Associate course, authorized by Amazon Web Services and offered through Coursera. Gained foundational knowledge of AWS cloud architecture and the concepts required to prepare for the AWS Certified Solutions Architect – Associate examination.",
      skills: ["AWS", "Cloud Computing", "Cloud Architecture", "AWS Solutions Architecture"],
      certificateFile: "/certificates/Exam Prep AWS Certified Solutions Architect -Associate.pdf"
    },
    // C. Mathematics for Machine Learning and Data Science
    {
      id: "linear-algebra-ml",
      title: "Linear Algebra for Machine Learning and Data Science",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Mathematics and Data Science",
      description: "Successfully completed the Linear Algebra for Machine Learning and Data Science course, authorized by DeepLearning.AI and offered through Coursera. Developed foundational knowledge of linear algebra concepts relevant to machine learning and data science, strengthening my understanding of mathematical representations and computations used in machine learning models.",
      skills: ["Linear Algebra", "Mathematics for Machine Learning", "Machine Learning", "Data Science"],
      certificateFile: "/certificates/Linear Algebra for Machine Learning and Data Science.pdf"
    },
    {
      id: "calculus-ml",
      title: "Calculus for Machine Learning and Data Science",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Mathematics and Data Science",
      description: "Successfully completed the Calculus for Machine Learning and Data Science course, authorized by DeepLearning.AI and offered through Coursera. Developed foundational knowledge of calculus concepts relevant to machine learning and data science, strengthening my mathematical understanding for analyzing data and optimizing machine learning models.",
      skills: ["Calculus", "Mathematics for Machine Learning", "Machine Learning", "Mathematical Optimization"],
      certificateFile: "/certificates/Calculus for Machine Learning and Data Science.pdf"
    },
    {
      id: "probability-statistics-ml",
      title: "Probability & Statistics for Machine Learning & Data Science",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Mathematics and Data Science",
      description: "Successfully completed the Probability & Statistics for Machine Learning & Data Science course, authorized by DeepLearning.AI and offered through Coursera. Developed foundational knowledge of probability and statistics concepts essential for machine learning and data science, supporting data analysis, statistical reasoning, and informed decision-making.",
      skills: ["Probability", "Statistics", "Machine Learning", "Data Science", "Statistical Analysis"],
      certificateFile: "/certificates/Probability & Statistics for Machine Learning &Data Science.pdf"
    },
    {
      id: "mathematics-for-ml-specialization",
      title: "Mathematics for Machine Learning and Data Science",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Mathematics and Data Science",
      description: "Successfully completed the Mathematics for Machine Learning and Data Science Specialization, consisting of three courses offered through Coursera by DeepLearning.AI. Developed a foundation in mathematical concepts essential for machine learning and data science, including linear algebra, calculus, probability, and statistics.",
      skills: ["Mathematics for Machine Learning", "Linear Algebra", "Calculus", "Probability", "Statistics", "Data Science"],
      certificateFile: "/certificates/Mathematics for Machine Learning and Data Science.pdf"
    },
    // D. Data Visualization
    {
      id: "fundamentals-of-data-visualization",
      title: "Fundamentals of Data Visualization",
      issuer: "University of Colorado Boulder via Coursera",
      issued: "January 2024",
      category: "Mathematics and Data Science",
      description: "Successfully completed the Fundamentals of Data Visualization course, authorized by the University of Colorado Boulder and offered through Coursera. Developed foundational knowledge of data visualization principles and techniques for presenting data clearly and effectively to communicate insights and support data-driven decision-making.",
      skills: ["Data Visualization", "Data Analysis", "Data Presentation", "Visual Communication"],
      certificateFile: "/certificates/Fundamentals of Data Visualization(UCB).pdf"
    },
    // E. Deep Learning
    {
      id: "neural-networks-deep-learning",
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Deep Learning",
      description: "Successfully completed the Neural Networks and Deep Learning course, authorized by DeepLearning.AI and offered through Coursera. Gained foundational knowledge of neural networks, deep learning architectures, forward and backward propagation, and techniques for training neural network models.",
      skills: ["Deep Learning", "Neural Networks", "Artificial Intelligence", "Backpropagation", "Machine Learning"],
      certificateFile: "/certificates/Neural Networks and Deep Learning.pdf"
    },
    {
      id: "structuring-ml-projects",
      title: "Structuring Machine Learning Projects",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the Structuring Machine Learning Projects course, authorized by DeepLearning.AI and offered through Coursera. Gained knowledge of strategies for structuring machine learning projects, analyzing errors, evaluating model performance, identifying data mismatches, and making informed decisions to improve machine learning systems.",
      skills: ["Machine Learning", "Model Evaluation", "Error Analysis", "Machine Learning Strategy"],
      certificateFile: "/certificates/Structuring Machine Learning Projects.pdf"
    },
    {
      id: "improving-deep-neural-networks",
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Deep Learning",
      description: "Successfully completed the Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization course, authorized by DeepLearning.AI and offered through Coursera. Gained knowledge of techniques for improving deep neural network performance, including hyperparameter tuning, regularization, and optimization strategies.",
      skills: ["Deep Learning", "Neural Networks", "Hyperparameter Tuning", "Regularization", "Optimization Algorithms"],
      certificateFile: "/certificates/Improving Deep Neural Networks.pdf"
    },
    {
      id: "convolutional-neural-networks",
      title: "Convolutional Neural Networks",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Deep Learning",
      description: "Successfully completed the Convolutional Neural Networks course, authorized by DeepLearning.AI and offered through Coursera. Gained knowledge of CNN architectures and their applications in computer vision and image recognition, including how convolutional neural networks extract features and analyze visual data.",
      skills: ["Deep Learning", "Convolutional Neural Networks", "Computer Vision", "Image Classification"],
      certificateFile: "/certificates/Convolutional Neural Networks.pdf"
    },
    {
      id: "sequence-models",
      title: "Sequence Models",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Deep Learning",
      description: "Successfully completed the Sequence Models course, authorized by DeepLearning.AI and offered through Coursera. Gained knowledge of sequence modeling techniques used in deep learning and their applications in natural language processing, speech recognition, and other sequential data tasks.",
      skills: ["Deep Learning", "Sequence Models", "Recurrent Neural Networks", "Long Short-Term Memory"],
      certificateFile: "/certificates/Sequence Models.pdf"
    },
    {
      id: "deep-learning-specialization",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI via Coursera",
      issued: "January 2024",
      category: "Deep Learning",
      description: "Successfully completed the Deep Learning Specialization, consisting of five courses offered through Coursera by DeepLearning.AI. Gained knowledge of neural networks, deep neural network optimization, hyperparameter tuning, regularization, convolutional neural networks, and sequence models. Applied deep learning concepts using Python and TensorFlow.",
      skills: ["Deep Learning", "Neural Networks", "Python", "TensorFlow", "Convolutional Neural Networks"],
      certificateFile: "/certificates/Deep Learning.PDF"
    },
    // F. Artificial Intelligence and Generative AI
    {
      id: "intro-to-ai-ibm",
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM via Coursera",
      issued: "January 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the Introduction to Artificial Intelligence (AI) course, authorized by IBM and offered through Coursera. Gained foundational knowledge of artificial intelligence, its core concepts, applications, and potential use cases across different industries.",
      skills: ["Artificial Intelligence", "AI Fundamentals", "AI Applications", "Machine Learning Fundamentals"],
      certificateFile: "/certificates/Introduction to Artificial Intelligence (AI).pdf"
    },
    {
      id: "genai-intro-applications",
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM via Coursera",
      issued: "January 2024",
      category: "Generative AI",
      description: "Successfully completed the Generative AI: Introduction and Applications course, authorized by IBM and offered through Coursera. Gained foundational knowledge of generative artificial intelligence, its applications, and its potential use cases across different domains.",
      skills: ["Generative AI", "Artificial Intelligence", "AI Applications", "Prompt Engineering"],
      certificateFile: "/certificates/Generative AI Introduction and Applications.PDF"
    },
    {
      id: "genai-prompt-engineering",
      title: "Generative AI: Prompt Engineering Basics",
      issuer: "IBM via Coursera",
      issued: "January 2024",
      category: "Generative AI",
      description: "Successfully completed the Generative AI: Prompt Engineering Basics course, authorized by IBM and offered through Coursera. Gained foundational knowledge of generative AI and prompt engineering, including designing effective prompts to guide AI models and generate relevant outputs for different tasks.",
      skills: ["Generative AI", "Prompt Engineering", "Large Language Models", "Artificial Intelligence"],
      certificateFile: "/certificates/Generative AI Prompt Engineering Basics.PDF"
    },
    {
      id: "building-ai-chatbots",
      title: "Building AI Powered Chatbots Without Programming",
      issuer: "IBM via Coursera",
      issued: "January 2024",
      category: "Generative AI",
      description: "Successfully completed the Building AI Powered Chatbots Without Programming course, authorized by IBM and offered through Coursera. Gained foundational knowledge of building AI-powered chatbots without coding and explored how chatbot technology can create interactive conversational experiences and improve customer support.",
      skills: ["Artificial Intelligence", "Chatbot Development", "IBM Watson", "Conversational AI"],
      certificateFile: "/certificates/Building AI Powered Chatbots Without Programming.pdf"
    },
    {
      id: "python-for-data-science-ai",
      title: "Python for Data Science, AI & Development",
      issuer: "IBM via Coursera",
      issued: "January 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the Python for Data Science, AI & Development course, authorized by IBM and offered through Coursera. Gained foundational knowledge of Python programming for data science and AI, including data manipulation, data analysis, Python libraries, and programming techniques for data-driven problems.",
      skills: ["Python Programming", "Data Science", "Data Analysis", "Artificial Intelligence"],
      certificateFile: "/certificates/Python for Data Science, AI & Development.pdf"
    },
    {
      id: "developing-ai-apps-python-flask",
      title: "Developing AI Applications with Python and Flask",
      issuer: "IBM via Coursera",
      issued: "January 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the Developing AI Applications with Python and Flask course, authorized by IBM and offered through Coursera. Gained practical knowledge of developing AI-powered applications using Python and Flask, with a focus on integrating AI capabilities into web applications and building functional application interfaces.",
      skills: ["Python", "Flask", "Artificial Intelligence", "Web Application Development"],
      certificateFile: "/certificates/Developing AI Applications with Python and Flask.pdf"
    },
    {
      id: "ibm-applied-ai-professional",
      title: "IBM Applied AI",
      issuer: "IBM via Coursera",
      issued: "February 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the IBM Applied AI Professional Certificate, consisting of seven courses offered through Coursera. Gained practical knowledge of artificial intelligence, generative AI, prompt engineering, Python programming, and IBM Watson AI services and APIs. Developed and deployed an AI-powered customer support chatbot and explored computer vision and image processing.",
      skills: ["Generative AI", "Prompt Engineering", "IBM Watson", "Chatbot Development", "Computer Vision"],
      certificateFile: "/certificates/IBM Applied AI.pdf"
    },
    {
      id: "building-ai-apps-watson-apis",
      title: "Building AI Applications with Watson APIs",
      issuer: "IBM via Coursera",
      issued: "February 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the Building AI Applications with Watson APIs course, authorized by IBM and offered through Coursera. Gained foundational knowledge of building AI-powered applications using IBM Watson APIs and explored how AI services can be integrated into applications to solve real-world problems.",
      skills: ["Artificial Intelligence", "IBM Watson", "API Integration", "AI Application Development"],
      certificateFile: "/certificates/Building AI Applications with Watson APIs.pdf"
    },
    {
      id: "supervised-machine-learning-regression-classification",
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI and Stanford University via Coursera",
      issued: "February 2024",
      category: "AI and Machine Learning",
      description: "Successfully completed the Supervised Machine Learning: Regression and Classification course, authorized by DeepLearning.AI and Stanford University and offered through Coursera. Gained knowledge of supervised machine learning techniques, including regression and classification, and developed an understanding of how machine learning models make predictions from data.",
      skills: ["Machine Learning", "Supervised Learning", "Linear Regression", "Classification", "Predictive Modeling"],
      certificateFile: "/certificates/Supervised Machine Learning Regression and Classification.pdf"
    },
    // G. Process Mining
    {
      id: "celonis-foundations",
      title: "Celonis Foundations",
      issuer: "Celonis Academy",
      issued: "December 2024",
      category: "Sustainability and Other Learning",
      description: "Successfully completed the Celonis Foundations learning credential through Celonis Academy. This credential demonstrates foundational learning in the Celonis platform and process mining concepts, supporting data-driven process analysis and business process improvement.",
      skills: ["Process Mining", "Data Analysis", "Business Process Improvement", "Celonis Platform"],
      certificateFile: "/certificates/CelonisFoundCerti.pdf"
    },
    // H. Networking and Cisco Networking Academy (CIT)
    {
      id: "ccna-intro-networks-cit",
      title: "CCNA: Introduction to Networks",
      issuer: "Chennai Institute of Technology (Cisco Networking Academy)",
      issued: "May 2025",
      category: "Networking",
      description: "Successfully completed the CCNA: Introduction to Networks course offered by Chennai Institute of Technology through the Cisco Networking Academy program. Developed foundational knowledge of networking concepts, network communication, IP addressing, network protocols, and networking devices.",
      skills: ["Computer Networking", "IP Addressing", "Network Protocols", "Network Fundamentals", "Cisco Networking"],
      certificateFile: "/certificates/CCNA1.pdf"
    },
    {
      id: "intro-cybersecurity-cit",
      title: "Introduction to Cybersecurity",
      issuer: "Chennai Institute of Technology (Cisco Networking Academy)",
      issued: "May 2025",
      category: "Cybersecurity",
      description: "Successfully completed the Introduction to Cybersecurity course offered by Chennai Institute of Technology through the Cisco Networking Academy program. Developed foundational knowledge of cybersecurity concepts, common cyber threats, online safety, and methods for protecting digital information and systems.",
      skills: ["Cybersecurity", "Online Safety", "Threat Awareness", "Information Protection"],
      certificateFile: "/certificates/Introduction to Cybersecurity0.pdf"
    },
    {
      id: "python-essentials-2",
      title: "Python Essentials 2",
      issuer: "Chennai Institute of Technology (Cisco Networking Academy)",
      issued: "May 2025",
      category: "AI and Machine Learning",
      description: "Successfully completed the Python Essentials 2 course offered by Chennai Institute of Technology through the Cisco Networking Academy program. Further developed Python programming knowledge and problem-solving skills through advanced programming concepts and practical coding techniques.",
      skills: ["Python Programming", "Object-Oriented Programming", "Data Structures", "Exception Handling"],
      certificateFile: "/certificates/Python Essentials 2.pdf"
    },
    {
      id: "python-essentials-1",
      title: "Python Essentials 1",
      issuer: "Chennai Institute of Technology (Cisco Networking Academy)",
      issued: "May 2025",
      category: "AI and Machine Learning",
      description: "Successfully completed the Python Essentials 1 course offered by Chennai Institute of Technology through the Cisco Networking Academy program. Developed foundational knowledge of Python programming, including basic programming concepts, variables, data types, control flow, and problem-solving techniques.",
      skills: ["Python Programming", "Programming Fundamentals", "Problem Solving", "Control Flow"],
      certificateFile: "/certificates/Python Essentials 1.pdf"
    },
    {
      id: "ccna-enterprise-networking-security-automation",
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Chennai Institute of Technology (Cisco Networking Academy)",
      issued: "May 2025",
      category: "Networking",
      description: "Successfully completed the CCNA: Enterprise Networking, Security, and Automation course offered by Chennai Institute of Technology through the Cisco Networking Academy program. Developed foundational knowledge of enterprise networking, network security, network automation, and network infrastructure management.",
      skills: ["Enterprise Networking", "Network Security", "Network Automation", "Network Configuration"],
      certificateFile: "/certificates/CCNA3.pdf"
    },
    {
      id: "ccna-switching-routing-wireless",
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Chennai Institute of Technology (Cisco Networking Academy)",
      issued: "May 2025",
      category: "Networking",
      description: "Successfully completed the CCNA: Switching, Routing, and Wireless Essentials course offered by Chennai Institute of Technology through the Cisco Networking Academy program. Gained foundational knowledge of switching, routing, wireless networking, network connectivity, and network configuration.",
      skills: ["Computer Networking", "Network Switching", "Routing", "Wireless Networking"],
      certificateFile: "/certificates/CCNA2.pdf"
    },
    {
      id: "cyberops-associate",
      title: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      issued: "February 2025",
      category: "Cybersecurity",
      description: "Successfully completed the CyberOps Associate course through the Cisco Networking Academy program. This credential supports learning in cybersecurity operations and strengthens understanding of security monitoring, cyber threat awareness, and security incident detection.",
      skills: ["Cybersecurity", "Security Operations", "Threat Detection", "Security Monitoring", "Incident Response"],
      certificateFile: "/certificates/CyberOps Associate.pdf"
    },
    // I. Cisco Networking Academy — Additional Credentials
    {
      id: "networking-essentials-cisco",
      title: "Networking Essentials",
      issuer: "Cisco Networking Academy",
      issued: "May 2024",
      category: "Networking",
      description: "Successfully completed the Networking Essentials course through the Cisco Networking Academy program. Developed foundational knowledge of computer networking, network connectivity, networking devices, and basic network configuration concepts.",
      skills: ["Computer Networking", "Network Fundamentals", "Network Connectivity", "Networking Devices"],
      certificateFile: "/certificates/Networking Essentials.pdf"
    },
    {
      id: "ccnav7-intro-networks",
      title: "Introduction to Networks (CCNAv7)",
      issuer: "Cisco Networking Academy",
      issued: "May 2023",
      category: "Networking",
      description: "Successfully completed the CCNAv7: Introduction to Networks course through the Cisco Networking Academy program. Developed foundational knowledge of computer networking concepts, network communication, network protocols, IP addressing, and network device configuration.",
      skills: ["Computer Networking", "Network Protocols", "IP Addressing", "Cisco Networking"],
      certificateFile: "/certificates/CCNAv7 Introduction to Networks.pdf"
    },
    {
      id: "cybersecurity-essentials-cisco",
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      issued: "February 2023",
      category: "Cybersecurity",
      description: "Successfully completed the Cybersecurity Essentials course offered through the Cisco Networking Academy program. Gained foundational knowledge of cybersecurity principles, cyber threats, security risks, and methods for protecting digital systems and information.",
      skills: ["Cybersecurity", "Information Security", "Security Fundamentals"],
      certificateFile: "/certificates/Cybersecurity Essentials.pdf"
    },
    {
      id: "intro-cybersecurity-cisco-2023",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      issued: "January 2023",
      category: "Cybersecurity",
      description: "Successfully completed the Introduction to Cybersecurity course through the Cisco Networking Academy program. Gained foundational knowledge of cybersecurity concepts, common cyber threats, online security, and the importance of protecting digital information and systems.",
      skills: ["Cybersecurity", "Network Security", "Online Safety", "Security Fundamentals"],
      certificateFile: "/certificates/Introduction to Cybersecurity1.pdf"
    },
    // J. Applied Data Science
    {
      id: "applied-data-science-lab-wqu",
      title: "Applied Data Science Lab",
      issuer: "WorldQuant University",
      issued: "June 2025",
      category: "Mathematics and Data Science",
      description: "Successfully completed the Applied Data Science Lab certification offered by WorldQuant University, working on end-to-end practical data science projects covering exploratory data analysis, machine learning modeling, and real-world data pipelines.",
      skills: ["Data Science", "Machine Learning", "Exploratory Data Analysis", "Predictive Modeling"],
      certificateFile: "/certificates/AppliedDataScienceLab.pdf"
    }
  ] as Certification[]
};
