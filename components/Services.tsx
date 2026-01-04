import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ProjectData {
  id: string;
  title: string;
  year: string;
  image: string;
  images: string[];
  github?: string;
  liveUrl?: string;
  displayMode?: 'carousel' | 'image' | 'scrolling-image';
  technologies: string[];
}

const projectsData: ProjectData[] = [
  {
    id: '01',
    title: 'UBB Plan',
    year: '2024',
    image: '/ubb_mockup.png',
    images: ['/ubb1.png', '/ubb2.png', '/ubb3.png'],
    displayMode: 'image',
    github: 'https://github.com/matikgal/ubb-schedule',
    technologies: ['React', 'TypeScript', 'Capacitor', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: '02',
    title: 'Kariera Rekord',
    year: '2024',
    image: '/kariera_rekord.png',
    images: ['/kariera_rekord_full.png', '/kariera_rekord_full_2.png', '/kariera_rekord_full_3.png'],
    displayMode: 'scrolling-image',
    github: 'https://github.com/matikgal/carrer-rekord',
    liveUrl: 'https://matikgal.github.io/carrer-rekord/',
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'React Router'],
  },
  {
    id: '03',
    title: 'Archiwum',
    year: '2024',
    image: '/archiwum.png',
    images: [],
    github: 'https://github.com/GaloszJakub/Archiwum',
    liveUrl: 'https://archiwum.netlify.app/',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Framer Motion', 'Radix UI'],
  },
  {
    id: '04',
    title: 'UBB Evaluation',
    year: '2024',
    image: '/ubb_ocena1.png',
    images: ['/ubb_ocena1.png', '/ubb_ocena2.png', '/ubb_ocena3.png', '/ubb_ocena4.png'],
    displayMode: 'carousel',
    github: 'https://github.com/matikgal/UBB-ocena-pracownika',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Keycloak', 'Firebase', 'Radix UI'],
  },
  {
    id: '05',
    title: 'Sielska Ostoja',
    year: '2024',
    image: '/sielska_ostoja.png',
    images: [],
    displayMode: 'image',
    liveUrl: 'https://sielskaostoja.netlify.app/',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Shadcn/ui', 'Radix UI'],
  }
];

const ImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) nextSlide();
    else if (info.offset.x > 50) prevSlide();
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full mx-auto">
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} screen ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
          />
        </AnimatePresence>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/50 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/50 flex items-center justify-center hover:bg-white/10 transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
            className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-rose' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

const ScrollingImage: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  // Use array if provided, fallback to single image prop if needed (though prop is changed to images here)
  // For backwards compatibility if needed, but we will update usage.
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnimationComplete = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black group">
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 to-transparent z-10" />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={images[currentIndex]}
            alt={`${title} part ${currentIndex + 1}`}
            className="w-full"
            initial={{ y: "0%" }}
            animate={{ y: ["0%", "-75%"] }}
            transition={{
              duration: 12,
              ease: "linear",
            }}
            onAnimationComplete={handleAnimationComplete}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/50 to-transparent z-10" />

      {/* Optional indicators */}
      <div className="absolute bottom-4 right-4 flex gap-1 z-20">
        {images.length > 1 && images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? 'bg-rose' : 'bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<ProjectData | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { language, t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const toggleExpand = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  // Interface for the dynamic project data coming from translations
  interface ProjectTranslation {
    category: string;
    description: string;
    features: string[];
  }

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="relative py-32 px-4 md:px-12 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <h2 className="text-sm font-mono text-rose mb-4 uppercase tracking-widest">{t.services.section}</h2>
        <h3 className="text-5xl md:text-6xl font-display font-bold">{t.services.title}</h3>
      </div>

      <div className="flex flex-col">
        {projectsData.map((project) => {
          // Explicitly cast to any to handle the dynamic structure of translations file
          // and ensure the result matches ProjectTranslation interface with defaults
          const projectList = (t.services as any).projectList;
          const projectText: ProjectTranslation = (projectList && projectList[project.id])
            ? projectList[project.id]
            : { category: '', description: '', features: [] };

          return (
            <div key={project.id}>
              <div
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => toggleExpand(project.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(project.id);
                  }
                }}
                role="button"
                tabIndex={0}
                className="group relative border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between transition-colors hover:bg-white/5 px-4 cursor-pointer focus:outline-none focus:bg-white/10"
              >
                <div className="flex items-baseline gap-8">
                  <span className="font-mono text-rose/50 text-xl">({project.id})</span>
                  <div>
                    <h4 className="text-3xl md:text-5xl font-display font-bold group-hover:translate-x-4 transition-transform duration-300">
                      {project.title}
                    </h4>
                    <div className="flex gap-3 text-sm font-mono text-white/50 mt-2">
                      <span>{projectText.category}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <p className="max-w-sm text-white/50 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                    {projectText.description}
                  </p>
                  <motion.div
                    animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden bg-white/[0.02] border-b border-white/10"
                  >
                    <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                      {project.displayMode === 'carousel' && project.images.length > 0 ? (
                        <ImageCarousel images={project.images} title={project.title} />
                      ) : project.displayMode === 'scrolling-image' ? (
                        <ScrollingImage images={project.images.length > 0 ? project.images : [project.image]} title={project.title} />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-2xl border border-white/10 w-full"
                        />
                      )}
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-sm font-mono text-rose mb-3 uppercase tracking-widest">
                            {language === 'pl' ? 'Opis' : 'Description'}
                          </h5>
                          <p className="text-white/70 leading-relaxed">
                            {projectText.description}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-sm font-mono text-rose mb-3 uppercase tracking-widest">
                            {language === 'pl' ? 'Funkcje' : 'Features'}
                          </h5>
                          <ul className="space-y-2">
                            {projectText.features && projectText.features.map((feature: string, i: number) => (
                              <li key={i} className="text-white/70 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-rose rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-mono text-rose mb-3 uppercase tracking-widest">
                            {language === 'pl' ? 'Technologie' : 'Technologies'}
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-white/70"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`${language === 'pl' ? 'Zobacz kod projektu' : 'View project code'} ${project.title}`}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-rose/10 hover:border-rose/50 transition-colors text-sm font-mono"
                            >
                              <Github className="w-4 h-4" />
                              {language === 'pl' ? 'Zobacz kod' : 'View code'}
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`${language === 'pl' ? 'Zobacz stronę projektu' : 'View live project'} ${project.title}`}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose/50 bg-rose/10 hover:bg-rose/20 transition-colors text-sm font-mono text-rose"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {language === 'pl' ? 'Zobacz stronę' : 'View live'}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {hoveredProject && !expandedProject && (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePos.x + 20,
              y: mousePos.y - 150
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="pointer-events-none fixed top-0 left-0 z-20 rounded-2xl overflow-hidden border border-white/20 shadow-2xl hidden md:block bg-black"
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="max-w-[640px] max-h-[480px] w-auto h-auto object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};