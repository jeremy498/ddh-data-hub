import { Link } from 'react-router-dom';

const footerLinks = [
  { href: '/trust', label: 'Trust' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-foreground">Digital Data Holdings</span>
            </div>
            <p className="text-body-sm text-muted-foreground max-w-xs">
              Permissioned behavioral data for AI and enterprise.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-body-sm font-medium text-foreground">Company</span>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-body-sm font-medium text-foreground">Contact</span>
              <a
                href="mailto:contact@digitaldataholdings.com"
                className="text-body-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@digitaldataholdings.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-caption text-muted-foreground">
            © {new Date().getFullYear()} Digital Data Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
