'use client';

const EMAIL = 'anas@tuhamiconsulting.com';
const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';
const PORTFOLIO_URL = 'https://case-studies.tuhamiconsulting.com';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const externalLinks = [
  { label: 'Case Studies', href: PORTFOLIO_URL },
  { label: 'Book a Call', href: BOOKING_URL },
  { label: 'Email', href: `mailto:${EMAIL}` },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border)',
        padding: '60px 40px 48px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '56px',
          }}
        >
          {/* Logo + tagline */}
          <div style={{ maxWidth: '280px' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              Tuhami <span style={{ color: 'var(--gold)' }}>Consulting</span>
            </a>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
              }}
            >
              Fractional PM · Product Strategy · UX
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
            <FooterLinkGroup
              label="On this page"
              links={navLinks.map((l) => ({
                label: l.label,
                onClick: () => scrollTo(l.href),
              }))}
            />
            <FooterLinkGroup
              label="Links"
              links={externalLinks.map((l) => ({
                label: l.label,
                href: l.href,
                external: !l.href.startsWith('#') && !l.href.startsWith('mailto'),
              }))}
            />
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '28px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} Tuhami Consulting LLC. All rights reserved.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')
            }
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  label,
  links,
}: {
  label: string;
  links: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  }>;
}) {
  return (
    <div>
      <p
        style={{
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '16px',
        }}
      >
        {label}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {links.map((l) =>
          l.onClick ? (
            <button
              key={l.label}
              onClick={l.onClick}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontSize: '13px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              {l.label}
            </button>
          ) : (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              style={{
                fontSize: '13px',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')
              }
            >
              {l.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}
