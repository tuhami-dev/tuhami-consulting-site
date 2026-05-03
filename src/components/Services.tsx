'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  { t: 'AI Product Strategy & Roadmapping', d: 'Turning vague ideas into clear product roadmaps with scoped MVPs, prioritized features, and technical requirements your engineers can execute on.', tag: 'Strategy', num: '01' },
  { t: 'AI Feature Design & Implementation', d: 'From LLM assistants to workflow automation, I design and productize AI features end-to-end — prompt engineering, UX, and integration into your stack.', tag: 'Build', num: '02' },
  { t: 'SaaS MVP Build & Launch', d: 'Acting as your fractional PM and technical co-pilot — scoping, leading design, and working alongside engineers to a launched, user-tested product.', tag: 'Ship', num: '03' },
  { t: 'Website Redesign & Modernization', d: 'Clean, fast, conversion-focused sites built on the latest tech stacks. Ideal as an entry-point project or for founders who need their site to match the product.', tag: 'Web', num: '04' },
];

const CREAM = '#F5EDDA';

function ServiceRow({ s }: { s: typeof SERVICES[0] }) {
  const ref = useReveal();
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={ref}
      className="reveal"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(v => !v)}
      style={{
        borderTop: '0.5px solid rgba(245,237,218,.1)',
        padding: open ? '40px 0 36px' : '30px 0',
        transition: 'padding .45s cubic-bezier(.2,.7,.2,1)',
        cursor: 'pointer',
      }}
    >
      {/* Main row */}
      <div className="svc-row-main" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '0 40px', alignItems: 'center' }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '.12em', color: 'var(--gold)' }}>
          {s.num}
        </span>
        <h3
          className="serif svc-row-title"
          style={{
            fontSize: 'clamp(22px, 4vw, 54px)',
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '-0.025em',
            color: open ? CREAM : 'rgba(245,237,218,.75)',
            transition: 'color .35s',
          }}
        >
          {s.t}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
          <span
            className="mono svc-row-tag"
            style={{
              fontSize: 10,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              borderWidth: '0.5px',
              borderStyle: 'solid',
              borderColor: open ? 'rgba(201,146,58,.6)' : 'rgba(201,146,58,.35)',
              padding: '5px 13px',
              borderRadius: 999,
              transition: 'border-color .35s, background .35s',
              background: open ? 'rgba(201,146,58,.1)' : 'transparent',
            }}
          >
            {s.tag}
          </span>
          <span
            style={{
              display: 'inline-block',
              fontSize: 18,
              color: 'rgba(245,237,218,.3)',
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform .45s cubic-bezier(.2,.7,.2,1)',
              lineHeight: 1,
            }}
          >
            →
          </span>
        </div>
      </div>

      {/* Expanding description — grid-template-rows trick for smooth height */}
      <div
        className="svc-row-expand"
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          transition: 'grid-template-rows .45s cubic-bezier(.2,.7,.2,1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div className="svc-row-desc" style={{ display: 'grid', gridTemplateColumns: '64px 1fr auto', gap: '0 40px', paddingTop: 24 }}>
            <div className="svc-row-spacer" />
            <p style={{ fontSize: 15.5, color: 'rgba(245,237,218,.78)', lineHeight: 1.7, margin: 0, maxWidth: 520 }}>
              {s.d}
            </p>
            <a
              href="#contact"
              onClick={e => e.stopPropagation()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                alignSelf: 'end',
                fontFamily: 'var(--font-jetbrains), monospace',
                fontSize: 10.5,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                paddingBottom: 4,
                flexShrink: 0,
              }}
            >
              Get started →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useReveal();

  return (
    <section className="section" id="services" style={{ background: '#2E2418', position: 'relative', overflow: 'hidden' }}>
      {/* Zellige texture */}
      <div
        className="zellige-bg"
        style={{ position: 'absolute', inset: 0, opacity: 0.035, pointerEvents: 'none' }}
      />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal services-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'end',
            marginBottom: 80,
          }}
        >
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 28, color: 'var(--gold-soft)' }}>
              What I do
            </div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em', color: CREAM }}>
              AI product strategy<br />
              & automation,{' '}
              <em className="serif-it" style={{ color: 'var(--gold-soft)', opacity: 0.85 }}>for real teams.</em>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'rgba(245,237,218,.72)', lineHeight: 1.65, margin: 0, maxWidth: 400, justifySelf: 'end', alignSelf: 'end' }}>
            From early-stage roadmapping to deployed AI features — I work end-to-end across strategy, design, and build.
          </p>
        </div>

        {/* Rows */}
        <div style={{ borderBottom: '0.5px solid rgba(245,237,218,.1)' }}>
          {SERVICES.map((s, i) => (
            <ServiceRow key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
