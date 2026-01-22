import { Layout } from '@/components/layout/Layout';
import { RequestAccessForm } from '@/components/forms/RequestAccessForm';
import { Bot, Target, Shield, Briefcase, FileText, CheckCircle, Lock, Download, Star } from 'lucide-react';

const useCases = [
  {
    icon: Bot,
    title: 'Agent training & evaluation',
    description: 'Real behavioral data to train and benchmark AI agents.',
  },
  {
    icon: Target,
    title: 'Personalization & ranking',
    description: 'Authentic signals for recommendation and ranking systems.',
  },
  {
    icon: Shield,
    title: 'Fraud / risk / finance modeling',
    description: 'Transaction and behavior data for risk assessment.',
  },
  {
    icon: Briefcase,
    title: 'Productivity + workflow modeling',
    description: 'Real workflow traces for automation and tooling.',
  },
];

const deliverables = [
  { icon: FileText, text: 'Standardized schema (CSV/Parquet + data dictionary)' },
  { icon: CheckCircle, text: 'Sampling + QA report' },
  { icon: Lock, text: 'Consent scope summary' },
  { icon: Download, text: 'Access/audit log export' },
  { icon: Star, text: 'Optional exclusivity' },
];

const pricing = [
  { type: 'Pilot datasets', range: '$25K–$135K', note: 'depending on scope' },
  { type: 'Subscription pools', range: '$1K–$10K/month', note: 'depending on access tier' },
  { type: 'Enterprise programs', range: 'Custom', note: 'contact us' },
];

export default function Buyers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-foreground text-balance">
              Buy behavioral datasets you can actually use.
            </h1>
            <p className="mt-6 text-body-lg md:text-xl text-muted-foreground max-w-2xl">
              Purpose-limited licensing, clear consent, and auditability designed for enterprise legal review.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
            Use cases
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="card-elevated rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <useCase.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-title text-foreground mb-2">{useCase.title}</h3>
                <p className="text-body-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 md:py-24 section-subtle">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
              What you receive
            </h2>
            <div className="space-y-4">
              {deliverables.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="text-body text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
            Pricing expectations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((tier) => (
              <div
                key={tier.type}
                className="card-elevated rounded-xl p-6 md:p-8 text-center"
              >
                <p className="text-body text-muted-foreground mb-2">{tier.type}</p>
                <p className="text-headline-sm text-foreground">{tier.range}</p>
                <p className="text-body-sm text-muted-foreground mt-2">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24 section-subtle">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-headline-sm md:text-headline text-foreground">
                Request access
              </h2>
              <p className="mt-4 text-body text-muted-foreground">
                Tell us about your data needs and we'll get back to you within 24 hours.
              </p>
            </div>
            <RequestAccessForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
