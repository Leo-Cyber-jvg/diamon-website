import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Näkemyksiä — DIAMON Finland',
  description: 'Ajatuksia johtamisviestinnästä, johtajaläsnäolosta, tekoälystä ja johtajuudesta sekä viestinnällisestä suorituskyvystä.',
}

const topics = ['Johtamisviestintä', 'Johtajaläsnäolo', 'Tekoäly ja johtajuus', 'Vaikuttaminen ja vuorovaikutus', 'Viestintä paineessa', 'Organisaatioviestintä', 'Ihmiskeskeinen johtajuus', 'Viestinnällinen suorituskyky']

const articles = [
  { category: 'Johtamisviestintä', title: 'Miksi johtamisviestintä on infrastruktuuria, ei pehmeä taito', intro: 'Organisaatiot, jotka menestyvät epävarmuuden aikana, jakavat yhden yhteisen piirteen: niiden johtajat kykenevät viestimään selkeästi, vakuuttavasti ja strategisesti täsmällisesti paineessa. Tämä ei ole sattumaa.', readTime: '6 min', date: 'Kesäkuu 2026', featured: true },
  { category: 'Tekoäly ja johtajuus', title: 'Tekoälyn aikakaudella inhimillinen viestintä on harvinaisin strateginen voimavara', intro: 'Kun automaatio hoitaa yhä enemmän sitä, mitä organisaatiot tarvitsivat ihmisiä tekemään, kyky luoda luottamusta, rakentaa yhdensuuntaisuutta, johtaa vuorovaikutusta ja suoriutua paineessa kasvaa eksponentiaalisesti arvokkaammaksi — ja harvinaisemmaksi.', readTime: '8 min', date: 'Toukokuu 2026' },
  { category: 'Johtajaläsnäolo', title: 'Johtajaläsnäolon kolme ulottuvuutta — ja miksi useimmat johtajat kehittävät vain yhtä', intro: 'Johtajaläsnäolo ei ole yksittäinen ominaisuus. Se on järjestelmä. Useimmat kehitysohjelmat käsittelevät sitä, miltä ihminen näyttää ja kuulostaa. Hyvin harvat käsittelevät sen taustalla olevaa arkkitehtuuria, joka tekee läsnäolosta johdonmukaisen, kestävän ja aidosti vaikuttavan.', readTime: '5 min', date: 'Huhtikuu 2026' },
  { category: 'Viestinnällinen suorituskyky', title: 'Mitä huippu-urheilu voi opettaa meille viestinnästä paineessa', intro: 'Huippu-urheilijat käyttävät tuhansia tunteja kehittääkseen kykyä suoriutua paineessa — ei treeniamällä kovemmin, vaan rakentamalla spesifistä kykyä hallita tilaa, fokusta ja toteutusta silloin kun sillä on eniten merkitystä. Johtamisviestintä vaatii saman kurinalaisuuden.', readTime: '7 min', date: 'Maaliskuu 2026' },
  { category: 'Organisaatioviestintä', title: 'Miksi muutosviestintä epäonnistuu — ja mitä tehdä sen sijaan', intro: 'Useimmat muutoshankkeet epäonnistuvat ei itse muutoksen vaan sen takana olevan viestintäarkkitehtuurin puuttumisen takia. Strategia ilman viestintää on intentio ilman vaikutusta.', readTime: '6 min', date: 'Helmikuu 2026' },
  { category: 'ICA-viitekehys', title: 'Identiteetti ennen strategiaa: miksi viestijät jotka eivät tiedä keitä he ovat, eivät voi laskeutua sillä mitä he sanovat', intro: 'DIAMON ICA-viitekehyksen ensimmäinen taso on Identiteetti — ja se on johdonmukaisesti aliarvioiduin. Useimmat viestintäkehitysohjelmat alkavat siitä, mitä sanoa ja miten sanoa se. Me aloitamme siitä, kuka sen sanoo, ja miksi sillä on merkitystä.', readTime: '5 min', date: 'Tammikuu 2026' },
]

export default function NakemyksiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>Näkemyksiä</p>
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <h1 className="text-4xl md:text-6xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.05, maxWidth: '640px' }}>
            Ajatuksia johtamisviestinnästä.
          </h1>
          <p className="text-lg font-light" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '480px' }}>
            Näkemyksiä johtamisviestinnästä, johtajaläsnäolosta, tekoälystä ja inhimillisistä kyvyistä, jotka merkitsevät eniten aikakaudella johon olemme siirtymässä.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', backgroundColor: '#ECEAE6' }}>
        <div className="px-6 py-5 flex flex-wrap gap-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {topics.map((t) => (
            <span key={t} className="text-xs tracking-wide" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', border: '1px solid var(--color-border)', padding: '5px 12px', backgroundColor: 'var(--color-background)' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Nostettu esiin</p>
        <div className="grid md:grid-cols-2 gap-16 items-start" style={{ borderTop: '2px solid var(--color-blue)', paddingTop: '32px' }}>
          <div>
            <span className="text-xs tracking-wide uppercase block mb-4" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{articles[0].category}</span>
            <h2 className="text-2xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>{articles[0].title}</h2>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{articles[0].date}</span>
              <span style={{ width: '1px', height: '12px', backgroundColor: 'var(--color-border)', display: 'inline-block' }} />
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{articles[0].readTime}</span>
            </div>
          </div>
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{articles[0].intro}</p>
            <span className="text-sm" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>Koko artikkeli tulossa pian.</span>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Article list */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Kaikki näkemykset</p>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {articles.slice(1).map((a) => (
            <div key={a.title} className="grid md:grid-cols-4 gap-0" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="px-8 py-7 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs block mb-1" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{a.category}</span>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{a.date}</span>
              </div>
              <div className="px-8 py-7 md:col-span-2 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{a.intro}</p>
              </div>
              <div className="px-8 py-7 flex flex-col justify-between">
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{a.readTime}</span>
                <span className="text-xs mt-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>Tulossa pian</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* LinkedIn follow */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Pysy ajan tasalla</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>Ajatuksia johtamisviestinnästä — silloin kun niillä on merkitystä.</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Seuraa Leo Sjömaniä LinkedInissä säännöllisiin näkemyksiin johtamisviestinnästä, johtajaläsnäolosta ja inhimillisen viestinnän tulevaisuudesta organisaatioissa.</p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="https://www.linkedin.com/in/leo-sj%C3%B6man-33721558/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'var(--color-blue)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '14px 24px', textDecoration: 'none', letterSpacing: '0.04em', alignSelf: 'flex-start' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="3" fill="white" fillOpacity="0.2" /><path d="M7 10v7M7 7v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" /><path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Seuraa LinkedInissä
            </a>
            <Link href="/fi/ota-yhteytta" className="link-blue text-sm self-start" style={{ fontFamily: 'var(--font-body)' }}>Ota yhteyttä →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
