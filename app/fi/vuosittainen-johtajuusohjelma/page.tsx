import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Annual Leadership Program — DIAMON Finland',
  description:
    'Rakenteellinen valmennuskokonaisuus, joka rakentaa johtajalle johdonmukaisen, mitattavan ja strategisesti linjatun viestintäprofiilin. 12 kuukautta, 6 sessiota.',
}

export default function VuosittainenJohtajuusohjelmePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/alp-hero.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'brightness(0.35) saturate(0.5)' }} />
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
            Annual<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Leadership Program</span>
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
            12 kuukauden rakenteellinen valmennuskokonaisuus
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
            Valmennusohjelma, jossa johtamisviestintää kehitetään johdonmukaisesti, mitattavasti ja organisaation strategisten tavoitteiden mukaisesti. Henkilökohtainen valmentaja koko vuoden ajan.
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
              Valmennuskokonaisuus
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}>
              Vuosi oman johtajuuden ja{' '}
              <span style={{ fontStyle: 'italic' }}>vaikuttavuuden kehittämiseen.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Annual Leadership Program on vuoden mittainen henkilökohtainen valmennuskokonaisuus johtajille, jotka haluavat syventää ymmärrystä omasta tavastaan viestiä, johtaa ja vaikuttaa.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Pitkäjänteinen työskentely henkilökohtaisen valmentajan kanssa mahdollistaa omien vahvuuksien tunnistamisen, totuttujen toimintatapojen tarkastelun ja uusien valmiuksien harjoittamisen osana omaa työtä.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Valmennuksessa kehitetään johtajan viestijäidentiteettiä, strategista viestintää, tarinankerrontaa ja dialogin johtamista. Käytännön harjoittelu ulottuu kehollisesta läsnäolosta ja arjen vuorovaikutustilanteista vaativiin esiintymis-, kamera- ja mediatilanteisiin.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Valmennus rakentuu johtajan yksilöllisten kehitystavoitteiden, todellisten viestintätilanteiden ja organisaation strategisten tarpeiden ympärille.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Tavoitteena on vahvistaa johtajan viestinnällistä toimintakykyä sekä kehittää kykyä johtaa tietoisemmin myös silloin, kun paine kasvaa.
            </p>
          </div>
          <div className="flex flex-col gap-px self-start" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Ohjelman rakenne
              </span>
            </div>
            {[
              '12 kuukauden kehitysohjelma',
              '12 räätälöityä coachingtapaamista',
              '2 tuntia per tapaaminen',
              'Oma coach koko vuoden ajan',
              'Tuki ja seuranta sessioiden välillä',
              'Johtajan viestintäprofiili ja käytännön toimintamalli',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Teemat */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Ohjelman teemat
        </p>
        {/* Tiivistetty 2-sarake ikoneilla */}
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {([
              { n: '01', title: 'Johtajan viestijäidentiteetti', body: 'Itsetuntemus, persoona ja henkilökohtaiset vahvuudet.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> },
              { n: '02', title: 'Strateginen viestintä ja tarinankerronta', body: 'Ajattelun jäsentäminen, narratiivi ja yhteinen suunta.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="4" rx="1"/><rect x="3" y="11" width="12" height="4" rx="1"/><rect x="3" y="17" width="15" height="4" rx="1"/></svg> },
              { n: '03', title: 'Esiintyminen eri viestintäympäristöissä', body: 'Yleisöt, kamera, media ja sidosryhmät.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><line x1="3" y1="12" x2="21" y2="12"/></svg> },
              { n: '04', title: 'Vuorovaikutus ja dialogin johtaminen', body: 'Kuunteleminen, kohtaaminen ja luottamus.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7l-4 3V9a2 2 0 0 1 2-2z"/></svg> },
              { n: '05', title: 'Läsnäolo ja toimintakyky paineessa', body: 'Kehollisuus, keskittyminen ja itsesäätely.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg> },
              { n: '06', title: 'Valmistautuminen ja oman toiminnan kehittäminen', body: 'Simulaatiot, harjoittelu, palaute ja kehityksen seuranta.', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="3,18 9,11 13,15 21,6"/><circle cx="21" cy="6" r="2"/></svg> },
            ]).map(({ n, title, body, icon }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', display: 'block', marginBottom: '2px' }}>{icon}</span>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm mt-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontStyle: 'italic', lineHeight: 1.65 }}>
          Valmennuksen teemojen painotukset rakentuvat johtajan yksilöllisten kehitystavoitteiden, ammatillisen toimintaympäristön ja organisaation tarpeiden pohjalta.
        </p>
      </section>


      {/* Mitä muuttuu */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä muuttuu
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { n: '01', title: 'Johdonmukainen ja vakuuttava viestintä', body: 'Viestinnällinen toimintakykysi, selkeytesi ja henkilökohtainen vaikuttavuutesi vahvistuvat erilaisissa viestintäympäristöissä ja vuorovaikutustilanteissa.' },
              { n: '02', title: 'Strategisesti linjattu viestintä', body: 'Viestintäsi on tavoitteellista ja kytkeytyy johtajarooliisi sekä organisaatiosi strategiseen suuntaan. Kehität kykyäsi rakentaa yhteistä ymmärrystä ja ohjata toimintaa viestinnän keinoin.' },
              { n: '03', title: 'Vahvempi toimintakyky', body: 'Kykysi esiintyä, kohdata ihmisiä ja johtaa vuorovaikutusta vahvistuu. Pystyt hyödyntämään omaa osaamistasi, ajatteluasi ja persoonaasi vaikuttavasti myös vaativissa ja paineisissa tilanteissa.' },
              { n: '04', title: 'Pitkäjänteinen ja mitattava kehitys', body: 'Selkeä viestijäidentiteetti, henkilökohtainen toimintamalli ja menetelmät oman viestinnän kehittämiseen. Kehitystä arvioidaan järjestelmällisesti koko vuoden ajan ja opitut toimintatavat palvelevat myös valmennusohjelman jälkeen.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Kenelle */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Kenelle
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', lineHeight: 1.2 }}>
              Johtajille, jotka haluavat kehittää viestintää tavoitteellisesti.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Johtajille, esihenkilöille ja asiantuntijoille, jotka haluavat kehittää esiintymistään
              ja viestintäänsä pitkäjänteisesti osana organisaation strategista johtamista ja kulttuuria.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              'Toimitusjohtajat ja johtoryhmän jäsenet',
              'Hallituksen ammattilaiset ja johtajat',
              'Ylimmän johdon edustajat',
              'Johtajat, joilla on merkittävä viestintävastuu',
              'Asiantuntijat, jotka ottavat laajempaa johtajuutta',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ICAFrameworkSection lang="fi" />


      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
              Seuraava askel
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}>
              Keskustellaan lisää.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Kerro tavoitteistasi tai haasteistasi. Kartoitetaan yhdessä, miten Diamon voisi vahvistaa johtamisviestinnän ja vuorovaikutuksen vaikuttavuutta.
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
            Aloita keskustelu
          </Link>
        </div>
      </section>
    </>
  )
}
