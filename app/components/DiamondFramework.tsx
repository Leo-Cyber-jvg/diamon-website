'use client'

import { useState } from 'react'

const CX = 380
const CY = 380
const R_IN = 180
const R_OUT = 232
const R_LBL = 274  // label anchor radius (just outside ring)
const GAP = 4
const SPAN = (360 - 3 * GAP) / 3  // ≈ 116.67°

// Segment start angles — top (270°), lower-right (30°), lower-left (150°)
const A0 = 270 - SPAN / 2
const SEG = [A0, A0 + SPAN + GAP, A0 + SPAN * 2 + GAP * 2]

function toRad(d: number) { return d * Math.PI / 180 }
function pt(r: number, deg: number) {
  return { x: CX + r * Math.cos(toRad(deg)), y: CY + r * Math.sin(toRad(deg)) }
}
function arcPath(r1: number, r2: number, a1: number, a2: number) {
  const p1 = pt(r1, a1), p2 = pt(r1, a2)
  const p3 = pt(r2, a2), p4 = pt(r2, a1)
  const lg = (a2 - a1 > 180) ? 1 : 0
  return [
    `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`,
    `A ${r1} ${r1} 0 ${lg} 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`,
    `L ${p3.x.toFixed(1)} ${p3.y.toFixed(1)}`,
    `A ${r2} ${r2} 0 ${lg} 0 ${p4.x.toFixed(1)} ${p4.y.toFixed(1)}`,
    'Z',
  ].join(' ')
}

// Tangential rotation ensuring text is always readable (never upside-down)
function labelRot(deg: number) {
  const n = ((deg % 360) + 360) % 360
  let r = (n + 90) % 360
  if (r > 90 && r <= 270) r = (r + 180) % 360
  return r
}

const MODELS = [
  {
    id: 'foundational',
    num: 'I',
    a1: SEG[0], a2: SEG[0] + SPAN, mid: 270,
    label: 'Foundational Model',
    question: 'Who are you as a leader?',
    themes: ['Identity', 'Self-awareness', 'Purpose', 'Values', 'Motivation', 'Presence'],
    body: 'Effective leadership communication begins with self-knowledge. The Foundational Model explores who you are as a communicator — your values, your identity, and the personal presence you bring to every room. This is the layer everything else is built on.',
    ringItems: [
      { text: 'FOUNDATIONAL', sub: 'MODEL', angle: 270, main: true },
      { text: 'Identity', angle: 237 },
      { text: 'Presence', angle: 303 },
    ],
  },
  {
    id: 'tactical',
    num: 'II',
    a1: SEG[1], a2: SEG[1] + SPAN, mid: 30,
    label: 'Tactical Model',
    question: 'How do you influence others?',
    themes: ['Communication', 'Influence', 'Storytelling', 'Trust-building', 'Executive Presence', 'Listening'],
    body: 'The Tactical Model translates inner clarity into outward impact. It develops the communication and influence capabilities that allow leaders to inspire, align, and move people — consistently and with intention.',
    ringItems: [
      { text: 'TACTICAL', sub: 'MODEL', angle: 30, main: true },
      { text: 'Influence', angle: 357 },
      { text: 'Storytelling', angle: 63 },
    ],
  },
  {
    id: 'practical',
    num: 'III',
    a1: SEG[2], a2: SEG[2] + SPAN, mid: 150,
    label: 'Practical Model',
    question: 'How do you show up in practice?',
    themes: ['Presentations', 'Meetings', 'Feedback', 'Change Communication', 'Stakeholder Management', 'Everyday Leadership'],
    body: 'The Practical Model is where capability becomes visible behaviour. It addresses real leadership situations — board presentations, difficult conversations, team leadership, and the everyday interactions that define how a leader is experienced.',
    ringItems: [
      { text: 'PRACTICAL', sub: 'MODEL', angle: 150, main: true },
      { text: 'Leadership', angle: 117 },
      { text: 'Impact', angle: 183 },
    ],
  },
]

export default function DiamondFramework() {
  const [sel, setSel] = useState<number | null>(null)

  function toggle(i: number) { setSel(p => p === i ? null : i) }

  return (
    <div>
      {/* ── Circular diagram ── */}
      <div style={{ maxWidth: '580px', margin: '0 auto' }}>
        <svg
          viewBox="0 0 760 760"
          style={{ width: '100%', display: 'block' }}
          aria-label="DIAMON Leadership Development Framework"
        >
          <defs>
            <radialGradient id="dfBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5656D6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#5656D6" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle atmosphere behind ring */}
          <circle cx={CX} cy={CY} r={R_OUT + 100} fill="url(#dfBg)" />

          {/* Outer guide circle */}
          <circle cx={CX} cy={CY} r={R_OUT + 14}
            fill="none" stroke="var(--color-border)" strokeWidth={0.5} />

          {/* Inner guide circle */}
          <circle cx={CX} cy={CY} r={R_IN - 14}
            fill="none" stroke="var(--color-border)" strokeWidth={0.5} />

          {/* Three arc segments */}
          {MODELS.map((m, i) => {
            const active = sel === i
            return (
              <g
                key={m.id}
                onClick={() => toggle(i)}
                onKeyDown={e => e.key === 'Enter' && toggle(i)}
                tabIndex={0}
                role="button"
                aria-label={m.label}
                aria-pressed={active}
                style={{ cursor: 'pointer', outline: 'none' }}
              >
                <path
                  d={arcPath(R_IN, R_OUT, m.a1, m.a2)}
                  fill={active ? '#5656D6' : 'rgba(86,86,214,0.08)'}
                  stroke={active ? '#5656D6' : 'rgba(86,86,214,0.18)'}
                  strokeWidth={active ? 1 : 0.5}
                  style={{ transition: 'fill 0.3s ease, stroke 0.3s ease' }}
                />
                {/* Hover-area extension (invisible) for easier clicking */}
                <path
                  d={arcPath(R_OUT, R_OUT + 55, m.a1, m.a2)}
                  fill="transparent"
                />
              </g>
            )
          })}

          {/* Gap markers — small circles at segment boundaries */}
          {SEG.map((a1, i) => {
            const a2 = a1 + SPAN
            return (
              <g key={`gm-${i}`} style={{ pointerEvents: 'none' }}>
                {[a1, a2].map((a, j) => {
                  const oP = pt(R_OUT, a)
                  const iP = pt(R_IN, a)
                  return (
                    <g key={j}>
                      <circle cx={oP.x} cy={oP.y} r={2.5}
                        fill="var(--color-background)" stroke="var(--color-border)" strokeWidth={0.8} />
                      <circle cx={iP.x} cy={iP.y} r={2}
                        fill="var(--color-background)" stroke="var(--color-border)" strokeWidth={0.8} />
                    </g>
                  )
                })}
              </g>
            )
          })}

          {/* Ring labels */}
          {MODELS.map((m, i) => {
            const active = sel === i
            return m.ringItems.map((item, j) => {
              const offset = item.main ? 6 : 22
              const lPt = pt(R_LBL + offset, item.angle)
              const dotPt = pt(R_OUT + 7, item.angle)
              const rot = labelRot(item.angle)

              return (
                <g key={`li-${i}-${j}`} style={{ pointerEvents: 'none' }}>
                  {/* Marker dot on ring edge */}
                  <circle
                    cx={dotPt.x} cy={dotPt.y}
                    r={item.main ? 3.5 : 2}
                    fill={active ? '#5656D6' : item.main ? 'var(--color-text)' : 'var(--color-border)'}
                    style={{ transition: 'fill 0.3s' }}
                  />
                  {/* Radial tick line from ring to dot */}
                  {item.main && (() => {
                    const p1 = pt(R_OUT + 4, item.angle)
                    const p2 = pt(R_OUT + 16, item.angle)
                    return (
                      <line
                        x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
                        stroke={active ? '#5656D6' : 'var(--color-border)'}
                        strokeWidth={0.8}
                        style={{ transition: 'stroke 0.3s' }}
                      />
                    )
                  })()}
                  {/* Label (rotated tangentially) */}
                  <g transform={`translate(${lPt.x.toFixed(1)},${lPt.y.toFixed(1)}) rotate(${rot})`}>
                    <text
                      y={item.main ? -5.5 : 0}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontFamily="var(--font-body)"
                      fontSize={item.main ? 9 : 8}
                      fontWeight={item.main ? 500 : 400}
                      letterSpacing={item.main ? '0.2em' : '0.1em'}
                      fill={active
                        ? item.main ? '#5656D6' : 'rgba(86,86,214,0.6)'
                        : item.main ? 'var(--color-text)' : 'var(--color-subtle)'}
                      style={{ transition: 'fill 0.3s' }}
                    >
                      {item.text}
                    </text>
                    {item.main && item.sub && (
                      <text
                        y={6.5}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontFamily="var(--font-body)"
                        fontSize={8}
                        fontWeight={400}
                        letterSpacing="0.2em"
                        fill={active ? 'rgba(86,86,214,0.5)' : 'var(--color-subtle)'}
                        style={{ transition: 'fill 0.3s' }}
                      >
                        {item.sub}
                      </text>
                    )}
                  </g>
                </g>
              )
            })
          })}

          {/* ── Inner circle — human figure area ── */}

          {/* Dotted accent circle (Hintsa-style inner ring) */}
          <circle cx={CX} cy={CY} r={70}
            fill="none"
            stroke="rgba(86,86,214,0.2)"
            strokeWidth={1}
            strokeDasharray="2 6"
          />

          {/* Human silhouette — standing figure, 140px tall */}
          {/* Positioned so figure reads as "at the center" of the framework */}
          <g opacity={0.58} style={{ pointerEvents: 'none' }}>
            {/* Head */}
            <circle cx={CX} cy={330} r={15} fill="var(--color-text)" />
            {/* Body (tapered trapezoid) */}
            <path
              d={`M ${CX - 21} 350
                  C ${CX - 21} 347 ${CX + 21} 347 ${CX + 21} 350
                  L ${CX + 15} 396
                  L ${CX - 15} 396 Z`}
              fill="var(--color-text)"
            />
            {/* Left arm */}
            <line
              x1={CX - 20} y1={358}
              x2={CX - 32} y2={384}
              stroke="var(--color-text)" strokeWidth={8} strokeLinecap="round"
            />
            {/* Right arm */}
            <line
              x1={CX + 20} y1={358}
              x2={CX + 32} y2={384}
              stroke="var(--color-text)" strokeWidth={8} strokeLinecap="round"
            />
            {/* Left leg */}
            <line
              x1={CX - 9} y1={396}
              x2={CX - 12} y2={450}
              stroke="var(--color-text)" strokeWidth={11} strokeLinecap="round"
            />
            {/* Right leg */}
            <line
              x1={CX + 9} y1={396}
              x2={CX + 12} y2={450}
              stroke="var(--color-text)" strokeWidth={11} strokeLinecap="round"
            />
          </g>

          {/* "What's your story?" — below the figure */}
          <text
            x={CX} y={472}
            textAnchor="middle"
            fontFamily="var(--font-heading)"
            fontStyle="italic"
            fontWeight={300}
            fontSize={14}
            fill="var(--color-muted)"
            style={{ pointerEvents: 'none' }}
          >
            What&apos;s your story?
          </text>
        </svg>
      </div>

      {/* ── Three model panels ── */}
      <div
        className="grid md:grid-cols-3 gap-px"
        style={{ backgroundColor: 'var(--color-border)', marginTop: '2.5rem' }}
      >
        {MODELS.map((m, i) => {
          const active = sel === i
          return (
            <div
              key={m.id}
              onClick={() => toggle(i)}
              onKeyDown={e => e.key === 'Enter' && toggle(i)}
              tabIndex={0}
              role="button"
              aria-expanded={active}
              style={{
                backgroundColor: active ? '#0F172A' : 'var(--color-background)',
                padding: '2rem 1.75rem',
                cursor: 'pointer',
                outline: 'none',
                transition: 'background-color 0.25s ease',
              }}
            >
              {/* Number */}
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: active ? 'rgba(255,255,255,0.4)' : 'var(--color-blue)',
                  marginBottom: '0.6rem',
                  transition: 'color 0.25s',
                }}
              >
                {m.num}
              </span>

              {/* Model name */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 300,
                  lineHeight: 1.25,
                  color: active ? '#fff' : 'var(--color-text)',
                  margin: '0 0 0.35rem',
                  transition: 'color 0.25s',
                }}
              >
                {m.label}
              </h3>

              {/* Question */}
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '0.85rem',
                  color: active ? 'rgba(255,255,255,0.42)' : 'var(--color-subtle)',
                  margin: active ? '0 0 1rem' : 0,
                  transition: 'color 0.25s',
                }}
              >
                {m.question}
              </p>

              {/* Expanded content */}
              {active && (
                <>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      lineHeight: 1.8,
                      color: 'rgba(255,255,255,0.62)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {m.body}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {m.themes.map(t => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '9.5px',
                          letterSpacing: '0.08em',
                          color: 'rgba(255,255,255,0.38)',
                          border: '0.5px solid rgba(255,255,255,0.14)',
                          borderRadius: '2px',
                          padding: '2.5px 9px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>

      {/* Flow caption */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          color: 'var(--color-subtle)',
          textAlign: 'center',
          marginTop: '1.5rem',
          letterSpacing: '0.12em',
          fontStyle: 'italic',
        }}
      >
        Individual &rarr; Awareness &rarr; Capability &rarr; Action &rarr; Impact
      </p>
    </div>
  )
}
