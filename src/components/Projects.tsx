import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA, type Project } from '../data/portfolio';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI / ML', 'Computer Vision', 'Full-Stack', 'Python & Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative" aria-label="Featured Projects & AI Systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-amber-400">
            <span>&lt;PRODUCTION_SYSTEMS&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects & AI Systems
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Real-world machine learning architectures, high-performance neural models, and scalable full-stack applications with verified benchmarks and transparent scope disclosures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                selectedCategory === cat
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-lg shadow-white/10'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="glow-card rounded-2xl overflow-hidden border border-zinc-800 flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8">
                {/* Header: Category Badge & Links */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 border border-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label={`View live deployment of ${project.title} (opens in new tab)`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-zinc-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Callout Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 mb-4 font-mono">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center px-1" title={m.condition || m.label}>
                      <div className="text-xs sm:text-sm font-bold text-emerald-400 truncate">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Evaluation Disclosure Strip */}
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-xs text-zinc-400 leading-relaxed mb-6 flex items-start gap-2">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="italic">{project.evaluationNote}</span>
                </div>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech tags */}
              <div className="px-6 sm:px-8 py-4 bg-zinc-950/50 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 ml-auto focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  >
                    <span>Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
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
