import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tietoa Leo Sjömanista — DIAMON Finland',
  description: 'Leo Sjöman on DIAMONin perustaja, johtamisviestinnän valmentaja ja executive performance -spesialisti. Yli 20 vuoden kokemus ammattilaisesiintyjänä ja viestinnän ammattilaisena.',
}

export default function TietoaPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-24" style={{ backgroundColor: 'var(--color-blue)', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>Tietoa</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}>
            Johtamisviestintä on
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> suorituskyvyn infrastruktuuria.</span>
          </h1>
          <p className="text-lg font-light" style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '580px' }}>
            DIAMON on rakennettu yhdistämään ammattiesiintyjän, viestinnän ammattilaisen ja liiketoiminnan strategistin osaaminen — kehittämään johtajia, jotka kommunikoivat niin kuin johtavat.
          </p>
        </div>
      </section>

      {/* Leo section */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div>
            <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '3/4', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/leo-sjoman.jpg" alt="Leo Sjöman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
            <div className="mt-6">
              <p className="text-lg font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Leo Sjöman</p>
              <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Perustaja, DIAMON Finland</p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/leo-sj%C3%B6man-33721558/" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>LinkedIn</a>
                <a href="mailto:info@diamon.fi" className="text-sm" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>info@diamon.fi</a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Perustaja</p>
            <h2 className="text-3xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Rakennettu kahden maailman risteyskohdassa.
            </h2>
            <div className="flex flex-col gap-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              <p>Leo Sjöman on DIAMONin perustaja, johtamisviestinnän valmentaja ja executive performance -spesialisti. Hän on rakentanut uransa kahden maailman risteyskohdassa: ammattiesiintyjänä ja viestinnän ammattilaisena.</p>
              <p>Yli 20 vuoden kokemus elokuvan, television, teatterin ja kaupallisen viestinnän ammattilaisesiintymisestä on antanut hänelle ainutlaatuisen näkökulman siihen, mitä vaikuttava suoritus vaatii — fyysisesti, psyykkisesti ja rakenteellisesti.</p>
              <p>Tämä kokemus on muodostunut DIAMONin metodologian selkärangaksi. DIAMON ICA-viitekehys™ yhdistää suorituspsykologian, rakenteellisen narratiivin teorian ja esiintyjän käytännön osaamisen — sovellettuna johtamiseen, johtajaläsnäoloon ja organisatoriseen viestintäkykyyn.</p>
              <p>Leo työskentelee johtajien, johtoryhmien ja organisaatioiden kanssa, jotka haluavat kehittää viestinnällisen suorituskykynsä vastaamaan todellista osaamistaan ja johtajuudelle asettamiaan vaatimuksia.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Credentials */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tausta ja osaaminen</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { area: 'Johtamisviestintä', items: ['Johtajan viestintävalmennus', 'Johtoryhmäkehitys', 'ICA-viitekehys™ metodologia', 'Viestintäarkkitehtuurin suunnittelu'] },
            { area: 'Esiintyminen ja suorituskyky', items: ['Yli 20 v. ammattilaisesiintyminen', 'Elokuva, televisio ja teatteri', 'Kaupallinen viestintä', 'Suorituspsykologia'] },
            { area: 'Executive Performance', items: ['Johtajaläsnäolon kehittäminen', 'Viestintä paineessa', 'Media- ja kameravalmennus', 'Keynote- ja esitysvalmistautuminen'] },
            { area: 'Ajatusjohtajuus', items: ['DIAMON ICA Framework™', 'DCI™, SNS™, K3™', 'Organisaatioviestintä', 'Viestinnällinen suorituskyky'] },
          ].map(({ area, items }) => (
            <div key={area} className="p-7 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <h3 className="text-base font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{area}</h3>
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span style={{ color: 'var(--color-blue)', fontSize: '0.7rem', marginTop: '3px', flexShrink: 0 }}>—</span>
                    <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* DIAMON philosophy */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>DIAMON-filosofia</p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Johtamisviestintä ei ole pehmeä taito.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> Se on suorituskyvyn infrastruktuuria.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            <p>DIAMON rakennettiin vastauksena yksinkertaiseen havaintoon: useimmat johtajat ovat paljon osaavampia kuin heidän viestintänsä antaa ymmärtää.</p>
            <p>Kuilu osaamisen ja sen vaikuttavuuden välillä ei ole osaamiskysymys. Se on viestintäarkkitehtuurikysymys. Kyse on identiteetistä, kompositiosta ja toiminnasta — siitä, kuka olet viestijänä, miten rakennat viestisi ja miten toteutat sen oikeissa tilanteissa.</p>
            <p>DIAMONin tehtävä on kuroa tuo kuilu umpeen — järjestelmällisesti, mitattavasti ja pitkäjänteisesti.</p>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '480px' }}>Oikea kehityspolku alkaa oikeasta kysymyksestä.</h2>
          <Link href="/fi/ota-yhteytta" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>Ota yhteyttä</Link>
        </div>
      </section>
    </>
  )
}
