import type { Metadata } from 'next'
import CoachingSeries from '../../components/CoachingSeries'

export const metadata: Metadata = {
  title: 'Johtajan vaikuttavuus ja toimintakyky — Valmennussarja — DIAMON Finland',
  description:
    'Yhden päivän intensiivivalmennuksia johtajille. Leo Sjöman valmentaa jokaisessa päivässä yhdessä eri alan huippuasiantuntijan kanssa: Antti Pennanen (johtaminen paineessa) ja Henri Tuomilehto (uni ja palautuminen).',
}

export default function ValmennussarjaPage() {
  return <CoachingSeries lang="fi" />
}
