import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Play, Pause, Menu, X, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, animationsEnabled, toggleAnimations } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevPathRef = React.useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      const timer = setTimeout(() => {
        setMobileMenuOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/experience' },
    { label: 'Credentials', href: '/certifications' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname === href) return true;
    return false;
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[var(--bg-page)]/90 backdrop-blur-md border-[var(--border-color)] shadow-sm'
          : 'bg-[var(--bg-page)]/80 backdrop-blur-sm border-[var(--border-subtle)]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        
        {/* LEFT: Avatar + Name (Comfortable Spacing) */}
        <Link
          to="/"
          className="flex items-center gap-3.5 group focus:outline-none shrink-0 mr-6"
          aria-label="Umar Mukthar Home"
        >
          <img
            src={PORTFOLIO_DATA.personal.avatarUrl}
            alt={PORTFOLIO_DATA.personal.name}
            className="w-8 h-8 rounded-full object-cover border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors"
          />
          <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </Link>

        {/* CENTER: Dedicated Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return link.href.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                  active
                    ? 'text-[var(--accent)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT: Theme Toggle + Animation Control + Say Hello Button */}
        <div className="flex items-center gap-3 shrink-0 ml-6">
          
          {/* Global Animation Pause Control */}
          <button
            onClick={toggleAnimations}
            type="button"
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded transition-colors"
            aria-label={animationsEnabled ? 'Pause website animations' : 'Resume website animations'}
            title={animationsEnabled ? 'Pause animations' : 'Resume animations'}
          >
            {animationsEnabled ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[var(--accent)]" />}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
          </button>

          {/* Say Hello Button (Telegram) */}
          <a
            href={PORTFOLIO_DATA.personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-semibold hover:opacity-90 transition-opacity font-mono"
            aria-label="Say Hello on Telegram"
          >
            <Send className="w-3 h-3" />
            <span>Say Hello</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-[var(--text-primary)] border border-[var(--border-color)] rounded"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-6 space-y-4"
        >
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-mono uppercase"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-mono uppercase"
              >
                {link.label}
              </Link>
            )
          ))}
          <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
            <a
              href={PORTFOLIO_DATA.personal.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[var(--accent)] text-[var(--bg-page)] text-xs font-mono font-semibold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Say Hello on Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
