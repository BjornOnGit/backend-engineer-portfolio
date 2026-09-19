'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Resume', href: '/resume' },
  ];

  const social = [
    { icon: Github, href: 'https://github.com/BjornOnGit', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/francis-eze-ogonnaya', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/theyclonedbjorn', label: 'Twitter' },
    { icon: Mail, href: 'mailto:ezefrancis049@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border bg-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-2">Backend Engineer</h3>
            <p className="text-sm text-muted-foreground">
              Crafting scalable systems and robust infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tech Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    aria-label={item.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Backend Engineer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
