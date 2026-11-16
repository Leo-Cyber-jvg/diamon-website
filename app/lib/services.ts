export type Service = {
  id: string
  name: string
  tagline: string
  duration: string
  valueOrg: string
  valueInd: string
  forOrg: string
  forInd: string
  structure: string[]
  href: string
  hrefFi: string
}

export const services: Service[] = [
  {
    id: 'annual',
    name: 'Annual Leadership Program',
    tagline: 'Leadership communication development program',
    duration: '12 months · 6 sessions',
    valueOrg: 'Systematic, long-term development of leadership communication capability across your executive team.',
    valueInd: 'A structured 12-month engagement that builds a consistent, measurable and strategically aligned communication profile.',
    forOrg: 'Executive teams, senior leaders and key organisational communicators.',
    forInd: 'C-suite executives, senior leaders and experts stepping into broader leadership roles.',
    structure: [
      '6 tailored coaching sessions per year',
      '4 hours per session',
      'Personal coach throughout the full year',
      'Continuous support between sessions',
      'Leadership communication profile and practical operating model',
    ],
    href: '/annual-leadership-program',
    hrefFi: '/fi/ohjelmat',
  },
  {
    id: 'studio',
    name: 'Thought Leader Studio',
    tagline: 'Making thought leadership visible',
    duration: 'Ongoing · Monthly sessions',
    valueOrg: 'Turn your organisation\'s expertise into strategic visibility — through coaching, content and professional production.',
    valueInd: 'Build a distinctive and credible thought leadership presence that reflects your expertise and leadership voice.',
    forOrg: 'Organisations seeking to build expert visibility, strategic communication and credible leadership profiles.',
    forInd: 'Executives, founders and experts who want to build a visible, strategic and influential professional voice.',
    structure: [
      'Communication and presentation coaching',
      'Strategic content planning and scripting',
      'Professional video production',
      'Structured publication and visibility strategy',
      'Dedicated personal coach and ongoing support',
    ],
    href: '/thought-leader-studio',
    hrefFi: '/fi/ohjelmat',
  },
  {
    id: 'impact',
    name: 'Impact Session',
    tagline: 'Coaching for high-impact communication moments',
    duration: '3 hours · Single session',
    valueOrg: 'Prepare your leaders and experts for the moments that define organisational credibility and strategic influence.',
    valueInd: 'Full preparation for a specific high-stakes communication situation — precise, intensive and immediately applicable.',
    forOrg: 'Leaders, executives and key experts facing a critical communication moment.',
    forInd: 'Any leader or expert preparing for a situation where communication performance matters.',
    structure: [
      'Individual or small group coaching (1–3 participants)',
      '3-hour intensive session',
      'Remote, on-site or studio format',
      'Optional follow-up and content refinement',
      'Built on the DIAMON ICA Framework™',
    ],
    href: '/impact-session',
    hrefFi: '/fi/ohjelmat',
  },
]
