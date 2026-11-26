import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Leadership Communication Intensive — DIAMON Finland',
  description:
    'A focused 6-month coaching engagement that builds clear and measurable leadership communication capability, with direct, intensive coaching throughout.',
}

const whatChangesItems = [
  { n: '01', title: 'Measurable development', body: 'A focused development engagement where six intensive coaching sessions deliver results with clear outcomes.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="17" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="9" y="12" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="15" y="7" width="4" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><polyline points="21,10 24,7 24,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><line x1="21" y1="4" x2="24" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="24" y1="7" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { n: '02', title: 'Strategically aligned communication', body: 'Your communication is purposeful and connected to your leadership or expert role and your organisation\'s direction. Communication as part of strategic capability.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="14" y1="4" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="20" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="12" x2="19" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { n: '03', title: 'Consistent performance', body: 'Communication capability and clarity that holds across different environments and interaction contexts. Performance that serves you even under pressure.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="2,14 6,14 9,7 12,21 15,11 18,17 21,14 26,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>) },
  { n: '04', title: 'A clear communication profile and operating model', body: 'A leadership communication profile and personal operating model that continues to serve you after the programme ends.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4C9.03 4 5 8.03 5 13c0 2.5 1.02 4.77 2.66 6.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M14 4c4.97 0 9 4.03 9 9 0 2.5-1.02 4.77-2.66 6.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M9 13c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.38-.56 2.63-1.46 3.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M11.5 13c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .69-.28 1.31-.73 1.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M14 15.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 20.5c1.5 1.5 3.5 2.5 7 2.5s5.5-1 7-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>) },
]

export default function LeadershipCommunicationIntensivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/impact-session-hero.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'brightness(0.35) saturate(0.5)' }} />
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
            An intensive coaching engagement that builds measurable leadership communication capability in 6 months, with personal coaching throughout.
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
              Six months of purposeful and{' '}
              <span style={{ fontStyle: 'italic' }}>personal development.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leadership Communication Intensive is a six-month coaching programme for leaders and experts who want to deepen their understanding of their own communication and develop their ability to influence across different professional situations.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The programme includes six three-hour coaching sessions with the same personal coach throughout.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Coaching is built around the client&apos;s individual development goals and real communication situations. Between sessions, what has been learned is applied to everyday work, and progress is reviewed together as the work develops.
            </p>
          </div>
          <div className="flex flex-col gap-px self-start" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Programme structure
              </span>
            </div>
            {[
              '6 tailored coaching sessions over 6 months',
              '3 hours per session',
              'Personal coach throughout the full programme',
              'Support between sessions',
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


      {/* What changes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          What changes
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {whatChangesItems.map(({ n, title, body, icon }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', display: 'block', marginBottom: '2px' }}>{icon}</span>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Who it is for */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Who it is for
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              For leaders and experts who want to strengthen their personal impact.
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The programme is for you if you want to bring your expertise and thinking across more powerfully, develop your communication and interaction skills, and strengthen your performance in demanding professional situations.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              You may be moving into a new leadership role, building a more visible professional presence, or simply wanting to develop your own way of communicating, connecting and leading.
            </p>
          </div>
          <div className="flex flex-col gap-px self-start" style={{ backgroundColor: 'var(--color-border)' }}>
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


      <ICAFrameworkSection lang="en" />


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
