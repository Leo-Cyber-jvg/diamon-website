import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Executive Programmes — DIAMON Finland',
  description:
    'Flagship leadership communication development programmes. The DIAMON Executive Communication Programme, Leadership Communication Programme, Communication Performance Lab and ICA Academy.',
}

const programmes = [
  {
    id: '01',
    code: 'DECP™',
    title: 'DIAMON Executive Communication Programme™',
    tagline: 'The flagship individual development journey',
    duration: '12 months — 6 deep-dive sessions',
    audience: 'CEOs, executives, board professionals, senior leaders',
    desc: 'The most comprehensive individual leadership communication development programme DIAMON offers. A 12-month structured journey through the full DIAMON ICA Framework™ — building communication identity, message architecture and performance capability from the ground up.',
    structure: [
      'ICA Baseline Assessment and communication profile',
      'ICA I — Identity and DCI™ development',
      'ICA II — Composition and TNT™ architecture',
      'ICA III — Action and K3™ performance',
      'High-stakes performance integration',
      'Final ICA review and forward programme',
    ],
    outcomes: 'A complete personal communication architecture — identity, composition and action — aligned with your role, goals and the demands of leadership.',
    highlight: true,
  },
  {
    id: '02',
    code: 'DLCP™',
    title: 'DIAMON Leadership Communication Programme™',
    tagline: 'Shared communication architecture for leadership teams',
    duration: '6–12 months — team and individual format',
    audience: 'Leadership teams, executive committees, senior management groups',
    desc: 'A structured programme that builds shared communication capability across a leadership team. Combines team-level architecture work with individual ICA development — creating a communication-capable leadership layer that operates with alignment, precision and shared language.',
    structure: [
      'Team communication audit and baseline',
      'Shared narrative and communication architecture',
      'Individual ICA development for all participants',
      'Interaction and alignment workshops',
      'High-stakes communication preparation',
      'Collective progress review and forward programme',
    ],
    outcomes: 'A leadership team that communicates with shared architecture, consistent presence and strategic alignment — internally and externally.',
    highlight: false,
  },
  {
    id: '03',
    code: 'DCPL™',
    title: 'DIAMON Communication Performance Lab™',
    tagline: 'High-pressure communication performance training',
    duration: '1–3 days — intensive format',
    audience: 'Leaders and spokespersons preparing for high-stakes moments',
    desc: 'Intensive, structured communication performance preparation for the moments where performance counts most. Capital markets days, investor days, media campaigns, board-level presentations, crisis communication. The Lab combines pressure simulation, real-situation rehearsal and ICA-based coaching.',
    structure: [
      'Pre-Lab communication audit and objective setting',
      'Message and narrative architecture workshop',
      'Pressure simulation and coaching — live format',
      'Media and Q&A interaction performance',
      'Individual and collective feedback sessions',
      'Post-Lab debrief and forward recommendations',
    ],
    outcomes: 'A leadership team or spokesperson who performs with precision, authority and composure when the stakes are highest.',
    highlight: false,
  },
  {
    id: '04',
    code: 'DICA™',
    title: 'DIAMON ICA Academy™',
    tagline: 'Scalable communication capability across the organisation',
    duration: 'Ongoing — modular design',
    audience: 'Organisations building long-term communication capability at scale',
    desc: 'A scalable, modular programme that brings the DIAMON ICA Framework™ into an organisation as a systematic development system. Designed for organisations who want communication capability to become a core organisational competency — not a one-off initiative.',
    structure: [
      'ICA Framework introduction and organisational assessment',
      'Modular development programme across leadership layers',
      'Internal ICA facilitator development',
      'Communication capability tracking and measurement',
      'Ongoing coaching, support and content system',
      'Annual review and programme evolution',
    ],
    outcomes: 'Communication capability embedded as organisational infrastructure — measurable, scalable and continuously developing.',
    highlight: false,
  },
]

export default function ExecutiveProgrammesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
            Executive Programmes
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}
          >
            Development journeys,
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> not training events.</span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '560px' }}
          >
            Four flagship programmes built on the DIAMON ICA Framework™. Structured for executives, leadership teams and organisations who are serious about long-term communication performance.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>
            Discuss a programme
          </Link>
        </div>
      </section>

      {/* Programme overview strip */}
      <section style={{ backgroundColor: '#ECEAE6', borderBottom: '1px solid var(--color-border)' }}>
        <div className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: 'var(--color-border)' }}>
          {programmes.map((p) => (
            <div key={p.id} className="px-6 py-4" style={{ backgroundColor: '#ECEAE6' }}>
              <p className="text-xs tracking-widest mb-1" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{p.code}</p>
              <p className="text-xs font-light" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.4 }}>{p.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes */}
      {programmes.map((p, idx) => (
        <div key={p.id}>
          <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid md:grid-cols-3 gap-16">
              {/* Left: title block */}
              <div className="md:col-span-1">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{p.id}</span>
                  <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{p.code}</span>
                </div>
                <h2
                  className="text-2xl md:text-3xl font-light mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
                >
                  {p.title}
                </h2>
                <p className="text-sm italic mb-6" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>
                  {p.tagline}
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  <div>
                    <span className="text-xs tracking-widest uppercase block mb-1" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Duration</span>
                    <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{p.duration}</span>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase block mb-1 mt-3" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Audience</span>
                    <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{p.audience}</span>
                  </div>
                </div>
                <Link href="/contact" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Enquire about this programme →
                </Link>
              </div>

              {/* Middle: description + outcomes */}
              <div className="md:col-span-1">
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {p.desc}
                </p>
                <div style={{ borderLeft: '2px solid var(--color-blue)', paddingLeft: '16px' }}>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Outcome</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
                    {p.outcomes}
                  </p>
                </div>
              </div>

              {/* Right: programme structure */}
              <div className="md:col-span-1">
                <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
                  <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Programme structure</span>
                  </div>
                  {p.structure.map((item, i) => (
                    <div key={item} className="flex items-start gap-4 px-6 py-3" style={{ backgroundColor: 'var(--color-background)' }}>
                      <span className="text-xs shrink-0 mt-0.5" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {idx < programmes.length - 1 && (
            <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
            </div>
          )}
        </div>
      ))}

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA Foundation */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              The foundation
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Every programme is built on the DIAMON ICA Framework™
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The ICA Framework is the proprietary methodology at the centre of all DIAMON development work. It provides a common language, a consistent development structure and a measurable progress model — across all programmes, all levels and all contexts.
            </p>
            <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Explore the ICA Framework →
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { label: 'ICA I — Identity', model: 'DCI™', desc: 'Communication identity, credibility, authenticity and professional presence.' },
              { label: 'ICA II — Composition', model: 'TNT™', desc: 'State, narrative, structure — how impactful communication is intentionally designed.' },
              { label: 'ICA III — Action', model: 'K3™', desc: 'Body, focus, language — communication performance in real situations under pressure.' },
            ].map(({ label, model, desc }) => (
              <div key={label} className="px-7 py-6 flex flex-col gap-2" style={{ backgroundColor: 'var(--color-background)' }}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{label}</span>
                  <span className="text-xs" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{model}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '500px' }}>
              The right programme starts with the right conversation.
            </h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>
              We define the scope and objective before we propose anything.
            </p>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>
            Discuss a programme
          </Link>
        </div>
      </section>
    </>
  )
}
