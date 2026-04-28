'use client';
import FadeLoopVideo from './FadeLoopVideo';
import { Magnetic } from './Nav';
import { useReveal } from '@/hooks/useReveal';

const VIDEO_SRC = '/video/estate.mp4';
const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';
const EMAIL = 'hello@tuhamiconsulting.com';

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '180px 0 220px' }}>
      {/* Video background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <FadeLoopVideo src={VIDEO_SRC} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--bg) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, var(--bg) 100%)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Reveal>
          <div className="section-eyebrow" style={{ marginBottom: 32, justifyContent: 'center', display: 'inline-flex' }}>
            Ready when you are
          </div>
          <h2 className="serif" style={{
            fontSize: 'clamp(56px, 8vw, 144px)',
            lineHeight: 0.95,
            margin: 0,
            letterSpacing: '-0.035em',
            maxWidth: 1100,
            marginInline: 'auto',
          }}>
            Let&apos;s talk through your<br />
            <em className="serif-it" style={{ color: 'var(--ink-soft)' }}>product or AI</em> needs.
          </h2>
          <p style={{ fontSize: 19, color: 'var(--ink-soft)', lineHeight: 1.55, maxWidth: 580, margin: '36px auto 0' }}>
            A short conversation to understand your goals, explore options, and decide if working together makes sense.
          </p>
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Magnetic>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pill" style={{ padding: '18px 32px', fontSize: 15 }}>
                <span>Book a discovery call</span><span className="arrow">→</span>
              </a>
            </Magnetic>
            <a href={`mailto:${EMAIL}`} className="btn-ghost" style={{ padding: '14px 24px' }}>
              {EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
