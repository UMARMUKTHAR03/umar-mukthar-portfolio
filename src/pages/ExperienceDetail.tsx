import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  FileCheck, 
  Layers,
  ExternalLink
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { LinkedinIcon } from '../components/Icons';

export const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const exp = PORTFOLIO_DATA.experiences.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!exp) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
          Experience Not Found
        </h1>
        <p className="text-zinc-400">The requested experience profile could not be located.</p>
        <button
          onClick={() => navigate('/#experience')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Experience</span>
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
            onClick={() => navigate('/#experience')}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Experience Overview</span>
          </button>
        </div>

        {/* Header Hero Card */}
        <div className="glow-card rounded-3xl p-8 sm:p-10 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/25">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{exp.type}</span>
            </span>

            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-200 dark:text-zinc-200 light:text-slate-700 border border-zinc-700 hover:border-zinc-500 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>View on LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
              {exp.role}
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold">
              @{exp.company}
            </p>
          </div>

          {/* Metadata Strip */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-400" />
              {exp.period} ({exp.duration})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {exp.location}
            </span>
          </div>

          <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
            {exp.summary}
          </p>

          {exp.certificateProofNote && (
            <div className="p-4 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 flex items-center gap-2.5">
              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{exp.certificateProofNote}</span>
            </div>
          )}
        </div>

        {/* Responsibilities & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Responsibilities</span>
            </h2>
            <ul className="space-y-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Achievements & Outputs</span>
            </h2>
            <ul className="space-y-3">
              {exp.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  <span className="text-amber-400 font-bold shrink-0">✓</span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Projects Completed & Skills Gained */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Work & Projects Completed</span>
            </h2>
            <ul className="space-y-2.5">
              {exp.projectsCompleted.map((prj, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  {prj}
                </li>
              ))}
            </ul>
          </div>

          <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
            <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-purple-400" />
              <span>Skills & Competencies Gained</span>
            </h2>
            <ul className="space-y-2.5">
              {exp.skillsGained.map((sk, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  {sk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 space-y-4">
          <h2 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 font-mono">
            Technologies & Tools Applied
          </h2>
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 text-zinc-200 dark:text-zinc-200 light:text-slate-700 border border-zinc-700/80 dark:border-zinc-800 light:border-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/#experience')}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Experience Overview</span>
          </button>
        </div>

      </div>
    </div>
  );
};
