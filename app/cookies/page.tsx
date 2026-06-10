import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Diamon Finland',
  description: 'How Diamon Finland uses cookies on this website.',
}

export default function CookiesPage() {
  return (
    <section className="px-6 pt-40 pb-24" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p
        className="text-xs tracking-[0.3em] uppercase mb-10"
        style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
      >
        Legal
      </p>
      <h1
        className="text-4xl md:text-5xl font-light mb-12"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1 }}
      >
        Cookie Policy
      </h1>

      <div className="flex flex-col gap-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.9 }}>

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>What are cookies</h2>
          <p>Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently and to provide basic analytics.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>How we use cookies</h2>
          <p>This website uses only essential cookies required for the site to function correctly. We do not use tracking cookies, advertising cookies or third-party analytics without your explicit consent.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Third-party services</h2>
          <p>The booking calendar on our contact page is provided by Cal.com. Their cookie and privacy practices are governed by their own privacy policy. We recommend reviewing it at cal.com.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Managing cookies</h2>
          <p>You can control and delete cookies through your browser settings at any time. Disabling cookies may affect the functionality of some parts of this website.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Contact</h2>
          <p>Questions about our cookie policy? Contact us at <a href="mailto:info@diamon.fi" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>info@diamon.fi</a>.</p>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-subtle)' }}>Last updated: June 2026</p>
      </div>
    </section>
  )
}
