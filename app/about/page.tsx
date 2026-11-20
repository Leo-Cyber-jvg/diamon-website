import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkDiagram from '../components/ICAFrameworkDiagram'

export const metadata: Metadata = {
  title: 'About DIAMON — Leadership Communication for the AI Era',
  description:
    'DIAMON Finland develops leadership communication capability — helping leaders and organisations turn expertise and thinking into visible, effective influence.',
}

export default function AboutPage() {
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
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
          >
            About DIAMON
          </p>
          <h1
            className="font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              maxWidth: '860px',
            }}
          >
            Leadership communication as a strategic competitive advantage.
          </h1>
          <p
            className="text-lg font-light"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              maxWidth: '620px',
            }}
          >
            A leader&apos;s ability to communicate, influence and build trust is a core part
            of organisational performance. Expertise and strategic thinking create value
            when they are communicated clearly, build shared understanding and guide action.
          </p>
        </div>
      </section>

      {/* Four themes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          What DIAMON is built on
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              number: '01',
              title: 'Leadership communication as a strategic competitive advantage',
              body: 'A leader\'s ability to communicate, influence and build trust is a core part of organisational performance. Expertise and strategic thinking create value when they are communicated clearly, build shared understanding and guide action.',
            },
            {
              number: '02',
              title: 'The Human Edge in the AI Era',
              body: 'AI and digital transformation are changing how we produce information, communicate and work. At the same time, personal interaction, presence and the ability to connect with people remain central to leadership. Effective communication requires clarity, situational awareness and the ability to build a genuine connection with the audience — across in-person, digital and hybrid environments.',
            },
            {
              number: '03',
              title: 'From expertise to impact',
              body: 'DIAMON\'s starting point is the observation that a leader\'s or expert\'s capabilities and potential do not always come through fully in how they communicate. We develop the communication effectiveness of leaders and experts, so their thinking, expertise and professional identity are expressed more clearly and with greater impact in the leadership and interaction situations that matter.',
            },
            {
              number: '04',
              title: 'Purposeful, practice-based development',
              body: 'DIAMON\'s programmes are built around the client\'s real communication situations and business objectives. The ICA Framework™ combines the communicator\'s identity, the architecture of the message, and practical action into a systematic development continuum. The goal is to strengthen communicative effectiveness in ways that support individual impact and organisational success.',
            },
          ].map(({ number, title, body }) => (
            <div
              key={number}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {number}
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

      {/* ICA Framework */}
      <ICAFrameworkDiagram />

      <div className="px-6 py-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
          Explore the full ICA Framework &rarr;
        </Link>
      </div>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Founder */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-16"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          The founder
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman — Founder, DIAMON Finland"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center 75%',
                display: 'block',
              }}
            />
            <div className="mt-4 flex flex-col gap-1">
              <span
                className="text-sm font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: '1.1rem' }}
              >
                Leo Sjöman
              </span>
              <span
                className="text-xs tracking-wide"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Leadership Communication Coach, DIAMON Finland
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Behind the framework
            </h2>
            <div
              className="flex flex-col gap-5 text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              <p>
                Leo Sjöman is the Founder of DIAMON Finland and the developer of the
                DIAMON ICA Framework™. He works with executives, senior leaders,
                leadership teams and organisations across the Nordic region.
              </p>
              <p>
                Leo is a professional actor with more than twenty years of experience
                in film, television and theatre. That background is not a footnote —
                it is the foundation of the framework. The craft of acting demands a
                deep, practical understanding of human behaviour, presence, storytelling
                and performance under pressure. It is precisely this understanding,
                applied to leadership and organisational contexts, that makes DIAMON&apos;s
                approach distinctively effective.
              </p>
              <p>
                Where most communication development programmes work from the outside
                in — adjusting behaviour, adding techniques — DIAMON works from the
                inside out. Identity before technique. Architecture before delivery.
              </p>
            </div>
            <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
              {[
                { label: 'Role', value: 'Leadership Communication Coach, DIAMON Finland' },
                { label: 'Framework', value: 'DIAMON ICA Framework™ — Identity, Composition, Action' },
                { label: 'Background', value: 'Professional actor — film, television, theatre (20+ years)' },
                { label: 'Clients', value: 'Executives, leadership teams, organisations' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 px-5 py-4"
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
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section
        className="px-6 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2
          className="text-2xl md:text-3xl font-light"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', maxWidth: '560px', lineHeight: 1.3 }}
        >
          Ready to build communication capability that operates at the level of your leadership?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/contact" className="btn-primary">Get in touch</Link>
          <Link href="/framework" className="btn-outline">Explore the framework</Link>
        </div>
      </section>
    </>
  )
}
