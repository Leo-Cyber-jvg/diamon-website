import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'For Organisations — DIAMON Finland',
  description:
    'Leadership communication capability for executive teams, leadership teams and organisations. Build communication as strategic infrastructure — not a training event.',
}

const challenges = [
  { n: '01', title: 'Strategy that does not land', body: 'The strategy is clear at the top. By the time it reaches the organisation, it has lost its precision, urgency and direction. The gap is not in the strategy — it is in the communication architecture.' },
  { n: '02', title: 'Leadership teams that do not align', body: 'Each leader communicates their own version. The result is fragmentation, confusion and competing narratives. Communication alignment is a leadership capability — not a communication department function.' },
  { n: '03', title: 'Expertise that does not convert to credibility', body: 'Senior experts and specialists know more than anyone in the room. But their ability to communicate that expertise — to investors, boards, clients, media — often does not match the depth of their knowledge.' },
  { n: '04', title: 'Change communication that fails', body: 'Most change initiatives fail not because of the change itself, but because of how it is communicated. The structure, timing, framing and leadership communication behind the change determines whether people follow.' },
  { n: '05', title: 'High-stakes moments without preparation', body: 'Capital markets days, investor presentations, media appearances, board meetings, town halls. These moments define perception. Most organisations prepare the content and neglect the communication performance.' },
  { n: '06', title: 'Communication capability that does not scale', body: 'A great communicator at the top does not make a communication-capable organisation. Capability needs to be developed systematically, at the leadership layer, as organisational infrastructure.' },
]

const solutions = [
  {
    id: '01',
    title: 'Leadership Communication Architecture',
    audience: 'Executive teams, leadership teams',
    desc: 'A structured engagement that builds shared communication architecture across the leadership team. Aligned narrative, consistent presence, shared interaction capability. Communication as collective leadership infrastructure.',
    what: ['Organisational communication audit', 'Shared leadership narrative', 'ICA-based team capability development', 'Interaction and alignment workshops', 'Ongoing development and tracking'],
  },
  {
    id: '02',
    title: 'Executive Communication Development',
    audience: 'Individual executives within organisations',
    desc: 'Structured personal communication development for executives within an organisational context. Combines personal ICA development with organisational communication goals and strategic alignment.',
    what: ['Personal ICA baseline and profile', 'Executive presence and credibility', 'Stakeholder communication architecture', 'High-stakes communication preparation', 'Progress tracking and development reviews'],
  },
  {
    id: '03',
    title: 'Expert Communication Programme',
    audience: 'Senior experts, specialists, spokespersons',
    desc: 'For organisations with experts who must communicate complex knowledge with clarity, authority and impact — to boards, clients, media, investors or internal leadership. Turns expertise into credible, structured communication.',
    what: ['Expert communication profile', 'Clarity and structure methodology', 'Media and stakeholder preparation', 'Camera and digital communication', 'ICA Action — K3™ presence development'],
  },
  {
    id: '04',
    title: 'Change Communication Leadership',
    audience: 'Leadership teams navigating transformation',
    desc: 'Communication architecture for organisational change. We work with leadership teams to build the communication structure, narrative and capability that enables change to land — rather than stall or fracture.',
    what: ['Change communication strategy', 'Leadership narrative architecture', 'Internal communication design', 'Leadership communication coaching', 'Communication measurement and adjustment'],
  },
  {
    id: '05',
    title: 'Communication Performance Lab',
    audience: 'Leadership teams and key spokespersons',
    desc: 'High-pressure communication performance training. Designed for organisations preparing for capital markets days, investor days, board-level performance, media events or critical stakeholder presentations.',
    what: ['Real-situation pressure simulation', 'Message architecture under pressure', 'Spokesperson and leadership preparation', 'Media interaction and Q&A training', 'Post-performance review and development'],
  },
  {
    id: '06',
    title: 'ICA Capability Programme',
    audience: 'Organisations building long-term communication capability',
    desc: 'A scalable, structured programme that builds ICA-based communication capability across the leadership layer of an organisation. Designed for long-term impact rather than one-off development.',
    what: ['ICA Framework rollout across leadership', 'Structured development programme design', 'Progress measurement and tracking', 'Internal communication culture development', 'Scalable coaching and support system'],
  },
]

export default function ForOrganisationsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24 flex flex-col justify-center"
        style={{ backgroundColor: 'var(--color-blue)', minHeight: '70vh' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
            For Organisations
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '860px' }}
          >
            Organisations communicate at the level of
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> their leadership layer.</span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '580px' }}
          >
            We build communication capability as organisational infrastructure — systematically, across the leadership layer, built to last.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>
              Start a conversation
            </Link>
            <Link href="/framework" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>
              The ICA Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Where communication fails organisations
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {challenges.map(({ n, title, body }) => (
            <div key={n} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
              <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Positioning statement */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Our approach
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Communication capability is not a soft skill.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> It is infrastructure.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON builds communication capability as organisational infrastructure — not as isolated training events. Every engagement is grounded in the DIAMON ICA Framework™ and designed for measurable, long-term impact.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              We do not begin work without a precise definition of what needs to change, at what level, and what it will mean for the organisation when it does.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Systematic, not episodic', body: 'Communication development that builds over time — not a workshop that fades within weeks.' },
              { title: 'Leadership-layer focus', body: 'The capability that matters most lives at the leadership layer. That is where we work.' },
              { title: 'Measurable outcomes', body: 'Every engagement is designed around a defined outcome. We track progress against it.' },
              { title: 'Built on the ICA Framework™', body: 'A proven, proprietary methodology — not a generic communication model adapted from a training catalogue.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ borderLeft: '2px solid var(--color-blue)', paddingLeft: '20px' }}>
                <h3 className="text-base font-light mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Solutions */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Organisational solutions
        </p>
        <h2 className="text-3xl font-light mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '560px' }}>
          Structured for the challenge. Designed for the long term.
        </h2>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {solutions.map((s) => (
            <div key={s.id} className="grid md:grid-cols-3 gap-0" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs tracking-widest block mb-3" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{s.id}</span>
                <h3 className="text-xl font-light mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>{s.title}</h3>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{s.audience}</span>
              </div>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{s.desc}</p>
              </div>
              <div className="px-8 py-8">
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>What this covers</p>
                <div className="flex flex-col gap-2">
                  {s.what.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
              Every engagement starts with the right question.
            </h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>
              What needs to change — and what will it mean when it does?
            </p>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
