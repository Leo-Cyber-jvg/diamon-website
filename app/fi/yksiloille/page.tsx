import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '../../lib/services'

export const metadata: Metadata = {
  title: 'Johtajille — DIAMON Finland',
  description: 'Henkilökohtainen johtamisviestinnän coaching johtajille ja asiantuntijoille. Vuosittainen johtajuusohjelma, Thought Leader Studio, Vaikuttavuussessio.',
}

export default function YksiloillePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ backgroundColor: 'var(--color-blue)', minHeight: '60vh' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
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
            Viestintäsi<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>on johtajuutesi.</span>
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
            Henkilökohtainen coaching johtajille ja asiantuntijoille, jotka haluavat viestiä
            selkeämmin, läsnäolevammin ja strategisemmin.
          </p>
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
              Työ
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Viestintä on taito.<br />
              <span style={{ fontStyle: 'italic' }}>Sen voi rakentaa.</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Tehokkaimmat johtajat viestivät tarkoituksellisesti — eivät vaistomaisesti. Heillä on
              selkeä käsitys omasta viestijäidentiteetistään, he rakentavat viestinsä tarkoituksella
              ja esiintyvät läsnäolevasti ja vakuuttavasti.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Diamon-coaching rakentuu DIAMON ICA Framework™ -mallille — rakenteiselle metodologialle,
              joka kehittää viestintäsuorituksen kaikkia kolmea ulottuvuutta.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:pt-12">
            {[
              { n: '01', text: 'Rakenna selkeä, johdonmukainen johtajaviestijän identiteetti.' },
              { n: '02', text: 'Kehitä strategista tarinankerrontaa ja korkean panoksen viestintää.' },
              { n: '03', text: 'Esiinny läsnäolevasti ja vakuuttavasti hetkissä, jotka ratkaisevat.' },
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
            Kolme ohjelmaa.<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Yksi kehityspolku.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {services.map((s, i) => (
            <div
              key={s.id}
              className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
              style={{ backgroundColor: i % 2 === 1 ? 'var(--color-surface)' : 'var(--color-background)' }}
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
                  {s.valueIndFi}
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
                    Sopii sinulle jos
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {s.forIndFi}
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

      {/* ICA reference */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Metodologia
            </p>
            <h2
              className="text-3xl font-light mb-5"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              Kaikki coaching rakentuu DIAMON ICA Framework™ -mallille
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Identiteetti. Kompositio. Toiminta. Rakenteinen kehitysmetodologia, joka perustuu
              suorituspsykologiaan ja kahden vuosikymmenen ammattimaiseen suoritusosaamiseen.
            </p>
            <Link href="/fi/viitekehys" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Tutustu ICA-viitekehykseen &rarr;
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { l: 'I — Identiteetti', d: 'Johtajaidentiteetti, itsetuntemus ja henkilökohtainen läsnäolo.' },
              { l: 'C — Kompositio', d: 'Viestirakenteen, tarkoituksen, fokuksen ja strategisen selkeyden kehittäminen.' },
              { l: 'A — Toiminta', d: 'Toteutus, kehollinen läsnäolo ja suorituskyky paineen alla.' },
            ].map(({ l, d }) => (
              <div key={l} className="flex items-start gap-6 px-8 py-5" style={{ backgroundColor: 'var(--color-background)' }}>
                <span
                  className="text-sm font-light shrink-0"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', minWidth: '130px' }}
                >
                  {l}
                </span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Aloitetaan keskustelu kehittymisestäsi.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Jokainen yhteistyö alkaa diagnostisella keskustelulla — ei myyntiprosessilla.
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
