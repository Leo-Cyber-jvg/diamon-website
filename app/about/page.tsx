import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About DIAMON — Leadership Communication Architecture',
  description:
    'DIAMON Finland is a leadership communication architecture company. We develop communication capability that drives clarity, trust, influence and organisational performance.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO — DIAMON first ─────────────────────────────── */}
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
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: '860px',
            }}
          >
            Leadership communication
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> is not a soft skill.</span>
            {' '}It is the infrastructure of organisational performance.
          </h1>
          <p
            className="text-lg md:text-xl font-light"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              maxWidth: '640px',
            }}
          >
            DIAMON Finland develops communication capability that operates at the level
            of your leadership — from individual executive presence to organisation-wide
            influence and alignment.
          </p>
        </div>
      </section>

      {/* ── 2. THE DIAMON APPROACH ────────────────────────────────── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              The DIAMON approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-blue)',
                lineHeight: 1.2,
              }}
            >
              Communication capability is built. Not trained. Not coached. Built.
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Most communication development focuses on tactics — how to structure a
              presentation, how to speak with confidence, how to handle a difficult
              conversation. These are useful. But they are not architecture.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              DIAMON works differently. We start from a diagnostic question: where
              does communication capability currently limit leadership effectiveness,
              team performance or organisational results? That question determines
              the architecture of everything that follows.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              The work integrates three levels — personal identity, strategic
              composition and practical performance — into one coherent system.
              The result is communication capability that holds under pressure,
              at scale, and over time.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── 3. FOUR PRINCIPLES ───────────────────────────────────── */}
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
              title: 'Communication as leadership capability',
              body: 'The ability to create clarity, trust and alignment is not separate from leadership effectiveness — it is central to it. Leaders who communicate with precision and authority operate at a different level than those who do not.',
            },
            {
              number: '02',
              title: 'Communication as organisational performance',
              body: 'Poor communication is not a people problem. It is a performance problem. Misalignment, lost trust, slow decision-making and failed strategy execution all trace back to communication gaps at leadership level.',
            },
            {
              number: '03',
              title: 'Communication as influence, trust and alignment',
              body: 'Real influence is not about persuasion techniques. It is the capacity to create genuine understanding across stakeholders, teams and organisations — consistently, under pressure and at scale.',
            },
            {
              number: '04',
              title: 'Long-term capability over one-off training',
              body: 'A two-day seminar does not change how a leader communicates in a board meeting six months later. DIAMON designs structured development pathways that build capability into practice — not just knowledge into memory.',
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

      {/* ── 4. ICA FRAMEWORK — centrepiece ───────────────────────── */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: '#F4F3F1' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                The methodology
              </p>
              <h2
                className="text-3xl md:text-4xl font-light"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-blue)',
                  lineHeight: 1.2,
                }}
              >
                The DIAMON ICA Framework™
              </h2>
              <p
                className="text-sm leading-relaxed mt-6"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                Identity → Composition → Action. Three integrated levels that form
                a single, coherent architecture for leadership communication development.
                From who you are as a communicator, to how you construct your message,
                to how you perform under pressure — the ICA Framework builds capability
                at every level.
              </p>
              <Link
                href="/framework"
                className="link-blue text-sm mt-6 inline-block"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Explore the full framework &rarr;
              </Link>
            </div>
            <div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                The framework was developed by Leo Sjöman over more than twenty years
                of professional performance, human behaviour research and leadership
                communication practice. It draws on performance psychology, structural
                narrative theory, and the direct experience of communicating under
                the highest pressure — in front of live audiences, cameras and
                executive rooms.
              </p>
              <p
                className="text-sm leading-relaxed mt-4"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                The ICA Framework has been applied across executive development,
                leadership team programmes and organisation-wide communication
                capability initiatives.
              </p>
            </div>
          </div>

          {/* ICA three-level visual */}
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              {
                level: 'ICA I',
                model: 'DCI™',
                name: 'Identity',
                description:
                  'The Dual Communicational Identity™ model. Who you are as a communicator, how you build credibility, and how you hold presence in high-stakes situations. Communication identity is the foundation everything else is built on.',
                pillars: ['Communicational self-awareness', 'Credibility architecture', 'Presence under pressure'],
              },
              {
                level: 'ICA II',
                model: 'TNT™',
                name: 'Composition',
                description:
                  'State, Narrative, Structure. How impactful leadership communication is intentionally designed — before you open your mouth. Strategic composition is the difference between content that is heard and content that creates change.',
                pillars: ['State architecture', 'Narrative construction', 'Structural sequencing'],
              },
              {
                level: 'ICA III',
                model: 'K3™',
                name: 'Action',
                description:
                  'Body, Focus, Language. How communication is executed in real situations, under real pressure, with real stakeholders. Performance capability is where identity and composition meet reality.',
                pillars: ['Physical presence', 'Attentional focus', 'Language precision'],
              },
            ].map(({ level, model, name, description, pillars }) => (
              <div
                key={level}
                className="p-8 flex flex-col gap-5"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
                  >
                    {level}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                  >
                    {model}
                  </span>
                </div>
                <h3
                  className="text-2xl font-light"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
                >
                  {name}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {description}
                </p>
                <ul className="flex flex-col gap-2 mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  {pillars.map((p) => (
                    <li
                      key={p}
                      className="text-xs flex items-start gap-2"
                      style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                    >
                      <span style={{ color: 'var(--color-blue)', marginTop: '2px' }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ICA arrow pathway */}
          <div
            className="mt-px grid grid-cols-3 gap-px"
            style={{ backgroundColor: 'var(--color-border)' }}
          >
            {['Identity', 'Composition', 'Action'].map((stage, i) => (
              <div
                key={stage}
                className="py-4 px-8 flex items-center gap-3"
                style={{ backgroundColor: 'var(--color-blue)' }}
              >
                <span
                  className="text-white text-sm font-light"
                  style={{ fontFamily: 'var(--font-heading)', opacity: 0.9 }}
                >
                  {stage}
                </span>
                {i < 2 && (
                  <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: 'auto' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── 5. FOUNDER — Leo last ────────────────────────────────── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-16"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          The founder
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — photo, clean, no overlay */}
          <div>
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman — Founder, DIAMON Finland"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            {/* Caption below image */}
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
                Founder, DIAMON Finland
              </span>
            </div>
          </div>

          {/* Right — bio */}
          <div className="flex flex-col gap-8">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text)',
                lineHeight: 1.2,
              }}
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
                leadership teams and organisations across the Nordic region to build
                the communication capability that drives clarity, trust, influence and
                business performance.
              </p>
              <p>
                Leo is also a professional actor with more than twenty years of
                experience in film, television and theatre. That background is not
                a footnote — it is the foundation of the framework. The craft of
                acting demands a deep, practical understanding of human behaviour,
                presence, storytelling, emotional intelligence and performance under
                pressure. It is precisely this understanding — applied to leadership
                and organisational contexts — that makes DIAMON's approach
                distinctively effective.
              </p>
              <p>
                Where most communication development programmes work from the outside
                in — adjusting behaviour, adding techniques — DIAMON works from the
                inside out. Identity before technique. Architecture before delivery.
                This perspective comes directly from decades of professional
                performance practice at the highest level.
              </p>
              <p>
                Leo creates development environments where insight transfers directly
                into real leadership behaviour — not through theory, but through
                applied work that mirrors the conditions in which leaders actually operate.
              </p>
            </div>

            {/* Credential strip */}
            <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
              {[
                { label: 'Primary role', value: 'Founder, DIAMON Finland' },
                { label: 'Expertise', value: 'Leadership communication, executive presence, organisational influence' },
                { label: 'Framework', value: 'DIAMON ICA Framework™ — Identity, Composition, Action' },
                { label: 'Background', value: 'Professional actor — film, television, theatre (20+ years)' },
                { label: 'Clients', value: 'Executives, leadership teams, organisations, athletes' },
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

      {/* ── 6. CTA ───────────────────────────────────────────────── */}
      <section
        className="px-6 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2
          className="text-2xl md:text-3xl font-light"
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text)',
            maxWidth: '560px',
            lineHeight: 1.3,
          }}
        >
          Ready to build communication capability that operates at the level of your leadership?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/contact" className="btn-primary">
            Get in touch
          </Link>
          <Link href="/framework" className="btn-outline">
            Explore the framework
          </Link>
        </div>
      </section>
    </>
  )
}
