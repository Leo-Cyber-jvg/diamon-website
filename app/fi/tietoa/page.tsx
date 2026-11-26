import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Tietoa DIAMONista — Johtamisviestintä AI-aikakaudella',
  description:
    'DIAMON kehittää johtamisviestinnän toimintakykyä, auttaa johtajia ja organisaatioita muuttamaan osaamisen ja ajattelun näkyväksi, vaikuttavaksi viestinnäksi.',
}

const lahtokohdatItems = [
  {
    number: '01',
    title: 'Johtamisviestintä strategisena kilpailuetuna',
    body: 'Johtajan kyky viestiä, vaikuttaa ja rakentaa luottamusta on keskeinen osa organisaation toimintakykyä. Asiantuntemus ja strateginen ajattelu luovat arvoa, kun ne välittyvät ymmärrettävästi, synnyttävät yhteistä näkemystä ja ohjaavat toimintaa.',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="14" y1="4" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="20" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="12" x2="19" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    number: '02',
    title: 'Inhimillinen etulyöntiasema tekoälyn aikakaudella',
    body: 'Tekoäly ja digitaalinen murros muuttavat tapaamme tuottaa tietoa, viestiä ja tehdä työtä. Samalla henkilökohtainen vuorovaikutus, läsnäolo ja kyky kohdata ihmisiä säilyvät johtamisen keskeisinä taitoina. Vaikuttava viestintä edellyttää selkeyttä, tilannetajua ja kykyä rakentaa yhteys vastaanottajaan, kasvokkain, digitaalisilla alustoilla ja erilaisten yleisöjen edessä.',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4C9.03 4 5 8.03 5 13c0 2.5 1.02 4.77 2.66 6.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M14 4c4.97 0 9 4.03 9 9 0 2.5-1.02 4.77-2.66 6.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M9 13c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.38-.56 2.63-1.46 3.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M11.5 13c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .69-.28 1.31-.73 1.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M14 15.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 20.5c1.5 1.5 3.5 2.5 7 2.5s5.5-1 7-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>),
  },
  {
    number: '03',
    title: 'Osaamisesta vaikuttavuuteen',
    body: 'DIAMONin lähtökohtana on havainto, että yksilön osaaminen ja henkilökohtainen potentiaali eivät aina välity täysimääräisesti hänen viestinnässään. Kehitämme johtajien ja asiantuntijoiden viestinnällistä toimintakykyä, jotta heidän ajattelunsa, osaamisensa ja ammatillinen identiteettinsä näkyvät vaikuttavammin arjen johtamis- ja vuorovaikutustilanteissa.',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="14" x2="5" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="5" y1="14" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="8" y1="8" x2="11" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="11" y1="20" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="14" y1="11" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="17" y1="17" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="20" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    number: '04',
    title: 'Tavoitteellista ja käytännönläheistä kehittämistä',
    body: 'DIAMONin valmennukset rakentuvat asiakkaan todellisten viestintätilanteiden ja liiketoiminnallisten tavoitteiden ympärille. ICA Framework™ yhdistää viestijän identiteetin, viestin rakentamisen ja käytännön toiminnan järjestelmälliseksi kehittämiskokonaisuudeksi. Tavoitteena on vahvistaa viestinnällistä toimintakykyä, joka tukee yksilön vaikuttavuutta ja organisaation yhteistä onnistumista.',
    icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="14,3 24,10 24,18 14,25 4,18 4,10" stroke="currentColor" strokeWidth="1.5" fill="none"/><polygon points="14,8 20,12 20,16 14,20 8,16 8,12" stroke="currentColor" strokeWidth="1.5" fill="none"/><polygon points="14,13 17,15 14,17 11,15" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>),
  },
]

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
            Vaikuttavuuden inhimillinen ulottuvuus.
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
            Diamonin nimi tulee kreikan kielen juuresta. Sen taustalla on ajatus siitä,
            että johtaminen, vuorovaikutus ja muutos tapahtuvat yksilön kautta.
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
              Johtamisviestintä on{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>keskeinen osa organisaation suorituskykyä.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8 }}>
            <p>DIAMON syntyi yksinkertaisesta havainnosta: monet johtajat ovat huomattavasti osaavampia kuin heidän viestintänsä antaa ymmärtää.</p>
            <p>Kun puhutaan muutoksen johtamisesta, kasvusta tai organisaation uudistumisesta, keskustelu päätyy lopulta ihmiseen. Johtajan kykyyn tehdä asioita ymmärrettäväksi, luoda merkitystä ja rakentaa yhteistä suuntaa tavalla, joka synnyttää luottamusta.</p>
            <p>Johtajan haaste ei useinkaan ole osaamisen puute. Kiinnostavampi kysymys on, kuinka hyvin hän pystyy hyödyntämään omaa ajatteluaan, persoonaansa ja vuorovaikutuskykyään erilaisissa tilanteissa, myös silloin, kun paine kasvaa.</p>
            <p>Uskomme, että vaikuttava johtamisviestintä ei synny täydellisestä esiintymisestä, vaan kyvystä olla läsnä, ajatella selkeästi ja toimia omasta persoonasta käsin. Mitä vaativampi ja julkisempi johtajan rooli on, sitä tärkeämpää on, ettei ihminen katoa sen taakse.</p>
            <p>Teknologian muuttaessa tapaamme käsitellä tietoa, viestiä ja tehdä työtä korostuu näiden inhimillisten kyvykkyyksien merkitys entisestään.</p>
            <p>DIAMONissa kehitämme johtajan kykyä ymmärtää omaa toimintaansa, rakentaa vaikuttavaa viestintää ja harjoittaa toimintakykyään erilaisissa viestintäympäristöissä ja vuorovaikutustilanteissa. Tavoitteena on, että johtajan osaaminen, ajattelu ja persoona välittyvät tavalla, joka auttaa myös muita ymmärtämään, sitoutumaan ja toimimaan.</p>
            <p>Teknologia kehittyy nopeasti. Meidänkin kannattaa.</p>
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
          className="text-xs tracking-[0.3em] uppercase mb-5"
          style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
        >
          Toimintamme lähtökohdat
        </p>
        <h2
          className="font-light mb-12"
          style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.1, color: 'var(--color-text)' }}
        >
          Inhimillinen kyvykkyys{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>kilpailuetuna.</span>
        </h2>
        <div style={{ border: '1px solid var(--color-border)' }}>
        <div className="grid md:grid-cols-2" style={{ gap: '1px', backgroundColor: 'var(--color-border)' }}>
          {lahtokohdatItems.map(({ number, title, body, icon }) => (
            <div
              key={number}
              className="p-8 flex flex-col gap-4"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <span style={{ color: 'var(--color-blue)', display: 'block', marginBottom: '2px' }}>{icon}</span>
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
              alt="Leo Sjöman, Perustaja, DIAMON Finland"
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
                Leo Sjöman on DIAMONin perustaja, johtamisviestinnän valmentaja ja DIAMON ICA Framework™ -mallin kehittäjä. Hän työskentelee johtajien ja organisaatioiden kanssa.
              </p>
              <p>
                Yli 20 vuoden kokemus näyttelijäntyöstä elokuvassa, televisiossa ja teatterissa on rakentanut syvällistä käytännön ymmärrystä ihmisen käyttäytymisestä, vuorovaikutuksesta, tarinankerronnasta ja toimintakyvystä paineen alla.
              </p>
              <p>
                Johtamisviestinnän valmennuksissa Leo yhdistää strategiseen työskentelyyn näyttelijäntyöstä tutun harjoittelun kulttuurin: tilanteita simuloidaan, omaa toimintaa havainnoidaan ja uusia toimintatapoja harjoitellaan käytännössä.
              </p>
              <p>
                Valmennuksissa tätä osaamista sovelletaan johtamisen arjen vuorovaikutustilanteisiin, kameran edessä työskentelyyn sekä vaativiin media- ja sidosryhmätilanteisiin.
              </p>
              <p>
                Eri toimialojen ja osaamisalueiden kohtaamisesta syntyy DIAMONin lähestymistapa johtamisviestinnän kehittämiseen.
              </p>
              <p style={{ fontStyle: 'italic' }}>
                Oivallus saa arvonsa siinä, miten se näkyy seuraavassa kohtaamisessa.
              </p>
            </div>
          </div>
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
