import Link from 'next/link'
import { BlueprintHomepageSection } from './components/ArchitectureBlueprint'
import InfluenceCompass from './components/InfluenceCompass'

const services = [
  {
    code: 'Impact Session',
    name: 'High-Stakes Communication Preparation',
    for: 'Leaders, executives and experts preparing for a defining moment',
    benefit: 'Walk into the room ready. Clear message, controlled delivery, no surprises.',
    href: '/executive-programmes',
    duration: 'Intensive · 1 day',
  },
  {
    code: 'Annual Leadership Program',
    name: 'Leadership Communication Architecture',
    for: 'Executives and senior leaders who want systematic, long-term capability',
    benefit: 'Communication capability that scales with your role — built, not trained.',
    href: '/executive-programmes',
    duration: 'Structured · 12 months',
  },
  {
    code: 'Thought Leader Studio',
    name: 'Thought Leadership Development',
    for: 'Founders, experts and executives building a visible strategic voice',
    benefit: 'A distinctive point of view, expressed with authority and consistency.',
    href: '/executive-programmes',
    duration: 'Ongoing · Strategic',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ backgroundColor: 'var(--color-blue)', minHeight: '92vh' }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1200px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Diamon Finland
          </p>

          <h1
            className="font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              lineHeight: 1.0,
              maxWidth: '900px',
              letterSpacing: '-0.01em',
            }}
          >
            Redesigning<br />
            leadership communication,<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>rewiring leadership skills.</span>
          </h1>

          <p
            className="mb-12 font-light"
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              maxWidth: '500px',
              fontSize: '1rem',
            }}
          >
            We build communication capability for leaders, executive teams and organisations —
            systematically, measurably, and for the long term.
          </p>

          <Link
            href="/contact"
            className="btn-primary"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Book a conversation
          </Link>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              What we do
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Communication architecture for leaders in an era that demands human clarity.
            </h2>
          </div>
          <div className="flex flex-col gap-5 pt-2 md:pt-10">
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.85, fontSize: '0.9rem' }}>
              Diamon Finland is a leadership communication capability company.
              We work with executives, senior leaders, and organisations whose communication
              must operate at the level of their actual ambition.
            </p>
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.85, fontSize: '0.9rem' }}>
              The work is grounded in performance psychology, structural narrative theory,
              and two decades of professional performance practice — not presentation skills training.
              Communication architecture.
            </p>
            <Link href="/about" className="link-blue text-sm self-start" style={{ fontFamily: 'var(--font-body)' }}>
              About Leo Sjöman and Diamon &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── LEO SJÖMAN ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '580px' }}>
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman — Founder, Diamon Finland"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
          </div>
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Founder
            </p>
            <h2
              className="font-light mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Leo Sjöman
            </h2>
            <p
              className="mb-8 text-sm"
              style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}
            >
              Diamon Finland
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Leo Sjöman is an actor, entrepreneur, and leadership communication coach who works with
              leaders, experts, and teams on developing more effective communication, public speaking,
              and interpersonal skills.
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              In his work, he combines strategic communication, business acumen, and over 20 years of
              experience performing in theatre, television, and film. He is known for creating a trusting,
              direct, and goal-oriented working atmosphere — where the lessons learned are applied
              concretely to everyday leadership and interpersonal situations.
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Leo has coached leaders ranging from medium-sized family businesses to international
              organisations and the executive leadership of large corporations. He holds a Master of Arts
              in Theatre Arts (University of the Arts Helsinki) and is the founder of the production
              company Hoka Films.
            </p>
            <Link href="/about" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              About Leo and Diamon &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── ARCHITECTURE OF INFLUENCE ── */}
      <InfluenceCompass />

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── SERVICES ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Services
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
            >
              Development that drives<br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>real impact.</span>
            </h2>
          </div>
          <Link
            href="/executive-programmes"
            className="link-blue text-sm self-start md:self-auto"
            style={{ fontFamily: 'var(--font-body)', flexShrink: 0 }}
          >
            All programmes &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {services.map((s) => (
            <div
              key={s.code}
              className="p-8 flex flex-col gap-5"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
                >
                  {s.code}
                </p>
                <h3
                  className="text-xl font-light"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.25 }}
                >
                  {s.name}
                </h3>
              </div>

              <p
                className="text-xs"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}
              >
                {s.duration}
              </p>

              <div
                style={{ height: '1px', backgroundColor: 'var(--color-border)' }}
              />

              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                <span style={{ fontWeight: 500, color: 'var(--color-text)' }}>For: </span>
                {s.for}
              </p>

              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
              >
                {s.benefit}
              </p>

              <Link
                href={s.href}
                className="link-blue text-sm mt-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Explore &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── APPROACH ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Our approach
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
            >
              The DIAMON ICA Framework™
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              A professional performer does not think about how they look.
              They think about what they want to create in another person.
              That is where the ICA Framework was born — from two decades of
              professional performance practice, not from consulting.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Three integrated levels — Identity, Composition, Action — applied
              to leadership communication systematically and measurably.
            </p>
            <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Explore the framework &rarr;
            </Link>
          </div>

          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { id: 'ICA I', name: 'Identity', desc: 'Who you are as a communicator. How you build credibility, hold presence, and establish trust before you speak.' },
              { id: 'ICA II', name: 'Composition', desc: 'How impactful communication is intentionally built — state, narrative, structure — before you open your mouth.' },
              { id: 'ICA III', name: 'Action', desc: 'How communication is executed under pressure, in real situations, with real stakes. Physicality, focus, language.' },
            ].map((level) => (
              <div
                key={level.id}
                className="p-6 flex gap-6 items-start"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <span
                  className="text-xs tracking-widest pt-0.5 shrink-0"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', minWidth: '44px' }}
                >
                  {level.id}
                </span>
                <div>
                  <p
                    className="text-base font-light mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: '1.1rem' }}
                  >
                    {level.name}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    {level.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATHWAY / TRUST ── */}
      <BlueprintHomepageSection />

      {/* ── SOCIAL PROOF ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Results
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '600px' }}
          >
            How Diamon coaching strengthens<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>leadership communication.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px mb-16" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { stat: '100%', label: 'reported an improvement in their leadership communication.' },
            { stat: '100%', label: 'gained a deeper understanding of their own behaviour in communication and performance situations.' },
            { stat: '100%', label: 'reported stronger capacity to perform under pressure in demanding communication situations.' },
          ].map((s) => (
            <div
              key={s.label}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-blue)',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 300,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.stat}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-10 md:p-14"
          style={{ backgroundColor: 'var(--color-surface)', borderLeft: '3px solid var(--color-blue)' }}
        >
          <blockquote
            className="text-xl md:text-2xl font-light mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.4, fontStyle: 'italic', maxWidth: '820px' }}
          >
            &ldquo;Presentation skill is a master key to leadership and influence. DIAMON has uniquely high-level expertise in developing performance, presence and communication. Their personal coaching concept truly works.&rdquo;
          </blockquote>
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Tuomas Liisanantti &mdash; Marketing Director, SDM
          </p>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── FINAL CTA ── */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ maxWidth: '560px' }}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
            >
              Next step
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              The right conversation starts with a question.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Describe the challenge or the outcome you are working toward.
              The first conversation is a diagnostic — not a sales process.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/contact"
              className="btn-primary"
              style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
            >
              Book a conversation
            </Link>
            <Link
              href="/executive-programmes"
              className="btn-outline-white"
            >
              View programmes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
