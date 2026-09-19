import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Francis Eze',
  description: 'Notes on backend engineering, payments, and industrial systems from real projects.',
};

const blogPosts = [
  {
    id: 'sensor-alerting-thresholds',
    title: 'Designing a Threshold-Based Alerting System for Industrial Sensor Data',
    description: 'How I built the alerting layer for a predictive maintenance platform — turning noisy vibration and temperature readings into alerts operators can actually trust.',
    date: '2026-08-20',
    readTime: 7,
    tags: ['fastapi', 'postgresql', 'industrial', 'alerting'],
  },
  {
    id: 'payment-gateway-idempotency',
    title: 'Idempotency and Webhooks: Lessons from Building a Payment Gateway',
    description: 'Why naive webhook handling duplicates transactions, and how signature verification plus idempotency keys cut failed/duplicated payments by 90% on a gateway I built.',
    date: '2026-07-05',
    readTime: 8,
    tags: ['payments', 'webhooks', 'node.js', 'reliability'],
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Notes from real projects — backend engineering, payments infrastructure, and industrial systems.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, i) => (
              <div
                key={post.id}
                className="group bg-secondary border border-border rounded-lg p-8 hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <Link href={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-light border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group/link"
                >
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}