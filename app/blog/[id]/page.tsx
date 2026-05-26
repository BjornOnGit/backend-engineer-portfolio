import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Mock blog posts database
const blogPosts: Record<string, any> = {
  'distributed-caching': {
    title: 'Building High-Performance Distributed Caching Systems',
    date: '2024-03-15',
    readTime: 8,
    tags: ['caching', 'redis', 'architecture', 'performance'],
    content: `# Building High-Performance Distributed Caching Systems

Distributed caching is one of the most effective ways to improve application performance and reduce load on your databases. In this article, we'll explore the principles of building a high-performance distributed caching system that can handle millions of requests per second.

## The Challenge

As applications scale, database queries become a bottleneck. Every database hit adds latency, consumes resources, and limits throughput. A well-designed caching layer can reduce database load by 70-90% and dramatically improve response times.

## Key Architecture Decisions

When building a distributed cache, you need to consider:

- **Consistency Models**: Trade-offs between strong consistency and availability
- **Cache Invalidation**: One of the hardest problems in computer science
- **Scalability**: Ensuring the cache itself doesn't become a bottleneck
- **Reliability**: Handling cache failures gracefully

## Implementation Strategies

Using Redis as our foundation, we implemented:

1. **Write-Through Caching**: Updates immediately invalidate cache
2. **Cache-Aside Pattern**: Application logic handles cache misses
3. **Time-Based Expiration**: Automatic cleanup of stale data
4. **Distributed Hashing**: Consistent hashing for node distribution

## Results

The implementation achieved:
- **99.99% cache hit rate** for frequently accessed data
- **Sub-millisecond** latency for cache lookups
- **100k+ requests/second** throughput
- **70% reduction** in database load

This architecture serves millions of users and continues to scale effortlessly.`,
  },
  'microservices-migration': {
    title: 'From Monolith to Microservices: A Real-World Migration Story',
    date: '2024-03-01',
    readTime: 12,
    tags: ['microservices', 'architecture', 'systems-design'],
    content: `# From Monolith to Microservices

Learn about the challenges and successes of migrating a large monolithic application to a modern microservices architecture.

This comprehensive article walks through real-world decisions, trade-offs, and lessons learned during a complex migration project...`,
  },
  'kubernetes-operators': {
    title: 'Writing Custom Kubernetes Operators for Production Workloads',
    date: '2024-02-15',
    readTime: 10,
    tags: ['kubernetes', 'devops', 'golang', 'automation'],
    content: `# Kubernetes Operators Guide

Custom operators extend Kubernetes to manage complex applications. In this guide, we explore operator design patterns...`,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({
    id,
  }));
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts[params.id];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description || 'Read this article on backend engineering and systems design.',
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const params = await props.params;
  const post = blogPosts[params.id];

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        {/* Back Button */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article>
          <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 to-transparent">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">{post.title}</h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={18} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={18} />
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-light border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
              <div
                className="text-muted-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n\n')
                    .filter(Boolean)
                    .map((para: string) => {
                      if (para.startsWith('#')) {
                        const level = para.match(/^#+/)?.[0].length || 1;
                        const text = para.replace(/^#+\s/, '');
                        const tag = `h${level + 1}`;
                        return `<${tag} class="text-${['', 'xl', 'lg', 'base'][level]} font-bold text-foreground mt-8 mb-4">${text}</${tag}>`;
                      }
                      return `<p>${para}</p>`;
                    })
                    .join(''),
                }}
              />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
