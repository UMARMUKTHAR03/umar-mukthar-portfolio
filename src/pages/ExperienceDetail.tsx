import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const exp = PORTFOLIO_DATA.experiences.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!exp) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-[var(--bg-page)] text-[var(--text-primary)]">
        <div className="text-center space-y-4 max-w-md">
          <Briefcase className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
          <h1 className="text-2xl font-bold font-mono">Experience Not Found</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            The experience record could not be found.
          </p>
          <button
            onClick={() => navigate('/#experience')}
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
            onClick={() => navigate('/#experience')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO EXPERIENCE</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="space-y-4 pb-8 border-b border-[var(--border-color)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent)] font-semibold">
              {exp.type}
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)]">
              {exp.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {exp.role}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] pt-1">
            <span className="text-sm font-semibold text-[var(--text-primary)] font-sans">
              {exp.company}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {exp.period}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {exp.location}
            </span>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            EXECUTIVE ROLE SUMMARY
          </h2>
          <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {exp.summary}
          </div>
        </section>

        {/* Responsibilities */}
        <section className="space-y-3 pt-2">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            CORE RESPONSIBILITIES & DELIVERABLES
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {exp.responsibilities.map((r, i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        {exp.achievements && exp.achievements.length > 0 && (
          <section className="space-y-3 pt-2">
            <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
              KEY MEASURABLE OUTCOMES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-1"
                >
                  <span className="text-xs font-mono font-semibold text-[var(--accent)]">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {ach}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="space-y-3 pt-4 border-t border-[var(--border-color)]">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            TECHNOLOGIES EMPLOYED
          </h2>
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Certificate Proof Note */}
        {exp.certificateProofNote && (
          <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs text-[var(--text-muted)] font-mono">
            <strong>Verification Note: </strong>
            {exp.certificateProofNote}
          </div>
        )}

      </div>
    </main>
  );
};
