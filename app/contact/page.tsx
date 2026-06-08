'use client'

import { useState } from 'react'
import Link from 'next/link'

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
      const res = await fetch('/', {
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
    fontFamily: 'var(--font-inter)',
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
          style={{ color: 'var(--color-gold)', fontFamily: 'var(--font-inter)' }}
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
            fontFamily: 'var(--font-inter)',
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
                <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)', fontSize: '0.875rem', lineHeight: 1.8 }}>
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
                      style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
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
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-xs tracking-widest uppercase"
                      style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
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
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
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
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
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
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    aria-required="true"
                  />
                </div>

                {status === 'error' && (
                  <p
                    className="text-sm"
                    style={{ color: '#EF4444', fontFamily: 'var(--font-inter)' }}
                    role="alert"
                  >
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gold self-start disabled:opacity-50 disabled:cursor-not-allowed"
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
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
              >
                What to expect
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
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
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
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
                    style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-inter)' }}
                  >
                    <span
                      className="mt-1.5 shrink-0 block w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--color-gold)' }}
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
                style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-inter)' }}
              >
                Direct
              </p>
              <a
                href="mailto:leo@diamonfinland.com"
                className="link-gold text-sm"
                style={{ fontFamily: 'var(--font-inter)' }}
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
