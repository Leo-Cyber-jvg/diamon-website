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

const circleStyle = [
  {
    wrap: { backgroundColor: 'var(--color-background)', border: '1px solid var(--color-blue)' },
    letter: { color: 'var(--color-blue)' },
  },
  {
    wrap: { backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' },
    letter: { color: 'var(--color-muted)' },
  },
  {
    wrap: { backgroundColor: 'var(--color-blue)', border: 'none' },
    letter: { color: '#fff' },
  },
]

export default function ICAFrameworkSection({ lang = 'fi' }: Props) {
  const copy = t[lang]
  return (
    <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Framed container */}
      <div style={{ border: '1px solid var(--color-border)' }}>

        {/* Header */}
        <div
          className="flex items-start justify-between gap-6 flex-wrap"
          style={{ padding: '2.5rem 2.5rem 2rem', borderBottom: '1px solid var(--color-border)' }}
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              {copy.eyebrow}
            </p>
            <h2
              className="text-3xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
            >
              {copy.title}
            </h2>
          </div>
          {/* Diamond logo mark */}
          <svg
            width="48" height="48" viewBox="0 0 60 60" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.18, flexShrink: 0 }}
            aria-hidden="true"
          >
            <polygon points="30,2 58,15 58,45 30,58 2,45 2,15" stroke="currentColor" strokeWidth="2" fill="none" />
            <polygon points="30,10 50,20 50,40 30,50 10,40 10,20" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
            <circle cx="30" cy="30" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Lead text */}
        <p
          className="text-sm leading-relaxed"
          style={{
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-body)',
            padding: '1.5rem 2.5rem',
            borderBottom: '1px solid var(--color-border)',
            margin: 0,
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
              left: 'calc(16.6% + 75px)',
              right: 'calc(16.6% + 75px)',
              top: '75px',
              height: '1px',
              backgroundColor: 'var(--color-border)',
              pointerEvents: 'none',
            }}
          />

          {copy.items.map((item, i) => (
            <div
              key={item.letter}
              className="flex flex-col items-center text-center px-6 py-10"
              style={{
                borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  position: 'relative',
                  overflow: 'hidden',
                  flexShrink: 0,
                  ...circleStyle[i].wrap,
                }}
              >
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
                    lineHeight: 1,
                    zIndex: 1,
                    ...circleStyle[i].letter,
                  }}
                >
                  {item.letter}
                </span>
              </div>
              <p
                className="mt-5 text-sm font-medium tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
              >
                {item.label}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', maxWidth: '200px' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{ padding: '1.25rem 2.5rem', borderTop: '1px solid var(--color-border)' }}
        >
          <span
            className="text-xs tracking-[0.15em]"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            DIAMON ICA Framework™
          </span>
          <Link href={copy.link} className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {copy.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
