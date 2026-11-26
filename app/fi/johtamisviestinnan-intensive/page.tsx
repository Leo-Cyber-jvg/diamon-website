import type { Metadata } from 'next'
import Link from 'next/link'
import ICAFrameworkSection from '../../components/ICAFrameworkSection'

export const metadata: Metadata = {
  title: 'Leadership Communication Intensive — DIAMON Finland',
  description:
    'Tiivis 6 kuukauden valmennusprosessi, joka rakentaa selkeää ja mitattavaa johtamisviestinnän toimintakykyä, intensiivisellä henkilökohtaisella valmennuksella.',
}

const mitaMuuttuuItems = [
  { n: '01', title: 'Mitattava kehitys', body: 'Fokusoitu kehityskokonaisuus, jossa kuusi intensiivistä valmennuskertaa tuottavat tuloksia selkein tavoittein.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="17" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="9" y="12" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="15" y="7" width="4" height="17" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/><polyline points="21,10 24,7 24,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><line x1="21" y1="4" x2="24" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="24" y1="7" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { n: '02', title: 'Strategisesti linjattu viestintä', body: 'Viestintäsi on tavoitteellista ja kytkeytyy johtaja- tai asiantuntijarooliisi sekä organisaatiosi suuntaan. Viestintä osana strategista toimintakykyä.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/><line x1="14" y1="4" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="20" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="20" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="12" x2="19" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { n: '03', title: 'Johdonmukainen toimintakyky', body: 'Viestinnällinen toimintakyky ja selkeys säilyvät erilaisissa viestintäympäristöissä ja vuorovaikutustilanteissa. Toimintakyky, joka palvelee myös paineisissa tilanteissa.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="2,14 6,14 9,7 12,21 15,11 18,17 21,14 26,14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>) },
  { n: '04', title: 'Selkeä viestintäprofiili ja toimintamalli', body: 'Johtajan viestintäprofiili ja henkilökohtainen toimintamalli, jotka palvelevat ohjelman jälkeenkin.', icon: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4C9.03 4 5 8.03 5 13c0 2.5 1.02 4.77 2.66 6.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M14 4c4.97 0 9 4.03 9 9 0 2.5-1.02 4.77-2.66 6.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M9 13c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.38-.56 2.63-1.46 3.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M11.5 13c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .69-.28 1.31-.73 1.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><path d="M14 15.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 20.5c1.5 1.5 3.5 2.5 7 2.5s5.5-1 7-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/></svg>) },
]

export default function JohtamisviestinnanIntensivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24"
        style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010', color: '#fff' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/impact-session-hero.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'brightness(0.35) saturate(0.5)' }} />
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
            Intensiivinen valmennuskokonaisuus, joka rakentaa mitattavaa johtamisviestinnän toimintakykyä 6 kuukaudessa henkilökohtaisella valmennuksella koko prosessin ajan.
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
          <div className="flex flex-col gap-px self-start" style={{ backgroundColor: 'var(--color-border)' }}>
            <div className="px-6 py-3" style={{ backgroundColor: 'var(--color-surface)' }}>
              <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                Ohjelman rakenne
              </span>
            </div>
            {[
              '6 räätälöityä valmennussessiota 6 kuukauden aikana',
              '3 tuntia per sessio',
              'Henkilökohtainen valmentaja koko ohjelman ajan',
              'Tuki sessioiden välillä',
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


      {/* Mitä muuttuu */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Mitä muuttuu
        </p>
        <div style={{ border: '1px solid var(--color-border)' }}>
          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {mitaMuuttuuItems.map(({ n, title, body, icon }) => (
              <div key={n} className="p-8 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
                <span style={{ color: 'var(--color-blue)', display: 'block', marginBottom: '2px' }}>{icon}</span>
                <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{n}</span>
                <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Kenelle */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Kenelle
            </p>
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              Johtajille ja asiantuntijoille, jotka haluavat vahvistaa henkilökohtaista vaikuttavuuttaan.
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Valmennus sopii sinulle, joka haluat tuoda omaa osaamistasi ja ajatteluasi vaikuttavammin esiin, kehittää esiintymis- ja vuorovaikutustaitojasi sekä vahvistaa toimintakykyäsi työelämän vaativissa tilanteissa.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Olet kenties siirtymässä uuteen johtajarooliin, kasvattamassa julkista näkyvyyttäsi tai haluat tietoisemmin kehittää omaa tapaasi viestiä, kohdata ihmisiä ja johtaa.
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


      <ICAFrameworkSection lang="fi" />


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
