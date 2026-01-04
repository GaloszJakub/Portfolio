import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Terminal, Layers, CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="2.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
  </svg>
);

const TailwindIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-.98-1-2.11-2.15-4.59-2.15z" />
  </svg>
);

const TypeScriptIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="6" y="17" fontSize="10" fontWeight="bold">TS</text>
  </svg>
);

const NodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="7" y="15" fontSize="7" fontWeight="bold">N</text>
  </svg>
);

const DockerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <rect x="3" y="10" width="3" height="2.5" rx="0.3" />
    <rect x="6.5" y="10" width="3" height="2.5" rx="0.3" />
    <rect x="10" y="10" width="3" height="2.5" rx="0.3" />
    <rect x="6.5" y="7" width="3" height="2.5" rx="0.3" />
    <rect x="10" y="7" width="3" height="2.5" rx="0.3" />
    <rect x="10" y="4" width="3" height="2.5" rx="0.3" />
    <path d="M2 13c0 0 1.5 5 9 5s11-5 11-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GitIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="6" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <line x1="6" y1="8" x2="6" y2="16" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 8v6c0 2-2 4-6 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const FigmaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="15" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="3" width="6" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="9" width="6" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="15" width="6" height="6" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const JestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="8" y="16" fontSize="9" fontWeight="bold">J</text>
  </svg>
);

const CypressIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const frontendIcons = [ReactIcon, TailwindIcon, TypeScriptIcon, ReactIcon, TailwindIcon, TypeScriptIcon];
const backendIcons = [NodeIcon, Database, NodeIcon, Database, NodeIcon, Database];
const toolsIcons = [GitIcon, DockerIcon, Terminal, GitIcon, DockerIcon, Terminal];
const testingIcons = [JestIcon, CypressIcon, CheckCircle, JestIcon, CypressIcon, CheckCircle];
const designIcons = [FigmaIcon, Layers, FigmaIcon, Layers, FigmaIcon, Layers];

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    {
      category: t.tech.frontend,
      icon: Layout,
      bgIcons: frontendIcons,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion", "WebGL"]
    },
    {
      category: t.tech.backend,
      icon: Database,
      bgIcons: backendIcons,
      items: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "REST APIs", "GraphQL"]
    },
    {
      category: t.tech.tools,
      icon: Terminal,
      bgIcons: toolsIcons,
      items: ["Git", "Docker", "Vercel", "Jest", "CI/CD", "Webpack/Vite"]
    },
    {
      category: t.tech.testing,
      icon: CheckCircle,
      bgIcons: testingIcons,
      items: ["Jest", "Cypress", "Playwright", "React Testing Library", "Vitest", "MSW"]
    },
    {
      category: t.tech.design,
      icon: Layers,
      bgIcons: designIcons,
      items: ["Figma", "Blender", "UI Systems", "Wireframing", "Prototyping"]
    }
  ];

  const iconPositions = [
    "w-8 h-8 -rotate-12 top-2 right-4",
    "w-6 h-6 rotate-45 top-8 right-24",
    "w-10 h-10 rotate-12 top-20 right-8",
    "w-5 h-5 -rotate-6 bottom-16 right-32",
    "w-7 h-7 rotate-[30deg] bottom-4 right-12",
    "w-6 h-6 -rotate-45 bottom-8 right-48",
  ];

  return (
    <section id="tech" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-rose mb-4 uppercase tracking-widest">{t.tech.section}</h2>
        <h3 className="text-5xl md:text-6xl font-display font-bold">{t.tech.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-colors group overflow-hidden focus:outline-none focus:ring-2 focus:ring-rose/50"
            tabIndex={0}
          >
            <div className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.15] group-hover:text-rose pointer-events-none overflow-hidden transition-all duration-300">
              {skillGroup.bgIcons.map((Icon, i) => (
                <Icon key={i} className={`absolute ${iconPositions[i]} transition-colors duration-300`} />
              ))}
            </div>

            <div className="relative z-10 flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center text-rose group-hover:scale-110 transition-transform">
                <skillGroup.icon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-display font-bold">{skillGroup.category}</h4>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-white/70 hover:text-white hover:border-rose/50 hover:bg-rose/10 transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 border-t border-b border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale mix-blend-screen select-none pointer-events-none">
        <span className="text-2xl font-display font-bold">REACT</span>
        <span className="text-2xl font-display font-bold">NEXT.JS</span>
        <span className="text-2xl font-display font-bold">TYPESCRIPT</span>
        <span className="text-2xl font-display font-bold">NODE</span>
        <span className="text-2xl font-display font-bold">WEBGL</span>
      </div>
    </section>
  );
};