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

const BASE_DOMAIN = "https://umar-mukthar.is-a.dev";

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Umar Mukthar | AI & ML Engineer',
  '/about': 'About Me | Umar Mukthar',
  '/work': 'Projects & Portfolio | Umar Mukthar',
  '/experience': 'Experience | Umar Mukthar',
  '/certifications': 'Certifications | Umar Mukthar',
};

const DEFAULT_PAGE_TITLE = "Umar Mukthar | AI & ML Engineer";

const HeadManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Enforce route-specific document title
    const pathname = location.pathname.replace(/\/+$/, '') || '/';
    document.title = ROUTE_TITLES[pathname] || DEFAULT_PAGE_TITLE;

    // 2. Compute canonical URL
    const canonicalUrl = pathname === '/' 
      ? `${BASE_DOMAIN}/` 
      : `${BASE_DOMAIN}${pathname}`;

    // 3. Ensure exactly ONE <link rel="canonical"> exists
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Remove any duplicate canonical links if present
    const allCanonicals = document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]');
    if (allCanonicals.length > 1) {
      for (let i = 1; i < allCanonicals.length; i++) {
        allCanonicals[i].remove();
      }
    }

    // 4. Update Open Graph og:url
    let ogUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', canonicalUrl);

    // 5. Update Twitter twitter:url
    let twitterUrlMeta = document.querySelector<HTMLMetaElement>('meta[property="twitter:url"]');
    if (twitterUrlMeta) {
      twitterUrlMeta.setAttribute('content', canonicalUrl);
    }
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
        <HeadManager />
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
