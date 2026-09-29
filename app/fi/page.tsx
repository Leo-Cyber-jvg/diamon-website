import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DIAMON Finland — Johtamisviestinnän suorituskyky',
  description: 'DIAMON kehittää johtajien, johtoryhmien ja asiantuntijoiden viestinnällistä suorituskykyä. ICA-viitekehys™ — Identity, Composition, Action.',
}

const problems = [
  {
    situation: 'Strategia on selvä johdolle.',
    gap: 'Se ei tavoita organisaatiota.',
  },
  {
    situation: 'Olet paras asiantuntija huoneessa.',
    gap: 'Se ei näy.',
  },
  {
    situation: 'Viestit kaikkialle.',
    gap: 'Et tavoita ketään.',
  },
]

const services = [
  {
    name: 'Valmistautuminen vaativaan tilanteeseen',
    code: 'Impact Session™',
    for: 'Johtajat, asiantuntijat, toimitusjohtajat',
    duration: '1 päivä',
    outcome: 'Selkeä viesti, varma esiintyminen — tärkeimpään tilanteeseen valmistautuneena.',
    href: '/fi/ohjelmat',
    cta: 'Lue lisää',
  },
  {
    name: 'Vuosiohjelma johtamisviestintään',
    code: 'DECP™',
    for: 'Johtajat, jotka haluavat systemaattisen muutoksen',
    duration: '12 kuukautta',
    outcome: 'Viestintäkyky joka kehittyy mittakaavan mukana — ei kurssina vaan kykynä.',
    href: '/fi/ohjelmat',
    cta: 'Lue lisää',
  },
  {
    name: 'Ajatusjohtajuuden rakentaminen',
    code: 'Thought Leader Studio™',
    for: 'Asiantuntijat, perustajat, julkiset johtajat',
    duration: 'Jatkuva',
    outcome: 'Näkyvä asiantuntijabrändi — rakennettu, ei sattumanvarainen.',
    href: '/fi/ohjelmat',
    cta: 'Lue lisää',
  },
]

const segments = [
  { label: 'Yksilöille', desc: 'Johtajat, asiantuntijat ja toimitusjohtajat', href: '/fi/yksiloille' },
  { label: 'Johtoryhmille', desc: 'Viestinnällinen yhtenäisyys ylimmällä tasolla', href: '/fi/organisaatioille' },
  { label: 'Organisaatioille', desc: 'Viestintäkyky koko organisaatiossa', href: '/fi/organisaatioille' },
]

export default function FiHome() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="flex flex-col justify-center min-h-screen px-6 pt-24 pb-20"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1200px' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}>
            Diamon Finland
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 font-light"
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '860px' }}
          >
            Johtamisviestintä,
            <span style={{ fontStyle: 'italic', opacity: 0.85 }}> joka toimii</span>
            {' '}silloin kun sillä on merkitystä.
          </h1>
          <p
            className="text-lg md:text-xl mb-12 font-light"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.7, maxWidth: '560px' }}
          >
            Kehitämme johtajien, johtoryhmien ja organisaatioiden viestinnällistä suorituskykyä — järjestelmällisesti ja pitkäjänteisesti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/fi/ota-yhteytta" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
              Varaa kartoituskeskustelu
            </Link>
            <Link href="/fi/ohjelmat" className="btn-outline-white">
              Tutustu palveluihin
            </Link>
          </div>
        </div>
      </section>

      {/* ── ONGELMA ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-12" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Tutut tilanteet
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {problems.map((p) => (
            <div key={p.situation} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <p className="text-xl md:text-2xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>
                {p.situation}
              </p>
              <p className="text-xl md:text-2xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontStyle: 'italic', lineHeight: 1.3 }}>
                {p.gap}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.75, maxWidth: '560px' }}>
          Nämä eivät ole viestintäongelmia. Ne ovat johtamisongelmia, joilla on viestinnällinen juuri. DIAMON rakentaa kykyä ratkaista ne — systemaattisesti.
        </p>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── SEGMENTOINTI ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Kenelle
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>
          Löydä oma polkusi.
        </h2>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {segments.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="group p-8 flex flex-col justify-between gap-10"
              style={{ backgroundColor: 'var(--color-background)', textDecoration: 'none', minHeight: '180px' }}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{s.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{s.desc}</p>
              </div>
              <span className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>Lue lisää &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── PALVELUT ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Palvelut
            </p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>
              Mikä sopii sinulle?
            </h2>
          </div>
          <Link href="/fi/ohjelmat" className="link-blue text-sm self-start md:self-auto" style={{ fontFamily: 'var(--font-body)', flexShrink: 0 }}>
            Kaikki ohjelmat &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {services.map((s) => (
            <div key={s.code} className="p-8 flex flex-col gap-5" style={{ backgroundColor: 'var(--color-background)' }}>
              <div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{s.code}</p>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.25 }}>{s.name}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  <span style={{ borderRight: '1px solid var(--color-border)', paddingRight: '12px' }}>{s.duration}</span>
                  <span>{s.for}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{s.outcome}</p>
              <Link href={s.href} className="link-blue text-sm mt-auto" style={{ fontFamily: 'var(--font-body)' }}>
                {s.cta} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── ICA FRAMEWORK (lyhyt) ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              DIAMON ICA Framework™
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>
              Kolme tasoa. Yksi kokonaisuus.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Ammattiesiintyjä ei mieti miltä hän näyttää. Hän miettii mitä hän haluaa toisessa ihmisessä saada aikaan. Siitä ICA-viitekehys syntyi — kahden vuosikymmenen ammattilaisesiintymiskokemuksesta, ei konsultoinnista.
            </p>
            <Link href="/fi/ica-viitekehys" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Tutustu viitekehykseen &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { id: 'ICA I', name: 'Identity — Identiteetti', desc: 'Kuka olet viestijänä. Miten rakennat uskottavuutta ja läsnäoloa.' },
              { id: 'ICA II', name: 'Composition — Kompositio', desc: 'Miten vaikuttava viesti rakennetaan ennen kuin avaat suusi.' },
              { id: 'ICA III', name: 'Action — Toiminta', desc: 'Miten viesti toteutuu paineessa, oikeissa tilanteissa.' },
            ].map((level) => (
              <div key={level.id} className="p-6 flex gap-5 items-start" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="text-xs tracking-widest pt-1 shrink-0" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', minWidth: '44px' }}>{level.id}</span>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>{level.name}</p>
                  <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.65 }}>{level.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── REFERENSSIT (placeholder — lisää asiakaskommentit tähän) ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-12" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Asiakkaat
        </p>
        {/* TODO: Lisää 3–5 spesifistä asiakasreferenssiä tähän.
            Formaatti: lainaus + nimi/rooli/organisaatio (tai anonyymi: "Toimitusjohtaja, fintech-yritys")
            Spesifinen muutos > yleinen kehupuhe. */}
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { quote: '"Viestinnästä tuli johtamisen työkalu — ei pelkkä lisä."', who: 'Toimitusjohtaja' },
            { quote: '"Ensimmäistä kertaa ymmärsin miksi samat sanat toimivat joillain tilanteissa ja epäonnistuvat toisissa."', who: 'Johtoryhmän jäsen, teknologiayritys' },
            { quote: '"Systemaattinen lähestymistapa muutti sekä esiintymisen että itseymmärryksen."', who: 'Perustaja' },
          ].map((r) => (
            <div key={r.who} className="p-8 flex flex-col justify-between gap-8" style={{ backgroundColor: 'var(--color-background)', minHeight: '200px' }}>
              <p className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.5, fontStyle: 'italic' }}>
                {r.quote}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                {r.who}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── LEO / DIAMON TRUST ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              DIAMON Finland
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>
              Kehitetty käytännöstä — ei teoriasta.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              ICA-viitekehys syntyi yli kahden vuosikymmenen ammattiesiintyjäkokemuksesta — elokuvassa, televisiossa ja teatterissa. Kyse ei ole konsultoinnissa kehitetystä mallista vaan siitä, miten ammattilaiset todella rakentavat vaikuttavan suorituksen.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON soveltaa tätä logiikkaa johtamisviestintään: systemaattisesti, mitattavasti ja pitkäjänteisesti.
            </p>
            <Link href="/fi/tietoa" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Leo Sjömanista ja DIAMONista &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { label: 'Perustaja', value: 'Leo Sjöman — 20+ vuotta ammattiesiintyjä, ICA Framework™ kehittäjä' },
              { label: 'Lähestymistapa', value: 'Suorituspsykologia · Rakenteellinen narratiivi · Kehollinen läsnäolo' },
              { label: 'Asiakkaat', value: 'Toimitusjohtajat, johtoryhmät, asiantuntijat ja julkiset johtajat' },
            ].map((item) => (
              <div key={item.label} style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{item.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (kaksitasoinen) ── */}
      <section className="px-6 py-24 text-center" style={{ backgroundColor: 'var(--color-blue)' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
          Seuraava askel
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-4 mx-auto" style={{ fontFamily: 'var(--font-heading)', color: '#fff', maxWidth: '600px', lineHeight: 1.15 }}>
          Oikea keskustelu alkaa tarkasta kysymyksestä.
        </h2>
        <p className="mb-10 mx-auto" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', maxWidth: '440px', lineHeight: 1.75 }}>
          Kuvaile haaste tai tavoite. Ensimmäinen keskustelu on diagnostiikka — ei myyntiprosessi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/fi/ota-yhteytta" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
            Varaa kartoituskeskustelu
          </Link>
          <Link href="/fi/ica-viitekehys" className="btn-outline-white">
            Tutustu viitekehykseen
          </Link>
        </div>
      </section>
    </>
  )
}
