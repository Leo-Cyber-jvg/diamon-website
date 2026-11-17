import Link from 'next/link'

export default function Footer({ lang = 'en' }: { lang?: 'en' | 'fi' }) {
  const isFi = lang === 'fi'
  return (
    <footer className="mt-auto" style={{ borderTop: '1px solid var(--color-border)' }}>

      {/* ── What's On strip ── */}
      <div className="px-6 py-8" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div
          className="mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ maxWidth: '1200px' }}
        >
          <div>
            <p className="text-xs tracking-[0.22em] uppercase mb-1" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              {isFi ? 'Ajankohtaista' : "What's on"}
            </p>
            <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              {isFi
                ? 'Johtajan vaikuttavuus ja toimintakyky — valmennussarja 2027'
                : 'Leadership Impact and Performance — coaching series 2027'}
            </p>
          </div>
          <Link
            href={isFi ? '/fi/valmennussarja' : '/coaching-series'}
            style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', borderBottom: '1px solid rgba(86,86,214,0.35)', paddingBottom: '3px', whiteSpace: 'nowrap', textDecoration: 'none', flexShrink: 0 }}
          >
            {isFi ? 'Lue lisää ja ilmoittaudu →' : 'Read more and register →'}
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-6 py-10">
        <div
          className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ maxWidth: '1200px' }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diamon-logo.png"
              alt="Diamon Finland"
              style={{ height: '28px', width: 'auto', display: 'block', marginBottom: '8px' }}
            />
            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
              Leadership Communication Architecture
            </p>
          </div>

          <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
            {[
              { href: '/privacy', label: 'Privacy' },
              { href: '/cookies', label: 'Cookies' },
              { href: '/settings', label: 'Settings' },
              { href: '/faq', label: 'FAQ' },
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
            &copy; 2026 Diamon Finland
          </p>
        </div>
      </div>
    </footer>
  )
}
