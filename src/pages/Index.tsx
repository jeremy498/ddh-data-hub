import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { DataTypesSection } from '@/components/sections/DataTypesSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { SocialProofSection } from '@/components/sections/SocialProofSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DataTypesSection />
      <ProblemSection />
      <HowItWorksSection />
      <ComparisonSection />
      <ProductsSection />
      <SocialProofSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
