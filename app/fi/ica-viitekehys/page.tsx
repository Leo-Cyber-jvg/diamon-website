import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkDiagram from '../../components/ICAFrameworkDiagram'
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

      {/* Visual diagram */}
      <ICAFrameworkDiagram lang="fi" />

      {/* Three levels */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { label: 'ICA I · DCI™', title: 'Identiteetti', q: 'Mistä käsin viestin?', desc: 'Johtajaidentiteetti, itsetuntemus ja viestinnällinen perusta.' },
            { label: 'ICA II · TNT™', title: 'Kompositio', q: 'Miten rakennan viestini?', desc: 'Viestin arkkitehtuuri, narratiivi ja strateginen selkeys.' },
            { label: 'ICA III · K3™', title: 'Toiminta', q: 'Miten viestin toteutuu?', desc: 'Kehollisuus, läsnäolo ja suoritus todellisissa tilanteissa.' },
          ].map(({ label, title, q, desc }) => (
            <div key={label} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 px-8 py-8"
              style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-[0.25em] uppercase shrink-0" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', minWidth: '120px' }}>{label}</span>
              <span className="text-2xl font-light shrink-0" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', minWidth: '160px' }}>{title}</span>
              <span className="text-sm font-light shrink-0" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)', minWidth: '200px', fontStyle: 'italic' }}>{q}</span>
              <span className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>{desc}</span>
            </div>
          ))}
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
