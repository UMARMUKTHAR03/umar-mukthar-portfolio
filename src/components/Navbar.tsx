import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Moon, Play, Pause, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
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
    { label: '01 About', href: '/#about' },
    { label: '02 Work', href: '/#work' },
    { label: '03 Experience', href: '/#experience' },
    { label: '04 Credentials', href: '/#credentials' },
    { label: '05 Contact', href: '/#contact' },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[var(--bg-page)]/90 backdrop-blur-md border-[var(--border-color)] shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="/#home"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Umar Mukthar home"
        >
          <img
            src={PORTFOLIO_DATA.personal.avatarUrl}
            alt={PORTFOLIO_DATA.personal.name}
            className="w-8 h-8 rounded-full object-cover border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors"
          />
          <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs eyebrow text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="flex items-center gap-2">
          {/* External Socials */}
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <div className="w-[1px] h-4 bg-[var(--border-color)] mx-1 hidden sm:block" />

          {/* Animation Pause Control */}
          <button
            onClick={toggleAnimations}
            type="button"
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] rounded transition-colors text-xs flex items-center gap-1.5"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2 text-[var(--text-primary)] border border-[var(--border-color)] rounded ml-1"
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
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1 font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-secondary)] flex items-center gap-1"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-secondary)] flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
