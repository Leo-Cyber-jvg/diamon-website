import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '../../lib/services'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Organisaatioille — DIAMON Finland',
  description: 'Johtamisviestinnän kehittäminen johtoryhmille ja organisaatioille. Annual Leadership Program, Thought Leader Studio, Impact Session.',
}

export default function OrganisaatioillePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', minHeight: '60vh' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coaching-series-bg-new.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', filter: 'brightness(0.38) saturate(0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Diamon Finland
          </p>
          <h1
            className="font-light mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              maxWidth: '820px',
              letterSpacing: '-0.01em',
            }}
          >
            Johtamisviestintä<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>organisaation strategisena kilpailuetuna.</span>
          </h1>
          <p
            className="font-light"
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.75,
              maxWidth: '520px',
              fontSize: '1rem',
            }}
          >
            Valmennuksia ja kehitysohjelmia organisaation johdolle ja asiantuntijoille.
          </p>
          <div className="mt-10">
            <Link
              href="/fi/valmennussarja"
              style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', gap: '4px', border: '1px solid rgba(255,255,255,0.25)', padding: '12px 20px', backgroundColor: 'rgba(255,255,255,0.07)' }}
            >
              <p style={{ margin: 0, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>
                Ajankohtaista · Valmennussarja
              </p>
              <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>
                Johtajan vaikuttavuus ja toimintakyky →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Lähestymistapamme
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Johtamisen vaikuttavuus syntyy vuorovaikutuksessa.
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Merkittävimmät johtamispäätökset toteutetaan viestinnän kautta.
              Strategia, kulttuuri, luottamus ja muutos rakentuvat viime kädessä
              niiden johtajien varaan, jotka viestivät selkeästi, läsnä olevasti ja tarkoituksellisesti.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Diamon kehittää tätä kyvykkyyttä järjestelmällisesti. Valmennukset perustuvat DIAMON ICA Framework™ -malliin.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:pt-12">
            {[
              { n: '01', text: 'Kehitä johtamisviestintä organisaation ydinkyvykkyytenä.' },
              { n: '02', text: 'Rakenna johtajaläsnäoloa, strategista tarinankerrontaa ja sidosryhmävaikuttamista.' },
              { n: '03', text: 'Luo mitattavaa, pysyvää muutosta.' },
            ].map(({ n, text }) => (
              <div key={n} className="flex gap-5 items-start">
                <span
                  className="text-xs tracking-widest shrink-0 pt-0.5"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', minWidth: '28px' }}
                >
                  {n}
                </span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Services */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Ohjelmat
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}
          >
            Räätälöity kehitys johtajan tarpeen mukaan.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
              style={{ border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-surface)' }}
            >
              <div className="md:col-span-1">
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
                >
                  {s.durationFi}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-light mb-4"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
                >
                  {s.nameFi}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                >
                  {s.valueOrgFi}
                </p>
                <Link href={s.hrefFi} className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Ohjelman tiedot &rarr;
                </Link>
              </div>

              <div className="md:col-span-1 flex flex-col gap-6">
                <div>
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-3"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                  >
                    Suunniteltu
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {s.forOrgFi}
                  </p>
                </div>
              </div>

              <div className="md:col-span-1">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                >
                  Ohjelma sisältää
                </p>
                <div className="flex flex-col gap-2">
                  {s.structureFi.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                        style={{ backgroundColor: 'var(--color-blue)' }}
                        aria-hidden="true"
                      />
                      <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Keynotes */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
          style={{ border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-surface)' }}
        >
          <div className="md:col-span-1">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
            >
              30–60 min
            </p>
            <h3
              className="text-2xl md:text-3xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
            >
              Leo Sjöman, Keynote-puheenvuorot
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Puheenvuoroja viestinnästä, läsnäolosta ja henkilökohtaisesta vaikuttavuudesta
             , yli kahden vuosikymmenen ammattiesiintymisen ja johtamisviestinnän valmennuksen
              pohjalta. Sisältö suunnitellaan organisaationne ja yleisönne mukaan.
            </p>
            <Link href="/fi/keynotes" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Lue lisää puheenvuoroista &rarr;
            </Link>
          </div>
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Kenelle
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                Johtamistilaisuuksiin, henkilöstöpäiville, strategiasessioihin ja konferensseihin,
                joiden teemana on viestintä, johtajuus tai inhimillinen toimintakyky.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Keskeisiä teemoja
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Henkilökohtainen vaikuttavuus ja läsnäolo',
                'Vuorovaikutus, luottamus ja johtamisviestintä',
                'Esiintyminen ja toimintakyky paineen alla',
                'Ammatillinen identiteetti ja oman äänen löytäminen',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-blue)' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Valmennussarja */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
          style={{ border: '1px solid var(--color-border)', borderRadius: '4px', backgroundColor: 'var(--color-surface)' }}
        >
          <div className="md:col-span-1">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
            >
              Yhden päivän intensiivivalmennus
            </p>
            <h3
              className="text-2xl md:text-3xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
            >
              Johtajan vaikuttavuus ja toimintakyky, Valmennussarja
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Yhden päivän intensiivivalmennuksia johtajille. Leo Sjöman valmentaa jokaisessa päivässä
              yhdessä eri alan huippuasiantuntijan kanssa. Sopii erinomaisesti johtoryhmille,
              johtamispäiville ja organisaation kehityspäiville.
            </p>
            <Link href="/fi/valmennussarja" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Lue lisää valmennussarjasta &rarr;
            </Link>
          </div>
          <div className="md:col-span-1 flex flex-col gap-6">
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-3"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Kenelle
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                Johtoryhmille, johtamispäiville, henkilöstöpäiville ja organisaatioille,
                jotka haluavat vaikuttavan yhden päivän kehityspäivän.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Valmennuspäivät
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Johtaminen paineessa, Leo Sjöman & Antti Pennanen',
                'Uni, palautuminen ja johtajan toimintakyky, Leo Sjöman & Henri Tuomilehto',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-blue)' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
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

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ maxWidth: '560px' }}>
            <h2
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              Aloitetaan keskustelu organisaatiostanne.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Jokainen yhteistyö alkaa diagnostisella keskustelulla, ei myyntiprosessilla.
            </p>
          </div>
          <Link
            href="/fi/ota-yhteytta"
            className="btn-primary shrink-0"
            style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}
          >
            Varaa keskustelu
          </Link>
        </div>
      </section>
    </>
  )
}
