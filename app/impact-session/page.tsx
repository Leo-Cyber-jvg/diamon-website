import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DIAMON Impact Session — Coaching for High-Impact Communication Moments',
  description:
    'An intensive individual coaching session that prepares a leader or expert to succeed in a specific high-stakes communication situation. 3 hours. Remote, on-site or studio.',
}

export default function ImpactSessionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{
          backgroundColor: 'var(--color-blue)',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
          >
            DIAMON Services
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            DIAMON Impact Session
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '640px',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Coaching for high-impact communication moments
          </p>
          <p
            className="text-lg font-light mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '580px',
              lineHeight: 1.8,
            }}
          >
            For moments where the message matters — and how it is delivered matters just as much.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: 'var(--color-blue)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '14px 28px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Book an Impact Session
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                padding: '14px 28px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              What it is
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              One session. One moment. Full preparation.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              The DIAMON Impact Session is an intensive, individual coaching engagement that prepares a leader or expert to succeed in a specific communication situation where impact matters most. Not a general presentation skills course — a precise preparation for your actual moment.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Session details
              </span>
            </div>
            {[
              'Individual or small group coaching (1–3 participants)',
              'Duration: 3 hours',
              'Remote, on-site or studio format',
              'Optional follow-up sparring or final content refinement',
              'Built on the DIAMON ICA Framework™',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Suitable for */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Suitable for
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { title: 'Keynote speech', body: 'A major address where presence, clarity and structure determine how the message lands.' },
            { title: 'Capital markets day', body: 'Investor-facing communication where credibility, confidence and precision are non-negotiable.' },
            { title: 'Media interview', body: 'Preparation for print, broadcast or podcast appearances where every word is on record.' },
            { title: 'Executive presentation', body: 'Board, leadership team or external stakeholder presentations that carry strategic weight.' },
            { title: 'Internal communication moment', body: 'High-stakes internal announcements, town halls or change communication that shapes culture.' },
            { title: 'Strategic social media appearance', body: 'LinkedIn or public-facing video content where personal brand and business message must align.' },
          ].map(({ title, body }) => (
            <div key={title} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Outcomes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          What you leave with
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { n: '01', title: 'Clear and convincing structure', body: 'A message architecture that is logical, memorable and aligned with your goal.' },
            { n: '02', title: 'Stronger confidence and controlled presence', body: 'Techniques and rehearsal that convert preparation into performance.' },
            { n: '03', title: 'Message aligned with business goals', body: 'Communication positioned within your professional role and the organisation\'s strategic direction.' },
            { n: '04', title: 'Concrete plan for the actual situation', body: 'A specific, actionable framework for the exact moment you are preparing for.' },
          ].map(({ n, title, body }) => (
            <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
              <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA Framework */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              The method
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Built on the ICA Framework™
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Every Impact Session is grounded in the DIAMON ICA Framework™ — Individual Communication Alignment. The framework ensures that the speaker&apos;s message, presence and communication style are aligned with their role, personal profile and the organisation&apos;s strategic goals.
            </p>
            <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Explore the ICA Framework →
            </Link>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '40px' }}>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>ICA Framework™</p>
            {[
              { label: 'I — Identity', desc: 'Who you are as a communicator' },
              { label: 'C — Composition', desc: 'How the message is structured' },
              { label: 'A — Action', desc: 'How it lands and drives change' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-4 py-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', minWidth: '120px' }}>{label}</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: 'var(--color-blue)', color: '#fff', marginTop: '0' }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', maxWidth: '480px', lineHeight: 1.3 }}>
            Prepare for a moment that matters.
          </h2>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: 'var(--color-blue)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '14px 28px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            Book an Impact Session
          </Link>
        </div>
      </section>
    </>
  )
}
