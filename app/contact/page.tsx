'use client'

import { useState } from 'react'

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL

// ── Cal.com iframe embed ──────────────────────────────────────────────────────
function CalWidget({ bookingUrl }: { bookingUrl: string }) {
  // Build the embed URL — append ?embed=true for clean iframe presentation
  const embedUrl = bookingUrl.includes('?')
    ? `${bookingUrl}&embed=true`
    : `${bookingUrl}?embed=true`

  return (
    <iframe
      src={embedUrl}
      title="Book a meeting with Leo Sjöman — DIAMON Finland"
      loading="lazy"
      style={{
        width: '100%',
        height: '700px',
        border: 'none',
        display: 'block',
      }}
      allow="payment"
    />
  )
}

// ── Contact form ──────────────────────────────────────────────────────────────
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
      const res = await fetch('/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...form }).toString(),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', company: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
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
    transition: 'border-color 200ms',
  }

  return (
    <div className="grid md:grid-cols-2 gap-20">
      {/* Left: form */}
      <div>
        {status === 'sent' ? (
          <div className="flex flex-col gap-4 py-8">
            <h2
              className="text-3xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}
            >
              Message received.
            </h2>
            <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.8 }}>
              We will be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
            aria-label="Contact form"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} aria-required="true" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Company</label>
                <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={handleChange} style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} aria-required="true" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>What are you working on?</label>
              <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange}
                style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')} aria-required="true" />
            </div>

            {status === 'error' && (
              <p className="text-sm" style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }} role="alert">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <button type="submit" disabled={status === 'sending'} className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>

      {/* Right: context */}
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>What to expect</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
            We respond to all enquiries personally. There is no sales process.
            The first conversation is a diagnostic — we want to understand the
            specific challenge before we propose anything.
          </p>
        </div>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Typical enquiries</p>
          <ul className="flex flex-col gap-3">
            {[
              'Executive communication architecture for a senior leader',
              'Organisational communication capability development',
              'Preparation for a specific high-stakes moment',
              'Speaking, media, or investor communication',
              'Strategic communication advisory',
            ].map(item => (
              <li key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
                <span className="mt-1.5 shrink-0 block w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-blue)' }} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-6 pt-40 pb-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>
          Contact
        </p>
        <h1
          className="text-4xl md:text-6xl font-light mb-8"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.1, maxWidth: '700px' }}
        >
          Start with a precise question.
        </h1>
        <p
          className="text-lg font-light"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '520px' }}
        >
          Describe the communication challenge you are facing or the outcome
          you are trying to achieve. The clearer the question, the better the
          first conversation.
        </p>
      </section>

      {/* ── Divider ── */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Leo profile card ── */}
      <section className="px-6 py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">

          {/* Circle photo */}
          <div style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '1px solid var(--color-border)',
          }}>
            <img
              src="/leo-sjoman.jpg"
              alt="Leo Sjöman"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Name + title */}
          <div className="flex flex-col gap-1">
            <span
              className="text-xl font-light"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontSize: '1.4rem' }}
            >
              Leo Sjöman
            </span>
            <span
              className="text-sm"
              style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
            >
              Founder, DIAMON Finland
            </span>
          </div>

          {/* Divider (desktop) */}
          <div className="hidden sm:block" style={{ width: '1px', height: '56px', backgroundColor: 'var(--color-border)', margin: '0 8px' }} />

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leo-sj%C3%B6man-33721558/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="#5656D6" />
                <path d="M7 10v7M7 7v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17M11 10v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:info@diamon.fi"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--color-text)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="#5656D6" strokeWidth="1.5" />
                <path d="M2 8l10 6 10-6" stroke="#5656D6" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              info@diamon.fi
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Calendar booking ── */}
      <section className="px-6 py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Book a meeting
        </p>
        <h2
          className="text-2xl md:text-3xl font-light mb-10"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}
        >
          Schedule a conversation directly.
        </h2>

        {BOOKING_URL ? (
          <CalWidget bookingUrl={BOOKING_URL} />
        ) : (
          /* Placeholder when no URL is set */
          <div
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-background)',
              padding: '56px 48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '560px',
            }}
          >
            <p className="text-2xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
              Calendar coming soon.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Online booking will be available shortly. In the meantime,
              send a message below or reach out directly.
            </p>
            <a href="mailto:info@diamon.fi" className="link-blue text-sm self-start" style={{ fontFamily: 'var(--font-body)' }}>
              info@diamon.fi
            </a>
          </div>
        )}
      </section>

      {/* ── Divider ── */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Contact form ── */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Or send a message
        </p>
        <ContactForm />
      </section>
    </>
  )
}
