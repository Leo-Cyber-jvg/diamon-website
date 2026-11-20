import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkDiagram from '../components/ICAFrameworkDiagram'
import InfluenceCompass from '../components/InfluenceCompass'

export const metadata: Metadata = {
  title: 'The DIAMON ICA Framework™ — Diamon Finland',
  description:
    'Identity, Composition, Action. The DIAMON ICA Framework™ integrates communication identity, strategic composition, and practical performance into one coherent architecture.',
}

export default function FrameworkPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            The DIAMON ICA Framework™
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            Identity. Composition. Action.
            <span
              className="block mt-3"
              style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.7em' }}
            >
              One system. Three integrated levels.
            </span>
          </h1>
          <p
            className="text-lg font-light"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.8,
              maxWidth: '620px',
            }}
          >
            The DIAMON ICA Framework™ is not a collection of communication techniques.
            It is a coherent architecture — designed to build the communication
            capability that operates at the level of your actual leadership.
          </p>
        </div>
      </section>

      {/* ── Visual diagram ───────────────────────────────────── */}
      <ICAFrameworkDiagram />

      {/* ── How it works — single coherent text ─────────────── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              How the framework works
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-blue)',
                lineHeight: 1.2,
              }}
            >
              Three levels. Each builds on the one before. None sufficient alone.
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leadership communication fails not at the moment of delivery — but long before it. It fails because the communicator has not resolved who they are, has not designed what they want to say, or does not know how to execute it under real pressure.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>Identity</strong> comes first. Through the DCI™ model, we build a stable communicational foundation — who you genuinely are as a leader, and how that translates into presence, credibility and trust.{' '}
              <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>Composition</strong> follows. Through TNT™, we design the architecture of the message: state, narrative, action structure. Not improvisation — intentional construction.{' '}
              <strong style={{ color: 'var(--color-text)', fontWeight: 500 }}>Action</strong> last. Through K3™, we develop the physicality, focus and language that make communication land in the room, under pressure, in real leadership situations.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The result is not better technique. It is a coherent, durable communication capability — one that holds under pressure, scales across situations, and strengthens with use.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Architecture of Influence connector ──────────────── */}
      <section className="px-6 pt-20 pb-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              The bigger picture
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              From personal development to{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>organisational impact.</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The ICA Framework develops the individual. The DIAMON Architecture of Influence shows where that development lands — in the four dimensions that together define an organisation's communication capability: Communication Identity, Executive Presence, Leadership Culture, and Business Performance.
            </p>
          </div>
          <p className="text-sm leading-relaxed md:pb-2" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
            When ICA development is applied systematically — across leaders and over time — it shifts not just individual performance but how the whole organisation communicates, decides, and leads. The framework below maps that organisational dimension.
          </p>
        </div>
      </section>

      <InfluenceCompass />

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div>
          <h2
            className="text-2xl md:text-3xl font-light mb-3"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text)',
              maxWidth: '540px',
              lineHeight: 1.3,
            }}
          >
            Let's develop leadership communication together.
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '540px' }}>
            Let's talk about how the ICA Framework can be applied to developing leadership communication in your organisation.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/services" className="btn-outline">Services</Link>
          <Link href="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  )
}
