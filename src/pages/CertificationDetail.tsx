import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  BookOpen, 
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { LinkedinIcon } from '../components/Icons';

export const CertificationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const cert = PORTFOLIO_DATA.certifications.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!cert) {
    return (
      <div className="min-h-screen pt-36 pb-20 px-4 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-zinc-100 dark:text-zinc-100 light:text-slate-900">
          Certification Not Found
        </h1>
        <p className="text-zinc-400">The requested credential profile could not be located.</p>
        <button
          onClick={() => navigate('/#certifications')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Certifications</span>
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
            onClick={() => navigate('/#certifications')}
            type="button"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Certifications Overview</span>
          </button>
        </div>

        {/* Certification Hero Banner */}
        <div className="glow-card rounded-3xl p-8 sm:p-10 border border-zinc-800 dark:border-zinc-800 light:border-slate-200 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 dark:text-purple-400 light:text-purple-700 border border-purple-500/25">
              <Award className="w-3.5 h-3.5" />
              <span>{cert.badgeText}</span>
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
              {cert.title}
            </h1>
            <p className="text-xl text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-bold">
              {cert.issuer}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-400" />
              Issued: {cert.date}
            </span>
            {cert.credentialId && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  ID: {cert.credentialId}
                </span>
              </>
            )}
          </div>

          <p className="text-zinc-300 dark:text-zinc-300 light:text-slate-600 text-base sm:text-lg leading-relaxed">
            {cert.description}
          </p>

          <div className="p-4 rounded-2xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-slate-100 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 flex items-center gap-2.5">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{cert.verificationNote}</span>
          </div>
        </div>

        {/* Skills Covered Grid */}
        <div className="glow-card rounded-3xl p-8 sm:p-10 border border-zinc-800 space-y-6">
          <h2 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 light:text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-400" />
            <span>Core Competencies & Coursework Evaluated</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cert.skillsCovered.map((skill, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-slate-50 border border-zinc-800/80 dark:border-zinc-800 light:border-slate-200 text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Verification / Image Disclosure Note */}
        <div className="glow-card rounded-3xl p-6 sm:p-8 border border-zinc-800 text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
          <h3 className="font-bold text-lg text-zinc-100 dark:text-zinc-100 light:text-slate-900">
            Verified Credential Status
          </h3>
          <p className="text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed">
            This credential is authenticated through official issuing bodies. Copies and transcripts are presented during recruitment verification workflows.
          </p>
        </div>

        {/* Bottom Back Button */}
        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/#certifications')}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Certifications Overview</span>
          </button>
        </div>

      </div>
    </div>
  );
};
