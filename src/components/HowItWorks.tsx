'use client';
import { useReveal } from '@/hooks/useReveal';

const STEPS = [
  {
    n: '01',
    t: 'Discovery & Opportunity Mapping',
    d: 'We start by understanding your goals, users, and existing workflows. Together we identify high-impact opportunities where AI or automation drives real value — not complexity.',
  },
  {
    n: '02',
    t: 'Design & Build',
    d: 'I design and implement end-to-end, combining UX, product strategy, and hands-on development. Prototyping, AI integrations, automation workflows, and architecture tailored to your stack.',
  },
  {
    n: '03',
    t: 'Launch, Iterate & Support',
    d: 'We deploy into your real environment, validate performance, and iterate on feedback. You get documentation, handoff, and optional ongoing support as you scale.',
  },
];

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function HowItWorks() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal style={{ marginBottom: 80, display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'end' }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 28 }}>
              <span className="khatim" style={{ color: 'var(--gold)' }} />
              How it works
            </div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em' }}>
              A practical, proven<br />
              <em className="serif-it" style={{ color: 'var(--gold)' }}>approach</em> to building<br />
              AI products.
            </h2>
          </div>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.55, margin: 0, maxWidth: 480, justifySelf: 'end' }}>
            From discovery to deployment, we turn AI ideas into production-ready systems that actually get used — and that the team you hand them to can keep running.
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STEPS.map((s) => (
            <Reveal key={s.n} style={{
              borderTop: '0.5px solid var(--line)',
              padding: '56px 0',
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr 1.2fr',
              gap: 60,
              alignItems: 'start',
              position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                <span className="khatim" style={{ width: 16, height: 16, color: 'var(--gold)', marginTop: 28, opacity: 0.7, flexShrink: 0 }} />
                <div className="step-num" style={{ color: 'var(--ink)', opacity: 0.92 }}>{s.n}</div>
              </div>
              <h3 className="serif" style={{ fontSize: 36, lineHeight: 1.05, margin: '14px 0 0', letterSpacing: '-0.02em', maxWidth: 360 }}>{s.t}</h3>
              <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '20px 0 0', maxWidth: 460 }}>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
