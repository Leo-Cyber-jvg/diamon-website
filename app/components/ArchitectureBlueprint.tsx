import Link from 'next/link'

const pathway = [
  {
    stage: '01',
    title: 'Personal Impact',
    driver: 'Identity & Presence',
    unlocks: 'Trust, credibility, authority',
    description: 'A leader\'s communication begins with who they are. Before strategy, before structure — there is presence. How you hold a room before you speak.',
  },
  {
    stage: '02',
    title: 'Leadership Communication',
    driver: 'Narrative & Structure',
    unlocks: 'Clarity, alignment, influence',
    description: 'Communication that is intentionally composed — not improvised. Narrative that moves people. Structure that makes complex ideas land.',
  },
  {
    stage: '03',
    title: 'Organisational Interaction',
    driver: 'Team & Culture',
    unlocks: 'Collaboration, psychological safety',
    description: 'Leadership communication that shapes how teams interact, how decisions get made, and how organizations hold together under pressure.',
  },
  {
    stage: '04',
    title: 'Business Impact',
    driver: 'Capability & Performance',
    unlocks: 'Decisions, change execution, results',
    description: 'Communication capability as organizational infrastructure. The difference between a strategy that lands and one that stalls.',
  },
]

const icaLevels = [
  {
    id: 'ICA I',
    model: 'DCI™',
    name: 'Identity',
    question: 'Who are you as a communicator?',
    body: 'The Dual Communicational Identity™ model. Communication identity, credibility, trust and the foundation that everything else is built on.',
  },
  {
    id: 'ICA II',
    model: 'TNT™',
    name: 'Composition',
    question: 'How is your communication constructed?',
    body: 'State. Narrative. Structure. How high-performance communication is intentionally architected before it is delivered.',
  },
  {
    id: 'ICA III',
    model: 'K3™',
    name: 'Action',
    question: 'How does it perform under real conditions?',
    body: 'Body. Focus. Language. Where presence is built, pressure is managed, and communication becomes a repeatable capability.',
  },
]

const wayForward = [
  {
    step: 'Assess',
    description: 'Map current communication capability at individual, leadership team and organisational level. Identify the gaps between expertise and impact.',
  },
  {
    step: 'Architect',
    description: 'Design a structured development pathway grounded in the DIAMON ICA Framework™. Every engagement begins with a precise definition of what needs to change.',
  },
  {
    step: 'Develop',
    description: 'Build capability through structured programmes, executive coaching, facilitated practice and behavioural development. Human-led. Practically grounded.',
  },
  {
    step: 'Embed',
    description: 'Integrate communication capability into leadership practices, team interaction and organisational culture. Development that outlasts the programme.',
  },
  {
    step: 'Amplify',
    description: 'AI-supported reflection, practice, feedback and reinforcement accelerates development between human-led sessions. A multiplier — not a replacement.',
  },
]

// Compact homepage version
export function BlueprintHomepageSection() {
  return (
    <section style={{ backgroundColor: 'var(--color-blue)' }}>
      <div className="px-6 py-24 mx-auto" style={{ maxWidth: '1200px' }}>

        {/* Header */}
        <div className="mb-16" style={{ maxWidth: '700px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            The DIAMON Architecture of Influence&#x2122;
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.1 }}
          >
            From personal presence to organisational impact.
          </h2>
          <p
            className="text-base font-light"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
          >
            Communication is not a soft skill. It is organisational infrastructure.
            The DIAMON Architecture of Influence&#x2122; maps the structured path
            from individual communication capability to measurable business performance.
          </p>
        </div>

        {/* Pathway */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-px" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
          {pathway.map((p, i) => (
            <div
              key={p.stage}
              className="p-6 flex flex-col gap-3"
              style={{ backgroundColor: 'var(--color-blue)' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-xs tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
                >
                  {p.stage}
                </span>
                {i < pathway.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>→</span>
                )}
              </div>
              <h3
                className="text-lg font-light"
                style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.2 }}
              >
                {p.title}
              </h3>
              <p
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
              >
                {p.unlocks}
              </p>
            </div>
          ))}
        </div>

        {/* ICA Engine bar */}
        <div
          className="px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between mb-16"
          style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
          >
            Powered by the DIAMON ICA Framework&#x2122;
          </p>
          <div className="flex gap-6">
            {icaLevels.map(level => (
              <span
                key={level.id}
                className="text-xs"
                style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
              >
                {level.name} / {level.model}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p
            className="text-lg font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'rgba(255,255,255,0.85)', maxWidth: '480px', lineHeight: 1.4 }}
          >
            The communication capability of your leaders determines the performance of your organisation.
          </p>
          <Link href="/blueprint" className="btn-outline-white shrink-0">
            Explore the Blueprint
          </Link>
        </div>
      </div>
    </section>
  )
}

// Full blueprint page component
export function BlueprintFull() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
        >
          The DIAMON Architecture of Influence&#x2122;
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
            lineHeight: 1.05,
            maxWidth: '860px',
          }}
        >
          A capability system that builds communication from personal presence
          <span style={{ color: 'var(--color-blue)', fontStyle: 'italic' }}> into organisational impact.</span>
        </h1>
        <p
          className="text-lg font-light"
          style={{
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.8,
            maxWidth: '640px',
          }}
        >
          Most organisations underperform because their leaders cannot communicate
          at the level of their strategy. The Architecture of Influence&#x2122; is
          DIAMON's structured methodology for closing that gap — systematically,
          measurably, and permanently.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* The core insight */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
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
              Communication is not a soft skill. It is organisational infrastructure.
            </h2>
          </div>
          <div className="flex flex-col gap-4 pt-2 md:pt-10">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              When leaders communicate with clarity, authority and intention, decisions happen faster,
              alignment comes more naturally, change gets adopted, and trust compounds across the organisation.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              When they don't, none of that happens — and because the cost is invisible, it never gets fixed.
              The Architecture of Influence makes that invisible cost visible, and provides a structured path
              to building communication capability as a strategic asset.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Transformation pathway — full */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          The transformation pathway
        </p>
        <div className="grid md:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {pathway.map((p) => (
            <div
              key={p.stage}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {p.stage}
              </span>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
              >
                {p.title}
              </h3>
              <p
                className="text-xs tracking-wide uppercase"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                {p.driver}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {p.description}
              </p>
              <div
                className="mt-auto pt-4"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <p className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  Unlocks: <span style={{ color: 'var(--color-text)' }}>{p.unlocks}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA Framework */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            The engine
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            The DIAMON ICA Framework&#x2122;
          </h2>
          <p
            className="text-sm mt-4"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '540px', lineHeight: 1.8 }}
          >
            Three integrated levels that together constitute a complete communication development system.
            Not a collection of techniques — a coherent architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {icaLevels.map((level) => (
            <div
              key={level.id}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <div className="flex items-baseline gap-3">
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
                  {level.model}
                </span>
              </div>
              <h3
                className="text-2xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
              >
                {level.name}
              </h3>
              <p
                className="text-sm italic"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}
              >
                {level.question}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {level.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Way Forward */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            The Way Forward
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
          >
            Five stages. One continuous development system.
          </h2>
        </div>

        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {wayForward.map((w, i) => (
            <div
              key={w.step}
              className="flex flex-col md:flex-row gap-6 md:gap-12 px-8 py-7"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <div className="flex items-start gap-4 md:w-48 shrink-0">
                <span
                  className="text-xs tracking-widest mt-0.5"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                >
                  0{i + 1}
                </span>
                <h3
                  className="text-xl font-light"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)' }}
                >
                  {w.step}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

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
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', maxWidth: '520px', lineHeight: 1.3 }}
        >
          Ready to build communication capability as a strategic asset in your organisation?
        </h2>
        <Link href="/contact" className="btn-primary shrink-0">
          Start the conversation
        </Link>
      </section>
    </>
  )
}
