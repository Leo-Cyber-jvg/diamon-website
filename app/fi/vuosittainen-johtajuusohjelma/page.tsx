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
        <img src="/aristoteles-hero.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.3) saturate(0.4)' }} />
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
            Tämä ei ole yksittäinen esiintymiskurssi, vaan rakenteellinen valmennuskokonaisuus,
            joka rakentaa johtajalle johdonmukaisen, mitattavan ja strategisesti linjatun
            viestintäprofiilin. Henkilökohtainen valmentaja koko vuoden ajan.
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
              Aloita ohjelma
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
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
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
              Valmennus rakentuu johtajan yksilöllisten kehitystavoitteiden, todellisten viestintätilanteiden ja organisaation strategisten tarpeiden ympärille. Henkilökohtainen valmentaja kulkee johtajan rinnalla koko vuoden ajan.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Tavoitteena on vahvistaa johtajan viestinnällistä toimintakykyä erilaisissa viestintäympäristöissä ja vuorovaikutustilanteissa sekä kehittää kykyä johtaa tietoisemmin myös silloin, kun paine kasvaa.
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
              'Jatkuva tuki ja seuranta sessioiden välillä',
              'Tulos: johtajan viestintäprofiili ja käytännön toimintamalli',
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

      {/* Teemat */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Ohjelman teemat
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { title: 'Strategia esiintymiseen', body: 'Viestinnän rooli suhteessa liiketoiminnan tavoitteisiin, ja miten viestintäsi on linjassa organisaation suunnan kanssa.' },
              { title: 'Erottuminen markkinassa', body: 'Yksilölliset vahvuudet ja kehityskohteet, viestintäprofiilin rakentaminen, joka on tunnistettava, uskottava ja omaääninen.' },
              { title: 'Esiintymisprofiili ja viestintäidentiteetti', body: 'Henkilökohtaisen ja julkisen profiilin tasapaino, johdonmukainen viestijäidentiteetti kaikilla alustoilla ja tilanteissa.' },
              { title: 'Strateginen tarinankerronta', body: 'Narratiivien rakentaminen, jotka liikuttavat ihmisiä, datasta päätöksiin, monimutkaisuudesta selkeyteen.' },
              { title: 'Kokonaisprosessi: valmistautuminen, esiintyminen, jälkityö', body: 'Toistettava prosessi: strateginen valmistautuminen, suoritus ja jälkianalyysi jokaiseen merkittävään viestintähetkeen.' },
              { title: 'Strategiset tavoitteet', body: 'Laadulliset ja viestinnälliset tavoitteet, arviointikriteerit, viestintä, joka tukee ja ajaa liiketoimintaa.' },
            ].map(({ title, body }) => (
              <div key={title} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Mitä muuttuu */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä muuttuu
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { n: '01', title: 'Johdonmukaista ja vakuuttavaa', body: 'Viestintäsi kantaa saman auktoriteetin ja selkeyden jokaisessa ympäristössä, ei vain silloin, kun olet valmistautunut.' },
              { n: '02', title: 'Strategisesti linjattua ja toistettavaa', body: 'Viestintä on tavoitteellista, ei sattumanvaraista. Jokainen teko kytkeytyy johtajuusrooliisi ja organisaation suuntaan.' },
              { n: '03', title: 'Tavoitteellista ja toimintakykyistä', body: 'Viestintä tukee liiketoimintaa, ei esiintymistaito, vaan strateginen kyvykkyys.' },
              { n: '04', title: 'Kehittyvää ja mitattavaa', body: 'Määritelty viestintäprofiili ja toimintamalli. Jatkuva kasvu, ei kertaluonteinen ponnistus.' },
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

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      <ICAFrameworkSection lang="fi" />

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
              Johtajille, jotka haluavat kehittää viestintää tavoitteellisesti.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Johtajille, esihenkilöille ja asiantuntijoille, jotka haluavat kehittää esiintymistään
              ja viestintäänsä tavoitteellisesti osana organisaation strategista johtamista ja kulttuuria.
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

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

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
