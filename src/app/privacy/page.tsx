import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Tuhami Consulting.',
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 120 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 120px' }}>
          <p className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>
            Legal
          </p>
          <h1 className="serif" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.0, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
            Privacy Policy
          </h1>
          <p className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 60 }}>
            Last updated: May 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontSize: 16, lineHeight: 1.75, color: 'var(--ink-soft)' }}>
            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Overview</h2>
              <p>Tuhami Consulting (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates tuhamiconsulting.com. This policy explains what information we collect, how we use it, and your rights regarding that information.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Information We Collect</h2>
              <p style={{ marginBottom: 12 }}>We collect information you provide directly, such as when you book a discovery call or send an inquiry:</p>
              <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>Name and email address (via cal.com booking)</li>
                <li>Any information you share in call notes or messages</li>
              </ul>
              <p style={{ marginTop: 16 }}>We also collect limited usage data automatically through Vercel Analytics, which is privacy-friendly and does not use cookies or track individuals across sites.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>How We Use Your Information</h2>
              <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>To respond to your inquiries and schedule consultations</li>
                <li>To deliver consulting services you have engaged us for</li>
                <li>To improve the site based on aggregated, anonymous analytics</li>
              </ul>
              <p style={{ marginTop: 16 }}>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Third-Party Services</h2>
              <p style={{ marginBottom: 12 }}>This site uses the following third-party services, each with their own privacy policies:</p>
              <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li><strong>cal.com</strong> — scheduling and booking management</li>
                <li><strong>Vercel Analytics</strong> — anonymous, cookieless page analytics</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Cookies</h2>
              <p>This site does not use first-party cookies. Vercel Analytics collects no personally identifiable information and does not set tracking cookies.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Data Retention</h2>
              <p>We retain your contact information only as long as necessary to fulfill the purpose for which it was collected, or as required by applicable law. You may request deletion of your data at any time.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Your Rights</h2>
              <p style={{ marginBottom: 12 }}>Depending on your location, you may have the right to:</p>
              <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict our processing of your data</li>
              </ul>
              <p style={{ marginTop: 16 }}>To exercise any of these rights, contact us at <a href="mailto:hello@tuhamiconsulting.com" style={{ color: 'var(--clay)', textDecoration: 'none' }}>hello@tuhamiconsulting.com</a>.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: 'var(--ink)', marginBottom: 12, fontWeight: 400 }}>Changes to This Policy</h2>
              <p>We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.</p>
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
