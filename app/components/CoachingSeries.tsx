import SeriesSignupForm, { type SignupDay } from './SeriesSignupForm'

// Johtajan vaikuttavuus ja toimintakyky -valmennussarja / Leadership Impact and Performance series.
// One layout, two languages. Content comes from the Pennanen V7 and Tuomilehto V12 decks.

export type Lang = 'fi' | 'en'

const eyebrow = { color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' } as const
const serif = { fontFamily: 'var(--font-heading)' } as const
const body = { fontFamily: 'var(--font-body)' } as const

type Part = { label: string; who: string; title: string; text: string }

type Concept = {
  id: string
  anchor: string
  tag: string
  guest: string
  guestImg: string
  guestImgPos: string
  title: string
  weekday: string
  date: string
  signupValue: string
  core: string
  coreSplit: [string, string]
  intro: string
  parts: Part[]
  outcomes: string[]
  audience: string
  // Vain ensisijaisella (markkinoitavalla) päivällä
  headline?: string
  promise?: string
  story?: string[]
  smallGroup?: string
}

type Coach = { name: string; role: string; img: string; pos: string; text: string; meta: string }

type Content = {
  heroEyebrow: string
  heroTitle: [string, string]
  heroLead: string
  heroPills: [string, string]
  whyEyebrow: string
  whyTitle: string
  whyText: [string, string]
  format: [string, string][]
  conceptsEyebrow: string
  conceptsTitle: string
  conceptsNote: string
  nextLabel: string
  dayLabel: string
  dateLabel: string
  structureLabel: string
  benefitsLabel: string
  afterLabel: string
  audienceLabel: string
  facts: [string, string, string?][]
  cta: string
  concepts: Concept[]
  coachesEyebrow: string
  coachesTitle: string
  coaches: Coach[]
  processEyebrow: string
  processTitle: string
  process: [string, string][]
  signupAnchor: string
  formName: string
  postPath: string
  finalEyebrow: string
  finalTitle: string
  finalText: string
}

const LEO_IMG = '/valmennussarja/leo-sjoman.jpg'
const ANTTI_IMG = '/valmennussarja/antti-pennanen.jpg'
const HENRI_IMG = '/valmennussarja/henri-tuomilehto.jpg'

const content: Record<Lang, Content> = {
  fi: {
    heroEyebrow: 'Valmennussarja · Diamon Finland',
    heroTitle: ['Johtajan vaikuttavuus', ' ja toimintakyky.'],
    heroLead:
      'Yhden päivän intensiivivalmennuksia johtajille. Jokaisessa päivässä Leo Sjöman valmentaa yhdessä eri alan huippuasiantuntijan kanssa. Yhdistämme johtamisviestinnän, psykofyysisen harjoittamisen ja asiantuntijan oman osaamisen.',
    heroPills: ['01 · Johtaminen paineessa', '02 · Uni ja palautuminen'],
    whyEyebrow: 'Mihin sarja vastaa',
    whyTitle: 'Kun johtamisen vaatimukset kasvavat, myös johtajan henkilökohtaisen toimintakyvyn on kehityttävä.',
    whyText: [
      'Kasvava vastuu, jatkuva muutos, epävarmuus ja paine edellyttävät kykyä johtaa omaa toimintaa, ihmisten ajattelua, vuorovaikutusta ja ilmapiiriä.',
      'Vaikuttavuus ei rakennu pelkästä substanssiosaamisesta. Yhä keskeisempää on kyky tunnistaa ja säädellä omaa tilaa, olla läsnä ja vaikuttaa toisiin ihmisiin henkilökohtaisesti.',
    ],
    format: [
      ['Asiantuntijan osuus', 'Vieraileva huippuasiantuntija tuo päivään oman alansa osaamisen.'],
      ['Leon osuus', 'Johtamisviestintä ja henkilökohtainen vaikuttavuus. Harjoittelua, ei luentoa.'],
      ['Yhteinen osuus', 'Valmennetaan yhdessä. Jokainen lähtee päivästä oman suunnitelman kanssa.'],
    ],
    conceptsEyebrow: 'Sarjan valmennuspäivät',
    conceptsTitle: 'Kaksi ensimmäistä päivää.',
    conceptsNote: 'Uusia valmennuspäiviä julkistetaan myöhemmin.',
    nextLabel: 'Seuraavaksi sarjassa',
    dayLabel: 'Valmennuspäivä',
    dateLabel: 'Ajankohta',
    structureLabel: 'Päivän rakenne',
    benefitsLabel: 'Osallistujana sinä',
    afterLabel: 'Päivän jälkeen',
    audienceLabel: 'Kenelle',
    facts: [
      ['Kesto', '1 lähipäivä'],
      ['Paikka', 'Helsinki'],
      ['Ryhmä', '10 johtajaa'],
      ['Hinta', '1 795 € / hlö', 'alv 0 %'],
    ],
    cta: 'Ilmoita kiinnostuksesi',
    concepts: [
      {
        id: '01',
        anchor: 'paine',
        tag: 'Ensimmäinen valmennuspäivä',
        guest: 'Antti Pennanen',
        guestImg: ANTTI_IMG,
        guestImgPos: '50% 25%',
        title: 'Yhteys ja johtaminen paineessa',
        weekday: 'Perjantai',
        date: '22.1.2027',
        signupValue: '01 · Leo Sjöman × Antti Pennanen · Yhteys ja johtaminen paineessa · pe 22.1.2027',
        headline: 'Millainen johtaja olet paineen alla?',
        promise: 'Kehitä kykyäsi vaikuttaa ja johtaa tietoisemmin myös silloin, kun paine kasvaa.',
        story: [
          'Johtaminen edellyttää kykyä tehdä päätöksiä, vaikuttaa ihmisiin ja rakentaa yhteistä suuntaa. Mutta mitä tapahtuu omalle ajattelulle, läsnäololle ja vuorovaikutukselle silloin, kun paine kasvaa?',
          'Paine voi kaventaa toimintavaihtoehtojamme ja ohjata meitä reagoimaan automaattisesti. Vaikuttava johtajuus edellyttää kykyä tunnistaa nämä reaktiot ja löytää uusia, tietoisempia tapoja toimia.',
          'Leo Sjöman ja Antti Pennanen yhdistävät näyttelijäntyön ja huippu-urheilun kokemuksen yhden päivän intensiivivalmennuksessa, jossa kehitetään johtajan henkilökohtaista vaikuttavuutta, vuorovaikutusta ja toimintakykyä.',
        ],
        smallGroup: 'Pieni, kymmenen johtajan ryhmä mahdollistaa henkilökohtaisen harjoittelun ja palautteen.',
        core: 'Johtaja tarvitsee paineessa kaksi yhteyttä.',
        coreSplit: ['Yhteys itseen', 'Yhteys muihin'],
        intro: '',
        parts: [
          { label: 'Osa I', who: 'Leo Sjöman', title: 'Henkilökohtainen vaikutuskyky ja läsnäolo', text: 'Läsnäolo, intentio ja keho. Johtajan puheenvuoro, jossa jokainen työskentelee vuorollaan ja Leo valmentaa tilanteessa.' },
          { label: 'Osa II', who: 'Antti Pennanen', title: 'Johtaminen paineessa', text: 'Mitä paine tekee johtajalle. Omakohtaiset kokemukset korkean paineen johtamisesta ja harjoitteet: kehon kuuntelu, vaikean tunteen kohtaaminen, läsnäolo paineen keskellä.' },
          { label: 'Osa III', who: 'Yhteinen', title: 'Toimintakyky käytännössä', text: 'Päivän havainnot yhteen: läsnäolo, ymmärrys, muutos ja sovellus omaan johtamistyöhön.' },
        ],
        outcomes: [
          'Syvennät ymmärrystä omasta johtamisviestinnästäsi ja sen vaikutuksista.',
          'Tunnistat henkilökohtaisen vuorovaikutuspotentiaalisi ja vahvuutesi.',
          'Tunnistat omia automaattisia reaktioitasi paineessa.',
          'Harjoittelet oman toimintasi ja läsnäolosi tietoista ohjaamista.',
          'Löydät uusia keinoja vaikuttaa, viestiä ja johtaa vaativissa tilanteissa.',
          'Rakennat henkilökohtaisen suunnitelman opitun soveltamiseksi arjessa.',
        ],
        audience: 'Toimitusjohtajat, liiketoimintajohtajat, markkinointijohtajat, yrittäjät ja muut johtavassa asemassa toimivat.',
      },
      {
        id: '02',
        anchor: 'uni',
        tag: 'Valmennuspäivä 02',
        guest: 'Henri Tuomilehto',
        guestImg: HENRI_IMG,
        guestImgPos: '50% 20%',
        title: 'Uni, palautuminen ja vaikuttavuus',
        weekday: 'Perjantai',
        date: '19.2.2027',
        signupValue: '02 · Leo Sjöman × Henri Tuomilehto · Uni, palautuminen ja vaikuttavuus · pe 19.2.2027',
        core: 'Johtajan toimintakyvyllä on kaksi aikajännettä.',
        coreSplit: ['Pitkä aikajänne: uni', 'Hetki: oma tila'],
        intro:
          'Väsyneitä aivoja ei kiinnosta sinun tavoitteesi. Puutteellinen uni iskee ensimmäisenä harkintaan, itsesäätelyyn ja vuorovaikutukseen. Päivä yhdistää unen ja palautumisen siihen, miten johtaja toimii ja vaikuttaa vaativassa tilanteessa.',
        parts: [
          { label: 'Osio 1', who: 'Henri Tuomilehto', title: 'Uni ja toimintakyky', text: 'Väsyneet aivot: millaisia päätöksiä sinä teet ja miten kohtaat muut niitä tehdessäsi. Nukkumisen taito ja oma uniprofiili.' },
          { label: 'Osio 2', who: 'Leo Sjöman', title: 'Vaikuttavuus ja vuorovaikutus', text: 'Mitä henkilökohtainen vaikuttavuus on ja miten se rakentuu. Kehollinen valmistautuminen ja johtajan puheenvuoro, jossa Leo valmentaa tilanteessa.' },
          { label: 'Osio 3', who: 'Yhteinen', title: 'Kaksi aikajännettä arjessa', text: 'Milloin palaudun ja miten valmistaudun tärkeisiin hetkiin. Toimintakyvyn suunnitelma omaan arkeen.' },
        ],
        outcomes: [
          'Ymmärrät oman henkilökohtaisen vuorovaikutuksesi merkityksen johtamisessa.',
          'Osaat rakentaa unesta perustan omalle ajattelulle, tunnesäätelylle ja vuorovaikutukselle.',
          'Sinulla on keinot säädellä toimintakykyäsi sekä pitkällä aikajänteellä että hetkessä.',
        ],
        audience: 'Johtajat, joiden vastuu, näkyvyys ja vaikutusalue edellyttävät uudenlaista toimintakykyä.',
      },
    ],
    coachesEyebrow: 'Valmentajat',
    coachesTitle: 'Kolme näkökulmaa johtajan toimintakykyyn.',
    coaches: [
      { name: 'Leo Sjöman', role: 'Johtamisviestinnän valmentaja · Diamon Finland', img: LEO_IMG, pos: '50% 18%', text: 'Teatteritaiteen maisteri (Taideyliopiston Teatterikorkeakoulu). Yli 20 vuoden ura ammattinäyttelijänä teatterissa, televisiossa ja elokuvissa. DIAMON ICA Framework™ -viitekehyksen kehittäjä. Valmentaa johtajia henkilökohtaisessa vaikuttavuudessa ja johtamisviestinnässä.', meta: 'Valmennustyössä muun muassa Suomen Jääkiekkoliitto ja SDM' },
      { name: 'Antti Pennanen', role: 'Jääkiekon miesten maajoukkueen päävalmentaja', img: ANTTI_IMG, pos: '50% 22%', text: 'Maailmanmestaruus ja olympiapronssi 2026 päävalmentajana. Suomen mestaruus HPK:n kanssa ja Liigan vuoden valmentaja 2019. Aiemmin päävalmentajana HPK:ssa, Ilveksessä, Jukureissa ja Nuorissa Leijonissa.', meta: 'Valmennuspäivä 01 · Yhteys ja johtaminen paineessa' },
      { name: 'Henri Tuomilehto', role: 'Unilääkäri ja dosentti', img: HENRI_IMG, pos: '50% 15%', text: 'Yli 20 vuotta unitutkimusta ja yli 15 000 hoidettua potilasta. Perusti Oivauni Uniklinikan ja on Sleep Academy® -univalmennuskeskuksen perustajia. Kirjat Nukkumalla menestykseen (2018) ja Nukkumisen taito (2024).', meta: 'Huippu-urheilussa muun muassa NHL-seurat Buffalo Sabres ja Columbus Blue Jackets' },
    ],
    processEyebrow: 'Näin päivä etenee',
    processTitle: 'Kartoituksesta arkeen.',
    process: [
      ['Ennen', 'Henkilökohtainen lähtökartoitus, kuten DIAMON ICA Framework™ -viestintäprofiili.'],
      ['Valmennuspäivä', 'Kolme osiota: asiantuntija, Leo ja yhteinen harjoittelu.'],
      ['Päivän päätteeksi', 'Oma suunnitelma ja konkreettiset toimintamallit arkeen.'],
      ['Jälkeen', 'Etäpurku 1–2 viikon sisällä: mitä arjessa tapahtui.'],
    ],
    signupAnchor: 'ilmoittaudu',
    formName: 'valmennussarja-fi',
    postPath: '/fi/valmennussarja/',
    finalEyebrow: 'Ilmoita kiinnostuksesi',
    finalTitle: 'Ryhmissä on tilaa kymmenelle johtajalle.',
    finalText: 'Valitse valmennuspäivä ja jätä yhteystietosi. Olemme sinuun yhteydessä henkilökohtaisesti ja kerromme, miten ilmoittautuminen etenee. Päivän voi toteuttaa myös oman organisaation johtoryhmälle.',
  },

  en: {
    heroEyebrow: 'Coaching series · Diamon Finland',
    heroTitle: ['Leadership Impact', ' and Performance.'],
    heroLead:
      'One-day intensive coaching days for leaders. On each day, Leo Sjöman coaches together with a leading expert from another field. We combine leadership communication, psychophysical training and the expert’s own discipline.',
    heroPills: ['01 · Leading under pressure', '02 · Sleep and recovery'],
    whyEyebrow: 'Why this series',
    whyTitle: 'As the demands of leadership grow, a leader’s personal capacity to perform has to grow with them.',
    whyText: [
      'Growing responsibility, constant change, uncertainty and pressure call for the ability to lead your own actions, people’s thinking, interaction and the atmosphere around you.',
      'Impact is not built on subject expertise alone. Increasingly, what matters is the ability to recognise and regulate your own state, to be present and to influence other people personally.',
    ],
    format: [
      ['The expert’s part', 'A guest expert brings the knowledge of their own field into the day.'],
      ['Leo’s part', 'Leadership communication and personal impact. Practice, not lectures.'],
      ['The shared part', 'We coach together. Everyone leaves with a plan of their own.'],
    ],
    conceptsEyebrow: 'Coaching days',
    conceptsTitle: 'The first two days.',
    conceptsNote: 'More coaching days will be announced later.',
    nextLabel: 'Next in the series',
    dayLabel: 'Coaching day',
    dateLabel: 'Date',
    structureLabel: 'Structure of the day',
    benefitsLabel: 'As a participant, you',
    afterLabel: 'After the day',
    audienceLabel: 'For',
    facts: [
      ['Duration', '1 day, in person'],
      ['Location', 'Helsinki'],
      ['Group', '10 leaders'],
      ['Price', '€1,795 / person', 'excl. VAT'],
    ],
    cta: 'Register your interest',
    concepts: [
      {
        id: '01',
        anchor: 'pressure',
        tag: 'First coaching day',
        guest: 'Antti Pennanen',
        guestImg: ANTTI_IMG,
        guestImgPos: '50% 25%',
        title: 'Connection and Leading Under Pressure',
        weekday: 'Friday',
        date: '22 January 2027',
        signupValue: '01 · Leo Sjöman × Antti Pennanen · Connection and Leading Under Pressure · Fri 22 Jan 2027',
        headline: 'What kind of leader are you under pressure?',
        promise: 'Develop your ability to influence and lead more consciously, even when the pressure rises.',
        story: [
          'Leadership calls for the ability to make decisions, influence people and build a shared direction. But what happens to your thinking, your presence and your interaction when the pressure rises?',
          'Pressure can narrow our options and push us into automatic reactions. Impactful leadership calls for the ability to recognise these reactions and find new, more conscious ways to act.',
          'Leo Sjöman and Antti Pennanen bring together experience from acting and elite sport in a one-day intensive that develops a leader’s personal impact, interaction and capacity to perform.',
        ],
        smallGroup: 'A small group of ten leaders makes personal practice and feedback possible.',
        core: 'Under pressure, a leader needs two connections.',
        coreSplit: ['Connection to yourself', 'Connection to others'],
        intro: '',
        parts: [
          { label: 'Part I', who: 'Leo Sjöman', title: 'Personal impact and presence', text: 'Presence, intention and the body. A leader’s address: everyone works in turn while Leo coaches in the moment.' },
          { label: 'Part II', who: 'Antti Pennanen', title: 'Leading under pressure', text: 'What pressure does to a leader. First-hand experience of leading under high pressure, and exercises: listening to the body, facing difficult emotions, staying present under pressure.' },
          { label: 'Part III', who: 'Together', title: 'Performance in practice', text: 'Bringing the day together: presence, understanding, change and applying it to your own leadership.' },
        ],
        outcomes: [
          'Deepen your understanding of your own leadership communication and its effects.',
          'Recognise your personal potential in interaction, and your strengths.',
          'Recognise your own automatic reactions under pressure.',
          'Practise consciously directing your actions and your presence.',
          'Find new ways to influence, communicate and lead in demanding situations.',
          'Build a personal plan for applying what you have learned in everyday work.',
        ],
        audience: 'CEOs, business directors, marketing directors, entrepreneurs and others in leadership positions.',
      },
      {
        id: '02',
        anchor: 'sleep',
        tag: 'Coaching day 02',
        guest: 'Henri Tuomilehto',
        guestImg: HENRI_IMG,
        guestImgPos: '50% 20%',
        title: 'Sleep, Recovery and Impact',
        weekday: 'Friday',
        date: '19 February 2027',
        signupValue: '02 · Leo Sjöman × Henri Tuomilehto · Sleep, Recovery and Impact · Fri 19 Feb 2027',
        core: 'A leader’s capacity to perform runs on two timescales.',
        coreSplit: ['The long term: sleep', 'The moment: your state'],
        intro:
          'A tired brain doesn’t care about your goals. Poor sleep hits judgement, self-regulation and interaction first. The day connects sleep and recovery to how a leader acts and makes an impact in demanding situations.',
        parts: [
          { label: 'Part 1', who: 'Henri Tuomilehto', title: 'Sleep and performance', text: 'The tired brain: what kind of decisions do you make, and how do you meet others while making them. Sleep as a skill, and your own sleep profile.' },
          { label: 'Part 2', who: 'Leo Sjöman', title: 'Impact and interaction', text: 'What personal impact is and how it is built. Physical preparation and a leader’s address, with Leo coaching in the moment.' },
          { label: 'Part 3', who: 'Together', title: 'Two timescales in everyday life', text: 'When do I recover, and how do I prepare for the moments that matter. A performance plan for your own week.' },
        ],
        outcomes: [
          'You understand what your own personal way of interacting means for your leadership.',
          'You know how to make sleep the foundation for your thinking, emotional regulation and interaction.',
          'You have ways to regulate your capacity to perform, both over the long term and in the moment.',
        ],
        audience: 'Leaders whose responsibility, visibility and reach call for a new kind of capacity to perform.',
      },
    ],
    coachesEyebrow: 'Coaches',
    coachesTitle: 'Three perspectives on a leader’s capacity to perform.',
    coaches: [
      { name: 'Leo Sjöman', role: 'Leadership communication coach · Diamon Finland', img: LEO_IMG, pos: '50% 18%', text: 'Master of Arts in Theatre (Theatre Academy, Uniarts Helsinki). Over 20 years as a professional actor in theatre, television and film. Creator of the DIAMON ICA Framework™. Coaches leaders in personal impact and leadership communication.', meta: 'Clients include the Finnish Ice Hockey Association and SDM' },
      { name: 'Antti Pennanen', role: 'Head coach, Finland men’s national ice hockey team', img: ANTTI_IMG, pos: '50% 22%', text: 'World Championship gold and Olympic bronze in 2026 as head coach. Finnish championship with HPK and Liiga Coach of the Year 2019. Previously head coach at HPK, Ilves, Jukurit and the Finnish U20 national team.', meta: 'Coaching day 01 · Connection and Leading Under Pressure' },
      { name: 'Henri Tuomilehto', role: 'Sleep physician and adjunct professor', img: HENRI_IMG, pos: '50% 15%', text: 'Over 20 years of sleep research and more than 15,000 patients treated. Founded the Oivauni sleep clinic and co-founded the Sleep Academy® sleep coaching centre. Author of two books on sleep (2018, 2024).', meta: 'Work in elite sport includes the NHL’s Buffalo Sabres and Columbus Blue Jackets' },
    ],
    processEyebrow: 'How it works',
    processTitle: 'From assessment to everyday life.',
    process: [
      ['Before', 'A personal baseline assessment, such as the DIAMON ICA Framework™ communication profile.'],
      ['Coaching day', 'Three parts: the expert, Leo and shared practice.'],
      ['End of the day', 'Your own plan and concrete practices for everyday work.'],
      ['After', 'A remote debrief within 1–2 weeks: what happened in practice.'],
    ],
    signupAnchor: 'register',
    formName: 'coaching-series-en',
    postPath: '/coaching-series/',
    finalEyebrow: 'Register your interest',
    finalTitle: 'Each group has room for ten leaders.',
    finalText: 'Choose a coaching day and leave your details. We will contact you personally and explain how registration works. Either day can also be run for your own leadership team.',
  },
}

function Portrait({ src, pos, alt, size = 56 }: { src: string; pos: string; alt: string; size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      style={{ width: size, height: size, objectFit: 'cover', objectPosition: pos, borderRadius: '999px', display: 'block', border: '2px solid var(--color-white)' }}
    />
  )
}

function Pair({ c, size = 56 }: { c: Concept; size?: number }) {
  return (
    <div className="flex items-center shrink-0">
      <Portrait src={LEO_IMG} pos="50% 18%" alt="Leo Sjöman" size={size} />
      <div style={{ marginLeft: -Math.round(size / 4) }}>
        <Portrait src={c.guestImg} pos={c.guestImgPos} alt={c.guest} size={size} />
      </div>
    </div>
  )
}

function DateBlock({ c, t, large = false }: { c: Concept; t: Content; large?: boolean }) {
  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-muted)', ...body }}>
        {t.dateLabel} · {c.weekday}
      </p>
      <p className={large ? 'text-4xl md:text-5xl font-light' : 'text-3xl font-light'} style={{ ...serif, color: 'var(--color-text)', lineHeight: 1 }}>
        <time>{c.date}</time>
      </p>
    </div>
  )
}

function Facts({ t, cols = 'grid-cols-3' }: { t: Content; cols?: string }) {
  return (
    <dl className={`grid ${cols} gap-4`}>
      {t.facts.map(([k, v, note]) => (
        <div key={k}>
          <dt className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--color-muted)', ...body }}>{k}</dt>
          <dd className="text-sm" style={{ color: 'var(--color-text)', ...body }}>
            {v}
            {note && <span className="block text-xs" style={{ color: 'var(--color-muted)' }}>{note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function Parts({ c }: { c: Concept }) {
  return (
    <ol className="flex flex-col gap-5">
      {c.parts.map((p) => (
        <li key={p.label} className="grid gap-1" style={{ gridTemplateColumns: '64px 1fr' }}>
          <span className="text-xs pt-1" style={{ color: 'var(--color-blue)', ...body }}>{p.label}</span>
          <div>
            <p className="text-base mb-1" style={{ color: 'var(--color-text)', ...body, fontWeight: 500 }}>
              {p.title}
              <span className="text-xs ml-2" style={{ color: 'var(--color-muted)', fontWeight: 400 }}>· {p.who}</span>
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{p.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function CoreSplit({ c }: { c: Concept }) {
  return (
    <>
      <p className="text-xl md:text-2xl italic font-light mb-5" style={{ ...serif, color: 'var(--color-blue)', lineHeight: 1.3 }}>{c.core}</p>
      <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
        {c.coreSplit.map((s) => (
          <div key={s} className="px-4 py-3" style={{ backgroundColor: 'var(--color-background)' }}>
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-muted)', ...body }}>{s}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function Outcomes({ items, cols = '' }: { items: string[]; cols?: string }) {
  return (
    <ul className={`grid ${cols} gap-x-8 gap-y-4`}>
      {items.map((o, i) => (
        <li key={o} className="flex gap-4">
          <span className="text-xs shrink-0 pt-1" style={{ color: 'var(--color-blue)', ...body }}>{String(i + 1).padStart(2, '0')}</span>
          <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text)', ...body }}>{o}</span>
        </li>
      ))}
    </ul>
  )
}

const pad = 'p-6 sm:p-8 md:p-10'
const line = { borderBottom: '1px solid var(--color-border)' } as const

// Ensisijainen, aktiivisesti markkinoitava valmennuspäivä.
function FeaturedDay({ c, t }: { c: Concept; t: Content }) {
  return (
    <article
      id={c.anchor}
      aria-labelledby={`${c.anchor}-title`}
      className="scroll-mt-28"
      style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-blue)' }}
    >
      <div className="grid lg:grid-cols-[1.35fr_1fr]" style={line}>
        <div className={pad}>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.2em] uppercase px-3 py-1.5" style={{ color: 'var(--color-blue)', backgroundColor: 'rgba(86,86,214,0.08)', ...body }}>{c.tag}</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-muted)', ...body }}>{t.dayLabel} {c.id}</span>
          </div>
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-muted)', ...body }}>Leo Sjöman × {c.guest}</p>
          <h3 id={`${c.anchor}-title`} className="text-[2.1rem] sm:text-4xl md:text-5xl font-light mb-6" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.08 }}>{c.headline}</h3>
          <p className="text-xl md:text-2xl italic font-light mb-8" style={{ ...serif, color: 'var(--color-blue)', lineHeight: 1.35, maxWidth: '40ch' }}>{c.promise}</p>
          <div className="flex flex-col gap-4" style={{ maxWidth: '62ch' }}>
            {c.story?.map((p) => (
              <p key={p} className="text-base leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{p}</p>
            ))}
          </div>
        </div>

        <aside className={`${pad} flex flex-col gap-8`} style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="flex items-start justify-between gap-4">
            <DateBlock c={c} t={t} large />
            <Pair c={c} size={60} />
          </div>
          <p className="text-lg" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.3, fontSize: '1.35rem' }}>{c.title}</p>
          <Facts t={t} />
          {c.smallGroup && <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{c.smallGroup}</p>}
          <a href={`#${t.signupAnchor}-${c.id}`} className="btn-primary w-full sm:w-auto sm:self-start" style={{ textDecoration: 'none' }}>{t.cta}</a>
        </aside>
      </div>

      <div className="grid lg:grid-cols-[1.35fr_1fr]">
        <div className={pad} style={{ borderRight: '1px solid var(--color-border)' }}>
          <p className="text-xs tracking-[0.2em] uppercase mb-6" style={eyebrow2}>{t.benefitsLabel}</p>
          <Outcomes items={c.outcomes} cols="sm:grid-cols-2" />
          <p className="text-sm leading-relaxed mt-8" style={{ color: 'var(--color-muted)', ...body }}>
            <span className="text-xs tracking-widest uppercase">{t.audienceLabel} · </span>{c.audience}
          </p>
        </div>
        <div className={pad}>
          <p className="text-xs tracking-[0.2em] uppercase mb-6" style={eyebrow2}>{t.structureLabel}</p>
          <div className="mb-8"><CoreSplit c={c} /></div>
          <Parts c={c} />
        </div>
      </div>
    </article>
  )
}

// Tuleva valmennuspäivä: sisältö säilyy, visuaalisesti kevyempi.
function UpcomingDay({ c, t }: { c: Concept; t: Content }) {
  return (
    <article
      id={c.anchor}
      aria-labelledby={`${c.anchor}-title`}
      className="scroll-mt-28 grid lg:grid-cols-2"
      style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)' }}
    >
      <div className={pad} style={{ borderRight: '1px solid var(--color-border)' }}>
        <div className="flex items-center justify-between gap-6 mb-8">
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--color-blue)', ...body }}>{c.tag}</span>
          <Pair c={c} size={48} />
        </div>
        <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--color-muted)', ...body }}>Leo Sjöman × {c.guest}</p>
        <h3 id={`${c.anchor}-title`} className="text-3xl md:text-4xl font-light mb-6" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.1 }}>{c.title}</h3>
        <div className="mb-6"><CoreSplit c={c} /></div>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-muted)', ...body }}>{c.intro}</p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>
          <span className="text-xs tracking-widest uppercase">{t.audienceLabel} · </span>{c.audience}
        </p>
      </div>
      <div className="flex flex-col">
        <div className={pad} style={line}>
          <p className="text-xs tracking-[0.2em] uppercase mb-5" style={eyebrow2}>{t.structureLabel}</p>
          <Parts c={c} />
        </div>
        <div className={`${pad} flex-1`} style={line}>
          <p className="text-xs tracking-[0.2em] uppercase mb-5" style={eyebrow2}>{t.afterLabel}</p>
          <Outcomes items={c.outcomes} />
        </div>
        <div className={`${pad} flex flex-col gap-6`} style={{ backgroundColor: 'var(--color-background)' }}>
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10">
            <DateBlock c={c} t={t} />
            <div className="flex-1"><Facts t={t} /></div>
          </div>
          <a href={`#${t.signupAnchor}-${c.id}`} className="btn-outline w-full sm:w-auto sm:self-start" style={{ textDecoration: 'none', color: 'var(--color-text)', borderColor: 'var(--color-text)' }}>{t.cta}</a>
        </div>
      </div>
    </article>
  )
}

const eyebrow2 = { color: 'var(--color-muted)', fontFamily: 'var(--font-body)' } as const

function NumberedCells({ items, cols }: { items: [string, string][]; cols: string }) {
  return (
    <div className={`grid ${cols} gap-px`} style={{ backgroundColor: 'var(--color-border)' }}>
      {items.map(([title, text], i) => (
        <div key={title} className="p-8" style={{ backgroundColor: 'var(--color-background)' }}>
          <span className="text-xs block mb-3" style={{ color: 'var(--color-blue)', ...body }}>{String(i + 1).padStart(2, '0')}</span>
          <p className="text-lg mb-2" style={{ ...serif, color: 'var(--color-text)' }}>{title}</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default function CoachingSeries({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [first, ...rest] = t.concepts
  const days: SignupDay[] = t.concepts.map((c) => ({
    id: c.id,
    value: c.signupValue,
    title: `${c.title} · Leo Sjöman × ${c.guest}`,
    date: `${c.weekday} ${c.date}`,
    tag: c.id === first.id ? c.tag : `${t.dayLabel} ${c.id}`,
  }))
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', ...body }}>{t.heroEyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8" style={{ ...serif, color: '#fff', lineHeight: 1.05, maxWidth: '900px' }}>
            {t.heroTitle[0]}
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}>{t.heroTitle[1]}</span>
          </h1>
          <p className="text-lg font-light mb-12" style={{ color: 'rgba(255,255,255,0.78)', ...body, lineHeight: 1.8, maxWidth: '620px' }}>{t.heroLead}</p>
          <div className="flex flex-wrap gap-4">
            {t.concepts.map((c, i) => (
              <a key={c.anchor} href={`#${c.anchor}`} className="btn-outline-white" style={{ textDecoration: 'none' }}>{t.heroPills[i]}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={eyebrow}>{t.whyEyebrow}</p>
            <h2 className="text-2xl md:text-4xl font-light" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.2 }}>{t.whyTitle}</h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            {t.whyText.map((p) => (
              <p key={p} className="text-base leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{p}</p>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <NumberedCells items={t.format} cols="md:grid-cols-3" />
        </div>
      </section>

      {/* Coaching days */}
      <section className="px-6 pb-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={eyebrow}>{t.conceptsEyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-light" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.2 }}>{t.conceptsTitle}</h2>
        </div>

        <FeaturedDay c={first} t={t} />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-16 mb-6">
          <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-muted)', ...body }}>{t.nextLabel}</p>
          <p className="text-sm" style={{ color: 'var(--color-muted)', ...body }}>{t.conceptsNote}</p>
        </div>
        <div className="flex flex-col gap-8">
          {rest.map((c) => (
            <UpcomingDay key={c.id} c={c} t={t} />
          ))}
        </div>
      </section>

      {/* Coaches */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={eyebrow}>{t.coachesEyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-light mb-12" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.2 }}>{t.coachesTitle}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {t.coaches.map((p) => (
              <div key={p.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.name} loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', objectPosition: p.pos, display: 'block', marginBottom: '1.5rem' }} />
                <p className="text-2xl mb-1" style={{ ...serif, color: 'var(--color-text)' }}>{p.name}</p>
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-blue)', ...body }}>{p.role}</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-muted)', ...body }}>{p.text}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{p.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={eyebrow}>{t.processEyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-light mb-12" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.2 }}>{t.processTitle}</h2>
        <NumberedCells items={t.process} cols="sm:grid-cols-2 md:grid-cols-4" />
      </section>

      {/* Signup */}
      <section id={t.signupAnchor} className="px-6 py-20 scroll-mt-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="lg:pt-6">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.7)', ...body }}>{t.finalEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-light mb-5" style={{ ...serif, color: '#fff', lineHeight: 1.15, maxWidth: '520px' }}>{t.finalTitle}</h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)', ...body, maxWidth: '460px' }}>{t.finalText}</p>
          </div>
          <div className="p-6 sm:p-8 md:p-10" style={{ backgroundColor: 'var(--color-white)' }}>
            {t.concepts.map((c) => (
              <span key={c.id} id={`${t.signupAnchor}-${c.id}`} className="block scroll-mt-24" aria-hidden="true" />
            ))}
            <SeriesSignupForm lang={lang} formName={t.formName} postPath={t.postPath} days={days} />
          </div>
        </div>
      </section>
    </>
  )
}
