import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 text-xs font-mono text-cyan-400">
            <span>&lt;CAREER_MILESTONES&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
            Work & Internship Experience
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base">
            Demonstrated engineering contributions across machine learning modeling, financial fraud classification, customer churn prevention, and modular Python systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 dark:border-zinc-800 light:border-slate-300 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-zinc-950 dark:bg-zinc-950 light:bg-white border-2 border-emerald-500/80 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-md">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Card Container */}
              <div className="glow-card rounded-3xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <Link to={`/experience/${exp.id}`} className="group-hover:text-emerald-500 focus:outline-none">
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-mono text-sm sm:text-base">@{exp.company}</span>
                      </h3>
                    </Link>
                    <div className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-500 flex flex-wrap items-center gap-3 mt-1 font-mono">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-md bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-slate-200 text-[11px] text-zinc-300 dark:text-zinc-300 light:text-slate-700 font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/experience/${exp.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-400 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-500/50 bg-emerald-500/10 transition-colors shrink-0 self-start sm:self-auto"
                  >
                    <span>Full Experience Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.slice(0, 3).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-zinc-400 mr-2">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-zinc-300 dark:text-zinc-300 light:text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
