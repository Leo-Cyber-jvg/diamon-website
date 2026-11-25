import type { Metadata } from 'next'
import Link from 'next/link'
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
            It is a coherent architecture, designed to build the communication
            capability that operates at the level of your actual leadership.
          </p>
        </div>
      </section>

      {/* Framework header */}
      <section className="px-6 pt-16 pb-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Framework</p>
        <h2 className="font-light" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05, color: 'var(--color-text)' }}>
          Identity → Composition →{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Action.</span>
        </h2>
      </section>

      {/* ── ICA three-column diagram ──────────────────────────── */}
      <section className="px-6 pb-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}>

          {/* Row 1 – ICA label + model abbrev */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {[
              { label: 'ICA I', model: 'DCI™' },
              { label: 'ICA II', model: 'TNT™' },
              { label: 'ICA III', model: 'K3™' },
            ].map(({ label, model }, i) => (
              <div key={label} className="px-6 py-3 flex justify-between items-center" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{label}</span>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{model}</span>
              </div>
            ))}
          </div>

          {/* Row 2 – Name + model text + question */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {[
              { name: 'Identity', modelText: 'Foundational model', question: 'Who am I as a communicator and leader?' },
              { name: 'Composition', modelText: 'Tactical model', question: 'What do I build, and how?' },
              { name: 'Action', modelText: 'Practical model', question: 'How do I execute it in a real situation?' },
            ].map(({ name, modelText, question }, i) => (
              <div key={name} className="px-6 pt-6 pb-7" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                <h3 className="font-light mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.0, color: 'var(--color-text)' }}>{name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{modelText}</p>
                <p className="text-sm italic" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.45 }}>{question}</p>
              </div>
            ))}
          </div>

          {/* Row 3 – Element pills */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {[
              ['Communication identity', 'Authenticity'],
              ['State', 'Narrative', 'Action structure'],
              ['Body', 'Focus', 'Language'],
            ].map((pills, i) => (
              <div key={i} className="px-6 py-5 flex flex-wrap gap-2" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                {pills.map(pill => (
                  <span key={pill} className="text-xs px-3 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: '999px', fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>{pill}</span>
                ))}
              </div>
            ))}
          </div>

          {/* Row 4 – Act (blue) */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-blue)' }}>
            {[
              { act: 'Opening', text: 'Create contact, presence and trust.' },
              { act: 'Middle', text: 'Build the message, structure and shared understanding.' },
              { act: 'Close', text: 'Drive toward action, decision and impact.' },
            ].map(({ act, text }, i) => (
              <div key={act} className="px-6 py-5" style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{act}</p>
                <p className="font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', lineHeight: 1.35 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Row 5 – Outcome */}
          <div className="grid md:grid-cols-3">
            {[
              { outcome: 'Presence' },
              { outcome: 'Clarity' },
              { outcome: 'Impact' },
            ].map(({ outcome }, i) => (
              <div key={outcome} className="px-6 py-4 flex items-center gap-3" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none', backgroundColor: 'var(--color-surface)' }}>
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Outcome</span>
                <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1.2rem' }}>{outcome}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Architecture of Influence connector ──────────────── */}
      <section className="px-6 pt-20 pb-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              The ICA Framework develops the individual. The DIAMON Architecture of Influence shows where that development lands, in the four dimensions that together define an organisation's communication capability: Communication Identity, Executive Presence, Leadership Culture, and Business Performance.
            </p>
          </div>
          {/* ICA concentric circle diagram */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '280px', aspectRatio: '1' }}>
              {/* Outer ACTION ring */}
              <circle cx="200" cy="200" r="192" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="1.5"/>
              {/* COMPOSITION ring */}
              <circle cx="200" cy="200" r="135" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5"/>
              {/* IDENTITY inner circle – blue */}
              <circle cx="200" cy="200" r="80" fill="var(--color-blue)" stroke="var(--color-blue)" strokeWidth="1"/>
              {/* ACTION label */}
              <text x="200" y="52" textAnchor="middle" fill="var(--color-text)" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="400" letterSpacing="4">ACTION</text>
              {/* K3™ */}
              <text x="200" y="362" textAnchor="middle" fill="var(--color-subtle)" fontFamily="Inter, system-ui, sans-serif" fontSize="8.5" letterSpacing="2">K3™</text>
              {/* COMPOSITION label */}
              <text x="200" y="110" textAnchor="middle" fill="var(--color-text)" fontFamily="Inter, system-ui, sans-serif" fontSize="9.5" fontWeight="400" letterSpacing="3.5">COMPOSITION</text>
              {/* SNS™ */}
              <text x="200" y="306" textAnchor="middle" fill="var(--color-subtle)" fontFamily="Inter, system-ui, sans-serif" fontSize="8.5" letterSpacing="2">SNS™</text>
              {/* IDENTITY label */}
              <text x="200" y="193" textAnchor="middle" fill="white" fontFamily="Inter, system-ui, sans-serif" fontSize="10" fontWeight="400" letterSpacing="4">IDENTITY</text>
              {/* DCI™ */}
              <text x="200" y="213" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="Inter, system-ui, sans-serif" fontSize="8.5" letterSpacing="2">DCI™</text>
            </svg>
          </div>
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
