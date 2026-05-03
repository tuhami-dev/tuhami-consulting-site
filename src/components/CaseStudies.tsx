'use client';
import { useReveal } from '@/hooks/useReveal';

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function CaseStudies() {
  return (
    <section className="section" id="work" style={{ padding: '120px 0 60px', background: 'var(--bg)' }}>
      <div className="container">
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 70, gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 28 }}>Selected work</div>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 76px)', lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em', maxWidth: 720 }}>
              From strategy<br />
              to <em className="serif-it" style={{ color: 'var(--ink-soft)' }}>shipped.</em>
            </h2>
          </div>
          <a href="https://work.tuhamiconsulting.com" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View all case studies <span style={{ marginLeft: 4 }}>→</span>
          </a>
        </Reveal>

        <Reveal>
          <iframe
            src="https://work.tuhamiconsulting.com/embed"
            style={{ width: '100%', minHeight: 700, border: 'none', borderRadius: 16, display: 'block' }}
            title="Tuhami Consulting — Case Studies"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}
