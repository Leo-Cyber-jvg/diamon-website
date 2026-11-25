import type { Metadata } from 'next'
import Link from 'next/link'
import InfluenceCompass from '../../components/InfluenceCompass'

export const metadata: Metadata = {
  title: 'ICA-viitekehys™ — DIAMON Finland',
  description: 'DIAMON ICA-viitekehys™, Identity, Composition, Action. Omistautunut metodologia johtamisviestinnän suorituskyvyn kehittämiseen. DCI™, TNT™, K3™.',
}

export default function IcaViitekehysPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#0d0c0c' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-framework.png"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'brightness(0.45) saturate(0.7)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.3) 100%)', pointerEvents: 'none' }} />
        <div className="px-6 pb-20 pt-40" style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>ICA-viitekehys™</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-10" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Miten vaikuttavaa viestintää kehitetään?
          </h1>
          <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '620px' }}>
            Diamonin ICA-viitekehys auttaa ymmärtämään, mistä oma viestintätapa rakentuu, miten viestinnästä tehdään tavoitteellisempaa ja miten näitä taitoja kehitetään käytännön harjoittelulla.
          </p>
        </div>
      </section>

      {/* Framework header */}
      <section className="px-6 pt-16 pb-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Viitekehys</p>
        <h2 className="font-light" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.05, color: 'var(--color-text)' }}>
          Identiteetti → Rakenne →{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>Toiminta.</span>
        </h2>
      </section>

      {/* ICA column-based diagram */}
      <section className="px-6 py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
          <div className="grid [grid-template-columns:1fr] md:[grid-template-columns:repeat(3,1fr)]">
            {[
              {
                label: 'ICA I', model: 'DCI™',
                name: 'Identiteetti', question: 'Kuka olen viestijänä ja johtajana?',
                bullets: ['Henkilökohtainen viestintäidentiteetti', 'Johtajaläsnäolo ja autenttisuus', 'Kommunikatiivinen itsetuntemus', 'Esiintymisjännityksen tunnistaminen ja hallinta', 'Luottamuksen rakentaminen'],
                pills: ['Viestintäidentiteetti', 'Autenttisuus'],
                act: 'Alku', actText: 'Luo kontakti, läsnäolo ja luottamus.',
                outcome: 'Läsnäolo',
              },
              {
                label: 'ICA II', model: 'TNT™',
                name: 'Rakenne', question: 'Mitä rakennan, ja miten?',
                bullets: ['Viestinnällinen intentio ja tavoitteet', 'Strateginen tarinankerronta', 'Viestin rakenne ja dramaturgia', 'Yleisön huomioiminen ja kiinnostuksen rakentaminen'],
                pills: ['Tila', 'Narratiivi', 'Toimintarakenne'],
                act: 'Keskikohta', actText: 'Rakenna viesti, rakenne ja yhteinen ymmärrys.',
                outcome: 'Selkeys',
              },
              {
                label: 'ICA III', model: 'K3™',
                name: 'Toiminta', question: 'Miten toteutan sen todellisessa tilanteessa?',
                bullets: ['Käytännön esiintymisharjoittelu', 'Kameraharjoitukset ja tallenteiden analysointi', 'Kehon intentio, sanaton viestintä ja läsnäolo', 'Viestinnällisten tilanteiden simulointi, palaute ja toisto'],
                pills: ['Keho', 'Keskittyminen', 'Kieli'],
                act: 'Loppu', actText: 'Vie kohti toimintaa, päätöstä ja vaikutusta.',
                outcome: 'Vaikuttavuus',
              },
            ].map(({ label, model, name, question, bullets, pills, act, actText, outcome }, i) => (
              <div
                key={name}
                className={i > 0 ? '[border-top:3px_solid_var(--color-blue)] md:[border-top:none]' : ''}
                style={{
                  backgroundColor: 'var(--color-background)',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRight: i < 2 ? '1px solid var(--color-border)' : 'none',
                  borderBottom: '0',
                }}
              >
                {/* Label */}
                <div className="px-5 py-3 flex justify-between items-center" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                  <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{label}</span>
                  <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{model}</span>
                </div>
                {/* Name + question */}
                <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <h3 className="font-light mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', lineHeight: 1.0, color: 'var(--color-text)' }}>{name}</h3>
                  <p className="text-sm italic" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-muted)', lineHeight: 1.4 }}>{question}</p>
                </div>
                {/* Bullets */}
                <div className="px-5 py-3 flex-1" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {bullets.map((b, bi) => (
                    <div key={b} className="flex items-start gap-3 py-2" style={{ borderBottom: bi < bullets.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                      <span className="text-xs" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}
                </div>
                {/* Pills */}
                <div className="px-5 py-4 flex flex-wrap gap-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {pills.map(pill => (
                    <span key={pill} className="text-xs px-3 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: '999px', fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>{pill}</span>
                  ))}
                </div>
                {/* Action (blue) */}
                <div className="px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', backgroundColor: 'var(--color-blue)' }}>
                  <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{act}</p>
                  <p className="font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem', lineHeight: 1.35 }}>{actText}</p>
                </div>
                {/* Outcome */}
                <div className="px-5 py-3 flex items-center gap-3" style={{ backgroundColor: 'var(--color-surface)' }}>
                  <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulos</span>
                  <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1.2rem' }}>{outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>


      <InfluenceCompass lang="fi" showLink={false} />

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3, maxWidth: '540px' }}>Kehitetään johtamisviestintää yhdessä.</h2>
            <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Keskustellaan siitä, miten ICA-kehystä voidaan hyödyntää organisaationne johtamisviestinnän kehittämisessä.</p>
          </div>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: 'var(--color-blue)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>Ota yhteyttä</Link>
        </div>
      </section>
    </>
  )
}
