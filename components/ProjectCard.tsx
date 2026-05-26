'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -4,
      boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.1)',
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      whileHover="hover"
      className="group h-full"
    >
      <motion.div
        variants={hoverVariants}
        className="h-full flex flex-col bg-secondary border border-border rounded-lg p-6 transition-all duration-300 hover:border-accent"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-accent mt-1 font-medium uppercase tracking-wider">
              {project.category}
            </p>
          </div>
          {project.featured && (
            <div className="px-2 py-1 bg-accent/20 text-accent text-xs rounded font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 flex-grow">
          {project.shortDescription}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-border">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <p className="text-sm font-semibold text-accent">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-light border border-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all group/link"
        >
          <span className="text-sm font-medium">View Project</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
