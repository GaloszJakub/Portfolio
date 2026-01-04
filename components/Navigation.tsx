import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Sparkles, MessageSquare, Cpu } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'hero', icon: Home, label: t.nav.start },
    { id: 'about', icon: User, label: t.nav.context },
    { id: 'tech', icon: Cpu, label: t.nav.stack },
    { id: 'services', icon: Sparkles, label: t.nav.work },
    { id: 'contact', icon: MessageSquare, label: t.nav.action },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="bg-obsidian/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl shadow-rose/20 flex items-center gap-6"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="group relative p-2 hover:text-rose transition-colors"
            aria-label={item.label}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-obsidian text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
        <div className="w-px h-6 bg-white/20 mx-2" />
        <button
          onClick={toggleLanguage}
          className="group relative p-2 hover:text-rose transition-colors font-mono text-sm font-bold"
          aria-label="Toggle language"
        >
          {language.toUpperCase()}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-obsidian text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {language === 'pl' ? 'English' : 'Polski'}
          </span>
        </button>
      </motion.div>
    </div>
  );
};