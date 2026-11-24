import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Leadership Communication Intensive — DIAMON Finland',
  description:
    'A focused 6-month coaching engagement that builds clear and measurable leadership communication capability, with direct, intensive coaching throughout.',
}

export default function LeadershipCommunicationIntensivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Kopf_des_Aristoteles_1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.3) saturate(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.4) 100%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            Leadership Communication<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Intensive</span>
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
            6 months of focused coaching
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
            A focused, intensive coaching engagement that builds measurable leadership communication capability in six months, with direct, personal coaching throughout.
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
              Start the programme
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
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              What it is
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              6 months. Focused. Measurable.
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The Leadership Communication Intensive is a 6-month coaching engagement designed for leaders and executives who want to build communication capability quickly and purposefully, with high focus and clear outcomes. Six sessions, three hours each, with a personal coach throughout the full programme.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The programme is built around the client&apos;s real communication situations and leadership goals, delivering measurable progress within a defined timeframe.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Programme structure
              </span>
            </div>
            {[
              '6 tailored coaching sessions over 6 months',
              '3 hours per session',
              'Personal coach throughout the full programme',
              'Continuous support between sessions',
              'Leadership communication profile and personal operating model',
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

      {/* What changes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          What changes
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { n: '01', title: 'Rapid, measurable progress', body: 'Six intensive sessions that move the needle, not a gradual drift, but a focused development sprint with clear outcomes.' },
            { n: '02', title: 'Strategically aligned', body: 'Your communication is purposeful and connected to your leadership role and organisation&apos;s direction, not a presentational skill, but a strategic capability.' },
            { n: '03', title: 'Consistent under pressure', body: 'The same authority and clarity in every context, prepared or not. Performance that holds in the moments that matter.' },
            { n: '04', title: 'A defined profile and model', body: 'A leadership communication profile and personal operating model that continues to serve you after the programme ends.' },
          ].map(({ n, title, body }) => (
            <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
              <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }} dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      <ICAFrameworkSection lang="en" />

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Who it is for */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Who it is for
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Leaders who want to build capability quickly and purposefully.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The Intensive is designed for leaders, executives and senior experts who want intensive, focused development in a defined timeframe, with high focus and clear, measurable outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              'Executives and senior leaders',
              'Leaders stepping into broader leadership roles',
              'Experts preparing for high-visibility communication',
              'Leaders with a specific development goal and timeframe',
              'Those considering the Annual Program wanting a first commitment',
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

      {/* CTA */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
              Next step
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}>
              {"Let's talk."}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Tell us about your goals. We will explore together how the Intensive could build your communication impact.
            </p>
          </div>
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
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
