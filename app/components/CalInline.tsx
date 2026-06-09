'use client'

import { useEffect, useRef } from 'react'

declare global {
  // Cal.com embed global
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any
  }
}

export default function CalInline({ calLink }: { calLink: string }) {
  const ready = useRef(false)

  useEffect(() => {
    if (ready.current) return
    ready.current = true

    // Inline Cal.com embed bootstrap (from their official snippet)
    ;(function (C: Window, A: string, L: string) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = (a: any, ar: any) => { a.q.push(ar) }
      const d = C.document
      if (!C.Cal) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        C.Cal = function (...args: any[]) {
          const cal = C.Cal!
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            const s = d.createElement('script')
            s.src = A
            s.async = true
            d.head.appendChild(s)
            cal.loaded = true
          }
          if (args[0] === L) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const api: any = function (...a: any[]) { p(api, a) }
            const ns = args[1]
            api.q = api.q || []
            if (typeof ns === 'string') {
              cal.ns[ns] = cal.ns[ns] || api
              p(cal.ns[ns], args)
              p(cal, ['-', args])
            } else {
              p(cal, args)
            }
            return api
          }
          p(cal, args)
        }
        C.Cal.q = C.Cal.q || []
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal!('init', { origin: 'https://app.cal.com' })

    window.Cal!('inline', {
      elementOrSelector: '#diamon-cal-inline',
      calLink,
      layout: 'month_view',
    })

    window.Cal!('ui', {
      styles: { branding: { brandColor: '#5656D6' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [calLink])

  return (
    <div
      id="diamon-cal-inline"
      style={{
        width: '100%',
        height: '700px',
        overflow: 'auto',
        // Subtle border to contain the widget within the DIAMON layout
        border: '1px solid var(--color-border)',
        backgroundColor: '#fff',
      }}
    />
  )
}
