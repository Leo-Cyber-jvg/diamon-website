import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The DIAMON ICA Framework™ — Diamon Finland',
  description:
    'Identity, Composition, Action. The DIAMON ICA Framework™ integrates communication identity, strategic composition, and practical performance into one coherent system.',
}

const levels = [
  {
    id: 'ICA I',
    name: 'Identity',
    model: 'DCI™',
    modelFull: 'Dual Communicational Identity™',
    question: 'Who am I as a communicator and leader?',
    points: [
      'Authenticity versus professional role',
      'Personal interaction potential',
      'Communication identity, credibility, and trust',
      'Balancing private presence and public leadership',
      'The foundation all other communication is built on',
    ],
    body:
      'Most communication problems are not technique problems. They are identity problems. A leader who has not resolved the tension between who they genuinely are and the role they are required to perform will leak that tension into every room they enter. The DCI™ model maps that tension precisely — and builds from it.',
  },
  {
    id: 'ICA II',
    name: 'Composition',
    model: 'TNT™',
    modelFull: 'State, Narrative, Structure',
    question: 'How is impactful leadership communication intentionally constructed?',
    points: [
      'State (Tila) — optimal communication state and presence',
      'Narrative (Narratiivi) — strategic narrative construction',
      'Structure (Toimintarakenne) — communication objectives and audience alignment',
      'Leadership interaction under pressure',
      'Pre-communication architecture',
    ],
    body:
      'High-performance communication is not improvised. It is composed. The TNT™ model provides the architecture for constructing communication that is strategically coherent before it is delivered. State, Narrative, and Structure are not sequential steps — they are interdependent layers that function together.',
  },
  {
    id: 'ICA III',
    name: 'Action',
    model: 'K3™',
    modelFull: 'Body, Focus, Language',
    question: 'How is communication executed effectively in real situations?',
    points: [
      'Body (Keho) — physical presence and embodiment',
      'Focus (Keskittyminen) — attention management under pressure',
      'Language (Kieli) — verbal communication, clarity, and rhythm',
      'Performance under real conditions',
      'The execution layer of leadership communication',
    ],
    body:
      'Architecture without execution is theory. The K3™ model addresses the physical, attentional, and verbal dimensions of how communication actually lands in the room. This is where performance psychology intersects directly with leadership behavior.',
  },
]

export default function FrameworkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-inter)' }}
        >
          The DIAMON ICA Framework&#x2122;
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-text)',
            lineHeight: 1.05,
            maxWidth: '820px',
          }}
        >
          Identity. Composition. Action.
          <span
            className="block mt-2"
            style={{ color: 'var(--color-muted)', fontStyle: 'italic', fontSize: '0.75em' }}
          >
            One system. Three integrated levels.
          </span>
        </h1>
        <p
          className="text-lg font-light"
          style={{
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-inter)',
            lineHeight: 1.8,
            maxWidth: '620px',
          }}
        >
          The DIAMON ICA Framework&#x2122; is not a collection of communication techniques.
          It is a coherent architecture — designed to build the communication
          capability that operates at the level of your actual leadership.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Aristotelian structure note */}
      <section
        className="px-6 py-16"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { phase: 'Beginning', action: 'Create attention and trust' },
            { phase: 'Middle', action: 'Build clear and compelling narrative' },
            { phase: 'End', action: 'Guide toward decisions, action, and measurable impact' },
          ].map(({ phase, action }) => (
            <div key={phase} className="flex flex-col gap-2">
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
              >
                {phase}
              </span>
              <span
                className="text-sm"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
              >
                {action}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-xs mt-8"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
        >
          Rooted in Aristotelian dramaturgical structure — applied to leadership communication.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Three levels */}
      {levels.map((level, idx) => (
        <div key={level.id}>
          <section
            className="px-6 py-20"
            style={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-baseline gap-3 mb-6">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-inter)' }}
                  >
                    {level.id}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
                  >
                    {level.model} &mdash; {level.modelFull}
                  </span>
                </div>
                <h2
                  className="text-4xl md:text-5xl font-light mb-4"
                  style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)' }}
                >
                  {level.name}
                </h2>
                <p
                  className="text-sm italic mb-8"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
                >
                  &ldquo;{level.question}&rdquo;
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                >
                  {level.body}
                </p>
              </div>

              <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
                {level.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 px-6 py-4"
                    style={{ backgroundColor: 'var(--color-background)' }}
                  >
                    <span
                      className="mt-1 shrink-0 block w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-gold)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {idx < levels.length - 1 && (
            <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
            </div>
          )}
        </div>
      ))}

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
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-text)',
            maxWidth: '500px',
            lineHeight: 1.3,
          }}
        >
          See how the DIAMON ICA Framework&#x2122; applies to your specific leadership context.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/services" className="btn-outline">Services</Link>
          <Link href="/contact" className="btn-gold">Get in touch</Link>
        </div>
      </section>
    </>
  )
}
