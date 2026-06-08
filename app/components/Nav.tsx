'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/framework', label: 'Framework' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(13,12,11,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 py-4"
        style={{ maxWidth: '1200px' }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="text-sm tracking-[0.25em] uppercase font-medium transition-opacity duration-200 hover:opacity-70"
          style={{ fontFamily: 'var(--font-inter)', color: 'var(--color-text)' }}
          aria-label="Diamon Finland — Home"
        >
          DIAMON
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: 'var(--font-inter)',
                color: pathname === href ? 'var(--color-gold)' : 'var(--color-muted)',
              }}
              onMouseEnter={e => {
                if (pathname !== href) (e.currentTarget as HTMLElement).style.color = 'var(--color-text)'
              }}
              onMouseLeave={e => {
                if (pathname !== href) (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)'
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-text)',
              transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-text)',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: 'var(--color-text)',
              transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: 'var(--font-inter)',
                color: pathname === href ? 'var(--color-gold)' : 'var(--color-muted)',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
