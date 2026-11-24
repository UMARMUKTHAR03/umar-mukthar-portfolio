import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/Projects';
import { CertificationsSection } from './components/Certifications';
import { EducationSection } from './components/Education';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './pages/ProjectDetail';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { CertificationDetail } from './pages/CertificationDetail';

const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      {/* SECTION 1 — INTRODUCTION: Hero, Profile, Skills & Problem Solving */}
      <Hero />
      <Skills />

      {/* SECTION 2 — PROFESSIONAL WORK: Projects, Experience, Internships */}
      <ProjectsSection />
      <ExperienceSection />

      {/* SECTION 3 — CREDENTIALS & CONTACT: Certifications, Education, Resume, Direct Communication */}
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#09090b] dark:bg-[#09090b] light:bg-[#f8fafc] text-zinc-100 dark:text-zinc-100 light:text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-300 transition-colors duration-200">
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded-xl bg-emerald-400 text-zinc-950 font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to main content
          </a>

          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            <Route path="/certification/:id" element={<CertificationDetail />} />
            <Route path="*" element={<HomePage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
