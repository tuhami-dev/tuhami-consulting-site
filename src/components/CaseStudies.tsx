'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const CASES = [
  {
    tag: '— Real estate · ops',
    t: 'Cutting offer turnaround from 6h to 12 min',
    m: '−96%',
    mLabel: 'response time',
    co: 'Easy Street Offers',
    desc: 'Rebuilt the seller-intake workflow with an LLM evaluator and routing logic. The PM team now reviews edge cases instead of every deal.',
  },
  {
    tag: '— SaaS · MVP',
    t: 'A v1 platform shipped in 9 weeks',
    m: '9 wk',
    mLabel: 'discovery → launch',
    co: 'Volado Labs',
    desc: 'Scoped the MVP, led design, and worked alongside engineering through to a paying customer cohort. Stack: Next.js · Supabase · Stripe.',
  },
  {
    tag: '— Internal tools',
    t: 'An AI ops console that ops teams actually opened',
    m: '4.6×',
    mLabel: 'weekly active use',
    co: 'Polestar Graphics',
    desc: "Embedded in the team's daily workflows, surfacing only the data that mattered. Weekly active use went from 12 → 56% within a month.",
  },
];

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

function CaseCard({ c, idx }: { c: typeof CASES[0]; idx: number }) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr 1fr',
          gap: 60,
          padding: '40px 32px',
          borderTop: '0.5px solid var(--line)',
          borderBottom: idx === CASES.length - 1 ? '0.5px solid var(--line)' : '0',
          background: hover ? 'var(--paper)' : 'transparent',
          transition: 'background .4s ease',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'default',
        }}
      >
        {/* Hover preview */}
        <div style={{
          position: 'absolute', right: 32, top: '50%',
          transform: `translate(${hover ? '-20px' : '60px'}, -50%) scale(${hover ? 1 : 0.9})`,
          opacity: hover ? 1 : 0,
          transition: 'all .5s cubic-bezier(.2,.7,.2,1)',
          width: 220, height: 140,
          pointerEvents: 'none', zIndex: 0,
        }}>
          <div className="placeholder" style={{ width: '100%', height: '100%', borderRadius: 6 }}>
            CASE PREVIEW
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>{c.tag}</span>
          <div className="serif-it" style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 8 }}>{c.co}</div>
        </div>

        <h3 className="serif" style={{ fontSize: 'clamp(28px, 3vw, 44px)', lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em', position: 'relative', zIndex: 1, maxWidth: 580 }}>
          {c.t}
        </h3>

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'right' }}>
          <div className="serif" style={{ fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em' }}>{c.m}</div>
          <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 8, letterSpacing: '.12em', textTransform: 'uppercase' }}>{c.mLabel}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section className="section" id="work" style={{ padding: '120px 0 60px' }}>
      <div className="container">
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 70, gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 28 }}>Selected work</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em', maxWidth: 720 }}>
              From strategy<br />
              to <em className="serif-it" style={{ color: 'var(--ink-soft)' }}>shipped.</em>
            </h2>
          </div>
          <a href="https://case-studies.tuhamiconsulting.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View all case studies <span style={{ marginLeft: 4 }}>→</span>
          </a>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {CASES.map((c, i) => (
            <CaseCard key={i} c={c} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
