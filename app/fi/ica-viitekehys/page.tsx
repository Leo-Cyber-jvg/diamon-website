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
      <section className="px-6 pt-40 pb-24" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>ICA-viitekehys™</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-10" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Miten vaikuttavaa viestintää kehitetään?
            <span className="block mt-3" style={{ fontStyle: 'italic', opacity: 0.65, fontSize: '0.7em' }}>Identiteetti. Kompositio. Toiminta.</span>
          </h1>
          <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '620px' }}>
            Diamonin ICA-viitekehys auttaa ymmärtämään, mistä oma viestintätapa rakentuu, miten viestinnästä tehdään tavoitteellisempaa ja miten näitä taitoja kehitetään käytännön harjoittelulla.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pt-20 pb-4" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
          Vaikuttavan johtamisviestinnän perusta.
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', maxWidth: '640px' }}>
          ICA Framework™ on Diamonin kehittämä systemaattinen malli viestinnällisen toimintakyvyn kehittämiseen. Se yhdistää henkilökohtaisen vaikuttavuuden, strategisen viestinnän ja kyvyn toimia erilaisissa vuorovaikutustilanteissa.
        </p>
      </section>

      {/* ICA three-column diagram */}
      <section className="px-6 py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>

          {/* ICA I – Identiteetti */}
          <div className="flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
            <div style={{ height: '3px', backgroundColor: '#5656D6' }} />
            <div className="px-7 pt-6 pb-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>ICA I · DCI™</p>
              <h3 className="font-light mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.05, color: 'var(--color-text)' }}>Identiteetti</h3>
              <p className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>Foundational model</p>
            </div>
            <div className="px-7 py-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-sm italic" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', lineHeight: 1.4, opacity: 0.85 }}>"Kuka olen viestijänä ja johtajana?"</p>
            </div>
            <div className="px-7 py-5 flex-1" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Elementit</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Viestintäidentiteetti · Autenttisuus</p>
            </div>
            <div className="px-7 py-5" style={{ backgroundColor: 'var(--color-blue)' }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>Alku</p>
              <p className="text-sm font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>Luo kontakti, läsnäolo ja luottamus.</p>
            </div>
            <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulos</span>
              <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1rem' }}>Läsnäolo</span>
            </div>
          </div>

          {/* ICA II – Kompositio */}
          <div className="flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
            <div style={{ height: '3px', backgroundColor: '#7B7BE8' }} />
            <div className="px-7 pt-6 pb-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>ICA II · TNT™</p>
              <h3 className="font-light mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.05, color: 'var(--color-text)' }}>Kompositio</h3>
              <p className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>Tactical model</p>
            </div>
            <div className="px-7 py-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-sm italic" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', lineHeight: 1.4, opacity: 0.85 }}>"Mitä rakennan, ja miten?"</p>
            </div>
            <div className="px-7 py-5 flex-1" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Elementit</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Tila · Narratiivi · Toimintarakenne</p>
            </div>
            <div className="px-7 py-5" style={{ backgroundColor: 'var(--color-blue)' }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>Keskikohta</p>
              <p className="text-sm font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>Rakenna viesti, rakenne ja yhteinen ymmärrys.</p>
            </div>
            <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulos</span>
              <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1rem' }}>Selkeys</span>
            </div>
          </div>

          {/* ICA III – Toiminta */}
          <div className="flex flex-col" style={{ backgroundColor: 'var(--color-background)' }}>
            <div style={{ height: '3px', backgroundColor: '#A0A0F0' }} />
            <div className="px-7 pt-6 pb-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.25em] uppercase mb-2" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>ICA III · K3™</p>
              <h3 className="font-light mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.05, color: 'var(--color-text)' }}>Toiminta</h3>
              <p className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}>Practical model</p>
            </div>
            <div className="px-7 py-5" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-sm italic" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)', lineHeight: 1.4, opacity: 0.85 }}>"Miten toteutan sen todellisessa tilanteessa?"</p>
            </div>
            <div className="px-7 py-5 flex-1" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Elementit</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Keho · Keskittyminen · Kieli</p>
            </div>
            <div className="px-7 py-5" style={{ backgroundColor: 'var(--color-blue)' }}>
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-body)' }}>Loppu</p>
              <p className="text-sm font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>Vie kohti toimintaa, päätöstä ja vaikutusta.</p>
            </div>
            <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulos</span>
              <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1rem' }}>Vaikuttavuus</span>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Architecture of Influence connector */}
      <section className="px-6 pt-20 pb-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Laajempi kokonaisuus</p>
            <h2 className="text-3xl md:text-4xl font-light mb-5" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Yksilön kehityksestä{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}>organisaatiovaikutukseen.</span>
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              ICA-viitekehys kehittää yksilöä. DIAMON Vaikuttavuuden Arkkitehtuuri näyttää, mihin se kehitys kohdistuu, neljään ulottuvuuteen, jotka yhdessä määrittävät organisaation viestintäkyvyn: viestintäidentiteetti, johtajaläsnäolo, johtamiskulttuuri ja liiketoimintasuoritus.
            </p>
          </div>
          <p className="text-sm leading-relaxed md:pb-2" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
            Kun ICA-kehitystä sovelletaan järjestelmällisesti, johtajien kesken ja ajan kuluessa, se muuttaa paitsi yksilön suoritusta myös sitä, miten koko organisaatio viestii, päättää ja johtaa. Alla oleva malli kuvaa tätä organisatorista ulottuvuutta.
          </p>
        </div>
      </section>

      <InfluenceCompass lang="fi" />

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
