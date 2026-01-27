import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'why-consented-behavioral-data-matters-for-ai',
    title: 'Why Consented Behavioral Data Matters for AI Training in 2025',
    excerpt: 'As AI models become more sophisticated, the quality and provenance of training data has become a critical differentiator. Learn why real, consented behavioral data is becoming essential for enterprise AI.',
    date: '2025-01-27',
    readTime: '8 min read',
    category: 'Industry Insights',
  },
];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-foreground">
              Blog
            </h1>
            <p className="mt-6 text-body-lg md:text-xl text-muted-foreground max-w-2xl">
              Insights on behavioral data, AI training, and the future of permissioned data licensing.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="card-elevated rounded-xl p-6 md:p-8 group hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-4 text-body-sm text-muted-foreground mb-4">
                    <span className="pill">{post.category}</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-headline-sm md:text-headline text-foreground group-hover:text-primary transition-colors mb-4">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-body text-muted-foreground mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-body font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
