import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Diamon Finland',
  description:
    'Leo Sjoman is a professional actor and executive communication consultant. The combination of performance psychology, communication architecture, and AI augmentation does not exist elsewhere at this level.',
}

const differentiators = [
  {
    label: 'Performance psychology',
    description:
      "A Master of Arts from the Theatre Academy of Finland — one of Europe's leading performing arts institutions. Two decades of professional performance work, on stage and screen. This is not metaphor. The tools are real.",
  },
  {
    label: 'Communication architecture',
    description:
      'The DIAMON ICA Framework™ is a coherent system — not a collection of techniques. Identity, Composition, and Action operate as integrated levels, each reinforcing the others. Architecture, not assembly.',
  },
  {
    label: 'AI augmentation',
    description:
      'Diamon does not position as an AI company. It positions as a human communication company that understands precisely how AI is changing leadership, trust, and organizational behavior — and builds communication capability accordingly.',
  },
]

export default function AboutPage() {
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
          About
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
          A background that does not exist anywhere else in this field.
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
          Leo Sjoman is a professional actor, film and television performer,
          and executive communication consultant. That combination is not
          incidental. It is the foundation of every methodology Diamon builds.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* The story */}
      <section
        className="px-6 py-24 grid md:grid-cols-2 gap-16"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
          >
            The work
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-8"
            style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)', lineHeight: 1.2 }}
          >
            Professional performance and organizational communication are not separate disciplines.
          </h2>
          <div
            className="flex flex-col gap-5 text-sm leading-relaxed"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
          >
            <p>
              The same mechanisms that determine whether an actor holds a
              room — state regulation, structural narrative, physical
              presence, attention management — are precisely what determines
              whether a leader holds a boardroom.
            </p>
            <p>
              Leo trained at the Theatre Academy of Finland
              (Teatterikorkeakoulu, Taideyliopisto), earning a Master of Arts
              in Theatre and Drama. He has performed professionally in
              theatre, film, and television. He has also spent years working
              with executives and organizations across Finland and the Nordic
              region on leadership communication, executive presence, and
              organizational interaction capability.
            </p>
            <p>
              Diamon Finland was built to bring those two domains into a
              single, coherent architecture. The result is the DIAMON ICA
              Framework™ — a system that treats leadership communication as
              something you can actually build, not just improve.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { label: 'Education', value: 'Master of Arts, Theatre Academy of Finland' },
            { label: 'Practice', value: 'Professional actor — theatre, film, television' },
            { label: 'Consulting', value: 'Executive communication and organizational capability' },
            { label: 'Methodology', value: 'DIAMON ICA Framework™ — proprietary architecture' },
            { label: 'Company', value: 'Founder, Diamon Finland' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col gap-1 p-6"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
              >
                {label}
              </span>
              <span
                className="text-sm"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-inter)' }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Differentiators */}
      <section
        className="px-6 py-24"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
        >
          The differentiator
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {differentiators.map(({ label, description }) => (
            <div
              key={label}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <h3
                className="text-xl font-light"
                style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)' }}
              >
                {label}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
              >
                {description}
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
          style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)', maxWidth: '480px', lineHeight: 1.3 }}
        >
          Ready to explore what communication architecture can do for your leadership?
        </h2>
        <Link href="/contact" className="btn-gold shrink-0">
          Get in touch
        </Link>
      </section>
    </>
  )
}
