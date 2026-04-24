import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';

export default function ProjectModal() {
  const activeProject = useStore(state => state.activeProject);
  const setActiveProject = useStore(state => state.setActiveProject);
  const setCursorHoverLabel = useStore(state => state.setCursorHoverLabel);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setActiveProject]);

  // Lock body scroll
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeProject]);

  return (
    <AnimatePresence>
      {activeProject && (
        <div className="fixed inset-0 z-[10000] flex items-end md:items-stretch md:justify-end">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="absolute inset-0 bg-void/80 backdrop-blur-md cursor-none"
            onMouseEnter={() => setCursorHoverLabel('CLOSE')}
            onMouseLeave={() => setCursorHoverLabel(null)}
          />

          {/* Modal Panel */}
          <motion.div 
            initial={{ x: '100%', y: '100%' }}
            animate={{ x: 0, y: 0 }}
            exit={{ x: '100%', y: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) setActiveProject(null);
            }}
            className="relative w-full h-[90vh] md:w-[500px] md:h-full bg-surface/95 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/10 flex flex-col pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            onMouseEnter={() => setCursorHoverLabel(null)}
          >
            {/* Drag Handle (Mobile) */}
            <div className="w-full flex justify-center py-4 md:hidden cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>

            {/* Close Button (Desktop) */}
            <button 
              onClick={() => setActiveProject(null)}
              className="hidden md:flex absolute top-8 right-8 w-10 h-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-dim hover:text-primary hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="p-8 md:p-12 flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
              
              <div className="font-sans font-medium text-[11px] text-accent mb-6 flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                Project File: {activeProject.code}
              </div>

              <h2 className="font-sans font-medium text-[36px] text-primary leading-tight mb-6">
                {activeProject.name}
              </h2>
              
              <p className="font-sans font-light text-[15px] text-dim leading-relaxed mb-10">
                {activeProject.description}
              </p>

              {/* Specs List */}
              <div className="mb-10">
                <h3 className="font-sans font-medium text-[14px] text-primary mb-6 uppercase tracking-widest">Technical Specs</h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(activeProject.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 font-sans text-[13px]">
                      <div className="w-full sm:w-1/3 text-dim uppercase tracking-wider text-[11px] pt-0.5">{key}</div>
                      <div className="w-full sm:w-2/3 text-primary font-light">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="font-sans font-medium text-[14px] text-primary mb-6 uppercase tracking-widest">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map(t => (
                    <span key={t} className="font-mono text-[11px] text-primary bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
