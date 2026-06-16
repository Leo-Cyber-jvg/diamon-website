import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DIAMON Finland — Johtamisviestinnän suorituskyky',
  description: 'DIAMON kehittää johtajien, johtoryhmien ja asiantuntijoiden viestinnällistä suorituskykyä. ICA-viitekehys™ — Identity, Composition, Action.',
}

export default function FiHome() {
  return (
    <>
      {/* Hero */}
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
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.7, maxWidth: '580px' }}
          >
            Kehitämme johtajien, johtoryhmien ja asiantuntijoiden viestinnällistä suorituskykyä — järjestelmällisesti, mitattavasti ja pitkäjänteisesti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/fi/ota-yhteytta" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
              Ota yhteyttä
            </Link>
            <Link href="/fi/ica-viitekehys" className="btn-outline-white">
              ICA-viitekehys
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Lähtökohta
            </p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}>
              Automaation kiihtyessä inhimillinen kyky luoda luottamusta, selkeyttä ja strategista yhdensuuntaisuutta kasvaa eksponentiaalisesti arvokkaammaksi.
            </h2>
          </div>
          <div className="flex flex-col gap-6 pt-2 md:pt-12">
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              DIAMON Finland on johtamisviestinnän suorituskykyyn erikoistunut yritys. Työskentelemme johtajien, toimitusjohtajien ja organisaatioiden kanssa, joiden viestinnän on toimittava todellisen osaamisen tasolla.
            </p>
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Työmme perustuu suorituspsykologiaan, rakenteelliseen narratiiviteoriaan ja yli kahden vuosikymmenen ammattilaisesiintyjäkokemukseen. Kyse ei ole esiintymiskoulutuksesta. Kyse on viestintäarkkitehtuurista.
            </p>
            <Link href="/fi/tietoa" className="link-blue text-sm self-start" style={{ fontFamily: 'var(--font-body)' }}>
              Leo Sjömanista ja DIAMONista &rarr;
            </Link>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ICA pillars */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            DIAMON ICA Framework™
          </p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            Kolme tasoa. Yksi kokonaisuus.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { id: 'ICA I', model: 'DCI™', name: 'Identity', fi: 'Identiteetti', desc: 'Dual Communicational Identity™ — kuka olet viestijänä, miten rakennat uskottavuutta ja miten säilytät läsnäolon painetilanteissa.' },
            { id: 'ICA II', model: 'TNT™', name: 'Composition', fi: 'Kompositio', desc: 'Tila, narratiivi, rakenne. Miten vaikuttava johtamisviestintä rakennetaan ennen kuin avaat suusi.' },
            { id: 'ICA III', model: 'K3™', name: 'Action', fi: 'Toiminta', desc: 'Keho, fokus, kieli. Miten viestintä toteutetaan paineessa, oikeissa tilanteissa, oikeilla panoksilla.' },
          ].map((p) => (
            <div key={p.id} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="flex items-baseline gap-3">
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{p.id}</span>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{p.model}</span>
              </div>
              <h3 className="text-2xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{p.fi}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/fi/ica-viitekehys" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Tutustu ICA-viitekehykseen &rarr;
          </Link>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-24 text-center" style={{ backgroundColor: 'var(--color-blue)' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
          Seuraava askel
        </p>
        <h2 className="text-3xl md:text-5xl font-light mb-8 mx-auto" style={{ fontFamily: 'var(--font-heading)', color: '#fff', maxWidth: '600px', lineHeight: 1.15 }}>
          Oikea keskustelu alkaa tarkasta kysymyksestä.
        </h2>
        <Link href="/fi/ota-yhteytta" className="btn-outline-white">
          Ota yhteyttä
        </Link>
      </section>
    </>
  )
}
