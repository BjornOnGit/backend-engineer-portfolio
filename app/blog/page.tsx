import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Backend Engineer Portfolio',
  description: 'Articles about backend engineering, systems design, and infrastructure.',
};

const blogPosts = [
  {
    id: 'distributed-caching',
    title: 'Building High-Performance Distributed Caching Systems',
    description: 'A deep dive into designing and implementing distributed caching layers that can handle millions of requests per second.',
    date: '2024-03-15',
    readTime: 8,
    tags: ['caching', 'redis', 'architecture', 'performance'],
  },
  {
    id: 'microservices-migration',
    title: 'From Monolith to Microservices: A Real-World Migration Story',
    description: 'Lessons learned and best practices from migrating a monolithic application to event-driven microservices.',
    date: '2024-03-01',
    readTime: 12,
    tags: ['microservices', 'architecture', 'systems-design'],
  },
  {
    id: 'kubernetes-operators',
    title: 'Writing Custom Kubernetes Operators for Production Workloads',
    description: 'An in-depth guide to developing and deploying Kubernetes operators that manage complex distributed systems.',
    date: '2024-02-15',
    readTime: 10,
    tags: ['kubernetes', 'devops', 'golang', 'automation'],
  },
  {
    id: 'api-gateway-design',
    title: 'Designing an Enterprise-Grade API Gateway',
    description: 'Architecture patterns and implementation strategies for building scalable, resilient API gateways.',
    date: '2024-02-01',
    readTime: 9,
    tags: ['api', 'infrastructure', 'design', 'routing'],
  },
  {
    id: 'database-optimization',
    title: 'PostgreSQL Query Optimization: From Slow to Lightning Fast',
    description: 'Practical techniques for identifying and fixing performance bottlenecks in PostgreSQL databases.',
    date: '2024-01-15',
    readTime: 11,
    tags: ['database', 'postgresql', 'performance', 'sql'],
  },
  {
    id: 'observability-patterns',
    title: 'Building Observable Systems: Logs, Metrics, and Traces',
    description: 'A comprehensive guide to implementing observability across your backend infrastructure.',
    date: '2024-01-01',
    readTime: 13,
    tags: ['observability', 'monitoring', 'architecture'],
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
              Articles about backend engineering, systems design, infrastructure, and the craft of building 
              scalable software.
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
