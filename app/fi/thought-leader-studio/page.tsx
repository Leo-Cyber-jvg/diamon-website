import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thought Leader Studio — DIAMON Finland',
  description:
    'DIAMON Thought Leader Studio on rakenteinen coaching-, sisältö- ja videtuotanto-ohjelma, joka muuntaa johtajuusasiantuntemuksen johdonmukaiseksi, uskottavaksi ja strategisesti hallituksi näkyvyydeksi.',
}

export default function ThoughtLeaderStudioFiPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
          >
            DIAMON Finland
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.05, maxWidth: '820px' }}
          >
            Thought Leader Studio
            <span
              className="block mt-3"
              style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.6em' }}
            >
              Ajatusjohtajuus näkyväksi.
            </span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '580px',
              lineHeight: 1.8,
            }}
          >
            Video on nyt yrityviestinnän ytimessä. Kun johtajat ja asiantuntijat viestivät
            omalla äänellään — omalla läsnäolollaan ja auktoriteetillaan — he luovat luottamusta,
            uskottavuutta ja aidon inhimillisen yhteyden.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/fi/ota-yhteytta"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: 'var(--color-blue)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '14px 28px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Varaa konsultaatio
            </Link>
            <Link
              href="/fi/ota-yhteytta"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                padding: '14px 28px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Kysy näkyvyysstrategiasta
            </Link>
          </div>
        </div>
      </section>

      {/* Miksi tämä on tärkeää */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Miksi tämä on tärkeää nyt
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Organisaatiot, joiden ihmiset näkyvät, menestyvät.
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Ajatusjohtajuus ei ole vain henkilökohtainen kilpailuetu — se on strateginen
              organisaatioetu. Johtajat ja asiantuntijat, jotka viestivät näkyvästi ja uskottavasti,
              rakentavat luottamusta asiakkaisiin, sijoittajiin ja yhteistyökumppaneihin.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Thought Leader Studio yhdistää coachingin, strategisen sisällönsuunnittelun ja
              ammattimaisen videtuotannon yhdeksi kokonaisratkaisuksi.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Ohjelma sisältää
              </span>
            </div>
            {[
              'Viestintä- ja esiintymiscoaching',
              'Strateginen sisällönsuunnittelu ja käsikirjoitus',
              'Ammattimainen videotuotanto',
              'Rakenteinen julkaisu- ja näkyvyysstrategia',
              'Oma henkilökohtainen coach ja jatkuva tuki',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Mitä rakennetaan */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä rakennetaan
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { title: 'Viestijäidentiteetti', body: 'Selkeä käsitys siitä, kuka olet asiantuntijana ja miten se näkyy julkisessa viestinnässä.' },
            { title: 'Sisältöstrategia', body: 'Suunnitelma siitä, mistä aiheista puhut, missä kanavissa ja miten usein — strategisesti, ei satunnaisesti.' },
            { title: 'Videoesiintyminen', body: 'Kyky esiintyä kameralle luontevasti, vakuuttavasti ja johdonmukaisesti — eri formaateissa.' },
            { title: 'Julkaisurakenne', body: 'Toistettava prosessi sisällön tuottamiseen, julkaisemiseen ja vaikutuksen mittaamiseen.' },
            { title: 'Ammattimainen tuotanto', body: 'Laadukas videotuotanto, joka tekee asiantuntijuudesta näkyvää ilman teknistä kuormaa.' },
            { title: 'Pitkäjänteinen näkyvyys', body: 'Ei yksittäisiä julkaisuja — systemaattinen ajatusjohtajuuden rakentaminen kuukaudesta toiseen.' },
          ].map(({ title, body }) => (
            <div key={title} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Kenelle */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Kenelle
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Johtajille ja asiantuntijoille, joilla on sanottavaa.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Thought Leader Studio on suunniteltu johtajille, perustajille, johtoryhmän jäsenille
              ja asiantuntijoille, jotka haluavat rakentaa näkyvän, strategisen ja vaikuttavan
              ammatillisen äänen — yksilönä tai organisaationsa edustajana.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              'Toimitusjohtajat ja johtoryhmän jäsenet',
              'Perustajat ja yrittäjät',
              'Asiantuntijat, jotka haluavat näkyä alallaan',
              'Organisaatiot, jotka haluavat tehdä asiantuntemuksensa näkyväksi',
              'Johtajat, jotka rakentavat henkilöbrändiä strategisesti',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', maxWidth: '480px', lineHeight: 1.3 }}>
            Tee asiantuntijuudestasi näkyvää.
          </h2>
          <Link
            href="/fi/ota-yhteytta"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: 'var(--color-blue)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '14px 28px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            Aloita keskustelu
          </Link>
        </div>
      </section>
    </>
  )
}
