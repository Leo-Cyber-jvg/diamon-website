// Bilingual route map — English ↔ Finnish
// Used by the language switcher to navigate between equivalent pages

export const routeMap: Record<string, string> = {
  // EN → FI
  '/': '/fi',
  '/for-individuals': '/fi/yksiloille',
  '/for-organisations': '/fi/organisaatioille',
  '/executive-programmes': '/fi/ohjelmat',
  '/framework': '/fi/ica-viitekehys',
  '/insights': '/fi/nakemyksia',
  '/about': '/fi/tietoa',
  '/contact': '/fi/ota-yhteytta',
  '/services': '/fi/palvelut',
  '/thought-leader-studio': '/fi/thought-leader-studio',
  '/impact-session': '/fi/impact-session',
  '/annual-leadership-program': '/fi/vuosiohjelma',
  '/faq': '/fi/ukk',
  '/privacy': '/fi/tietosuoja',
  '/cookies': '/fi/evasteet',
  '/settings': '/fi/asetukset',
}

// Reverse map: FI → EN
export const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([en, fi]) => [fi, en])
)

export function getAlternateRoute(pathname: string): { href: string; lang: 'en' | 'fi' } {
  const isFinnish = pathname.startsWith('/fi')

  if (isFinnish) {
    // Find the English equivalent
    const enRoute = reverseRouteMap[pathname] ?? reverseRouteMap[pathname.replace(/\/$/, '')] ?? '/'
    return { href: enRoute, lang: 'en' }
  } else {
    // Find the Finnish equivalent
    const clean = pathname.replace(/\/$/, '') || '/'
    const fiRoute = routeMap[clean] ?? '/fi'
    return { href: fiRoute, lang: 'fi' }
  }
}

export function isFinRoute(pathname: string): boolean {
  return pathname.startsWith('/fi')
}
