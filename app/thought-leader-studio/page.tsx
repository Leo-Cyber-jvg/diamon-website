import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DIAMON Thought Leader Studio — Making Thought Leadership Visible',
  description:
    'DIAMON Thought Leader Studio is a structured coaching, content and video production programme that turns leadership expertise into consistent, credible and strategically managed visibility.',
}

export default function ThoughtLeaderStudioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Services — 04
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            DIAMON Thought Leader Studio
            <span
              className="block mt-3"
              style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.6em' }}
            >
              Making thought leadership visible.
            </span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.8,
              maxWidth: '620px',
            }}
          >
            Video is now at the core of corporate communication. When leaders
            and experts communicate in their own voice — with their own presence
            and authority — they create trust, credibility, and genuine human
            connection. This is the essence of modern thought leadership:
            organisations whose people are seen and heard become more credible,
            more human, and more relevant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
              Book a consultation
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Discuss your visibility strategy
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why this matters ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Why this matters now
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}
            >
              LinkedIn visibility is a strategic business asset. Most organisations are not treating it as one.
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Customer buying journeys have moved almost entirely online. Before any
              conversation takes place, your clients, candidates, and partners have
              already formed an opinion — based on what they have seen, read, and heard.
              The question is not whether your organisation has a voice. The question
              is whether that voice is being heard.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Thought leadership is becoming one of the most credible forms of corporate
              communication. Yet the channel remains heavily underutilised: without a
              structured programme, typically only 3–5% of employees are active on
              LinkedIn. With the right coaching and framework, participation can rise
              to 25% — and less than 1% of professionals currently publish content
              several times per week.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Reaching 100,000 impressions through paid advertising can cost up to
              €3,000. The same reach through strategically guided employee content
              is not only more cost-effective — it is more trusted, more human,
              and more enduring.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── What it is ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              What it is
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Not a filming day. Not a communication seminar.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> A structured system.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Thought Leader Studio is a structured process that combines
              personal communication coaching, strategic narrative development,
              professional video production, and a systematic publishing rhythm
              into one integrated programme. The goal is twofold: to develop the
              leader&apos;s communication capability, and to produce concrete,
              value-creating content that builds trust over time.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Thought Leader Studio is your organisation&apos;s own communication
              powerhouse — a place where thought leadership becomes visibility,
              visibility becomes trust, and trust becomes business.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Three dimensions ── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Three core dimensions
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              label: 'A',
              title: 'Coaching and\nvideo production',
              body: 'Develop communication skill, presence, clarity, and impact to a high professional level. The Studio combines coaching, professional videography, and content planning into one integrated process — making expertise visible, compelling, and worth watching.',
            },
            {
              label: 'B',
              title: 'Strategic\ndirection',
              body: 'Build a unified narrative that supports both the organisation&apos;s strategic goals and the individual&apos;s communication development. The process connects deep expertise, influence, value creation, and long-term business vision into a coherent communication architecture.',
            },
            {
              label: 'C',
              title: 'Continuous\nvisibility',
              body: 'Create a systematic publishing rhythm and tracking model so that visibility becomes consistent, measurable, and strategically managed. Thought leadership becomes a permanent part of the organisation&apos;s communication culture — not a one-off campaign.',
            },
          ].map(({ label, title, body }) => (
            <div
              key={label}
              className="p-8 flex flex-col gap-5"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </span>
              <h3
                className="text-2xl font-light"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text)',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.2,
                }}
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

      {/* ── How it works ── */}
      <section className="px-6 py-24" style={{ backgroundColor: '#F4F3F1' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                How it works
              </p>
              <h2
                className="text-3xl md:text-4xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
              >
                One studio session per month. One hundred videos per year.
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:pt-10">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                The Studio is built around a monthly rhythm. One professionally
                structured session produces ten high-quality videos — which,
                over twelve months, creates a library of one hundred pieces of
                strategic content. Each session includes planning, coaching,
                filming, a publishing plan, and follow-up.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                Content is optimised for LinkedIn and can be adapted for
                Instagram, YouTube, and other platforms. The result is
                continuous, high-quality, strategically guided visibility —
                without overloading the leader or expert.
              </p>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { number: '1', label: 'Studio session per month' },
              { number: '10', label: 'Videos filmed per session' },
              { number: '100', label: 'LinkedIn videos per year' },
              { number: '4+', label: 'Platforms: LinkedIn, Instagram, YouTube, TikTok' },
            ].map(({ number, label }) => (
              <div
                key={number}
                className="p-8 flex flex-col gap-3"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <span
                  className="font-light"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-blue)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: 1,
                  }}
                >
                  {number}
                </span>
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* What each session includes */}
          <div className="mt-px grid md:grid-cols-5 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {['Content planning', 'Communication coaching', 'Professional filming', 'Publishing plan', 'Follow-up and tracking'].map((item) => (
              <div
                key={item}
                className="px-6 py-4 text-center"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <span
                  className="text-xs"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── ICA Framework ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              The methodology
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}
            >
              Grounded in the DIAMON ICA Framework™
            </h2>
            <p
              className="text-sm leading-relaxed mt-6"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              DIAMON Thought Leader Studio is built on the DIAMON ICA Framework™ —
              Individual Communication Alignment. ICA connects individual communication
              capability with the organisation&apos;s strategic goals, aligning the leader&apos;s
              personal message, communication development, business priorities, and
              long-term visibility into one coherent system.
            </p>
            <Link
              href="/framework"
              className="link-blue text-sm mt-6 inline-block"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Explore the ICA Framework →
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              'Aligns individual communication with business strategy',
              'Connects presentation, leadership, interaction, and thought leadership',
              'Supports continuous and measurable development',
              'Ensures every piece of content supports the organisation&apos;s long-term vision',
              'Builds communication capability as an organisational asset, not a personal habit',
            ].map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 px-6 py-4"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <span
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginTop: '1px', flexShrink: 0 }}
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

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Outcomes ── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          What the organisation gains
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { n: '01', title: 'Visible and credible leaders', body: 'Leaders who communicate with authority and consistency become a strategic asset — for sales, for recruitment, and for culture.' },
            { n: '02', title: 'Stronger expert positioning', body: 'Expertise that stays inside the organisation creates no external value. Thought Leader Studio makes that expertise visible and credible.' },
            { n: '03', title: 'Consistent thought leadership content', body: 'One hundred strategically guided videos per year creates a content infrastructure that compounds over time.' },
            { n: '04', title: 'Measurable, long-term visibility', body: 'Visibility becomes a managed business asset — tracked, optimised, and systematically developed rather than left to chance.' },
            { n: '05', title: 'Communication that supports the business', body: 'Content that supports sales conversations, attracts talent, reinforces culture, and strengthens the organisation&apos;s human voice in the market.' },
            { n: '06', title: 'A stronger human voice', body: 'In a world of automated content, human presence — a real face, a real voice, a real perspective — is the most credible communication an organisation can produce.' },
          ].map(({ n, title, body }) => (
            <div
              key={n}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {n}
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

      {/* ── Testimonial ── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '720px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Reference
          </p>
          <blockquote>
            <p
              className="text-2xl md:text-3xl font-light mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text)',
                lineHeight: 1.4,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Presentation skill is a master key to leadership and influence.
              DIAMON has uniquely high-level expertise in developing performance,
              presence, and communication. Their personal coaching concept truly works.&rdquo;
            </p>
            <footer>
              <p
                className="text-sm font-medium"
                style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}
              >
                Tuomas Liisanantti
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Marketing Director, SDM
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Finnish version ── */}
      <section
        className="px-6 py-24"
        style={{ backgroundColor: '#F4F3F1' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Suomeksi
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-3xl md:text-4xl font-light mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
              >
                Tee organisaatiosi ajatusjohtajuus näkyväksi.
              </h2>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                Video on noussut yritysviestinnän ytimeen. Kun johtajat ja asiantuntijat
                viestivät omalla äänellään ja omalla läsnäolollaan, he rakentavat
                luottamusta, uskottavuutta ja aitoa inhimillistä yhteyttä. Tämä on
                modernin ajatusjohtajuuden ydin: organisaatiot, joiden ihmiset näkyvät
                ja kuuluvat, ovat uskottavampia, inhimillisempiä ja relevantimpia.
              </p>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                DIAMON Thought Leader Studio ei ole kuvauspäivä eikä viestintäkoulutus.
                Se on strukturoitu prosessi, joka yhdistää henkilökohtaisen
                viestintävalmennuksen, strategisen narratiivikehityksen, ammattimaisen
                videokuvateon ja systemaattisen julkaisurytmin yhdeksi kokonaisuudeksi.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                DIAMON Thought Leader Studio on organisaatiosi oma viestintäkoneisto —
                paikka, jossa ajatusjohtajuus muuttuu näkyvyydeksi, näkyvyys luottamukseksi
                ja luottamus liiketoiminnaksi.
              </p>
            </div>
            <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
              {[
                { fi: 'Näkyvät ja uskottavat johtajat', en: 'Visible and credible leadership' },
                { fi: 'Vahvempi asiantuntijapositiointi', en: 'Stronger expert positioning' },
                { fi: 'Johdonmukainen ajatusjohtajuussisältö', en: 'Consistent thought leadership content' },
                { fi: 'Mitattava, pitkäjänteinen näkyvyys', en: 'Measurable, long-term visibility' },
                { fi: 'Myyntiä, rekrytointia ja kulttuuria tukeva viestintä', en: 'Communication that supports sales, recruitment and culture' },
                { fi: 'Inhimillinen ääni markkinassa', en: 'A human voice in the market' },
              ].map(({ fi, en }) => (
                <div
                  key={fi}
                  className="flex items-start gap-4 px-6 py-4"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <span style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                  <div>
                    <span className="text-sm block" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>{fi}</span>
                    <span className="text-xs block mt-0.5" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{en}</span>
                  </div>
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

      {/* ── Closing CTA ── */}
      <section
        className="px-6 py-24 text-center"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-6"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
        >
          Next step
        </p>
        <h2
          className="text-3xl md:text-5xl font-light mb-6 mx-auto"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#fff',
            maxWidth: '680px',
            lineHeight: 1.15,
          }}
        >
          Let&apos;s make your organisation&apos;s thought leadership visible.
        </h2>
        <p
          className="text-base font-light mb-10 mx-auto"
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-body)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}
        >
          If your organisation has leaders and experts whose thinking deserves to be
          seen and heard, DIAMON Thought Leader Studio provides the structure,
          coaching, and production model to make that visibility systematic,
          credible, and business-driven.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
            Contact DIAMON
          </Link>
          <Link href="/contact" className="btn-outline-white">
            Book a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
