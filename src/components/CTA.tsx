'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/tuhami-consulting/discovery';
const EMAIL = 'anas@tuhamiconsulting.com';

export default function CTA() {
  return (
    <section
      id="contact"
      style={{
        padding: '140px 40px',
        background: 'var(--bg-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial accent */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 70% at 50% 100%, rgba(200,169,110,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: '40px',
          right: '40px',
          height: '1px',
          background: 'var(--border)',
        }}
      />

      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
            }}
          >
            Let&apos;s Talk
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(36px, 5.5vw, 64px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            Ready to ship{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>something</em>{' '}
            worth shipping?
          </h2>

          <p
            style={{
              fontSize: '18px',
              fontWeight: 300,
              color: 'var(--text-dim)',
              lineHeight: 1.65,
              marginBottom: '52px',
              maxWidth: '480px',
              margin: '0 auto 52px',
            }}
          >
            Most engagements start with a 30-minute discovery call. No pitch deck,
            no pressure — just a direct conversation about your product and where I
            can help.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '15px',
                fontWeight: 500,
                color: 'var(--bg-base)',
                background: 'var(--gold)',
                borderRadius: '100px',
                padding: '15px 32px',
                letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--gold)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Book a discovery call
              <ArrowRight size={16} />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
              }}
            >
              or email directly →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
