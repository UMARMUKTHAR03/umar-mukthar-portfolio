import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PORTFOLIO_DATA, type Project } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-20 md:py-28 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="eyebrow text-[var(--accent)] mb-2">02 / SELECTED WORK</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Engineered Systems & Research
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            FEATURING REAL METRICS & ARCHITECTURES
          </p>
        </div>

        {/* Editorial Project Showcase */}
        <div className="space-y-16">
          {PORTFOLIO_DATA.projects.map((project: Project, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden hover:border-[var(--accent)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Visual Preview */}
                  <div
                    className={`lg:col-span-7 border-b lg:border-b-0 ${
                      isEven ? 'lg:border-r' : 'lg:order-2 lg:border-l'
                    } border-[var(--border-color)] bg-[var(--bg-page)] p-6 sm:p-8 flex items-center justify-center`}
                  >
                    {project.image ? (
                      <Link
                        to={`/project/${project.id}`}
                        className="w-full block overflow-hidden rounded border border-[var(--border-color)] group"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-video object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          loading="eager"
                        />
                      </Link>
                    ) : (
                      <div className="w-full aspect-video rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-center text-xs font-mono text-[var(--text-muted)]">
                        Technical Architecture & Source on GitHub
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                      !isEven ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                        <span className="text-[var(--accent)] font-semibold">
                          0{index + 1} / {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                        <Link
                          to={`/project/${project.id}`}
                          className="hover:text-[var(--accent)] transition-colors"
                        >
                          {project.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Verified Metrics Chips */}
                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          {project.metrics.slice(0, 2).map((m) => (
                            <div
                              key={m.label}
                              className="p-2.5 rounded bg-[var(--bg-page)] border border-[var(--border-color)]"
                            >
                              <span className="block text-[10px] uppercase font-mono text-[var(--text-muted)] truncate">
                                {m.label}
                              </span>
                              <span className="text-xs font-bold font-mono text-[var(--text-primary)]">
                                {m.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded transition-colors"
                            aria-label={`Live site for ${project.title}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
