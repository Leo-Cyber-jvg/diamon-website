'use client'

export default function InfluenceCompass() {
  return (
    <section style={{ backgroundColor: '#F4F3F1' }}>
      <div className="px-6 py-24 mx-auto" style={{ maxWidth: '1200px' }}>

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            The DIAMON Architecture of Influence&#x2122;
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
          >
            Where communication capability meets organisational performance.
          </h2>
        </div>

        {/* Compass diagram */}
        <div className="relative mx-auto" style={{ maxWidth: '760px', aspectRatio: '1/1' }}>

          {/* Axis lines — full width/height of container */}
          {/* Vertical axis line */}
          <div
            className="absolute"
            style={{
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: '#C8C4BC',
              transform: 'translateX(-50%)',
              zIndex: 1,
            }}
          />
          {/* Horizontal axis line */}
          <div
            className="absolute"
            style={{
              top: '50%',
              left: 0,
              right: 0,
              height: '1px',
              backgroundColor: '#C8C4BC',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          />

          {/* Axis labels */}
          <div
            className="absolute text-center"
            style={{
              top: '2%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
            }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Personal Development
            </span>
          </div>
          <div
            className="absolute text-center"
            style={{
              bottom: '2%',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 3,
            }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Organisational Impact
            </span>
          </div>
          <div
            className="absolute"
            style={{
              left: '2%',
              top: '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center',
              zIndex: 3,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Foundations
            </span>
          </div>
          <div
            className="absolute"
            style={{
              right: '2%',
              top: '50%',
              transform: 'translateY(-50%) rotate(90deg)',
              transformOrigin: 'center',
              zIndex: 3,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Performance
            </span>
          </div>

          {/* Quadrant content */}
          {/* Top-left */}
          <div
            className="absolute flex flex-col gap-1"
            style={{ top: '10%', left: '4%', width: '38%', zIndex: 3 }}
          >
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Focus on:
            </span>
            <h3
              className="text-lg md:text-xl font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-body)', color: '#111010', letterSpacing: '-0.01em' }}
            >
              COMMUNICATION<br />IDENTITY
            </h3>
            <p
              className="text-xs leading-relaxed mt-1 hidden sm:block"
              style={{ color: '#5A5450', fontFamily: 'var(--font-body)' }}
            >
              Who you are as a communicator determines how far your leadership travels
            </p>
          </div>

          {/* Top-right */}
          <div
            className="absolute flex flex-col gap-1 text-right"
            style={{ top: '10%', right: '4%', width: '38%', zIndex: 3 }}
          >
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Focus on:
            </span>
            <h3
              className="text-lg md:text-xl font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-body)', color: '#111010', letterSpacing: '-0.01em' }}
            >
              EXECUTIVE<br />PRESENCE
            </h3>
            <p
              className="text-xs leading-relaxed mt-1 hidden sm:block"
              style={{ color: '#5A5450', fontFamily: 'var(--font-body)' }}
            >
              Personal impact that creates trust, authority and influence in every room
            </p>
          </div>

          {/* Bottom-left */}
          <div
            className="absolute flex flex-col gap-1"
            style={{ bottom: '10%', left: '4%', width: '38%', zIndex: 3 }}
          >
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Focus on:
            </span>
            <h3
              className="text-lg md:text-xl font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-body)', color: '#111010', letterSpacing: '-0.01em' }}
            >
              LEADERSHIP<br />CULTURE
            </h3>
            <p
              className="text-xs leading-relaxed mt-1 hidden sm:block"
              style={{ color: '#5A5450', fontFamily: 'var(--font-body)' }}
            >
              Communication capability embedded in how teams and organisations operate
            </p>
          </div>

          {/* Bottom-right */}
          <div
            className="absolute flex flex-col gap-1 text-right"
            style={{ bottom: '10%', right: '4%', width: '38%', zIndex: 3 }}
          >
            <span
              className="text-xs uppercase tracking-wider"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              Focus on:
            </span>
            <h3
              className="text-lg md:text-xl font-semibold leading-tight"
              style={{ fontFamily: 'var(--font-body)', color: '#111010', letterSpacing: '-0.01em' }}
            >
              BUSINESS<br />PERFORMANCE
            </h3>
            <p
              className="text-xs leading-relaxed mt-1 hidden sm:block"
              style={{ color: '#5A5450', fontFamily: 'var(--font-body)' }}
            >
              Communication as the infrastructure that drives trust, alignment and results
            </p>
          </div>

          {/* Central rainbow ring + inner circle */}
          <div
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '44%',
              aspectRatio: '1/1',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #2020A0, #5656D6, #8888EE, #AAAAFF, #CCCCFF, #8888EE, #5656D6, #3030B8, #2020A0)',
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Inner white circle */}
            <div
              style={{
                width: '82%',
                aspectRatio: '1/1',
                borderRadius: '50%',
                backgroundColor: '#F4F3F1',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '8%',
              }}
            >
              <span
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: '#9E9890', fontFamily: 'var(--font-body)', fontSize: '0.55rem', letterSpacing: '0.15em' }}
              >
                Way Forward:
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#111010',
                  fontSize: 'clamp(0.7rem, 2.2vw, 1.1rem)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                THE ARCHITECTURE<br />OF INFLUENCE&#x2122;
              </span>
            </div>
          </div>

        </div>

        {/* ICA legend below */}
        <div
          className="mx-auto mt-12 grid grid-cols-3 gap-px"
          style={{ maxWidth: '760px', backgroundColor: 'var(--color-border)' }}
        >
          {[
            { id: 'ICA I', model: 'DCI™', name: 'Identity' },
            { id: 'ICA II', model: 'SNS™', name: 'Composition' },
            { id: 'ICA III', model: 'K3™', name: 'Action' },
          ].map(level => (
            <div
              key={level.id}
              className="px-6 py-4 text-center"
              style={{ backgroundColor: '#F4F3F1' }}
            >
              <span
                className="text-xs tracking-widest uppercase block mb-1"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {level.id} / {level.model}
              </span>
              <span
                className="text-sm font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
              >
                {level.name}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-center text-xs mt-4"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          The DIAMON ICA Framework&#x2122; — the engine beneath every pathway
        </p>

      </div>
    </section>
  )
}
