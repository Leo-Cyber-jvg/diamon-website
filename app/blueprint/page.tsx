import type { Metadata } from 'next'
import { BlueprintFull } from '../components/ArchitectureBlueprint'
import InfluenceCompass from '../components/InfluenceCompass'

export const metadata: Metadata = {
  title: 'The Architecture of Influence™ — Diamon Finland',
  description:
    'A structured capability system that builds communication from personal presence to organisational impact. The DIAMON Architecture of Influence™ — the strategic blueprint for leadership communication development.',
}

export default function BlueprintPage() {
  return (
    <>
      <BlueprintFull />
      <InfluenceCompass />
    </>
  )
}
