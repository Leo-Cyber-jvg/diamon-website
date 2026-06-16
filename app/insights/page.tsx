import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights — DIAMON Finland',
  description:
    'Thought leadership on leadership communication, executive presence, AI and leadership, influence, interaction and communication performance.',
}

const topics = [
  'Leadership communication',
  'Executive presence',
  'AI and leadership',
  'Influence and interaction',
  'Communication under pressure',
  'Organisational communication',
  'Human-centred leadership',
  'Communication performance',
]

const featured = [
  {
    category: 'Leadership Communication',
    title: 'Why leadership communication is infrastructure, not a soft skill',
    intro: 'The organisations that outperform their peers in periods of uncertainty have one thing in common: their leaders can communicate with clarity, conviction and strategic precision under pressure. This is not coincidental.',
    readTime: '6 min read',
    date: 'June 2026',
  },
  {
    category: 'AI and Leadership',
    title: 'In the AI era, human communication becomes the scarcest strategic asset',
    intro: 'As automation handles more of what organisations used to need people for, the ability to create trust, build alignment, lead interaction and perform under pressure becomes exponentially more valuable — and exponentially rarer.',
    readTime: '8 min read',
    date: 'May 2026',
  },
  {
    category: 'Executive Presence',
    title: 'The three components of executive presence — and why most leaders develop only one',
    intro: 'Executive presence is not a single quality. It is a system. Most development programmes address how people look and sound. Very few address the underlying architecture that makes presence consistent, sustainable and genuinely impactful.',
    readTime: '5 min read',
    date: 'April 2026',
  },
  {
    category: 'Communication Performance',
    title: 'What elite sport can teach us about communication under pressure',
    intro: 'Elite athletes spend thousands of hours developing the ability to perform under pressure — not by training harder, but by building the specific capability to manage state, focus and execution when it matters most. Leadership communication demands the same discipline.',
    readTime: '7 min read',
    date: 'March 2026',
  },
  {
    category: 'Organisational Communication',
    title: 'Why most change communication fails — and what to do instead',
    intro: 'Most change initiatives fail not because the change is wrong, but because the communication architecture behind it is missing. Strategy without communication is intention without impact.',
    readTime: '6 min read',
    date: 'February 2026',
  },
  {
    category: 'ICA Framework',
    title: 'Identity before strategy: why communicators who do not know who they are cannot land what they say',
    intro: 'The first level of the DIAMON ICA Framework is Identity — and it is consistently the most underestimated. Most communication development begins with what to say and how to say it. We begin with who is saying it, and why that matters.',
    readTime: '5 min read',
    date: 'January 2026',
  },
]

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-40 pb-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
          Insights
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <h1
            className="text-4xl md:text-6xl font-light"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.05, maxWidth: '640px' }}
          >
            Thinking on leadership communication.
          </h1>
          <p
            className="text-lg font-light"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '480px' }}
          >
            Perspectives on leadership communication, executive presence, AI and the human capabilities that matter most in the era we are entering.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', backgroundColor: '#ECEAE6' }}>
        <div className="px-6 py-5 flex flex-wrap gap-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {topics.map((t) => (
            <span
              key={t}
              className="text-xs tracking-wide"
              style={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-muted)',
                border: '1px solid var(--color-border)',
                padding: '5px 12px',
                backgroundColor: 'var(--color-background)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Featured article — large */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Featured
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start" style={{ borderTop: '2px solid var(--color-blue)', paddingTop: '32px' }}>
          <div>
            <span className="text-xs tracking-wide uppercase block mb-4" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
              {featured[0].category}
            </span>
            <h2
              className="text-2xl md:text-4xl font-light mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}
            >
              {featured[0].title}
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{featured[0].date}</span>
              <span style={{ width: '1px', height: '12px', backgroundColor: 'var(--color-border)', display: 'inline-block' }} />
              <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{featured[0].readTime}</span>
            </div>
          </div>
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              {featured[0].intro}
            </p>
            <span className="text-sm" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
              Full article coming soon.
            </span>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Article grid */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          All insights
        </p>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {featured.slice(1).map((article) => (
            <div
              key={article.title}
              className="grid md:grid-cols-4 gap-0"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <div className="px-8 py-7 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs block mb-1" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {article.category}
                </span>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
                  {article.date}
                </span>
              </div>
              <div className="px-8 py-7 md:col-span-2 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                  {article.intro}
                </p>
              </div>
              <div className="px-8 py-7 flex flex-col justify-between">
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{article.readTime}</span>
                <span className="text-xs mt-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)', fontStyle: 'italic' }}>
                  Coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Newsletter / follow */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              Stay informed
            </p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>
              Thinking on leadership communication — delivered when it matters.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Follow Leo Sjöman on LinkedIn for regular perspectives on leadership communication, executive presence, and the future of human communication in organisations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/leo-sj%C3%B6man-33721558/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: 'var(--color-blue)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                padding: '14px 24px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                alignSelf: 'flex-start',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="white" fillOpacity="0.2" />
                <path d="M7 10v7M7 7v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Follow on LinkedIn
            </a>
            <Link href="/contact" className="link-blue text-sm self-start" style={{ fontFamily: 'var(--font-body)' }}>
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
