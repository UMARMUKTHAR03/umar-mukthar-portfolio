import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  GraduationCap, 
  Info,
  X
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
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
    <section id="introduction" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" aria-label="Introduction">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear, Professional Identity & Pitch (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 leading-[1.1]">
                <span className="gradient-accent">{PORTFOLIO_DATA.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                {PORTFOLIO_DATA.personal.title}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-zinc-400 dark:text-zinc-400 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.personal.shortBio}
            </p>

            {/* Location & Academic Base (Displays Tamil Nadu, India as requested) */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                {PORTFOLIO_DATA.personal.location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 shrink-0 text-cyan-400" aria-hidden="true" />
                Chennai Institute of Technology (2022–2026)
              </span>
            </div>

            {/* Key Verified Performance Metrics */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg">
              <div className="p-3.5 rounded-2xl glow-card">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 dark:text-emerald-400 light:text-emerald-600">
                  {PORTFOLIO_DATA.personal.education.cgpa.split(' ')[0]}
                </div>
                <div className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 uppercase tracking-wider font-semibold">
                  B.E. AIML CGPA
                </div>
              </div>

              <div className="p-3.5 rounded-2xl glow-card">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 dark:text-cyan-400 light:text-cyan-600">
                  800+
                </div>
                <div className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 uppercase tracking-wider font-semibold">
                  Problems Solved
                </div>
              </div>

              <div className="p-3.5 rounded-2xl glow-card">
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400 dark:text-amber-400 light:text-amber-600">
                  95.29%
                </div>
                <div className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 uppercase tracking-wider font-semibold">
                  Model Accuracy
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-zinc-950 dark:text-zinc-950 light:text-white bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 dark:from-emerald-400 dark:to-cyan-400 light:from-emerald-600 light:to-teal-600 transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                onClick={handleResumeClick}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-zinc-100 dark:text-zinc-100 light:text-slate-800 bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-slate-200 border border-zinc-700/80 dark:border-zinc-700/80 light:border-slate-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="View or request Umar Mukthar resume"
              >
                <Download className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Resume</span>
              </button>

              <button
                onClick={copyEmail}
                type="button"
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 dark:text-zinc-200 light:text-slate-700 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-slate-100 border border-zinc-700/80 dark:border-zinc-700/80 light:border-slate-300 hover:border-zinc-500 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
            </div>

          </div>

          {/* Right Column: Clean Professional LinkedIn Profile Card (Replaces old Terminal/Code block) */}
          <div className="lg:col-span-5">
            <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 shadow-xl space-y-6">
              
              {/* Profile Card Header with Verified Badge */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={PORTFOLIO_DATA.personal.avatarUrl}
                      alt="Umar Mukthar Profile Portrait"
                      width={72}
                      height={72}
                      className="w-18 h-18 rounded-2xl object-cover border-2 border-emerald-500/50 shadow-md"
                      loading="eager"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-blue-600 text-white shadow" title="Verified LinkedIn Profile">
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-1.5">
                      <span>{PORTFOLIO_DATA.personal.name}</span>
                      <span title="Verified Profile" className="inline-flex items-center">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </span>
                    </h2>
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-medium">
                      AI & Machine Learning Engineer
                    </p>
                    <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono mt-0.5">
                      Chennai Institute of Technology
                    </p>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-zinc-700/80 dark:border-zinc-800 light:border-slate-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 text-cyan-400 hover:text-white hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label="Open LinkedIn Profile (in new tab)"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Core Pillars / Focus Area Tags */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
                  Core Engineering Specialties
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 dark:text-emerald-400 light:text-emerald-700">
                    Deep Learning & PyTorch
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
                    Hybrid RAG Document Engines
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/10 border border-purple-500/25 text-purple-400 dark:text-purple-400 light:text-purple-700">
                    FastAPI & Full-Stack APIs
                  </span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-400 dark:text-amber-400 light:text-amber-700">
                    Computer Vision (MobileNet)
                  </span>
                </div>
              </div>

              {/* Competitive Handles Highlight */}
              <div className="pt-3 border-t border-zinc-800 dark:border-zinc-800 light:border-slate-200 grid grid-cols-3 gap-2 text-center">
                <a
                  href={PORTFOLIO_DATA.codingProfiles[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 hover:border-emerald-500 transition-colors"
                >
                  <div className="text-sm font-bold font-mono text-emerald-400">800+</div>
                  <div className="text-[10px] text-zinc-400 font-mono">LeetCode</div>
                </a>
                <a
                  href={PORTFOLIO_DATA.codingProfiles[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 hover:border-cyan-500 transition-colors"
                >
                  <div className="text-sm font-bold font-mono text-cyan-400">1004+</div>
                  <div className="text-[10px] text-zinc-400 font-mono">CodeChef</div>
                </a>
                <a
                  href={PORTFOLIO_DATA.codingProfiles[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 hover:border-purple-500 transition-colors"
                >
                  <div className="text-sm font-bold font-mono text-purple-400">847</div>
                  <div className="text-[10px] text-zinc-400 font-mono">Codeforces</div>
                </a>
              </div>

              {/* Direct LinkedIn Profile Connection Button */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0a66c2] hover:bg-[#004182] transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Resume Request Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
          <div className="glow-card max-w-md w-full rounded-2xl p-6 border border-zinc-800 bg-[#0d0e12] dark:bg-[#0d0e12] light:bg-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400">
                <Info className="w-5 h-5" />
                <h3 id="resume-modal-title" className="font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 text-lg">Resume Document</h3>
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

            <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
              To request a direct copy of Umar Mukthar's official resume PDF, please reach out via direct email or connect on LinkedIn.
            </p>

            <div className="p-3 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-slate-100 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 font-mono">
              <div>Email: {PORTFOLIO_DATA.personal.email}</div>
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
