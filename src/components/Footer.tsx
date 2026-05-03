'use client';

const SITE_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
];

const CONNECT_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anaseltuhami/' },
  { label: 'GitHub', href: 'https://github.com/tuhami-dev' },
];

function FootCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 20 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {links.map(link => (
          <li key={link.label} style={{ fontSize: 14 }}>
            <a href={link.href} className="nav-link" style={{ color: 'var(--ink)' }}
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid var(--line)', padding: '60px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
        <div>
          <div className="serif" style={{ fontSize: 28, letterSpacing: '-0.02em' }}>
            Tuhami<sup style={{ fontSize: 11, marginLeft: 2, fontFamily: 'Inter' }}>®</sup>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 12, maxWidth: 320 }}>
            Product, UX & AI automation consulting for founders building real products.
          </p>
        </div>
        <FootCol title="Site" links={SITE_LINKS} />
        <FootCol title="Connect" links={CONNECT_LINKS} />
      </div>
      <div className="container" style={{
        marginTop: 80, paddingTop: 24,
        borderTop: '0.5px solid var(--line)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        fontSize: 11, color: 'var(--muted)',
        letterSpacing: '.08em', textTransform: 'uppercase',
        fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace',
      }}>
        <span>© 2026 Tuhami Consulting</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/privacy" className="nav-link" style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace' }}>Privacy Policy</a>
          <a href="/terms" className="nav-link" style={{ color: 'var(--muted)', fontSize: 11, letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
