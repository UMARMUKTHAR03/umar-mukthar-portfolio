import React from 'react';
import { GraduationCap, Calendar, BookOpen, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA.personal;

  return (
    <section id="education" className="py-20 relative" aria-label="Education and Academic Background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 text-xs font-mono text-emerald-500">
            <span>&lt;ACADEMIC_FOUNDATION&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
            Education & Background
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base">
            Undergraduate studies in Artificial Intelligence and Machine Learning with consistent academic performance.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="max-w-4xl mx-auto glow-card rounded-3xl p-6 sm:p-10 border border-zinc-800 dark:border-zinc-800 light:border-slate-200">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-800/80 dark:border-zinc-800/80 light:border-slate-200">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/20">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
                {education.degree}
              </h3>
              <p className="text-lg text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-medium">
                {education.institution}
              </p>
              <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {education.period}
                </span>
                <span>•</span>
                <span>{education.location}</span>
              </div>
            </div>

            {/* GPA Callout */}
            <div className="flex flex-col items-start md:items-end justify-center p-4 rounded-2xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 shrink-0">
              <div className="text-xs uppercase font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-500 tracking-wider">Cumulative GPA</div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                {education.cgpa}
              </div>
              <div className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-medium">Verified Academic Record</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="pt-6 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-slate-700 font-mono flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Academic Focus & Key Pursuits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {education.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
