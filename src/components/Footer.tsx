import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-page)] py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <img
              src={PORTFOLIO_DATA.personal.avatarUrl}
              alt={PORTFOLIO_DATA.personal.name}
              className="w-7 h-7 rounded-full object-cover border border-[var(--border-color)]"
            />
            <span className="font-semibold text-sm text-[var(--text-primary)]">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[var(--text-muted)] font-mono">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
          <p>© {CURRENT_YEAR} Umar Mukthar. All verified rights reserved.</p>
          <p>{PORTFOLIO_DATA.personal.location}</p>
        </div>

      </div>
    </footer>
  );
};
