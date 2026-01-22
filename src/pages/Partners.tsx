import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Users, 
  Wrench, 
  Globe,
  FileText,
  Zap,
  Download,
  CreditCard,
  Handshake,
  Share2,
  Layers,
  ArrowRight
} from 'lucide-react';

const painPoints = [
  { icon: Clock, text: 'Project scoping takes weeks' },
  { icon: Users, text: 'Qualification flows frustrate contributors' },
  { icon: Wrench, text: 'Recruiting the right crowd is manual' },
  { icon: Globe, text: 'Legacy portals slow everything down' },
];

const offerings = [
  {
    icon: FileText,
    title: 'Modular project templates',
    description: 'Pre-built flows for data collection and annotation.',
  },
  {
    icon: Zap,
    title: 'Faster time-to-pilot',
    description: 'Weeks, not months, from scoping to delivery.',
  },
  {
    icon: Download,
    title: 'Simple delivery formats',
    description: 'Drive, CSV, Sheets—formats your clients expect.',
  },
  {
    icon: CreditCard,
    title: 'Optional payment rails',
    description: 'Seamless contributor compensation infrastructure.',
  },
  {
    icon: Globe,
    title: 'Global contributor diversity',
    description: 'Access to consented contributors worldwide.',
  },
];

const engagements = [
  {
    icon: Handshake,
    title: 'Supplier partnership',
    description: 'You sell; we fulfill. White-label sourcing for your existing contracts.',
  },
  {
    icon: Share2,
    title: 'Joint pilot',
    description: 'Co-branded engagements to win new business together.',
  },
  {
    icon: Layers,
    title: 'White-label sourcing layer',
    description: 'Integrate our infrastructure into your delivery pipeline.',
  },
];

export default function Partners() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="pill mb-6">For Data Providers</span>
            <h1 className="text-display-sm md:text-display text-foreground text-balance">
              Close more data projects without rebuilding your stack.
            </h1>
            <p className="mt-6 text-body-lg md:text-xl text-muted-foreground max-w-2xl">
              DDH helps legacy providers source higher-trust data types and deliver faster—without deep integration.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
              Sound familiar?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-4 p-5 bg-secondary/50 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center shrink-0">
                    <point.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-body text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 md:py-24 section-subtle">
        <div className="container">
          <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
            What we provide
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className="card-elevated rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <offering.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-title text-foreground mb-2">{offering.title}</h3>
                <p className="text-body-sm text-muted-foreground">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
            Engagement models
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((engagement) => (
              <div
                key={engagement.title}
                className="card-elevated rounded-xl p-6 md:p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <engagement.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-title text-foreground mb-2">{engagement.title}</h3>
                <p className="text-body text-muted-foreground">
                  {engagement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 trust-gradient">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-headline-sm md:text-headline text-primary-foreground">
              Let's discuss partnership.
            </h2>
            <p className="mt-4 text-body-lg text-primary-foreground/80">
              We're looking for data providers who want to expand their capabilities.
            </p>
            <Link to="/request-access" className="inline-block mt-8">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Discuss partnership
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
