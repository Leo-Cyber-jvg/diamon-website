'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'
import { getAlternateRoute, isFinRoute } from '../lib/langRoutes'

const fiServices = [
  { href: '/fi/vuosittainen-johtajuusohjelma', label: 'Annual Leadership Program' },
  { href: '/fi/johtamisviestinnan-intensive', label: 'Leadership Communication Intensive' },
  { href: '/fi/thought-leader-studio', label: 'Thought Leader Studio' },
  { href: '/fi/vaikuttavuussessio', label: 'Impact Session' },
  { href: '/fi/keynotes', label: 'Keynote-puheenvuorot' },
  { href: '/fi/valmennussarja', label: 'Johtajavaikuttavuus- ja toimintakykyvalmennussarja' },
]

const enServices = [
  { href: '/annual-leadership-program', label: 'Annual Leadership Program' },
  { href: '/leadership-communication-intensive', label: 'Leadership Communication Intensive' },
  { href: '/thought-leader-studio', label: 'Thought Leader Studio' },
  { href: '/impact-session', label: 'Impact Session' },
  { href: '/keynotes', label: 'Keynote Speaking' },
  { href: '/coaching-series', label: 'Leadership Impact & Capability Series' },
]

const fiIndividuals = [
  { href: '/fi/vaikuttavuussessio', label: 'Impact Session' },
  { href: '/fi/valmennussarja', label: 'Johtajavaikuttavuus- ja toimintakykyvalmennussarja' },
]

const enIndividuals = [
  { href: '/impact-session', label: 'Impact Session' },
  { href: '/coaching-series', label: 'Leadership Impact & Capability Series' },
]

function LangSwitcher() {
  const pathname = usePathname()
  const isFi = isFinRoute(pathname)
  const alternate = getAlternateRoute(pathname)

  return (
    <Link
      href={alternate.href}
      className="text-xs tracking-widest transition-colors duration-200"
      style={{
        fontFamily: 'var(--font-body)',
        color: 'var(--color-subtle)',
        letterSpacing: '0.12em',
        padding: '4px 0',
        textDecoration: 'none',
        borderBottom: '1px solid var(--color-border)',
      }}
      aria-label={isFi ? 'Switch to English' : 'Vaihda suomeksi'}
    >
      {isFi ? 'EN' : 'FI'}
    </Link>
  )
}

function DropdownItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{
        display: 'block',
        padding: '10px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'var(--color-muted)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid var(--color-border)',
        transition: 'color 0.15s, background 0.15s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.color = 'var(--color-blue)'
        ;(e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-surface)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'
        ;(e.currentTarget as HTMLElement).style.backgroundColor = ''
      }}
    >
      {label}
    </Link>
  )
}

function NavDropdown({
  label,
  href,
  items,
  active,
}: {
  label: string
  href: string
  items: { href: string; label: string }[]
  active: boolean
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <Link
        href={href}
        className="text-sm tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-body)',
          color: active ? 'var(--color-blue)' : 'var(--color-muted)',
          fontWeight: active ? 500 : 400,
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          textDecoration: 'none',
        }}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
            opacity: 0.5,
            flexShrink: 0,
          }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 12px)',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            border: '1px solid var(--color-border)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            zIndex: 100,
            minWidth: '280px',
          }}
        >
          {items.map(item => (
            <DropdownItem key={item.href} href={item.href} label={item.label} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const isFi = isFinRoute(pathname)
  const contactHref = isFi ? '/fi/ota-yhteytta' : '/contact'
  const contactLabel = isFi ? 'Ota yhteyttä' : 'Start a conversation'

  const [open, setOpen] = useState(false)
  const [mobileOrgOpen, setMobileOrgOpen] = useState(false)
  const [mobileIndOpen, setMobileIndOpen] = useState(false)

  const orgHref = isFi ? '/fi/organisaatioille' : '/for-organisations'
  const orgLabel = isFi ? 'Organisaatioille' : 'For Organizations'
  const orgItems = isFi ? fiServices : enServices

  const indHref = isFi ? '/fi/yksiloille' : '/for-individuals'
  const indLabel = isFi ? 'Johtajille' : 'For Individuals'
  const indItems = isFi ? fiIndividuals : enIndividuals

  const aboutHref = isFi ? '/fi/tietoa' : '/about'
  const aboutLabel = isFi ? 'Meistä' : 'About'

  const orgActive = pathname.startsWith(orgHref) || orgItems.some(i => pathname.startsWith(i.href))
  const indActive = pathname.startsWith(indHref) || indItems.some(i => pathname.startsWith(i.href))

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#fff', borderBottom: '1px solid var(--color-border)' }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 py-3"
        style={{ maxWidth: '1200px' }}
      >
        {/* Logo */}
        <Link href={isFi ? '/fi' : '/en'} aria-label="Diamon Finland — Home" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/diamon-logo.png" alt="Diamon Finland" style={{ height: '36px', width: 'auto', display: 'block' }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5" aria-label="Main navigation">
          <NavDropdown label={orgLabel} href={orgHref} items={orgItems} active={orgActive} />
          <NavDropdown label={indLabel} href={indHref} items={indItems} active={indActive} />
          <Link
            href={aboutHref}
            className="text-sm tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-body)',
              color: pathname.startsWith(aboutHref) ? 'var(--color-blue)' : 'var(--color-muted)',
              fontWeight: pathname.startsWith(aboutHref) ? 500 : 400,
              textDecoration: 'none',
            }}
          >
            {aboutLabel}
          </Link>
        </nav>

        {/* Desktop right: lang switcher + CTA */}
        <div className="hidden xl:flex items-center gap-5">
          <LangSwitcher />
          <Link
            href={contactHref}
            className="text-sm whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-body)',
              backgroundColor: 'var(--color-blue)',
              color: '#fff',
              padding: '9px 20px',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              fontWeight: 400,
            }}
          >
            {contactLabel}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="xl:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--color-text)', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--color-text)', opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: 'var(--color-text)', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="xl:hidden px-6 pb-6 flex flex-col gap-1"
          style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}
          aria-label="Mobile navigation"
        >
          {/* Organisaatioille / For Organizations */}
          <button
            onClick={() => setMobileOrgOpen(!mobileOrgOpen)}
            className="text-sm tracking-wide cursor-pointer text-left flex items-center justify-between py-2"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', background: 'none', border: 'none', width: '100%' }}
          >
            {orgLabel}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: mobileOrgOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', opacity: 0.5 }}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileOrgOpen && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {orgItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm py-1.5"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Johtajille / For Individuals */}
          <button
            onClick={() => setMobileIndOpen(!mobileIndOpen)}
            className="text-sm tracking-wide cursor-pointer text-left flex items-center justify-between py-2"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', background: 'none', border: 'none', width: '100%' }}
          >
            {indLabel}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: mobileIndOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', opacity: 0.5 }}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {mobileIndOpen && (
            <div className="flex flex-col gap-1 pl-4 mb-2">
              {indItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm py-1.5"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href={aboutHref}
            onClick={() => setOpen(false)}
            className="text-sm tracking-wide cursor-pointer py-2"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)', textDecoration: 'none' }}
          >
            {aboutLabel}
          </Link>

          <div className="flex items-center gap-5 mt-3">
            <LangSwitcher />
            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="text-sm"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: 'var(--color-blue)',
                color: '#fff',
                padding: '10px 20px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
              }}
            >
              {contactLabel}
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
