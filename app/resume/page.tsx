import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ExperienceCard } from '@/components/ExperienceCard';
import { SkillsSection } from '@/components/SkillsSection';
import { experiences, skills } from '@/lib/portfolio-data';
import { Download } from 'lucide-react';

export const metadata = {
  title: 'Resume | Backend Engineer Portfolio',
  description: 'Professional resume and experience of a backend infrastructure engineer.',
};

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {/* Header with Download Button */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-transparent">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
              <p className="text-lg text-muted-foreground">
                Professional experience and technical expertise in backend engineering and systems architecture.
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary-foreground font-medium hover:bg-accent-hover transition-colors whitespace-nowrap h-fit"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
            <div className="space-y-2">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.company} experience={exp} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
              <p className="text-accent font-medium mb-2">University Name</p>
              <p className="text-sm text-muted-foreground">Graduated: 2018</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <SkillsSection 
            skills={skills}
            title="Technical Skills"
            description="Core technical competencies developed throughout my career."
          />
        </div>

        {/* Certifications Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services' },
                { title: 'Kubernetes Application Developer (CKAD)', issuer: 'Cloud Native Computing Foundation' },
                { title: 'PostgreSQL Associate', issuer: 'EDB' },
              ].map((cert, i) => (
                <div key={i} className="bg-secondary border border-border rounded-lg p-6">
                  <h3 className="font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-accent">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
            <div className="bg-secondary border border-border rounded-lg p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Senior backend engineer with 6+ years of experience designing and implementing scalable distributed systems, 
                cloud infrastructure, and high-performance applications. Proven expertise in microservices architecture, 
                database optimization, and DevOps practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Strong background in building systems that handle millions of requests per second, with deep knowledge of 
                containerization, orchestration, and modern cloud platforms. Passionate about clean code, system design, 
                and mentoring junior engineers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in full software development lifecycle from architecture and design through deployment and 
                monitoring. Skilled communicator with the ability to translate complex technical concepts for both technical 
                and non-technical audiences.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
