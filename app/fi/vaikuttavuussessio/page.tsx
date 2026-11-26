import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Impact Session — DIAMON Finland',
  description:
    'Intensiivinen yksilöcoachingsessio, joka valmistaa johtajan tai asiantuntijan onnistumaan tietyssä korkean panoksen viestintätilanteessa. 3 tuntia. Etä-, lähi- tai studioformaatti.',
}

const mitaLahteItems = [
  { n: '01', title: 'Selkeä ja vakuuttava rakenne', body: 'Viestiarkkitehtuuri, joka on looginen, mieleenpainuva ja tavoitteesi mukainen.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="18" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="4" y="12" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="4" y="6" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>) },
  { n: '02', title: 'Vahvempi varmuus ja hallittu läsnäolo', body: 'Tekniikat ja harjoittelu, jotka muuntavat valmistautumisen suoritukseksi.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M20 7l1.5 1.5L24 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { n: '03', title: 'Liiketoimintalähtöinen viesti', body: 'Viestintä asemoidaan ammatillisen roolisi ja organisaation strategisen suunnan mukaan.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="14" y1="5" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="18" x2="14" y2="23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="5" y1="14" x2="10" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="18" y1="14" x2="23" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { n: '04', title: 'Konkreettinen suunnitelma juuri sinun tilanteellesi', body: 'Täsmällinen, toimintakelpoinen kehys juuri siihen hetkeen, johon olet valmistautumassa.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="4" width="18" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="9" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
]

export default function VaikuttavuussessioPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/impact-session-hero.webp" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.35) saturate(0.5)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.4) 100%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            Impact Session
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '640px',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            Valmistaudu tilanteisiin, joilla on merkitystä.
          </p>
          <p
            className="text-lg font-light mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '580px',
              lineHeight: 1.8,
            }}
          >
            Henkilökohtaista valmennusta sinulle, joka haluat kirkastaa ajatuksiasi, vahvistaa ilmaisuasi ja luottaa omaan toimintakykyysi tärkeässä viestintätilanteessa.
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

      {/* Mitä se on */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Mitä se on
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Valmistaudu merkityksellisiin viestintätilanteisiin.
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Impact Session on intensiivinen yksilövalmennus johtajille ja asiantuntijoille, jotka haluavat valmistautua mahdollisimman hyvin tärkeään viestintätilanteeseen.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Valmennus suunnitellaan asiakkaan yksilöllisten tarpeiden, tavoitteiden ja tulevan viestintätilanteen pohjalta. Työskentelyssä yhdistyvät viestin kirkastaminen, sisällön ja rakenteen kehittäminen sekä käytännön esiintymis- ja vuorovaikutusharjoittelu, myös kameran edessä ja julkisissa viestintätilanteissa.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Tavoitteena on, että voit kohdata tilanteen valmistautuneena, luottaa omaan osaamiseesi ja keskittyä olennaiseen.
            </p>
          </div>
          <div>
            <div className="px-4 py-2 mb-5" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Session tiedot
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                'Yksilö- tai pienryhmäcoaching (1–3 osallistujaa)',
                'Kesto: 3 tuntia',
                'Etä-, lähi- tai studioformaatti',
                'Loppukoonti ja kehitysavaimet · valinnainen seuranta',
              ].map(item => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                  <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Sopii */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Sopii tilanteisiin kuten
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { title: 'Keynote-puhe', body: 'Merkittävä puheenvuoro, jossa läsnäolo, selkeys ja rakenne määrittävät, miten viesti laskeutuu.' },
            { title: 'Capital markets day', body: 'Sijoittajaviestintä, jossa uskottavuus, varmuus ja täsmällisyys ovat ehdottomia.' },
            { title: 'Mediahaastattelut', body: 'Valmistautuminen printti-, televisio- tai podcast-esiintymisiin, joissa jokainen sana on tallessa.' },
            { title: 'Johtajapresentaatio', body: 'Hallitukselle, johtoryhmälle tai ulkoisille sidosryhmille strategista painoa kantavat esitykset.' },
            { title: 'Sisäinen viestintähetki', body: 'Korkean panoksen sisäiset tiedotteet, town hallit tai muutosviestintä, joka muokkaa kulttuuria.' },
            { title: 'Strateginen someesiintyminen', body: 'LinkedIn- tai julkinen videosiältö, jossa henkilöbrändin ja liiketoimintaviestin on kohdattava.' },
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

      {/* Mitä mukaan lähtee */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä mukaan lähtee
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {mitaLahteItems.map(({ n, title, body, icon }) => (
            <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
              <span style={{ color: 'var(--color-blue)', display: 'block', marginBottom: '2px' }}>{icon}</span>
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

      <ICAFrameworkSection lang="fi" />

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', maxWidth: '480px', lineHeight: 1.3 }}>
            Valmistaudu hetkeen, jolla on merkitys.
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
            Varaa Impact Session
          </Link>
        </div>
      </section>
    </>
  )
}
