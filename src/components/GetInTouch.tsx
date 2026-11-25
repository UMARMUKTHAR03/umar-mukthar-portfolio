import React, { useState } from 'react';
import { Send, ArrowUpRight, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'fallback'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('idle');
      setErrorMessage('Please fill out your name, email, and message.');
      return;
    }

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        } else {
          throw new Error('Endpoint returned error');
        }
      } catch (err) {
        console.error('Contact form submission failed:', err);
      }
    }

    // Honest Mailto Fallback: Pre-fills draft directly with form content
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Umar,\n\n${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    setStatus('fallback');
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div className="text-center space-y-4 mb-14">
          <p className="eyebrow text-[var(--accent)]">05 / GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl mx-auto leading-tight">
            Let's Build Something Meaningful Together.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto">
            I am actively seeking software engineering and AI/ML opportunities. Send a direct message below or reach out via email or Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Direct Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm">
            <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-[var(--text-muted)] font-mono mb-6">
              Fill in the fields below to dispatch an inquiry directly.
            </p>

            {status === 'success' ? (
              <div className="p-6 rounded-lg border border-[var(--accent)] bg-[var(--accent-subtle)] space-y-3 text-center">
                <CheckCircle2 className="w-8 h-8 text-[var(--accent)] mx-auto" />
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Message Sent Successfully!</h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-4 py-2 text-xs font-mono font-semibold rounded bg-[var(--text-primary)] text-[var(--bg-page)] hover:opacity-90"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'fallback' && (
                  <div className="p-3 rounded border border-[var(--accent)]/30 bg-[var(--accent-subtle)] text-xs text-[var(--text-secondary)] space-y-1">
                    <p className="font-semibold text-[var(--text-primary)]">Mail client opened!</p>
                    <p className="text-[11px] text-[var(--text-muted)]">
                      Your prefilled message was transferred to your email app for direct delivery to <span className="font-mono text-[var(--text-primary)]">{PORTFOLIO_DATA.personal.email}</span>.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-[var(--text-secondary)]">
                      Your Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Umar Mukthar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-[var(--text-secondary)]">
                      Your Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-[var(--text-secondary)]">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] font-mono transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-[var(--text-secondary)]">
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] font-mono transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-mono font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Verified Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Direct Channels
              </h3>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors group bg-[var(--bg-page)]"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Email</p>
                      <p className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {PORTFOLIO_DATA.personal.email}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors group bg-[var(--bg-page)]"
                >
                  <div className="flex items-center gap-3">
                    <Send className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Telegram</p>
                      <p className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        @Umarom98425
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
                Profiles & Repositories
              </h3>

              <div className="space-y-3">
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors group text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors group text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
                    <span>GitHub (@UMARMUKTHAR03)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
