import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Diamon Finland — Johtamisviestintä',
  description:
    'Tavoitteellista esiintymis- ja vuorovaikutusvalmennusta johtajille ja organisaatioille. Kehitämme viestinnällistä toimintakykyä kohdennetusti, tavoitteellisesti ja pitkäjänteisesti.',
  openGraph: {
    title: 'Diamon Finland',
    description: 'Tavoitteellista esiintymis- ja vuorovaikutusvalmennusta johtajille ja organisaatioille.',
    url: 'https://diamon.fi',
    siteName: 'Diamon Finland',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
