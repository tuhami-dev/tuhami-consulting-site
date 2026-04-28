'use client';
import FadeLoopVideo from './FadeLoopVideo';
import { Magnetic } from './Nav';

const VIDEO_SRC = '/video/hero.mp4';
const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>
      {/* Full-bleed video */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <FadeLoopVideo src={VIDEO_SRC} />
        {/* warm tint */}
        <div style={{ position: 'absolute', inset: 0, background: 'var(--bg)', mixBlendMode: 'lighten', opacity: 0.2, pointerEvents: 'none' }} />
        {/* top/bottom fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--bg) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 60%, var(--bg) 100%)' }} />
        {/* center vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 60%, rgba(0,0,0,0) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 70%, rgba(0,0,0,.4) 100%)' }} />
        {/* scanlines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.03) 0px, rgba(255,255,255,.03) 1px, transparent 1px, transparent 3px)', mixBlendMode: 'overlay', pointerEvents: 'none' }} />
      </div>

      {/* Status bar */}
      <div style={{ position: 'absolute', top: 'calc(8rem + 20px)', left: 0, right: 0, zIndex: 5, display: 'flex', justifyContent: 'space-between', padding: '0 48px', pointerEvents: 'none' }}>
        <span className="mono fade-rise" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 10px rgba(0,0,0,.7)' }}>
          ✦ &nbsp; Phoenix / Remote
        </span>
        <span className="mono fade-rise" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 10px rgba(0,0,0,.7)' }}>
          [N 33.4484° &nbsp; W 112.0740°]
        </span>
      </div>

      {/* Hero content */}
      <div style={{
        position: 'relative', zIndex: 10,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '120px 24px 100px',
      }}>
        <h1 className="hero-title fade-rise" style={{
          maxWidth: 620, margin: 0,
          fontFamily: 'var(--font-dm-serif), "DM Serif Display", Georgia, serif',
          fontWeight: 400,
          color: '#FFFFFF',
          textShadow: '0 2px 32px rgba(0,0,0,.75), 0 0 60px rgba(0,0,0,.5)',
        }}>
          Beyond the noise,{' '}
          <em style={{ color: '#F4D9A8', fontStyle: 'italic', textShadow: '0 2px 28px rgba(0,0,0,.85), 0 0 50px rgba(0,0,0,.6)' }}>we build</em>{' '}
          the{' '}
          <em style={{ color: '#F4D9A8', fontStyle: 'italic', textShadow: '0 2px 28px rgba(0,0,0,.85), 0 0 50px rgba(0,0,0,.6)' }}>quietly inevitable.</em>
        </h1>

        <p className="fade-rise-d1" style={{
          fontSize: 'clamp(13px, .9vw, 14px)',
          maxWidth: 440, marginTop: 16, lineHeight: 1.55,
          color: 'rgba(255,255,255,.92)',
          textShadow: '0 1px 20px rgba(0,0,0,.7)',
        }}>
          A fractional PM and full-stack AI builder for founders who need both a{' '}
          <em className="serif-it" style={{ color: '#F4D9A8', fontStyle: 'italic', textShadow: '0 1px 14px rgba(0,0,0,.7)' }}>strategist</em>{' '}
          and a{' '}
          <em className="serif-it" style={{ color: '#F4D9A8', fontStyle: 'italic', textShadow: '0 1px 14px rgba(0,0,0,.7)' }}>shipper</em>.
        </p>

        <div className="fade-rise-d2" style={{ marginTop: 24, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
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
            See how it works ↓
          </button>
        </div>
      </div>

      {/* Bottom HUD */}
      <div style={{ position: 'absolute', bottom: 32, left: 48, zIndex: 10, display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(251,248,242,.7)' }}>
        <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--moss)', display: 'inline-block' }} />
        <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>Available · Q3 &#39;26</span>
      </div>
      <div style={{ position: 'absolute', bottom: 32, right: 48, zIndex: 10, display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(251,248,242,.7)' }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}>Scroll</span>
        <span style={{ width: 24, height: 1, background: 'currentColor' }} />
      </div>
    </section>
  );
}
