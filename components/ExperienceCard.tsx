'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/types';
import { CheckCircle2 } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      className="relative pl-8 pb-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-accent border-2 border-background" />
      {/* Timeline line */}
      {index !== undefined && (
        <div className="absolute left-1.5 top-6 w-0.5 h-full bg-border" />
      )}

      <div className="bg-secondary border border-border rounded-lg p-6 hover:border-accent transition-colors">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold">{experience.title}</h3>
            <p className="text-sm text-accent font-medium">{experience.company}</p>
          </div>
          {experience.current && (
            <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium">
              Current
            </span>
          )}
        </div>

        {/* Date */}
        <p className="text-xs text-muted-foreground mb-4">
          {experience.startDate} {experience.endDate ? `— ${experience.endDate}` : ''}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">
          {experience.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-foreground/70 mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded bg-accent/10 text-accent-light border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-foreground/70 mb-2">Key Achievements</p>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-accent mt-0.5" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}
