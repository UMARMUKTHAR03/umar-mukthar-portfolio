import React from 'react';
import { ExternalLink, Terminal, Code2, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-4 h-4 text-[var(--accent)]" />,
    Terminal: <Terminal className="w-4 h-4 text-[var(--accent)]" />,
    Cpu: <Cpu className="w-4 h-4 text-[var(--accent)]" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="eyebrow text-[var(--accent)] mb-2">01 / THE TOOLKIT</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Core Technical Competencies
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            AI/ML · SYSTEMS · FULL-STACK
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, items], idx) => (
            <div
              key={category}
              className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4 hover:border-[var(--accent)] transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {category}
                </h3>
                <span className="text-[11px] font-mono text-[var(--text-muted)]">
                  0{idx + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Competitive Coding Profiles */}
        <div className="pt-8">
          <div className="flex items-center gap-3 pb-6">
            <span className="eyebrow text-xs text-[var(--text-muted)]">
              COMPETITIVE CODING & BENCHMARKS
            </span>
            <div className="flex-1 h-[1px] bg-[var(--border-subtle)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.codingProfiles.map((cp) => (
              <a
                key={cp.platform}
                href={cp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] transition-colors block group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {iconMap[cp.icon] || <Code2 className="w-4 h-4 text-[var(--accent)]" />}
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {cp.platform}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold font-mono text-[var(--text-primary)]">
                    {cp.stats}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {cp.highlight}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
