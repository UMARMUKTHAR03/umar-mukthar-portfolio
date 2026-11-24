import React, { useState } from 'react';
import { Send, Mail, MapPin, Copy, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; text: string } | null>(null);

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }

    if (!endpoint) {
      // Direct mailto fallback
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      window.location.href = mailtoUrl;
      setFeedback({
        type: 'info',
        text: 'Opening your mail client to send the message directly.',
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFeedback({ type: 'success', text: 'Message delivered successfully. I will get back to you shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission endpoint rejected request');
      }
    } catch {
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setFeedback({
        type: 'info',
        text: 'Form service unavailable. Opened your email client instead.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <p className="eyebrow text-[var(--accent)] mb-2">05 / GET IN TOUCH</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Let's Connect & Collaborate
            </h2>
          </div>
          <p className="text-xs font-mono text-[var(--text-muted)]">
            TAMIL NADU, INDIA · REMOTE-FRIENDLY
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Direct Communication
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Whether you have an inquiry regarding AI/ML engineering, high-throughput backend systems, or potential career opportunities, I welcome direct correspondence.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Box */}
              <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-xs font-mono text-[var(--text-primary)]">
                    {PORTFOLIO_DATA.personal.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] hover:underline font-mono"
              >
                <span>Compose Direct Email Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-5"
            >
              <div className="flex items-center gap-2 pb-2">
                <MessageSquare className="w-4 h-4 text-[var(--accent)]" />
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  Send a Direct Note
                </h3>
              </div>

              {feedback && (
                <div
                  className={`p-3 rounded text-xs border ${
                    feedback.type === 'success'
                      ? 'bg-emerald-950/20 text-emerald-400 border-emerald-800/40'
                      : feedback.type === 'error'
                      ? 'bg-rose-950/20 text-rose-400 border-rose-800/40'
                      : 'bg-blue-950/20 text-blue-400 border-blue-800/40'
                  }`}
                >
                  {feedback.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-[var(--text-muted)]">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="Full Name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-[var(--text-muted)]">
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    placeholder="name@domain.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-[var(--text-muted)]">
                  MESSAGE CONTENT
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-[var(--border-color)] bg-[var(--bg-page)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder="Describe your inquiry, project scope, or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[var(--text-primary)] text-[var(--bg-page)] rounded font-medium text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? 'Submitting Message...' : 'Submit Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
