import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ToriiGate from './ToriiGate'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef()
  const line1Ref = useRef()
  const line2Ref = useRef()
  const line3Ref = useRef()
  const subRef = useRef()
  const tagsRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.to([line1Ref.current, line2Ref.current, line3Ref.current], {
      y: 0,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.12,
    })
    .to(subRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
    }, '-=0.5')
    .to(tagsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
  }, [])

  return (
    <section ref={sectionRef} style={{
      minHeight: '100vh',
      padding: '0 8vw',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      alignItems: 'center',
      gap: '4rem',
      paddingTop: '80px',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.35,
        zIndex: 0,
      }} />

      {/* Left: text */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '2.5rem' }}>
          {[
            { ref: line1Ref, text: 'FULL', color: 'var(--text)', size: 'clamp(4rem, 9vw, 8rem)' },
            { ref: line2Ref, text: 'STACK', color: 'var(--cyan)', size: 'clamp(4rem, 9vw, 8rem)' },
            { ref: line3Ref, text: 'DEV.', color: 'var(--text)', size: 'clamp(4rem, 9vw, 8rem)' },
          ].map(({ ref, text, color, size }) => (
            <div key={text} className="reveal-wrap">
              <span ref={ref} className="reveal-text" style={{
                fontSize: size,
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 0.95,
                color,
                display: 'block',
              }}>{text}</span>
            </div>
          ))}
        </div>

        <div ref={subRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            maxWidth: '380px',
            marginBottom: '2rem',
          }}>
            Wesley — développeur Full Stack TypeScript.<br />
            React · NestJS · Docker · Prisma.
          </p>
        </div>

        <div ref={tagsRef} style={{
          opacity: 0,
          transform: 'translateY(20px)',
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}>
          {['React', 'NestJS', 'TypeScript', 'Docker', 'Prisma'].map(tag => (
            <span key={tag} style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              padding: '0.4rem 0.9rem',
              border: '1px solid rgba(56,191,255,0.25)',
              color: 'var(--cyan)',
              borderRadius: '2px',
              textTransform: 'uppercase',
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Right: 3D Torii */}
      <div style={{ position: 'relative', zIndex: 1, height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ToriiGate />
      </div>
    </section>
  )
}
