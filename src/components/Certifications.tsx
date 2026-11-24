import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Calendar, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="credentials" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="eyebrow text-[var(--accent)] mb-2">04 / CREDENTIALS & ACADEMICS</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Formal Education & Certifications
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

        {/* Professional Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.slice(0, 6).map((cert) => (
            <article
              key={cert.id}
              className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--accent)] font-semibold uppercase">
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {cert.issued}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {cert.issuer}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                {cert.certificateFile && (
                  <a
                    href={cert.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-[var(--accent)] hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3 h-3" />
                    <span>View Certificate</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
