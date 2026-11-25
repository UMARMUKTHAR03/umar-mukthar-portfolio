import React, { useEffect } from 'react';
import { Projects } from '../components/Projects';
import { GetInTouch } from '../components/GetInTouch';

export const WorkPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen pt-28 pb-0 bg-[var(--bg-page)] text-[var(--text-primary)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
        <header className="space-y-3 pb-8 border-b border-[var(--border-color)]">
          <p className="eyebrow text-[var(--accent)]">FULL PROJECT ARCHIVE</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Selected Work & Engineering Systems
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl">
            Explore complete case studies across AI/ML sequence modeling, hybrid RAG retrieval engines, computer vision with Grad-CAM, and full-stack monorepo systems.
          </p>
        </header>
      </div>

      {/* Complete Project Collection */}
      <Projects />

      {/* Shared Direct Contact Section */}
      <GetInTouch />
    </main>
  );
};
