'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const TESTIMONIALS = [
  {
    q: 'He brings deep technical knowledge, strong product intuition, and a calm, steady presence that brings clarity to complex problems. From scaling platform usage to improving critical workflows with AI automation, he delivered outcomes that moved the business forward.',
    n: 'Jennifer Allen',
    r: 'Creative Director, Polestar Graphics',
  },
  {
    q: 'A rare mix of technical depth and product perspective. His calm approach makes him an excellent partner in complex and ambiguous environments.',
    n: 'Collin Wood',
    r: 'Founder, VoladoLabs.ai',
  },
  {
    q: 'Strong sense of ownership. Asks the right questions, adapts quickly, and delivers results even when requirements are unclear. A reliable partner in fast-moving product environments.',
    n: 'Ben Kern',
    r: 'Founder, Kern Consulting',
  },
  {
    q: 'Combines deep technical understanding with sharp product judgment. Communicates clearly across teams and drives execution in a way that keeps work aligned with both user needs and business goals.',
    n: 'Pedro Palau',
    r: 'Full Stack Dev, Ballast Lane',
  },
];

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="section" id="reviews">
      <div className="container">
        <Reveal style={{ marginBottom: 60, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 40 }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 28 }}>Reviews</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em' }}>
              Trusted by clients<br />
              and <em className="serif-it" style={{ color: 'var(--ink-soft)' }}>teams.</em>
            </h2>
          </div>
        </Reveal>

        <div className="glass grain" style={{ borderRadius: 24, padding: 'clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative quote mark */}
          <div className="serif-it" style={{
            fontSize: 200, lineHeight: 0.6,
            color: 'var(--ink)', opacity: 0.06,
            position: 'absolute', top: 30, left: 40,
            pointerEvents: 'none', userSelect: 'none',
          }}>&ldquo;</div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <p
              key={idx}
              className="serif fade-rise"
              style={{
                fontSize: 'clamp(26px, 3.2vw, 44px)',
                lineHeight: 1.2,
                margin: 0,
                letterSpacing: '-0.02em',
                maxWidth: 1000,
                color: 'var(--ink)',
              }}
            >
              &ldquo;{t.q}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 48, gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div className="placeholder" style={{ width: 48, height: 48, borderRadius: '50%', fontSize: 9 }}>
                  {t.n.split(' ').map(s => s[0]).join('')}
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 20, letterSpacing: '-0.01em' }}>{t.n}</div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: 2 }}>{t.r}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="mono" style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '.1em' }}>
                  {String(idx + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
                </span>
                <button
                  onClick={() => setIdx((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="btn-ghost"
                  style={{ width: 44, height: 44, padding: 0, borderRadius: '50%', justifyContent: 'center' }}
                >←</button>
                <button
                  onClick={() => setIdx((idx + 1) % TESTIMONIALS.length)}
                  className="btn-ghost"
                  style={{ width: 44, height: 44, padding: 0, borderRadius: '50%', justifyContent: 'center' }}
                >→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
