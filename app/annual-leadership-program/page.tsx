import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DIAMON Annual Leadership Program — 12-Month Leadership Communication Development',
  description:
    'A structured 12-month coaching program that builds a consistent, measurable and strategically aligned communication profile for leaders and executives.',
}

export default function AnnualLeadershipProgramPage() {
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
            DIAMON Annual Leadership Program
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
            Leadership communication development program
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
            Not a one-off training. A structured, long-term engagement that builds a consistent, measurable and strategically aligned communication profile.
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
              Start the program
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
              12 months. Systematic. Measurable.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The DIAMON Annual Leadership Program is a structured coaching program designed to strengthen a leader&apos;s communication impact, executive presence and strategic role as a communicator. Over 12 months, we build the communication architecture that makes leadership consistent, convincing and business-driven.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Program structure
              </span>
            </div>
            {[
              '12-month development program',
              '6 tailored coaching sessions during the year',
              '4 hours per session',
              'Personal coach throughout the full year',
              'Continuous support and follow-up between sessions',
              'Outcome: leadership communication profile and practical operating model',
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

      {/* Themes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Program themes
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { title: 'Communication strategy', body: 'Building a communication approach that is aligned with your leadership role and business objectives.' },
            { title: 'Executive presence', body: 'Developing the authority, confidence and composure that high-stakes communication demands.' },
            { title: 'Personal communication profile', body: 'Defining and strengthening the individual communication identity that makes you distinctive and credible.' },
            { title: 'Strategic storytelling', body: 'Constructing narratives that move people — from data to decisions, from complexity to clarity.' },
            { title: 'Preparation, performance and evaluation', body: 'A repeatable system for preparing, delivering and learning from every significant communication moment.' },
            { title: 'Communication aligned with business goals', body: 'Connecting every communication act to organisational strategy, culture and direction.' },
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

      {/* Value proposition */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          What changes
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { n: '01', title: 'Consistent', body: 'Your communication carries the same authority and clarity in every context — not just when you are prepared.' },
            { n: '02', title: 'Convincing', body: 'Messages that land. Arguments that move people. Presentations that are remembered after the meeting ends.' },
            { n: '03', title: 'Strategically aligned', body: 'Every communication act connected to your leadership role and the organisation&apos;s direction.' },
            { n: '04', title: 'Measurable', body: 'A defined communication profile and operating model that makes development visible and repeatable.' },
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
              The Annual Leadership Program is built on the DIAMON ICA Framework™ — Individual Communication Alignment. The framework ensures that the leader&apos;s message, presence and communication style are aligned with their role, personal profile and the organisation&apos;s strategic goals throughout the full 12 months.
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

      {/* Who it is for */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Who it is for
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Leaders who treat communication as part of strategic leadership.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The program is designed for leaders, executives, managers and senior experts who want to develop communication not as a presentational skill but as a core dimension of strategic leadership and organisational culture.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              'C-suite executives and senior leaders',
              'Board professionals and directors',
              'Leadership team members',
              'Senior managers with significant communication responsibility',
              'Experts stepping into broader leadership roles',
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', maxWidth: '480px', lineHeight: 1.3 }}>
            Build leadership communication that lasts.
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
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
