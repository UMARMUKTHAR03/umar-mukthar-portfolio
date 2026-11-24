import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  FolderGit2
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { GithubIcon } from '../components/Icons';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 bg-[var(--bg-page)] text-[var(--text-primary)]">
        <div className="text-center space-y-4 max-w-md">
          <FolderGit2 className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
          <h1 className="text-2xl font-bold font-mono">Project Not Found</h1>
          <p className="text-sm text-[var(--text-secondary)]">
            The project record you requested could not be located.
          </p>
          <button
            onClick={() => navigate('/#work')}
            className="px-5 py-2.5 rounded bg-[var(--text-primary)] text-[var(--bg-page)] font-medium text-xs hover:opacity-90 inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Back Link */}
        <div>
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </button>
        </div>

        {/* Header Block */}
        <header className="space-y-4 pb-8 border-b border-[var(--border-color)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--accent)] font-semibold">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] rounded text-xs font-mono text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors bg-[var(--bg-surface)]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository Source</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-page)] rounded text-xs font-mono font-medium hover:opacity-90 transition-opacity"
              >
                <span>Live Interactive Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </header>

        {/* Real Screenshot Preview */}
        {project.image && (
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Evaluation & Metrics Highlights */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            VERIFIED BENCHMARKS & EVALUATION
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-1"
              >
                <span className="block text-[11px] font-mono text-[var(--text-muted)] uppercase">
                  {m.label}
                </span>
                <span className="text-base font-bold font-mono text-[var(--text-primary)]">
                  {m.value}
                </span>
                {m.condition && (
                  <span className="block text-[11px] text-[var(--text-secondary)] leading-tight pt-1">
                    {m.condition}
                  </span>
                )}
              </div>
            ))}
          </div>

          {project.evaluationNote && (
            <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs text-[var(--text-secondary)] leading-relaxed">
              <strong className="text-[var(--text-primary)] font-mono">Evaluation Disclosure: </strong>
              {project.evaluationNote}
            </div>
          )}
        </section>

        {/* Problem Statement & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-3">
            <h3 className="text-sm font-mono eyebrow text-[var(--accent)]">
              THE PROBLEM
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)]">
              {project.problemStatement}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-mono eyebrow text-[var(--accent)]">
              CORE OBJECTIVES
            </h3>
            <ul className="space-y-2 p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs sm:text-sm text-[var(--text-secondary)]">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--accent)] font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Overview */}
        <section className="space-y-3 pt-4">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            SYSTEM ARCHITECTURE & WORKFLOW
          </h2>
          <div className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.architectureOverview}
          </div>
        </section>

        {/* Technical Implementation Details */}
        <section className="space-y-3 pt-4">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            ENGINEERING HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {project.implementationDetails.map((detail, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Technical Solutions */}
        <section className="space-y-3 pt-4">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            CHALLENGES & SOLUTIONS
          </h2>
          <div className="space-y-4">
            {project.challengesAndSolutions.map((cs, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-3"
              >
                <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Challenge: {cs.challenge}</span>
                </div>
                <div className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)] pl-6">
                  <Lightbulb className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span>Solution: {cs.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Chips */}
        <section className="space-y-3 pt-4 border-t border-[var(--border-color)]">
          <h2 className="text-xs font-mono eyebrow text-[var(--text-muted)]">
            TECHNOLOGY STACK
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};
