import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index }) => {
  const setCursorHoverLabel = useStore(state => state.setCursorHoverLabel);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative block bg-surface/80 backdrop-blur-sm border-2 border-border cursor-pointer overflow-hidden rounded-sm will-change-transform ${index % 2 !== 0 ? 'md:mt-10' : ''}`}
      onMouseEnter={() => setCursorHoverLabel('OPEN')}
      onMouseLeave={() => setCursorHoverLabel(null)}
    >
      <div className="p-6 md:p-8 relative z-10">
        {/* Status */}
        <div className="flex justify-end items-center mb-6 pb-4 border-b border-white/10">
          <div className="font-mono text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-white/5 border border-white/10">
            {project.status?.toLowerCase() === 'ongoing' ? (
              <span className="text-yellow-500">ONGOING</span>
            ) : (
              <span className="text-green-500">COMPLETED</span>
            )}
          </div>
        </div>

        <h3 className="font-mono font-bold text-[18px] text-primary mb-3 group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
          {project.name}
        </h3>
        
        <p className="font-sans text-[13px] text-dim mb-8 font-light leading-relaxed">
          {project.summary}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-[9px] text-dim bg-white/5 px-2 py-1 border border-white/10 uppercase">
              {t}
            </span>
          ))}
        </div>


      </div>

      {/* Hover Effect & Background Textures */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.01)_2px,rgba(255,255,255,0.01)_4px)] opacity-50 z-0 pointer-events-none" />
      <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 transition-colors duration-500 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
    </motion.a>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="work" className="py-24 px-6 md:px-16 container mx-auto">
      <motion.h2 
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        className="font-mono font-bold tracking-widest text-[20px] md:text-[28px] text-primary mb-12 flex items-center gap-4 uppercase"
      >
        <span className="w-8 h-1 bg-accent"></span>
        FLEET HANGAR / CONFIG
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
      

    </section>
  );
}
