import Link from 'next/link'

type Props = { lang?: 'fi' | 'en' }

const t = {
  fi: {
    eyebrow: 'Metodologia',
    title: 'DIAMON ICA Framework™',
    lead: 'Diamonin valmennukset perustuvat ICA-viitekehykseen — malliin, joka yhdistää suorituspsykologian ja yli 20 vuoden ammattiesiintymiskokemuksen johtamisviestinnän kehittämiseen.',
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
  const [I, C, A] = copy.items
  return (
    <section className="px-6 py-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div
        className="grid md:grid-cols-2"
        style={{ alignItems: 'stretch' }}
      >

        {/* Left: I/C/A circles in triangle */}
        <div
          className="flex flex-col items-center justify-center gap-5 py-14 px-10"
          style={{
            border: '1px solid var(--color-border)',
            backgroundColor: '#111010',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Aristotle background image — dark hero treatment */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Kopf_des_Aristoteles_1.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              filter: 'brightness(0.35) saturate(0.5)',
              pointerEvents: 'none',
            }}
          />
          {/* Blue gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(86,86,214,0.4) 0%, rgba(17,16,16,0.25) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* Top: I */}
            <div className="flex justify-center">
              <CircleItem letter={I.letter} label={I.label} />
            </div>
            {/* Bottom: C + A */}
            <div className="flex justify-center gap-5">
              <CircleItem letter={C.letter} label={C.label} />
              <CircleItem letter={A.letter} label={A.label} />
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div
          className="flex flex-col justify-center py-14 px-12"
          style={{
            border: '1px solid var(--color-border)',
            marginLeft: '-1px',
            backgroundColor: 'var(--color-background)',
          }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            {copy.eyebrow}
          </p>
          <h2
            className="font-light mb-5"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
            }}
          >
            {copy.title}
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '420px' }}
          >
            {copy.lead}
          </p>
          <Link
            href={copy.link}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-blue)',
              textDecoration: 'none',
              paddingBottom: '3px',
              borderBottom: '1px solid var(--color-blue)',
              display: 'inline-block',
            }}
          >
            {copy.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

function CircleItem({ letter, label }: { letter: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
          backgroundColor: 'var(--color-blue)',
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
            opacity: 0.7,
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
            fontSize: '3rem',
            fontWeight: 300,
            lineHeight: 1,
            zIndex: 1,
            color: '#fff',
          }}
        >
          {letter}
        </span>
      </div>
      <p
        className="text-xs tracking-[0.2em] uppercase"
        style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}
      >
        {label}
      </p>
    </div>
  )
}
