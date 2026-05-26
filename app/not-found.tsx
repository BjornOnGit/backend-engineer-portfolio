import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="mb-8">
            <p className="text-6xl sm:text-7xl font-bold text-accent mb-4">404</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-primary-foreground font-medium hover:bg-accent-hover transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-foreground hover:border-accent hover:bg-accent/5 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
