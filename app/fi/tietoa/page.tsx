import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../../../components/ICAFrameworkSection'

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
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0d0c0c',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Kopf_des_Aristoteles_1.jpg"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            display: 'block',
            filter: 'brightness(0.35) saturate(0.5)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(86,86,214,0.55) 0%, rgba(17,16,16,0.35) 100%)',
          pointerEvents: 'none',
        }} />
        <div
          className="px-6 pb-20 pt-40"
          style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}
        >
          <p
            className="text-xs tracking-[0.35em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}
          >
            Nimen takana
          </p>
          <h1
            className="font-light mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(4rem, 11vw, 10rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
            }}
          >
            DIAMON
          </h1>
          <div
            className="grid grid-cols-2 mb-12"
            style={{
              maxWidth: '480px',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              paddingTop: '28px',
            }}
          >
            <div className="flex flex-col gap-1 pr-8" style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', fontWeight: 300, fontStyle: 'italic' }}>διά</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>dia</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '6px' }}>kautta, läpi</span>
            </div>
            <div className="flex flex-col gap-1 pl-8">
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', fontWeight: 300, fontStyle: 'italic' }}>μόνος</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>monos</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginTop: '6px' }}>yksi, yksittäinen</span>
            </div>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.4,
              maxWidth: '520px',
              marginBottom: '16px',
            }}
          >
            Vaikutus syntyy yksilön kautta.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.75,
              maxWidth: '500px',
            }}
          >
            Diamonin nimi on saanut inspiraationsa kreikan kielestä. Sen taustalla on ajatus siitä,
            että johtaminen, vuorovaikutus ja muutos tapahtuvat ihmisten kautta.
          </p>
        </div>
      </section>

      {/* DIAMON-filosofia */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              DIAMON-filosofia
            </p>
            <h2
              className="text-3xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Johtamisviestintä on keskeinen osa organisaation suorituskykyä.
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <p>DIAMON syntyi yksinkertaisesta havainnosta: monet johtajat ovat huomattavasti osaavampia kuin heidän viestintänsä antaa ymmärtää.</p>
            <p>Substanssiosaamisen ja strategisen ymmärryksen rinnalla on olennaista tunnistaa, millainen on viestijänä, miten rakentaa vaikuttavaa viestintää ja miten toimii vuorovaikutuksessa ratkaisevissa tilanteissa.</p>
            <p>DIAMON auttaa johtajia kehittämään näitä valmiuksia tavoitteellisesti ja pitkäjänteisesti.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

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

      <ICAFrameworkSection lang="fi" />

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
