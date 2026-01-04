import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <main className="bg-obsidian text-offwhite selection:bg-rose selection:text-white w-full overflow-x-hidden">
        <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay bg-noise" />
        <Navigation />
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Contact />
      </main>
    </LanguageProvider>
  );
};

export default App;