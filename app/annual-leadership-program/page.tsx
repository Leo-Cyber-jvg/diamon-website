import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Leadership Communication Annual Program — DIAMON Finland',
  description:
    'A structured 12-month coaching programme that builds a consistent, measurable and strategically aligned communication profile for leaders and executives.',
}

export default function AnnualLeadershipProgramPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/aristoteles-hero.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.3) saturate(0.4)' }} />
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
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Annual Program</span>
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
            12 months of structured coaching
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
            A coaching programme where leadership communication is developed consistently, measurably and in line with the organisation's strategic goals. A personal coach throughout the full year.
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
              The coaching programme
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              A year of developing your leadership and{' '}
              <span style={{ fontStyle: 'italic' }}>your impact.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Annual Leadership Program is a year-long personal coaching programme for leaders who want to deepen their understanding of how they communicate, lead and influence.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Long-term work with a personal coach enables the identification of strengths, examination of established ways of operating, and the practice of new capabilities as part of one&apos;s own work.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Coaching is built around the leader&apos;s individual development goals, real communication situations and the organisation&apos;s strategic needs. A personal coach walks alongside the leader throughout the full year.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The goal is to strengthen the leader&apos;s communication capability across different communication environments and interaction situations, and to develop the ability to lead more consciously, even when the pressure grows.
            </p>
          </div>
          <div className="flex flex-col gap-px self-start" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Program structure
              </span>
            </div>
            {[
              '12-month development programme',
              '12 tailored coaching sessions',
              '2 hours per session',
              'Personal coach throughout the full year',
              'Continuous support and follow-up between sessions',
              "Leadership communication profile and personal operating model",
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
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { n: '01', title: 'Leadership communication identity', body: 'Self-knowledge, personal strengths and ways of operating.' },
              { n: '02', title: 'Strategic communication and storytelling', body: 'Structuring thinking, narrative and shared direction.' },
              { n: '03', title: 'Presence across communication environments', body: 'Audiences, camera, media and stakeholders.' },
              { n: '04', title: 'Interaction and leading dialogue', body: 'Listening, meeting people and building trust.' },
              { n: '05', title: 'Presence and capability under pressure', body: 'Embodied presence, focus and self-regulation.' },
              { n: '06', title: 'Preparation and developing your own practice', body: 'Simulations, practice, feedback and tracking development.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm mt-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontStyle: 'italic', lineHeight: 1.65 }}>
          The emphasis of the programme themes is built around each leader&apos;s individual development goals, professional context and the organisation&apos;s needs.
        </p>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Value proposition */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          What changes
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { n: '01', title: 'Consistent and convincing communication', body: 'Your communication capability, clarity and personal impact strengthen across different communication environments and interaction situations.' },
              { n: '02', title: 'Strategically aligned communication', body: 'Your communication is purposeful and connected to your leadership role and your organisation\'s strategic direction. You develop your ability to build shared understanding and guide action through communication.' },
              { n: '03', title: 'Stronger capability', body: 'Your ability to present, meet people and lead interaction grows stronger. You can draw on your own expertise, thinking and personality effectively even in demanding and high-pressure situations.' },
              { n: '04', title: 'Long-term and measurable development', body: 'A clear communication identity, a personal operating model and methods for developing your own communication. Development is assessed systematically throughout the year and the ways of working you learn continue to serve you after the programme.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
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
              Leaders who treat communication as a strategic capability.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The programme is designed for leaders, executives and senior experts who want to develop their communication purposefully, not as a presentational skill, but as a core part of strategic leadership and organisational culture.
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
              Next step
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}>
              {"Let's talk."}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Tell us about your goals or challenges. We will explore together how Diamon could strengthen the impact of leadership communication and interaction.
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
