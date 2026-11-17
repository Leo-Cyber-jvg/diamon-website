import type { Metadata } from 'next'
import CoachingSeries from '../components/CoachingSeries'

export const metadata: Metadata = {
  title: 'Leadership Impact and Performance — Coaching Series — DIAMON Finland',
  description:
    'One-day intensive coaching days for leaders. On each day, Leo Sjöman coaches together with a leading expert: Antti Pennanen (leading under pressure) and Henri Tuomilehto (sleep and recovery).',
}

export default function CoachingSeriesPage() {
  return <CoachingSeries lang="en" />
}
