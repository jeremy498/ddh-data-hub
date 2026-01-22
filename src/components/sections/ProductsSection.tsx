import { Briefcase, Users, Database } from 'lucide-react';

const products = [
  {
    icon: Briefcase,
    title: 'Private Data Brokerage',
    description: 'Bespoke datasets tailored to specific research or training needs.',
    whoFor: 'AI labs with unique data requirements',
    engagement: 'Project-based, $50K–$500K+',
  },
  {
    icon: Users,
    title: 'Contributor-as-a-Service',
    description: 'Pre-screened, consented contributors ready for your data collection.',
    whoFor: 'Teams needing quality supply fast',
    engagement: 'Ongoing retainer or per-project',
  },
  {
    icon: Database,
    title: 'Data Pools',
    description: 'Subscription access to curated, continuously updated datasets.',
    whoFor: 'Enterprises needing ongoing data feeds',
    engagement: 'Monthly subscription, $1K–$10K/mo',
  },
];

export function ProductsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="pill mb-4">Products</span>
          <h2 className="text-headline-sm md:text-headline text-foreground">
            Revenue products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="card-elevated rounded-xl p-6 md:p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <product.icon className="w-6 h-6 text-foreground" />
              </div>
              
              <h3 className="text-title text-foreground mb-2">{product.title}</h3>
              <p className="text-body text-muted-foreground mb-6 flex-1">
                {product.description}
              </p>
              
              <div className="pt-4 border-t border-border space-y-2">
                <p className="text-body-sm">
                  <span className="font-medium text-foreground">Who it's for: </span>
                  <span className="text-muted-foreground">{product.whoFor}</span>
                </p>
                <p className="text-body-sm">
                  <span className="font-medium text-foreground">Typical: </span>
                  <span className="text-muted-foreground">{product.engagement}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
