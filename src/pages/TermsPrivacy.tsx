import { Layout } from '@/components/layout/Layout';

export default function TermsPrivacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-display-sm md:text-display text-foreground">
              Terms & Privacy
            </h1>
            <p className="mt-6 text-body-lg md:text-xl text-muted-foreground max-w-2xl">
              How we operate, protect your data, and what you agree to when using our services.
            </p>
            <p className="mt-4 text-body-sm text-muted-foreground">
              Last updated: January 27, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl prose-custom">
            
            {/* Terms of Service */}
            <div className="mb-16">
              <h2 className="text-headline text-foreground mb-8 pb-4 border-b border-border">
                Terms of Service
              </h2>
              
              <h3>1. About Digital Data Holdings</h3>
              <p>
                Digital Data Holdings ("DDH," "we," "us," or "our") operates a platform that enables the licensing of behavioral data between data contributors and enterprise buyers. Our services facilitate purpose-limited data licensing with explicit consent, auditability, and revocation mechanisms.
              </p>
              
              <h3>2. Acceptance of Terms</h3>
              <p>
                By accessing or using our website, services, or platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, data contributors, data buyers, and partners.
              </p>
              
              <h3>3. Services Description</h3>
              <p>
                DDH provides the following services:
              </p>
              <ul>
                <li><strong>Private Data Brokerage:</strong> Custom behavioral dataset sourcing for specific research or training needs</li>
                <li><strong>Contributor-as-a-Service:</strong> Access to pre-screened, consented contributors for data collection projects</li>
                <li><strong>Data Pools:</strong> Subscription access to curated, continuously updated behavioral datasets</li>
              </ul>
              <p>
                All data transactions are governed by purpose-limited licensing agreements specific to each engagement.
              </p>
              
              <h3>4. Data Buyer Obligations</h3>
              <p>
                As a data buyer, you agree to:
              </p>
              <ul>
                <li>Use licensed data only for the purposes specified in your licensing agreement</li>
                <li>Not attempt to re-identify, de-anonymize, or link data to specific individuals</li>
                <li>Maintain appropriate security measures for all licensed data</li>
                <li>Comply with all applicable data protection laws and regulations</li>
                <li>Delete or return data upon license expiration or revocation</li>
                <li>Not sublicense, resell, or redistribute data without explicit written authorization</li>
              </ul>
              
              <h3>5. Data Contributor Rights</h3>
              <p>
                Data contributors retain fundamental rights including:
              </p>
              <ul>
                <li><strong>Informed consent:</strong> Clear understanding of how data will be used before any collection</li>
                <li><strong>Purpose limitation:</strong> Data is only licensed for specified, disclosed purposes</li>
                <li><strong>Revocation:</strong> The right to withdraw consent and prevent future use of contributed data</li>
                <li><strong>Transparency:</strong> Access to audit logs showing how data has been accessed and used</li>
                <li><strong>Fair compensation:</strong> Payment terms disclosed before participation</li>
              </ul>
              
              <h3>6. Intellectual Property</h3>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of Digital Data Holdings or its licensors and is protected by intellectual property laws. Data licensing agreements do not transfer ownership of intellectual property.
              </p>
              
              <h3>7. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, DDH shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amounts paid by you for the specific service giving rise to the claim.
              </p>
              
              <h3>8. Indemnification</h3>
              <p>
                You agree to indemnify and hold harmless Digital Data Holdings, its affiliates, officers, directors, employees, and agents from any claims, damages, or expenses arising from your violation of these terms or misuse of licensed data.
              </p>
              
              <h3>9. Modifications to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Material changes will be communicated via email or prominent notice on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
              
              <h3>10. Governing Law</h3>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </div>
            
            {/* Privacy Policy */}
            <div>
              <h2 className="text-headline text-foreground mb-8 pb-4 border-b border-border">
                Privacy Policy
              </h2>
              
              <h3>1. Our Commitment to Privacy</h3>
              <p>
                At Digital Data Holdings, privacy is foundational to our business model. We facilitate the ethical collection and licensing of behavioral data through explicit consent mechanisms, purpose limitation, and contributor control. This policy describes how we handle information in our own operations.
              </p>
              
              <h3>2. Information We Collect</h3>
              <p>
                <strong>Website Visitors:</strong> We collect standard analytics data including pages visited, time on site, referral sources, and device information. We use cookies for essential functionality and analytics.
              </p>
              <p>
                <strong>Business Inquiries:</strong> When you submit a form or contact us, we collect the information you provide, including company name, contact details, use case descriptions, and project requirements.
              </p>
              <p>
                <strong>Clients and Partners:</strong> For active business relationships, we maintain records necessary for service delivery, including contract details, communication history, and billing information.
              </p>
              
              <h3>3. How We Use Your Information</h3>
              <p>
                We use collected information to:
              </p>
              <ul>
                <li>Respond to inquiries and provide requested information</li>
                <li>Deliver and improve our services</li>
                <li>Communicate about projects, updates, and relevant offerings</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
                <li>Analyze website usage to improve user experience</li>
              </ul>
              
              <h3>4. Information Sharing</h3>
              <p>
                We do not sell your personal information. We may share information with:
              </p>
              <ul>
                <li><strong>Service providers:</strong> Vendors who assist with our operations under confidentiality agreements</li>
                <li><strong>Legal compliance:</strong> When required by law, court order, or to protect our rights</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              
              <h3>5. Data Contributor Privacy</h3>
              <p>
                For individuals who contribute behavioral data through our platform:
              </p>
              <ul>
                <li>All data collection requires explicit, informed consent</li>
                <li>Contributors are informed of specific purposes before data is collected</li>
                <li>Consent can be revoked at any time, affecting future data use</li>
                <li>Audit logs track all data access and licensing events</li>
                <li>We employ technical and organizational measures to protect contributor data</li>
                <li>Data is retained only as long as necessary for the specified purpose</li>
              </ul>
              
              <h3>6. Data Buyer Privacy Obligations</h3>
              <p>
                Data buyers are contractually required to:
              </p>
              <ul>
                <li>Implement appropriate security measures for licensed data</li>
                <li>Use data only for agreed purposes</li>
                <li>Not attempt to re-identify individuals</li>
                <li>Delete data when licenses expire or are revoked</li>
                <li>Report any data security incidents promptly</li>
              </ul>
              
              <h3>7. Your Rights</h3>
              <p>
                Depending on your jurisdiction, you may have rights to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to certain processing activities</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:privacy@digitaldataholdings.com" className="text-primary hover:underline">privacy@digitaldataholdings.com</a>.
              </p>
              
              <h3>8. Security</h3>
              <p>
                We implement industry-standard security measures to protect information, including encryption in transit and at rest, access controls, regular security assessments, and employee training. No system is completely secure, and we cannot guarantee absolute security.
              </p>
              
              <h3>9. International Transfers</h3>
              <p>
                We may process information in countries other than your own. When we do, we ensure appropriate safeguards are in place, such as standard contractual clauses or other legally recognized transfer mechanisms.
              </p>
              
              <h3>10. Children's Privacy</h3>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.
              </p>
              
              <h3>11. Changes to This Policy</h3>
              <p>
                We may update this privacy policy periodically. Material changes will be communicated via email or website notice. The "Last updated" date at the top indicates the most recent revision.
              </p>
              
              <h3>12. Contact Us</h3>
              <p>
                For questions about this policy or our privacy practices:
              </p>
              <p className="mt-4">
                <strong>Digital Data Holdings</strong><br />
                Email: <a href="mailto:privacy@digitaldataholdings.com" className="text-primary hover:underline">privacy@digitaldataholdings.com</a><br />
                General inquiries: <a href="mailto:contact@digitaldataholdings.com" className="text-primary hover:underline">contact@digitaldataholdings.com</a>
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </Layout>
  );
}
