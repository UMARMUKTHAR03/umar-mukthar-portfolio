import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-300 text-xs font-mono text-purple-400">
            <span>&lt;ACADEMIC_CREDENTIALS&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base">
            Verified technical certifications in computer vision, deep neural networks, enterprise networking, and applied data science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="glow-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/10 border border-purple-500/25 text-purple-400 dark:text-purple-400 light:text-purple-700 mb-2">
                      {cert.badgeText}
                    </span>
                    <Link to={`/certification/${cert.id}`} className="group-hover:text-emerald-500 focus:outline-none">
                      <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                        {cert.title}
                      </h3>
                    </Link>
                    <div className="text-sm text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-medium mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-amber-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-sm leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-slate-200 flex items-center justify-between text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-500">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  {cert.date}
                </span>

                <Link
                  to={`/certification/${cert.id}`}
                  className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
