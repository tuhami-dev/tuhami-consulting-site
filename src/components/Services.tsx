'use client';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  { t: 'AI Product Strategy & Roadmapping', d: 'Turning vague ideas into clear product roadmaps with scoped MVPs, prioritized features, and technical requirements your engineers can execute on.', tag: 'Strategy', span: 'wide' },
  { t: 'AI Feature Design & Implementation', d: 'From LLM assistants to workflow automation, I design and productize AI features end-to-end — prompt engineering, UX, and integration into your stack.', tag: 'Build' },
  { t: 'SaaS MVP Build & Launch', d: 'Acting as your fractional PM and technical co-pilot — scoping, leading design, and working alongside engineers to a launched, user-tested product.', tag: 'Ship' },
  { t: 'Website Redesign & Modernization', d: 'Clean, fast, conversion-focused sites in Framer or Next.js. Ideal as an entry-point project or for founders who need their site to match the product.', tag: 'Web', span: 'wide' },
];

function Reveal({ children, style, className }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal${className ? ' ' + className : ''}`} style={style}>{children}</div>;
}

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: 'var(--paper)' }}>
      <div className="container">
        <Reveal style={{ marginBottom: 70, maxWidth: 920 }}>
          <div className="section-eyebrow" style={{ marginBottom: 28 }}>What I do</div>
          <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em' }}>
            AI product strategy<br />
            & automation,{' '}
            <em className="serif-it" style={{ color: 'var(--ink-soft)' }}>for real teams.</em>
          </h2>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'var(--line)',
          border: '0.5px solid var(--line)',
        }}>
          {SERVICES.map((s, i) => (
            <Reveal
              key={i}
              className="grain"
              style={{
                gridColumn: s.span === 'wide' ? 'span 2' : 'span 1',
                background: 'var(--bg)',
                padding: '44px 40px 40px',
                minHeight: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                    ⊹ {s.tag}
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>{String(i + 1).padStart(2, '0')} / 04</span>
                </div>
                <h3 className="serif" style={{ fontSize: 32, lineHeight: 1.05, margin: 0, letterSpacing: '-0.02em', maxWidth: 380 }}>{s.t}</h3>
              </div>
              <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.6, margin: '32px 0 0', maxWidth: 420, position: 'relative', zIndex: 2 }}>
                {s.d}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
