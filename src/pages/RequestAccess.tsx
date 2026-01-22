import { Layout } from '@/components/layout/Layout';
import { RequestAccessForm } from '@/components/forms/RequestAccessForm';

export default function RequestAccess() {
  return (
    <Layout>
      <section className="hero-gradient py-20 md:py-28">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-display-sm md:text-headline text-foreground">
                Request access
              </h1>
              <p className="mt-4 text-body-lg text-muted-foreground">
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
