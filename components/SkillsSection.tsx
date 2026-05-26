'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/lib/types';

interface SkillsSectionProps {
  skills: Skill[];
  title?: string;
  description?: string;
}

export function SkillsSection({ 
  skills, 
  title = 'Technical Expertise',
  description = 'Core competencies in backend systems, infrastructure, and cloud engineering.'
}: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={skillGroup.category}
            variants={itemVariants}
            className="bg-secondary border border-border rounded-lg p-6 hover:border-accent transition-colors group"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent group-hover:text-accent-light transition-colors">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-sm rounded-full bg-accent/10 text-accent-light border border-accent/20 hover:border-accent/50 transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
