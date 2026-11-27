import Link from 'next/link'
import type { Metadata } from 'next'
import InfluenceCompass from '../components/InfluenceCompass'

export const metadata: Metadata = {
  title: 'DIAMON Finland — Leadership Communication',
  description: 'DIAMON builds communication capability for leaders, leadership teams and organisations. ICA Framework™, Identity, Composition, Action.',
}

export default function EnHome() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', minHeight: '92vh' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coaching-series-bg.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'brightness(0.4) saturate(0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.35) 100%)' }} />
        <div className="mx-auto w-full" style={{ maxWidth: '1200px', position: 'relative', zIndex: 1 }}>
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
            Transforming<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>leadership communication,<br />changing the way people lead.</span>
          </h1>
          <p
            className="mb-12 font-light"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', lineHeight: 1.75, maxWidth: '500px', fontSize: '1rem' }}
          >
            Purposeful communication and presence coaching for leaders and organisations.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)', flexShrink: 0 }}>
              Start a conversation
            </Link>

            {/* What's On box */}
            <Link
              href="/coaching-series"
              style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', gap: '4px', border: '1px solid rgba(255,255,255,0.25)', padding: '12px 20px', backgroundColor: 'rgba(255,255,255,0.07)' }}
            >
              <p style={{ margin: 0, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
                What&apos;s on · Coaching Series
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>
                Leadership Impact &amp; Performance →
              </p>
            </Link>
          </div>
        </div>
      </section>

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
            className="text-3xl md:text-4xl font-normal"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '640px' }}
          >
            Development for organisations<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>and individual leaders.</span>
          </h2>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid md:grid-cols-2" style={{ gap: '3px', backgroundColor: 'var(--color-border)' }}>
            {/* For Organisations */}
            <div className="relative flex flex-col justify-end" style={{ minHeight: '520px', overflow: 'hidden' }}>
              <img
                src="/cta-organizations.jpg"
                alt="Leadership communication for organisations"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.76) 0%, rgba(10,9,8,0.22) 50%, transparent 100%)' }} />
              <div className="relative p-10 md:p-14 flex flex-col gap-5" style={{ zIndex: 1 }}>
                <p className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(244,243,241,0.55)', fontFamily: 'var(--font-body)' }}>
                  For Organisations
                </p>
                <h3 className="text-2xl md:text-4xl font-normal" style={{ fontFamily: 'var(--font-heading)', color: '#F4F3F1', lineHeight: 1.12, maxWidth: '20ch' }}>
                  Leadership communication as an organisational capability.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,243,241,0.68)', fontFamily: 'var(--font-body)', maxWidth: '36ch' }}>
                  Long-term development programmes for leadership teams and organisations.
                  Annual Leadership Program, tailored workshops and strategic communication consulting.
                </p>
                <Link
                  href="/for-organisations"
                  className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2"
                  style={{ color: '#F4F3F1', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(244,243,241,0.3)', paddingBottom: '4px', width: 'fit-content' }}
                >
                  For Organisations &rarr;
                </Link>
              </div>
            </div>

            {/* For Individuals */}
            <div className="relative flex flex-col justify-end" style={{ minHeight: '520px', overflow: 'hidden' }}>
              <img
                src="/cta-individuals.jpg"
                alt="Personal coaching for leaders"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.76) 0%, rgba(10,9,8,0.22) 50%, transparent 100%)' }} />
              <div className="relative p-10 md:p-14 flex flex-col gap-5" style={{ zIndex: 1 }}>
                <p className="text-xs tracking-[0.25em] uppercase" style={{ color: 'rgba(244,243,241,0.55)', fontFamily: 'var(--font-body)' }}>
                  For Individuals
                </p>
                <h3 className="text-2xl md:text-4xl font-normal" style={{ fontFamily: 'var(--font-heading)', color: '#F4F3F1', lineHeight: 1.12, maxWidth: '20ch' }}>
                  Personal coaching for impactful leadership.
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,243,241,0.68)', fontFamily: 'var(--font-body)', maxWidth: '36ch' }}>
                  Individual coaching for executives, founders and leaders in transition.
                  Thought Leader Studio, Impact Session and ongoing leadership coaching.
                </p>
                <Link
                  href="/for-individuals"
                  className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2"
                  style={{ color: '#F4F3F1', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(244,243,241,0.3)', paddingBottom: '4px', width: 'fit-content' }}
                >
                  For Individuals &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ICA FRAMEWORK ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-normal" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}>
              The DIAMON ICA Framework™
            </h2>
          </div>
          <Link href="/framework" className="link-blue text-sm shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
            Explore the framework &rarr;
          </Link>
        </div>
        <p className="text-sm leading-relaxed mb-16" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '600px' }}>
          A leadership communication development methodology grounded in over 20 years of professional performance experience and practical coaching work. Its three areas form the foundation for developing purposeful communicative capacity.
        </p>
        {/* ICA three balls */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '0', position: 'relative', rowGap: '48px' }}
        >
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
              color: '#F4F3F1',
              logoFilter: 'none',
            },
            {
              letter: 'C',
              label: 'Composition',
              desc: 'Building the message: purpose, focus, clarity and consideration of the recipient.',
              bg: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: '#F4F3F1',
              logoFilter: 'saturate(0.25) opacity(0.55)',
            },
            {
              letter: 'A',
              label: 'Action',
              desc: 'Concrete interaction, physicality, presence, listening and performance in real leadership situations.',
              bg: 'var(--color-blue)',
              border: 'none',
              color: '#5656D6',
              logoFilter: 'brightness(0) invert(1)',
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
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/diamon-logo-02.png"
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: item.logoFilter,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '4.5rem',
                    fontWeight: 500,
                    color: item.color,
                    lineHeight: 1,
                    zIndex: 1,
                    transform: 'translateX(22.5%)',
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

      <InfluenceCompass />

      {/* ── WHAT'S ON ── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex items-baseline justify-between gap-6 mb-2">
          <p className="text-xs tracking-[0.28em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>What&apos;s on</p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 400, lineHeight: 1.15, color: 'var(--color-text)', margin: '0 0 48px' }}>Leadership Programme</h2>
        <div className="grid md:grid-cols-2" style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <div className="flex flex-col justify-between" style={{ position: 'relative', padding: '36px 40px', minHeight: '340px', overflow: 'hidden', backgroundColor: '#111010' }}>
            <img src="/speaker-blue.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', filter: 'brightness(0.45) saturate(0.6)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)', pointerEvents: 'none' }} />
            <p style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', margin: 0, position: 'relative', zIndex: 1 }}>Coaching series · Diamon Finland</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: 400, lineHeight: 1.12, color: '#F4F3F1', margin: '24px 0', position: 'relative', zIndex: 1 }}>
              Leadership Impact<br />and Performance.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', border: '1px solid rgba(244,243,241,0.15)', padding: '4px 10px', whiteSpace: 'nowrap' }}>01 · fri 22.1.2027</span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,241,0.65)', fontFamily: 'var(--font-body)' }}>Leo Sjöman × Antti Pennanen</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', border: '1px solid rgba(244,243,241,0.15)', padding: '4px 10px', whiteSpace: 'nowrap' }}>02 · fri 19.2.2027</span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,241,0.65)', fontFamily: 'var(--font-body)' }}>Leo Sjöman × Henri Tuomilehto</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center" style={{ backgroundColor: 'var(--color-background)', padding: '36px 40px', gap: '24px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', margin: 0 }}>Next session</p>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, lineHeight: 1.18, color: 'var(--color-text)', margin: 0 }}>
              Connection and leading <em style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>under pressure.</em>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'Date', value: 'Friday 22.1.2027 · 9–17' },
                { label: 'Location', value: 'Helsinki' },
                { label: 'Coaches', value: 'Leo Sjöman × Antti Pennanen' },
                { label: 'Group', value: '10 executives' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '10px', fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  <span style={{ color: 'var(--color-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '9px', minWidth: '56px', marginTop: '1px' }}>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div>
              <Link href="/coaching-series" style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(86,86,214,0.35)', paddingBottom: '3px', whiteSpace: 'nowrap', textDecoration: 'none', width: 'fit-content' }}>
                Read more and register →
              </Link>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>Upcoming in series</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--color-border)', padding: '5px 12px' }}>02 · Sleep &amp; recovery · fri 19.2.2027</span>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--color-border)', padding: '5px 12px' }}>More dates to be announced</span>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Results</p>
          <h2 className="text-3xl md:text-4xl font-normal" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '600px' }}>
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
            <div key={s.label} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.stat}</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{s.label}</p>
            </div>
          ))}
        </div>
        <div className="p-10 md:p-14" style={{ backgroundColor: 'var(--color-surface)', borderLeft: '3px solid var(--color-blue)' }}>
          <blockquote className="text-xl md:text-2xl font-normal mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.4, fontStyle: 'italic', maxWidth: '820px' }}>
            &ldquo;Presentation skill is a master key to leadership and influence. DIAMON has uniquely high-level expertise in developing performance, presence and communication. Their personal coaching concept truly works.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Tuomas Liisanantti &mdash; Marketing Director, SDM
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)', borderTop: '1px solid var(--color-border)' }}>
          {[
            'The coaching has advanced all the key goals I set for it, significantly.',
            'I can perform in presentation situations in a relaxed way and adapt my style to different moments and formats.',
            'I step into every interaction situation in business life with confidence.',
            'I can see and feel clear overall development. I also receive feedback on it.',
          ].map((q) => (
            <div key={q} className="p-8" style={{ backgroundColor: 'var(--color-background)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.5, margin: 0 }}>
                &ldquo;{q}&rdquo;
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ── CLIENTS / LOGO ROW ── */}
      <section style={{ backgroundColor: '#F4F3F1', padding: '64px 48px' }}>
        <p style={{ textAlign: 'center', fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#9E9890', marginBottom: '48px', fontFamily: 'var(--font-body)' }}>
          Clients
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', maxWidth: '860px', margin: '0 auto', width: '100%' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/referenssit/jaaekiekkoliitto-transparent.png" alt="Finnish Ice Hockey Association" style={{ height: '80px', width: 'auto', flexShrink: 0 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/referenssit/sdm.svg" alt="SDM" style={{ height: '44px', width: 'auto', flexShrink: 0 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/referenssit/westport.png" alt="Westport Finland" style={{ height: '30px', width: 'auto', flexShrink: 0, mixBlendMode: 'multiply' }} />
        </div>
      </section>

      {/* ── LEO SJÖMAN ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <p className="text-xs tracking-[0.28em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Founder</p>
        </div>
        <div className="grid md:grid-cols-2" style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <div className="h-64 md:h-auto md:min-h-[460px]" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/leo-sjoman.jpg" alt="Leo Sjöman, Founder, Diamon Finland" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 24%', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', background: 'linear-gradient(to top, rgba(17,16,16,0.55) 0%, transparent 100%)' }}>
              <p style={{ margin: 0, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.6)', fontFamily: 'var(--font-body)' }}>Diamon Finland</p>
            </div>
          </div>
          <div className="flex flex-col justify-center" style={{ padding: '48px 44px', gap: '20px', backgroundColor: 'var(--color-background)' }}>
            <h2 className="font-normal" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1.1, margin: 0 }}>Leo Sjöman</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Leo Sjöman is an actor, entrepreneur, and leadership communication coach who works with leaders, experts, and teams on developing more effective communication, public speaking, and interpersonal skills.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              In his work, he combines strategic communication, business acumen, and over 20 years of experience performing in theatre, television, and film. He is known for creating a trusting, direct, and goal-oriented working atmosphere, where the lessons learned are applied concretely to everyday leadership and interpersonal situations.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Leo has coached leaders ranging from medium-sized family businesses to international organisations and the executive leadership of large corporations. He holds a Master of Arts in Theatre Arts (University of the Arts Helsinki) and is the founder of the production company Hoka Films.
            </p>
            <Link href="/about" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)', marginTop: '4px' }}>
              About Leo and Diamon &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-6 py-24" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>Next step</p>
            <h2 className="text-3xl md:text-4xl font-normal mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}>{"Let's talk."}</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Tell us about your goals or challenges. Let us explore together how we could strengthen your leadership communication and the impact of your interaction.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>Book a conversation</Link>
            <Link href="/for-organisations" className="btn-outline-white">View programmes</Link>
          </div>
        </div>
      </section>
    </>
  )
}
