'use client';
import { useReveal } from '@/hooks/useReveal';
import { Magnetic } from '@/components/Nav';

const INK     = 'var(--ink)';
const INKSOFT = 'var(--ink-soft)';
const MUTED   = 'var(--muted)';

interface Tier { label: string; range: string; }
interface Pkg {
  eyebrow: string;
  title: string;
  price: string;
  period?: string;
  desc: string;
  includes: string[];
  tiers?: Tier[];
  cta: string;
  href: string;
  popular?: boolean;
}

const PACKAGES: Pkg[] = [
  {
    eyebrow: 'Session',
    title: 'Strategy Hour',
    price: '$250',
    period: '/ session',
    desc: 'A focused 60-min working session on any product, AI, or roadmap challenge.',
    includes: ['Pre-session brief review', 'Live problem-solving', 'Written recap with action items'],
    cta: 'Book a session',
    href: 'https://cal.com/tuhami-consulting/consultation-session',
  },
  {
    eyebrow: 'Project',
    title: 'Website Redesign',
    price: 'Starting at $500',
    desc: 'Landing pages to full multi-page builds on a modern stack.',
    tiers: [
      { label: 'Landing page',    range: '$500–$800'      },
      { label: 'Multi-page site', range: '$1,500–$3,000'  },
      { label: 'Custom features', range: 'Custom quote'   },
    ],
    includes: ['Discovery & wireframes', 'Responsive design', 'Copywriting guidance', 'Deployment'],
    cta: 'Get a quote',
    href: 'https://cal.com/tuhami-consulting/discovery',
  },
  {
    eyebrow: 'Retainer',
    title: 'Starter',
    price: '$2,500',
    period: '/ month',
    desc: 'Fractional PM or AI product support for early-stage founders. Capped at 5 hrs/week (~20 hrs/month).',
    includes: ['Weekly syncs', 'Async Slack access', 'Roadmap input', 'Sprint collaboration'],
    cta: 'Book a discovery call',
    href: 'https://cal.com/tuhami-consulting/discovery',
    popular: true,
  },
];

const GROWTH: Pkg = {
  eyebrow: 'Retainer',
  title: 'Growth',
  price: '$4,500',
  period: '/ month',
  desc: 'Deeper engagement with roadmap ownership, hands-on building, and embedded team collaboration. Up to 10 hrs/week (~40 hrs/month).',
  includes: ['Everything in Starter', 'Direct eng/design collaboration', 'Feature scoping and QA', 'AI integration support'],
  cta: 'Book a discovery call',
  href: 'https://cal.com/tuhami-consulting/discovery',
};

function Reveal({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useReveal();
  return <div ref={ref} className="reveal" style={style}>{children}</div>;
}

function CheckItem({ text }: { text: string }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: INKSOFT, lineHeight: 1.5 }}>
      <span style={{
        fontFamily: 'var(--font-jetbrains), monospace',
        fontSize: 11, color: 'var(--clay)', flexShrink: 0, marginTop: 1,
      }}>+</span>
      {text}
    </li>
  );
}

function PricingCard({ pkg, delay }: { pkg: Pkg; delay: number }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal glass${pkg.popular ? ' pricing-popular' : ''}`}
      style={{
        borderRadius: 18,
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transitionDelay: `${delay}s`,
        ...(pkg.popular && {
          background: 'rgba(201,146,58,0.1)',
          borderColor: 'rgba(176,116,51,0.45)',
          borderTopWidth: 2,
          borderTopColor: 'var(--clay)',
        }),
      }}
    >
      {pkg.popular && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          fontFamily: 'var(--font-jetbrains), monospace',
          fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase',
          color: '#fff',
          fontWeight: 500,
          border: 'none',
          background: 'linear-gradient(135deg, var(--clay) 0%, var(--gold) 100%)',
          padding: '4px 10px', borderRadius: 999,
          display: 'flex', alignItems: 'center',
        }}>
          Most popular
        </div>
      )}

      <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: MUTED, marginBottom: 20 }}>
        {pkg.eyebrow}
      </div>

      <h3 className="serif" style={{ fontSize: 'clamp(20px,2.5vw,30px)', lineHeight: 1.05, margin: '0 0 14px', color: INK, letterSpacing: '-0.025em' }}>
        {pkg.title}
      </h3>

      <div style={{ marginBottom: 18 }}>
        <span className="heading" style={{ fontSize: 'clamp(24px,2.8vw,42px)', lineHeight: 1, color: INK, letterSpacing: '-0.03em' }}>
          {pkg.price}
        </span>
        {pkg.period && (
          <span style={{ fontSize: 14, color: MUTED, marginLeft: 6 }}>{pkg.period}</span>
        )}
      </div>

      <p style={{ fontSize: 14.5, color: INKSOFT, lineHeight: 1.65, margin: '0 0 24px' }}>
        {pkg.desc}
      </p>

      {pkg.tiers && (
        <div style={{ marginBottom: 24 }}>
          {pkg.tiers.map((t, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 0', borderTop: '0.5px solid var(--line)',
            }}>
              <span style={{ fontSize: 13, color: INKSOFT }}>{t.label}</span>
              <span className="mono" style={{ fontSize: 12, color: 'var(--clay)', letterSpacing: '.04em' }}>{t.range}</span>
            </div>
          ))}
          <div style={{ borderTop: '0.5px solid var(--line)' }} />
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 9, flexGrow: 1 }}>
        {pkg.includes.map((item, i) => <CheckItem key={i} text={item} />)}
      </ul>

      {pkg.popular ? (
        <Magnetic>
          <a
            href={pkg.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill pricing-popular-btn"
            style={{ justifyContent: 'center', width: '100%' }}
          >
            {pkg.cta} <span className="arrow">→</span>
          </a>
        </Magnetic>
      ) : (
        <Magnetic>
          <a
            href={pkg.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white"
            style={{ justifyContent: 'center', width: '100%' }}
          >
            {pkg.cta} <span className="arrow">→</span>
          </a>
        </Magnetic>
      )}
    </div>
  );
}

function GrowthCard() {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal glass"
      style={{
        borderRadius: 18,
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        transitionDelay: '0.3s',
      }}
    >
      <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: MUTED, marginBottom: 20 }}>
        {GROWTH.eyebrow}
      </div>
      <h3 className="serif" style={{ fontSize: 'clamp(20px,2.5vw,30px)', lineHeight: 1.05, margin: '0 0 14px', color: INK, letterSpacing: '-0.025em' }}>
        {GROWTH.title}
      </h3>
      <div style={{ marginBottom: 18 }}>
        <span className="heading" style={{ fontSize: 'clamp(24px,2.8vw,42px)', lineHeight: 1, color: INK, letterSpacing: '-0.03em' }}>
          {GROWTH.price}
        </span>
        <span style={{ fontSize: 14, color: MUTED, marginLeft: 6 }}>{GROWTH.period}</span>
      </div>
      <p style={{ fontSize: 14.5, color: INKSOFT, lineHeight: 1.65, margin: '0 0 24px' }}>
        {GROWTH.desc}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 9, flexGrow: 1 }}>
        {GROWTH.includes.map((item, i) => <CheckItem key={i} text={item} />)}
      </ul>
      <Magnetic>
        <a href={GROWTH.href} target="_blank" rel="noopener noreferrer" className="btn-white" style={{ justifyContent: 'center', width: '100%' }}>
          {GROWTH.cta} <span className="arrow">→</span>
        </a>
      </Magnetic>
    </div>
  );
}

function CustomCard() {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal glass"
      style={{
        borderRadius: 18,
        padding: '40px 36px',
        display: 'flex',
        flexDirection: 'column',
        transitionDelay: '0.4s',
      }}
    >
      <div className="mono" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: MUTED, marginBottom: 20 }}>
        Custom
      </div>
      <h3 className="serif" style={{ fontSize: 'clamp(20px,2.5vw,30px)', lineHeight: 1.05, margin: '0 0 14px', color: INK, letterSpacing: '-0.025em' }}>
        Custom Engagement
      </h3>
      <div style={{ marginBottom: 18 }}>
        <span className="serif-it" style={{ fontSize: 'clamp(24px,2.8vw,38px)', lineHeight: 1, color: INKSOFT, letterSpacing: '-0.02em' }}>
          Let's scope it.
        </span>
      </div>
      <p style={{ fontSize: 14.5, color: INKSOFT, lineHeight: 1.65, margin: '0 0 24px' }}>
        Full fractional PM, AI feature builds, SaaS MVPs, and multi-month engagements — scoped together on a call.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 9, flexGrow: 1 }}>
        {['Fractional PM & product leadership', 'AI feature development', 'SaaS MVP builds', 'Multi-month retainers'].map((item, i) => (
          <CheckItem key={i} text={item} />
        ))}
      </ul>
      <Magnetic>
        <a href="https://cal.com/tuhami-consulting/discovery" target="_blank" rel="noopener noreferrer" className="btn-white" style={{ justifyContent: 'center', width: '100%' }}>
          Book a free discovery call <span className="arrow">→</span>
        </a>
      </Magnetic>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section" id="pricing" style={{ background: '#E8D8BC', overflow: 'hidden' }}>
      <div className="container">

        <Reveal style={{ marginBottom: 60 }}>
          <div className="section-eyebrow">Pricing</div>
        </Reveal>

        <Reveal style={{ marginBottom: 72 }}>
          <div className="pricing-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
            <h2 className="serif" style={{ fontSize: 'clamp(48px,6.5vw,104px)', lineHeight: 0.95, margin: 0, letterSpacing: '-0.035em' }}>
              Clear pricing,{' '}
              <em className="serif-it" style={{ color: INKSOFT }}>no surprises.</em>
            </h2>
            <p style={{ fontSize: 17, color: INKSOFT, lineHeight: 1.65, margin: 0, maxWidth: 400, justifySelf: 'end', alignSelf: 'end' }}>
              Fixed-scope packages for smaller projects. Larger engagements are scoped together — book a free 20-minute discovery call for a custom quote.
            </p>
          </div>
        </Reveal>

        {/* Row 1: 3 cards */}
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 16 }}>
          {PACKAGES.map((pkg, i) => (
            <PricingCard key={pkg.title} pkg={pkg} delay={i * 0.1} />
          ))}
        </div>

        {/* Row 2: Growth + Custom Engagement */}
        <div className="pricing-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <GrowthCard />
          <CustomCard />
        </div>

      </div>
    </section>
  );
}
