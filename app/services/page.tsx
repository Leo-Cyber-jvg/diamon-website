import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — Diamon Finland',
  description:
    'Leadership communication systems, executive presence, organizational interaction capability. Diamon Finland builds communication architecture — not training programmes.',
}

const services = [
  {
    id: '01',
    title: 'Executive Communication Architecture',
    audience: 'Senior leaders, C-suite executives, board professionals',
    description:
      'A structured engagement that maps your current communication architecture, identifies the specific gaps between your expertise and how it lands, and builds a system — grounded in the DIAMON ICA Framework™ — that closes that gap.',
    what: [
      'Communication identity assessment (DCI™)',
      'Strategic narrative construction',
      'Executive presence development',
      'High-stakes communication preparation',
      'Media, board, and investor interaction',
    ],
    note: 'Engagements are structured, not open-ended. We define the objective first.',
  },
  {
    id: '02',
    title: 'Organizational Interaction Capability',
    audience: 'Leadership teams, organizations, enterprise clients',
    description:
      'Organizations communicate at the level of their least capable communicators in critical moments. This engagement builds communication capability as organizational infrastructure — systematically, across the leadership layer.',
    what: [
      'Organizational communication audit',
      'Leadership communication system design',
      'Team interaction capability development',
      'Strategic alignment communication',
      'Organizational presence and culture',
    ],
    note: 'Scope and depth are agreed before engagement begins. No off-the-shelf programmes.',
  },
  {
    id: '03',
    title: 'Communication Performance',
    audience: 'Executives preparing for specific high-stakes moments',
    description:
      'Preparation for a specific communication challenge: a keynote, a board presentation, a media appearance, an investor conversation, a high-stakes negotiation. Focused, intensive, and outcome-oriented.',
    what: [
      'Situation-specific communication architecture',
      'Narrative and structural preparation',
      'Physical and attentional performance',
      'Pressure simulation and feedback',
      'Pre-event refinement',
    ],
    note: 'Available as a standalone engagement or as part of a longer architecture programme.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-inter)' }}
        >
          Services
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-text)',
            lineHeight: 1.05,
            maxWidth: '820px',
          }}
        >
          We build communication capability.
          <span
            className="block mt-2"
            style={{ color: 'var(--color-muted)', fontStyle: 'italic', fontSize: '0.75em' }}
          >
            Not programmes. Not training days.
          </span>
        </h1>
        <p
          className="text-lg font-light"
          style={{
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-inter)',
            lineHeight: 1.8,
            maxWidth: '620px',
          }}
        >
          Every engagement starts with a precise question: what needs to change, and what
          will it mean when it does? The architecture follows from that.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Services */}
      {services.map((service, idx) => (
        <div key={service.id}>
          <section
            className="px-6 py-20"
            style={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-baseline gap-4 mb-6">
                  <span
                    className="text-xs tracking-widest"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
                  >
                    {service.id}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
                  >
                    {service.audience}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-light mb-6"
                  style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)', lineHeight: 1.2 }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                >
                  {service.description}
                </p>
                <p
                  className="text-sm italic"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-cormorant)', fontSize: '0.95rem' }}
                >
                  {service.note}
                </p>
              </div>

              <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
                <div
                  className="px-6 py-3"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
                  >
                    What this covers
                  </span>
                </div>
                {service.what.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 px-6 py-4"
                    style={{ backgroundColor: 'var(--color-background)' }}
                  >
                    <span
                      className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-gold)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {idx < services.length - 1 && (
            <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
            </div>
          )}
        </div>
      ))}

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* How we work */}
      <section
        className="px-6 py-20"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
        >
          How we work
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              step: '1',
              title: 'Define the objective',
              body: 'Every engagement begins with a precise definition of what needs to change and what it will mean when it does. We do not begin work without this clarity.',
            },
            {
              step: '2',
              title: 'Design the architecture',
              body: 'We structure the engagement around the DIAMON ICA Framework™ — adapted to your specific context, level, and communication challenge.',
            },
            {
              step: '3',
              title: 'Build the capability',
              body: 'Work that produces measurable change in how your communication lands — not a certificate, not a score. A tangible shift in performance.',
            },
          ].map(({ step, title, body }) => (
            <div
              key={step}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-inter)' }}
              >
                {step}
              </span>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section
        className="px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2
          className="text-2xl md:text-3xl font-light"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-text)',
            maxWidth: '480px',
            lineHeight: 1.3,
          }}
        >
          The right engagement starts with the right conversation.
        </h2>
        <Link href="/contact" className="btn-gold shrink-0">
          Start a conversation
        </Link>
      </section>
    </>
  )
}
