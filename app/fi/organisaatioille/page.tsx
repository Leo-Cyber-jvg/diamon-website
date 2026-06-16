import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Organisaatioille — DIAMON Finland',
  description: 'Johtamisviestinnän suorituskyky johtoryhmille, asiantuntijoille ja organisaatioille. Rakennamme viestintäkyvyn strategisena infrastruktuurina — ei yksittäisenä koulutuspäivänä.',
}

const challenges = [
  { n: '01', title: 'Strategia, joka ei tavoita', body: 'Strategia on ylätasolla selkeä. Siihen mennessä, kun se tavoittaa organisaation, se on menettänyt tarkkuutensa, kiireellisyytensä ja suuntansa. Kuilu ei ole strategiassa — se on viestintäarkkitehtuurissa.' },
  { n: '02', title: 'Johtoryhmä, joka ei puhu samaa kieltä', body: 'Jokainen johtaja viestii omaa versiotaan. Tuloksena on hajautumista, sekaannusta ja kilpailevia narratiiveja. Viestinnällinen yhdensuuntaisuus on johtamiskykyä — ei viestintäosaston tehtävä.' },
  { n: '03', title: 'Asiantuntijuus, joka ei muutu uskottavuudeksi', body: 'Asiantuntijat ja spesialistit tietävät enemmän kuin kukaan huoneessa. Mutta heidän kykynsä viestiä tätä osaamista — sijoittajille, hallituksille, asiakkaille, medialle — ei usein vastaa tietämyksen syvyyttä.' },
  { n: '04', title: 'Muutosviestintä, joka epäonnistuu', body: 'Useimmat muutoshankkeet epäonnistuvat ei itse muutoksen vaan sen viestimisen takia. Rakenne, ajoitus, kehystäminen ja johtamisviestintä muutoksen takana ratkaisevat, seuraavatko ihmiset.' },
  { n: '05', title: 'Vaativat hetket ilman valmistautumista', body: 'Pääomamarkkinapäivät, sijoittajaesitykset, mediaesiintymiset, hallituskokoukset, henkilöstötilaisuudet. Nämä hetket määrittävät mielikuvan. Useimmat organisaatiot valmistelevat sisällön ja laiminlyövät viestinnällisen suorituksen.' },
  { n: '06', title: 'Viestintäkyky, joka ei skaalaudu', body: 'Yksi erinomainen viestijä johdossa ei tee viestintäkykyistä organisaatiota. Kyky täytyy kehittää järjestelmällisesti, johtamiskerroksessa, organisatorisena infrastruktuurina.' },
]

const solutions = [
  { id: '01', title: 'Johtamisviestinnän arkkitehtuuri', audience: 'Johtoryhmät, hallitukset', desc: 'Rakenteellinen kokonaisuus, joka rakentaa yhteisen viestintäarkkitehtuurin johtoryhmälle. Yhdensuuntainen narratiivi, johdonmukainen läsnäolo, jaettu vuorovaikutuskyky.', what: ['Organisatorinen viestintäauditointi', 'Jaettu johtamisnarratiivi', 'ICA-pohjainen tiimin kyvykkyysohjelma', 'Vuorovaikutus- ja yhdensuuntaisuustyöpajat', 'Jatkuva kehitys ja seuranta'] },
  { id: '02', title: 'Johtajan viestintäkehitys', audience: 'Yksittäiset johtajat osana organisaatiota', desc: 'Rakenteellinen henkilökohtainen viestintäkehitys johtajille organisaatiokontekstissa. Yhdistää yksilöllisen ICA-kehityksen organisatorisiin viestintätavoitteisiin ja strategiseen yhdensuuntaisuuteen.', what: ['Henkilökohtainen ICA-lähtötaso ja profiili', 'Johtajaläsnäolo ja uskottavuus', 'Sidosryhmäviestinnän arkkitehtuuri', 'Vaativien tilanteiden valmistautuminen', 'Edistymisseuranta ja kehitysarvioinnit'] },
  { id: '03', title: 'Asiantuntijaviestinnän ohjelma', audience: 'Asiantuntijat, spesialistit, edustajat', desc: 'Organisaatioille, joilla on asiantuntijoita jotka joutuvat viestimään monimutkaista tietoa selkeästi ja vaikuttavasti — hallituksille, asiakkaille, medialle, sijoittajille tai johdolle.', what: ['Asiantuntijan viestintäprofiili', 'Selkeys- ja rakennemetodologia', 'Media- ja sidosryhmävalmistautuminen', 'Kamera- ja digitaalinen viestintä', 'ICA III — K3™-läsnäolokehitys'] },
  { id: '04', title: 'Muutosviestinnän johtaminen', audience: 'Muutosta läpikäyvät johtoryhmät', desc: 'Viestintäarkkitehtuuri organisaatiomuutokseen. Rakennamme johtoryhmien kanssa viestintärakenteen, narratiivin ja kyvyn, joka mahdollistaa muutoksen laskeutumisen — ei pysähtymisen tai hajoamisen.', what: ['Muutosviestintästrategia', 'Johtamisnarratiivin arkkitehtuuri', 'Sisäisen viestinnän suunnittelu', 'Johtamisviestinnän valmennus', 'Viestinnän mittaaminen ja säätö'] },
  { id: '05', title: 'Viestinnän suorituskyvyn laboratorio', audience: 'Johtoryhmät ja avainhenkilöt', desc: 'Intensiivinen, rakenteellinen viestinnällisen suorituskyvyn valmennus organisaatioille, jotka valmistautuvat pääomamarkkinapäiviin, sijoittajapäiviin, mediakampanjoihin tai hallitustason esityksiin.', what: ['Oikeiden tilanteiden painesimulaatio', 'Viestiarkkitehtuuri paineessa', 'Edustajien ja johdon valmistautuminen', 'Media- ja kysymystenvastaustreeni', 'Jälkiarviointi ja kehityssuositukset'] },
  { id: '06', title: 'ICA-kyvykkyysohjelma', audience: 'Organisaatiot, jotka rakentavat pitkäaikaista viestintäkykyä', desc: 'Skaalautuva, rakenteellinen ohjelma, joka rakentaa ICA-pohjaisen viestintäkyvyn organisaation johtamiskerrokseen. Suunniteltu pitkäaikaiseen vaikutukseen — ei yksittäiseen kehitystapahtumaan.', what: ['ICA-viitekehyksen käyttöönotto johtamiskerroksessa', 'Rakenteellinen kehitysohjelman suunnittelu', 'Edistymismittaus ja seuranta', 'Sisäisen viestintäkulttuurin kehittäminen', 'Skaalautuva valmennusjärjestelmä'] },
]

export default function OrganisaatioillePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-24 flex flex-col justify-center" style={{ backgroundColor: 'var(--color-blue)', minHeight: '70vh' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>Organisaatioille</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '860px' }}>
            Organisaatiot viestivät
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> johtamiskerroksen tasolla.</span>
          </h1>
          <p className="text-lg font-light mb-12" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '580px' }}>
            Rakennamme viestintäkyvyn organisatorisena infrastruktuurina — järjestelmällisesti, johtamiskerroksessa, kestävällä tavalla.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>Ota yhteyttä</Link>
            <Link href="/fi/ica-viitekehys" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>ICA-viitekehys</Link>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Missä viestintä epäonnistuu organisaatioissa</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {challenges.map(({ n, title, body }) => (
            <div key={n} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
              <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Approach */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Lähestymistapamme</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Viestintäkyky ei ole pehmeä taito.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> Se on infrastruktuuri.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON rakentaa viestintäkyvyn organisatorisena infrastruktuurina — ei yksittäisinä koulutustaphtumina. Jokainen kokonaisuus perustuu DIAMON ICA-viitekehykseen™ ja on suunniteltu mitattavaan, pitkäaikaiseen vaikutukseen.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Emme aloita työtä ennen kuin meillä on tarkka määritelmä siitä, mitä pitää muuttua, millä tasolla ja mitä se tarkoittaa organisaatiolle kun se tapahtuu.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { title: 'Järjestelmällistä, ei episodista', body: 'Viestintäkehitys, joka rakentuu ajan myötä — ei työpaja, joka haalistuu viikkojen sisällä.' },
              { title: 'Johtamiskerroksen fokus', body: 'Merkittävin kyky asuu johtamiskerroksessa. Siellä me työskentelemme.' },
              { title: 'Mitattavat tulokset', body: 'Jokainen kokonaisuus on suunniteltu määritellyn tuloksen ympärille. Seuraamme edistymistä sitä vasten.' },
              { title: 'ICA-viitekehyksen™ varaan rakennettu', body: 'Todistettu, omistautunut metodologia — ei geneerinen viestintämalli koulutuskatalogin lehdiltä.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ borderLeft: '2px solid var(--color-blue)', paddingLeft: '20px' }}>
                <h3 className="text-base font-light mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Solutions */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Organisaatioratkaisut</p>
        <h2 className="text-3xl font-light mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '560px' }}>Rakennettu haasteesi mukaan. Suunniteltu pitkäjänteisyydelle.</h2>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {solutions.map((s) => (
            <div key={s.id} className="grid md:grid-cols-3 gap-0" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs tracking-widest block mb-3" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{s.id}</span>
                <h3 className="text-xl font-light mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>{s.title}</h3>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{s.audience}</span>
              </div>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{s.desc}</p>
              </div>
              <div className="px-8 py-8">
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Sisältö</p>
                <div className="flex flex-col gap-2">
                  {s.what.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '500px' }}>Jokainen yhteistyö alkaa oikeasta kysymyksestä.</h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>Mitä pitää muuttua — ja mitä se tarkoittaa kun se tapahtuu?</p>
          </div>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>Ota yhteyttä</Link>
        </div>
      </section>
    </>
  )
}
