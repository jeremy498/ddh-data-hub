import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Tell us what data you need.",
  subtitle,
  primaryLabel = "Request Access",
  primaryHref = "/request-access",
  secondaryLabel = "Book a Call with Sales",
  secondaryHref = "/request-access",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 trust-gradient">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-headline-sm md:text-headline text-primary-foreground text-balance">
            {title}
          </h2>
          
          {subtitle && (
            <p className="mt-4 text-body-lg text-primary-foreground/80">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryHref}>
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {primaryLabel}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to={secondaryHref}>
              <Button
                size="xl"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary"
              >
                <Calendar className="w-4 h-4" />
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
