import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '../lib/services'

export const metadata: Metadata = {
  title: 'For Organizations — DIAMON Finland',
  description: 'Leadership communication development for executive teams and organisations. Annual Leadership Program, Thought Leader Studio, Impact Session.',
}

export default function ForOrganisationsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', minHeight: '60vh' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/for-organisations-bg.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%', filter: 'brightness(0.38) saturate(0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Diamon Finland
          </p>
          <h1
            className="font-light mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              maxWidth: '820px',
              letterSpacing: '-0.01em',
            }}
          >
            Leadership communication<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>as a strategic competitive advantage.</span>
          </h1>
          <p
            className="font-light"
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              maxWidth: '520px',
              fontSize: '1rem',
            }}
          >
            Long-term development programmes for executive teams, senior leaders and organisations.
            Systematic, measurable and built to last.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Our approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Leadership effectiveness is built in interaction.
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              The most consequential leadership decisions are executed through communication.
              Strategy, culture, trust and change. All of it rests, in the end, on leaders
              who communicate with clarity, presence and intention.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Diamon develops this capability systematically. The coaching is built on the DIAMON ICA Framework™.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:pt-12">
            {[
              { n: '01', text: 'Develop leadership communication as a core organisational capability.' },
              { n: '02', text: 'Build executive presence, strategic storytelling and stakeholder influence.' },
              { n: '03', text: 'Create measurable, lasting change.' },
            ].map(({ n, text }) => (
              <div key={n} className="flex gap-5 items-start">
                <span
                  className="text-xs tracking-widest shrink-0 pt-0.5"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', minWidth: '28px' }}
                >
                  {n}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Services */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Programmes
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}
          >
            Three programmes.<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>One development continuum.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
              style={{ border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-surface)' }}
            >
              {/* Left: name + value */}
              <div className="md:col-span-1">
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
                >
                  {s.duration}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-light mb-4"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {s.valueOrg}
                </p>
                <Link href={s.href} className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Programme details &rarr;
                </Link>
              </div>

              {/* Middle: for / structure */}
              <div className="md:col-span-1 flex flex-col gap-6">
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                  >
                    Designed for
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {s.forOrg}
                  </p>
                </div>
              </div>

              {/* Right: structure list */}
              <div className="md:col-span-1">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                >
                  Programme includes
                </p>
                <div className="flex flex-col gap-2">
                  {s.structure.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'var(--color-blue)' }}
                        aria-hidden="true"
                      />
                      <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Keynotes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
          style={{ border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-surface)' }}
        >
          <div className="md:col-span-1">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
            >
              45–75 min · On-site or hybrid
            </p>
            <h3
              className="text-2xl md:text-3xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
            >
              Leo Sjöman — Keynote Speaking
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Keynotes on communication, presence and personal impact — drawing on over two
              decades of professional performance and leadership coaching. Content is designed
              around your organisation and audience.
            </p>
            <Link href="/keynotes" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Keynote details &rarr;
            </Link>
          </div>
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Designed for
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                Leadership events, company days, strategy sessions, and conferences where
                the theme is communication, leadership, or human performance.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Key themes
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Personal impact and presence',
                'Communication, interaction and leadership',
                'Performance under pressure',
                'Professional identity and finding your voice',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-blue)' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA reference */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Methodology
            </p>
            <h2
              className="text-3xl font-light mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Coaching built on the DIAMON ICA Framework™
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              A structured development methodology grounded in performance
              psychology and two decades of professional performance practice.
            </p>
            <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Explore the ICA Framework &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { l: 'I — Identity', d: 'Leadership identity, self-awareness and personal presence.' },
              { l: 'C — Composition', d: 'Message structure, purpose, focus and strategic clarity.' },
              { l: 'A — Action', d: 'Execution, physicality, presence and performance under pressure.' },
            ].map(({ l, d }) => (
              <div key={l} className="flex items-start gap-6 px-8 py-5" style={{ backgroundColor: 'var(--color-background)' }}>
                <span
                  className="text-sm font-light shrink-0"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', minWidth: '110px' }}
                >
                  {l}
                </span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ maxWidth: '560px' }}>
            <h2
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              Start the conversation about your organisation.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Every engagement begins with a diagnostic conversation, not a sales process.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary shrink-0"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Book a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
