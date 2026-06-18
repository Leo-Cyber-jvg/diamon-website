import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Yksilöille — DIAMON Finland',
  description: 'Henkilökohtainen johtamisviestinnän valmennus toimitusjohtajille, johtajille, asiantuntijoille ja esiintyjille. Rakenna viestinnällinen suorituskyky, jota roolisi edellyttää.',
}

const audiences = [
  { role: 'Toimitusjohtajat ja liiketoimintajohtajat', desc: 'Johda selkeästi, rakenna luottamusta hallituksessa ja sidosryhmissä, viesti strategia niin että se luo yhdensuuntaisuutta.' },
  { role: 'Johtajat ja ylimmän johdon jäsenet', desc: 'Vahvista johtajaläsnäoloa, johda vaativia keskusteluita ja suorita johdonmukaisesti paineessa.' },
  { role: 'Yrittäjät ja perustajat', desc: 'Rakenna viestinnällinen auktoriteetti, joka vastaa osaamistasi — sijoittajien, median, tiimien ja asiakkaiden suuntaan.' },
  { role: 'Hallituksen jäsenet', desc: 'Hallitse huone, rakenna monimutkaiset argumentit selkeästi ja johda hallitusdynamiikkaa täsmällisesti.' },
  { role: 'Huippu-urheiluvalmentajat', desc: 'Siirrä suorituskyvyn metodologia johtamisviestintään — sama kurinalaisuus, eri areena.' },
  { role: 'Puhujat ja asiantuntijat', desc: 'Rakenna johdonmukainen, uskottava viestintäprofiili keynoteissa, mediassa, digitaalisesti ja livenä.' },
  { role: 'Ajatusjohtajuutta kehittävät asiantuntijat', desc: 'Luo strateginen henkilökohtainen viestintäalusta, joka muuttaa osaamisen näkyväksi auktoriteetiksi.' },
  { role: 'Ammattivalmentajat', desc: 'Syvennä omaa viestintäosaamistasi ja integroi ICA-viitekehys omaan valmennuspraktiikkaasi.' },
]

const offerings = [
  { id: '01', title: 'Johtajan viestintävalmennus', duration: 'Jatkuva — rakenteellinen ohjelma', desc: 'Henkilökohtainen valmennuskokonaisuus, joka rakentuu DIAMON ICA-viitekehyksen™ varaan. Kehitämme viestintäidentiteettiäsi, vahvistamme viestirakennettasi ja rakennamme toteutuskykyä vaativiin tilanteisiin.', outcomes: ['Henkilökohtainen ICA-viestintäprofiili', 'Strateginen narratiivijärjestelmä', 'Johtajaläsnäolo paineessa'] },
  { id: '02', title: 'Johtamisviestinnän vuosiohjelma', duration: '12 kuukautta — 6 syväsukellusta', desc: 'Rakenteellinen vuosiohjelma, joka yhdistää koko ICA-viitekehyksen säännöllisiin valmennusistuntoihin, edistymisarviointeihin ja jatkuvaan kehitykseen. Johtajille, jotka pitävät viestintää strategisena infrastruktuurina.', outcomes: ['ICA I–III kokonaisuus', '6 syvävalmennusta vuodessa', 'Viestinnällisen suorituskyvyn seuranta'] },
  { id: '03', title: 'Johtajaläsnäolon kehittäminen', duration: 'Kohdennettu — joustava muoto', desc: 'Kehitä johtajaläsnäolon fyysisyyden, fokuksen ja kielen ulottuvuuksia. Perustuu ICA III — K3™ (Fyysisyys, Fokus, Kieli) — tämä valmennus kohdistuu siihen, miten olet läsnä, hallitset huoneen ja johdat vuorovaikutusta.', outcomes: ['K3™-läsnäoloarkkitehtuuri', 'Suoritus paineessa', 'Vuorovaikutuksen johtaminen'] },
  { id: '04', title: 'Viestintä paineessa', duration: 'Intensiivi — 1 tai 2 päivää', desc: 'Suorituspsykologia kohtaa viestinnän toteutuksen. Suunniteltu johtajille vaativissa rooleissa: kriisiviestintä, hallitustason esiintyminen, sijoittajavuorovaikutus, mediaesiintyminen, kriittiset neuvottelut.', outcomes: ['Paineviestinnän järjestelmä', 'ICA-tilajohtaminen', 'Suoritus oikeissa tilanteissa'] },
  { id: '05', title: 'Media- ja kameravalmennus', duration: 'Istuntoperusteinen — etä tai studio', desc: 'Johtajille ja asiantuntijoille, jotka valmistautuvat mediahaastatteluihin, podcast-esiintymisiin, keynote-esityksiin tai video-first-viestintään. Kameraläsnäolo, viestinkuri ja mediavuorovaikutus — rakenteellisesti ja käytännöllisesti.', outcomes: ['Kamera- ja medialäsnäolo', 'Viestinhallinta kysymysten alla', 'Videoviestintäalusta'] },
  { id: '06', title: 'Ajatusjohtajuuden kehittäminen', duration: 'Jatkuva — rakenteellinen ohjelma', desc: 'Rakenna strateginen henkilökohtainen viestintäalusta, joka muuttaa asiantuntemuksesi johdonmukaiseksi, uskottavaksi ja näkyväksi ajatusjohtajuudeksi. Yhdistää ICA-valmennuksen strategiseen sisältösuuntaan ja alustan kehittämiseen.', outcomes: ['Henkilökohtainen ajatusjohtajuusprofiili', 'Sisältö- ja viestintästrategia', 'Näkyvyys- ja auktoriteetinalusta'] },
]

export default function YksiloillePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-24 flex flex-col justify-center" style={{ backgroundColor: 'var(--color-blue)', minHeight: '70vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>Yksilöille</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Viestintäsi pitää toimia
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> roolisi vaatimalla tasolla.</span>
          </h1>
          <p className="text-lg font-light mb-12" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '580px' }}>
            Henkilökohtainen johtamisviestinnän valmennus johtajille, yrittäjille, asiantuntijoille ja suorituskykyammattilaisille, jotka haluavat kuroa umpeen kuilun osaamisen ja sen vaikuttavuuden välillä.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>Varaa konsultaatio</Link>
            <Link href="/fi/ica-viitekehys" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>ICA-viitekehys</Link>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Kenelle tämä sopii</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {audiences.map(({ role, desc }) => (
            <div key={role} className="p-7 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
              <h3 className="text-base font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>{role}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Approach */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Lähestymistapa</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Tämä ei ole esiintymiskoulutus.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> Tämä on viestintäarkkitehtuuri.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Jokainen yksilövalmennus rakentuu DIAMON ICA-viitekehyksen™ varaan — omistautuneelle metodologialle, joka kehittää viestintäkykyä kolmella integroidulla tasolla: identiteetti, kompositio ja toiminta.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Työ ei koske esiintymistekniikkaa. Se koskee henkilökohtaisen viestintäjärjestelmän rakentamista, joka toimii johdonmukaisesti — kontekstista riippumatta, paineessa ja sillä tasolla, jota johtajuus vaatii.
            </p>
            <Link href="/fi/ica-viitekehys" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>Tutustu ICA-viitekehykseen →</Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { label: 'ICA I — Identiteetti', model: 'DCI™', desc: 'Kuka olet viestijänä. Uskottavuutesi, läsnäolosi, ammatillinen viestintäidentiteettisi.' },
              { label: 'ICA II — Kompositio', model: 'SNS™', desc: 'Miten rakennat vaikuttavan viestinnän. Tila, narratiivi, rakenne ja strateginen intentio.' },
              { label: 'ICA III — Toiminta', model: 'K3™', desc: 'Miten suoritat oikeissa tilanteissa. Fyysisyys, fokus, kieli — toteutus paineessa.' },
            ].map(({ label, model, desc }) => (
              <div key={label} className="px-7 py-6 flex flex-col gap-2" style={{ backgroundColor: 'var(--color-background)' }}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{label}</span>
                  <span className="text-xs" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{model}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Offerings */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Yksilövalmennukset</p>
        <h2 className="text-3xl md:text-4xl font-light mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '600px' }}>
          Rakennettu nykytilanteesi mukaan. Suunniteltu tulevaisuuttasi varten.
        </h2>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {offerings.map((o) => (
            <div key={o.id} className="grid md:grid-cols-3 gap-0" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs tracking-widest block mb-3" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{o.id}</span>
                <h3 className="text-xl font-light mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>{o.title}</h3>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{o.duration}</span>
              </div>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{o.desc}</p>
              </div>
              <div className="px-8 py-8">
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulokset</p>
                <div className="flex flex-col gap-2">
                  {o.outcomes.map((out) => (
                    <div key={out} className="flex items-start gap-3">
                      <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* How it works */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Näin se toimii</p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { step: '1', title: 'ICA-lähtötason arviointi', body: 'Aloitamme tarkalla arvioinnilla nykyisestä viestintäidentiteetistäsi, -arkkitehtuuristasi ja suorituksestasi kaikilla kolmella ICA-tasolla.' },
            { step: '2', title: 'Ohjelman suunnittelu', body: 'Roolisi, tavoitteidesi ja konkreettisten viestintähaasteidesi perusteella suunnittelemme henkilökohtaisen kehitysohjelman.' },
            { step: '3', title: 'Kehitys ja suoritus', body: 'Rakenteellinen valmennus, oikeissa tilanteissa harjoittelu, edistymisarvioinnit ja jatkuva tarkentaminen — suunniteltu mitattavaan muutokseen.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{step}</span>
              <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '480px' }}>Ensimmäinen keskustelu on diagnostiikka.</h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>Tunnistamme konkreettisen kehityskohteen ennen kuin ehdotamme mitään.</p>
          </div>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>
            Varaa konsultaatio
          </Link>
        </div>
      </section>
    </>
  )
}
