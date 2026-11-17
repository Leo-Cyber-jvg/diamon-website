export default function InfluenceCompass() {
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

        {/* Compass */}
        <div className="relative mx-auto" style={{ maxWidth: '640px' }}>

          {/* Axis lines */}
          <div
            className="absolute"
            style={{ left: '50%', top: 0, bottom: 0, width: '1px', backgroundColor: '#DDDBD6', transform: 'translateX(-50%)', zIndex: 0 }}
          />
          <div
            className="absolute"
            style={{ top: '50%', left: 0, right: 0, height: '1px', backgroundColor: '#DDDBD6', transform: 'translateY(-50%)', zIndex: 0 }}
          />

          <p
            className="text-center"
            style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E9890', fontFamily: 'var(--font-body)', marginBottom: '8px' }}
          >
            Personal Development
          </p>

          {/* 3-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 56px 1fr',
              gridTemplateRows: '1fr 56px 1fr',
            }}
          >
            {/* Top-left */}
            <div className="p-5 flex flex-col gap-1" style={{ zIndex: 1 }}>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9E9890', fontFamily: 'var(--font-body)' }}>Core Focus</span>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#111010', fontFamily: 'var(--font-body)', lineHeight: 1.25 }}>
                Communication<br />Identity
              </div>
              <p className="hidden sm:block" style={{ fontSize: '11px', color: '#5A5450', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                Who you are as a communicator determines how far your leadership travels
              </p>
            </div>

            {/* Top center spacer */}
            <div />

            {/* Top-right */}
            <div className="p-5 flex flex-col gap-1 items-end text-right" style={{ zIndex: 1 }}>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9E9890', fontFamily: 'var(--font-body)' }}>Core Focus</span>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#111010', fontFamily: 'var(--font-body)', lineHeight: 1.25 }}>
                Executive<br />Presence
              </div>
              <p className="hidden sm:block" style={{ fontSize: '11px', color: '#5A5450', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                Personal impact that creates trust, authority and influence
              </p>
            </div>

            {/* Middle-left spacer */}
            <div />

            {/* Center ring */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #2020A0, #5656D6, #8888EE, #CCCCFF, #8888EE, #5656D6, #2020A0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <div style={{ width: '76%', height: '76%', borderRadius: '50%', backgroundColor: '#F4F3F1' }} />
              </div>
            </div>

            {/* Middle-right spacer */}
            <div />

            {/* Bottom-left */}
            <div className="p-5 flex flex-col gap-1" style={{ zIndex: 1 }}>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9E9890', fontFamily: 'var(--font-body)' }}>Core Focus</span>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#111010', fontFamily: 'var(--font-body)', lineHeight: 1.25 }}>
                Leadership<br />Culture
              </div>
              <p className="hidden sm:block" style={{ fontSize: '11px', color: '#5A5450', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                Communication capability embedded in how teams and organisations operate
              </p>
            </div>

            {/* Bottom center spacer */}
            <div />

            {/* Bottom-right */}
            <div className="p-5 flex flex-col gap-1 items-end text-right" style={{ zIndex: 1 }}>
              <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#9E9890', fontFamily: 'var(--font-body)' }}>Core Focus</span>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#111010', fontFamily: 'var(--font-body)', lineHeight: 1.25 }}>
                Business<br />Performance
              </div>
              <p className="hidden sm:block" style={{ fontSize: '11px', color: '#5A5450', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>
                Communication as the infrastructure that drives trust, alignment and results
              </p>
            </div>
          </div>

          <p
            className="text-center"
            style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9E9890', fontFamily: 'var(--font-body)', marginTop: '8px' }}
          >
            Organisational Impact
          </p>
        </div>

      </div>
    </section>
  )
}
