import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Marquee } from './components/Marquee';
import { EasterEgg } from './components/EasterEgg';
import { Gridlines } from './components/Gridlines';
import { LanguageProvider } from './LanguageContext';
import { useReveal } from './hooks/useReveal';

const AppInner: React.FC = () => {
  useReveal();

  return (
    <>
      <Gridlines />
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <EasterEgg />
    </>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <AppInner />
  </LanguageProvider>
);

export default App;
