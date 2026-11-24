import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ArrowUpRight, 
  Send,
  GraduationCap
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-20">
        
        {/* SECTION 01 — INTRODUCTION (Two-Column) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[var(--border-color)]">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <p className="eyebrow text-[var(--accent)]">ABOUT / BIOGRAPHY</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                About Umar Mukthar
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              I am an Artificial Intelligence and Machine Learning graduate (2026) from Chennai Institute of Technology, passionate about neural sequence modeling, deep learning architectures, retrieval-augmented systems, and scalable full-stack applications.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              My engineering approach prioritizes leak-free evaluations, clean software architectures, and measurable real-world performance. Whether optimizing CPU inference forward-pass latencies or architecting ACID-compliant full-stack platforms, I build practical software grounded in rigorous fundamentals.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download="Umar_Mukthar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-mono font-semibold hover:opacity-90 transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-64 aspect-[4/5] rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)]">
              <img
                src={PORTFOLIO_DATA.personal.avatarUrl}
                alt={PORTFOLIO_DATA.personal.name}
                className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </section>

        {/* SECTION 02 — WHAT I DO */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="pb-4 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">CAPABILITIES</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              What I Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Area 1: Full-Stack Development */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Full-Stack & Systems Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Designing modular microservices, REST APIs with FastAPI and NestJS, and responsive frontends with React, Next.js, and Tailwind CSS. Emphasizing state machines, role-based access control, Redis session caching, and production database migrations with PostgreSQL and MySQL.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] font-mono">
                <li>• Responsive UI/UX with React & Tailwind</li>
                <li>• Asynchronous REST API Gateways (FastAPI, Flask)</li>
                <li>• ACID-Compliant Database Architecture (PostgreSQL, MySQL)</li>
                <li>• Containerized Workflows with Docker & Git</li>
              </ul>
            </div>

            {/* Area 2: AI & Machine Learning */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                Artificial Intelligence & Machine Learning
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Training custom lightweight neural networks with PyTorch, implementing in-memory hybrid RAG search algorithms, and conducting leak-free model evaluations with Scikit-Learn and SHAP TreeExplainer for decision transparency.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] font-mono">
                <li>• Sequence Modeling (BiLSTM, PyTorch)</li>
                <li>• Hybrid Retrieval-Augmented Generation (BM25 + Hash Embeddings)</li>
                <li>• Computer Vision & Grad-CAM Saliency Maps (MobileNetV3)</li>
                <li>• Calibrated Decision Trees (XGBoost, LightGBM, SHAP)</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 03 — JOURNEY & ACADEMIC MILESTONES */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="pb-4 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">CHRONOLOGY</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Academic Milestones & Journey
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <span className="eyebrow text-xs text-[var(--accent)]">UNDERGRADUATE EDUCATION</span>
                <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
                  Bachelor of Engineering in Artificial Intelligence and Machine Learning
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-mono">
                  Chennai Institute of Technology — Chennai, Tamil Nadu, India
                </p>
                <p className="text-xs text-[var(--text-muted)] max-w-xl pt-1">
                  Specialized in deep learning, sequence modeling, data structures, and computer vision. Maintained a cumulative CGPA of 8.54/10.0 across 4 years of study.
                </p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-xl font-bold font-mono text-[var(--accent)]">8.54 CGPA</span>
                <p className="text-[11px] font-mono text-[var(--text-muted)]">2022 – 2026</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — TECHNICAL SKILLS DIRECTORY */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="pb-4 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">TAXONOMY</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Technical Stack & Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(PORTFOLIO_DATA.skills).map(([category, items], idx) => (
              <div
                key={category}
                className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
                  <h3 className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                    {category}
                  </h3>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">0{idx + 1}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — PROFESSIONAL ACCREDITATIONS PREVIEW */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="flex items-end justify-between pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <p className="eyebrow text-[var(--accent)] mb-1">EVIDENCE</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Selected Accreditations
              </h2>
            </div>
            <Link
              to="/certifications"
              className="text-xs font-mono font-semibold text-[var(--accent)] hover:underline flex items-center gap-1"
            >
              <span>View All 39 Credentials</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PORTFOLIO_DATA.certifications.slice(0, 4).map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[var(--accent)]">{c.issued}</span>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-2">
                    {c.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)]">{c.issuer}</p>
                </div>
                {c.certificateFile && (
                  <a
                    href={c.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View PDF</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 06 — CONTACT */}
        <section className="space-y-6">
          <div className="pb-4 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">CONNECT</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Direct Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors block space-y-1"
            >
              <span className="text-[var(--text-muted)] text-[10px]">EMAIL ADDRESS</span>
              <p className="text-[var(--text-primary)] font-semibold truncate">{PORTFOLIO_DATA.personal.email}</p>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors block space-y-1"
            >
              <span className="text-[var(--text-muted)] text-[10px]">TELEGRAM CHANNEL</span>
              <p className="text-[var(--text-primary)] font-semibold">@Umarom98425</p>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors block space-y-1"
            >
              <span className="text-[var(--text-muted)] text-[10px]">LINKEDIN PROFILE</span>
              <p className="text-[var(--text-primary)] font-semibold">in/umarmukthar03</p>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
};
