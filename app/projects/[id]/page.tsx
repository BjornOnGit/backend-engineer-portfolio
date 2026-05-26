import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { projects } from '@/lib/portfolio-data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ProjectDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata(props: ProjectDetailPageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Backend Engineer Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {/* Back Button */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              {project.role && (
                <div>
                  <p className="text-xs font-semibold text-accent uppercase mb-1">Role</p>
                  <p className="text-foreground">{project.role}</p>
                </div>
              )}
              {project.date && (
                <div>
                  <p className="text-xs font-semibold text-accent uppercase mb-1">Date</p>
                  <p className="text-foreground">{project.date}</p>
                </div>
              )}
              {project.impact && (
                <div>
                  <p className="text-xs font-semibold text-accent uppercase mb-1">Impact</p>
                  <p className="text-foreground">{project.impact}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8">Key Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-secondary border border-border rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold text-accent mb-2">{metric.value}</p>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-accent/10 text-accent-light border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mb-16">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg hover:bg-accent-hover transition-colors font-medium"
                >
                  <ExternalLink size={18} />
                  Visit Project
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 text-foreground rounded-lg hover:border-accent hover:bg-accent/5 transition-colors font-medium"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-border py-8 mb-8">
              <p className="text-muted-foreground italic">
                This project showcases expertise in {project.category} engineering and demonstrates 
                the ability to design and implement complex systems at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group bg-secondary border border-border rounded-lg p-6 hover:border-accent transition-colors"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedProject.shortDescription}
                    </p>
                    <div className="flex gap-2">
                      {relatedProject.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-accent/10 text-accent-light rounded">
                          {tech}
                        </span>
                      ))}
                      {relatedProject.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{relatedProject.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
