'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/about', label: 'About' },
  { href: '/blueprint', label: 'Blueprint' },
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
        backgroundColor: 'var(--color-blue)',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 py-3"
        style={{ maxWidth: '1200px' }}
      >
        {/* Logo — top left */}
        <Link href="/" aria-label="Diamon Finland — Home" style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diamon-logo.png"
            alt="Diamon Finland"
            style={{ height: '36px', width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-wide transition-colors duration-200 cursor-pointer"
              style={{
                fontFamily: 'var(--font-body)',
                color: pathname === href ? '#fff' : 'rgba(255,255,255,0.65)',
                fontWeight: pathname === href ? 500 : 400,
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
          <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: '#fff', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: '#fff', opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-px transition-all duration-200" style={{ backgroundColor: '#fff', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1rem' }}
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
                color: pathname === href ? '#fff' : 'rgba(255,255,255,0.65)',
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
