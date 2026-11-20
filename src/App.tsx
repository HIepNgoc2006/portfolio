import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import type { DomainId } from './types/portfolio';

function PortfolioContent() {
  const [activeDomain, setActiveDomain] = useState<DomainId | 'all'>('all');

  const handleSelectDomain = (domain: DomainId) => {
    setActiveDomain(domain);
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D14] text-[#EEF0F5]">
      <Navbar />
      <main>
        <Hero onSelectDomain={handleSelectDomain} />
        <Pillars onSelectDomain={handleSelectDomain} />
        <Projects activeDomain={activeDomain} onChangeDomain={setActiveDomain} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
