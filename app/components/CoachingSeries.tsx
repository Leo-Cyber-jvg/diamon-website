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
  heroSubtitle: string
  heroLead: string
  heroPills: [string, string]
  whyEyebrow: string
  whyTitle: string
  whyText: string[]
  format: [string, string][]
  forEyebrow: string
  forTitle: string
  forItems: [string, string][]
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
    heroSubtitle: 'Kun johtamisen vaatimukset kasvavat, myös johtajan henkilökohtaisen toimintakyvyn on kehityttävä.',
    heroLead:
      'Yhden päivän intensiivivalmennuksia johtajille. Jokaisessa päivässä Leo Sjöman valmentaa yhdessä eri alan huippuasiantuntijan kanssa. Päivä yhdistää johtamisviestinnän, psykofyysisen harjoittamisen ja asiantuntijan teeman yhdeksi kokonaisuudeksi.',
    heroPills: ['01 · Johtaminen paineessa', '02 · Uni ja palautuminen'],
    whyEyebrow: 'Mihin sarja vastaa',
    whyTitle: 'Kun johtamisen vaatimukset kasvavat, myös johtajan henkilökohtaisen toimintakyvyn on kehityttävä.',
    whyText: [
      'Muuttuva työelämä asettaa johtajille yhä moninaisempia vaatimuksia. Kyky johtaa omaa toimintaa, ajatella selkeästi, viestiä vaikuttavasti ja rakentaa yhteyttä toisiin ihmisiin korostuu erityisesti epävarmuuden ja paineen keskellä.',
      'Johtajan vaikuttavuus rakentuu useiden inhimillisten kyvykkyyksien yhteisvaikutuksesta. Oma vireystila, itsetuntemus, läsnäolo ja kyky toimia paineen alla vaikuttavat siihen, miten johtaja kohtaa ihmisiä, johtaa vuorovaikutusta ja ohjaa yhteistä toimintaa.',
      'DIAMONin valmennussarja tuo yhteen eri alojen asiantuntijoita kehittämään johtajan vaikuttavuutta, johtamisviestintää ja henkilökohtaista toimintakykyä kokonaisvaltaisesti.',
      'Tavoitteena on syventää johtajan ymmärrystä omasta toiminnastaan ja kehittää käytännön valmiuksia vastata tämän päivän työelämän vaatimuksiin sekä johtaa itseään ja muita tietoisemmin ja tuloksellisemmin myös silloin, kun paine kasvaa.',
    ],
    format: [
      ['Asiantuntijuusvierailu', 'Vieraileva huippuasiantuntija tuo päivään oman alansa osaamisen.'],
      ['Leo · Diamon Finland', 'Johtamisviestintä ja henkilökohtainen vaikuttavuus.'],
      ['Yhteinen osuus', 'Valmennetaan yhdessä. Jokainen lähtee päivästä oman suunnitelman kanssa.'],
    ],
    forEyebrow: 'Kenelle',
    forTitle: 'Johtajille ja yrittäjille, jotka haluavat kehittää henkilökohtaista vaikuttavuuttaan, johtamisviestintäänsä ja toimintakykyään työelämän vaativissa tilanteissa.',
    forItems: [
      ['10 osallistujaa', 'Rajattu pienryhmä'],
      ['Korkeatasoinen asiantuntijuus', 'Eri osaamisalueiden yhdistäminen'],
      ['Henkilökohtainen työskentely', 'Oman johtajuuden kehittäminen'],
      ['Tavoitteellinen harjoittelu', 'Sovellettavuus omaan työhön'],
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
      ['Aika', '8:30–16:30'],
      ['Paikka', 'VALO Hotel & Work, Helsinki'],
      ['Ryhmä', '10 johtajaa'],
      ['Hinta', '1 795 € / hlö', 'alv 0 %'],
    ],
    cta: 'Varaa paikkasi',
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
        audience: 'Johtajille ja yrittäjille, jotka haluavat kehittää henkilökohtaista vaikuttavuuttaan, johtamisviestintäänsä ja toimintakykyään työelämän vaativissa tilanteissa.',
      },
      {
        id: '02',
        anchor: 'uni',
        tag: 'Toinen valmennuspäivä',
        guest: 'Henri Tuomilehto',
        guestImg: HENRI_IMG,
        guestImgPos: '50% 20%',
        title: 'Uni, palautuminen ja vaikuttavuus',
        weekday: 'Perjantai',
        date: '19.2.2027',
        signupValue: '02 · Leo Sjöman × Henri Tuomilehto · Uni, palautuminen ja vaikuttavuus · pe 19.2.2027',
        headline: 'Millaisia päätöksiä sinä teet, kun olet väsynyt?',
        promise: 'Rakenna unesta perusta omalle ajattelullesi, tunnesäätelyllesi ja vuorovaikutuksellesi, ja kehitä kykyäsi vaikuttaa myös silloin, kun paine on kova.',
        story: [
          'Väsyneitä aivoja ei kiinnosta sinun tavoitteesi. Puutteellinen uni iskee ensimmäisenä harkintaan, itsesäätelyyn ja vuorovaikutukseen, juuri niihin kykyihin, joita johtaminen eniten vaatii.',
          'Johtajan toimintakyky rakentuu kahdella aikajänteellä: pitkällä aikajänteellä unesta ja palautumisesta, hetkessä omasta tilasta ja läsnäolosta. Molempia voidaan harjoittaa.',
          'Leo Sjöman ja unilääkäri Henri Tuomilehto yhdistävät kaksi alaa, johtamisviestintä ja unilääketiede, yhden päivän intensiivivalmennuksessa, jossa rakennetaan johtajan henkilökohtainen toimintakyvyn suunnitelma.',
        ],
        smallGroup: 'Pieni, kymmenen johtajan ryhmä mahdollistaa henkilökohtaisen harjoittelun ja oman uniprofiilityöskentelyn.',
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
          'Ymmärrät, mikä vaikutus unella on omalle ajattelulle, tunnesäätelylle ja vuorovaikutukselle.',
          'Saat lisää keinoja säädellä toimintakykyäsi sekä pitkällä aikajänteellä että hetkessä.',
          'Tunnistat, miten väsymys vaikuttaa omaan päätöksentekosi, läsnäoloosi ja johtamisvuorovaikutukseesi.',
          'Löydät uusia keinoja vaikuttaa, viestiä ja johtaa myös silloin, kun energia on matalalla.',
          'Rakennat henkilökohtaisen suunnitelman opitun soveltamiseksi arjessa.',
        ],
        audience: 'Johtajille, yrittäjille ja muissa vastuullisissa asiantuntijatehtävissä toimiville, jotka haluavat kehittää ymmärrystään unen, palautumisen ja vireystilan merkityksestä henkilökohtaiselle toimintakyvylle ja vaikuttavuudelle.',
      },
    ],
    coachesEyebrow: 'Valmentajat',
    coachesTitle: 'Kolme näkökulmaa johtajan toimintakykyyn.',
    coaches: [
      { name: 'Leo Sjöman', role: 'Johtamisviestinnän valmentaja · Diamon Finland', img: LEO_IMG, pos: '50% 18%', text: 'Teatteritaiteen maisteri (Taideyliopiston Teatterikorkeakoulu). Yli 20 vuoden ura ammattinäyttelijänä teatterissa, televisiossa ja elokuvissa. DIAMON ICA Framework™ -viitekehyksen kehittäjä. Valmentaa johtajia henkilökohtaisessa vaikuttavuudessa ja johtamisviestinnässä.', meta: '' },
      { name: 'Antti Pennanen', role: 'Jääkiekon miesten maajoukkueen päävalmentaja', img: ANTTI_IMG, pos: '50% 22%', text: 'Maailmanmestaruus ja olympiapronssi 2026 päävalmentajana. Suomen mestaruus HPK:n kanssa ja Liigan vuoden valmentaja 2019. Aiemmin päävalmentajana HPK:ssa, Ilveksessä, Jukureissa ja Nuorissa Leijonissa. Myös koulutettu terapeutti.', meta: 'Valmennuspäivä 01 · Yhteys ja johtaminen paineessa' },
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
    finalEyebrow: 'Seuraava askel',
    finalTitle: 'Keskustellaan lisää.',
    finalText: 'Kerro tavoitteistasi tai haasteistasi. Kartoitetaan yhdessä, miten Diamon voisi vahvistaa teidän johtamisviestinnän ja vuorovaikutuksen vaikuttavuutta.',
  },

  en: {
    heroEyebrow: 'Coaching series · Diamon Finland',
    heroTitle: ['Leadership Impact', ' and Performance.'],
    heroSubtitle: "As the demands of leadership grow, a leader's personal capacity to perform has to grow with them.",
    heroLead:
      "One-day intensive coaching days for leaders. On each day, Leo Sjöman coaches together with a leading expert from another field. Each day brings together leadership communication, psychophysical training and the expert's theme into one integrated whole.",
    heroPills: ['01 · Leading under pressure', '02 · Sleep and recovery'],
    whyEyebrow: 'Why this series',
    whyTitle: "As the demands of leadership grow, a leader's personal capacity to perform has to grow with them.",
    whyText: [
      'The changing world of work places ever more varied demands on leaders. The ability to lead your own actions, think clearly, communicate with impact and build connection with others becomes especially important in the middle of uncertainty and pressure.',
      "A leader's effectiveness is built from the combined force of several human capacities. Your own energy level, self-knowledge, presence and the ability to perform under pressure all affect how you meet people, lead interaction and guide collective action.",
      "DIAMON's coaching series brings together experts from different fields to develop a leader's impact, leadership communication and personal capacity to perform in a holistic way.",
      'The aim is to deepen a leader\'s understanding of their own actions and develop the practical readiness to meet the demands of today\'s working life — and to lead themselves and others more consciously and effectively, even when the pressure rises.',
    ],
    format: [
      ["Expert visit", 'A guest expert brings the knowledge of their field into the day.'],
      ["Leo · Diamon Finland", 'Leadership communication and personal impact.'],
      ['The shared part', 'We coach together. Everyone leaves with a plan of their own.'],
    ],
    forEyebrow: 'Who it is for',
    forTitle: 'For leaders and entrepreneurs who want to develop their personal impact, leadership communication and capacity to perform in demanding professional situations.',
    forItems: [
      ['10 participants', 'A limited small group'],
      ['High-level expertise', 'Combining expertise from different fields'],
      ['Personal work', 'Developing your own leadership'],
      ['Goal-oriented practice', 'Applicable to your own work'],
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
      ['Time', '8:30–16:30'],
      ['Location', 'VALO Hotel & Work, Helsinki'],
      ['Group', '10 leaders'],
      ['Price', '€1,795 / person', 'excl. VAT'],
    ],
    cta: 'Reserve your place',
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
          "Leo Sjöman and Antti Pennanen bring together experience from acting and elite sport in a one-day intensive that develops a leader's personal impact, interaction and capacity to perform.",
        ],
        smallGroup: 'A small group of ten leaders makes personal practice and feedback possible.',
        core: 'Under pressure, a leader needs two connections.',
        coreSplit: ['Connection to yourself', 'Connection to others'],
        intro: '',
        parts: [
          { label: 'Part I', who: 'Leo Sjöman', title: 'Personal impact and presence', text: "Presence, intention and the body. A leader's address: everyone works in turn while Leo coaches in the moment." },
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
        audience: 'For leaders and entrepreneurs who want to develop their personal impact, leadership communication and capacity to perform in demanding professional situations.',
      },
      {
        id: '02',
        anchor: 'sleep',
        tag: 'Second coaching day',
        guest: 'Henri Tuomilehto',
        guestImg: HENRI_IMG,
        guestImgPos: '50% 20%',
        title: 'Sleep, Recovery and Impact',
        weekday: 'Friday',
        date: '19 February 2027',
        signupValue: '02 · Leo Sjöman × Henri Tuomilehto · Sleep, Recovery and Impact · Fri 19 Feb 2027',
        headline: "What kind of decisions do you make when you are tired?",
        promise: "Build sleep as the foundation for your thinking, emotional regulation and interaction, and develop your ability to make an impact even under pressure.",
        story: [
          "A tired brain doesn't care about your goals. Poor sleep hits judgement, self-regulation and interaction first, precisely the capacities that leadership demands most.",
          "A leader's capacity to perform runs on two timescales: over the long term through sleep and recovery, and in the moment through your own state and presence. Both can be trained.",
          "Leo Sjöman and sleep physician Henri Tuomilehto bring together two fields, leadership communication and sleep medicine, in a one-day intensive where each participant builds a personal performance plan.",
        ],
        smallGroup: "A small group of ten leaders makes personal practice and individual sleep-profile work possible.",
        core: "A leader's capacity to perform runs on two timescales.",
        coreSplit: ['The long term: sleep', 'The moment: your state'],
        intro:
          "A tired brain doesn't care about your goals. Poor sleep hits judgement, self-regulation and interaction first. The day connects sleep and recovery to how a leader acts and makes an impact in demanding situations.",
        parts: [
          { label: 'Part 1', who: 'Henri Tuomilehto', title: 'Sleep and performance', text: 'The tired brain: what kind of decisions do you make, and how do you meet others while making them. Sleep as a skill, and your own sleep profile.' },
          { label: 'Part 2', who: 'Leo Sjöman', title: 'Impact and interaction', text: "What personal impact is and how it is built. Physical preparation and a leader's address, with Leo coaching in the moment." },
          { label: 'Part 3', who: 'Together', title: 'Two timescales in everyday life', text: 'When do I recover, and how do I prepare for the moments that matter. A performance plan for your own week.' },
        ],
        outcomes: [
          'You understand what your own personal way of interacting means for your leadership.',
          'You understand what impact sleep has on your thinking, emotional regulation and interaction.',
          'You gain more ways to regulate your capacity to perform, both over the long term and in the moment.',
          'You recognise how tiredness affects your decision-making, presence and leadership interaction.',
          'You find new ways to influence, communicate and lead even when your energy is low.',
          'You build a personal plan for applying what you have learned in everyday work.',
        ],
        audience: 'For leaders, entrepreneurs and senior experts who want to deepen their understanding of how sleep, recovery and energy levels shape personal capacity to perform and to make an impact.',
      },
    ],
    coachesEyebrow: 'Coaches',
    coachesTitle: "Three perspectives on a leader's capacity to perform.",
    coaches: [
      { name: 'Leo Sjöman', role: 'Leadership communication coach · Diamon Finland', img: LEO_IMG, pos: '50% 18%', text: 'Master of Arts in Theatre (Theatre Academy, Uniarts Helsinki). Over 20 years as a professional actor in theatre, television and film. Creator of the DIAMON ICA Framework™. Coaches leaders in personal impact and leadership communication.', meta: '' },
      { name: 'Antti Pennanen', role: "Head coach, Finland men's national ice hockey team", img: ANTTI_IMG, pos: '50% 22%', text: 'World Championship gold and Olympic bronze in 2026 as head coach. Finnish championship with HPK and Liiga Coach of the Year 2019. Previously head coach at HPK, Ilves, Jukurit and the Finnish U20 national team. Also a qualified therapist.', meta: 'Coaching day 01 · Connection and Leading Under Pressure' },
      { name: 'Henri Tuomilehto', role: 'Sleep physician and adjunct professor', img: HENRI_IMG, pos: '50% 15%', text: 'Over 20 years of sleep research and more than 15,000 patients treated. Founded the Oivauni sleep clinic and co-founded the Sleep Academy® sleep coaching centre. Author of two books on sleep (2018, 2024).', meta: "Work in elite sport includes the NHL's Buffalo Sabres and Columbus Blue Jackets" },
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
    finalEyebrow: 'Next step',
    finalTitle: "Let's talk.",
    finalText: 'Tell us about your goals or challenges. We will explore together how Diamon could strengthen the impact of leadership communication and interaction.',
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

function Facts({ t, cols = 'grid-cols-2 sm:grid-cols-3' }: { t: Content; cols?: string }) {
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
      <section className="px-6 pt-40 pb-20" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#111010' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cta-individuals.jpg"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', filter: 'brightness(0.4) saturate(0.5)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(86,86,214,0.5) 0%, rgba(17,16,16,0.35) 100%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
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
            <h2 className="text-2xl md:text-4xl font-light" style={{ ...serif, color: '#5656D6', lineHeight: 1.2 }}>{t.whyTitle}</h2>
          </div>
          <div className="flex flex-col gap-5 md:pt-10">
            {t.whyText.map((p) => (
              <p key={p} className="text-base leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Kenelle */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={eyebrow}>{t.forEyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-light mb-12" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.25, maxWidth: '820px' }}>{t.forTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {([
              <svg key="1" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="3.5"/><path d="M3 24c0-3.866 3.134-7 7-7s7 3.134 7 7"/><circle cx="21" cy="10" r="3.5"/><path d="M17 24c0-3.866 2.686-7 6-7"/></svg>,
              <svg key="2" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="10" r="5"/><path d="M9 14.5l-4 9 4.5-1.5L11 25l3-5.5 3 5.5 1.5-2.5L23 23.5l-4-9"/></svg>,
              <svg key="3" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4c0 0-8 3-8 10 0 4.418 3.582 8 8 8s8-3.582 8-8c0-7-8-10-8-10z"/><path d="M14 10c0 0-3 1.5-3 4 0 1.657 1.343 3 3 3s3-1.343 3-3c0-2.5-3-4-3-4z"/></svg>,
              <svg key="4" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="11"/><circle cx="14" cy="14" r="7"/><circle cx="14" cy="14" r="3"/></svg>,
            ].map((icon, i) => (
              <div key={i} className="flex gap-5 p-6" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
                <div className="shrink-0 pt-0.5" style={{ color: 'var(--color-blue)' }}>{icon}</div>
                <div>
                  <p className="text-lg font-light mb-1" style={{ ...serif, color: 'var(--color-text)', lineHeight: 1.25 }}>{t.forItems[i][0]}</p>
                  <p className="text-sm" style={{ color: 'var(--color-muted)', ...body }}>{t.forItems[i][1]}</p>
                </div>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* Coaching days */}
      <section className="px-6 pt-24 pb-24" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={eyebrow}>{t.conceptsEyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-light" style={{ ...serif, color: 'var(--color-blue)', lineHeight: 1.2 }}>{t.conceptsTitle}</h2>
        </div>

        <FeaturedDay c={first} t={t} />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mt-16 mb-6">
          <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-muted)', ...body }}>{t.nextLabel}</p>
          <p className="text-sm" style={{ color: 'var(--color-muted)', ...body }}>{t.conceptsNote}</p>
        </div>
        <div className="flex flex-col gap-8">
          {rest.map((c) => (
            <FeaturedDay key={c.id} c={c} t={t} />
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
