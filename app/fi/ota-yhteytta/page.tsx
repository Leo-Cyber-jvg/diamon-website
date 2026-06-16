'use client'

import { useState } from 'react'

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL

function CalWidget({ bookingUrl }: { bookingUrl: string }) {
  const embedUrl = bookingUrl.includes('?') ? `${bookingUrl}&embed=true` : `${bookingUrl}?embed=true`
  return (
    <iframe
      src={embedUrl}
      title="Varaa aika Leo Sjömanin kanssa — DIAMON Finland"
      loading="lazy"
      style={{ width: '100%', height: '700px', border: 'none', display: 'block' }}
      allow="payment"
    />
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/fi/ota-yhteytta/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact-fi', ...form }).toString(),
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', company: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    padding: '14px 16px',
    outline: 'none',
  }

  return (
    <div className="grid md:grid-cols-2 gap-20">
      <div>
        {status === 'sent' ? (
          <div className="flex flex-col gap-4 py-8">
            <h2 className="text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>Viesti vastaanotettu.</h2>
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8 }}>Olemme yhteydessä pian.</p>
          </div>
        ) : (
          <form name="contact-fi" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="hidden" name="form-name" value="contact-fi" />
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="fi-name" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Nimi</label>
                <input id="fi-name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="fi-company" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Organisaatio</label>
                <input id="fi-company" name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fi-email" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Sähköposti</label>
              <input id="fi-email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="fi-message" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Mitä haluaisit kehittää?</label>
              <textarea id="fi-message" name="message" required rows={6} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }} onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')} onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
            </div>
            {status === 'error' && <p className="text-sm" style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }} role="alert">Jokin meni pieleen. Yritä uudelleen tai lähetä sähköpostia suoraan.</p>}
            <button type="submit" disabled={status === 'sending'} className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Lähetetään...' : 'Lähetä viesti'}
            </button>
          </form>
        )}
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Mitä odottaa</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
            Vastaamme kaikkiin tiedusteluihin henkilökohtaisesti. Ei myyntiprosessia. Ensimmäinen keskustelu on diagnostiikka — haluamme ymmärtää konkreettisen haasteen ennen kuin ehdotamme mitään.
          </p>
        </div>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tyypilliset yhteydenotot</p>
          <ul className="flex flex-col gap-3">
            {['Johtajan henkilökohtainen viestintävalmennus', 'Johtoryhmän viestintäkyvyn kehittäminen', 'Valmistautuminen vaativaan viestintätilanteeseen', 'Puhe-, media- tai sijoittajaviestintä', 'Ajatusjohtajuuden rakentaminen'].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function OtaYhteyttaPage() {
  return (
    <>
      <section className="px-6 pt-40 pb-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>Ota yhteyttä</p>
        <h1 className="text-4xl md:text-6xl font-light mb-8" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1, maxWidth: '700px' }}>Aloita tarkasta kysymyksestä.</h1>
        <p className="text-lg font-light" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '520px' }}>
          Kuvaile viestintähaaste, jota kohtaat, tai tulos, johon pyrit. Mitä tarkempi kysymys, sitä parempi ensimmäinen keskustelu.
        </p>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Leo profile card */}
      <section className="px-6 py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <div style={{ width: '96px', height: '96px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--color-border)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/leo-sjoman.jpg" alt="Leo Sjöman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: '1.4rem' }}>Leo Sjöman</span>
            <span className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Perustaja, DIAMON Finland</span>
          </div>
          <div className="hidden sm:block" style={{ width: '1px', height: '56px', backgroundColor: 'var(--color-border)', margin: '0 8px' }} />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="https://www.linkedin.com/in/leo-sj%C3%B6man-33721558/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="3" fill="#5656D6" /><path d="M7 10v7M7 7v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" /><path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              LinkedIn
            </a>
            <a href="mailto:info@diamon.fi" className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#5656D6" strokeWidth="1.5" /><path d="M2 8l10 6 10-6" stroke="#5656D6" strokeWidth="1.5" strokeLinecap="round" /></svg>
              info@diamon.fi
            </a>
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>

      {/* Calendar */}
      {BOOKING_URL && (
        <>
          <section className="px-6 py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Varaa aika</p>
            <h2 className="text-2xl md:text-3xl font-light mb-10" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>Varaa keskusteluaika suoraan.</h2>
            <CalWidget bookingUrl={BOOKING_URL} />
          </section>
          <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}><div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} /></div>
        </>
      )}

      {/* Form */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Tai lähetä viesti</p>
        <ContactForm />
      </section>
    </>
  )
}
