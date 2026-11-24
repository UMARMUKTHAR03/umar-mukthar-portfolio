import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="eyebrow text-[var(--accent)] mb-2">04 / CREDENTIALS & ACADEMICS</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Formal Education & Certifications
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            VERIFIED INDUSTRY & ACADEMIC RECORDS
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="p-6 sm:p-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
            <div className="space-y-1">
              <span className="eyebrow text-xs text-[var(--accent)]">UNDERGRADUATE DEGREE</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[var(--accent)]" />
                {PORTFOLIO_DATA.personal.education.degree}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-medium">
                {PORTFOLIO_DATA.personal.education.institution} — {PORTFOLIO_DATA.personal.education.location}
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-mono text-[var(--accent)]">
                {PORTFOLIO_DATA.personal.education.cgpa}
              </span>
              <p className="text-[11px] font-mono text-[var(--text-muted)]">CUMULATIVE CGPA</p>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] pt-2">
            {PORTFOLIO_DATA.personal.education.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <article
              key={cert.id}
              className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--accent)] font-semibold">
                    {cert.badgeText}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-mono text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  <Link
                    to={`/certification/${cert.id}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {cert.title}
                  </Link>
                </h4>

                <p className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {cert.issuer}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skillsCovered.map((sc) => (
                    <span
                      key={sc}
                      className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                    >
                      {sc}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[var(--text-muted)] truncate max-w-[200px]">
                  ID: {cert.credentialId || 'Verified Record'}
                </span>
                <Link
                  to={`/certification/${cert.id}`}
                  className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                >
                  <span>Verification Info</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
