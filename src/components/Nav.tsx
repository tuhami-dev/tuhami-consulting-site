'use client';
import { useState, useEffect, useRef } from 'react';

const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.35;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const onLeave = () => { el.style.transform = 'translate(0,0)'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);
  return <div ref={ref} className="magnetic" data-magnetic>{children}</div>;
}

export default function Nav({ overVideo = false }: { overVideo?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onVideo = overVideo && !scrolled;
  const dark = onVideo || scrolled;
  const fg = dark ? '#FFFFFF' : 'var(--ink)';
  const fgSoft = dark ? 'rgba(255,255,255,0.75)' : 'var(--ink-soft)';

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinks = [
    { label: 'Process', id: 'process' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
  ];

  return (
    <nav
      data-on-video={dark ? 'true' : undefined}
      style={{ position: 'fixed', top: 16, left: 16, right: 16, zIndex: 100, transition: 'all .5s cubic-bezier(.2,.7,.2,1)' }}
    >
      <div
        style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '12px 18px 12px 24px',
          borderRadius: 999,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(20,17,12,0.85)',
          backdropFilter: 'blur(20px) saturate(130%)',
          WebkitBackdropFilter: 'blur(20px) saturate(130%)',
          border: '0.5px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
        }}
      >
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none', color: fg, display: 'flex', alignItems: 'center', gap: 10, textShadow: onVideo ? '0 1px 14px rgba(0,0,0,.55)' : 'none', padding: 0 }}>
          <img src="/logo.png" alt="Tuhami Consulting" style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }} />
          <span className="serif" style={{ fontSize: 24, letterSpacing: '-0.02em', color: fg }}>
            Tuhami Consulting<sup style={{ fontSize: 9, marginLeft: 2, fontFamily: 'Inter', verticalAlign: 'super' }}>®</sup>
          </span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map((l, i) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="nav-link"
              data-active={i === 0 ? 'true' : undefined}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                color: i === 0 ? fg : fgSoft,
                textShadow: onVideo ? '0 1px 12px rgba(0,0,0,.55)' : 'none',
                fontSize: 13,
              }}
            >{l.label}</button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Magnetic>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-pill"
              style={{
                padding: '11px 22px', fontSize: 13,
                background: dark ? '#FBF8F2' : 'var(--ink)',
                color: dark ? '#1A1814' : 'var(--bg)',
              }}>
              <span>Book a call</span><span className="arrow">→</span>
            </a>
          </Magnetic>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="flex md:hidden"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: fg, padding: 4, flexDirection: 'column', gap: 5, display: 'none' }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'currentColor', transition: 'all .3s' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: 'currentColor', transition: 'all .3s' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass" style={{
          maxWidth: 1280, margin: '8px auto 0', borderRadius: 20,
          padding: '24px 28px 32px', display: 'flex', flexDirection: 'column', gap: 18,
        }}>
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: 22, fontFamily: 'var(--font-instrument)', color: 'var(--ink)', padding: '4px 0' }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export { Magnetic };
