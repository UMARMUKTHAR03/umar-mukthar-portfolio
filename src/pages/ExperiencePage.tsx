import React, { useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  FileText, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ExperiencePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="space-y-3 pb-8 border-b border-[var(--border-color)]">
          <p className="eyebrow text-[var(--accent)]">CAREER TIMELINE</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Professional Experience & Internships
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Four verified virtual and technical internships completed in Artificial Intelligence, Python software engineering, and full-stack web development.
          </p>
        </div>

        {/* Chronological List (Newest First) */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="p-6 sm:p-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-6 hover:border-[var(--accent)] transition-colors"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h2>
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-secondary)] flex flex-wrap items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                    <span>{exp.company}</span>
                    {exp.program && (
                      <span className="text-xs font-mono text-[var(--text-muted)]">
                        • {exp.program}
                      </span>
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span>{exp.duration}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h3 className="eyebrow text-xs text-[var(--text-muted)]">
                  KEY ASSIGNMENTS & TECHNICAL CONTRIBUTIONS
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Certificate PDF Link */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificateFile && (
                  <a
                    href={exp.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[var(--accent)] hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Completion Certificate (PDF)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
};
