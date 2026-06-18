'use client'

import { useState } from 'react'

type ProfileNode = {
  l1: string
  l2: string
  title: string
  section: string
  body: string
  meta: string
}

const NODES: ProfileNode[] = [
  {
    l1: 'Executive', l2: 'Summary',
    title: 'Executive Summary',
    section: 'Profile Overview',
    body: "A concise synthesis of the leader's current communication profile, key themes identified in the session, and the primary development focus areas. Provides context for all subsequent ICA assessment components.",
    meta: 'Generated from session transcript · Updated per coaching cycle',
  },
  {
    l1: 'ICA I', l2: 'Identity · DCI™',
    title: 'ICA I — Identity',
    section: 'Driver · Communicator · Influencer',
    body: "Examines how the leader's core identity, values, and personal narrative shape their communication style and leadership presence. The DCI™ profile maps the interplay between intrinsic motivation, communication behaviour, and influence capacity.",
    meta: 'DIAMON ICA Framework™ · Component I of III',
  },
  {
    l1: 'ICA II', l2: 'Composition · SNS™',
    title: 'ICA II — Composition',
    section: 'State · Narrative · Structure',
    body: "Assesses how the leader structures messages, manages communication state, and constructs clear narrative. The SNS™ framework identifies patterns in how communication is composed and delivered across different situations.",
    meta: 'DIAMON ICA Framework™ · Component II of III',
  },
  {
    l1: 'ICA III', l2: 'Action · K3™',
    title: 'ICA III — Action',
    section: 'Kontakt · Koherens · Kraft',
    body: "Evaluates the interpersonal impact of communication: how effectively the leader establishes contact, sustains coherence under pressure, and projects conviction and force. K3™ translates identity and composition into observable leadership behaviour.",
    meta: 'DIAMON ICA Framework™ · Component III of III',
  },
  {
    l1: 'Dramaturgy', l2: 'Analysis',
    title: 'Dramaturgical Communication Analysis',
    section: 'Advanced Assessment',
    body: "An analysis of the leader's communication through the lens of theatrical dramaturgy — examining arc, tension, presence, and the dynamics of each interaction as a performed narrative. Draws on professional actor training methodology applied to leadership communication.",
    meta: 'Proprietary DIAMON methodology · Grounded in theatre and performance studies',
  },
  {
    l1: 'Key', l2: 'Insights',
    title: 'Key Insights',
    section: 'Session Observations',
    body: "The most significant observations surfaced through coaching dialogue and behavioural analysis. These are the patterns, moments, and dynamics that most directly shape this leader's current communication impact and development trajectory.",
    meta: 'Synthesised by coach · Session-specific',
  },
  {
    l1: 'Development', l2: 'Opportunities',
    title: 'Development Opportunities',
    section: 'Growth Areas',
    body: "Specific areas where focused work will yield the highest return on leadership communication effectiveness. Prioritised by impact, feasibility, and alignment with the leader's stated goals and development context.",
    meta: 'Ranked by strategic priority · Reviewed each session',
  },
  {
    l1: 'Communication', l2: 'Strengths',
    title: 'Communication Strengths',
    section: 'Capability Profile',
    body: "Distinctive capabilities and natural assets that define this leader's authentic communication profile. Strengths are mapped to the ICA Framework to identify where this leader's natural style creates the greatest leverage.",
    meta: 'Foundation for development work · To be built upon, not overridden',
  },
  {
    l1: 'Action Plan', l2: '',
    title: 'Action Plan Before the Next Session',
    section: 'Between-Session Practice',
    body: "Concrete micro-practices, reflective assignments, and situational applications to be integrated into the leader's daily leadership context. Designed to translate coaching insights into observable behavioural change between sessions.",
    meta: 'To be reviewed at the opening of the next session',
  },
  {
    l1: "Coach's", l2: 'Assessment',
    title: "Coach's Professional Assessment",
    section: 'Clinical Observation',
    body: "The coach's synthesised clinical observation and strategic recommendations, grounded in the ICA Framework and dramaturgical methodology. Represents the professional judgement that guides the direction and depth of each coaching engagement.",
    meta: 'Confidential · Held by coach · Shared selectively with client',
  },
  {
    l1: 'Progress', l2: 'Tracking',
    title: 'Progress Tracking',
    section: 'Development Arc',
    body: "Longitudinal view of the leader's development across coaching sessions, mapping measurable shifts in communication behaviour and leadership impact. Forms the basis for programme evaluation and future planning.",
    meta: 'Updated each session · Foundation for multi-session programme review',
  },
]

const CX = 340
const CY = 210
const R = 180
const CR = 52
const BW = 88
const BH = 36

function toRad(deg: number) {
  return (deg * Math.PI) / 180
}

function getNodePos(index: number) {
  const angle = toRad(270 + index * (360 / 11))
  return { x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle), angle }
}

export default function ProfileMap() {
  const [sel, setSel] = useState<number | null>(null)

  const selected = sel !== null ? NODES[sel] : null

  function toggle(i: number) {
    setSel(prev => (prev === i ? null : i))
  }

  return (
    <div>
      <svg
        viewBox="0 0 680 415"
        style={{ width: '100%', display: 'block', overflow: 'visible' }}
        role="img"
        aria-label="DIAMON Leadership Communication Profile Map"
      >
        {/* Lines — rendered behind all nodes */}
        {NODES.map((_, i) => {
          const { x: nx, y: ny, angle } = getNodePos(i)
          return (
            <line
              key={`line-${i}`}
              x1={CX + (CR + 3) * Math.cos(angle)}
              y1={CY + (CR + 3) * Math.sin(angle)}
              x2={nx}
              y2={ny}
              stroke="var(--color-border)"
              strokeWidth={0.5}
              style={{ pointerEvents: 'none' }}
            />
          )
        })}

        {/* Center circle */}
        <circle cx={CX} cy={CY} r={CR} fill="#0F172A" style={{ pointerEvents: 'none' }} />

        {/* Center label — three lines, Cormorant Garamond italic */}
        {['Leadership', 'Communication', 'Profile'].map((line, i) => (
          <text
            key={`ct-${i}`}
            x={CX}
            y={CY + (i - 1) * 13}
            textAnchor="middle"
            fill="rgba(255,255,255,0.82)"
            fontFamily="var(--font-heading)"
            fontStyle="italic"
            fontSize={10}
            style={{ pointerEvents: 'none' }}
          >
            {line}
          </text>
        ))}

        {/* Branch nodes */}
        {NODES.map((d, i) => {
          const { x: nx, y: ny } = getNodePos(i)
          const active = sel === i
          const textY1 = d.l2 ? ny - 4 : ny + 3.5

          return (
            <g
              key={`node-${i}`}
              onClick={() => toggle(i)}
              onKeyDown={e => e.key === 'Enter' && toggle(i)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              aria-label={d.title}
              aria-pressed={active}
            >
              <rect
                x={nx - BW / 2}
                y={ny - BH / 2}
                width={BW}
                height={BH}
                rx={4}
                fill={active ? 'var(--color-blue)' : 'var(--color-background)'}
                stroke={active ? 'var(--color-blue)' : 'var(--color-border)'}
                strokeWidth={active ? 1 : 0.5}
              />
              <text
                x={nx}
                y={textY1}
                textAnchor="middle"
                fill={active ? '#fff' : 'var(--color-text)'}
                fontFamily="var(--font-body)"
                fontSize={10}
                fontWeight={500}
                style={{ pointerEvents: 'none' }}
              >
                {d.l1}
              </text>
              {d.l2 && (
                <text
                  x={nx}
                  y={ny + 10}
                  textAnchor="middle"
                  fill={active ? 'rgba(255,255,255,0.6)' : 'var(--color-subtle)'}
                  fontFamily="var(--font-body)"
                  fontSize={9}
                  style={{ pointerEvents: 'none' }}
                >
                  {d.l2}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      <p
        style={{
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--color-subtle)',
          fontFamily: 'var(--font-body)',
          marginTop: '0.5rem',
          letterSpacing: '0.02em',
        }}
      >
        Select any node to explore the component
      </p>

      {selected && (
        <div
          style={{
            marginTop: '1.5rem',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: '#0F172A',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.42)',
                  margin: '0 0 5px',
                }}
              >
                {selected.section}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 300,
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {selected.title}
              </p>
            </div>
            <button
              onClick={() => setSel(null)}
              style={{
                background: 'none',
                border: '0.5px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '11px',
                borderRadius: '3px',
                padding: '3px 9px',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                flexShrink: 0,
              }}
            >
              Close
            </button>
          </div>
          <div
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: 'var(--color-background)',
            }}
          >
            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.75,
                color: 'var(--color-muted)',
                fontFamily: 'var(--font-body)',
                margin: '0 0 1rem',
              }}
            >
              {selected.body}
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'var(--color-subtle)',
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '0.75rem',
                margin: 0,
              }}
            >
              {selected.meta}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
