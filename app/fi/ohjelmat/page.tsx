import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ohjelmat — DIAMON Finland',
  description: 'DIAMON lippulaivaohjelmia johtajille ja organisaatioille. DECP™, DLCP™, DCPL™ ja DICA™ — kehityspolkuja, ei koulutuspäiviä.',
}

const programmes = [
  {
    id: '01', code: 'DECP™',
    title: 'DIAMON Executive Communication Programme™',
    tagline: 'Kattavin yksilöllinen kehityspolku',
    duration: '12 kuukautta — 6 syväistuntoa',
    audience: 'Toimitusjohtajat, johtajat, hallituksen jäsenet, ylimmän johdon edustajat',
    desc: 'DIAMONin kattavin yksilöllinen johtamisviestinnän kehitysohjelma. 12 kuukauden rakenteellinen matka läpi koko DIAMON ICA-viitekehyksen™ — viestintäidentiteetin, viestirakenteiden ja suorituskyvyn rakentaminen perustasta lähtien.',
    structure: ['ICA-lähtötason arviointi ja viestintäprofiili', 'ICA I — Identiteetti ja DCI™-kehitys', 'ICA II — Kompositio ja TNT™-arkkitehtuuri', 'ICA III — Toiminta ja K3™-suoritus', 'Vaativien tilanteiden integraatio', 'Loppuarviointi ja eteenpäin suunnitelma'],
    outcomes: 'Täydellinen henkilökohtainen viestintäarkkitehtuuri — identiteetti, kompositio ja toiminta — yhdensuuntaistettuna roolisi, tavoitteidesi ja johtajuuden vaatimusten kanssa.',
  },
  {
    id: '02', code: 'DLCP™',
    title: 'DIAMON Leadership Communication Programme™',
    tagline: 'Johtoryhmän yhteinen viestintäarkkitehtuuri',
    duration: '6–12 kuukautta — tiimi- ja yksilömuoto',
    audience: 'Johtoryhmät, johtoryhmän jäsenet, ylimmän johdon tiimit',
    desc: 'Rakenteellinen ohjelma, joka kehittää yhteistä viestintäkykyä johtoryhmässä. Yhdistää tiimitason arkkitehtuurin ja yksilöllisen ICA-kehityksen — rakentaen viestintäkykyisen johtamiskerroksen, joka toimii yhdensuuntaisesti, täsmällisesti ja yhteisellä kielellä.',
    structure: ['Tiimin viestintäauditointi ja lähtötaso', 'Jaettu narratiivi ja viestintäarkkitehtuuri', 'Yksilöllinen ICA-kehitys kaikille osallistujille', 'Vuorovaikutus- ja yhdensuuntaisuustyöpajat', 'Vaativien tilanteiden valmistautuminen', 'Yhteinen loppuarviointi ja eteenpäin suunnitelma'],
    outcomes: 'Johtoryhmä, joka viestii yhteisellä arkkitehtuurilla, johdonmukaisella läsnäololla ja strategisella yhdensuuntaisuudella — sisäisesti ja ulkoisesti.',
  },
  {
    id: '03', code: 'DCPL™',
    title: 'DIAMON Communication Performance Lab™',
    tagline: 'Korkean paineen viestinnällinen suorituskyvyn treeni',
    duration: '1–3 päivää — intensiivimuoto',
    audience: 'Johtajat ja edustajat, jotka valmistautuvat vaativiin tilanteisiin',
    desc: 'Intensiivinen, rakenteellinen viestinnällisen suorituskyvyn valmennus hetkiin, jolloin suorituksella on eniten merkitystä. Pääomamarkkinapäivät, sijoittajapäivät, mediakampanjat, hallitustason esitykset, kriisiviestintä. Lab yhdistää painesimulaation, oikeissa tilanteissa harjoittelun ja ICA-pohjaisen valmennuksen.',
    structure: ['Esivalmistelu: viestintäauditointi ja tavoitteiden asettaminen', 'Viesti- ja narratiiviarkkitehtuurin työpaja', 'Painesimulaatio ja valmennus — live-muoto', 'Media- ja Q&A-vuorovaikutuksen suoritus', 'Yksilölliset ja yhteiset palautistunnot', 'Jälkiarviointi ja eteenpäin suositukset'],
    outcomes: 'Johtoryhmä tai edustaja, joka suoriutuu täsmällisesti, auktoriteetilla ja rauhallisesti silloin kun panokset ovat korkeimmillaan.',
  },
  {
    id: '04', code: 'DICA™',
    title: 'DIAMON ICA Academy™',
    tagline: 'Skaalautuva viestintäkyky koko organisaatiolle',
    duration: 'Jatkuva — modulaarinen rakenne',
    audience: 'Organisaatiot, jotka rakentavat pitkäaikaista viestintäkykyä laajassa mittakaavassa',
    desc: 'Skaalautuva, modulaarinen ohjelma, joka tuo DIAMON ICA-viitekehyksen™ organisaatioon systemaattisena kehitysjärjestelmänä. Suunniteltu organisaatioille, jotka haluavat viestintäkyvystä organisatorisen perusosaamisen — ei kertaluonteisen hankkeen.',
    structure: ['ICA-viitekehyksen esittely ja organisaatiollinen arviointi', 'Modulaarinen kehitysohjelma johtamiskerroksissa', 'Sisäisten ICA-fasilitaattorien kehittäminen', 'Viestintäkyvyn seuranta ja mittaaminen', 'Jatkuva valmennus, tuki ja sisältöjärjestelmä', 'Vuosiarviointi ja ohjelman kehittäminen'],
    outcomes: 'Viestintäkyky organisatorisena infrastruktuurina — mitattavana, skaalautuvana ja jatkuvasti kehittyvänä.',
  },
]

export default function OhjelmatPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-24" style={{ backgroundColor: 'var(--color-blue)', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>Ohjelmat</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Kehityspolkuja,
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> ei koulutuspäiviä.</span>
          </h1>
          <p className="text-lg font-light mb-12" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '560px' }}>
            Neljä lippulaivaohjelaa, jotka rakentuvat DIAMON ICA-viitekehyksen™ varaan. Suunniteltu johtajille, johtoryhmille ja organisaatioille, jotka suhtautuvat vakavasti pitkäaikaiseen viestinnälliseen suorituskykyyn.
          </p>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>
            Kysy ohjelmista
          </Link>
        </div>
      </section>

      {/* Programme strip */}
      <section style={{ backgroundColor: '#ECEAE6', borderBottom: '1px solid var(--color-border)' }}>
        <div className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: 'var(--color-border)' }}>
          {programmes.map((p) => (
            <div key={p.id} className="px-6 py-4" style={{ backgroundColor: '#ECEAE6' }}>
              <p className="text-xs tracking-widest mb-1" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{p.code}</p>
              <p className="text-xs font-light" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.4 }}>{p.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes */}
      {programmes.map((p, idx) => (
        <div key={p.id}>
          <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="grid md:grid-cols-3 gap-16">
              <div className="md:col-span-1">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{p.id}</span>
                  <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{p.code}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>{p.title}</h2>
                <p className="text-sm italic mb-6" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{p.tagline}</p>
                <div className="flex flex-col gap-2 mb-6">
                  <div>
                    <span className="text-xs tracking-widest uppercase block mb-1" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Kesto</span>
                    <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{p.duration}</span>
                  </div>
                  <div>
                    <span className="text-xs tracking-widest uppercase block mb-1 mt-3" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Kohderyhmä</span>
                    <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{p.audience}</span>
                  </div>
                </div>
                <Link href="/fi/ota-yhteytta" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>Kysy tästä ohjelmasta →</Link>
              </div>
              <div className="md:col-span-1">
                <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{p.desc}</p>
                <div style={{ borderLeft: '2px solid var(--color-blue)', paddingLeft: '16px' }}>
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulos</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>{p.outcomes}</p>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
                  <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
                    <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Ohjelman rakenne</span>
                  </div>
                  {p.structure.map((item, i) => (
                    <div key={item} className="flex items-start gap-4 px-6 py-3" style={{ backgroundColor: 'var(--color-background)' }}>
                      <span className="text-xs shrink-0 mt-0.5" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {idx < programmes.length - 1 && (
            <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
            </div>
          )}
        </div>
      ))}

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '500px' }}>Oikea ohjelma alkaa oikeasta keskustelusta.</h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>Määrittelemme laajuuden ja tavoitteen ennen kuin ehdotamme mitään.</p>
          </div>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>Kysy ohjelmista</Link>
        </div>
      </section>
    </>
  )
}
