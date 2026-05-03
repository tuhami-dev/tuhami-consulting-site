'use client';
import FadeLoopVideo from './FadeLoopVideo';
import { Magnetic } from './Nav';

const VIDEO_SRC = '/video/hero.mp4';
const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';
const TITLE_WORDS = 'Product strategy and AI engineering, for founders who ship.'.split(' ');

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>
      {/* Full-bleed video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <FadeLoopVideo src={VIDEO_SRC} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,5,0.38)', pointerEvents: 'none' }} />
      </div>

      {/* Hero content */}
      <div style={{
        position: 'relative', zIndex: 10,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '120px 24px 100px',
      }}>
        <h1 style={{
          maxWidth: 820, margin: 0,
          fontFamily: 'var(--font-dm-serif), "DM Serif Display", Georgia, serif',
          fontWeight: 400,
          fontSize: 'clamp(36px, 5.5vw, 88px)',
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: '#FFFFFF',
        }}>
          {TITLE_WORDS.map((word, i) => (
            <span key={i} style={{
              display: 'inline-block',
              animation: `fade-rise 0.85s cubic-bezier(.2,.7,.2,1) ${i * 55}ms both`,
              marginRight: '0.28em',
            }}>{word}</span>
          ))}
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 1.2vw, 18px)',
          maxWidth: 480, marginTop: 28, lineHeight: 1.6,
          color: 'rgba(255,255,255,.85)',
          animation: 'fade-rise 1s cubic-bezier(.2,.7,.2,1) 680ms both',
        }}>
          A fractional PM and full-stack AI builder for founders who need both a strategist and a shipper.
        </p>

        <div style={{ marginTop: 28, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', animation: 'fade-rise 1s cubic-bezier(.2,.7,.2,1) 880ms both' }}>
          <Magnetic>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pill"
              style={{ padding: '13px 24px', fontSize: 13.5, background: '#FBF8F2', color: '#1A1814' }}>
              <span>Book a discovery call</span><span className="arrow">→</span>
            </a>
          </Magnetic>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12.5, padding: '12px 8px', color: 'rgba(255,255,255,0.92)', textShadow: '0 1px 12px rgba(0,0,0,.7)' }}>
            See how it works
          </button>
        </div>

        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.4)', animation: 'fade-rise 1s cubic-bezier(.2,.7,.2,1) 1100ms both' }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase' }}>Scroll</span>
          <span style={{ fontSize: 16, lineHeight: 1 }}>↓</span>
        </div>
      </div>

    </section>
  );
}
