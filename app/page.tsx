import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectCard } from '@/components/ProjectCard';
import { projects, skills, experiences } from '@/lib/portfolio-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Showcasing my most impactful work in backend systems, infrastructure, and distributed architecture.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            {/* View All CTA */}
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-foreground hover:border-accent hover:bg-accent/5 transition-colors group"
              >
                <span>View All Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection skills={skills} />

        {/* About Section */}
        <AboutSection experiences={experiences} />

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready To Talk Infrastructure?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in discussing backend engineering, systems design, and scalable architecture. 
              Feel free to reach out for consultations, speaking opportunities, or collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-primary-foreground font-medium hover:bg-accent-hover transition-colors"
              >
                Send Me An Email
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-accent/30 text-foreground hover:border-accent hover:bg-accent/5 transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
