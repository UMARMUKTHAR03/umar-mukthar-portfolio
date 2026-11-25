import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Download, 
  ArrowUpRight,
  GraduationCap,
  Code2,
  Brain
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { GetInTouch } from '../components/GetInTouch';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-0 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-20">
        
        {/* SECTION 01 — INTRODUCTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-[var(--border-color)]">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <p className="eyebrow text-[var(--accent)]">ABOUT</p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                Umar Mukthar
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              AI & Machine Learning graduate (B.E., 2026) from Chennai Institute of Technology. I build production-quality software that spans deep learning models, retrieval-augmented systems, and full-stack web platforms.
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              My work centers on two areas: training custom neural networks with PyTorch for NLP and computer vision, and designing end-to-end full-stack applications with modern frameworks like React, NestJS, and FastAPI. I prioritize clean architecture, rigorous evaluations with zero data leakage, and measurable performance.
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
            
            {/* AI & Machine Learning */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Custom neural networks with PyTorch, hybrid RAG retrieval engines, computer vision pipelines with Grad-CAM explainability, and calibrated decision systems with SHAP feature attribution.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] font-mono">
                <li>• Sequence Models — BiLSTM, Transformers</li>
                <li>• Retrieval-Augmented Generation (BM25 + Dense)</li>
                <li>• Computer Vision — MobileNetV3, Grad-CAM</li>
                <li>• Decision Systems — XGBoost, LightGBM, SHAP</li>
              </ul>
            </div>

            {/* Full-Stack Development */}
            <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Full-Stack Development
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Modular REST APIs with FastAPI and NestJS, responsive frontends with React and Next.js, role-based access control, database migrations with PostgreSQL, and cloud deployments.
              </p>
              <ul className="space-y-2 text-xs text-[var(--text-muted)] font-mono">
                <li>• Frontend — React, Next.js, Tailwind CSS</li>
                <li>• Backend — FastAPI, NestJS, Spring Boot</li>
                <li>• Databases — PostgreSQL, MySQL, Redis</li>
                <li>• Infrastructure — Docker, AWS, Vercel, CI/CD</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 03 — EDUCATION */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="pb-4 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">EDUCATION</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Academic Background
            </h2>
          </div>

          <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="eyebrow text-xs text-[var(--accent)]">UNDERGRADUATE</span>
              <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
                {PORTFOLIO_DATA.personal.education.degree}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-mono">
                {PORTFOLIO_DATA.personal.education.institution} — {PORTFOLIO_DATA.personal.education.location}
              </p>
              <ul className="space-y-1.5 text-xs text-[var(--text-muted)] pt-2">
                {PORTFOLIO_DATA.personal.education.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--accent)]">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <span className="text-xl font-bold font-mono text-[var(--accent)]">{PORTFOLIO_DATA.personal.education.cgpa}</span>
              <p className="text-[11px] font-mono text-[var(--text-muted)]">{PORTFOLIO_DATA.personal.education.period}</p>
            </div>
          </div>
        </section>

        {/* SECTION 04 — TECHNICAL SKILLS */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="pb-4 border-b border-[var(--border-subtle)]">
            <p className="eyebrow text-[var(--accent)] mb-1">SKILLS</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Technical Stack
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

        {/* SECTION 05 — CREDENTIALS PREVIEW */}
        <section className="space-y-8 pb-16 border-b border-[var(--border-color)]">
          <div className="flex items-end justify-between pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <p className="eyebrow text-[var(--accent)] mb-1">CREDENTIALS</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Professional Certifications
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              PORTFOLIO_DATA.certifications.find(c => c.id === 'applied-data-science-lab-wqu'),
              PORTFOLIO_DATA.certifications.find(c => c.id === 'cyberops-associate'),
              PORTFOLIO_DATA.certifications.find(c => c.id === 'ccna-enterprise-networking-security-automation'),
            ].filter((c): c is typeof PORTFOLIO_DATA.certifications[0] => Boolean(c)).map((c) => (
              <Link
                key={c.id}
                to={`/certification/${c.id}`}
                className="group p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-3 hover:border-[var(--accent)] transition-colors"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[var(--accent)]">{c.issued}</span>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
                    {c.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-muted)]">{c.issuer}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Get In Touch — Full Width */}
      <GetInTouch />
    </main>
  );
};
