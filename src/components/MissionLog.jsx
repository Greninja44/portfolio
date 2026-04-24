import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineEntry = ({ period, title, subtitle }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      className="flex flex-col sm:flex-row gap-4 sm:gap-12 mb-12 group"
    >
      <div className="w-full sm:w-[140px] font-mono text-[12px] text-dim pt-1">
        {period}
      </div>
      <div className="flex-1">
        <h3 className="font-sans text-[16px] text-primary mb-1 font-medium">{title}</h3>
        <div className="font-sans text-[14px] text-dim font-light leading-relaxed">{subtitle}</div>
      </div>
    </motion.div>
  );
};

export default function MissionLog() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="bio" className="py-24 px-6 md:px-16 container mx-auto">

      {/* PROFILE SECTION */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="mb-32 max-w-4xl"
      >
        <h2 className="font-sans font-light tracking-tight text-[28px] text-primary mb-12 flex items-center gap-4">
          <span className="w-8 h-px bg-accent"></span>
          Profile Overview
        </h2>

        <div className="font-sans text-[15px] md:text-[16px] leading-relaxed text-text space-y-6 font-light">
          <p>
            I am an engineering undergraduate pursuing a BTech in AI & Machine Learning at PES University, focused on building tightly integrated hardware software systems for autonomous robotics. My work spans embedded systems, control theory, and computer vision, where I design deterministic control loops and deploy efficient perception models on resource-constrained platforms.
          </p>
          <p>
            I specialize in end-to-end system design  from PCB development and power electronics to firmware architecture and high-level autonomy pipelines using ROS2 and PX4. My approach emphasizes real time performance, robustness under operational stress, and precise interaction between digital logic and physical systems.
          </p>
          <p>
            Beyond structured engineering, I actively explore high-performance flight systems through building and flying freestyle FPV drones. This hands-on pursuit sharpens my understanding of dynamics, control, and system tuning in real-world conditions
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
        {/* EXPERIENCE */}
        <div>
          <h2 className="font-sans font-light tracking-tight text-[28px] text-primary mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            Experience
          </h2>
          <div>
            <TimelineEntry
              period="Feb 2025 - Mar 2025"
              title="Scrapyard Hackathon Organizer"
              subtitle="Hack Club — Organized and managed a global student-led hackathon. Coordinated logistics, participant onboarding, and scheduling across 100+ locations."
            />
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h2 className="font-sans font-light tracking-tight text-[28px] text-primary mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            Education
          </h2>
          <div>
            <TimelineEntry
              period="2024 - 2028"
              title="BTech (AI & Machine Learning)"
              subtitle="PES University"
            />
            <TimelineEntry
              period="2024"
              title="Class 12th State Board"
              subtitle="Score: 92%"
            />
            <TimelineEntry
              period="2022"
              title="Class 10th SSLC"
              subtitle="Score: 98.3%"
            />
          </div>
        </div>

        {/* AWARDS */}
        <div>
          <h2 className="font-sans font-light tracking-tight text-[28px] text-primary mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            Awards
          </h2>
          <div>
            <TimelineEntry
              period="2026"
              title="All India Rank 8 (AIR 8)"
              subtitle="SAE DDC 2026"
            />
            <TimelineEntry
              period="2025"
              title="All India Rank 2 (AIR 2)"
              subtitle="SAE DDC 2025 — Developed a high-payload fixed-wing aircraft using balsa wood construction."
            />
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 className="font-sans font-light tracking-tight text-[28px] text-primary mb-12 flex items-center gap-4">
            <span className="w-8 h-px bg-accent"></span>
            Certifications
          </h2>
          <div>
            <TimelineEntry
              period="Mar 2025"
              title="Machine Learning Specialization"
              subtitle="Stanford Online — Supervised Learning, Unsupervised Learning, Recommender Systems."
            />
            <TimelineEntry
              period="Nov 2024"
              title="OS Fundamentals and Linux"
              subtitle="PESU I/O"
            />
            <TimelineEntry
              period="Ongoing"
              title="ROS2, Gazebo & Path Planning"
              subtitle="Robot simulation, navigation, and autonomous path planning."
            />
          </div>
        </div>
      </div>

    </section>
  );
}
