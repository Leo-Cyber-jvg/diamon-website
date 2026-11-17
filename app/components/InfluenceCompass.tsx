export default function InfluenceCompass() {
  const quadrants = [
    {
      label: 'Core Focus',
      name: ['Communication', 'Identity'],
      desc: 'Who you are as a communicator determines how far your leadership travels',
      align: 'left' as const,
    },
    {
      label: 'Core Focus',
      name: ['Executive', 'Presence'],
      desc: 'Personal impact that creates trust, authority and influence',
      align: 'right' as const,
    },
    {
      label: 'Core Focus',
      name: ['Leadership', 'Culture'],
      desc: 'Communication capability embedded in how teams and organisations operate',
      align: 'left' as const,
    },
    {
      label: 'Core Focus',
      name: ['Business', 'Performance'],
      desc: 'Communication as the infrastructure that drives trust, alignment and results',
      align: 'right' as const,
    },
  ]

  return (
    <section style={{ backgroundColor: '#F4F3F1' }}>
      <div className="px-6 py-20 mx-auto" style={{ maxWidth: '1200px' }}>

        <p
          className="text-center text-xs tracking-[0.28em] uppercase mb-3"
          style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
        >
          The DIAMON Architecture of Influence&#x2122;
        </p>
        <h2
          className="text-center text-3xl md:text-4xl font-light mb-12"
          style={{
            fontFamily: 'var(--font-heading)',
            color: '#111010',
            lineHeight: 1.2,
            maxWidth: '480px',
            margin: '0 auto 3rem',
          }}
        >
          Where communication capability meets organisational performance.
        </h2>

        {/* Axis label top */}
        <p className="text-center mb-2" style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E9890', fontFamily: 'var(--font-body)' }}>
          Personal Development
        </p>

        {/* Compass — 2×2 grid with centered ring */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: '560px' }}
        >
          {/* Axis lines */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: '#DDDBD6', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#DDDBD6', transform: 'translateY(-50%)' }} />
          </div>

          {/* 2×2 grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
            }}
          >
            {quadrants.map((q, i) => (
              <div
                key={i}
                className="flex flex-col gap-1"
                style={{
                  padding: '20px 16px 20px 16px',
                  alignItems: q.align === 'right' ? 'flex-end' : 'flex-start',
                  textAlign: q.align,
                  position: 'relative',
                  zIndex: 1,
                  /* extra padding toward center to give ring space */
                  ...(i === 0 && { paddingRight: '36px', paddingBottom: '36px' }),
                  ...(i === 1 && { paddingLeft: '36px', paddingBottom: '36px' }),
                  ...(i === 2 && { paddingRight: '36px', paddingTop: '36px' }),
                  ...(i === 3 && { paddingLeft: '36px', paddingTop: '36px' }),
                }}
              >
                <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9E9890', fontFamily: 'var(--font-body)' }}>{q.label}</span>
                <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#111010', fontFamily: 'var(--font-body)', lineHeight: 1.25 }}>
                  {q.name[0]}<br />{q.name[1]}
                </div>
                <p className="hidden sm:block" style={{ fontSize: '11px', color: '#5A5450', fontFamily: 'var(--font-body)', lineHeight: 1.5, maxWidth: '160px' }}>
                  {q.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center ring — absolutely centered over the grid */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #2020A0, #5656D6, #8888EE, #CCCCFF, #8888EE, #5656D6, #2020A0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              flexShrink: 0,
            }}
          >
            <img src="/diamon-logo-02.png" alt="Diamon" style={{ width: '76%', height: '76%', borderRadius: '50%', objectFit: 'contain', backgroundColor: '#F4F3F1' }} />
          </div>
        </div>

        {/* Axis label bottom */}
        <p className="text-center mt-2" style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E9890', fontFamily: 'var(--font-body)' }}>
          Organisational Impact
        </p>

      </div>
    </section>
  )
}
