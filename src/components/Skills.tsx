import React from 'react';
import { Brain, Cpu, Database, Server, Layout, ShieldCheck, Terminal, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Artificial Intelligence & ML':
        return <Brain className="w-5 h-5 text-emerald-400" />;
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Backend & APIs':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Frontend Engineering':
        return <Layout className="w-5 h-5 text-amber-400" />;
      case 'Databases & Cloud':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Software Practices':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative" aria-label="Skills and Technical Competencies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 text-xs font-mono text-emerald-500">
            <span>&lt;TECHNICAL_STACK&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
            Core Competencies & Technologies
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base">
            Hands-on expertise spanning modern artificial intelligence, deep learning architectures, robust backend microservices, and reactive full-stack web applications.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => (
            <div
              key={category}
              className="glow-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-2xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 shadow-sm">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-slate-900">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-slate-100 text-zinc-300 dark:text-zinc-300 light:text-slate-700 border border-zinc-800/90 dark:border-zinc-800 light:border-slate-200 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-500">
                <span>{skills.length} core competencies</span>
                <span className="text-emerald-500 font-semibold">Verified Hands-On Experience</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coding Profiles & Competitive Highlights */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-400" />
                Problem Solving & Algorithmic Handles
              </h3>
              <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 mt-1">
                Active problem solver with demonstrated algorithmic foundation across premier platforms.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.codingProfiles.map((item) => (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-slate-900 group-hover:text-emerald-500 transition-colors">
                      {item.platform}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-800 dark:bg-zinc-800 light:bg-slate-200 text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                      @{item.username}
                    </span>
                  </div>
                  <div className="text-2xl font-mono font-bold text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                    {item.stats}
                  </div>
                  <div className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 mt-1">
                    {item.highlight}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 group-hover:text-emerald-500 transition-colors">
                  <span>View Profile</span>
                  <span className="text-emerald-400">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
