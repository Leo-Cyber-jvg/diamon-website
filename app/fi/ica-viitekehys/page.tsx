import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ICA-viitekehys™ — DIAMON Finland',
  description: 'DIAMON ICA-viitekehys™ — Identity, Composition, Action. Omistautunut metodologia johtamisviestinnän suorituskyvyn kehittämiseen. DCI™, SNS™, K3™.',
}

export default function IcaViitekehysPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-24" style={{ backgroundColor: 'var(--color-blue)', minHeight: '65vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>ICA-viitekehys™</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Kolme tasoa.
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> Yksi yhtenäinen järjestelmä.</span>
          </h1>
          <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '560px' }}>
            DIAMON ICA-viitekehys™ on omistautunut metodologia, joka kehittää viestinnällistä suorituskykyä identiteetistä kompositioon ja toimintaan — järjestelmällisesti, ei sattumanvaraisesti.
          </p>
        </div>
      </section>

      {/* Framework overview */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Metodologia</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Vaikuttava johtamisviestintä ei ole synnynnäinen lahja.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> Se on arkkitehtuuri.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              ICA-viitekehys kehitettiin vastauksena yhteen keskeiseen havainnon: useimmat viestintäkehitysohjelmat kohdistuvat siihen, mitä sanot ja miten sanot sen. Ne ohittavat sen, kuka sen sanoo ja miksi sillä on merkitystä.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Viitekehys yhdistää suorituspsykologian, rakenteellisen narratiivin teorian ja yli kahden vuosikymmenen ammatillisen esiintyjäkokemuksen. Se on testattua käytännössä — ei suunniteltu luokkahuoneessa.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { id: 'ICA I', name: 'Identiteetti', model: 'DCI™', q: 'Kuka olen viestijänä ja johtajana?' },
              { id: 'ICA II', name: 'Kompositio', model: 'SNS™', q: 'Miten rakennan vaikuttavan viestinnän intentionaalisesti?' },
              { id: 'ICA III', name: 'Toiminta', model: 'K3™', q: 'Miten viestin tehokkaasti oikeissa tilanteissa?' },
            ].map(({ id, name, model, q }) => (
              <div key={id} className="px-8 py-6 flex items-start gap-6" style={{ backgroundColor: 'var(--color-background)' }}>
                <div style={{ minWidth: '80px' }}>
                  <span className="text-xs tracking-widest block" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{id}</span>
                  <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{model}</span>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-1" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{name}</h3>
                  <p className="text-xs italic" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{q}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* ICA I */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>ICA I</span>
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>DCI™</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>Identiteetti</h2>
            <p className="text-base italic mb-6" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)' }}>Kuka olen viestijänä ja johtajana?</p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              ICA I rakentuu DCI™ (Dual Communicational Identity) -mallin varaan. Se tutkii viestijän identiteettiä kahdesta ulottuvuudesta: sitä, kuka olet autenttisesti, ja sitä, miten sinun täytyy esiintyä ammatillisessa roolissasi.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Autenttisuus, ammatillinen rooli, uskottavuus, luottamus ja henkilökohtainen läsnäolo. Se perusta, jolle kaikki viestintäkyky rakentuu.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {['Kommunikatiivinen itsetuntemus', 'Uskottavuuden ja luottamuksen arkkitehtuuri', 'Läsnäolo paineessa', 'Ammatillinen viestintäidentiteetti', 'Autenttinen johtajarooli'].map((el) => (
              <div key={el} className="flex items-center gap-4 px-7 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', flexShrink: 0 }}>—</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{el}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* ICA II */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>ICA II</span>
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>SNS™</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>Kompositio</h2>
            <p className="text-base italic mb-6" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)' }}>Miten rakennan vaikuttavan viestinnän intentionaalisesti?</p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              ICA II rakentuu SNS™ (Tila, Narratiivi, Rakenne) -mallin varaan. Se tutkii sitä, miten vaikuttava viestintä rakennetaan ennen toimitusta — miten kommunikatiivinen tila valmistellaan, miten narratiivi konstruoidaan ja miten rakenne palvelee strategista tavoitetta.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Tila, narratiivi, rakenne, selkeys ja strateginen intentio. Miten vaikuttava johtamisviestintä rakennetaan intentionaalisesti ennen kuin avaat suusi.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {['Kommunikatiivisen tilan ja valmiuden hallinta', 'Narratiivin rakentaminen', 'Strateginen rakenne ja sekvenssointi', 'Viestintätavoitteen määrittely', 'Yleisön yhdensuuntaisuus'].map((el) => (
              <div key={el} className="flex items-center gap-4 px-7 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', flexShrink: 0 }}>—</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{el}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* ICA III */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>ICA III</span>
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>K3™</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>Toiminta</h2>
            <p className="text-base italic mb-6" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-heading)' }}>Miten viestin tehokkaasti oikeissa tilanteissa?</p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              ICA III rakentuu K3™ (Fyysisyys, Fokus, Kieli) -mallin varaan. Se tutkii viestinnän toteutusta — sitä, miten fyysisyyttä käytetään, miten fokus säilytetään paineessa ja miten kieltä käytetään täsmällisesti ja rytmisesti.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Fyysinen läsnäolo, fokus, kieli, vuorovaikutus ja suoritus paineessa. Missä arkkitehtuuri kohtaa todellisuuden.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {['Fyysinen läsnäolo ja kehollinen ilmaisu', 'Attentionaalinen fokus paineessa', 'Kielen täsmällisyys ja rytmi', 'Vuorovaikutuksen johtaminen', 'Suoritus oikeissa tilanteissa'].map((el) => (
              <div key={el} className="flex items-center gap-4 px-7 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', flexShrink: 0 }}>—</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{el}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Aristotelian layer */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>Aristotelinen rakenne — sovellettuna johtamisviestintään</p>
          <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            {[
              { act: 'Alku', ica: 'ICA I — Identiteetti', desc: 'Luo kontakti, läsnäolo ja luottamus.' },
              { act: 'Keskikohta', ica: 'ICA II — Kompositio', desc: 'Rakenna viesti, rakenne ja yhteinen ymmärrys.' },
              { act: 'Loppu', ica: 'ICA III — Toiminta', desc: 'Ohjaa kohti toimintaa, päätöstä ja vaikutusta.' },
            ].map(({ act, ica, desc }) => (
              <div key={act} className="px-8 py-8 flex flex-col gap-3" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>{act}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: '#fff' }}>{ica}</h3>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3, maxWidth: '500px' }}>Valmis aloittamaan ICA-kehityksen?</h2>
            <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Ensimmäinen keskustelu on diagnostiikka — tunnistamme tarkan kehityskohteen.</p>
          </div>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: 'var(--color-blue)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>Ota yhteyttä</Link>
        </div>
      </section>
    </>
  )
}
