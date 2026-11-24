import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, Sparkles, AlertCircle, Info, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check if user has provided a form submission endpoint in environment
  const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(false);
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Your message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    if (!validateForm()) {
      return;
    }

    // If no external backend / Formspree / Web3Forms endpoint is configured:
    if (!formEndpoint) {
      // Open draft in default email client with pre-filled content
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Umar,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply-To: ${formData.email}`
      )}`;
      window.location.href = mailtoUrl;
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Contact Message',
          message: formData.message.trim(),
          _source: 'umar-mukthar-portfolio'
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || errorData?.message || `Submission failed with status ${response.status}.`
        );
      }

      // Verified successful service acceptance
      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#06b6d4', '#f59e0b']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred while transmitting your message.';
      setErrorMessage(`${msg} Please use the direct email link or copy the address below.`);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
            <span>&lt;COMMUNICATION_CHANNELS&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            I'm currently seeking full-time AI/ML Engineering, Python, or Full-Stack roles. Reach out directly via email or send a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Direct Email Card */}
            <div className="glow-card rounded-2xl p-6 sm:p-7 border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Direct Email</h3>
                  <p className="text-xs text-zinc-400">Direct inbox connection</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-zinc-200 truncate">
                  {PORTFOLIO_DATA.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Copy email address"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors shrink-0 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="mt-4 w-full py-2.5 rounded-xl text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <span>Compose in Email Client</span>
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Umar Mukthar LinkedIn Profile (opens in new tab)"
              >
                <div className="flex items-center justify-between mb-4">
                  <LinkedinIcon className="w-6 h-6 text-cyan-400" />
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-emerald-400">↗</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">LinkedIn</div>
                  <div className="text-xs text-zinc-400">Connect & Network</div>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Umar Mukthar GitHub Profile (opens in new tab)"
              >
                <div className="flex items-center justify-between mb-4">
                  <GithubIcon className="w-6 h-6 text-emerald-400" />
                  <span className="text-xs font-mono text-zinc-400 group-hover:text-emerald-400">↗</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">GitHub</div>
                  <div className="text-xs text-zinc-400">Explore Repositories</div>
                </div>
              </a>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
              <div className="text-xs text-zinc-300">
                <span className="font-semibold text-white">Status: </span>
                {PORTFOLIO_DATA.personal.status}
              </div>
            </div>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glow-card rounded-2xl p-6 sm:p-8 border border-zinc-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  <h3 className="font-bold text-xl text-white">Send a Direct Message</h3>
                </div>
                {!formEndpoint && (
                  <span className="text-[11px] font-mono text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Info className="w-3 h-3" /> Mailto Fallback Active
                  </span>
                )}
              </div>

              {!formEndpoint && (
                <div className="mb-5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 leading-relaxed">
                  <span className="font-semibold text-zinc-200">Notice: </span>
                  Submitting opens a pre-filled draft directly in your default email application for direct sending.
                </div>
              )}

              {status === 'success' ? (
                <div className="py-12 text-center space-y-4" role="alert" aria-live="polite">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Check className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmitted!</h4>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Your message was accepted by the submission service. I will review it and reply to your email address as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    type="button"
                    className="mt-4 px-5 py-2 rounded-xl text-xs font-semibold bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-300 text-xs flex items-start gap-2.5" role="alert">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                        <span>Your Name <span className="text-emerald-400">*</span></span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        disabled={status === 'submitting'}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border text-zinc-100 placeholder:text-zinc-500 text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-400 font-mono mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                        <span>Your Email <span className="text-emerald-400">*</span></span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        disabled={status === 'submitting'}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border text-zinc-100 placeholder:text-zinc-500 text-sm transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/20'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-400 font-mono mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      disabled={status === 'submitting'}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Question"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 text-sm transition-colors focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-zinc-300 flex items-center justify-between">
                      <span>Message <span className="text-emerald-400">*</span></span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      disabled={status === 'submitting'}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hi Umar, I came across your portfolio and wanted to discuss..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border text-zinc-100 placeholder:text-zinc-500 text-sm transition-colors resize-none focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-zinc-800 focus:border-emerald-500 focus:ring-emerald-500/20'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-400 font-mono mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`w-full py-3 rounded-xl font-bold text-sm text-zinc-950 transition-all flex items-center justify-center gap-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
                      status === 'submitting'
                        ? 'bg-emerald-500/60 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-emerald-500/20 hover:scale-[1.01] active:scale-[0.99]'
                    }`}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                        <span>Sending Message...</span>
                      </>
                    ) : formEndpoint ? (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <span>Draft in Email Client</span>
                        <Send className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
