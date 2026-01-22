import { Check, Minus } from 'lucide-react';

const comparisonRows = [
  {
    feature: 'Permissioning & revocation infrastructure',
    ddh: true,
    typical: false,
  },
  {
    feature: 'Longitudinal contributor trust',
    ddh: true,
    typical: false,
  },
  {
    feature: 'Global privacy/compliance operations',
    ddh: true,
    typical: 'Partial',
  },
  {
    feature: 'Buyer-grade data QA and delivery',
    ddh: true,
    typical: 'Partial',
  },
  {
    feature: 'Purpose-limited licensing',
    ddh: true,
    typical: false,
  },
  {
    feature: 'Real-time audit logs',
    ddh: true,
    typical: false,
  },
];

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 section-subtle">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="pill mb-4">Differentiation</span>
          <h2 className="text-headline-sm md:text-headline text-foreground">
            Why this is hard to replicate
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-elevated rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left p-4 md:p-6 text-body font-medium text-foreground">
                      Capability
                    </th>
                    <th className="text-center p-4 md:p-6 text-body font-medium text-foreground w-28">
                      DDH
                    </th>
                    <th className="text-center p-4 md:p-6 text-body font-medium text-muted-foreground w-28">
                      Typical
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={index !== comparisonRows.length - 1 ? 'border-b border-border' : ''}
                    >
                      <td className="p-4 md:p-6 text-body text-foreground">
                        {row.feature}
                      </td>
                      <td className="p-4 md:p-6 text-center">
                        {row.ddh === true ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                            <Check className="w-4 h-4 text-primary-foreground" />
                          </div>
                        ) : (
                          <span className="text-body-sm text-muted-foreground">{row.ddh}</span>
                        )}
                      </td>
                      <td className="p-4 md:p-6 text-center">
                        {row.typical === true ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                            <Check className="w-4 h-4 text-primary-foreground" />
                          </div>
                        ) : row.typical === false ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                            <Minus className="w-4 h-4 text-muted-foreground" />
                          </div>
                        ) : (
                          <span className="text-body-sm text-muted-foreground">{row.typical}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
