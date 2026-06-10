import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Diamon Finland',
  description: 'How Diamon Finland collects, uses and protects your personal data.',
}

export default function PrivacyPage() {
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
        Privacy Policy
      </h1>

      <div className="flex flex-col gap-10" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', lineHeight: 1.9 }}>

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>1. Controller</h2>
          <p>Diamon Finland<br />Business ID: registered in Finland<br />Contact: info@diamon.fi</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>2. Data we collect</h2>
          <p>We collect only the information you provide directly — name, company, email address and message — when you submit the contact form on this website. We do not collect any data automatically beyond standard server logs.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>3. Purpose and legal basis</h2>
          <p>Your data is used solely to respond to your enquiry. The legal basis is our legitimate interest in communicating with potential clients, or your explicit consent when submitting the form.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>4. Data retention</h2>
          <p>We retain your contact information only as long as necessary to handle your enquiry and any resulting engagement. We do not sell, share or transfer your data to third parties.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>5. Your rights</h2>
          <p>Under GDPR, you have the right to access, correct or delete your personal data at any time. To exercise these rights, contact us at info@diamon.fi.</p>
        </div>

        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

        <div>
          <h2 className="text-lg font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>6. Contact</h2>
          <p>For any questions regarding this privacy policy, please contact us at <a href="mailto:info@diamon.fi" style={{ color: 'var(--color-blue)', textDecoration: 'none' }}>info@diamon.fi</a>.</p>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-subtle)' }}>Last updated: June 2026</p>
      </div>
    </section>
  )
}
