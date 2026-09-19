'use client';

import { motion } from 'framer-motion';
import { ExperienceCard } from './ExperienceCard';
import { Experience } from '@/lib/types';

interface AboutSectionProps {
  experiences: Experience[];
}

export function AboutSection({ experiences }: AboutSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Journey</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A track record of building high-performance systems and leading technical initiatives across fast-growing companies. 
          Passionate about clean code, system design, and mentoring the next generation of engineers.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="space-y-2">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} experience={exp} index={i} />
        ))}
      </div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 bg-secondary border border-border rounded-lg p-8"
      >
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          I&apos;m a detail-oriented software engineer with a solid foundation in backend development, API design, and systems integration. Proficient in Python, Django, FastAPI, Go, and JavaScript frameworks, with experience in deploying scalable web applications using Docker, DigitalOcean, and CI/​CD tools. Demonstrated ability to solve business problems through code, with recent projects spanning e-commerce systems, healthcare automation, cybersecurity platforms, and intelligent financial decision engines. Skilled at cross-functional collaboration and technical writing, with a passion for building useful, performant, and user-centric software.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          My expertise spans from low-level systems programming to high-level architectural decisions. 
          I&apos;m experienced in containerization, orchestration, monitoring, and building resilient systems 
          that can handle extreme scale.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I&apos;m not writing code or architecting systems, you&apos;ll find me contributing to open source, 
          writing about backend engineering, or mentoring junior developers.
        </p>
      </motion.div>
    </section>
  );
}
