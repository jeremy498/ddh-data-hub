import { Globe, MessageSquare, CreditCard, Workflow } from 'lucide-react';

const dataTypes = [
  {
    icon: Globe,
    title: 'Browsing patterns',
    description: 'Real navigation behavior across sites and sessions.',
    whyMatters: 'Reveals intent signals synthetic data cannot replicate.',
    whyLegacyCant: 'Browser restrictions and privacy laws block traditional collection.',
  },
  {
    icon: MessageSquare,
    title: 'Messaging flows',
    description: 'Authentic conversational data from real interactions.',
    whyMatters: 'Trains agents that understand natural dialogue.',
    whyLegacyCant: 'Encrypted platforms prevent access without user consent.',
  },
  {
    icon: CreditCard,
    title: 'Transaction behavior',
    description: 'Purchase patterns, spend timing, and financial signals.',
    whyMatters: 'Critical for fraud detection and personalization.',
    whyLegacyCant: 'Payment data requires explicit permissioning at source.',
  },
  {
    icon: Workflow,
    title: 'Workflow traces',
    description: 'How people actually use tools and complete tasks.',
    whyMatters: 'Essential for productivity AI and automation.',
    whyLegacyCant: 'Enterprise tools don\'t expose this without consent infrastructure.',
  },
];

export function DataTypesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline-sm md:text-headline text-foreground">
            What DDH unlocks
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground max-w-xl mx-auto">
            High-signal behavioral data that existing providers cannot source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {dataTypes.map((type) => (
            <div
              key={type.title}
              className="card-elevated rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <type.icon className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-title text-foreground">{type.title}</h3>
                  <p className="mt-1 text-body text-muted-foreground">
                    {type.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <p className="text-body-sm">
                      <span className="font-medium text-foreground">Why it matters: </span>
                      <span className="text-muted-foreground">{type.whyMatters}</span>
                    </p>
                    <p className="text-body-sm">
                      <span className="font-medium text-foreground">Why legacy can't: </span>
                      <span className="text-muted-foreground">{type.whyLegacyCant}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
