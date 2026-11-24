import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  GraduationCap, 
  FileText,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Editorial Top Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
          <div className="flex items-center gap-2 eyebrow text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span>PORTFOLIO / 2026</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              {PORTFOLIO_DATA.personal.location}
            </span>
            <span className="hidden sm:inline text-[var(--border-color)]">|</span>
            <span className="hidden sm:inline">Chennai Institute of Technology</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Headline & Bio */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <p className="eyebrow text-[var(--accent)] tracking-widest font-semibold">
                AI & Software Engineer
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]">
                {PORTFOLIO_DATA.personal.name}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-page)] rounded font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-5 py-3 border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] rounded font-medium text-sm transition-colors"
              >
                <Download className="w-4 h-4 text-[var(--text-muted)]" />
                <span>Resume</span>
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-color)] rounded transition-colors font-mono"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{PORTFOLIO_DATA.personal.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Profile Visual & Academic Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative group">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)]">
                <img
                  src={PORTFOLIO_DATA.personal.avatarUrl}
                  alt={PORTFOLIO_DATA.personal.name}
                  className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Education Summary Box */}
            <div className="p-4 rounded border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1.5 text-[var(--text-primary)] font-medium">
                  <GraduationCap className="w-3.5 h-3.5 text-[var(--accent)]" />
                  {PORTFOLIO_DATA.personal.education.institution}
                </span>
                <span className="text-[var(--accent)] font-semibold">{PORTFOLIO_DATA.personal.education.cgpa} CGPA</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                {PORTFOLIO_DATA.personal.education.degree} ({PORTFOLIO_DATA.personal.education.period})
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Resume Request Modal */}
      {showResumeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="w-full max-w-md p-6 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Resume Request
                </h3>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              My verified academic CV is continuously maintained. To ensure the latest version with current project metrics is shared, please request it directly via email:
            </p>

            <div className="p-3 rounded bg-[var(--bg-page)] border border-[var(--border-color)] flex items-center justify-between font-mono text-xs">
              <span className="text-[var(--text-primary)]">{PORTFOLIO_DATA.personal.email}</span>
              <button
                onClick={copyEmail}
                className="text-[var(--accent)] hover:underline flex items-center gap-1 text-[11px]"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-color)] rounded hover:bg-[var(--bg-page)]"
              >
                Close
              </button>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=Resume%20Request%20-%20Umar%20Mukthar`}
                className="px-4 py-2 text-xs font-medium text-[var(--bg-page)] bg-[var(--text-primary)] rounded hover:opacity-90 inline-flex items-center gap-1.5"
              >
                <span>Compose Email</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
