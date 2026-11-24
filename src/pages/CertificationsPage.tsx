import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Calendar, 
  FileText, 
  ArrowUpRight, 
  Search
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const CertificationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const categories = [
    'All',
    'AI and Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Mathematics and Data Science',
    'Cloud Computing and AWS',
    'Networking',
    'Cybersecurity',
    'Sustainability and Other Learning'
  ];

  const filtered = PORTFOLIO_DATA.certifications.filter((cert) => {
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesSearch =
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-28 pb-24 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-3 pb-8 border-b border-[var(--border-color)]">
          <p className="eyebrow text-[var(--accent)]">CREDENTIAL REGISTRY</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Certifications & Course Credentials
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            A verified inventory of 39 professional specializations, course completions, and technical credentials from Coursera, DeepLearning.AI, IBM, AWS, and Cisco Networking Academy.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search by title, issuer (e.g. AWS, IBM, DeepLearning.AI), or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] font-mono focus:outline-none focus:border-[var(--accent)]"
            />
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold'
                    : 'border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--accent)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-mono text-[var(--text-muted)] flex items-center justify-between">
          <span>Showing {filtered.length} of {PORTFOLIO_DATA.certifications.length} Credentials</span>
          {selectedCategory !== 'All' && (
            <span>Filtered by: {selectedCategory}</span>
          )}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert) => (
            <article
              key={cert.id}
              className="p-6 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-5 hover:border-[var(--accent)] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--accent)] font-semibold uppercase">
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-[var(--text-muted)]">
                    <Calendar className="w-3 h-3" />
                    {cert.issued}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-[var(--text-secondary)] flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                  <span>{cert.issuer}</span>
                </p>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-4">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)] font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                {cert.credentialId ? (
                  <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[140px]">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Verified Record</span>
                )}

                {cert.certificateFile && (
                  <a
                    href={cert.certificateFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[var(--accent)] hover:underline"
                  >
                    <FileText className="w-3 h-3" />
                    <span>View PDF</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
};
