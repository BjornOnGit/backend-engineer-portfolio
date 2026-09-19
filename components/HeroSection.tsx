'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2 } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8">
              <Code2 size={16} className="text-accent" />
              <span className="text-sm text-accent font-medium">Backend-Focused Fullstack Engineer</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
              Systems That Handle
            </span>
            <br />
            Money, Machines, and Patients Reliably
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I design and build backend systems for products where correctness isn't optional. Comfortable across Python, Go, and TypeScript, from API design through deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-primary-foreground font-medium hover:bg-accent-hover transition-colors group"
            >
              View My Work
              <motion.div initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <ArrowRight size={18} />
              </motion.div>
            </Link>
            <a
              href="mailto:ezefrancis049@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-accent/30 text-foreground hover:border-accent hover:bg-accent/5 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-3 gap-8 pt-12 border-t border-border"
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Built', value: '10+' },
              { label: 'Failed Transactions', value: '< 90%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
