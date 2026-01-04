import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Simple Hash Router logic for SPA feel without heavy deps
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'services', 'work', 'about', 'insights', 'contact', 'privacy', 'terms'];
      if (hash && validPages.includes(hash)) {
        setCurrentPage(hash as PageView);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Init
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageView) => {
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-weg-slate bg-weg-canvas selection:bg-weg-gold selection:text-weg-navy flex flex-col min-h-screen">
        <Navbar currentPage={currentPage} setPage={navigate} />

        <main className="flex-grow">
          {currentPage === 'home' && <Home setPage={navigate} />}
          {currentPage === 'services' && <Services setPage={navigate} />}
          {currentPage === 'work' && <Work />}
          {currentPage === 'about' && <About setPage={navigate} />}
          {currentPage === 'insights' && <Insights />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'privacy' && <Legal page="privacy" />}
          {currentPage === 'terms' && <Legal page="terms" />}
        </main>

        <Footer setPage={navigate} />
      </div>
    </HelmetProvider>
  );
};

export default App;