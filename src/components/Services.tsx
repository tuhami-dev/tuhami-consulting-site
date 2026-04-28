'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    num: '01',
    title: 'Fractional Product Management',
    description:
      'I embed as your PM — running discovery, writing specs, aligning engineering, and shipping. You get an experienced product leader without the full-time overhead. Engagements typically run 3–6 months.',
    tags: ['Roadmap ownership', 'Sprint management', 'Stakeholder alignment', 'Delivery'],
  },
  {
    num: '02',
    title: 'Product Strategy',
    description:
      'For teams that need direction before execution. I audit where you are, map where you should go, and deliver a clear roadmap with prioritization rationale — so your engineering investment lands on the highest-leverage bets.',
    tags: ['Roadmap planning', 'Discovery', 'Prioritization', 'Competitive positioning'],
  },
  {
    num: '03',
    title: 'AI Product Systems',
    description:
      'I help teams integrate AI into real product workflows — not demos. Prompt architecture, evaluation rubrics, guardrails, and production-ready pipelines that behave reliably, not just impressively in a pitch.',
    tags: ['LLM integration', 'Prompt engineering', 'Eval frameworks', 'Production AI'],
  },
  {
    num: '04',
    title: 'UX & Engineering Alignment',
    description:
      'Bridging the gap between design intent and what engineers actually build. I improve spec quality, reduce QA cycles, and create the connective tissue that prevents great designs from shipping as mediocre products.',
    tags: ['Spec writing', 'Design review', 'QA process', 'Engineering velocity'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: '120px 40px',
        background: 'var(--bg-surface)',
        position: 'relative',
      }}
    >
      {/* Top border accent */}
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
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          style={{ marginBottom: '72px' }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '16px',
            }}
          >
            What I Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.12,
              maxWidth: '580px',
              letterSpacing: '-0.01em',
            }}
          >
            Four ways I help teams{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>ship</em>
          </motion.h2>
        </motion.div>

        {/* Service cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.num} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-raised)',
        border: `1px solid ${hovered ? 'var(--gold-border)' : 'var(--border)'}`,
        borderRadius: '16px',
        padding: '36px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
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
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--gold)',
            letterSpacing: '0.06em',
          }}
        >
          {service.num}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: '22px',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 1.25,
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {service.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border)',
        }}
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'var(--text-muted)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: '100px',
              padding: '4px 10px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
