import React, { useEffect, useState } from 'react';

interface Greeting {
  lang: string;
  text: string;
  dir: 'ltr' | 'rtl';
}

const GREETINGS: Greeting[] = [
  { lang: 'Arabic', text: 'السلام عليكم', dir: 'rtl' },
  { lang: 'Tamil', text: 'அஸ்ஸலாமு அலைக்கும்', dir: 'ltr' },
  { lang: 'Hindi', text: 'अस्सलामु अलैकुम', dir: 'ltr' },
  { lang: 'Urdu', text: 'السلام علیکم', dir: 'rtl' },
  { lang: 'Malayalam', text: 'അസ്സലാമു അലൈക്കും', dir: 'ltr' },
  { lang: 'Bengali', text: 'আসসালামু আলাইকুম', dir: 'ltr' },
  { lang: 'Indonesian', text: 'Assalamu’alaikum', dir: 'ltr' },
  { lang: 'Turkish', text: 'Selamün aleyküm', dir: 'ltr' },
  { lang: 'Persian', text: 'سلام علیکم', dir: 'rtl' },
  { lang: 'English', text: 'Peace be upon you', dir: 'ltr' },
];

export const WelcomeOverlay: React.FC = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('um_welcome_shown');
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [textFading, setTextFading] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;

    sessionStorage.setItem('um_welcome_shown', 'true');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Short static display for users with reduced motion
      const timer = setTimeout(() => {
        setFading(true);
        setTimeout(() => setVisible(false), 300);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Sequence timing: 600ms per greeting (150ms transition + 450ms static)
    const stepDuration = 600;
    const fadeDuration = 150;

    let index = 0;
    const interval = setInterval(() => {
      if (index < GREETINGS.length - 1) {
        setTextFading(true);
        setTimeout(() => {
          index += 1;
          setCurrentIndex(index);
          setTextFading(false);
        }, fadeDuration);
      } else {
        clearInterval(interval);
        // After final greeting finishes, smoothly dismiss overlay
        setTimeout(() => {
          setFading(true);
          setTimeout(() => setVisible(false), 600);
        }, 600);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  const current = GREETINGS[currentIndex];

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

      <div className="relative text-center px-6 max-w-2xl mx-auto welcome-3d-stage">
        {/* Understated greeting pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--accent)] text-[11px] font-mono tracking-widest uppercase mb-6 welcome-subtitle">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>{current.lang}</span>
        </div>

        {/* Multilingual rotating greeting */}
        <div className="min-h-[100px] sm:min-h-[140px] flex items-center justify-center">
          <h1
            dir={current.dir}
            className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight transition-all duration-150 ease-out welcome-title ${
              textFading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {current.text}
          </h1>
        </div>

        <p className="mt-4 text-xs sm:text-sm font-mono text-[var(--text-muted)] tracking-wider uppercase welcome-subtitle">
          Umar Mukthar · AI & ML Engineer
        </p>
      </div>
    </div>
  );
};
