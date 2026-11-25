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
    id: 'intensive',
    name: 'Leadership Communication Intensive',
    nameFi: 'Leadership Communication Intensive',
    tagline: 'A focused 6-month coaching engagement',
    duration: '6 months · 6 sessions',
    durationFi: '6 kuukautta · 6 sessiota',
    valueOrg: 'A focused, intensive coaching programme that builds measurable leadership communication capability in six months.',
    valueInd: 'A focused 6-month engagement that builds clear and measurable communication capability, with direct, intensive coaching throughout.',
    valueOrgFi: 'Tiivis, intensiivinen valmennuskokonaisuus, joka rakentaa mitattavaa johtamisviestinnän toimintakykyä kuudessa kuukaudessa.',
    valueIndFi: 'Tiivis 6 kuukauden prosessi, joka rakentaa selkeää ja mitattavaa viestinnällistä toimintakykyä, intensiivisellä henkilökohtaisella valmennuksella.',
    forOrg: 'Leaders and experts who want to build communication capability quickly and purposefully, with high focus and clear outcomes.',
    forInd: 'Executives, senior leaders and experts who want intensive, focused development in a defined timeframe.',
    forOrgFi: 'Johtajat ja asiantuntijat, jotka haluavat kehittää viestintäänsä nopeasti ja tavoitteellisesti, tiiviisti ja selkein tuloksin.',
    forIndFi: 'Johtajat ja asiantuntijat, jotka haluavat intensiivistä, fokusoitua kehitystä rajatulla aikavälillä.',
    structure: [
      '6 tailored coaching sessions over 6 months',
      '3 hours per session',
      'Personal coach throughout the full programme',
      'Continuous support between sessions',
      'Leadership communication profile and personal operating model',
    ],
    structureFi: [
      '6 räätälöityä valmennussessiota 6 kuukauden aikana',
      '3 tuntia per sessio',
      'Henkilökohtainen valmentaja koko ohjelman ajan',
      'Jatkuva tuki sessioiden välillä',
      'Johtajan viestintäprofiili ja käytännön toimintamalli',
    ],
    href: '/leadership-communication-intensive',
    hrefFi: '/fi/johtamisviestinnan-intensive',
  },
  {
    id: 'annual',
    name: 'Leadership Communication Annual Program',
    nameFi: 'Annual Leadership Program',
    tagline: 'A structured 12-month coaching engagement',
    duration: '12 months · 12 sessions',
    durationFi: '12 kuukautta · 12 sessiota',
    valueOrg: 'A structured coaching programme that builds each leader a consistent, measurable and strategically aligned communication profile.',
    valueInd: 'A structured 12-month engagement that builds a consistent, measurable and strategically aligned communication profile.',
    valueOrgFi: 'Rakenteellinen valmennuskokonaisuus, joka rakentaa johtajalle johdonmukaisen, mitattavan ja strategisesti linjatun viestintäprofiilin.',
    valueIndFi: 'Rakenteinen 12 kuukauden prosessi, joka rakentaa selkeän, mitattavan ja strategisesti johdonmukaisen viestintäprofiilin.',
    forOrg: 'Leaders, executives and experts who want to develop their communication purposefully as part of the organisation\'s strategic leadership.',
    forInd: 'C-suite executives, senior leaders and experts stepping into broader leadership roles.',
    forOrgFi: 'Johtajille, esihenkilöille ja asiantuntijoille, jotka haluavat kehittää viestintäänsä tavoitteellisesti osana organisaation strategista johtamista.',
    forIndFi: 'Toimitusjohtajat, johtoryhmän jäsenet ja asiantuntijat, jotka ottavat laajempaa johtajuutta.',
    structure: [
      '12 tailored coaching sessions per year',
      '2 hours per session',
      'Personal coach throughout the full year',
      'Continuous support between sessions',
      'Leadership communication profile and personal operating model',
    ],
    structureFi: [
      '12 räätälöityä valmennussessiota vuoden aikana',
      '2 tuntia per sessio',
      'Henkilökohtainen valmentaja koko vuoden',
      'Jatkuva tuki sessioiden välillä',
      'Johtajan viestintäprofiili ja käytännön toimintamalli',
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
    valueOrg: 'Turn your organisation\'s expertise into strategic visibility, through coaching, content and professional production.',
    valueInd: 'Build a distinctive and credible thought leadership presence that reflects your expertise and leadership voice.',
    valueOrgFi: 'Muunna organisaationne asiantuntijuus strategiseksi näkyvyydeksi, coachingin, sisällön ja ammattimaisen tuotannon kautta.',
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
    nameFi: 'Impact Session',
    tagline: 'Prepare for the moments that matter.',
    duration: '3 hours · Single session',
    durationFi: '3 tuntia · Yksittäinen sessio',
    valueOrg: 'Personal coaching for leaders and experts who want to clarify their thinking, strengthen their expression and trust their own performance in an important communication situation.',
    valueInd: 'Personal coaching for those who want to clarify their thinking, strengthen their expression and trust their own performance in an important communication situation.',
    valueOrgFi: 'Henkilökohtaista valmennusta johtajille ja asiantuntijoille, jotka haluavat kirkastaa ajatuksiaan, vahvistaa ilmaisuaan ja luottaa omaan toimintakykyynsä tärkeässä viestintätilanteessa.',
    valueIndFi: 'Henkilökohtaista valmennusta sinulle, joka haluat kirkastaa ajatuksiasi, vahvistaa ilmaisuasi ja luottaa omaan toimintakykyysi tärkeässä viestintätilanteessa.',
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
