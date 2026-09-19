import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MarkdownContent } from '@/components/MarkdownContent';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Blog post content database
const blogPosts: Record<string, any> = {
  'sensor-alerting-thresholds': {
    title: 'Designing a Threshold-Based Alerting System for Industrial Sensor Data',
    date: '2026-08-20',
    readTime: 7,
    tags: ['fastapi', 'postgresql', 'industrial', 'alerting'],
    content: `When I built the alerting layer for a predictive maintenance platform, the goal was simple to state and harder to get right: watch live vibration and temperature readings from industrial equipment, and tell an operator the moment something looks wrong, without burying them in noise.

## Why naive alerting fails fast

The obvious first pass is to fire an alert every time a reading crosses a fixed threshold. That works for about a day. Sensor data is noisy by nature, so a value that briefly spikes above the limit and settles back down triggers an alert, then another one a few seconds later when it spikes again, then another. Operators stop trusting the system within a week, which defeats the entire point of predictive maintenance. **The failure mode isn't "no alerts," it's "too many alerts to act on."**

## Severity, not just threshold-crossing

The system scores incoming sensor readings against per-asset thresholds and classifies the result by severity rather than treating every breach as equal:

- **Normal** — within expected range, no action
- **Watch** — marginally over the line, logged but not escalated
- **Critical** — far outside normal range, or climbing steadily across several evaluation cycles

That distinction alone cut a lot of the noise, because most transient spikes never reach the critical tier.

## Suppressing duplicate active alerts

The second piece was preventing the same underlying problem from generating a new alert every time the scheduler ran its evaluation pass. The rule is simple:

1. Each asset can only have one *active* alert per condition at a time
2. A new breach on an already-alerted condition updates the existing alert's severity and last-seen timestamp instead of creating a duplicate
3. The alert only closes after readings return to normal for a sustained period, not on the first good reading, since equipment behavior fluctuates even when it's actually failing

## Running the evaluation automatically

None of this matters if someone has to manually trigger the checks. I used APScheduler to run periodic sensor evaluation and prediction jobs in the background, so the FastAPI backend continuously re-scores every monitored asset without manual intervention. The scikit-learn prediction service sits alongside the threshold checks, giving a failure-risk score in addition to the raw threshold state — so operators get both "this reading is out of range right now" and "this asset's overall trend suggests rising failure risk."

## What I'd tighten next

If I extended this further, the next step would be making the threshold windows adaptive per asset rather than globally configured, since a vibration level that's normal for one piece of equipment can be a warning sign on another. Right now that tuning happens per asset at setup time, which works but doesn't adjust itself as equipment ages. That's the honest gap between "working system" and "system I'd fully trust unattended," and it's next on the list.`,
  },
  'payment-gateway-idempotency': {
    title: 'Idempotency and Webhooks: Lessons from Building a Payment Gateway',
    date: '2026-07-05',
    readTime: 8,
    tags: ['payments', 'webhooks', 'node.js', 'reliability'],
    content: `Building a payment gateway makes you paranoid in a useful way, because the failure modes aren't abstract. A duplicated charge or a missed reconciliation is money, not just a bug ticket.

## The retry problem

Payment processing involves multiple parties talking over an unreliable network: your service, the payment provider, and often a bank in the middle. Any of those calls can time out, and when a client doesn't get a response, the natural thing to do is retry. Without safeguards, a retried request that actually succeeded the first time just processes the same payment twice.

I built the transaction endpoints to be **idempotent**, so a request carrying the same idempotency key is recognized as a repeat of an in-flight or completed operation rather than a new one, and returns the original result instead of charging again.

## Webhooks are the other half of the picture

Payment providers confirm final transaction status asynchronously through webhooks, which introduces a second failure mode: how do you know a webhook actually came from the provider and not from someone who found your endpoint?

Every incoming webhook goes through the same checks before anything else happens:

- Signature verified against the payload using the provider's shared secret
- Malformed or unverified signatures rejected outright, no partial processing
- Verified events checked against the idempotency store before being applied

That signature check is what actually made asynchronous event handling safe to rely on — it stops forged or replayed events from being treated as real payment confirmations.

## Logging every state transition

The other piece that mattered more than I expected going in was transaction logging and auditing. Every state a transaction passes through — *initiated → verified → reconciled → failed* — gets logged. When a customer or a support ticket asks "what happened to this payment," the answer should come from a log, not from guessing based on the current state.

This is also what made reconciliation possible: comparing what the gateway recorded against what the provider reports, and flagging the mismatches automatically instead of manually cross-checking spreadsheets.

## The result

| Metric | Improvement |
|---|---|
| Failed / duplicated transactions | down 90% |
| Manual reconciliation effort | down 70% |

Those numbers came from a genuinely painful before-state, where retries and unverified events were silently causing double-processing that nobody noticed until reconciliation.

## What surprised me

The technically hardest part wasn't the payment logic itself — it was resisting the urge to treat webhook delivery as reliable. Providers can and do deliver the same webhook more than once, deliver it late, or occasionally not deliver it at all. Designing for "this event might arrive twice or not at all" from the start turned out to matter more than any individual API integration detail.`,
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
            <div className="max-w-3xl mx-auto">
              <MarkdownContent content={post.content} />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}