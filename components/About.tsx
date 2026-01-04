import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Zap, Terminal, Palette, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';



interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className, colSpan = 1, rowSpan = 1 }) => {
  const colSpanClasses: { [key: number]: string } = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
  };

  const rowSpanClasses: { [key: number]: string } = {
    1: 'md:row-span-1',
    2: 'md:row-span-2',
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden group flex flex-col ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className} focus:outline-none focus:ring-2 focus:ring-rose/50`}
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <section id="about" className="py-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-rose mb-4 uppercase tracking-widest">{t.about.section}</h2>
        <h3 className="text-5xl md:text-6xl font-display font-bold">
          {t.about.title} <br />
          <span className="text-rose">{t.about.titleHighlight}</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
        {/* Main Bio */}
        <TiltCard colSpan={2} rowSpan={2} className="justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose/20 flex items-center justify-center text-rose mb-4">
              <Terminal className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-display font-bold">{t.about.bioTitle}</h4>
            <p className="text-white/60 text-lg leading-relaxed">
              {t.about.bioText}
            </p>
          </div>
        </TiltCard>

        {/* Location */}
        <TiltCard colSpan={1} rowSpan={1} className="justify-between">
          <Globe className="w-8 h-8 text-amber" />
          <div>
            <h4 className="text-xl font-bold">{t.about.remote}</h4>
            <p className="text-white/50 text-sm">{t.about.location}</p>
          </div>
        </TiltCard>

        {/* Experience Stats */}
        <TiltCard colSpan={1} rowSpan={1} className="justify-center items-center bg-indigo/20 !border-indigo/30">
          <h4 className="text-6xl font-display font-bold">1+</h4>
          <span className="text-sm font-mono text-indigo-200 mt-2">{t.about.experience}</span>
        </TiltCard>

        {/* Education - Placed in Row 2, Cols 3-4 */}
        <TiltCard colSpan={2} rowSpan={1} className="flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-6 h-6 text-rose" />
            <h4 className="text-xl font-bold">{t.experience.education}</h4>
          </div>
          <div className="space-y-4">
            {t.experience.educationItems.map((item) => (
              <div key={item.id} className="border-l-2 border-white/10 pl-4">
                <span className="text-xs font-mono text-rose mb-1 block">{item.year}</span>
                <h5 className="font-bold">{item.title}</h5>
                <p className="text-white/50 text-xs">{item.company}</p>
                <p className="text-white/70 text-xs mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </TiltCard>

        {/* Work - Placed in Row 3, spanning full width */}
        <TiltCard colSpan={4} rowSpan={1} className="flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-amber" />
            <h4 className="text-xl font-bold">{t.experience.work}</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.experience.workItems.map((item) => (
              <div key={item.id} className="relative bg-white/5 rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-lg font-bold">{item.title}</h5>
                  <span className="text-xs font-mono text-amber bg-amber/10 px-2 py-1 rounded">{item.year}</span>
                </div>
                <p className="text-white/50 text-sm mb-3">{item.company}</p>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </TiltCard>
      </div>
    </section>
  );
};