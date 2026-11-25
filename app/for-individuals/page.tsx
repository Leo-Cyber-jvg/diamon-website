import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '../lib/services'

export const metadata: Metadata = {
  title: 'For Individuals — DIAMON Finland',
  description: 'Personal leadership communication coaching for executives, senior leaders and experts. Annual Leadership Program, Thought Leader Studio, Impact Session.',
}

export default function ForIndividualsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', minHeight: '60vh' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coaching-series-bg-new.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block', filter: 'brightness(0.38) saturate(0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)', pointerEvents: 'none' }} />
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
            Your communication is<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>your leadership's most visible part.</span>
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
            Personal coaching for executives, senior leaders and experts who want to
            communicate with more clarity, presence and strategic impact.
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
              The work
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Communication is a skill.<br />
              <span style={{ fontStyle: 'italic' }}>Impact can be developed.</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              A leader's expertise, thinking and personal potential do not always come through fully in how they communicate. It is not only about what we know or can do — it is about how we are able to convey that to others, build shared understanding and direct action.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Impactful leadership communication is built on understanding one's own way of operating, the deliberate construction of communication, and the ability to act effectively in diverse interaction situations.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:pt-12">
            <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Three core elements
            </p>
            {[
              { n: '01', text: 'Understanding your communication identity and personal potential.' },
              { n: '02', text: 'The ability to build clear, meaningful and strategically impactful communication.' },
              { n: '03', text: 'Presence, conviction and the capacity to perform in demanding interaction situations — on camera, in the media and with key stakeholders.' },
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

      {/* Coaching Series */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <p className="text-xs tracking-[0.28em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Coaching Series
          </p>
        </div>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', marginBottom: '48px' }} />

        <div className="grid md:grid-cols-2" style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          {/* Left: photo panel */}
          <div
            className="flex flex-col justify-between"
            style={{
              position: 'relative',
              padding: '36px 40px',
              minHeight: '340px',
              overflow: 'hidden',
              backgroundColor: '#111010',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speaker-blue.webp"
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                filter: 'brightness(0.45) saturate(0.6)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)',
                pointerEvents: 'none',
              }}
            />
            <p style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', margin: 0, position: 'relative', zIndex: 1 }}>
              Coaching Series · Diamon Finland
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 2.8vw, 36px)',
                fontWeight: 300,
                lineHeight: 1.12,
                color: '#F4F3F1',
                margin: '24px 0',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Leadership Impact<br />
              and Performance.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', border: '1px solid rgba(244,243,241,0.15)', padding: '4px 10px', whiteSpace: 'nowrap' }}>
                  01 · Fri 22.1.2027
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,241,0.65)', fontFamily: 'var(--font-body)' }}>Leo Sjöman × Antti Pennanen</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', border: '1px solid rgba(244,243,241,0.15)', padding: '4px 10px', whiteSpace: 'nowrap' }}>
                  02 · Fri 19.2.2027
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,241,0.65)', fontFamily: 'var(--font-body)' }}>Leo Sjöman × Henri Tuomilehto</span>
              </div>
            </div>
          </div>

          {/* Right: content panel */}
          <div className="flex flex-col justify-center" style={{ backgroundColor: 'var(--color-background)', padding: '36px 40px', gap: '24px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Next coaching day
            </p>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 300, lineHeight: 1.18, color: 'var(--color-text)', margin: 0 }}>
              Connection and leadership <em style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>under pressure.</em>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'Date', value: 'Friday 22.1.2027 · 9–17' },
                { label: 'Location', value: 'Helsinki' },
                { label: 'Coaches', value: 'Leo Sjöman × Antti Pennanen' },
                { label: 'Group', value: '10 leaders' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '10px', fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  <span style={{ color: 'var(--color-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '9px', minWidth: '64px', marginTop: '1px' }}>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/fi/valmennussarja"
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(86,86,214,0.35)', paddingBottom: '3px', whiteSpace: 'nowrap', textDecoration: 'none', width: 'fit-content' }}
              >
                Read more and register →
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', borderTop: '1px solid var(--color-border)', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>Coming up</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--color-border)', padding: '5px 12px' }}>02 · Sleep and recovery · Fri 19.2.2027</span>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--color-border)', padding: '5px 12px' }}>More dates to be announced</span>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Impact Session */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Programmes
          </p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}>
            Tailored development for the individual leader.
          </h2>
        </div>
        {(() => {
          const s = services.find(x => x.id === 'impact')!
          return (
            <div
              className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
              style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}
            >
              <div className="md:col-span-1">
                <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
                  {s.duration}
                </p>
                <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {s.valueInd}
                </p>
                <Link href={s.href} className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Programme details &rarr;
                </Link>
              </div>
              <div className="md:col-span-1 flex flex-col gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                    Right for you if
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {s.forInd}
                  </p>
                </div>
              </div>
              <div className="md:col-span-1">
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  Programme includes
                </p>
                <div className="flex flex-col gap-2">
                  {s.structure.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                      <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })()}
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA Framework compact bars */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Approach · DIAMON ICA Framework™
          </p>
          <h2 className="font-light" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.1, color: 'var(--color-text)' }}>
            Identity. Composition.{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Action.</span>
          </h2>
        </div>
        <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <div className="grid [grid-template-columns:1fr] md:[grid-template-columns:repeat(3,1fr)]" style={{ gap: '0' }}>
            {[
              {
                label: 'ICA I · DCI™', name: 'Identity', question: 'Who am I as a communicator and leader?',
                bullets: ['Personal communication identity', 'Executive presence and authenticity', 'Communicative self-awareness', 'Recognising and managing performance anxiety', 'Building trust and credibility'],
              },
              {
                label: 'ICA II · TNT™', name: 'Composition', question: 'What do I build, and how?',
                bullets: ['Communicative intent and objectives', 'Strategic storytelling', 'Message structure and dramaturgy', 'Audience awareness and building engagement'],
              },
              {
                label: 'ICA III · K3™', name: 'Action', question: 'How do I execute it in a real situation?',
                bullets: ['Practical performance training', 'Camera work and recorded analysis', 'Physical intent, non-verbal communication and presence', 'Situational simulation, feedback and repetition'],
              },
            ].map(({ label, name, question, bullets }, i) => (
              <div
                key={name}
                style={{
                  backgroundColor: 'var(--color-background)',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <div className="px-6 py-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <p className="text-xs tracking-[0.22em] uppercase mb-1" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{label}</p>
                  <h3 className="font-light mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', lineHeight: 1.0, color: 'var(--color-text)' }}>{name}</h3>
                  <p className="text-xs" style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-muted)' }}>{question}</p>
                </div>
                <div className="px-6 py-4 flex-1">
                  {bullets.map((b, bi) => (
                    <div key={b} className="flex items-start gap-3 py-2" style={{ borderBottom: bi < bullets.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                      <span className="text-xs" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Link href="/framework" className="link-blue text-xs tracking-[0.12em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            Explore the ICA Framework →
          </Link>
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
              Start the conversation about your development.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              We build and tailor coaching for individuals based on their specific needs and situation. Tell us what you need, and we will design a coaching programme targeted specifically at you.
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
