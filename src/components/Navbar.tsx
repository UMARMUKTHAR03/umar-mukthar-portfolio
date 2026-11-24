import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Play, Pause, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useApp } from '../context/AppContext';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, animationsEnabled, toggleAnimations } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change when path changes
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
    { name: 'Introduction', href: '/#introduction' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Education', href: '/#education' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 dark:bg-[#09090b]/90 light:bg-white/90 backdrop-blur-md border-b border-zinc-800/80 dark:border-zinc-800/80 light:border-slate-200/90 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Avatar + Name (NO generic initials logo, NO subtitle tag) */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl p-1"
            aria-label="Umar Mukthar Portfolio Homepage"
          >
            <img
              src={PORTFOLIO_DATA.personal.avatarUrl}
              alt="Umar Mukthar GitHub Avatar"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/50 group-hover:border-emerald-400 transition-colors shadow-sm"
              loading="eager"
            />
            <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-100 dark:text-zinc-100 light:text-slate-900 group-hover:text-emerald-500 transition-colors">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-slate-600 hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 rounded-lg hover:bg-zinc-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-slate-100 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle + Animation Control + Social + Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Animation Toggle Control */}
            <button
              onClick={toggleAnimations}
              type="button"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-zinc-700/80 dark:border-zinc-800 light:border-slate-200 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:border-emerald-500 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              title={animationsEnabled ? 'Pause Animations' : 'Resume Animations'}
              aria-label={animationsEnabled ? 'Pause website animations' : 'Resume website animations'}
            >
              {animationsEnabled ? (
                <>
                  <Pause className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">Resume</span>
                </>
              )}
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              type="button"
              className="p-2 rounded-xl text-xs font-medium border border-zinc-700/80 dark:border-zinc-800 light:border-slate-200 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:border-emerald-500 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
              title={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
              aria-label={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" aria-hidden="true" />
              )}
            </button>

            {/* GitHub & LinkedIn Quick Links (Desktop) */}
            <div className="hidden md:flex items-center gap-1.5">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-slate-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:text-emerald-400 transition-colors"
                aria-label="GitHub profile (opens in new tab)"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-slate-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn profile (opens in new tab)"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Anchor */}
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-zinc-950 dark:text-zinc-950 light:text-white bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 dark:from-emerald-400 dark:to-cyan-400 light:from-emerald-600 light:to-teal-600 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* Mobile Drawer Trigger */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-400 dark:text-zinc-400 light:text-slate-600 hover:text-emerald-500 hover:bg-zinc-800/60 dark:hover:bg-zinc-800/60 light:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-[#0c0d12]/98 dark:bg-[#0c0d12]/98 light:bg-white/98 border-b border-zinc-800 dark:border-zinc-800 light:border-slate-200 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:text-emerald-400 dark:hover:text-emerald-400 light:hover:text-emerald-600 hover:bg-zinc-800/70 dark:hover:bg-zinc-800/70 light:hover:bg-slate-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-800 dark:border-zinc-800 light:border-slate-200 flex flex-col gap-2">
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
