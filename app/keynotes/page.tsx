import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leo Sjöman | Keynote Speaking — DIAMON Finland',
  description:
    'Leo Sjöman delivers keynote speeches on communication, presence, personal impact and leadership under pressure. Tailored for organisations and their events.',
}

export default function KeynotesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            For organisations
          </p>
          <h1
            className="font-light mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            Leo Sjöman
            <span
              className="block mt-3"
              style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.6em' }}
            >
              Keynote speaking for organisations.
            </span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.8,
              maxWidth: '580px',
            }}
          >
            Keynotes on communication, presence and personal impact — drawing on over
            two decades of professional performance and leadership communication coaching.
            Content and emphasis are designed around your organisation and audience.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Ask about a keynote
          </Link>
        </div>
      </section>

      {/* Speaker panel */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2" style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          {/* Left: photo */}
          <div style={{ position: 'relative', minHeight: '480px', overflow: 'hidden', backgroundColor: '#111010' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-sjoman-keynote.jpg"
              alt="Leo Sjöman"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.3) 0%, rgba(17,16,16,0.2) 100%)', pointerEvents: 'none' }} />
          </div>
          {/* Right: content */}
          <div className="flex flex-col justify-center" style={{ backgroundColor: 'var(--color-background)', padding: '48px 40px', gap: '24px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', margin: 0 }}>
              The speaker
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--color-text)', margin: 0 }}>
              Leo Sjöman — actor, entrepreneur and leadership communication coach.
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Over 20 years of professional performance in theatre, television and film —
              and an equal number of years coaching leaders, executives and teams
              on communication, presence and impact.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              MA in Theatre Arts, University of the Arts Helsinki. Founder of Hoka Films.
              Clients range from family businesses to publicly listed companies and international organisations.
            </p>
            <div>
              <Link
                href="/contact"
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(86,86,214,0.35)', paddingBottom: '3px', textDecoration: 'none' }}
              >
                Ask about a keynote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Themes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Key themes
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              n: '01',
              title: 'Personal impact and presence',
              body: 'What makes a person compelling to listen to — and how that quality can be developed deliberately. The relationship between presence, attention and trust in professional communication.',
            },
            {
              n: '02',
              title: 'Communication, interaction and leadership',
              body: 'How leadership is built and expressed through interaction. The role of listening, clarity and intention in creating the conditions for people to perform at their best.',
            },
            {
              n: '03',
              title: 'Performance, pressure and composure',
              body: 'What happens to communication under pressure — and how to maintain composure, clarity and effectiveness in high-stakes situations. Practical tools from performance psychology and professional stage experience.',
            },
            {
              n: '04',
              title: 'Professional identity, courage and finding your voice',
              body: 'The relationship between self-knowledge, authenticity and credibility. How leaders and experts can communicate from a place of genuine authority — not performance, but presence.',
            },
          ].map(({ n, title, body }) => (
            <div
              key={n}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {n}
              </span>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.25 }}
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

      {/* Formats */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Format
              </p>
              <h2
                className="text-3xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
              >
                Tailored to your event and audience.
              </h2>
              <p
                className="text-sm leading-relaxed mt-6"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                Keynote content, length and emphasis are designed around your
                organisation's goals and the composition of the audience. Leo works
                with the client before the event to understand the context — and
                delivers a keynote that feels specific, not generic.
              </p>
            </div>
            <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
              {[
                'Keynote speeches: 30–60 minutes',
                'Panel discussions and moderated conversations',
                'Workshop keynotes with interactive elements',
                'Available in Finnish and English',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 px-6 py-4"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <span
                    style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginTop: '1px', flexShrink: 0 }}
                  >
                    —
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Testimonial */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '720px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Reference
          </p>
          <blockquote>
            <p
              className="text-2xl md:text-3xl font-light mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text)',
                lineHeight: 1.4,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Presentation skill is a master key to leadership and influence.
              DIAMON has uniquely high-level expertise in developing performance,
              presence, and communication. Their personal coaching concept truly works.&rdquo;
            </p>
            <footer>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                Tuomas Liisanantti
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Marketing Director, SDM
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-24" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ maxWidth: '560px' }}>
            <h2
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              Ask about a keynote for your event.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Every keynote is designed around the organisation, the audience and the occasion.
              The conversation starts with understanding what matters to you.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary shrink-0"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Ask about a keynote
          </Link>
        </div>
      </section>
    </>
  )
}
