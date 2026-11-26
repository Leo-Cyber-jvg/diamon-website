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
        style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#0a0a1a', color: '#fff' }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            filter: 'brightness(0.5) saturate(0.6)',
          }}
        >
          <source src="/sdm-lv-bg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.55) 0%, rgba(10,10,26,0.3) 100%)', pointerEvents: 'none' }} />
        <div className="px-6 pb-20 pt-40" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
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
              Kysy lisää
            </Link>
          </div>
        </div>
      </section>

      {/* Näkemys ajatusjohtajuudesta */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Näkemyksemme ajatusjohtajuudesta
            </p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Ajatusjohtajuudessa on lopulta kyse siitä,{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>kenellä on jotain sanottavaa.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <p>Onko taustalla riittävästi substanssia? Onko näkökulma kiinnostava? Ja osaako ihminen välittää ajatuksensa tavalla, joka tavoittaa toisen ihmisen?</p>
            <p>Tekoälyn muuttaessa tapaamme tuottaa sisältöä nousee entistä kiinnostavammaksi kysymykseksi se, mikä on ihmisen oman ajattelun, kokemuksen ja näkemyksen arvo. Uskomme, että niiden merkitys kasvaa.</p>
            <p>Kasvot, ääni ja henkilökohtainen läsnäolo rakentavat yhteyttä ja luottamusta.</p>
            <p>Ajatusjohtajuuden kehittämisessä ei ole kyse siitä, että tuotetaan enemmän sisältöä sisällön vuoksi. Kyse on todellisesta asiantuntemuksesta, joka kirkastetun näkemyksen, valmennuksen ja laadukkaan tuotannon kautta tavoittaa oikeat ihmiset.</p>
            <p>Kokemuksemme osoittaa, että vahvan asiantuntemuksen, henkilökohtaisen vaikuttavuuden ja korkeatasoisen tuotannon yhdistäminen voi muodostua yritykselle merkittäväksi kaupalliseksi kilpailueduksi.</p>
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
              Yrityksen ajatusjohtajuus rakentuu sen ihmisten kautta.
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
              '1 kuvauspäivä per kuukausi, tuotanto mukana',
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


      {/* Arvolupaus */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Arvolupaus ja hyödyt
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {([
              { n: '01', title: 'Vakuuttava ja johdonmukainen viestintä', body: 'Johto ja asiantuntijat viestivät vakuuttavasti ja johdonmukaisesti, kaikissa kanavissa.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="4" y2="12"/><line x1="7" y1="8" x2="7" y2="16"/><line x1="10" y1="5" x2="10" y2="19"/><line x1="13" y1="8" x2="13" y2="16"/><line x1="16" y1="11" x2="16" y2="13"/><line x1="19" y1="10" x2="19" y2="14"/></svg> },
              { n: '02', title: 'Asiantuntijuus ja johtajuus näkyväksi', body: 'Yrityksen asiantuntijuus ja johtajuus tulevat näkyviksi tavalla, joka rakentaa uskottavuutta.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5V7z"/><path d="M17 7h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2V7z"/><path d="M5 12v3"/><path d="M19 12v3"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/><path d="M9 15a3 3 0 0 0 6 0"/></svg> },
              { n: '03', title: 'Näkyvyys muuttuu liiketoiminnaksi', body: 'Strateginen näkyvyys rakentaa luottamusta asiakkaisiin, sijoittajiin ja yhteistyökumppaneihin.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,17 9,10 13,14 21,5"/><polyline points="17,5 21,5 21,9"/></svg> },
              { n: '04', title: 'Mitattavaa ja strategisesti ohjattua', body: 'Näkyvyydestä tulee mitattavaa, jatkuvaa ja strategisesti ohjattua, ei satunnaista.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/><polyline points="5,9 12,4 19,1"/><polyline points="16,1 19,1 19,4"/></svg> },
            ]).map(({ n, title, body, icon }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', display: 'block', marginBottom: '2px' }}>{icon}</span>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


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


      {/* Lainaus */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '720px' }}>
          <blockquote>
            <p
              className="text-2xl md:text-3xl font-light mb-8"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.4, fontStyle: 'italic' }}
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


      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '600px' }}>
            <h2 className="text-2xl md:text-3xl font-light mb-5" style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
              Aloitetaan keskustelu ajatusjohtajuudestanne.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1rem' }}>
              Onko yrityksessänne erityistä osaamista, kiinnostavia näkemyksiä ja ihmisiä, joiden ääni ansaitsee tulla kuulluksi?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Haluamme ymmärtää yrityksenne tavoitteet ja rakentaa niiden pohjalta kokonaisuuden, joka vahvistaa asiantuntijoidenne vaikuttavuutta ja yrityksenne näkyvyyttä pitkäjänteisesti.
            </p>
          </div>
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
            Varaa keskustelu
          </Link>
        </div>
      </section>
    </>
  )
}
