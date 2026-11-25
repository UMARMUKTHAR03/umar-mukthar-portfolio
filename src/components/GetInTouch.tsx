import React from 'react';
import { Send, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const GetInTouch: React.FC = () => {
  return (
    <section className="py-20 md:py-28 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="text-center space-y-5 mb-12">
          <p className="eyebrow text-[var(--accent)]">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl mx-auto leading-tight">
            Let's Build Something Meaningful Together.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            I'm actively seeking software engineering and AI/ML opportunities. If you have an interesting project or role, I'd love to hear from you.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[var(--text-primary)] text-[var(--bg-page)] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            <span>{PORTFOLIO_DATA.personal.email}</span>
          </a>
          <a
            href={PORTFOLIO_DATA.personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Say Hello on Telegram</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <span className="w-px h-4 bg-[var(--border-color)]" />
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

      </div>
    </section>
  );
};
