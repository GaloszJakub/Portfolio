import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden px-6 pt-28 md:pt-30">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo/20 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose/10 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70">{t.hero.available}</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[1.1] mb-8">
            {t.hero.greeting} <br />
            <span className="gradient-text">Kuba.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-10">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToServices}
              className="px-8 bg-white text-black rounded-full font-bold hover:bg-rose hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              {t.hero.seeWork}
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              {t.hero.contact}
            </button>
          </div>

          <div className="flex gap-8 mt-16 text-white/40">
            <a href="#" aria-label="GitHub Profile" className="hover:text-rose transition-colors"><Github className="w-8 h-8" /></a>
            <a href="#" aria-label="LinkedIn Profile" className="hover:text-rose transition-colors"><Linkedin className="w-8 h-8" /></a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12"
          >
            <ArrowDown className="w-6 h-6 text-white/20 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};