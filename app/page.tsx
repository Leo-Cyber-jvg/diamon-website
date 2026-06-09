import Link from 'next/link'
import { BlueprintHomepageSection } from './components/ArchitectureBlueprint'
import InfluenceCompass from './components/InfluenceCompass'

const pillars = [
  {
    id: 'I',
    name: 'Identity',
    model: 'DCI™',
    description:
      'The Dual Communicational Identity™ model. Who you are as a communicator, how you build credibility, and how you hold presence in high-stakes situations.',
  },
  {
    id: 'II',
    name: 'Composition',
    model: 'TNT™',
    description:
      'State, Narrative, Structure. How impactful leadership communication is intentionally constructed — before you open your mouth.',
  },
  {
    id: 'III',
    name: 'Action',
    model: 'K3™',
    description:
      'Body, Focus, Language. How communication is executed under pressure, in real situations, with real stakes.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero — blue */}
      <section
        className="flex flex-col justify-center min-h-screen px-6 pt-24 pb-20"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1200px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
          >
            Diamon Finland
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 font-light"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            Communication architecture
            <span style={{ fontStyle: 'italic', opacity: 0.85 }}> for leaders</span>
            {' '}who cannot afford to be misunderstood.
          </h1>

          <p
            className="text-lg md:text-xl mb-12 font-light"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.7,
              maxWidth: '580px',
            }}
          >
            Human-Centered Communication Architecture for the AI Era. We build the
            communication capability that determines whether your expertise,
            presence, and strategy actually land.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
              Start a conversation
            </Link>
            <Link href="/framework" className="btn-outline-white">
              The Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning statement — light */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              The premise
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}
            >
              As automation accelerates, the human ability to create trust,
              clarity, and strategic alignment becomes exponentially more valuable.
            </h2>
          </div>
          <div className="flex flex-col gap-6 pt-2 md:pt-12">
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Diamon Finland is a leadership communication architecture company.
              We work with executives, senior leaders, and organizations who need
              their communication to operate at the level of their actual capability.
            </p>
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              The work is grounded in performance psychology, structural narrative
              theory, and two decades of professional performance practice. It is
              not presentation training. It is not coaching in the conventional sense.
              It is communication architecture.
            </p>
            <Link href="/about" className="link-blue text-sm self-start" style={{ fontFamily: 'var(--font-body)' }}>
              About Leo Sjoman and Diamon &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA Framework pillars */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            The DIAMON ICA Framework&#x2122;
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Three integrated levels. One coherent system.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="text-xs tracking-widest"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
                >
                  ICA {pillar.id}
                </span>
                <span
                  className="text-xs"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                >
                  {pillar.model}
                </span>
              </div>
              <h3
                className="text-2xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
              >
                {pillar.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Explore the full framework &rarr;
          </Link>
        </div>
      </section>

      {/* Architecture of Influence — compass diagram */}
      <InfluenceCompass />

      {/* Architecture of Influence — pathway section */}
      <BlueprintHomepageSection />

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA band — blue */}
      <section
        className="px-6 py-24 text-center"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
        >
          Next step
        </p>
        <h2
          className="text-3xl md:text-5xl font-light mb-8 mx-auto"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#fff',
            maxWidth: '600px',
            lineHeight: 1.15,
          }}
        >
          The right conversation starts with a precise question.
        </h2>
        <Link href="/contact" className="btn-outline-white">
          Get in touch
        </Link>
      </section>
    </>
  )
}
