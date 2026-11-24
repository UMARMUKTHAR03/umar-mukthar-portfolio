import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-purple-400">
            <span>&lt;ACADEMIC_CREDENTIALS&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-zinc-400 text-base">
            Verified technical certifications in computer vision, deep neural networks, enterprise networking, and applied data science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glow-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-500/10 border border-purple-500/25 text-purple-400 mb-2">
                      {cert.badgeText}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {cert.title}
                    </h3>
                    <div className="text-sm text-emerald-400 font-medium mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-amber-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                  {cert.verificationNote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verified Credential
                </span>
                <span className="text-zinc-400">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
