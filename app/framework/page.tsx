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
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#0d0c0c' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-framework.png"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'brightness(0.45) saturate(0.7)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.3) 100%)', pointerEvents: 'none' }} />
        <div className="px-6 pb-20 pt-40" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            The DIAMON ICA Framework™
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-10" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Identity. Composition. Action.
            <span className="block mt-3" style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.7em' }}>
              One system. Three integrated levels.
            </span>
          </h1>
          <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '620px' }}>
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

      {/* ── ICA column-based diagram ──────────────────────────── */}
      <section className="px-6 pb-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <div className="grid [grid-template-columns:1fr] md:[grid-template-columns:repeat(3,1fr)]">
            {[
              {
                label: 'ICA I', model: 'DCI™',
                name: 'Identity', question: 'Who am I as a communicator and leader?',
                bullets: ['Personal communication identity', 'Executive presence and authenticity', 'Communicative self-awareness', 'Recognising and managing performance anxiety', 'Building trust and credibility'],
                pills: ['Communication identity', 'Authenticity'],
                act: 'Opening', actText: 'Create contact, presence and trust.',
                outcome: 'Presence',
              },
              {
                label: 'ICA II', model: 'TNT™',
                name: 'Composition', question: 'What do I build, and how?',
                bullets: ['Communicative intent and objectives', 'Strategic storytelling', 'Message structure and dramaturgy', 'Audience awareness and building engagement'],
                pills: ['State', 'Narrative', 'Action structure'],
                act: 'Middle', actText: 'Build the message, structure and shared understanding.',
                outcome: 'Clarity',
              },
              {
                label: 'ICA III', model: 'K3™',
                name: 'Action', question: 'How do I execute it in a real situation?',
                bullets: ['Practical performance training', 'Camera work and recorded analysis', 'Physical intent, non-verbal communication and presence', 'Situational simulation, feedback and repetition'],
                pills: ['Body', 'Focus', 'Language'],
                act: 'Close', actText: 'Drive toward action, decision and impact.',
                outcome: 'Impact',
              },
            ].map(({ label, model, name, question, bullets, pills, act, actText, outcome }, i) => (
              <div
                key={name}
                className={i > 0 ? '[border-top:3px_solid_var(--color-blue)] md:[border-top:none]' : ''}
                style={{
                  backgroundColor: 'var(--color-background)',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                {/* Label */}
                <div className="px-5 py-3 flex justify-between items-center" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                  <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{label}</span>
                  <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{model}</span>
                </div>
                {/* Name + question */}
                <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <h3 className="font-light mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', lineHeight: 1.0, color: 'var(--color-text)' }}>{name}</h3>
                  <p className="text-sm italic" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-muted)', lineHeight: 1.4 }}>{question}</p>
                </div>
                {/* Bullets */}
                <div className="px-5 py-3 flex-1" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {bullets.map((b, bi) => (
                    <div key={b} className="flex items-start gap-3 py-2" style={{ borderBottom: bi < bullets.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                      <span className="text-xs" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
                {/* Pills */}
                <div className="px-5 py-4 flex flex-wrap gap-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {pills.map(pill => (
                    <span key={pill} className="text-xs px-3 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: '999px', fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>{pill}</span>
                  ))}
                </div>
                {/* Action (blue) */}
                <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'var(--color-blue)' }}>
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{act}</p>
                  <p className="font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', lineHeight: 1.35 }}>{actText}</p>
                </div>
                {/* Outcome */}
                <div className="px-5 py-3 flex items-center gap-3" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Outcome</span>
                  <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1.2rem' }}>{outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      <InfluenceCompass showLink={false} />

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
