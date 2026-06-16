'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { getAlternateRoute, isFinRoute } from '../lib/langRoutes'

const enLinks = [
  { href: '/for-individuals', label: 'For Individuals' },
  { href: '/for-organisations', label: 'For Organisations' },
  { href: '/executive-programmes', label: 'Programmes' },
  { href: '/framework', label: 'ICA Framework' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
]

const fiLinks = [
  { href: '/fi/yksiloille', label: 'Yksilöille' },
  { href: '/fi/organisaatioille', label: 'Organisaatioille' },
  { href: '/fi/ohjelmat', label: 'Ohjelmat' },
  { href: '/fi/ica-viitekehys', label: 'ICA-viitekehys' },
  { href: '/fi/nakemyksia', label: 'Näkemyksiä' },
  { href: '/fi/tietoa', label: 'Tietoa' },
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

export default function Nav() {
  const pathname = usePathname()
  const isFi = isFinRoute(pathname)
  const links = isFi ? fiLinks : enLinks
  const contactHref = isFi ? '/fi/ota-yhteytta' : '/contact'
  const contactLabel = isFi ? 'Ota yhteyttä' : 'Start a conversation'

  const [open, setOpen] = useState(false)

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
        <Link href={isFi ? '/fi' : '/'} aria-label="Diamon Finland — Home" style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/diamon-logo.png" alt="Diamon Finland" style={{ height: '36px', width: 'auto', display: 'block' }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: 'var(--font-body)',
                color: pathname.startsWith(href) ? 'var(--color-blue)' : 'var(--color-muted)',
                fontWeight: pathname.startsWith(href) ? 500 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop right: lang switcher + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <LangSwitcher />
          <Link
            href={contactHref}
            className="text-sm"
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
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2"
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
          className="lg:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide cursor-pointer"
              style={{
                fontFamily: 'var(--font-body)',
                color: pathname.startsWith(href) ? 'var(--color-blue)' : 'var(--color-muted)',
              }}
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-5 mt-2">
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
