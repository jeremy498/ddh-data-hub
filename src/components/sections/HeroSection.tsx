import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, FileCheck, Eye, RotateCcw } from 'lucide-react';

const trustPoints = [
  { icon: FileCheck, label: 'Purpose-limited licensing' },
  { icon: RotateCcw, label: 'Revocable consent' },
  { icon: Eye, label: 'Audit logs' },
  { icon: Shield, label: 'Non-custodial by design' },
];

export function HeroSection() {
  return (
    <section className="hero-gradient">
      <div className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-display-sm md:text-display text-foreground text-balance animate-fade-in-up">
            Real behavior data.{' '}
            <span className="text-muted-foreground">Permissioned. Auditable. Enterprise-ready.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-body-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-delay-1">
            DDH enables AI labs and enterprises to license high-signal behavioral data—browsing, messaging, transactions, workflows—through explicit, revocable consent.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link to="/request-access">
              <Button variant="hero" size="xl">
                Request Access
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/#how-it-works">
              <Button variant="outline" size="xl">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust line */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 animate-fade-in-delay-3">
            {trustPoints.map((point) => (
              <div key={point.label} className="flex items-center gap-2 text-body-sm text-muted-foreground">
                <point.icon className="w-4 h-4" />
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
