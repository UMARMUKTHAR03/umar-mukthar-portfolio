import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { WelcomeOverlay } from './components/WelcomeOverlay';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ProjectDetail } from './pages/ProjectDetail';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { CertificationDetail } from './pages/CertificationDetail';

const GLOBAL_PAGE_TITLE = "Umar Mukthar | AI & ML Engineer";

const TitleManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = GLOBAL_PAGE_TITLE;
  }, [location.pathname]);

  return null;
};

const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      <Hero />
    </main>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <TitleManager />
        <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-200">
          {/* Accessible Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 rounded bg-[var(--accent)] text-[var(--bg-page)] font-bold text-xs shadow-lg focus:outline-none"
          >
            Skip to main content
          </a>

          <Navbar />
          <WelcomeOverlay />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
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
