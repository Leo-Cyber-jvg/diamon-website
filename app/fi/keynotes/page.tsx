import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leo Sjöman | Keynote-puheenvuorot — DIAMON Finland',
  description:
    'Leo Sjöman pitää keynote-puheenvuoroja viestinnästä, läsnäolosta, henkilökohtaisesta vaikuttavuudesta ja johtajuudesta paineen alla. Räätälöity organisaationne tavoitteisiin.',
}

export default function KeynotesFiPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ backgroundColor: 'var(--color-blue)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Organisaatioille
          </p>
          <h1
            className="font-light mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            Leo Sjöman
            <span
              className="block mt-3"
              style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.6em' }}
            >
              Keynote-puheenvuorot organisaatioille.
            </span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.8,
              maxWidth: '580px',
            }}
          >
            Puheenvuoroja viestinnästä, läsnäolosta ja henkilökohtaisesta vaikuttavuudesta —
            yli kahden vuosikymmenen ammattiesiintymisen ja johtamisviestinnän valmennuksen
            pohjalta. Sisältö ja painotukset suunnitellaan organisaationne ja yleisönne mukaan.
          </p>
          <Link
            href="/fi/ota-yhteytta"
            className="btn-primary"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Kysy puheenvuorosta
          </Link>
        </div>
      </section>

      {/* Speaker panel */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2" style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          {/* Left: photo */}
          <div style={{ position: 'relative', minHeight: '480px', overflow: 'hidden', backgroundColor: '#111010' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-sjoman-keynote.jpg"
              alt="Leo Sjöman"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.3) 0%, rgba(17,16,16,0.2) 100%)', pointerEvents: 'none' }} />
          </div>
          {/* Right: content */}
          <div className="flex flex-col justify-center" style={{ backgroundColor: 'var(--color-background)', padding: '48px 40px', gap: '24px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Puhuja
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 300, lineHeight: 1.15, color: 'var(--color-text)', margin: 0 }}>
              Leo Sjöman — näyttelijä, yrittäjä ja johtamisviestinnän valmentaja.
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Yli 20 vuotta ammattiesiintyjänä teatterissa, televisiossa ja elokuvissa —
              ja yhtä pitkä kokemus johtajien, asiantuntijoiden ja tiimien valmentamisesta
              viestinnässä, esiintymisessä ja läsnäolossa.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-muted)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Teatteritaiteen maisteri, Taideyliopiston Teatterikorkeakoulu. Hoka Films -tuotantoyhtiön perustajayrittäjä.
              Asiakkaina perheyrityksistä pörssiyhtiöihin ja kansainvälisiin organisaatioihin.
            </p>
            <div>
              <Link
                href="/fi/ota-yhteytta"
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(86,86,214,0.35)', paddingBottom: '3px', textDecoration: 'none' }}
              >
                Kysy puheenvuorosta →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Themes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Keskeisiä teemoja
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              n: '01',
              title: 'Henkilökohtainen vaikuttavuus ja läsnäolo',
              body: 'Mikä tekee ihmisestä kiinnostavan kuunnella — ja miten tätä voidaan kehittää tietoisesti. Läsnäolon, huomion ja luottamuksen suhde ammatillisessa viestinnässä.',
            },
            {
              n: '02',
              title: 'Vuorovaikutus, luottamus ja johtamisviestintä',
              body: 'Miten johtajuus rakentuu ja ilmenee vuorovaikutuksessa. Kuuntelun, selkeyden ja intention rooli olosuhteiden luomisessa, joissa ihmiset voivat toimia parhaimmillaan.',
            },
            {
              n: '03',
              title: 'Esiintyminen, jännitys ja toimintakyky paineen alla',
              body: 'Mitä viestinnälle tapahtuu paineen alla — ja miten säilyttää toimintakyky, selkeys ja vaikuttavuus korkean panoksen tilanteissa. Käytännön välineitä suorituspsykologiasta ja ammattilavan kokemuksesta.',
            },
            {
              n: '04',
              title: 'Ammatillinen identiteetti, rohkeus ja oman äänen löytäminen',
              body: 'Itsetuntemuksen, aitouden ja uskottavuuden suhde. Miten johtajat ja asiantuntijat voivat viestiä aidosta auktoriteetistaan — ei suorituksena, vaan läsnäolona.',
            },
          ].map(({ n, title, body }) => (
            <div
              key={n}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {n}
              </span>
              <h3
                className="text-xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.25 }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Formats */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Formaatti
              </p>
              <h2
                className="text-3xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
              >
                Räätälöity tilaisuutenne ja yleisönne mukaan.
              </h2>
              <p
                className="text-sm leading-relaxed mt-6"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                Puheenvuoron sisältö, kesto ja painotukset suunnitellaan organisaationne
                tavoitteiden ja yleisön mukaan. Leo tutustuu etukäteen kontekstiinne
                — ja toimittaa puheenvuoron, joka tuntuu teille räätälöidyltä,
                ei yleisluontoiselta.
              </p>
            </div>
            <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
              {[
                'Keynote-puheenvuorot: 30–60 minuuttia',
                'Paneelkeskustelut ja moderoidut vuoropuhelut',
                'Workshopkeynote interaktiivisilla elementeillä',
                'Suomeksi ja englanniksi',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 px-6 py-4"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <span
                    style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginTop: '1px', flexShrink: 0 }}
                  >
                    —
                  </span>
                  <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Testimonial */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ maxWidth: '720px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Referenssi
          </p>
          <blockquote>
            <p
              className="text-2xl md:text-3xl font-light mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text)',
                lineHeight: 1.4,
                fontStyle: 'italic',
              }}
            >
              &ldquo;Esiintymistaito on yleisavain johtamiseen ja vaikuttamiseen.
              Diamonilta löytyy ainutlaatuisen korkeatasoista osaamista esiintymisen
              kehittämiseen ja henkilökohtaisuuteen perustuva valmennuskonsepti
              todellakin toimii.&rdquo;
            </p>
            <footer>
              <p className="text-sm font-medium" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>
                Tuomas Liisanantti
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Markkinointijohtaja, SDM
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-24" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ maxWidth: '560px' }}>
            <h2
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              Kysy puheenvuorosta tilaisuuteenne.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Jokainen puheenvuoro suunnitellaan organisaation, yleisön ja tilaisuuden mukaan.
              Keskustelu alkaa siitä, mikä teille on tärkeää.
            </p>
          </div>
          <Link
            href="/fi/ota-yhteytta"
            className="btn-primary shrink-0"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Kysy puheenvuorosta
          </Link>
        </div>
      </section>
    </>
  )
}
