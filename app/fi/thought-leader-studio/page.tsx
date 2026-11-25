import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thought Leader Studio — DIAMON Finland',
  description:
    'DIAMON Thought Leader Studio yhdistää henkilökohtaisen viestintävalmennuksen ja sisällöntuotannon yhdeksi vaikuttavaksi prosessiksi. 100 korkeatasoista LinkedIn-videota vuodessa.',
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
            Liikkuva kuva on nyt yritysviestinnän ytimessä. Kun johtajat ja asiantuntijat
            puhuvat itse, omilla kasvoillaan ja äänellään, syntyy luottamusta, uskottavuutta
            ja inhimillisyyttä.
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

      {/* Mitä se on */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Ajatusjohtajuus, näkyvyys ja viestintävalmennus yhtenä kokonaisuutena
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Modernin ajatusjohtajuuden ytimessä on yritys, jonka ihmiset näkyvät.
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Thought Leader Studio yhdistää DIAMON Annual Leadership Programin ja
              sisällöntuotannon yhdeksi vaikuttavaksi prosessiksi. Vuoden mittainen
              henkilökohtainen viestintävalmennus nivoutuu jatkuvaan sisällöntuotantoon
              ja näkyvyyden rakentamiseen.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Yhdessä nämä muodostavat järjestelmällisen kokonaisuuden, jossa johtajan
              strateginen viestintä ja ajatusjohtajuus vahvistuvat kuukausi kuukaudelta
              mitattavasti, johdonmukaisesti ja arvoa luoden.
            </p>
          </div>

          {/* Rakenne */}
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Rakenne ja toteutus
              </span>
            </div>
            {[
              'Valmisteleva vaihe: sisältöjen suunnittelu ja käsikirjoitus yhteistyössä viestintäjohdon kanssa',
              'Esiintymisvalmennus ja henkilökohtainen valmentaja',
              'Tuki & seuranta sessioiden välillä',
              '1 kuvauspäivä per kuukausi',
              '10 valmista videota per studiopäivä',
              'Tuloksena 100 korkeatasoista LinkedIn-videota vuodessa',
              'Julkaisusuunnitelma ja seuranta, näkyvyydestä mitattavaa ja pitkäjänteistä',
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

      {/* Arvolupaus */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Arvolupaus ja hyödyt
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { n: '01', title: 'Vakuuttava ja johdonmukainen viestintä', body: 'Johto ja asiantuntijat viestivät vakuuttavasti ja johdonmukaisesti, kaikissa kanavissa.' },
            { n: '02', title: 'Asiantuntijuus ja johtajuus näkyväksi', body: 'Yrityksen asiantuntijuus ja johtajuus tulevat näkyviksi tavalla, joka rakentaa uskottavuutta.' },
            { n: '03', title: 'Näkyvyys muuttuu liiketoiminnaksi', body: 'Strateginen näkyvyys rakentaa luottamusta asiakkaisiin, sijoittajiin ja yhteistyökumppaneihin.' },
            { n: '04', title: 'Mitattavaa ja strategisesti ohjattua', body: 'Näkyvyydestä tulee mitattavaa, jatkuvaa ja strategisesti ohjattua, ei satunnaista.' },
          ].map(({ n, title, body }) => (
            <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
              <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Esimerkkivideot — pysty 9:16, 3 kpl rinnakkain */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Esimerkkejä tuotetuista videoista
        </p>
        <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '640px' }}>
          Olemme tehneet merkityksellistä yhteistyötä Suomen Digimarkkinoinnin kanssa
          ajatusjohtajuutta rakentavien lyhytvideoiden parissa LinkedInissä, YouTubessa
          ja TikTokissa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'tuDKr0dif28',
            'Ri0zlk2M-Ds',
            'zv3r1XjjGHk',
          ].map(videoId => (
            <div
              key={videoId}
              style={{
                position: 'relative',
                paddingBottom: '177.78%',
                height: 0,
                overflow: 'hidden',
                backgroundColor: '#000',
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="DIAMON Thought Leader Studio, esimerkki"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Lainaus */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '720px' }}>
          <blockquote>
            <p
              className="text-2xl md:text-3xl font-light mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.4, fontStyle: 'italic' }}
            >
              &ldquo;Esiintymistaito on yleisavain johtamiseen ja vaikuttamiseen. Diamonilta löytyy ainutlaatuisen korkeatasoista osaamista esiintymisen kehittämiseen ja henkilökohtaisuuteen perustuva valmennuskonsepti todellakin toimii.&rdquo;
            </p>
            <footer>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>Tuomas Liisanantti</p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Markkinointijohtaja, SDM</p>
            </footer>
          </blockquote>
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
