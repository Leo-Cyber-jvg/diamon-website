import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tietoa DIAMONista — Johtamisviestintä AI-aikakaudella',
  description:
    'DIAMON kehittää johtamisviestinnän toimintakykyä — auttaa johtajia ja organisaatioita muuttamaan osaamisen ja ajattelun näkyväksi, vaikuttavaksi viestinnäksi.',
}

export default function TietoaPage() {
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
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}
          >
            Tietoa DIAMONista
          </p>
          <h1
            className="font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              maxWidth: '860px',
            }}
          >
            Johtamisviestintä strategisena kilpailuetuna.
          </h1>
          <p
            className="text-lg font-light"
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              maxWidth: '620px',
            }}
          >
            Johtajan kyky viestiä, vaikuttaa ja rakentaa luottamusta on keskeinen osa
            organisaation toimintakykyä. Asiantuntemus ja strateginen ajattelu luovat arvoa,
            kun ne välittyvät ymmärrettävästi, synnyttävät yhteistä näkemystä ja ohjaavat toimintaa.
          </p>
        </div>
      </section>

      {/* Four themes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-12"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Mihin DIAMON perustuu
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            {
              number: '01',
              title: 'Johtamisviestintä strategisena kilpailuetuna',
              body: 'Johtajan kyky viestiä, vaikuttaa ja rakentaa luottamusta on keskeinen osa organisaation toimintakykyä. Asiantuntemus ja strateginen ajattelu luovat arvoa, kun ne välittyvät ymmärrettävästi, synnyttävät yhteistä näkemystä ja ohjaavat toimintaa.',
            },
            {
              number: '02',
              title: 'The Human Edge in the AI Era',
              body: 'Tekoäly ja digitaalinen murros muuttavat tapaamme tuottaa tietoa, viestiä ja tehdä työtä. Samalla henkilökohtainen vuorovaikutus, läsnäolo ja kyky kohdata ihmisiä säilyvät johtamisen keskeisinä taitoina. Vaikuttava viestintä edellyttää selkeyttä, tilannetajua ja kykyä rakentaa yhteys vastaanottajaan — kasvokkain, digitaalisilla alustoilla ja erilaisten yleisöjen edessä.',
            },
            {
              number: '03',
              title: 'Osaamisesta vaikuttavuuteen',
              body: 'DIAMONin lähtökohtana on havainto, että yksilön osaaminen ja henkilökohtainen potentiaali eivät aina välity täysimääräisesti hänen viestinnässään. Kehitämme johtajien ja asiantuntijoiden viestinnällistä toimintakykyä, jotta heidän ajattelunsa, osaamisensa ja ammatillinen identiteettinsä näkyvät vaikuttavammin arjen johtamis- ja vuorovaikutustilanteissa.',
            },
            {
              number: '04',
              title: 'Tavoitteellista ja käytännönläheistä kehittämistä',
              body: 'DIAMONin valmennukset rakentuvat asiakkaan todellisten viestintätilanteiden ja liiketoiminnallisten tavoitteiden ympärille. ICA Framework™ yhdistää viestijän identiteetin, viestin rakentamisen ja käytännön toiminnan järjestelmälliseksi kehittämiskokonaisuudeksi. Tavoitteena on vahvistaa viestinnällistä toimintakykyä, joka tukee yksilön vaikuttavuutta ja organisaation yhteistä onnistumista.',
            },
          ].map(({ number, title, body }) => (
            <div
              key={number}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <span
                className="text-xs tracking-widest"
                style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
              >
                {number}
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

      {/* ICA Framework */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Metodologia
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              ICA Framework™
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Järjestelmällinen kehittämismetodologia, joka yhdistää viestijän identiteetin,
              viestin rakentamisen ja konkreettisen toiminnan toisiinsa.
            </p>
            <Link href="/fi/ica-viitekehys" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Tutustu ICA-viitekehykseen &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { l: 'I — Identity', d: 'Viestijän ammatillinen identiteetti ja henkilökohtainen profiili.' },
              { l: 'C — Composition', d: 'Viestin tarkoituksenmukainen rakentaminen, selkeys ja vaikuttavuus.' },
              { l: 'A — Action', d: 'Viestinnällinen toiminta käytännössä, läsnäolo, kehollisuus ja kieli.' },
            ].map(({ l, d }) => (
              <div key={l} className="flex items-start gap-6 px-8 py-5" style={{ backgroundColor: 'var(--color-background)' }}>
                <span
                  className="text-sm font-light shrink-0"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', minWidth: '110px' }}
                >
                  {l}
                </span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Founder */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          className="text-xs tracking-[0.3em] uppercase mb-16"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Perustaja
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman — Perustaja, DIAMON Finland"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center 75%',
                display: 'block',
              }}
            />
            <div className="mt-4 flex flex-col gap-1">
              <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: '1.1rem' }}>
                Leo Sjöman
              </span>
              <span className="text-xs tracking-wide" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Johtamisviestinnän valmentaja, DIAMON Finland
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Viitekehyksen takana
            </h2>
            <div className="flex flex-col gap-5 text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              <p>
                Leo Sjöman on DIAMONin perustaja ja DIAMON ICA Framework™ -metodologian kehittäjä.
                Hän työskentelee johtajien, johtoryhmien ja organisaatioiden kanssa Pohjoismaissa.
              </p>
              <p>
                Leo on ammattiesiintyjä, jolla on yli 20 vuoden kokemus elokuvasta, televisiosta ja
                teatterista. Tämä tausta ei ole sivuseikka — se on viitekehyksen perusta. Näyttelijäntyö
                vaatii syvällistä käytännön ymmärrystä ihmisen käyttäytymisestä, läsnäolosta, tarinankerronnasta
                ja toimintakyvystä paineen alla. Juuri tämä ymmärrys, sovellettuna johtamiseen ja
                organisaatioihin, tekee DIAMONin lähestymistavasta vaikuttavan.
              </p>
              <p>
                Kun useimmat viestintäkehitysohjelmat toimivat ulkoapäin — muokkaamalla käyttäytymistä
                ja lisäämällä tekniikoita — DIAMON toimii sisältäpäin. Identiteetti ennen tekniikkaa.
                Arkkitehtuuri ennen suoritusta.
              </p>
            </div>
            <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
              {[
                { label: 'Rooli', value: 'Johtamisviestinnän valmentaja, DIAMON Finland' },
                { label: 'Viitekehys', value: 'DIAMON ICA Framework™ — Identity, Composition, Action' },
                { label: 'Tausta', value: 'Ammattiesiintyjä — elokuva, televisio, teatteri (20+ v.)' },
                { label: 'Asiakkaat', value: 'Johtajat, johtoryhmät, organisaatiot' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1 px-5 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{label}</span>
                  <span className="text-sm" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)' }}>{value}</span>
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

      {/* CTA */}
      <section className="px-6 py-24" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <h2
            className="text-2xl md:text-3xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '480px' }}
          >
            Rakennetaan viestinnällistä toimintakykyä, joka vastaa johtajuuden vaatimuksia.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/fi/ota-yhteytta" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
              Ota yhteyttä
            </Link>
            <Link href="/fi/ica-viitekehys" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              Tutustu viitekehykseen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
