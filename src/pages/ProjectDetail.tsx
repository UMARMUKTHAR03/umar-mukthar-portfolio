import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  FolderGit2,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { GithubIcon } from '../components/Icons';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
          Project Not Found
        </h1>
        <p className="text-zinc-400">The requested project profile could not be located.</p>
        <button
          onClick={() => navigate('/#projects')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div>
          <button
            onClick={() => navigate('/#projects')}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects Overview</span>
          </button>
        </div>

        {/* Project Header Banner */}
        <div className="glow-card rounded-3xl p-8 sm:p-10 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/25">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </span>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-200 dark:text-zinc-200 light:text-slate-700 border border-zinc-700 hover:border-zinc-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-sm"
                >
                  <span>Launch Live System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-mono font-medium">
              {project.subtitle}
            </p>
          </div>

          <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 font-mono">
                <div className="text-lg sm:text-xl font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                  {m.value}
                </div>
                <div className="text-xs uppercase text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-semibold tracking-wider mt-0.5">
                  {m.label}
                </div>
                {m.condition && (
                  <div className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 mt-1">
                    {m.condition}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Evaluation / Scientific Scope Note */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 flex items-start gap-3">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span className="italic">{project.evaluationNote}</span>
          </div>
        </div>

        {/* Problem Statement & Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Problem Statement</span>
            </h2>
            <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Objectives</span>
            </h2>
            <ul className="space-y-2.5">
              {project.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture & Implementation Details */}
        <div className="glow-card rounded-3xl p-8 sm:p-10 border border-zinc-800 space-y-6">
          <h2 className="text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-400" />
            <span>Architecture & System Design</span>
          </h2>
          <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-base leading-relaxed">
            {project.architectureOverview}
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="text-sm uppercase font-mono font-bold tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500">
              Technical Implementation Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.implementationDetails.map((impl, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold shrink-0">✓</span>
                  <span>{impl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Challenges & Solutions */}
        <div className="glow-card rounded-3xl p-8 sm:p-10 border border-zinc-800 space-y-6">
          <h2 className="text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span>Engineering Challenges & Practical Solutions</span>
          </h2>

          <div className="space-y-4">
            {project.challengesAndSolutions.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-slate-50 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 space-y-2">
                <div className="text-sm font-bold text-amber-400 dark:text-amber-400 light:text-amber-700 flex items-center gap-2">
                  <span>Challenge:</span>
                  <span className="text-zinc-200 dark:text-zinc-200 light:text-slate-800 font-semibold">{item.challenge}</span>
                </div>
                <div className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 pl-4 border-l-2 border-emerald-500/50">
                  <span className="font-semibold text-emerald-400">Solution: </span>
                  {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <span>Future Improvements</span>
            </h2>
            <ul className="space-y-2.5">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  <span className="text-cyan-400 font-bold shrink-0">→</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-emerald-400" />
              <span>Technologies & Libraries</span>
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-300 dark:text-zinc-300 light:text-slate-700 border border-zinc-700/80 dark:border-zinc-800 light:border-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/#projects')}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects Overview</span>
          </button>
        </div>

      </div>
    </div>
  );
};
