'use client'

// ICA Framework Diagram — animated premium visual centrepiece
// Scroll-triggered reveals with staggered column entries
// Framer Motion v12 — scroll-driven, no autoplay

import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

const levels = [
  {
    id: 'ICA I',
    model: 'DCI™',
    name: 'Identity',
    question: 'Who are you as a communicator?',
    act: 'Beginning',
    actDesc: 'Create contact, presence and trust',
    outcome: 'Presence',
    elements: [
      'Communicational self-awareness',
      'Credibility and trust architecture',
      'Presence under pressure',
    ],
    body: 'Authenticity, professional role, credibility, trust and personal presence. The foundation all communication capability is built on.',
  },
  {
    id: 'ICA II',
    model: 'SNS™',
    name: 'Composition',
    question: 'How is communication designed?',
    act: 'Middle',
    actDesc: 'Build message, structure and shared understanding',
    outcome: 'Clarity',
    elements: [
      'State and communication readiness',
      'Narrative construction',
      'Strategic structure and sequencing',
    ],
    body: 'State, narrative, structure, clarity and strategic intention. How impactful leadership communication is intentionally constructed before delivery.',
  },
  {
    id: 'ICA III',
    model: 'K3™',
    name: 'Action',
    question: 'How does communication perform in practice?',
    act: 'Ending',
    actDesc: 'Move towards action, decision and impact',
    outcome: 'Impact',
    elements: [
      'Physicality and embodied presence',
      'Attentional focus under pressure',
      'Language precision and rhythm',
    ],
    body: 'Physicality, focus, language, interaction and performance under pressure. Where architecture meets reality.',
  },
]

// Staggered fade-up — used for columns and header
function makeFadeUp(delay: number): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  }
}

// Simple fade-in
function makeFadeIn(delay: number): Variants {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay } },
  }
}

// Blue section slide-up
const blueLayerVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
}

const outcomeFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.9 } },
}

const captionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 1.05 } },
}

export default function ICAFrameworkDiagram() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const animate = inView ? 'visible' : 'hidden'

  return (
    <section style={{ backgroundColor: '#F4F3F1' }} ref={ref}>
      <div className="px-6 py-24 mx-auto" style={{ maxWidth: '1200px' }}>

        {/* ── Section header ── */}
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
          <motion.div variants={makeFadeUp(0)} initial="hidden" animate={animate}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              The DIAMON ICA Framework™
            </p>
            <h2
              className="text-3xl md:text-5xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1 }}
            >
              Identity.{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Composition.</span>{' '}
              Action.
            </h2>
          </motion.div>
          <motion.p
            variants={makeFadeUp(0.12)}
            initial="hidden"
            animate={animate}
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
          >
            Three integrated levels. One coherent architecture. The ICA Framework
            develops communication capability from personal presence through to
            organisational impact — systematically, not accidentally.
          </motion.p>
        </div>

        {/* ── Main diagram ── */}
        <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)', overflow: 'hidden' }}>

          {/* Top label bar */}
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {levels.map((level, i) => (
              <motion.div
                key={level.id}
                variants={makeFadeIn(i * 0.1)}
                initial="hidden"
                animate={animate}
                className="px-8 py-4 flex items-center justify-between"
                style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}
              >
                <span className="text-xs tracking-[0.25em] uppercase" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
                  {level.id}
                </span>
                <span className="text-xs tracking-wide" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  {level.model}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Level names — large, with animated connectors */}
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {levels.map((level, i) => (
              <motion.div
                key={level.id}
                variants={makeFadeUp(0.1 + i * 0.12)}
                initial="hidden"
                animate={animate}
                className="px-8 pt-10 pb-6 flex flex-col gap-3"
                style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none', position: 'relative' }}
              >
                {/* Connector arrow */}
                {i < 2 && (
                  <motion.div
                    variants={makeFadeIn(0.4 + i * 0.15)}
                    initial="hidden"
                    animate={animate}
                    style={{
                      position: 'absolute',
                      right: '-13px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2px',
                    }}
                  >
                    <div style={{ width: '20px', height: '1px', backgroundColor: 'var(--color-blue)' }} />
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M1 1L5 5L1 9" stroke="#5656D6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                )}
                <h3
                  className="font-light"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-text)',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    lineHeight: 1.0,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {level.name}
                </h3>
                <p
                  className="text-xs italic"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-heading)', fontSize: '0.95rem', lineHeight: 1.4 }}
                >
                  {level.question}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Body description row */}
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {levels.map((level, i) => (
              <motion.div
                key={level.id}
                variants={makeFadeIn(0.2 + i * 0.1)}
                initial="hidden"
                animate={animate}
                className="px-8 py-6"
                style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {level.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Elements row */}
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {levels.map((level, i) => (
              <motion.div
                key={level.id}
                variants={makeFadeIn(0.3 + i * 0.1)}
                initial="hidden"
                animate={animate}
                className="px-8 py-6 flex flex-col gap-3"
                style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}
              >
                {level.elements.map((el, j) => (
                  <motion.div
                    key={el}
                    variants={makeFadeIn(0.35 + i * 0.1 + j * 0.06)}
                    initial="hidden"
                    animate={animate}
                    className="flex items-start gap-3"
                  >
                    <span style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{el}</span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* ── Three-act structure layer — blue ── */}
          <motion.div
            variants={blueLayerVariants}
            initial="hidden"
            animate={animate}
            style={{ backgroundColor: 'var(--color-blue)' }}
          >
            <div className="grid grid-cols-3 px-8 pt-5 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="col-span-3 text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
                Aristotelian structure — applied to leadership communication
              </span>
            </div>
            <div className="grid grid-cols-3">
              {levels.map((level, i) => (
                <div
                  key={level.act}
                  className="px-8 py-6 flex flex-col gap-2"
                  style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                    {level.act}
                  </span>
                  <span className="text-sm font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1.3, fontSize: '1.05rem' }}>
                    {level.actDesc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Outcome axis ── */}
          <motion.div
            variants={outcomeFadeVariants}
            initial="hidden"
            animate={animate}
            className="grid grid-cols-3"
            style={{ backgroundColor: '#ECEAE6' }}
          >
            {levels.map((level, i) => (
              <div
                key={level.outcome}
                className="px-8 py-5 flex items-center gap-3"
                style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}
              >
                <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  Outcome
                </span>
                <span
                  className="text-sm font-light"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1.1rem', letterSpacing: '0.02em' }}
                >
                  {level.outcome}
                </span>
                {i < 2 && (
                  <span style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginLeft: 'auto' }}>→</span>
                )}
              </div>
            ))}
          </motion.div>

        </div>

        {/* Caption */}
        <motion.p
          variants={captionVariants}
          initial="hidden"
          animate={animate}
          className="text-xs mt-5 text-right"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          DIAMON ICA Framework™ — from personal presence to organisational impact
        </motion.p>

      </div>
    </section>
  )
}
