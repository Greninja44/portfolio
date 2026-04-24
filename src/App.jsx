import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from './store';
import Cursor from './components/Cursor';
import HUD from './components/HUD';
import Hero from './components/Hero';
import MissionLog from './components/MissionLog';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import CommLink from './components/CommLink';

function IntroSequence({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => {
      setStage(2);
      onComplete();
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div 
          className="fixed inset-0 z-[9999] bg-void flex items-center justify-center font-sans text-[14px] text-text"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {stage === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full border border-accent/30 border-t-accent animate-spin" />
              <span className="text-dim tracking-widest uppercase text-xs">System Online</span>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const setScrollProgress = useStore(state => state.setScrollProgress);
  const setActiveSection = useStore(state => state.setActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = Math.round((scrollPx / winHeightPx) * 100);
      setScrollProgress(scrolled);

      // Simple section tracking
      const sections = ['home', 'bio', 'work', 'skills', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      const prevSection = useStore.getState().activeSection;
      if (current !== prevSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress, setActiveSection]);

  return (
    <div className="relative min-h-screen text-text selection:bg-accent selection:text-void pb-16 md:pb-0 bg-void">
      <Cursor />
      
      {!introDone && <IntroSequence onComplete={() => setIntroDone(true)} />}

      <HUD />

      {introDone && (
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Hero />
          <MissionLog />
          <Projects />
          <Skills />
          <CommLink />
        </motion.main>
      )}

      <ProjectModal />
    </div>
  );
}
