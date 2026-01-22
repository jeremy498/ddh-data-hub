import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Shield, 
  CheckCircle, 
  Target, 
  RotateCcw, 
  Eye, 
  Database,
  ArrowRight,
  User,
  FileSearch,
  Lock,
  Package,
  FileText
} from 'lucide-react';

const principles = [
  { icon: CheckCircle, text: 'Explicit consent' },
  { icon: Target, text: 'Purpose limitation' },
  { icon: RotateCcw, text: 'Revocation by default' },
  { icon: Eye, text: 'Audit logs and transparency' },
  { icon: Database, text: 'Minimal retention + non-custodial posture' },
];

const consentFlow = [
  { icon: User, label: 'User Permissions', description: 'Contributor grants specific data access' },
  { icon: FileSearch, label: 'Project Scope', description: 'Purpose & duration defined' },
  { icon: Lock, label: 'Licensing Event', description: 'Permission recorded immutably' },
  { icon: Package, label: 'Delivery', description: 'Data transferred to buyer' },
  { icon: FileText, label: 'Audit Log', description: 'Full trail maintained' },
];

const faqs = [
  {
    question: 'Do you sell personal data?',
    answer: 'We facilitate licensing with explicit consent. Data is purpose-limited to specific use cases and durations agreed upon by the contributor.',
  },
  {
    question: 'Can users revoke their consent?',
    answer: 'Yes. Contributors can revoke consent at any time, which impacts all future usage of their data. Previously licensed data remains under its original terms.',
  },
  {
    question: 'How is data delivered?',
    answer: 'Data is delivered in standardized formats (CSV/Parquet) with full data dictionaries, QA reports, and audit logs.',
  },
  {
    question: 'Can we run pilots before committing?',
    answer: 'Yes. We encourage pilot programs to validate data quality and fit before larger engagements.',
  },
];

export default function Trust() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-foreground" />
              <span className="pill">Trust & Compliance</span>
            </div>
            <h1 className="text-display-sm md:text-display text-foreground text-balance">
              Compliance isn't a promise.{' '}
              <span className="text-muted-foreground">It's built in.</span>
            </h1>
            <p className="mt-6 text-body-lg md:text-xl text-muted-foreground max-w-2xl">
              Permissioned, purpose-limited licensing with revocation and auditability at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-headline-sm md:text-headline text-foreground mb-10">
              Core principles
            </h2>
            <div className="space-y-4">
              {principles.map((principle) => (
                <div
                  key={principle.text}
                  className="flex items-center gap-4 p-5 bg-secondary/50 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <principle.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-body-lg text-foreground">{principle.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consent Flow Diagram */}
      <section className="py-16 md:py-24 section-subtle">
        <div className="container">
          <h2 className="text-headline-sm md:text-headline text-foreground mb-10 text-center">
            How consent works
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Desktop flow */}
            <div className="hidden md:flex items-center justify-between relative">
              {/* Connector line */}
              <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-border" />
              
              {consentFlow.map((step, index) => (
                <div key={step.label} className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-4 shadow-sm">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-body font-medium text-foreground mb-1">{step.label}</h3>
                  <p className="text-caption text-muted-foreground max-w-[120px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile flow */}
            <div className="md:hidden space-y-4">
              {consentFlow.map((step, index) => (
                <div key={step.label} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                      <step.icon className="w-6 h-6 text-foreground" />
                    </div>
                    {index < consentFlow.length - 1 && (
                      <div className="w-0.5 h-8 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-body font-medium text-foreground">{step.label}</h3>
                    <p className="text-body-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-headline-sm md:text-headline text-foreground mb-10 text-center">
              Frequently asked questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-elevated rounded-xl px-6 border"
                >
                  <AccordionTrigger className="text-body font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 trust-gradient">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-headline-sm md:text-headline text-primary-foreground">
              Request our compliance brief.
            </h2>
            <p className="mt-4 text-body-lg text-primary-foreground/80">
              Get detailed documentation on our privacy practices and compliance framework.
            </p>
            <Link to="/request-access" className="inline-block mt-8">
              <Button
                size="xl"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Request compliance brief
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
