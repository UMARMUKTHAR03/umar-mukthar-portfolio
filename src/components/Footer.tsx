import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] dark:bg-[#070709] light:bg-slate-100 border-t border-zinc-900 dark:border-zinc-900 light:border-slate-200 py-12 relative" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src={PORTFOLIO_DATA.personal.avatarUrl}
              alt="Umar Mukthar Avatar"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover border border-emerald-500/40"
              loading="lazy"
            />
            <div>
              <div className="font-bold text-zinc-200 dark:text-zinc-200 light:text-slate-800 text-sm">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <div className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
                AI & Machine Learning Engineer • {PORTFOLIO_DATA.personal.location}
              </div>
            </div>
          </div>

          {/* Center: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Send direct email"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Right: Copyright & Back to top */}
          <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
            <span>© {CURRENT_YEAR} Umar Mukthar. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-zinc-400 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
