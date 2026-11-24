import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400">
            <span>&lt;CAREER_MILESTONES&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & Engineering Experience
          </h2>
          <p className="text-zinc-400 text-base">
            Demonstrated engineering impact across machine learning modeling, financial fraud classification, customer churn prevention, and modular Python systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-emerald-500/80 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-400 transition-all shadow-md shadow-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Card Container */}
              <div className="glow-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-emerald-400 font-mono text-sm sm:text-base">@{exp.company}</span>
                    </h3>
                    <div className="text-xs sm:text-sm text-zinc-400 flex flex-wrap items-center gap-3 mt-1">
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
                      <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-[11px] text-zinc-300 font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                      <span className="text-zinc-400 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 border-t border-zinc-800/60 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-zinc-400 mr-2">Technologies:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
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
