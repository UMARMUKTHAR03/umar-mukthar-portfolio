import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Award, 
  CheckCircle2, 
  FileCheck2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const CertificationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const cert = PORTFOLIO_DATA.certifications.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!cert) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-[var(--bg-page)] text-[var(--text-primary)]">
        <div className="text-center space-y-4 max-w-md">
          <Award className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
          <h1 className="text-2xl font-bold font-mono">Certification Not Found</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            The requested certification record could not be found.
          </p>
          <button
            onClick={() => navigate('/#credentials')}
            className="px-5 py-2.5 rounded bg-[var(--text-primary)] text-[var(--bg-page)] font-medium text-xs hover:opacity-90 inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <button
            onClick={() => navigate('/#credentials')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO CREDENTIALS</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="space-y-4 pb-8 border-b border-[var(--border-color)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent)] font-semibold">
              {cert.badgeText}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {cert.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
            <span className="text-sm font-semibold text-[var(--text-primary)] font-sans flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[var(--accent)]" />
              {cert.issuer}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {cert.date}
            </span>
          </div>
        </header>

        {/* Verification Status Card */}
        <section className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-3">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-[var(--accent)]" />
            <h2 className="text-sm font-semibold text-[var(--text-primary)]">
              Credential Verification Status
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {cert.verificationNote}
          </p>
          {cert.credentialId && (
            <div className="pt-2">
              <span className="text-xs font-mono px-3 py-1.5 rounded bg-[var(--bg-page)] border border-[var(--border-color)] text-[var(--text-primary)] inline-block">
                Credential ID: {cert.credentialId}
              </span>
            </div>
          )}
        </section>

        {/* Curriculum & Description */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            SYLLABUS & CURRICULUM
          </h2>
          <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {cert.description}
          </div>
        </section>

        {/* Skills Covered */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            CORE COMPETENCIES COVERED
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cert.skillsCovered.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center gap-2.5 text-xs text-[var(--text-secondary)]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};
