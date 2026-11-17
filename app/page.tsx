import Link from 'next/link'
import InfluenceCompass from './components/InfluenceCompass'

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
            Start a conversation
          </Link>
        </div>
      </section>

      <InfluenceCompass />

      {/* ── WHO WE SERVE ── */}
      <section>
        <div className="px-6 pt-20 pb-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Who we work with
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '640px' }}
          >
            Development for organisations<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>and individual leaders.</span>
          </h2>
        </div>

        {/* Aker-style full-bleed two-panel CTA grid */}
        <div className="grid md:grid-cols-2" style={{ gap: '3px', backgroundColor: 'var(--color-border)' }}>
          {/* For Organizations */}
          <div
            className="relative flex flex-col justify-end"
            style={{ minHeight: '520px', overflow: 'hidden' }}
          >
            <img
              src="/cta-organizations.jpg"
              alt="Leadership communication for organisations"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.76) 0%, rgba(10,9,8,0.22) 50%, transparent 100%)' }} />
            <div className="relative p-10 md:p-14 flex flex-col gap-5" style={{ zIndex: 1 }}>
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: 'rgba(244,243,241,0.55)', fontFamily: 'var(--font-body)' }}
              >
                For Organizations
              </p>
              <h3
                className="text-2xl md:text-4xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: '#F4F3F1', lineHeight: 1.12, maxWidth: '20ch' }}
              >
                Leadership communication as an organisational capability.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(244,243,241,0.68)', fontFamily: 'var(--font-body)', maxWidth: '36ch' }}
              >
                Long-term development programmes for executive teams, senior leaders and organisations.
                Annual Leadership Program, tailored workshops and strategic communication consulting.
              </p>
              <Link
                href="/for-organisations"
                className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2"
                style={{ color: '#F4F3F1', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(244,243,241,0.3)', paddingBottom: '4px', width: 'fit-content' }}
              >
                For organizations &rarr;
              </Link>
            </div>
          </div>

          {/* For Individuals */}
          <div
            className="relative flex flex-col justify-end"
            style={{ minHeight: '520px', overflow: 'hidden' }}
          >
            <img
              src="/cta-individuals.jpg"
              alt="Personal coaching for individual leaders"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.76) 0%, rgba(10,9,8,0.22) 50%, transparent 100%)' }} />
            <div className="relative p-10 md:p-14 flex flex-col gap-5" style={{ zIndex: 1 }}>
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: 'rgba(244,243,241,0.55)', fontFamily: 'var(--font-body)' }}
              >
                For Individuals
              </p>
              <h3
                className="text-2xl md:text-4xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: '#F4F3F1', lineHeight: 1.12, maxWidth: '20ch' }}
              >
                Personal coaching for high-impact leadership presence.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(244,243,241,0.68)', fontFamily: 'var(--font-body)', maxWidth: '36ch' }}
              >
                Individual development for executives, founders and leaders in transition.
                Thought Leader Studio, Impact Session and ongoing executive coaching.
              </p>
              <Link
                href="/for-individuals"
                className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2"
                style={{ color: '#F4F3F1', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(244,243,241,0.3)', paddingBottom: '4px', width: 'fit-content' }}
              >
                For individuals &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── ICA FRAMEWORK ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Methodology
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}
            >
              The DIAMON ICA Framework™
            </h2>
          </div>
          <Link href="/framework" className="link-blue text-sm shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
            Explore the framework &rarr;
          </Link>
        </div>

        <p
          className="text-sm leading-relaxed mb-16"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '600px' }}
        >
          A structured development methodology grounded in performance psychology and two decades of
          professional performance practice. Three integrated levels — applied systematically to real leadership situations.
        </p>

        {/* ICA three circles */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '0', position: 'relative', rowGap: '48px' }}
        >
          {/* Connecting line behind circles — desktop only */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '16.6%',
              right: '16.6%',
              top: '75px',
              height: '1px',
              backgroundColor: 'var(--color-border)',
            }}
          />

          {[
            {
              letter: 'I',
              label: 'Identity',
              desc: 'Leadership identity, self-awareness, personal presence and individual impact in communication.',
              bg: 'var(--color-background)',
              border: '1px solid var(--color-blue)',
              color: 'var(--color-text)',
            },
            {
              letter: 'C',
              label: 'Composition',
              desc: 'Building the message: purpose, focus, clarity and consideration of the recipient.',
              bg: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            },
            {
              letter: 'A',
              label: 'Action',
              desc: 'Concrete interaction, physicality, presence, listening and performance in real leadership situations.',
              bg: 'var(--color-blue)',
              border: 'none',
              color: '#fff',
            },
          ].map((item) => (
            <div
              key={item.letter}
              className="flex flex-col items-center text-center px-6"
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: item.border,
                  backgroundColor: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: item.color,
                    lineHeight: 1,
                  }}
                >
                  {item.letter}
                </span>
              </div>
              <p
                className="mt-5 text-sm font-medium tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)', letterSpacing: '0.3em' }}
              >
                {item.label}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', maxWidth: '240px' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── LEO SJÖMAN ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '580px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
              href="/for-organisations"
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
