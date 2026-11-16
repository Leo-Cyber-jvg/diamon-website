import Link from 'next/link'
import type { Metadata } from 'next'
import { BlueprintHomepageSection } from '../components/ArchitectureBlueprint'
import InfluenceCompass from '../components/InfluenceCompass'

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
            className="font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              lineHeight: 1.0,
              maxWidth: '900px',
              letterSpacing: '-0.01em',
            }}
          >
            Uudistamme<br />
            johtamisviestintää.<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Muutamme tapaa johtaa.</span>
          </h1>
          <p
            className="mb-12 font-light"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', lineHeight: 1.75, maxWidth: '500px', fontSize: '1rem' }}
          >
            Rakennamme viestinnällistä suorituskykyä johtajille, johtoryhmille ja organisaatioille — järjestelmällisesti, mitattavasti ja pitkäjänteisesti.
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
              Kehitys, joka tuottaa<br />
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>todellisia tuloksia.</span>
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

      {/* ── ARCHITECTURE OF INFLUENCE ── */}
      <InfluenceCompass />

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── TULOKSET / REFERENSSIT ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Tulokset
          </p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '600px' }}>
            How Diamon coaching strengthens<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>leadership communication.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px mb-16" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { stat: '100 %', label: 'koki johtamisviestintänsä kehittyneen.' },
            { stat: '100 %', label: 'koki ymmärryksensä omasta toiminnastaan vahvistuneen viestintä- ja esiintymistilanteissa.' },
            { stat: '100 %', label: 'koki kykynsä toimia paineen alla vahvistuneen vaativissa viestintä- ja esiintymistilanteissa.' },
          ].map((s) => (
            <div key={s.label} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>
                {s.stat}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="p-10 md:p-14" style={{ backgroundColor: 'var(--color-surface)', borderLeft: '3px solid var(--color-blue)' }}>
          <blockquote className="text-xl md:text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.4, fontStyle: 'italic', maxWidth: '820px' }}>
            &ldquo;Esiintymistaito on yleisavain johtamiseen ja vaikuttamiseen. Diamonilta löytyy ainutlaatuisen korkeatasoista osaamista esiintymisen kehittämiseen ja henkilökohtaisuuteen perustuva valmennuskonsepti todellakin toimii.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Tuomas Liisanantti &mdash; Markkinointijohtaja, SDM
          </p>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── LEO SJÖMAN ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '580px' }}>
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman — Perustaja, Diamon Finland"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
          </div>
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Perustaja
            </p>
            <h2
              className="font-light mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Leo Sjöman
            </h2>
            <p
              className="mb-8 text-sm"
              style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}
            >
              Diamon Finland
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leo Sjöman on näyttelijä, yrittäjä ja johtamisviestinnän valmentaja, joka työskentelee johtajien, asiantuntijoiden ja tiimien kanssa viestinnän, esiintymisen ja vuorovaikutustaitojen kehittämiseksi.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Hän yhdistää työssään strategisen viestinnän, liiketoimintaosaamisen ja yli 20 vuoden ammattiesiintyjäkokemuksen teatterista, televisiosta ja elokuvasta. Leo tunnetaan luottamuksellisen, suoran ja tavoitteellisen työskentelyilmapiirin luojana — jossa opittu siirtyy konkreettisesti arkiseen johtamiseen.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leo on valmentanut johtajia pk-perheyrityksistä kansainvälisiin organisaatioihin ja suuryritysten ylimpään johtoon. Hänellä on teatteritaiteen maisterin tutkinto (Taideyliopisto) ja hän on elokuvatuotantoyhtiö Hoka Filmsin perustaja.
            </p>
            <Link href="/fi/tietoa" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Leo Sjömanista ja DIAMONista &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLUEPRINT ── */}
      <BlueprintHomepageSection />

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
