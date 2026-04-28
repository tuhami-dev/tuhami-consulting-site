'use client';

const COLS = [
  { title: 'Site', items: ['How It Works', 'Services', 'Work', 'Reviews'] },
  { title: 'Connect', items: ['LinkedIn', 'GitHub', 'Twitter / X', 'Email'] },
  { title: 'Office', items: ['Phoenix, AZ', 'Remote · Worldwide', 'MST · 9–6'] },
];

function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 20 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(item => (
          <li key={item} style={{ fontSize: 14 }}>
            <a href="#" className="nav-link" style={{ color: 'var(--ink)' }}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid var(--line)', padding: '60px 0 40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, alignItems: 'start' }}>
        <div>
          <div className="serif" style={{ fontSize: 28, letterSpacing: '-0.02em' }}>
            Tuhami<sup style={{ fontSize: 11, marginLeft: 2, fontFamily: 'Inter' }}>®</sup>
          </div>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 12, maxWidth: 320 }}>
            Product, UX & AI automation consulting for founders building real products.
          </p>
        </div>
        {COLS.map(col => <FootCol key={col.title} title={col.title} items={col.items} />)}
      </div>
      <div className="container" style={{
        marginTop: 80, paddingTop: 24,
        borderTop: '0.5px solid var(--line)',
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, color: 'var(--muted)',
        letterSpacing: '.08em', textTransform: 'uppercase',
        fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace',
      }}>
        <span>© 2026 Tuhami Consulting</span>
        <span>Designed & built in Phoenix</span>
      </div>
    </footer>
  );
}
