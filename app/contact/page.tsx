'use client'

import { useState } from 'react'
import Link from 'next/link'
import CalInline from '../components/CalInline'

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL

// Extract the cal.com path from the full URL
// e.g. "https://cal.com/leo-sjoman/intro" → "leo-sjoman/intro"
function getCalLink(url: string): string {
  try {
    const u = new URL(url)
    return u.pathname.replace(/^\//, '')
  } catch {
    return url
  }
}

function BookingSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* Left: copy */}
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
          >
            Book a meeting
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text)',
              lineHeight: 1.15,
              maxWidth: '440px',
            }}
          >
            Schedule a conversation directly.
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{
              color: 'var(--color-muted)',
              fontFamily: 'var(--font-body)',
              maxWidth: '400px',
            }}
          >
            Choose a time that suits you. The first conversation is a
            diagnostic — no sales, no pitch. We want to understand the
            specific challenge before proposing anything.
          </p>
          <ul className="flex flex-col gap-3 mb-10">
            {[
              '30-minute introductory call',
              'No preparation required',
              'Available in Finnish and English',
            ].map(item => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#5656D6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {!BOOKING_URL && (
            <button
              onClick={() => setOpen(o => !o)}
              className="btn-primary"
            >
              {open ? 'Close calendar' : 'Book a meeting with DIAMON'}
            </button>
          )}
        </div>

        {/* Right: calendar embed or placeholder */}
        <div>
          {BOOKING_URL ? (
            /* Cal.com inline embed — full calendar widget */
            <CalInline calLink={getCalLink(BOOKING_URL)} />
          ) : open ? (
            /* Placeholder shown when no URL is configured */
            <div
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-background)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Calendar
              </p>
              <p
                className="text-2xl font-light"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-text)',
                  lineHeight: 1.25,
                }}
              >
                Online booking coming soon.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                The calendar will be live shortly. In the meantime,
                send a message using the form below or reach out
                directly by email to arrange a time.
              </p>
              <a
                href="mailto:leo@diamonfinland.com"
                className="link-blue text-sm self-start"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                leo@diamonfinland.com
              </a>
            </div>
          ) : (
            /* Quiet default state — no URL, calendar not yet opened */
            <div
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-background)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Calendar icon */}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="4" width="18" height="16" rx="1.5" stroke="#9E9890" strokeWidth="1.2" />
                  <line x1="2" y1="9" x2="20" y2="9" stroke="#9E9890" strokeWidth="1.2" />
                  <line x1="7" y1="2" x2="7" y2="6" stroke="#9E9890" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="15" y1="2" x2="15" y2="6" stroke="#9E9890" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="6" y="12" width="3" height="3" rx="0.5" fill="#5656D6" />
                  <rect x="11" y="12" width="3" height="3" rx="0.5" fill="#9E9890" />
                  <rect x="6" y="16.5" width="3" height="3" rx="0.5" fill="#9E9890" />
                </svg>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                Select a time that works for you. The first call is
                30 minutes — a focused diagnostic conversation about
                your specific leadership communication challenge.
              </p>
              <p
                className="text-xs"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Press the button to open the booking calendar.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
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
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-20"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-10"
          style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}
        >
          Contact
        </p>
        <h1
          className="text-4xl md:text-6xl font-light mb-8"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--color-text)',
            lineHeight: 1.1,
            maxWidth: '700px',
          }}
        >
          Start with a precise question.
        </h1>
        <p
          className="text-lg font-light"
          style={{
            color: 'var(--color-muted)',
            fontFamily: 'var(--font-body)',
            lineHeight: 1.8,
            maxWidth: '520px',
          }}
        >
          Describe the communication challenge you are facing or the
          outcome you are trying to achieve. The clearer the question,
          the better the first conversation.
        </p>
      </section>

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* ── Booking ── */}
      <BookingSection />

      {/* Divider */}
      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Form */}
      <section
        className="px-6 py-20"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left: form */}
          <div>
            {status === 'sent' ? (
              <div className="flex flex-col gap-4 py-8">
                <h2
                  className="text-3xl font-light"
                  style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--color-text)' }}
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
                    <label
                      htmlFor="name"
                      className="text-xs tracking-widest uppercase"
                      style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-xs tracking-widest uppercase"
                      style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '140px' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-blue)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    aria-required="true"
                  />
                </div>

                {status === 'error' && (
                  <p
                    className="text-sm"
                    style={{ color: '#EF4444', fontFamily: 'var(--font-body)' }}
                    role="alert"
                  >
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* Right: context */}
          <div className="flex flex-col gap-10">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                What to expect
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
              >
                We respond to all enquiries personally. There is no sales process.
                The first conversation is a diagnostic — we want to understand the
                specific challenge before we propose anything.
              </p>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Typical enquiries
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Executive communication architecture for a senior leader',
                  'Organizational communication capability development',
                  'Preparation for a specific high-stakes moment',
                  'Speaking, media, or investor communication',
                  'Strategic communication advisory',
                ].map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
                  >
                    <span
                      className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-blue)' }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />

            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3"
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}
              >
                Direct
              </p>
              <a
                href="mailto:leo@diamonfinland.com"
                className="link-blue text-sm"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                leo@diamonfinland.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
