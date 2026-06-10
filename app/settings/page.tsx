import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings — Diamon Finland',
  description: 'Manage your preferences on the Diamon Finland website.',
}

export default function SettingsPage() {
  return (
    <section className="px-6 pt-40 pb-24" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p
        className="text-xs tracking-[0.3em] uppercase mb-10"
        style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
      >
        Preferences
      </p>
      <h1
        className="text-4xl md:text-5xl font-light mb-12"
        style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1 }}
      >
        Settings
      </h1>

      <div className="flex flex-col gap-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.9 }}>

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Cookie preferences</h2>
          <p>This website uses only essential cookies. There are no optional tracking or advertising cookies to configure at this time.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Communication preferences</h2>
          <p>If you have previously contacted us and wish to update or remove your information from our records, please reach out directly at <a href="mailto:info@diamon.fi" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>info@diamon.fi</a>.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Your data rights</h2>
          <p>Under GDPR you have the right to access, correct or delete your personal data at any time. Contact us at <a href="mailto:info@diamon.fi" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>info@diamon.fi</a> and we will respond within 30 days.</p>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-subtle)' }}>Last updated: June 2026</p>
      </div>
    </section>
  )
}
