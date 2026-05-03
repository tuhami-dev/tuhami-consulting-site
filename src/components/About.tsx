'use client';
import { useReveal } from '@/hooks/useReveal';
import { Magnetic } from './Nav';

const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';

const BULLETS = [
  'Technical product strategy & roadmapping',
  'AI-powered workflows and automation',
  'UX for complex SaaS and internal tools',
  'MVP development with Supabase & Next.js',
  'Authentication, billing, and Stripe integrations',
  'Data modeling and internal system design',
];

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function About() {
  return (
    <section className="section" id="about" style={{ background: '#E8D8BC', overflow: 'hidden' }}>
      <div className="container">
        <Reveal style={{ marginBottom: 60 }}>
          <div className="section-eyebrow">About</div>
        </Reveal>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }}>
          <Reveal>
            <h2 className="serif" style={{ fontSize: 'clamp(48px, 6.5vw, 104px)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.035em' }}>
              Meet <em className="serif-it" style={{ color: 'var(--ink-soft)' }}>Anas.</em>
            </h2>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 520, marginTop: 36 }}>
              I&apos;m a product manager, UX designer, and frontend developer who helps early-stage startups go from idea to shipped product.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', maxWidth: 520, marginTop: 18 }}>
              I founded Tuhami Consulting to give founders access to senior product leadership without the overhead of a full-time hire — I don&apos;t write specs and hand them off, I lead the product and help build it, working directly in your stack.
            </p>
            <div style={{ marginTop: 36 }}>
              <Magnetic>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pill">
                  <span>Book a call</span><span className="arrow">→</span>
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal>
            <div className="glass" style={{ padding: 28, borderRadius: 18, position: 'relative' }}>
              <img
                src="/about_me.png"
                alt="Anas El Tuhami"
                style={{ width: '100%', aspectRatio: '3 / 2', objectFit: 'cover', objectPosition: 'center top', borderRadius: 12, marginBottom: 20, display: 'block' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <div>
                  <div className="serif" style={{ fontSize: 22, letterSpacing: '-0.02em' }}>Anas El Tuhami</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 4 }}>Founder · Tuhami Consulting</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--moss)', flexShrink: 0 }}>
                  <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase' }}>Available</span>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {BULLETS.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--ink-soft)', alignItems: 'baseline' }}>
                    <span style={{ color: 'var(--ink-soft)', fontFamily: 'var(--font-jetbrains)', fontSize: 11, flexShrink: 0 }}>+</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
