'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PORTFOLIO_URL = 'https://case-studies.tuhamiconsulting.com';

const cases = [
  {
    client: 'Easy Street Offers',
    category: 'SaaS / Real Estate Tech',
    headline: 'From Backlog Chaos to $1B+ in Unlocked Inventory',
    subheadline:
      'Rebuilt the product engine — faster specs, smarter AI, and a conversion lift that changed the business.',
    metrics: [
      { value: '~30%', label: 'Velocity increase' },
      { value: '$1B+', label: 'Inventory unlocked' },
      { value: '~25%', label: 'Conversion lift' },
    ],
  },
  {
    client: 'CoachFuel',
    category: 'SaaS / Coaching Tech',
    headline: 'One Platform to Replace Every Tool a Coach Cobbles Together',
    subheadline:
      'Built a full coaching operating system from scratch — client management, class tracking, real-time messaging, and Stripe payments.',
    metrics: [
      { value: '0 → 1', label: 'Full SaaS built' },
      { value: '3', label: 'App surfaces shipped' },
      { value: '4', label: 'Core systems' },
    ],
  },
  {
    client: 'RankForge',
    category: 'SaaS / Gaming Tech',
    headline: "The Competitive Companion Marvel Rivals Didn't Ship With",
    subheadline:
      'Built a playstyle-driven hero recommendation engine — turning "who should I main?" into an instant, personalized answer.',
    metrics: [
      { value: '0 → Live', label: 'Full-stack MVP' },
      { value: '4', label: 'Core systems' },
      { value: 'AI-ready', label: 'Coaching layer' },
    ],
  },
  {
    client: 'Mesa Boxing',
    category: 'Local Business / SEO',
    headline: 'From Zero Web Presence to Page 1 Rankings in 90 Days',
    subheadline:
      'Built a complete digital foundation — Framer website, local SEO, booking system, and payments. All organic, no paid ads.',
    metrics: [
      { value: '4,160', label: 'Search impressions' },
      { value: 'Pg. 1', label: "Avg position 5.7" },
      { value: '1,500+', label: 'Users, zero paid ads' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function CaseStudies() {
  return (
    <section
      id="work"
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

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          style={{ marginBottom: '72px' }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '16px',
            }}
          >
            Selected Work
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.12,
              letterSpacing: '-0.01em',
              marginBottom: '20px',
            }}
          >
            Work that{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>moves</em> the
            needle
          </h2>
          <p
            style={{
              fontSize: '17px',
              fontWeight: 300,
              color: 'var(--text-dim)',
              maxWidth: '480px',
              lineHeight: 1.65,
            }}
          >
            Real engagements. Real results. Here's what happens when strategy and
            execution finally meet.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          {cases.map((c, i) => (
            <CaseCard key={c.client} cs={c} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--gold)',
              border: '1px solid var(--gold-border)',
              borderRadius: '100px',
              padding: '12px 28px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--gold-dim)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            View all case studies ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CaseCard({
  cs,
  index,
}: {
  cs: (typeof cases)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--gold-border)' : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          {cs.client}
        </span>
        <span style={{ fontSize: '18px', color: 'var(--gold)', lineHeight: 1, flexShrink: 0 }}>
          ↗
        </span>
      </div>

      <span
        style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}
      >
        {cs.category}
      </span>

      <div>
        <div
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '22px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.25,
            marginBottom: '10px',
          }}
        >
          {cs.headline}
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {cs.subheadline}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          borderTop: '1px solid var(--border)',
          paddingTop: '20px',
          flexWrap: 'wrap',
        }}
      >
        {cs.metrics.map((m) => (
          <div key={m.label}>
            <div
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '20px',
                fontWeight: 600,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '3px',
              }}
            >
              {m.value}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
