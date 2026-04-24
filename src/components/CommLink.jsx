import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { useInView } from 'react-intersection-observer';

const channels = [
  {
    id: "github",
    label: "GITHUB",
    handle: "GreNinja44",
    url: "https://github.com/GreNinja44",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )
  },
  {
    id: "phone",
    label: "PHONE",
    handle: "+91 9108675223",
    url: "tel:+919108675223",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  },
  {
    id: "email",
    label: "EMAIL",
    handle: "adarshvijaya22@gmail.com",
    url: "mailto:adarshvijaya22@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    )
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    handle: "Adarsh D",
    url: "https://www.linkedin.com/in/adarsh-d-443188252/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  }
];

export default function CommLink() {
  const setCursorHoverLabel = useStore(state => state.setCursorHoverLabel);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contact" className="relative py-32 px-6 md:px-16 container mx-auto min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Minimalist Concentric Circles Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] rounded-full border border-white/5 relative flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full border border-white/5 relative flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full border border-white/5"></div>
          </div>
          <div className="absolute inset-0 rounded-full bg-radar-sweep animate-spin-slow"></div>
        </div>
      </div>

      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className="font-sans font-light tracking-tight text-[32px] text-primary mb-16 relative z-10 text-center flex flex-col items-center gap-4"
      >
        <span className="w-px h-8 bg-accent mb-4"></span>
        Connect
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl relative z-10 mb-20">
        {channels.map((ch, idx) => (
          <motion.a
            key={ch.id}
            href={ch.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
            className="group bg-surface/50 backdrop-blur-md border border-border p-8 rounded-2xl flex flex-col items-center text-center hover:border-accent/50 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1"
            onMouseEnter={() => setCursorHoverLabel('LINK')}
            onMouseLeave={() => setCursorHoverLabel(null)}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-primary mb-6 transform group-hover:scale-110 group-hover:text-accent transition-all duration-500">
              {ch.icon}
            </div>

            <h3 className="font-sans font-medium text-[20px] text-primary tracking-wide mb-2">
              {ch.label}
            </h3>

            <div className="font-mono text-[12px] text-dim mb-8 group-hover:text-primary transition-colors duration-300">
              {ch.handle}
            </div>

            <div className="relative w-full border border-white/10 rounded-full py-3 text-primary font-sans font-medium text-[11px] overflow-hidden group-hover:bg-accent group-hover:border-accent group-hover:text-void transition-all duration-300 uppercase tracking-widest">
              <span className="relative z-10">Open Channel</span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-sans font-light text-[16px] text-dim relative z-10 text-center flex items-center gap-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
        Transmitting from Bengaluru, India
      </motion.div>

    </section>
  );
}
