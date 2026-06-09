import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leo Sjöman — Diamon Finland',
  description:
    'Leo Sjöman is the Founder of Diamon Finland. He works with leaders, executives and organisations to build communication capability, executive presence and organisational influence.',
}

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
          style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
        >
          Founder
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
            lineHeight: 1.05,
            maxWidth: '820px',
          }}
        >
          Leo Sjöman
        </h1>

        {/* Homepage short version — premium 50–80 words */}
        <p
          className="text-xl md:text-2xl font-light"
          style={{
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            maxWidth: '700px',
          }}
        >
          Leo Sjöman works at the intersection of leadership communication,
          executive presence and organisational influence. As Founder of DIAMON,
          he helps leaders and organisations build the communication capability
          that determines whether strategy, expertise and authority actually land.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Portrait + positioning statement */}
      <section
        className="px-6 py-24 grid md:grid-cols-2 gap-16 items-start"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Photo */}
        <div style={{ position: 'relative' }}>
          <img
            src="/leo-sjoman.jpg"
            alt="Leo Sjöman — Founder, Diamon Finland"
            style={{
              width: '100%',
              aspectRatio: '3/4',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
          {/* Positioning statement overlaid at bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2rem',
              background: 'linear-gradient(to top, rgba(17,16,16,0.85) 0%, transparent 100%)',
            }}
          >
            <p
              style={{
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.5,
              }}
            >
              &ldquo;Communication is not about delivering messages.
              It is about creating clarity, trust, alignment and action.&rdquo;
            </p>
            <p
              className="text-xs mt-3 tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
            >
              Leo Sjöman — Founder, Diamon Finland
            </p>
          </div>
        </div>

        {/* Executive website biography — 150–200 words */}
        <div className="flex flex-col gap-8 md:pt-4">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              About Leo
            </p>
            <div
              className="flex flex-col gap-5 text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              <p>
                Leo Sjöman is the Founder of DIAMON Finland and one of the leading
                advisors in leadership communication and executive presence in the
                Nordic region. He works with executives, senior leaders, leadership
                teams and organisations to build the communication capability that
                drives clarity, trust, influence and business performance.
              </p>
              <p>
                His work is grounded in the proprietary DIAMON ICA Framework™ —
                a structured development system that integrates communication
                identity, strategic composition and practical performance into
                one coherent architecture. The framework has been applied across
                executive development, organisational communication programmes
                and high-stakes leadership situations.
              </p>
              <p>
                With more than twenty years of professional performance experience,
                Leo brings an unusually deep understanding of human behaviour,
                presence and communication under pressure. That foundation informs
                every aspect of his advisory work — from individual executive
                development to organisation-wide capability programmes.
              </p>
              <p>
                Leo creates development environments where insight transfers
                directly into real leadership behaviour. His clients operate
                across business, public sector and sport.
              </p>
            </div>
          </div>

          {/* Credential strip */}
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { label: 'Role', value: 'Founder, Diamon Finland' },
              { label: 'Expertise', value: 'Leadership communication, executive presence, organisational influence' },
              { label: 'Methodology', value: 'DIAMON ICA Framework™' },
              { label: 'Clients', value: 'Executives, leaders, teams, athletes, organisations' },
              { label: 'Experience', value: 'Over 20 years in professional performance and communication development' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col gap-1 px-6 py-4"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </span>
                <span
                  className="text-sm"
                  style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* The approach */}
      <section
        className="px-6 py-24"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              The approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}
            >
              Communication capability is not a trait. It is a system that can be built.
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Leo's work starts from a precise diagnostic question: where does communication
              capability currently limit leadership effectiveness, team performance or
              organisational results? The answer determines the architecture.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Every engagement is structured around the DIAMON ICA Framework™ — built on
              three integrated levels that address communication identity, strategic
              composition and practical performance. The work is applied, not theoretical.
              It transfers into real situations, under real pressure, with real stakeholders.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              DIAMON's clients do not leave with better slides or more confidence.
              They leave with a communication architecture that works.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Three pillars of Leo's work */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              title: 'Executive\nAdvisory',
              body: 'One-to-one development with senior leaders and executives. Structured, outcome-defined and grounded in the specific communication challenges each leader faces.',
            },
            {
              title: 'Leadership\nProgrammes',
              body: 'Structured capability development for leadership teams and organisations. Built on the DIAMON ICA Framework™ and designed for lasting behavioural change.',
            },
            {
              title: 'Organisational\nCapability',
              body: 'Organisation-wide communication development that embeds capability into leadership practice, team interaction and culture — not just individual performance.',
            },
          ].map(({ title, body }) => (
            <div
              key={title}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <h3
                className="text-2xl font-light"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text)',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
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
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
            maxWidth: '520px',
            lineHeight: 1.3,
          }}
        >
          Ready to build communication capability that operates at the level of your leadership?
        </h2>
        <Link href="/contact" className="btn-primary shrink-0">
          Get in touch
        </Link>
      </section>
    </>
  )
}
