import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';

const MinimalistDrone = ({ isSwarm = false, delay = 0 }) => {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10], rotateZ: [-1, 1, -1] }}
      transition={{ duration: 5, delay: delay, repeat: Infinity, ease: "easeInOut" }}
      className={`relative w-80 h-80 flex items-center justify-center will-change-transform ${isSwarm ? 'scale-[0.12]' : 'scale-[0.75] sm:scale-100 md:scale-[1.35]'}`}
    >
      {/* Arms */}
      <div className="absolute w-56 h-[1.5px] bg-white/40 rotate-45" />
      <div className="absolute w-56 h-[1.5px] bg-white/40 -rotate-45" />

      {/* Rotors */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {[
          { x: -70, y: -70 },
          { x: 70, y: -70 },
          { x: -70, y: 70 },
          { x: 70, y: 70 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ x: pos.x, y: pos.y }}
          >
            {/* Rotor blade area */}
            <motion.div
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border border-dim/50 rounded-full flex items-center justify-center bg-white/[0.05] backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] will-change-transform"
            >
              <div className="w-16 h-[1.5px] bg-accent/70 absolute" />
              <div className="w-[1.5px] h-16 bg-accent/70 absolute" />
            </motion.div>
            {/* Rotor Motor Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-surface border border-white/50 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Drone Body */}
      <div className="absolute w-20 h-20 bg-void border-[1.5px] border-white/40 rounded-2xl flex items-center justify-center rotate-45 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        {/* Core */}
        <div className="w-8 h-8 border-[2px] border-accent/80 rounded-full flex items-center justify-center -rotate-45">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(var(--color-accent),1)]" />
        </div>
      </div>

      {/* Scanning ring effect */}
      <motion.div
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0, 0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 border-[1.5px] border-accent/30 rounded-full pointer-events-none will-change-transform"
      />
    </motion.div>
  );
};

export default function Hero() {
  const setCursorHoverLabel = useStore(state => state.setCursorHoverLabel);

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface/50 via-void to-void"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Analog FPV OSD Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none font-mono text-accent text-[10px] sm:text-[12px] md:text-[14px] font-bold tracking-widest select-none flex flex-col justify-between p-4 pt-20 md:p-12 md:pt-32 opacity-100 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] overflow-hidden">
        {/* Top Row */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-2 text-red-500">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,1)]" /> REC
            </span>
            <span>FPV</span>
            <span>VTX: 1200mW</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span>BAT 25.8V</span>
            <span>1200 mAh</span>
            <span>CUR: 25.2A</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span>RSSI: 99%</span>
            <span>LINK: EXCELLENT</span>
            <span>GPS: 12 SATS</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span>MODE: ACRO</span>
            <span>FLY: 04:20</span>
            <span>ALT: 14.2m</span>
          </div>
        </div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20 z-10 pointer-events-none" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20 z-10 pointer-events-none hidden md:block" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/20 z-10 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20 z-10 pointer-events-none hidden md:block" />



      <div className="container mx-auto px-6 md:px-16 z-10 grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">

        {/* Left: Text Block */}
        <div className="flex flex-col justify-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono text-[12px] text-accent mb-6 tracking-widest uppercase"
          >
            Robotics & AI Engineer
          </motion.div>

          <motion.h1
            className="font-sans font-bold text-[36px] sm:text-[48px] md:text-[80px] leading-[1.1] text-primary tracking-tight mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Adarsh D
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-[16px] md:text-[18px] text-dim mb-12 max-w-md font-light leading-relaxed"
          >
            Building autonomous systems, bridging the gap between intelligent algorithms and physical hardware.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#work"
              className="group relative px-8 py-4 font-sans font-medium text-[13px] text-void bg-primary uppercase tracking-widest text-center overflow-hidden rounded-sm transition-transform hover:scale-[1.02]"
              onMouseEnter={() => setCursorHoverLabel('SCROLL')}
              onMouseLeave={() => setCursorHoverLabel(null)}
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-4 font-sans font-medium text-[13px] text-primary border border-white/10 uppercase tracking-widest text-center overflow-hidden rounded-sm hover:border-accent/50 transition-colors duration-300"
              onMouseEnter={() => setCursorHoverLabel('LINK')}
              onMouseLeave={() => setCursorHoverLabel(null)}
            >
              <span className="relative z-10 group-hover:text-accent transition-colors duration-300">Contact</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Drone Animation */}
        <div className="hidden md:flex h-full w-full items-center justify-center relative">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            className="w-full h-[80%] relative flex items-center justify-center"
          >
            <MinimalistDrone />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
