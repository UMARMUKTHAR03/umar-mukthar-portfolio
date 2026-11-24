import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles, ArrowRight, Info } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 text-xs font-mono text-emerald-500">
            <span>&lt;PRODUCTION_SYSTEMS&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
            Featured Projects & AI Systems
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg">
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
                  ? 'bg-zinc-100 dark:bg-zinc-100 light:bg-slate-900 text-zinc-950 dark:text-zinc-950 light:text-white font-bold shadow-lg'
                  : 'bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-emerald-500 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="glow-card rounded-3xl overflow-hidden border border-zinc-800 dark:border-zinc-800 light:border-slate-200 flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8">
                {/* Header: Category Badge & Links */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 dark:text-emerald-400 light:text-emerald-700">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-emerald-500 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
                        className="p-2 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-emerald-500 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        aria-label={`View live deployment of ${project.title} (opens in new tab)`}
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle (Clickable to in-tab Detail Page) */}
                <Link to={`/project/${project.id}`} className="group-hover:text-emerald-500 block focus:outline-none">
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Callout Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 mb-4 font-mono">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center px-1" title={m.condition || m.label}>
                      <div className="text-xs sm:text-sm font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 truncate">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 uppercase tracking-wider truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Evaluation Disclosure Strip */}
                <div className="p-3 rounded-2xl bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-slate-100 border border-zinc-800/60 dark:border-zinc-800 light:border-slate-200 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed mb-6 flex items-start gap-2">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="italic">{project.evaluationNote}</span>
                </div>
              </div>

              {/* Card Footer: Tech tags + View Full Case Study Button */}
              <div className="px-6 sm:px-8 py-4 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-slate-50 border-t border-zinc-800/60 dark:border-zinc-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-900 dark:bg-zinc-900 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-zinc-400 dark:text-zinc-400 light:text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-zinc-400">+{project.tags.length - 3}</span>
                  )}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-zinc-950 dark:text-zinc-950 light:text-white bg-emerald-400 dark:bg-emerald-400 light:bg-emerald-600 hover:bg-emerald-300 dark:hover:bg-emerald-300 light:hover:bg-emerald-500 transition-all ml-auto shadow-sm"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
