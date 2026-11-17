'use client'

import { useEffect, useState } from 'react'

// Kiinnostuslomake valmennussarjan sivulle (Netlify Forms, sama malli kuin /fi/ota-yhteytta/).
// Lähettää vain kiinnostuksen ilmoituksen – ei varaa eikä vahvista paikkaa.

export type SignupDay = { id: string; value: string; title: string; date: string; tag: string }

type Lang = 'fi' | 'en'

const copy = {
  fi: {
    legend: 'Valmennuspäivä',
    name: 'Nimi',
    email: 'Sähköposti',
    company: 'Organisaatio',
    role: 'Tehtävänimike',
    phone: 'Puhelin',
    message: 'Viesti (vapaaehtoinen)',
    optional: 'vapaaehtoinen',
    submit: 'Ilmoita kiinnostuksesi',
    sending: 'Lähetetään…',
    note: 'Tämä on kiinnostuksen ilmoitus, ei sitova ilmoittautuminen. Olemme sinuun yhteydessä henkilökohtaisesti, ja paikka vahvistetaan erikseen.',
    privacy: 'Tietosuoja',
    sentTitle: 'Kiitos, kiinnostuksesi on vastaanotettu.',
    sentText: 'Tämä ei vielä ole paikkavahvistus. Olemme sinuun yhteydessä henkilökohtaisesti valitsemastasi valmennuspäivästä.',
    error: 'Lähetys ei onnistunut. Yritä uudelleen tai lähetä sähköpostia osoitteeseen info@diamon.fi.',
    chooseDay: 'Valitse valmennuspäivä.',
    local: 'Paikallinen esikatselu: lomake lähettää tietoja vasta Netlifyssä. Mitään ei lähetetty.',
  },
  en: {
    legend: 'Coaching day',
    name: 'Name',
    email: 'Email',
    company: 'Organisation',
    role: 'Job title',
    phone: 'Phone',
    message: 'Message (optional)',
    optional: 'optional',
    submit: 'Register your interest',
    sending: 'Sending…',
    note: 'This registers your interest; it is not a binding booking. We will contact you personally, and places are confirmed separately.',
    privacy: 'Privacy',
    sentTitle: 'Thank you, we have received your interest.',
    sentText: 'This is not yet a confirmed place. We will contact you personally about the coaching day you chose.',
    error: 'Sending failed. Please try again or email info@diamon.fi.',
    chooseDay: 'Please choose a coaching day.',
    local: 'Local preview: the form only sends data on Netlify. Nothing was sent.',
  },
} as const

const empty = { name: '', email: '', company: '', role: '', phone: '', message: '' }

export default function SeriesSignupForm({
  lang,
  formName,
  postPath,
  days,
}: {
  lang: Lang
  formName: string
  postPath: string
  days: SignupDay[]
}) {
  const t = copy[lang]
  const [day, setDay] = useState('')
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'local'>('idle')
  const [dayError, setDayError] = useState(false)

  // Kortin painike ohjaa osoitteeseen #ilmoittaudu-01 / #ilmoittaudu-02 → valitaan oikea päivä.
  useEffect(() => {
    const pick = () => {
      const m = window.location.hash.match(/-(\d{2})$/)
      const match = m && days.find((d) => d.id === m[1])
      if (match) { setDay(match.value); setDayError(false) }
    }
    pick()
    window.addEventListener('hashchange', pick)
    return () => window.removeEventListener('hashchange', pick)
  }, [days])

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!day) { setDayError(true); return }
    // Netlify Forms toimii vain Netlifyssä. Paikallinen palvelin vastaisi 200 OK tallentamatta mitään.
    if (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname)) { setStatus('local'); return }
    setStatus('sending')
    try {
      const res = await fetch(postPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': formName, valmennuspaiva: day, ...form }).toString(),
      })
      if (res.ok) { setStatus('sent'); setForm(empty) } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  const body = { fontFamily: 'var(--font-body)' } as const
  const label = 'text-xs tracking-widest uppercase'
  const labelStyle = { color: 'var(--color-muted)', ...body }
  const input: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
    ...body,
    fontSize: '1rem',
    padding: '13px 14px',
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col gap-4 py-6" role="status" aria-live="polite">
        <p className="text-3xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.15 }}>{t.sentTitle}</p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>{t.sentText}</p>
      </div>
    )
  }

  const field = (name: keyof typeof empty, text: string, type = 'text', required = false, autoComplete?: string) => (
    <div className="flex flex-col gap-2">
      <label htmlFor={`${formName}-${name}`} className={label} style={labelStyle}>
        {text}{required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={`${formName}-${name}`}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        value={form[name]}
        onChange={onChange}
        className="series-input"
        style={input}
      />
    </div>
  )

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p hidden>
        <label>Älä täytä: <input name="bot-field" /></label>
      </p>

      <fieldset className="flex flex-col gap-3" aria-describedby={dayError ? `${formName}-day-error` : undefined}>
        <legend className={`${label} mb-3`} style={labelStyle}>{t.legend} *</legend>
        {days.map((d) => {
          const active = day === d.value
          return (
            <label
              key={d.id}
              className="flex items-start gap-4 p-4 cursor-pointer"
              style={{
                border: `1px solid ${active ? 'var(--color-blue)' : 'var(--color-border)'}`,
                backgroundColor: active ? 'rgba(86,86,214,0.06)' : 'var(--color-background)',
                transition: 'border-color 150ms, background-color 150ms',
              }}
            >
              <input
                type="radio"
                name="valmennuspaiva"
                value={d.value}
                checked={active}
                onChange={() => { setDay(d.value); setDayError(false) }}
                className="mt-1 shrink-0"
                style={{ accentColor: 'var(--color-blue)', width: 18, height: 18 }}
              />
              <span className="flex flex-col gap-1">
                <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-blue)', ...body }}>{d.tag}</span>
                <span className="text-base" style={{ color: 'var(--color-text)', ...body, fontWeight: 500 }}>{d.title}</span>
                <span className="text-sm" style={{ color: 'var(--color-muted)', ...body }}>{d.date}</span>
              </span>
            </label>
          )
        })}
        {dayError && (
          <p id={`${formName}-day-error`} className="text-sm" style={{ color: '#B42318', ...body }} role="alert">{t.chooseDay}</p>
        )}
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-5">
        {field('name', t.name, 'text', true, 'name')}
        {field('email', t.email, 'email', true, 'email')}
        {field('company', t.company, 'text', false, 'organization')}
        {field('role', t.role, 'text', false, 'organization-title')}
      </div>
      {field('phone', t.phone, 'tel', false, 'tel')}
      <div className="flex flex-col gap-2">
        <label htmlFor={`${formName}-message`} className={label} style={labelStyle}>{t.message}</label>
        <textarea
          id={`${formName}-message`}
          name="message"
          rows={3}
          value={form.message}
          onChange={onChange}
          className="series-input"
          style={{ ...input, resize: 'vertical', minHeight: '96px' }}
        />
      </div>

      {status === 'local' && (
        <p className="text-sm" style={{ color: '#B42318', ...body }} role="alert">{t.local}</p>
      )}
      {status === 'error' && (
        <p className="text-sm" style={{ color: '#B42318', ...body }} role="alert">{t.error}</p>
      )}

      <div className="flex flex-col gap-4">
        <button type="submit" disabled={status === 'sending'} className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'sending' ? t.sending : t.submit}
        </button>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', ...body }}>
          {t.note}{' '}
          <a href="/privacy/" style={{ color: 'var(--color-blue)' }}>{t.privacy}</a>
        </p>
      </div>
    </form>
  )
}
