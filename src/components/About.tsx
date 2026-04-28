'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const credentials = [
  'Fractional PM for SaaS, Real Estate Tech & Enterprise',
  'Built 0→1 products across web, mobile & AI',
  'Technical depth: Next.js, Supabase, LLM systems',
  'UX research through to production delivery',
  'Based in the US · Works globally',
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 40px',
        background: 'var(--bg-base)',
        position: 'relative',
      }}
    >
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
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left: label + heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '20px',
            }}
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}
          >
            Strategy and execution,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>finally</em>{' '}
            in the same seat.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '16px',
              color: 'var(--text-body)',
              lineHeight: 1.75,
              marginBottom: '20px',
            }}
          >
            I&apos;m Anas Tuhami — a fractional PM and product consultant who operates at
            the intersection of strategy and hands-on execution. I&apos;ve shipped products
            across SaaS, real estate tech, enterprise UX, and the creator economy —
            from zero-to-one builds to optimizing platforms handling hundreds of
            millions in transaction volume.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '16px',
              color: 'var(--text-body)',
              lineHeight: 1.75,
              marginBottom: '20px',
            }}
          >
            What makes the difference: I don&apos;t just make decks. I write the specs,
            align the engineers, run the QA, and push things to production. The gap
            between strategy and execution is where most product work dies — I close it.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '16px',
              color: 'var(--text-body)',
              lineHeight: 1.75,
            }}
          >
            If your team needs product leadership but isn&apos;t ready for a full-time hire,
            that&apos;s exactly the gap I fill.
          </motion.p>
        </motion.div>

        {/* Right: credentials */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '40px 36px',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '28px',
              }}
            >
              Background
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {credentials.map((c) => (
                <div
                  key={c}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      marginTop: '7px',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-body)',
                      lineHeight: 1.6,
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '36px',
                paddingTop: '28px',
                borderTop: '1px solid var(--border)',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                Industries
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'SaaS',
                  'Real Estate Tech',
                  'Enterprise UX',
                  'AI / LLM',
                  'Gaming Tech',
                  'Non-Profit',
                  'Creator Economy',
                  'Local Business',
                ].map((ind) => (
                  <span
                    key={ind}
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      color: 'var(--gold)',
                      background: 'var(--gold-dim)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: '100px',
                      padding: '4px 12px',
                    }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
