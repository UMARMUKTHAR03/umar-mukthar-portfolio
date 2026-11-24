import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Copy, 
  Check, 
  MapPin,
  Flame,
  Download,
  Info,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleResumeClick = () => {
    if (PORTFOLIO_DATA.personal.hasResumeFile) {
      window.open('/Umar_Mukthar_Resume.pdf', '_blank');
    } else {
      setShowResumeModal(true);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-label="Introduction">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Headline & Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live status badge & Avatar Row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative group shrink-0">
                <img
                  src={PORTFOLIO_DATA.personal.avatarUrl}
                  alt="Portrait photo of Umar Mukthar, AI & ML Engineer"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-400 transition-colors"
                  loading="eager"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#09090b] shadow" title="Available for opportunities" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium tracking-wide">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{PORTFOLIO_DATA.personal.status}</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="gradient-accent">{PORTFOLIO_DATA.personal.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                <span>AI & Machine Learning Engineer | Python & Full-Stack</span>
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">8.54</div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">B.E. AIML CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">800+</div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Problems Solved</div>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">95.29%</div>
                <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Churn Holdout Acc</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                onClick={handleResumeClick}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Download or request Umar Mukthar resume"
              >
                <Download className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Resume</span>
              </button>

              <button
                onClick={copyEmail}
                type="button"
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 bg-zinc-900/90 border border-zinc-700/80 hover:border-zinc-500 hover:bg-zinc-800/80 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon className="w-5 h-5 text-cyan-400" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon className="w-5 h-5 text-emerald-400" />
              </a>
            </div>

            {/* Location & Alma Mater */}
            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span>•</span>
              <span className="text-zinc-400">Chennai Institute of Technology (2022–2026)</span>
            </div>
          </div>

          {/* Interactive Code / Terminal Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glow-card rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    umar@engineer: ~/profile
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                  <Flame className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                  <span>Python 3.11 • PyTorch</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-zinc-300 space-y-3 bg-[#0d0e12]/90 leading-relaxed overflow-x-auto">
                <div className="text-zinc-400">
                  <span className="text-emerald-400">const</span> <span className="text-cyan-300">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-zinc-400">name:</span> <span className="text-amber-300">"{PORTFOLIO_DATA.personal.name}"</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">education:</span> <span className="text-amber-300">"B.E. AIML @ Chennai Inst of Tech"</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">cgpa:</span> <span className="text-emerald-400">8.54</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">coreSpecialties:</span> [
                    <span className="text-cyan-300">"Deep Learning"</span>, 
                    <span className="text-cyan-300">"Hybrid RAG"</span>, 
                    <span className="text-cyan-300">"Full-Stack APIs"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-zinc-400">activeBackbones:</span> [
                    <span className="text-emerald-300">"BiLSTM (3.2M params)"</span>, 
                    <span className="text-emerald-300">"MobileNetV3-Small"</span>,
                    <span className="text-emerald-300">"Gradient Boosted Ensembles"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-zinc-400">leetcodeSolved:</span> <span className="text-emerald-400">800</span>,
                  </div>
                  <div>
                    <span className="text-zinc-400">openToOpportunities:</span> <span className="text-purple-400">true</span>
                  </div>
                </div>
                <div className="text-zinc-400">&#125;;</div>

                {/* Simulated Command prompt */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-2 text-zinc-400 text-xs">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-cyan-400">~/profile</span>
                  <span className="text-zinc-200">umar.verifyCredentials()</span>
                  <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1" />
                </div>
                <div className="text-[11px] text-zinc-400 italic">
                  &gt; [SUCCESS]: NPTEL Computer Vision, Coursera DL, Cisco Networking verified.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Resume Request Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
          <div className="glow-card max-w-md w-full rounded-2xl p-6 border border-zinc-800 bg-[#0d0e12] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400">
                <Info className="w-5 h-5" />
                <h3 id="resume-modal-title" className="font-bold text-white text-lg">Resume Document</h3>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                type="button"
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              To request a direct copy of Umar Mukthar's official resume PDF, please reach out via direct email or connect on LinkedIn.
            </p>

            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
              <div>Email: {PORTFOLIO_DATA.personal.email}</div>
              <div className="mt-1">Notice: Place <code className="text-emerald-400">Umar_Mukthar_Resume.pdf</code> in <code className="text-zinc-200">/public</code> to enable instant direct downloads.</div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent('Resume Request — Umar Mukthar')}`}
                className="px-4 py-2 rounded-xl text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Request via Email
              </a>
              <button
                onClick={() => setShowResumeModal(false)}
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
