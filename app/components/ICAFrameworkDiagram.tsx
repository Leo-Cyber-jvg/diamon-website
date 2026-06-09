// ICA Framework Diagram — SVG-based visual diagram
// Three connected nodes: Identity → Composition → Action
// Aristotelian three-act layer below
// Outcome axis at base

export default function ICAFrameworkDiagram() {
  return (
    <section style={{ backgroundColor: '#F4F3F1' }}>
      <div className="px-6 py-20 mx-auto" style={{ maxWidth: '1200px' }}>

        {/* ── Header ── */}
        <div className="mb-14 grid md:grid-cols-2 gap-10 items-end">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: '#9E9890', fontFamily: 'var(--font-body)' }}
            >
              The methodology
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: 'var(--font-heading)',
                color: '#111010',
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                lineHeight: 1.1,
              }}
            >
              The DIAMON{' '}
              <span style={{ fontStyle: 'italic', color: '#5656D6' }}>ICA Framework™</span>
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#5A5450', fontFamily: 'var(--font-body)' }}
          >
            Three integrated levels. One coherent architecture. Leadership
            communication developed from personal presence through to organisational impact.
          </p>
        </div>

        {/* ── SVG Diagram ── */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <svg
            viewBox="0 0 1100 520"
            style={{ width: '100%', minWidth: '640px', display: 'block' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Blue arrowhead */}
              <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0.5 L0,5.5 L7,3 z" fill="#5656D6" />
              </marker>
              {/* Subtle arrowhead for outcome axis */}
              <marker id="arr-subtle" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <path d="M0,0.5 L0,5.5 L7,3 z" fill="#C8C4BC" />
              </marker>
            </defs>

            {/* ── Background subtle vertical columns ── */}
            <rect x="30" y="0" width="320" height="340" rx="2" fill="white" opacity="0.5" />
            <rect x="390" y="0" width="320" height="340" rx="2" fill="white" opacity="0.5" />
            <rect x="750" y="0" width="320" height="340" rx="2" fill="white" opacity="0.5" />

            {/* ── NODE 1 — Identity ── */}
            <rect x="30" y="30" width="320" height="170" rx="2" fill="white" stroke="#D8D4CC" strokeWidth="1" />
            {/* Top label strip */}
            <rect x="30" y="30" width="320" height="34" rx="2" fill="#F4F3F1" />
            <rect x="30" y="52" width="320" height="12" fill="#F4F3F1" />
            <text x="50" y="52" fontSize="9" fill="#5656D6" letterSpacing="2" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">ICA I</text>
            <text x="330" y="52" fontSize="9" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif" textAnchor="end">DCI™</text>
            {/* Divider */}
            <line x1="30" y1="64" x2="350" y2="64" stroke="#D8D4CC" strokeWidth="0.75" />
            {/* Level name */}
            <text x="190" y="130" fontSize="42" fill="#111010" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Identity</text>
            {/* Question italic */}
            <text x="190" y="158" fontSize="11" fill="#9E9890" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic">Who are you as a communicator?</text>
            {/* Model full */}
            <text x="190" y="185" fontSize="10" fill="#5656D6" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">Dual Communicational Identity™</text>

            {/* ── ARROW 1 ── */}
            <line x1="354" y1="115" x2="386" y2="115" stroke="#5656D6" strokeWidth="1.2" markerEnd="url(#arr-blue)" />

            {/* ── NODE 2 — Composition ── */}
            <rect x="390" y="30" width="320" height="170" rx="2" fill="white" stroke="#D8D4CC" strokeWidth="1" />
            <rect x="390" y="30" width="320" height="34" rx="2" fill="#F4F3F1" />
            <rect x="390" y="52" width="320" height="12" fill="#F4F3F1" />
            <text x="410" y="52" fontSize="9" fill="#5656D6" letterSpacing="2" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">ICA II</text>
            <text x="690" y="52" fontSize="9" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif" textAnchor="end">TNT™</text>
            <line x1="390" y1="64" x2="710" y2="64" stroke="#D8D4CC" strokeWidth="0.75" />
            <text x="550" y="126" fontSize="34" fill="#111010" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Composition</text>
            <text x="550" y="158" fontSize="11" fill="#9E9890" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic">How is communication designed?</text>
            <text x="550" y="185" fontSize="10" fill="#5656D6" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">State · Narrative · Structure</text>

            {/* ── ARROW 2 ── */}
            <line x1="714" y1="115" x2="746" y2="115" stroke="#5656D6" strokeWidth="1.2" markerEnd="url(#arr-blue)" />

            {/* ── NODE 3 — Action ── */}
            <rect x="750" y="30" width="320" height="170" rx="2" fill="white" stroke="#D8D4CC" strokeWidth="1" />
            <rect x="750" y="30" width="320" height="34" rx="2" fill="#F4F3F1" />
            <rect x="750" y="52" width="320" height="12" fill="#F4F3F1" />
            <text x="770" y="52" fontSize="9" fill="#5656D6" letterSpacing="2" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">ICA III</text>
            <text x="1050" y="52" fontSize="9" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif" textAnchor="end">K3™</text>
            <line x1="750" y1="64" x2="1070" y2="64" stroke="#D8D4CC" strokeWidth="0.75" />
            <text x="910" y="130" fontSize="42" fill="#111010" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Action</text>
            <text x="910" y="158" fontSize="11" fill="#9E9890" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic">How does communication perform?</text>
            <text x="910" y="185" fontSize="10" fill="#5656D6" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.5">Body · Focus · Language</text>

            {/* ── ELEMENT LISTS ── */}
            {/* Node 1 elements */}
            <text x="50" y="228" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="66" y="228" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Communicational self-awareness</text>
            <text x="50" y="252" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="66" y="252" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Credibility and trust architecture</text>
            <text x="50" y="276" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="66" y="276" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Presence under pressure</text>

            {/* Node 2 elements */}
            <text x="410" y="228" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="426" y="228" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">State and communication readiness</text>
            <text x="410" y="252" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="426" y="252" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Narrative construction</text>
            <text x="410" y="276" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="426" y="276" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Strategic structure and sequencing</text>

            {/* Node 3 elements */}
            <text x="770" y="228" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="786" y="228" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Physical presence and embodiment</text>
            <text x="770" y="252" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="786" y="252" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Attentional focus under pressure</text>
            <text x="770" y="276" fontSize="11" fill="#9E9890" fontFamily="Inter, system-ui, sans-serif">—</text>
            <text x="786" y="276" fontSize="11" fill="#5A5450" fontFamily="Inter, system-ui, sans-serif">Language precision and rhythm</text>

            {/* ── THREE-ACT BAR ── */}
            <rect x="30" y="308" width="1040" height="78" rx="2" fill="#5656D6" />
            {/* Internal dividers */}
            <line x1="377" y1="314" x2="377" y2="380" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <line x1="723" y1="314" x2="723" y2="380" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            {/* Act labels */}
            <text x="50" y="332" fontSize="8" fill="rgba(255,255,255,0.45)" letterSpacing="2.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">BEGINNING</text>
            <text x="397" y="332" fontSize="8" fill="rgba(255,255,255,0.45)" letterSpacing="2.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">MIDDLE</text>
            <text x="743" y="332" fontSize="8" fill="rgba(255,255,255,0.45)" letterSpacing="2.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500">ENDING</text>
            {/* Act descriptions */}
            <text x="50" y="358" fontSize="12.5" fill="white" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Create contact, presence and trust</text>
            <text x="397" y="358" fontSize="12.5" fill="white" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Build message, structure and understanding</text>
            <text x="743" y="358" fontSize="12.5" fill="white" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Move towards action, decision and impact</text>
            {/* Aristotle note */}
            <text x="30" y="376" fontSize="9" fill="rgba(255,255,255,0.35)" fontFamily="Inter, system-ui, sans-serif" fontStyle="italic">Rooted in Aristotelian dramaturgical structure — applied to leadership communication</text>

            {/* ── OUTCOME AXIS ── */}
            <text x="190" y="422" fontSize="8" fill="#9E9890" textAnchor="middle" letterSpacing="2" fontFamily="Inter, system-ui, sans-serif">OUTCOME</text>
            <text x="190" y="446" fontSize="22" fill="#5656D6" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Presence</text>

            {/* Outcome arrows */}
            <line x1="310" y1="436" x2="370" y2="436" stroke="#C8C4BC" strokeWidth="1" markerEnd="url(#arr-subtle)" />

            <text x="550" y="422" fontSize="8" fill="#9E9890" textAnchor="middle" letterSpacing="2" fontFamily="Inter, system-ui, sans-serif">OUTCOME</text>
            <text x="550" y="446" fontSize="22" fill="#5656D6" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Clarity</text>

            {/* Outcome arrow 2 */}
            <line x1="668" y1="436" x2="728" y2="436" stroke="#C8C4BC" strokeWidth="1" markerEnd="url(#arr-subtle)" />

            <text x="910" y="422" fontSize="8" fill="#9E9890" textAnchor="middle" letterSpacing="2" fontFamily="Inter, system-ui, sans-serif">OUTCOME</text>
            <text x="910" y="446" fontSize="22" fill="#5656D6" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="300">Impact</text>

            {/* Bottom caption */}
            <text x="1070" y="510" fontSize="9" fill="#C8C4BC" textAnchor="end" fontFamily="Inter, system-ui, sans-serif" fontStyle="italic">DIAMON ICA Framework™ — from personal presence to organisational impact</text>
          </svg>
        </div>

      </div>
    </section>
  )
}
