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
        <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}>

          {/* Row 1 – ICA label + model abbrev */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {[
              { label: 'ICA I', model: 'DCI™' },
              { label: 'ICA II', model: 'TNT™' },
              { label: 'ICA III', model: 'K3™' },
            ].map(({ label, model }, i) => (
              <div key={label} className="px-6 py-3 flex justify-between items-center" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                <span className="text-xs tracking-[0.15em] uppercase" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{label}</span>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{model}</span>
              </div>
            ))}
          </div>

          {/* Row 2 – Name + model text + question */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {[
              { name: 'Identiteetti', modelText: 'Foundational model', question: 'Kuka olen viestijänä ja johtajana?' },
              { name: 'Kompositio', modelText: 'Tactical model', question: 'Mitä rakennan, ja miten?' },
              { name: 'Toiminta', modelText: 'Practical model', question: 'Miten toteutan sen todellisessa tilanteessa?' },
            ].map(({ name, modelText, question }, i) => (
              <div key={name} className="px-6 pt-6 pb-7" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                <h3 className="font-light mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.0, color: 'var(--color-text)' }}>{name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{modelText}</p>
                <p className="text-sm italic" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.45 }}>{question}</p>
              </div>
            ))}
          </div>

          {/* Row 3 – Element pills */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
            {[
              ['Viestintäidentiteetti', 'Autenttisuus'],
              ['Tila', 'Narratiivi', 'Toimintarakenne'],
              ['Keho', 'Keskittyminen', 'Kieli'],
            ].map((pills, i) => (
              <div key={i} className="px-6 py-5 flex flex-wrap gap-2" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                {pills.map(pill => (
                  <span key={pill} className="text-xs px-3 py-1" style={{ border: '1px solid var(--color-border)', borderRadius: '999px', fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>{pill}</span>
                ))}
              </div>
            ))}
          </div>

          {/* Row 4 – Act (blue) */}
          <div className="grid md:grid-cols-3" style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-blue)' }}>
            {[
              { act: 'Alku', text: 'Luo kontakti, läsnäolo ja luottamus.' },
              { act: 'Keskikohta', text: 'Rakenna viesti, rakenne ja yhteinen ymmärrys.' },
              { act: 'Loppu', text: 'Vie kohti toimintaa, päätöstä ja vaikutusta.' },
            ].map(({ act, text }, i) => (
              <div key={act} className="px-6 py-5" style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{act}</p>
                <p className="font-light" style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1.1rem', lineHeight: 1.35 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Row 5 – Tulos */}
          <div className="grid md:grid-cols-3">
            {[
              { outcome: 'Läsnäolo' },
              { outcome: 'Selkeys' },
              { outcome: 'Vaikuttavuus' },
            ].map(({ outcome }, i) => (
              <div key={outcome} className="px-6 py-4 flex items-center gap-3" style={{ borderRight: i < 2 ? '1px solid var(--color-border)' : 'none' }}>
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tulos</span>
                <span className="font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-blue)', fontSize: '1.2rem' }}>{outcome}</span>
              </div>
            ))}
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
