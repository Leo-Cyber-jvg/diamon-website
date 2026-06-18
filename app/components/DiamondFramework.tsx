'use client'

import { useState } from 'react'

const CX = 280
const CY = 280
const R0 = 84    // center circle
const RI = 98    // ring inner edge
const RO = 252   // ring outer edge
const GAP = 5
const SPAN = (360 - 3 * GAP) / 3  // ~116.67°

function toRad(deg: number) { return (deg * Math.PI) / 180 }
function pt(r: number, deg: number) {
  return { x: CX + r * Math.cos(toRad(deg)), y: CY + r * Math.sin(toRad(deg)) }
}
function arcPath(r1: number, r2: number, a1: number, a2: number) {
  const p1 = pt(r1, a1), p2 = pt(r1, a2)
  const p3 = pt(r2, a2), p4 = pt(r2, a1)
  const large = (a2 - a1 > 180) ? 1 : 0
  return [
    `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`,
    `A ${r1} ${r1} 0 ${large} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`,
    `L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)}`,
    `A ${r2} ${r2} 0 ${large} 0 ${p4.x.toFixed(2)} ${p4.y.toFixed(2)}`,
    'Z',
  ].join(' ')
}

// Segment start angles — top (270°), lower-right, lower-left
const A0 = 270 - SPAN / 2
const SEG_A1 = [A0, A0 + SPAN + GAP, A0 + SPAN * 2 + GAP * 2]

const MODELS = [
  {
    id: 'foundational',
    num: 'I',
    label: 'Foundational Model',
    question: 'Who are you as a leader?',
    themes: ['Identity', 'Self-awareness', 'Purpose', 'Values', 'Motivation', 'Presence'],
    body: 'Effective leadership communication begins with self-knowledge. The Foundational Model explores who you are as a communicator — your values, your identity, and the personal presence you bring to every room. This is the layer everything else is built on.',
  },
  {
    id: 'tactical',
    num: 'II',
    label: 'Tactical Model',
    question: 'How do you influence others?',
    themes: ['Communication', 'Influence', 'Storytelling', 'Trust-building', 'Executive Presence', 'Listening'],
    body: 'The Tactical Model translates inner clarity into outward impact. It develops the communication and influence capabilities that allow leaders to inspire, align, and move people — consistently and with intention rather than by accident.',
  },
  {
    id: 'practical',
    num: 'III',
    label: 'Practical Model',
    question: 'How do you show up in practice?',
    themes: ['Presentations', 'Meetings', 'Feedback', 'Change Communication', 'Stakeholder Management', 'Everyday Leadership'],
    body: 'The Practical Model is where capability becomes visible behaviour. It addresses real leadership situations — board presentations, difficult conversations, team leadership, and the everyday interactions that define how a leader is experienced by others.',
  },
]

export default function DiamondFramework() {
  const [sel, setSel] = useState<number | null>(null)

  function toggle(i: number) {
    setSel(prev => (prev === i ? null : i))
  }

  return (
    <div>
      <div
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* ── Circular SVG ── */}
        <div style={{ position: 'relative' }}>
          <svg
            viewBox="0 0 560 560"
            style={{ width: '100%', maxWidth: '480px', display: 'block', margin: '0 auto' }}
            aria-label="DIAMON Leadership Development Framework"
          >
            <defs>
              {/* Subtle radial gradient for each segment */}
              {MODELS.map((m, i) => (
                <radialGradient key={m.id} id={`fg-${m.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#5656D6" stopOpacity={sel === i ? 0.72 : 0.12} />
                  <stop offset="100%" stopColor="#5656D6" stopOpacity={sel === i ? 0.92 : 0.24} />
                </radialGradient>
              ))}
            </defs>

            {/* Outer guide ring */}
            <circle cx={CX} cy={CY} r={RO + 6} fill="none" stroke="var(--color-border)" strokeWidth={0.5} strokeDasharray="2 6" />

            {/* Concentric texture rings inside the band */}
            {[116, 138, 160, 182, 204, 226].map(r => (
              <circle
                key={r} cx={CX} cy={CY} r={r}
                fill="none" stroke="rgba(86,86,214,0.055)" strokeWidth={0.8}
              />
            ))}

            {/* Three arc segments */}
            {MODELS.map((m, i) => {
              const a1 = SEG_A1[i]
              const a2 = a1 + SPAN
              const midA = a1 + SPAN / 2
              const numPt = pt(175, midA)
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
                  {/* Segment fill */}
                  <path
                    d={arcPath(RI, RO, a1, a2)}
                    fill={`url(#fg-${m.id})`}
                    stroke={active ? '#5656D6' : 'rgba(86,86,214,0.22)'}
                    strokeWidth={active ? 1 : 0.5}
                    style={{ transition: 'stroke 0.25s' }}
                  />

                  {/* Roman numeral at segment midpoint */}
                  <text
                    x={numPt.x} y={numPt.y + 4}
                    textAnchor="middle"
                    fontFamily="var(--font-heading)"
                    fontStyle="italic"
                    fontSize={18}
                    fontWeight={300}
                    fill={active ? 'white' : 'rgba(86,86,214,0.55)'}
                    style={{ pointerEvents: 'none', transition: 'fill 0.25s' }}
                  >
                    {m.num}
                  </text>
                </g>
              )
            })}

            {/* Gap dot markers */}
            {SEG_A1.map((a1, i) => {
              const innerPt = pt(RI - 1, a1)
              const outerPt = pt(RO + 1, a1)
              return (
                <g key={`gap-${i}`} style={{ pointerEvents: 'none' }}>
                  <circle cx={innerPt.x} cy={innerPt.y} r={2} fill="var(--color-background)" />
                  <circle cx={outerPt.x} cy={outerPt.y} r={2.5} fill="var(--color-border)" />
                </g>
              )
            })}

            {/* Connection spokes from center to inner ring */}
            {SEG_A1.map((a1, i) => {
              const midA = a1 + SPAN / 2
              const innerPt = pt(RI, midA)
              const corePt = pt(R0 + 2, midA)
              return (
                <line
                  key={`spoke-${i}`}
                  x1={corePt.x} y1={corePt.y}
                  x2={innerPt.x} y2={innerPt.y}
                  stroke="rgba(86,86,214,0.18)"
                  strokeWidth={0.5}
                  style={{ pointerEvents: 'none' }}
                />
              )
            })}

            {/* Center dark circle */}
            <circle cx={CX} cy={CY} r={R0} fill="#0F172A" />
            <circle cx={CX} cy={CY} r={R0 - 8} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={0.5} />
            <circle cx={CX} cy={CY} r={R0 - 18} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={0.5} />

            {/* Center label */}
            {['What\'s', 'your', 'story?'].map((line, i) => (
              <text
                key={`cl-${i}`}
                x={CX} y={CY + (i - 1) * 15}
                textAnchor="middle"
                fontFamily="var(--font-heading)"
                fontStyle="italic"
                fontWeight={300}
                fontSize={i === 2 ? 14 : 12}
                fill={i === 2 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)'}
                style={{ pointerEvents: 'none' }}
              >
                {line}
              </text>
            ))}
          </svg>
        </div>

        {/* ── Model panels ── */}
        <div style={{ borderTop: '1px solid var(--color-border)' }}>
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
                  borderBottom: '1px solid var(--color-border)',
                  padding: '1.5rem 0',
                  cursor: 'pointer',
                  outline: 'none',
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: 'var(--color-blue)',
                      flexShrink: 0,
                      minWidth: '1.5rem',
                    }}
                  >
                    {m.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      fontWeight: 300,
                      color: active ? 'var(--color-blue)' : 'var(--color-text)',
                      margin: 0,
                      transition: 'color 0.2s',
                      lineHeight: 1.2,
                    }}
                  >
                    {m.label}
                  </h3>
                  <span
                    style={{
                      marginLeft: 'auto',
                      flexShrink: 0,
                      color: 'var(--color-subtle)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: 1,
                    }}
                  >
                    {active ? '−' : '+'}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    color: 'var(--color-subtle)',
                    fontSize: '0.92rem',
                    margin: '0.35rem 0 0 2.5rem',
                    lineHeight: 1.5,
                  }}
                >
                  {m.question}
                </p>

                {/* Expanded content */}
                {active && (
                  <div style={{ marginLeft: '2.5rem', marginTop: '1rem' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13.5px',
                        lineHeight: 1.8,
                        color: 'var(--color-muted)',
                        marginBottom: '1rem',
                      }}
                    >
                      {m.body}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {m.themes.map(t => (
                        <span
                          key={t}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '10px',
                            letterSpacing: '0.08em',
                            color: 'var(--color-blue)',
                            border: '0.5px solid var(--color-blue)',
                            borderRadius: '2px',
                            padding: '3px 10px',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {/* Closing note */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              color: 'var(--color-subtle)',
              marginTop: '1.25rem',
              letterSpacing: '0.04em',
              fontStyle: 'italic',
            }}
          >
            Identity → Communication Capability → Real-world Leadership Impact
          </p>
        </div>
      </div>
    </div>
  )
}
