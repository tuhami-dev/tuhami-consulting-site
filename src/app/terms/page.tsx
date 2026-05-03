import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Tuhami Consulting.',
  robots: { index: false, follow: false },
};

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 120 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 120px' }}>
          <p className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>
            Legal
          </p>
          <h1 className="serif" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Terms of Service
          </h1>
          <p className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 60 }}>
            Last updated: May 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Agreement</h2>
              <p>By accessing tuhamiconsulting.com or engaging Tuhami Consulting LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) for services, you agree to these terms. If you do not agree, please do not use this site or our services.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Services</h2>
              <p>Tuhami Consulting provides fractional product management, AI product strategy, SaaS development, and related consulting services. The specific scope, deliverables, timeline, and fees for any engagement are defined in a separate Statement of Work (SOW) or contract agreed to by both parties.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Payment</h2>
              <p>Payment terms, rates, and invoicing schedules are outlined in the applicable SOW or proposal. All fees are due within the timeframe specified. We reserve the right to pause or terminate services on accounts with outstanding balances.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Intellectual Property</h2>
              <p>Upon receipt of full payment, all custom work product created specifically for a client becomes the client&apos;s property. We retain the right to use general methodologies, frameworks, and know-how developed during engagements. Pre-existing tools, templates, or code we bring to a project remain our property unless otherwise agreed in writing.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Confidentiality</h2>
              <p>We treat all client information as confidential and will not disclose it to third parties without your consent, except as required by law. We may reference the existence of an engagement (e.g., in a client list) unless you request otherwise.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Limitation of Liability</h2>
              <p>Our services are provided in good faith based on the information available. We are not liable for indirect, incidental, or consequential damages arising from our work. Our total liability for any claim is limited to the fees paid for the specific engagement giving rise to the claim.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Termination</h2>
              <p>Either party may terminate an engagement with written notice as specified in the applicable SOW. Fees for work completed up to the termination date remain due. Provisions regarding intellectual property, confidentiality, and limitation of liability survive termination.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Website Use</h2>
              <p>The content on this site is for informational purposes only. You may not reproduce, distribute, or create derivative works from any content on this site without written permission.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Governing Law</h2>
              <p>These terms are governed by the laws of the State of Arizona, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Maricopa County, Arizona.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Changes</h2>
              <p>We may update these terms at any time. Continued use of this site or our services after an update constitutes acceptance of the revised terms.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Contact</h2>
              <p>
                Tuhami Consulting LLC<br />
                Phoenix, Arizona<br />
                <a href="mailto:hello@tuhamiconsulting.com" style={{ color: 'var(--clay)', textDecoration: 'none' }}>hello@tuhamiconsulting.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
