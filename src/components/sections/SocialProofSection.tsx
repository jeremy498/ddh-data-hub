import { Link } from 'react-router-dom';

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-secondary/30">
      <div className="container">
        <div className="text-center">
          <p className="text-body-lg text-muted-foreground mb-4">
            Trusted by teams building agents, personalization, and real-world AI.
          </p>
          
          {/* Placeholder for logos */}
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-24 h-8 rounded bg-muted flex items-center justify-center"
              >
                <span className="text-caption text-muted-foreground">Logo</span>
              </div>
            ))}
          </div>

          <Link
            to="/request-access"
            className="inline-block mt-8 text-body-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Request references →
          </Link>
        </div>
      </div>
    </section>
  );
}
