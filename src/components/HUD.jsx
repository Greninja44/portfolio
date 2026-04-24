import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { motion } from 'framer-motion';

export default function HUD() {
  const [time, setTime] = useState(new Date());
  const activeSection = useStore(state => state.activeSection);
  const scrollProgress = useStore(state => state.scrollProgress);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9900]">
      {/* Top Nav / Glassmorphic Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[60px] flex items-center justify-between px-6 md:px-12 backdrop-blur-md bg-void/50 border-b border-white/5 will-change-transform"
      >
        <div className="font-sans font-medium text-[12px] text-primary flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(211,211,211,0.8)]"></div>
          ADARSH_D
        </div>
        <div className="font-mono text-[11px] text-dim hidden md:flex gap-8 items-center">
          <span className="uppercase tracking-widest text-[9px]">{activeSection}</span>
          <span className="w-px h-3 bg-white/10"></span>
          <span className="text-primary">{formatTime(time)}</span>
        </div>
        <div className="font-mono text-[11px] text-primary md:hidden">
          {formatTime(time)}
        </div>
      </motion.div>

      {/* Progress Line */}
      <div className="fixed top-[60px] left-0 w-full h-[1px] bg-white/5">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Bottom Nav */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[300px] h-[50px] backdrop-blur-xl bg-surface/80 border border-white/10 rounded-full flex items-center justify-around md:hidden px-4 z-[9910] pointer-events-auto shadow-2xl">
        {['home', 'work', 'skills', 'contact'].map(section => (
          <a key={section} href={`#${section}`} className={`font-sans text-[10px] font-medium transition-colors duration-300 ${activeSection === section ? 'text-accent' : 'text-dim'}`}>
            <span className="uppercase tracking-wider">{section}</span>
          </a>
        ))}
      </div>

      {/* Side Controls (Desktop) */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 pointer-events-auto will-change-transform"
      >
        {['home', 'work', 'skills', 'contact'].map((section) => (
          <a 
            key={section} 
            href={`#${section}`}
            className="group relative flex items-center justify-center w-8 h-8"
          >
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-accent scale-150' : 'bg-dim group-hover:bg-primary'}`} />
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[10px] uppercase text-primary tracking-widest whitespace-nowrap">
              {section}
            </span>
          </a>
        ))}
      </motion.div>
      
      {/* Bottom Left Status */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <div className="font-mono text-[10px] text-dim tracking-widest uppercase">
          SYS.OP. NORMAL
        </div>
      </div>
    </div>
  );
}
