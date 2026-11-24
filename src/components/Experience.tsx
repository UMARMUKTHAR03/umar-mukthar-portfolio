import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, MapPin, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="eyebrow text-[var(--accent)] mb-2">03 / EXPERIENCE</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Internships & Professional Work
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            CHRONOLOGICAL CAREER TIMELINE
          </p>
        </div>

        {/* Editorial Experience List */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="p-6 sm:p-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[var(--text-secondary)] flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                    <span>{exp.company}</span>
                    <span className="text-[var(--text-muted)] font-mono text-xs">({exp.type})</span>
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
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
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2">
                <p className="eyebrow text-[11px] text-[var(--text-muted)]">Key Responsibilities:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack & Detail Link */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-muted)] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/experience/${exp.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                >
                  <span>Full Experience Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
