import React, { useEffect, useState } from 'react';

export const WelcomeOverlay: React.FC = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('um_welcome_shown');
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (visible) {
      sessionStorage.setItem('um_welcome_shown', 'true');

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const duration = prefersReducedMotion ? 800 : 2200;
      const fadeDuration = prefersReducedMotion ? 300 : 600;

      const timer = setTimeout(() => {
        setFading(true);
        setTimeout(() => {
          setVisible(false);
        }, fadeDuration);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-page)] transition-opacity duration-600 ease-out select-none pointer-events-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Subtle radial ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

      <div className="relative text-center px-6 max-w-xl mx-auto welcome-3d-stage">
        {/* Understated greeting pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--accent)] text-[11px] font-mono tracking-widest uppercase mb-6 welcome-subtitle">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>Welcome</span>
        </div>

        {/* Main 3D greeting */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight welcome-title">
          Assalamu Alaikum
        </h1>

        <p className="mt-4 text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-wider uppercase welcome-subtitle">
          Umar Mukthar · AI & ML Engineer
        </p>
      </div>
    </div>
  );
};
