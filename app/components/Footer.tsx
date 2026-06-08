import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="mt-auto px-6 py-12"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: '1200px' }}
      >
        <div>
          <p
            className="text-sm tracking-[0.25em] uppercase font-medium mb-2"
            style={{ fontFamily: 'var(--font-inter)', color: 'var(--color-text)' }}
          >
            DIAMON
          </p>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            Leadership Communication Architecture
          </p>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
          {[
            { href: '/about', label: 'About' },
            { href: '/framework', label: 'Framework' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="link-muted text-sm"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs" style={{ color: 'var(--color-subtle)' }}>
          &copy; {new Date().getFullYear()} Diamon Finland Oy
        </p>
      </div>
    </footer>
  )
}
