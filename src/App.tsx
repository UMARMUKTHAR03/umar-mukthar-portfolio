import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/Projects';
import { CertificationsSection } from './components/Certifications';
import { EducationSection } from './components/Education';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Skip to main content link for screen readers and keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded-xl bg-emerald-400 text-zinc-950 font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <div id="about" className="h-0" />
        <Skills />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
