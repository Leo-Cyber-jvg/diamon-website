import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — Diamon Finland',
  description: 'Frequently asked questions about DIAMON Finland and our services.',
}

const faqs = [
  {
    q: 'What does DIAMON do?',
    a: 'DIAMON builds leadership communication capability — not training programmes. We work with leaders, executives and organisations to close the gap between their expertise and how it lands. Every engagement is structured around the DIAMON ICA Framework™.',
  },
  {
    q: 'Who do you work with?',
    a: 'We work with senior leaders, C-suite executives, board professionals and leadership teams in organisations that treat communication as strategic infrastructure — not a soft skill.',
  },
  {
    q: 'How do engagements work?',
    a: 'Every engagement starts with a precise definition of what needs to change and what it will mean when it does. We do not begin work without that clarity. Scope and structure are agreed before anything starts.',
  },
  {
    q: 'Do you offer one-off sessions?',
    a: 'Yes. The DIAMON Impact Session is a focused 3-hour individual coaching engagement for a specific high-stakes communication moment — a keynote, board presentation, media appearance or investor conversation.',
  },
  {
    q: 'What is the ICA Framework™?',
    a: 'The ICA Framework™ — Individual Communication Alignment — is DIAMON\'s proprietary method for aligning a leader\'s communication goal, personal style, role, impact and the organisation\'s strategic direction. It forms the foundation of all DIAMON engagements.',
  },
  {
    q: 'How do I get started?',
    a: 'Start with a conversation. Describe the communication challenge you are facing or the outcome you want to achieve. The clearer the question, the better the first conversation.',
  },
]

export default function FAQPage() {
  return (
    <section className="px-6 pt-40 pb-24" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p
        className="text-xs tracking-[0.3em] uppercase mb-10"
        style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
      >
        FAQ
      </p>
      <h1
        className="text-4xl md:text-5xl font-light mb-16"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1 }}
      >
        Frequently asked questions
      </h1>

      <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
        {faqs.map(({ q, a }) => (
          <div
            key={q}
            className="px-8 py-8"
            style={{ backgroundColor: 'var(--color-background)' }}
          >
            <h2
              className="text-lg font-light mb-3"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              {q}
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              {a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
          Still have a question?
        </p>
        <Link href="/contact" className="btn-primary self-start">
          Start a conversation
        </Link>
      </div>
    </section>
  )
}
