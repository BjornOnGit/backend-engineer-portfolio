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
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold mb-12">Education</h2>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Electronic and Computer Engineering</h3>
              <p className="text-accent font-medium mb-2">Nnamdi Azikiwe University</p>
              <p className="text-sm text-muted-foreground">2019 – 2024</p>
            </div>
            <div className="bg-secondary border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Diploma, ALX Software Engineering Program</h3>
              <p className="text-accent font-medium mb-2">1-year software engineering program specializing in backend engineering</p>
              <p className="text-sm text-muted-foreground">2022 – 2023</p>
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

        {/* Summary Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
            <div className="bg-secondary border border-border rounded-lg p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Detail-oriented software engineer with a solid foundation in backend development, API design, and systems
                integration. Proficient in Python, Django, FastAPI, Go, and JavaScript frameworks, with experience deploying
                scalable web applications using Docker, DigitalOcean, and CI/CD tools.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Demonstrated ability to solve business problems through code, with recent projects spanning payments,
                industrial predictive maintenance, e-commerce, healthcare automation, cybersecurity, and financial decision
                engines.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Skilled at cross-functional collaboration and technical writing, with a passion for building useful,
                performant, user-centric software.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}