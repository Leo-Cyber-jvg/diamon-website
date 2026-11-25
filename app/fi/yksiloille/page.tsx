import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '../../lib/services'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Johtajille — DIAMON Finland',
  description: 'Henkilökohtainen johtamisviestinnän coaching johtajille ja asiantuntijoille. Annual Leadership Program, Thought Leader Studio, Impact Session.',
}

export default function YksiloillePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', minHeight: '60vh' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coaching-series-bg-new.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block', filter: 'brightness(0.38) saturate(0.6)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)', pointerEvents: 'none' }} />
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
              <span style={{ fontStyle: 'italic' }}>Vaikuttavuutta voi kehittää.</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Johtajan osaaminen, ajattelu ja henkilökohtainen potentiaali eivät aina välity täysimääräisesti hänen viestinnässään. Kyse ei ole vain siitä, mitä tiedämme tai osaamme, vaan siitä, miten pystymme välittämään sen toisille ihmisille, rakentamaan yhteistä ymmärrystä ja ohjaamaan toimintaa.
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Vaikuttava johtamisviestintä rakentuu oman toimintatavan ymmärtämisestä, tietoisesta viestinnän rakentamisesta ja kyvystä toimia erilaisissa vuorovaikutustilanteissa.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              DIAMONin valmennukset perustuvat ICA Framework™ -malliin, joka yhdistää nämä kolme ulottuvuutta systemaattiseksi ja käytännönläheiseksi kehittämiskokonaisuudeksi.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:pt-12">
            {[
              { n: '01', text: 'Selkeä ja johdonmukainen johtamisviestinnän identiteetti.' },
              { n: '02', text: 'Strateginen rakenne ja narratiivi.' },
              { n: '03', text: 'Esiintymisvarmuus, autenttinen läsnäolo ja vakuuttavuus hetkissä, jotka ratkaisevat.' },
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

      {/* Valmennussarja */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <p className="text-xs tracking-[0.28em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Valmennussarja
          </p>
        </div>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)', marginBottom: '48px' }} />

        <div className="grid md:grid-cols-2" style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          {/* Left: photo panel */}
          <div
            className="flex flex-col justify-between"
            style={{
              position: 'relative',
              padding: '36px 40px',
              minHeight: '340px',
              overflow: 'hidden',
              backgroundColor: '#111010',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/speaker-blue.webp"
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                filter: 'brightness(0.45) saturate(0.6)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(86,86,214,0.45) 0%, rgba(17,16,16,0.3) 100%)',
                pointerEvents: 'none',
              }}
            />
            <p style={{ fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', margin: 0, position: 'relative', zIndex: 1 }}>
              Valmennussarja · Diamon Finland
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 2.8vw, 36px)',
                fontWeight: 300,
                lineHeight: 1.12,
                color: '#F4F3F1',
                margin: '24px 0',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Johtajan vaikuttavuus<br />
              ja toimintakyky.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', border: '1px solid rgba(244,243,241,0.15)', padding: '4px 10px', whiteSpace: 'nowrap' }}>
                  01 · pe 22.1.2027
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,241,0.65)', fontFamily: 'var(--font-body)' }}>Leo Sjöman × Antti Pennanen</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(244,243,241,0.5)', fontFamily: 'var(--font-body)', border: '1px solid rgba(244,243,241,0.15)', padding: '4px 10px', whiteSpace: 'nowrap' }}>
                  02 · pe 19.2.2027
                </span>
                <span style={{ fontSize: '11px', color: 'rgba(244,243,241,0.65)', fontFamily: 'var(--font-body)' }}>Leo Sjöman × Henri Tuomilehto</span>
              </div>
            </div>
          </div>

          {/* Right: content panel */}
          <div className="flex flex-col justify-center" style={{ backgroundColor: 'var(--color-background)', padding: '36px 40px', gap: '24px' }}>
            <p style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', margin: 0 }}>
              Seuraava valmennuspäivä
            </p>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 300, lineHeight: 1.18, color: 'var(--color-text)', margin: 0 }}>
              Yhteys ja johtaminen <em style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>paineessa.</em>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { label: 'Ajankohta', value: 'Perjantai 22.1.2027 · klo 9–17' },
                { label: 'Paikka', value: 'Helsinki' },
                { label: 'Valmentajat', value: 'Leo Sjöman × Antti Pennanen' },
                { label: 'Ryhmä', value: '10 johtajaa' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '10px', fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  <span style={{ color: 'var(--color-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '9px', minWidth: '64px', marginTop: '1px' }}>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/fi/valmennussarja"
                style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(86,86,214,0.35)', paddingBottom: '3px', whiteSpace: 'nowrap', textDecoration: 'none', width: 'fit-content' }}
              >
                Lue lisää ja ilmoittaudu →
              </Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', borderTop: '1px solid var(--color-border)', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>Tulossa sarjassa</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--color-border)', padding: '5px 12px' }}>02 · Uni ja palautuminen · pe 19.2.2027</span>
            <span style={{ fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)', border: '1px solid var(--color-border)', padding: '5px 12px' }}>Lisää päiviä julkistetaan myöhemmin</span>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Impact Session */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Ohjelmat
          </p>
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}>
            Räätälöity kehitys johtajan tarpeen mukaan.
          </h2>
        </div>
        {(() => {
          const s = services.find(x => x.id === 'impact')!
          return (
            <div
              className="p-10 md:p-12 grid md:grid-cols-3 gap-8 md:gap-12"
              style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}
            >
              <div className="md:col-span-1">
                <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
                  {s.durationFi}
                </p>
                <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>
                  {s.nameFi}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {s.valueIndFi}
                </p>
                <Link href={s.hrefFi} className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  Ohjelman tiedot &rarr;
                </Link>
              </div>
              <div className="md:col-span-1 flex flex-col gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                    Sopii sinulle jos
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                    {s.forIndFi}
                  </p>
                </div>
              </div>
              <div className="md:col-span-1">
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  Ohjelma sisältää
                </p>
                <div className="flex flex-col gap-2">
                  {s.structureFi.map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                      <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })()}
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
              Aloitetaan keskustelu kehittymisestäsi.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Rakennamme ja räätälöimme valmennukset yksilöille aina tarpeen ja tilanteen mukaan. Kerro tarpeistasi, niin rakennetaan sellainen valmennus, joka kohdistuu juuri sinulle.
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
