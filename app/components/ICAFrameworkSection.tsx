import Link from 'next/link'

type Props = { lang?: 'fi' | 'en' }

const t = {
  fi: {
    eyebrow: 'Metodologia',
    title: 'DIAMON ICA Framework™',
    lead: 'Kaikki coaching rakentuu DIAMON ICA Framework™ -mallille — rakenteiselle metodologialle, joka yhdistää suorituspsykologian ja yli 20 vuoden ammattiesiintymiskokemuksen johtamisviestinnän kehittämiseen.',
    items: [
      { letter: 'I', label: 'Identity', desc: 'Johtajaidentiteetti, itsetuntemus ja henkilökohtainen läsnäolo.' },
      { letter: 'C', label: 'Composition', desc: 'Viestin rakentaminen, tarkoitus, fokus ja strateginen selkeys.' },
      { letter: 'A', label: 'Action', desc: 'Toteutus, kehollisuus, läsnäolo ja toiminta todellisissa tilanteissa.' },
    ],
    link: '/fi/ica-viitekehys',
    linkLabel: 'Tutustu viitekehykseen →',
  },
  en: {
    eyebrow: 'Methodology',
    title: 'DIAMON ICA Framework™',
    lead: 'All coaching is built on the DIAMON ICA Framework™ — a structured development methodology grounded in performance psychology and two decades of professional performance practice.',
    items: [
      { letter: 'I', label: 'Identity', desc: 'Leadership identity, self-awareness and personal presence.' },
      { letter: 'C', label: 'Composition', desc: 'Message structure, purpose, focus and strategic clarity.' },
      { letter: 'A', label: 'Action', desc: 'Execution, physicality, presence and performance under pressure.' },
    ],
    link: '/framework',
    linkLabel: 'Explore the ICA Framework →',
  },
}

export default function ICAFrameworkSection({ lang = 'fi' }: Props) {
  const copy = t[lang]
  return (
    <section className="px-6 py-12" style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div
        style={{
          backgroundColor: 'var(--color-blue)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >

        {/* Header */}
        <div
          className="flex items-start justify-between gap-6 flex-wrap"
          style={{
            padding: '2rem 2rem 1.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
            position: 'relative',
          }}
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
            >
              {copy.eyebrow}
            </p>
            <h2
              className="text-3xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              {copy.title}
            </h2>
          </div>
          {/* DIAMON logo ball — same image used in homepage circles */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diamon-logo-02.png"
            alt=""
            aria-hidden="true"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
              opacity: 0.7,
            }}
          />
        </div>

        {/* Lead text */}
        <p
          className="text-sm leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontFamily: 'var(--font-body)',
            padding: '1.25rem 2rem',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
            margin: 0,
            position: 'relative',
          }}
        >
          {copy.lead}
        </p>

        {/* Three circles */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ position: 'relative' }}
        >
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: 'calc(16.6% + 65px)',
              right: 'calc(16.6% + 65px)',
              top: '65px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              pointerEvents: 'none',
            }}
          />

          {copy.items.map((item, i) => {
            // All circles: copy of homepage Action circle (white bg, logo as-is, blue letter)
            const circleStyle = {
              bg: 'var(--color-background)',
              border: 'none',
              letterColor: '#5656D6',
              logoFilter: 'none',
            }

            return (
              <div
                key={item.letter}
                className="flex flex-col items-center text-center px-6 py-8"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                    backgroundColor: circleStyle.bg,
                    border: circleStyle.border,
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
                      filter: circleStyle.logoFilter,
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
                      fontSize: '4rem',
                      fontWeight: 500,
                      lineHeight: 1,
                      zIndex: 1,
                      color: circleStyle.letterColor,
                    }}
                  >
                    {item.letter}
                  </span>
                </div>
                <p
                  className="mt-5 text-sm font-medium tracking-[0.3em] uppercase"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.75)' }}
                >
                  {item.label}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)', maxWidth: '200px' }}
                >
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: '1rem 2rem',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            position: 'relative',
          }}
        >
          <span
            className="text-xs tracking-[0.15em]"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-body)' }}
          >
            DIAMON ICA Framework™
          </span>
          <Link
            href={copy.link}
            className="text-sm"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', letterSpacing: '0.03em' }}
          >
            {copy.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
