import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/portfolio-data';

export const metadata = {
  title: 'Projects | Backend Engineer Portfolio',
  description: 'Explore my backend engineering projects and infrastructure work.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Projects & Case Studies</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A comprehensive look at my backend engineering work, from distributed systems and 
              infrastructure to microservices and cloud-native applications.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Empty State Message */}
        {projects.length === 0 && (
          <div className="py-20 px-4 text-center">
            <p className="text-muted-foreground">No projects found.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
