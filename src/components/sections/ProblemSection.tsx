import { AlertTriangle, Lock, Clock, Shield } from 'lucide-react';

const problems = [
  {
    icon: Lock,
    text: 'Privacy laws and platform restrictions block supply',
  },
  {
    icon: Clock,
    text: 'Most providers are built for one-off tasks, not ongoing trust',
  },
  {
    icon: Shield,
    text: 'Without permissions and auditability, buyers can\'t use sensitive data',
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 section-subtle">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-muted-foreground" />
            <span className="pill">The Problem</span>
          </div>
          
          <h2 className="text-headline-sm md:text-headline text-foreground text-balance">
            AI's bottleneck isn't models.{' '}
            <span className="text-muted-foreground">It's access to real behavior.</span>
          </h2>

          <ul className="mt-10 space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                  <problem.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-body-lg text-foreground pt-2">
                  {problem.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
