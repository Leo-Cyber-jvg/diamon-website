import Link from 'next/link'
import type { Metadata } from 'next'
import InfluenceCompass from '../components/InfluenceCompass'

export const metadata: Metadata = {
  title: 'DIAMON Finland — Johtamisviestinnän suorituskyky',
  description: 'DIAMON kehittää johtajien, johtoryhmien ja organisaatioiden viestinnällistä suorituskykyä. ICA-viitekehys™ — Identity, Composition, Action.',
}

export default function FiHome() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="flex flex-col justify-end px-6 pb-24 pt-40"
        style={{ backgroundColor: 'var(--color-blue)', minHeight: '92vh' }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1200px' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
          >
            Diamon Finland
          </p>
          <h1
            className="font-light mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              color: '#fff',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              lineHeight: 1.0,
              maxWidth: '900px',
              letterSpacing: '-0.01em',
            }}
          >
            Uudistamme<br />
            johtamisviestintää.<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Muutamme tapaa johtaa.</span>
          </h1>
          <p
            className="mb-12 font-light"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', lineHeight: 1.75, maxWidth: '500px', fontSize: '1rem' }}
          >
            Rakennamme viestinnällistä suorituskykyä johtajille, johtoryhmille ja organisaatioille, järjestelmällisesti, mitattavasti ja pitkäjänteisesti.
          </p>
          <Link href="/fi/ota-yhteytta" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
            Varaa kartoituskeskustelu
          </Link>
        </div>
      </section>

      {/* ── KENELLE ── */}
      <section>
        <div className="px-6 pt-20 pb-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Kenelle
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '640px' }}
          >
            Kehitystä organisaatioille<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>ja yksittäisille johtajille.</span>
          </h2>
        </div>

        {/* Aker-style full-bleed two-panel CTA grid */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-2" style={{ gap: '3px', backgroundColor: 'var(--color-border)' }}>
          {/* Organisaatioille */}
          <div
            className="relative flex flex-col justify-end"
            style={{ minHeight: '520px', overflow: 'hidden' }}
          >
            <img
              src="/cta-organizations.jpg"
              alt="Johtamisviestintä organisaatioille"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.76) 0%, rgba(10,9,8,0.22) 50%, transparent 100%)' }} />
            <div className="relative p-10 md:p-14 flex flex-col gap-5" style={{ zIndex: 1 }}>
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: 'rgba(244,243,241,0.55)', fontFamily: 'var(--font-body)' }}
              >
                Organisaatioille
              </p>
              <h3
                className="text-2xl md:text-4xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: '#F4F3F1', lineHeight: 1.12, maxWidth: '20ch' }}
              >
                Johtamisviestintä organisaation kyvykkyydeksi.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(244,243,241,0.68)', fontFamily: 'var(--font-body)', maxWidth: '36ch' }}
              >
                Pitkäjänteiset kehitysohjelmat johtoryhmille, johtajille ja koko organisaatioille.
                Vuosiohjelma, räätälöidyt työpajat ja strateginen viestintäkonsultointi.
              </p>
              <Link
                href="/fi/organisaatioille"
                className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2"
                style={{ color: '#F4F3F1', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(244,243,241,0.3)', paddingBottom: '4px', width: 'fit-content' }}
              >
                Organisaatioille &rarr;
              </Link>
            </div>
          </div>

          {/* Johtajille */}
          <div
            className="relative flex flex-col justify-end"
            style={{ minHeight: '520px', overflow: 'hidden' }}
          >
            <img
              src="/cta-individuals.jpg"
              alt="Henkilökohtainen valmennus johtajille"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,9,8,0.76) 0%, rgba(10,9,8,0.22) 50%, transparent 100%)' }} />
            <div className="relative p-10 md:p-14 flex flex-col gap-5" style={{ zIndex: 1 }}>
              <p
                className="text-xs tracking-[0.25em] uppercase"
                style={{ color: 'rgba(244,243,241,0.55)', fontFamily: 'var(--font-body)' }}
              >
                Johtajille
              </p>
              <h3
                className="text-2xl md:text-4xl font-light"
                style={{ fontFamily: 'var(--font-heading)', color: '#F4F3F1', lineHeight: 1.12, maxWidth: '20ch' }}
              >
                Henkilökohtainen valmennus vaikuttavaan johtajuuteen.
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(244,243,241,0.68)', fontFamily: 'var(--font-body)', maxWidth: '36ch' }}
              >
                Yksilövalmennus toimitusjohtajille, perustajille ja muutostilanteessa oleville johtajille.
                Thought Leader Studio, Impact Session ja jatkuva johtamisvalmennus.
              </p>
              <Link
                href="/fi/yksiloille"
                className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2"
                style={{ color: '#F4F3F1', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(244,243,241,0.3)', paddingBottom: '4px', width: 'fit-content' }}
              >
                Johtajille &rarr;
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── ICA FRAMEWORK ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Menetelmä
            </p>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '560px' }}
            >
              DIAMON ICA Framework™
            </h2>
          </div>
          <Link href="/fi/ica-viitekehys" className="link-blue text-sm shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
            Tutustu viitekehykseen &rarr;
          </Link>
        </div>

        <p
          className="text-sm leading-relaxed mb-16"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '600px' }}
        >
          Strukturoitu kehitysmenetelmä, joka pohjautuu suorituspsykologiaan ja kahden vuosikymmenen ammattilaisesiintymiskokemukseen.
          Kolme integroitua tasoa — sovellettuna systemaattisesti todellisiin johtamistilanteisiin.
        </p>

        {/* ICA kolme ympyrää */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '0', position: 'relative', rowGap: '48px' }}
        >
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '16.6%',
              right: '16.6%',
              top: '75px',
              height: '1px',
              backgroundColor: 'var(--color-border)',
            }}
          />

          {[
            {
              letter: 'I',
              label: 'Identity',
              desc: 'Johtajaidentiteetti, itsetuntemus, oma toimintatila ja henkilökohtainen vaikuttavuus viestinnässä.',
              bg: 'var(--color-background)',
              border: '1px solid var(--color-blue)',
              color: 'var(--color-text)',
            },
            {
              letter: 'C',
              label: 'Composition',
              desc: 'Viestin rakentaminen, tarkoitus, fokus, selkeys ja vastaanottajan huomioiminen.',
              bg: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text)',
            },
            {
              letter: 'A',
              label: 'Action',
              desc: 'Konkreettinen vuorovaikutus, kehollisuus, läsnäolo, kuunteleminen ja toiminta todellisissa johtamistilanteissa.',
              bg: 'var(--color-blue)',
              border: 'none',
              color: '#fff',
            },
          ].map((item) => (
            <div
              key={item.letter}
              className="flex flex-col items-center text-center px-6"
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  border: item.border,
                  backgroundColor: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: item.color,
                    lineHeight: 1,
                  }}
                >
                  {item.letter}
                </span>
              </div>
              <p
                className="mt-5 text-sm font-medium tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)', letterSpacing: '0.3em' }}
              >
                {item.label}
              </p>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', maxWidth: '240px' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── LEO SJÖMAN ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', maxHeight: '580px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman — Perustaja, Diamon Finland"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
            />
          </div>
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
            >
              Perustaja
            </p>
            <h2
              className="font-light mb-2"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
            >
              Leo Sjöman
            </h2>
            <p
              className="mb-8 text-sm"
              style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', letterSpacing: '0.04em' }}
            >
              Diamon Finland
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leo Sjöman on näyttelijä, yrittäjä ja johtamisviestinnän valmentaja, joka työskentelee johtajien, asiantuntijoiden ja tiimien kanssa viestinnän, esiintymisen ja vuorovaikutustaitojen kehittämiseksi.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Hän yhdistää työssään strategisen viestinnän, liiketoimintaosaamisen ja yli 20 vuoden ammattiesiintyjäkokemuksen teatterista, televisiosta ja elokuvasta. Leo tunnetaan luottamuksellisen, suoran ja tavoitteellisen työskentelyilmapiirin luojana — jossa opittu siirtyy konkreettisesti arkiseen johtamiseen.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leo on valmentanut johtajia pk-perheyrityksistä kansainvälisiin organisaatioihin ja suuryritysten ylimpään johtoon. Hänellä on teatteritaiteen maisterin tutkinto (Taideyliopisto) ja hän on elokuvatuotantoyhtiö Hoka Filmsin perustaja.
            </p>
            <Link href="/fi/tietoa" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Leo Sjömanista ja DIAMONista &rarr;
            </Link>
          </div>
        </div>
      </section>

      <InfluenceCompass />

      {/* ── TULOKSET ── */}
      <section className="px-6 py-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Tulokset
          </p>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15, maxWidth: '600px' }}
          >
            How Diamon coaching strengthens<br />
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>leadership communication.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px mb-16" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { stat: '100 %', label: 'koki johtamisviestintänsä kehittyneen.' },
            { stat: '100 %', label: 'koki ymmärryksensä omasta toiminnastaan vahvistuneen viestintä- ja esiintymistilanteissa.' },
            { stat: '100 %', label: 'koki kykynsä toimia paineen alla vahvistuneen vaativissa viestintä- ja esiintymistilanteissa.' },
          ].map((s) => (
            <div key={s.label} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.02em' }}>
                {s.stat}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="p-10 md:p-14" style={{ backgroundColor: 'var(--color-surface)', borderLeft: '3px solid var(--color-blue)' }}>
          <blockquote className="text-xl md:text-2xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.4, fontStyle: 'italic', maxWidth: '820px' }}>
            &ldquo;Esiintymistaito on yleisavain johtamiseen ja vaikuttamiseen. Diamonilta löytyy ainutlaatuisen korkeatasoista osaamista esiintymisen kehittämiseen ja henkilökohtaisuuteen perustuva valmennuskonsepti todellakin toimii.&rdquo;
          </blockquote>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Tuomas Liisanantti &mdash; Markkinointijohtaja, SDM
          </p>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── CTA ── */}
      <section className="px-6 py-24" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
          style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ maxWidth: '560px' }}>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}
            >
              Seuraava askel
            </p>
            <h2
              className="text-3xl md:text-4xl font-light mb-4"
              style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}
            >
              Oikea keskustelu alkaa tarkasta kysymyksestä.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Kuvaile haaste tai tavoite. Ensimmäinen keskustelu on diagnostiikka, ei myyntiprosessi.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/fi/ota-yhteytta" className="btn-primary" style={{ backgroundColor: '#fff', color: 'var(--color-blue)' }}>
              Varaa kartoituskeskustelu
            </Link>
            <Link href="/fi/organisaatioille" className="btn-outline-white">
              Tutustu palveluihin
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
