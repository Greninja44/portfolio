import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';

const SkillItem = ({ name, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="font-mono text-[13px] text-dim px-4 py-2 bg-white/5 border border-white/5 rounded-md hover:text-primary hover:border-white/20 transition-all duration-300"
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 px-6 md:px-16 container mx-auto">
      <motion.h2 
        ref={ref}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        className="font-sans font-light tracking-tight text-[28px] text-primary mb-12 flex items-center gap-4"
      >
        <span className="w-8 h-px bg-accent"></span>
        Technical Proficiencies
      </motion.h2>

      <div className="flex flex-col gap-12">
        {skills.map((band, bandIdx) => (
          <motion.div 
            key={band.band}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: bandIdx * 0.2 }}
          >
            <h3 className="font-sans font-medium text-[14px] text-primary mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              {band.band}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {band.items.map((skill, idx) => (
                <SkillItem key={skill.name} name={skill.name} index={idx} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
