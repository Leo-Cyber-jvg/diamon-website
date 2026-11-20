export default function InfluenceCompass({ lang = 'en' }: { lang?: 'en' | 'fi' }) {
  const isFi = lang === 'fi'

  const quadrants = [
    {
      label: '01',
      name: ['Communication', 'Identity'],
      desc: isFi
        ? 'Viestinnällisen identiteetin tunnistaminen ja ymmärtäminen.'
        : 'Recognising and understanding your communicational identity.',
      align: 'left' as const,
    },
    {
      label: '02',
      name: ['Executive', 'Presence'],
      desc: isFi
        ? 'Henkilökohtainen vuorovaikutus luottamuksen ja vaikuttamisen välineenä.'
        : 'Personal interaction as a tool for trust and influence.',
      align: 'right' as const,
    },
    {
      label: '03',
      name: ['Leadership', 'Culture'],
      desc: isFi
        ? 'Johtamisviestintä tiimien ja organisaatioiden toimintakulttuurin rakentajana.'
        : 'Leadership communication as a builder of team and organisational culture.',
      align: 'left' as const,
    },
    {
      label: '04',
      name: ['Business', 'Performance'],
      desc: isFi
        ? 'Johtamisviestinnän kehittäminen osana liiketoiminnan tavoitteita ja tuloksellisuutta.'
        : 'Developing leadership communication as part of business objectives and performance.',
      align: 'right' as const,
    },
  ]

  return (
    <section style={{ backgroundColor: '#F4F3F1' }}>
      <div className="px-6 py-20 mx-auto" style={{ maxWidth: '1200px', width: '100%' }}>

        <div className="grid md:grid-cols-2" style={{ alignItems: 'stretch' }}>

          {/* LEFT: Eyebrow + Compass */}
          <div className="p-6 md:p-10" style={{ border: '1px solid #DDDBD6', minWidth: 0 }}>
            <p
              style={{ fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#111010', fontFamily: 'var(--font-body)', margin: '0 0 20px', textAlign: 'center' }}
            >
              The DIAMON Architecture of Influence
            </p>

            <p className="text-center mb-2" style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5656D6', fontFamily: 'var(--font-body)' }}>
              {isFi ? 'Yksilön kehitys' : 'Personal Development'}
            </p>

            <div className="relative">
              {/* Axis lines */}
              <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: '#DDDBD6', transform: 'translateX(-50%)' }} />
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#DDDBD6', transform: 'translateY(-50%)' }} />
              </div>

              {/* 2×2 grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto' }}>
                {quadrants.map((q, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1"
                    style={{
                      padding: '20px 16px',
                      alignItems: q.align === 'right' ? 'flex-end' : 'flex-start',
                      textAlign: q.align,
                      position: 'relative',
                      zIndex: 1,
                      ...(i === 0 && { paddingRight: '36px', paddingBottom: '36px' }),
                      ...(i === 1 && { paddingLeft: '36px', paddingBottom: '36px' }),
                      ...(i === 2 && { paddingRight: '36px', paddingTop: '36px' }),
                      ...(i === 3 && { paddingLeft: '36px', paddingTop: '36px' }),
                    }}
                  >
                    <span style={{ fontSize: '9px', letterSpacing: '0.14em', color: '#111010', fontFamily: 'var(--font-body)' }}>{q.label}</span>
                    <div style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#5656D6', fontFamily: 'var(--font-body)', lineHeight: 1.25 }}>
                      {q.name[0]}<br />{q.name[1]}
                    </div>
                    <p className="hidden sm:block" style={{ fontSize: '11px', color: '#5A5450', fontFamily: 'var(--font-body)', lineHeight: 1.5, maxWidth: '160px' }}>
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center logo */}
              <img
                src="/diamon-logo-02.png"
                alt="Diamon"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  objectFit: 'contain',
                  backgroundColor: '#F4F3F1',
                  zIndex: 2,
                }}
              />
            </div>

            <p className="text-center mt-2" style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#5656D6', fontFamily: 'var(--font-body)' }}>
              {isFi ? 'Organisaatiovaikutus' : 'Organisational Impact'}
            </p>
          </div>

          {/* RIGHT: Heading + CTA */}
          <div className="flex flex-col p-6 md:p-10" style={{ gap: '32px', border: '1px solid #DDDBD6', marginLeft: '-1px', justifyContent: 'center', minWidth: 0 }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                fontWeight: 300,
                lineHeight: 1.18,
                color: '#111010',
                margin: 0,
              }}
            >
              {isFi ? (
                <>Johtamisviestinnän vaikuttavuus näkyy{' '}<span style={{ fontStyle: 'italic', color: '#5656D6' }}>organisaation suorituskyvyssä.</span></>
              ) : (
                <>Where communication capability meets{' '}<span style={{ fontStyle: 'italic', color: '#5656D6' }}>organisational performance.</span></>
              )}
            </h2>

            <a
              href={isFi ? '/fi/ica-viitekehys' : '/framework'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#111010',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(17,16,16,0.3)',
                paddingBottom: '3px',
                width: 'fit-content',
              }}
            >
              {isFi ? 'Tutustu viitekehykseen →' : 'Explore the framework →'}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
