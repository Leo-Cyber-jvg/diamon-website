'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const levels = [
  {
    id: 'ICA I',
    model: 'DCI™',
    modelFull: 'Dual Communicational Identity™',
    name: 'Identity',
    nameFi: 'Identiteetti',
    question: 'Who am I as a communicator and leader?',
    questionFi: 'Kuka olen viestijänä ja johtajana?',
    body: 'Most communication problems are identity problems. The DCI™ model maps the tension between who you genuinely are and the role you are required to perform, and builds from it.',
    bodyFi: 'Useimmat viestintäongelmat ovat identiteettiongelmia. DCI™-malli kartoittaa jännitteen aidon persoonan ja johtajaroolin välillä, ja rakentaa siitä lähtökohdasta.',
    elements: [
      'Communicational self-awareness',
      'Credibility and trust architecture',
      'Presence under pressure',
    ],
    elementsFi: [
      'Viestijäidentiteetin itsetuntemus',
      'Uskottavuus- ja luottamusrakenne',
      'Läsnäolo paineen alla',
    ],
    act: 'Beginning',
    actFi: 'Alku',
    actDesc: 'Create contact, presence and trust',
    actDescFi: 'Luo kontakti, läsnäolo ja luottamus',
    outcome: 'Presence',
    outcomeFi: 'Läsnäolo',
    num: '01',
  },
  {
    id: 'ICA II',
    model: 'TNT™',
    modelFull: 'State, Narrative, Action Structure',
    name: 'Composition',
    nameFi: 'Kompositio',
    question: 'How do I build impactful communication with intention?',
    questionFi: 'Miten rakennan vaikuttavan viestinnän intentionaalisesti?',
    body: 'High-performance communication is not improvised, it is composed. The TNT™ model provides the architecture for constructing communication that is strategically coherent before it is delivered.',
    bodyFi: 'Tehokas johtamisviestintä ei synny improvisoimalla, se rakennetaan. TNT™-malli tarjoaa arkkitehtuurin strategisesti johdonmukaisen viestinnän rakentamiseen ennen esittämistä.',
    elements: [
      'State and communication readiness',
      'Narrative construction',
      'Strategic structure and sequencing',
    ],
    elementsFi: [
      'Tila ja viestintävalmius',
      'Narratiivin rakentaminen',
      'Strateginen rakenne ja järjestys',
    ],
    act: 'Middle',
    actFi: 'Keskikohta',
    actDesc: 'Build message, structure and shared understanding',
    actDescFi: 'Rakenna viesti, rakenne ja yhteinen ymmärrys',
    outcome: 'Clarity',
    outcomeFi: 'Selkeys',
    num: '02',
  },
  {
    id: 'ICA III',
    model: 'K3™',
    modelFull: 'Physicality, Focus, Language',
    name: 'Action',
    nameFi: 'Toiminta',
    question: 'How do I communicate it effectively in different situations?',
    questionFi: 'Miten viestin sen tehokkaasti eri tilanteissa?',
    body: 'Architecture without execution is theory. The K3™ model addresses the physicality, focus, and language dimensions of how communication actually lands, where performance psychology meets leadership behaviour.',
    bodyFi: 'Arkkitehtuuri ilman toteutusta on teoriaa. K3™-malli käsittelee kehollisuuden, fokuksen ja kielen ulottuvuuksia, missä suorituspsykologia kohtaa johtamiskäyttäytymisen.',
    elements: [
      'Physicality and embodied presence',
      'Attentional focus under pressure',
      'Language precision and rhythm',
    ],
    elementsFi: [
      'Kehollisuus ja kehollinen läsnäolo',
      'Tarkkaavaisuuden hallinta paineen alla',
      'Kielen tarkkuus ja rytmi',
    ],
    act: 'Ending',
    actFi: 'Loppu',
    actDesc: 'Move towards action, decision and impact',
    actDescFi: 'Vie kohti toimintaa, päätöstä ja vaikutusta',
    outcome: 'Impact',
    outcomeFi: 'Vaikutus',
    num: '03',
  },
]

export default function ICAFrameworkDiagram({ lang = 'en' }: { lang?: 'en' | 'fi' }) {
  const isFi = lang === 'fi'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ backgroundColor: '#F4F3F1' }} ref={ref}>
      <div className="px-6 py-20 mx-auto" style={{ maxWidth: '1200px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14 grid md:grid-cols-2 gap-10 items-end"
        >
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              {isFi ? 'DIAMON ICA Framework™' : 'The DIAMON ICA Framework™'}
            </p>
            <h2
              className="font-light"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, color: 'var(--color-text)' }}
            >
              {isFi ? (
                <>Identiteetti.{' '}<span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Kompositio.</span>{' '}Toiminta.</>
              ) : (
                <>Identity.{' '}<span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Composition.</span>{' '}Action.</>
              )}
            </h2>
          </div>
          <div />
        </motion.div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3" style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}>
          {levels.map((level, i) => (
            <motion.div
              key={level.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              style={{
                borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                borderTop: i > 0 ? '1px solid var(--color-border)' : 'none',
              }}
              className="flex flex-col md:[border-top:none!important]"
            >
              {/* Card top — colored accent bar */}
              <div
                style={{
                  height: '3px',
                  backgroundColor: i === 0 ? '#5656D6' : i === 1 ? '#7B7BE8' : '#A0A0F0',
                }}
              />

              {/* Card header */}
              <div
                className="px-7 pt-7 pb-5 flex items-start justify-between"
                style={{ borderBottom: '1px solid var(--color-border)' }}
              >
                <div>
                  <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
                    {level.id}
                  </p>
                  <h3 className="font-light" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.05, color: 'var(--color-text)' }}>
                    {isFi ? level.nameFi : level.name}
                  </h3>
                </div>
                <span
                  className="text-xs tracking-wide shrink-0 mt-1"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', opacity: 0.6 }}
                >
                  {level.model}
                </span>
              </div>

              {/* Question */}
              <div className="px-7 py-6 flex flex-col" style={{ borderBottom: '1px solid var(--color-border)', flex: 1 }}>
                <p className="text-sm italic" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', lineHeight: 1.4, opacity: 0.8 }}>
                  {isFi ? `"${level.questionFi}"` : `"${level.question}"`}
                </p>
              </div>

              {/* Elements */}
              <div className="px-7 py-6 flex flex-col gap-2.5" style={{ borderBottom: '1px solid var(--color-border)' }}>
                {(isFi ? level.elementsFi : level.elements).map((el) => (
                  <div key={el} className="flex items-start gap-3">
                    <span style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.75rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{el}</span>
                  </div>
                ))}
              </div>

              {/* Aristotle act + outcome */}
              <div className="px-7 py-5" style={{ backgroundColor: 'var(--color-blue)' }}>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
                  {isFi ? level.actFi : level.act}
                </p>
                <p className="text-sm font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
                  {isFi ? level.actDescFi : level.actDesc}
                </p>
              </div>

              {/* Outcome */}
              <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: '#ECEAE6' }}>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  {isFi ? 'Tulos' : 'Outcome'}
                </span>
                <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1rem', letterSpacing: '0.02em' }}>
                  {isFi ? level.outcomeFi : level.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="text-xs mt-5 text-right"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          DIAMON ICA Framework™, {isFi ? 'henkilökohtaisesta läsnäolosta organisaatiovaikutukseen' : 'from personal presence to organisational impact'}
        </p>

      </div>
    </section>
  )
}
