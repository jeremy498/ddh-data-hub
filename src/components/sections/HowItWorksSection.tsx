import { FileSearch, UserCheck, Package } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: FileSearch,
    title: 'Define the dataset need',
    description: 'Specify purpose, duration, and target audience for your data requirements.',
  },
  {
    number: '2',
    icon: UserCheck,
    title: 'Permissioned sourcing',
    description: 'Contributors opt in with explicit consent. All permissions are revocable.',
  },
  {
    number: '3',
    icon: Package,
    title: 'Delivery + audit',
    description: 'Receive data in standardized schemas with QA reports and full audit logs.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="pill mb-4">Process</span>
          <h2 className="text-headline-sm md:text-headline text-foreground">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (hidden on mobile, hidden after last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] right-0 h-px bg-border" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="step-number mb-6">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-title text-foreground mb-2">{step.title}</h3>
                <p className="text-body text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
