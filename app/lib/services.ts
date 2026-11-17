export type Service = {
  id: string
  name: string
  nameFi: string
  tagline: string
  duration: string
  durationFi: string
  valueOrg: string
  valueInd: string
  valueOrgFi: string
  valueIndFi: string
  forOrg: string
  forInd: string
  forOrgFi: string
  forIndFi: string
  structure: string[]
  structureFi: string[]
  href: string
  hrefFi: string
}

export const services: Service[] = [
  {
    id: 'annual',
    name: 'Annual Leadership Program',
    nameFi: 'Vuosittainen johtajuusohjelma',
    tagline: 'Leadership communication development program',
    duration: '12 months · 6 sessions',
    durationFi: '12 kuukautta · 6 sessiota',
    valueOrg: 'Systematic, long-term development of leadership communication capability across your executive team.',
    valueInd: 'A structured 12-month engagement that builds a consistent, measurable and strategically aligned communication profile.',
    valueOrgFi: 'Järjestelmällinen, pitkäjänteinen johtamisviestinnän kehittäminen koko johtoryhmässä.',
    valueIndFi: 'Rakenteinen 12 kuukauden prosessi, joka rakentaa selkeän, mitattavan ja strategisesti johdonmukaisen viestintäprofiilin.',
    forOrg: 'Executive teams, senior leaders and key organisational communicators.',
    forInd: 'C-suite executives, senior leaders and experts stepping into broader leadership roles.',
    forOrgFi: 'Johtoryhmät, ylimmän johdon edustajat ja organisaation avainviestijät.',
    forIndFi: 'Toimitusjohtajat, johtoryhmän jäsenet ja asiantuntijat, jotka ottavat laajempaa johtajuutta.',
    structure: [
      '6 tailored coaching sessions per year',
      '3 hours per session',
      'Personal coach throughout the full year',
      'Continuous support between sessions',
      'Leadership communication profile and practical operating model',
    ],
    structureFi: [
      '6 räätälöityä coachingtapaamista vuodessa',
      '3 tuntia per tapaaminen',
      'Oma coach koko vuoden ajan',
      'Jatkuva tuki sessioiden välillä',
      'Johtamisviestinnän profiili ja käytännön toimintamalli',
    ],
    href: '/annual-leadership-program',
    hrefFi: '/fi/vuosittainen-johtajuusohjelma',
  },
  {
    id: 'studio',
    name: 'Thought Leader Studio',
    nameFi: 'Thought Leader Studio',
    tagline: 'Making thought leadership visible',
    duration: 'Ongoing · Monthly sessions',
    durationFi: 'Jatkuva · Kuukausittaiset sessiot',
    valueOrg: 'Turn your organisation\'s expertise into strategic visibility — through coaching, content and professional production.',
    valueInd: 'Build a distinctive and credible thought leadership presence that reflects your expertise and leadership voice.',
    valueOrgFi: 'Muunna organisaationne asiantuntijuus strategiseksi näkyvyydeksi — coachingin, sisällön ja ammattimaisen tuotannon kautta.',
    valueIndFi: 'Rakenna tunnistettava ja uskottava thought leadership -profiili, joka heijastaa asiantuntijuuttasi ja johtajan ääntäsi.',
    forOrg: 'Organisations seeking to build expert visibility, strategic communication and credible leadership profiles.',
    forInd: 'Executives, founders and experts who want to build a visible, strategic and influential professional voice.',
    forOrgFi: 'Organisaatiot, jotka haluavat rakentaa asiantuntijanäkyvyyttä, strategista viestintää ja uskottavia johtajaprofiileja.',
    forIndFi: 'Johtajat, perustajat ja asiantuntijat, jotka haluavat rakentaa näkyvän, strategisen ja vaikuttavan ammatillisen äänen.',
    structure: [
      'Communication and presentation coaching',
      'Strategic content planning and scripting',
      'Professional video production',
      'Structured publication and visibility strategy',
      'Dedicated personal coach and ongoing support',
    ],
    structureFi: [
      'Viestintä- ja esiintymiscoaching',
      'Strateginen sisällönsuunnittelu ja käsikirjoitus',
      'Ammattimainen videtuotanto',
      'Rakenteinen julkaisu- ja näkyvyysstrategia',
      'Oma henkilökohtainen coach ja jatkuva tuki',
    ],
    href: '/thought-leader-studio',
    hrefFi: '/fi/thought-leader-studio',
  },
  {
    id: 'impact',
    name: 'Impact Session',
    nameFi: 'Vaikuttavuussessio',
    tagline: 'Coaching for high-impact communication moments',
    duration: '3 hours · Single session',
    durationFi: '3 tuntia · Yksittäinen sessio',
    valueOrg: 'Prepare your leaders and experts for the moments that define organisational credibility and strategic influence.',
    valueInd: 'Full preparation for a specific high-stakes communication situation — precise, intensive and immediately applicable.',
    valueOrgFi: 'Valmistaa johtajat ja asiantuntijat hetkiin, jotka määrittävät organisaation uskottavuuden ja strategisen vaikutuksen.',
    valueIndFi: 'Täydellinen valmistautuminen tiettyyn korkean panoksen viestintätilanteeseen — täsmällinen, intensiivinen ja heti sovellettavissa.',
    forOrg: 'Leaders, executives and key experts facing a critical communication moment.',
    forInd: 'Any leader or expert preparing for a situation where communication performance matters.',
    forOrgFi: 'Johtajat, esimiehet ja avainasiantuntijat, jotka kohtaavat kriittisen viestintähetken.',
    forIndFi: 'Jokainen johtaja tai asiantuntija, joka valmistautuu tilanteeseen, jossa viestintäsuoritus ratkaisee.',
    structure: [
      'Individual or small group coaching (1–3 participants)',
      '3-hour intensive session',
      'Remote, on-site or studio format',
      'Optional follow-up and content refinement',
      'Built on the DIAMON ICA Framework™',
    ],
    structureFi: [
      'Yksilö- tai pienryhmäcoaching (1–3 osallistujaa)',
      '3 tunnin intensiivinen sessio',
      'Etä-, lähi- tai studioformaatti',
      'Valinnainen seuranta ja sisällön hiominen',
      'Rakennettu DIAMON ICA Framework™ -mallin pohjalle',
    ],
    href: '/impact-session',
    hrefFi: '/fi/vaikuttavuussessio',
  },
]
