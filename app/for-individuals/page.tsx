import type { Metadata } from 'next'
import Link from 'next/link'
import ProfileMap from '../components/ProfileMap'

export const metadata: Metadata = {
  title: 'For Individuals — DIAMON Finland',
  description:
    'Personal leadership communication coaching for CEOs, executives, entrepreneurs, board professionals and experts. Build the communication performance that your role demands.',
}

const audiences = [
  { role: 'CEOs & Managing Directors', desc: 'Lead with clarity, build trust at board and stakeholder level, communicate strategy that creates alignment.' },
  { role: 'Executives & Senior Leaders', desc: 'Strengthen executive presence, lead high-stakes conversations, perform consistently under pressure.' },
  { role: 'Entrepreneurs & Founders', desc: 'Develop the communication authority that matches your expertise — with investors, media, teams and customers.' },
  { role: 'Board Professionals', desc: 'Command the room, structure complex arguments, lead board dynamics with precision and calm.' },
  { role: 'Elite Sports Coaches', desc: 'Transfer performance methodology to leadership communication — the same discipline, a different arena.' },
  { role: 'Public Speakers & Experts', desc: 'Build a consistent, credible communication profile across keynotes, media, digital and live performance.' },
  { role: 'Thought Leaders in Development', desc: 'Create a strategic personal communication platform that turns expertise into visible, measurable authority.' },
  { role: 'Professional Coaches', desc: 'Deepen your own communication competency and integrate the ICA Framework into your coaching practice.' },
]

const offerings = [
  {
    id: '01',
    title: 'Executive Communication Coaching',
    duration: 'Ongoing — structured programme',
    desc: 'A personal coaching engagement built around the DIAMON ICA Framework™. We develop your communication identity, strengthen your message architecture and build execution capability for high-stakes situations.',
    outcomes: ['Personal ICA communication profile', 'Strategic narrative system', 'Executive presence under pressure'],
  },
  {
    id: '02',
    title: 'Leadership Communication Programme',
    duration: '12-month development journey',
    desc: 'A structured annual programme combining the full ICA Framework with regular coaching sessions, progress reviews and continuous development. For leaders who treat communication as strategic infrastructure.',
    outcomes: ['Full ICA I–III development', '6 deep-dive coaching sessions', 'Communication performance tracking'],
  },
  {
    id: '03',
    title: 'Executive Presence Development',
    duration: 'Focused engagement — flexible format',
    desc: 'Develop the physical, attentional and verbal dimensions of executive presence. Based on ICA III — K3™ (Body, Focus, Language) — this engagement targets how you show up, hold the room and lead interaction.',
    outcomes: ['K3™ presence architecture', 'Performance under pressure', 'Interaction leadership'],
  },
  {
    id: '04',
    title: 'Communication Under Pressure',
    duration: 'Intensive — 1 or 2 days',
    desc: 'Performance psychology meets communication execution. Designed for leaders in high-pressure roles: crisis communication, board-level performance, investor interaction, media exposure, critical negotiations.',
    outcomes: ['Pressure communication system', 'ICA state management', 'Real-situation performance'],
  },
  {
    id: '05',
    title: 'Media & Camera Training',
    duration: 'Session-based — remote or studio',
    desc: 'For executives and experts preparing for media interviews, podcast appearances, keynote delivery or video-first communication. Camera presence, message discipline and media interaction — structured and practical.',
    outcomes: ['Camera and media presence', 'Message control under questioning', 'Video communication platform'],
  },
  {
    id: '06',
    title: 'Thought Leadership Development',
    duration: 'Ongoing — structured programme',
    desc: 'Build a strategic personal communication platform that turns your expertise into consistent, credible and visible thought leadership. Combines ICA coaching with strategic content direction and platform development.',
    outcomes: ['Personal thought leadership profile', 'Content and communication strategy', 'Visibility and authority platform'],
  },
]

export default function ForIndividualsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-6 pt-40 pb-24 flex flex-col justify-center"
        style={{ backgroundColor: 'var(--color-blue)', minHeight: '70vh' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-body)' }}>
            For Individuals
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light mb-8"
            style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.05, maxWidth: '820px' }}
          >
            Your communication should perform
            <span style={{ fontStyle: 'italic', opacity: 0.8 }}> at the level of your role.</span>
          </h1>
          <p
            className="text-lg font-light mb-12"
            style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-body)', lineHeight: 1.8, maxWidth: '580px' }}
          >
            Personal leadership communication coaching for executives, entrepreneurs, experts and high-performance professionals who want to close the gap between their capability and how it lands.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>
              Book a consultation
            </Link>
            <Link href="/framework" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.875rem', padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em' }}>
              The ICA Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Who this is for
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {audiences.map(({ role, desc }) => (
            <div key={role} className="p-7 flex flex-col gap-3" style={{ backgroundColor: 'var(--color-background)' }}>
              <h3 className="text-base font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.3 }}>{role}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* The development approach */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
              The approach
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
              This is not presentation training.
              <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> This is communication architecture.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              Every individual engagement is grounded in the DIAMON ICA Framework™ — a proprietary methodology that develops communication capability across three integrated levels: Identity, Composition and Action.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              The work is not about public speaking technique. It is about building a personal communication system that performs consistently — across contexts, under pressure, and at the level that leadership demands.
            </p>
            <Link href="/framework" className="link-blue text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Explore the ICA Framework →
            </Link>
          </div>
          <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
            {[
              { label: 'ICA I — Identity', model: 'DCI™', desc: 'Who you are as a communicator. Your credibility, your presence, your professional communication identity.' },
              { label: 'ICA II — Composition', model: 'TNT™', desc: 'How you construct impactful communication. State, narrative, structure and strategic intention.' },
              { label: 'ICA III — Action', model: 'K3™', desc: 'How you perform in real situations. Body, focus, language — execution under pressure.' },
            ].map(({ label, model, desc }) => (
              <div key={label} className="px-7 py-6 flex flex-col gap-2" style={{ backgroundColor: 'var(--color-background)' }}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{label}</span>
                  <span className="text-xs" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{model}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Leadership Communication Profile Map */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          A coaching profile
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>
            What individual DIAMON coaching
            <span style={{ fontStyle: 'italic', color: 'var(--color-blue)' }}> looks like in practice.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
            Every individual engagement produces a structured Leadership Communication Profile — a living document that maps your development across the full ICA Framework. Select any component to explore what each part of the profile addresses.
          </p>
        </div>
        <ProfileMap />
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* Offerings */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          Individual offerings
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-16" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2, maxWidth: '600px' }}>
          Structured for where you are. Built for where you are going.
        </h2>
        <div className="flex flex-col gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {offerings.map((o) => (
            <div key={o.id} className="grid md:grid-cols-3 gap-0" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs tracking-widest block mb-3" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{o.id}</span>
                <h3 className="text-xl font-light mb-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', lineHeight: 1.2 }}>{o.title}</h3>
                <span className="text-xs" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>{o.duration}</span>
              </div>
              <div className="px-8 py-8 md:border-r" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{o.desc}</p>
              </div>
              <div className="px-8 py-8">
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>Outcomes</p>
                <div className="flex flex-col gap-2">
                  {o.outcomes.map((out) => (
                    <div key={out} className="flex items-start gap-3">
                      <span style={{ color: 'var(--color-blue)', fontSize: '0.75rem', marginTop: '1px', flexShrink: 0 }}>—</span>
                      <span className="text-xs leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* How it works */}
      <section className="px-6 py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--color-subtle)', fontFamily: 'var(--font-body)' }}>
          How it works
        </p>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--color-border)' }}>
          {[
            { step: '1', title: 'ICA Baseline', body: 'We begin with a precise assessment of your current communication identity, architecture and performance across all three ICA levels.' },
            { step: '2', title: 'Programme design', body: 'Based on your role, goals and specific communication challenges, we design a personalised development programme.' },
            { step: '3', title: 'Development and performance', body: 'Structured coaching, real-situation practice, progress reviews and continuous refinement — built for measurable change.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="p-8 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-background)' }}>
              <span className="text-xs tracking-widest" style={{ color: 'var(--color-blue)', fontFamily: 'var(--font-body)' }}>{step}</span>
              <h3 className="text-xl font-light" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-6" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', backgroundColor: 'var(--color-border)' }} />
      </div>

      {/* CTA */}
      <section className="px-6 py-20" style={{ backgroundColor: 'var(--color-blue)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#fff', lineHeight: 1.3, maxWidth: '480px' }}>
              The first conversation is a diagnostic.
            </h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>
              We identify the specific gap before proposing anything.
            </p>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', backgroundColor: '#fff', color: 'var(--color-blue)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 500, padding: '14px 28px', textDecoration: 'none', letterSpacing: '0.05em', flexShrink: 0 }}>
            Book a consultation
          </Link>
        </div>
      </section>
    </>
  )
}
