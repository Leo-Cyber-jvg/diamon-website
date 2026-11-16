import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vuosittainen johtajuusohjelma — DIAMON Finland',
  description:
    'Rakenteinen 12 kuukauden coachingohjelma, joka rakentaa selkeän, mitattavan ja strategisesti johdonmukaisen johtamisviestinnän profiilin.',
}

export default function VuosittainenJohtajuusohjelmePage() {
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
            Vuosittainen johtajuusohjelma
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
            Johtamisviestinnän kehittämisohjelma
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
            Ei yksittäinen koulutus. Rakenteinen, pitkäjänteinen prosessi, joka rakentaa
            selkeän, mitattavan ja strategisesti johdonmukaisen viestintäprofiilin.
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
              Mitä se on
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              12 kuukautta. Järjestelmällistä. Mitattavaa.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              DIAMON Vuosittainen johtajuusohjelma on rakenteinen coachingohjelma, joka vahvistaa
              johtajan viestintävaikutusta, johtajaläsnäoloa ja strategista roolia viestijänä.
              12 kuukauden aikana rakennamme viestintäarkkitehtuurin, joka tekee johtamisesta
              johdonmukaista, vakuuttavaa ja liiketoimintalähtöistä.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Ohjelman rakenne
              </span>
            </div>
            {[
              '12 kuukauden kehittymisohjelma',
              '6 räätälöityä coachingtapaamista vuoden aikana',
              '4 tuntia per tapaaminen',
              'Oma coach koko vuoden ajan',
              'Jatkuva tuki ja seuranta sessioiden välillä',
              'Tulos: johtamisviestinnän profiili ja käytännön toimintamalli',
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
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { title: 'Viestintästrategia', body: 'Viestintälähestymistavan rakentaminen, joka on linjassa johtajuusroolisi ja liiketoimintatavoitteidesi kanssa.' },
            { title: 'Johtajaläsnäolo', body: 'Auktoriteetin, itseluottamuksen ja rauhallisen varmuuden kehittäminen, jota korkean panoksen viestintä edellyttää.' },
            { title: 'Henkilökohtainen viestintäprofiili', body: 'Yksilöllisen viestijäidentiteetin määrittäminen ja vahvistaminen, joka tekee sinusta tunnistettavan ja uskottavan.' },
            { title: 'Strateginen tarinankerronta', body: 'Narratiivien rakentaminen, jotka liikuttavat ihmisiä — datasta päätöksiin, monimutkaisuudesta selkeyteen.' },
            { title: 'Valmistautuminen, suoritus ja arviointi', body: 'Toistettava järjestelmä jokaisen merkittävän viestintähetken valmisteluun, toteutukseen ja oppimiseen.' },
            { title: 'Liiketoimintalähtöinen viestintä', body: 'Jokaisen viestintäteon kytkeminen organisaation strategiaan, kulttuuriin ja suuntaan.' },
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

      {/* Mitä muuttuu */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä muuttuu
        </p>
        <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { n: '01', title: 'Johdonmukainen', body: 'Viestintäsi kantaa saman auktoriteetin ja selkeyden jokaisessa kontekstissa — ei vain silloin, kun olet valmistautunut.' },
            { n: '02', title: 'Vakuuttava', body: 'Viestit, jotka laskeutuvat. Argumentit, jotka liikuttavat. Esitykset, jotka muistetaan kokouksen jälkeen.' },
            { n: '03', title: 'Strategisesti linjassa', body: 'Jokainen viestintäteko kytkeytyy johtajuusrooliisi ja organisaation suuntaan.' },
            { n: '04', title: 'Mitattava', body: 'Määritelty viestintäprofiili ja toimintamalli, joka tekee kehittymisestä näkyvää ja toistettavaa.' },
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

      {/* ICA Framework */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Menetelmä
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Rakennettu ICA Framework™ -mallin pohjalle
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Vuosittainen johtajuusohjelma perustuu DIAMON ICA Framework™ -malliin. Viitekehys
              varmistaa, että johtajan viesti, läsnäolo ja viestintätyyli ovat linjassa roolin,
              henkilökohtaisen profiilin ja organisaation strategisten tavoitteiden kanssa koko
              12 kuukauden ajan.
            </p>
            <Link href="/fi/viitekehys" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Tutustu ICA-viitekehykseen &rarr;
            </Link>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '40px' }}>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>ICA Framework™</p>
            {[
              { label: 'I — Identiteetti', desc: 'Kuka olet viestijänä' },
              { label: 'C — Kompositio', desc: 'Miten viesti on rakennettu' },
              { label: 'A — Toiminta', desc: 'Miten se laskeutuu ja ajaa muutosta' },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-4 py-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', minWidth: '130px' }}>{label}</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</span>
              </div>
            ))}
          </div>
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
              Johtajille, jotka pitävät viestintää strategisen johtajuuden osana.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Ohjelma on suunniteltu johtajille, esimiehille ja ylimmän johdon edustajille, jotka
              haluavat kehittää viestintää ei esitystaiteena, vaan strategisen johtajuuden ja
              organisaatiokulttuurin ydindimensiona.
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', maxWidth: '480px', lineHeight: 1.3 }}>
            Rakenna johtamisviestintä, joka kestää.
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
