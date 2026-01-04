import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '01',
    title: 'Neon Nexus',
    category: 'Web3 Platform',
    year: '2023',
    image: 'https://picsum.photos/800/600?random=1',
    color: '#FF3366'
  },
  {
    id: '02',
    title: 'Void Walker',
    category: 'Immersive Experience',
    year: '2024',
    image: 'https://picsum.photos/800/600?random=2',
    color: '#5046E5'
  },
  {
    id: '03',
    title: 'Zenith Store',
    category: 'E-commerce',
    year: '2023',
    image: 'https://picsum.photos/800/600?random=3',
    color: '#F59E0B'
  },
  {
    id: '04',
    title: 'Aether Design',
    category: 'Design System',
    year: '2022',
    image: 'https://picsum.photos/800/600?random=4',
    color: '#10B981'
  }
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-rose mb-4 uppercase tracking-widest">02 / Portfolio</h2>
        <h3 className="text-5xl md:text-6xl font-display font-bold">Selected Works</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group block cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-rose/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
           <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex justify-between items-start">
        <div>
           <h4 className="text-2xl font-bold font-display mb-2 group-hover:text-rose transition-colors">{project.title}</h4>
           <div className="flex gap-3 text-sm font-mono text-white/50">
             <span>{project.category}</span>
             <span>•</span>
             <span>{project.year}</span>
           </div>
        </div>
      </div>
    </div>
  );
};