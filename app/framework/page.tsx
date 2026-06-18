import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkDiagram from '../components/ICAFrameworkDiagram'

export const metadata: Metadata = {
  title: 'The DIAMON ICA Framework™ — Diamon Finland',
  description:
    'Identity, Composition, Action. The DIAMON ICA Framework™ integrates communication identity, strategic composition, and practical performance into one coherent architecture.',
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
    body: 'Most communication problems are not technique problems. They are identity problems. A leader who has not resolved the tension between who they genuinely are and the role they are required to perform will leak that tension into every room they enter. The DCI™ model maps that tension precisely — and builds from it.',
  },
  {
    id: 'ICA II',
    name: 'Composition',
    model: 'SNS™',
    modelFull: 'State, Narrative, Structure',
    question: 'How is impactful leadership communication intentionally constructed?',
    points: [
      'State — optimal communication state and presence',
      'Narrative — strategic narrative construction',
      'Structure — communication objectives and audience alignment',
      'Leadership interaction under pressure',
      'Pre-communication architecture',
    ],
    body: 'High-performance communication is not improvised. It is composed. The SNS™ model provides the architecture for constructing communication that is strategically coherent before it is delivered. State, Narrative, and Structure are not sequential steps — they are interdependent layers that function together.',
  },
  {
    id: 'ICA III',
    name: 'Action',
    model: 'K3™',
    modelFull: 'Body, Focus, Language',
    question: 'How is communication executed effectively in real situations?',
    points: [
      'Body — physical presence and embodiment',
      'Focus — attention management under pressure',
      'Language — verbal communication, clarity, and rhythm',
      'Performance under real conditions',
      'The execution layer of leadership communication',
    ],
    body: 'Architecture without execution is theory. The K3™ model addresses the physical, attentional, and verbal dimensions of how communication actually lands in the room. This is where performance psychology intersects directly with leadership behaviour.',
  },
]

export default function FrameworkPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            The DIAMON ICA Framework™
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            Identity. Composition. Action.
            <span
              className="block mt-3"
              style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.7em' }}
            >
              One system. Three integrated levels.
            </span>
          </h1>
          <p
            className="text-lg font-light"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.8,
              maxWidth: '620px',
            }}
          >
            The DIAMON ICA Framework™ is not a collection of communication techniques.
            It is a coherent architecture — designed to build the communication
            capability that operates at the level of your actual leadership.
          </p>
        </div>
      </section>

      {/* ── Visual diagram — centrepiece ─────────────────────── */}
      <ICAFrameworkDiagram />

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Framework context ────────────────────────────────── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              How the framework works
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-blue)',
                lineHeight: 1.2,
              }}
            >
              Three levels. Each necessary. None sufficient on its own.
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Most communication development programmes work on one level only —
              usually technique. They improve delivery without addressing identity.
              They build structure without building state. They train performance
              without designing architecture.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The ICA Framework integrates all three levels into a single development
              system. Identity is built first — because without a stable communicational
              foundation, technique is unreliable under pressure. Composition follows —
              because clarity of message is a strategic act, not an improvisation.
              Action last — because performance is the expression of architecture,
              not the substitute for it.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The Aristotelian layer — Beginning, Middle, Ending — provides the
              practical communication flow that maps directly onto any leadership
              situation: a board presentation, a difficult conversation, a team
              meeting, a public address. The structure is ancient. The application is precise.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Three levels — deep dive ──────────────────────────── */}
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
                    style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
                  >
                    {level.id}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                  >
                    {level.model} — {level.modelFull}
                  </span>
                </div>
                <h2
                  className="text-4xl md:text-5xl font-light mb-4"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
                >
                  {level.name}
                </h2>
                <p
                  className="text-sm italic mb-8"
                  style={{
                    color: 'var(--color-subtle)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{level.question}&rdquo;
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
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
                      style={{
                        color: 'var(--color-blue)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.8rem',
                        marginTop: '1px',
                        flexShrink: 0,
                      }}
                    >
                      —
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2
          className="text-2xl md:text-3xl font-light"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
            maxWidth: '500px',
            lineHeight: 1.3,
          }}
        >
          See how the DIAMON ICA Framework™ applies to your specific leadership context.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/services" className="btn-outline">Services</Link>
          <Link href="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  )
}
