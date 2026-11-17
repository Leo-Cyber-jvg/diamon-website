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
              Metodi
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
              color: '#F4F3F1',
              logoFilter: 'none',
            },
            {
              letter: 'C',
              label: 'Composition',
              desc: 'Viestin rakentaminen, tarkoitus, fokus, selkeys ja vastaanottajan huomioiminen.',
              bg: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: '#F4F3F1',
              logoFilter: 'saturate(0.25) opacity(0.55)',
            },
            {
              letter: 'A',
              label: 'Action',
              desc: 'Konkreettinen vuorovaikutus, kehollisuus, läsnäolo, kuunteleminen ja toiminta todellisissa johtamistilanteissa.',
              bg: 'var(--color-blue)',
              border: 'none',
              color: '#5656D6',
              logoFilter: 'brightness(0) invert(1)',
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
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/diamon-logo-02.png"
                  alt=""
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: item.logoFilter,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '4.5rem',
                    fontWeight: 500,
                    color: item.color,
                    lineHeight: 1,
                    zIndex: 1,
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

      {/* ── AJANKOHTAISTA ── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex items-baseline justify-between gap-6 mb-10">
          <p className="text-xs tracking-[0.28em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
            Ajankohtaista
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
            <img
              src="/coaching-series-bg.webp"
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
                { label: 'Valmentajat', value: 'Leo Sjöman × Antti Pennanen' },
                { label: 'Ryhmä', value: '10 johtajaa' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', gap: '10px', fontSize: '11px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  <span style={{ color: 'var(--color-subtle)', letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '9px', minWidth: '64px', marginTop: '1px' }}>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>1 795 € · alv 0 %</span>
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
