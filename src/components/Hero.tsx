'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 40px 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,169,110,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative' }}>
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '28px',
            }}
          >
            Fractional PM · Product Strategy · UX
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.06,
              marginBottom: '28px',
              maxWidth: '780px',
              letterSpacing: '-0.02em',
            }}
          >
            Product thinking.{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Real</em> results.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(17px, 2.2vw, 20px)',
              fontWeight: 300,
              color: 'var(--text-dim)',
              maxWidth: '520px',
              lineHeight: 1.65,
              marginBottom: '52px',
            }}
          >
            I embed with early-stage startups and growing teams to run product
            day-to-day — shipping faster, cutting the right corners, and building
            things people actually use.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <CTAButton href={BOOKING_URL} primary>
              Book a discovery call <ArrowRight size={15} style={{ display: 'inline', marginLeft: '6px', verticalAlign: 'middle' }} />
            </CTAButton>
            <CTAButton
              href="#work"
              primary={false}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See the work
            </CTAButton>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={fadeUp}
            style={{
              marginTop: '72px',
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
              alignItems: 'center',
              paddingTop: '40px',
              borderTop: '1px solid var(--border)',
            }}
          >
            {[
              { value: '$1B+', label: 'Inventory unlocked' },
              { value: '~30%', label: 'Velocity gain' },
              { value: '9+', label: 'Products shipped' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: '28px',
                    fontWeight: 600,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CTAButton({
  href,
  primary,
  children,
  onClick,
}: {
  href: string;
  primary: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '14px',
        fontWeight: 500,
        padding: primary ? '13px 28px' : '13px 28px',
        borderRadius: '100px',
        letterSpacing: '0.02em',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        ...(primary
          ? {
              background: 'var(--gold)',
              color: 'var(--bg-base)',
              border: '1px solid transparent',
            }
          : {
              background: 'transparent',
              color: 'var(--text-dim)',
              border: '1px solid var(--border)',
            }),
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (primary) {
          el.style.background = 'var(--gold-light)';
          el.style.transform = 'translateY(-2px)';
        } else {
          el.style.borderColor = 'var(--gold-border)';
          el.style.color = 'var(--text-primary)';
          el.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        if (primary) {
          el.style.background = 'var(--gold)';
          el.style.transform = 'translateY(0)';
        } else {
          el.style.borderColor = 'var(--border)';
          el.style.color = 'var(--text-dim)';
          el.style.transform = 'translateY(0)';
        }
      }}
    >
      {children}
    </a>
  );
}
