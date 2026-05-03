'use client';

const CLIENT_LOGOS = [
  'Mesa Boxing', 'Schneider Electric', 'TempurSealy', 'Johnson Controls',
  'Easy Street Offers', 'Pirelli Tires', 'Michelin', 'John Deere',
  'Channel Fusion', 'Ortiz Marketing', 'Lead Davinci', 'YourPOP', 'SACSII',
];

export default function LogosMarquee() {
  return (
    <div className="section" style={{ padding: '60px 0', overflow: 'hidden', borderTop: '0.5px solid var(--line)', borderBottom: '0.5px solid var(--line)' }}>
      <div className="container" style={{ marginBottom: 28, display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <span className="section-eyebrow">Trusted by</span>
        <span className="serif-it" style={{ color: 'var(--muted)', fontSize: 18 }}>founders, operators & global enterprises building real products</span>
      </div>
      <div style={{
        display: 'flex', overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
      }}>
        <div className="marquee-track" style={{ display: 'flex', gap: 72, paddingRight: 72, flexShrink: 0, '--marquee-dur': '50s' } as React.CSSProperties}>
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((n, i) => (
            <div key={i} style={{
              flex: '0 0 auto',
              fontFamily: 'var(--font-instrument), "Instrument Serif", serif',
              fontSize: 32, letterSpacing: '-0.02em',
              color: 'var(--ink-soft)', opacity: 0.7, whiteSpace: 'nowrap',
            }}>
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
