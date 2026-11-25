import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Leadership Communication Intensive — DIAMON Finland',
  description:
    'Tiivis 6 kuukauden valmennusprosessi, joka rakentaa selkeää ja mitattavaa johtamisviestinnän toimintakykyä, intensiivisellä henkilökohtaisella valmennuksella.',
}

export default function JohtamisviestinnanIntensivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Kopf_des_Aristoteles_1.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'brightness(0.3) saturate(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.4) 100%)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)' }}
          >
            DIAMON-palvelut
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.05,
              maxWidth: '820px',
            }}
          >
            Leadership Communication<br />
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>Intensive</span>
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-12"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '640px',
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            6 kuukauden tiivis valmennus
          </p>
          <p
            className="text-lg font-light mb-12"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '580px',
              lineHeight: 1.8,
            }}
          >
            Tiivis, intensiivinen valmennuskokonaisuus, joka rakentaa mitattavaa johtamisviestinnän toimintakykyä kuudessa kuukaudessa, henkilökohtaisella valmennuksella koko prosessin ajan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/fi/ota-yhteytta"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: 'var(--color-blue)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 500,
                padding: '14px 28px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Aloita ohjelma
            </Link>
            <Link
              href="/fi/ota-yhteytta"
              style={{
                display: 'inline-block',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                padding: '14px 28px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Kysy lisää
            </Link>
          </div>
        </div>
      </section>

      {/* Mitä se on */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Valmennuskokonaisuus
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Kuusi kuukautta tavoitteellista ja{' '}
              <span style={{ fontStyle: 'italic' }}>henkilökohtaista kehittymistä.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leadership Communication Intensive on kuuden kuukauden valmennusprosessi johtajille ja asiantuntijoille, jotka haluavat syventää ymmärrystä omasta viestinnästään ja kehittää kykyään vaikuttaa erilaisissa ammatillisissa tilanteissa.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Kokonaisuus sisältää kuusi kolmen tunnin valmennuskertaa saman henkilökohtaisen valmentajan kanssa.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Valmennus rakentuu asiakkaan yksilöllisten kehitystavoitteiden ja todellisten viestintätilanteiden ympärille. Valmennuskertojen välillä opittua sovelletaan omaan työhön, ja työskentelyn edetessä kehitystä arvioidaan yhdessä.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Ohjelman rakenne
              </span>
            </div>
            {[
              '6 räätälöityä valmennussessiota 6 kuukauden aikana',
              '3 tuntia per sessio',
              'Henkilökohtainen valmentaja koko ohjelman ajan',
              'Jatkuva tuki sessioiden välillä',
              'Johtajan viestintäprofiili ja käytännön toimintamalli',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Mitä muuttuu */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä muuttuu
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { n: '01', title: 'Nopea, mitattava kehitys', body: 'Kuusi intensiivistä sessiota, jotka tuottavat tuloksia, ei asteittaista ajelehtimista, vaan fokusoitu kehityskokonaisuus selkein tavoittein.' },
              { n: '02', title: 'Strategisesti linjattu', body: 'Viestintäsi on tavoitteellista ja kytketty johtajarooliisi ja organisaatiosi suuntaan, ei esiintymistaitona, vaan strategisena toimintakykynä.' },
              { n: '03', title: 'Johdonmukainen paineessa', body: 'Sama auktoriteetti ja selkeys joka tilanteessa, valmistautuneena tai ei. Toimintakyky, joka pitää ratkaisevissa hetkissä.' },
              { n: '04', title: 'Määritelty profiili ja toimintamalli', body: 'Johtajan viestintäprofiili ja henkilökohtainen toimintamalli, jotka palvelevat ohjelman jälkeenkin.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Kenelle */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Kenelle
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Johtajille, jotka haluavat kehittää viestinnällistä toimintakykyään.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Leadership Communication Intensive on kuuden kuukauden henkilökohtainen valmennuskokonaisuus johtajille ja asiantuntijoille. Kuusi räätälöityä valmennuskertaa rakentuvat asiakkaan yksilöllisten kehitystavoitteiden ja todellisten viestintätilanteiden ympärille.
            </p>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              'Johtajat ja johtoryhmän jäsenet',
              'Johtajat, jotka ottavat laajempaa johtajuutta',
              'Asiantuntijat, joilla on korkean panoksen viestintätilanne edessä',
              'Johtajat, joilla on selkeä kehitystavoite ja aikataulu',
              'Ne, jotka harkitsevat vuosiohjelmaa ja haluavat ensin kokeilla',
            ].map(item => (
              <div key={item} className="flex items-start gap-4 px-6 py-4" style={{ backgroundColor: 'var(--color-background)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      <ICAFrameworkSection lang="fi" />

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section
        className="px-6 py-20"
        style={{ backgroundColor: 'var(--color-blue)', color: '#fff' }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '560px' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
              Seuraava askel
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.15 }}>
              Puhutaan.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.75 }}>
              Kerro tavoitteistasi. Tutkitaan yhdessä, miten Intensive voisi rakentaa viestinnällistä vaikuttavuuttasi.
            </p>
          </div>
          <Link
            href="/fi/ota-yhteytta"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: 'var(--color-blue)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              padding: '14px 28px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              flexShrink: 0,
            }}
          >
            Aloita keskustelu
          </Link>
        </div>
      </section>
    </>
  )
}
