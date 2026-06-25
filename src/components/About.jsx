import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const textRef = useRef()

  useEffect(() => {
    gsap.to(titleRef.current, {
      y: 0,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    })
    gsap.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    })
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{
      minHeight: '70vh',
      padding: '120px 8vw',
      borderTop: '1px solid rgba(56,191,255,0.08)',
    }}>
      <div className="reveal-wrap" style={{ marginBottom: '3rem' }}>
        <h2 ref={titleRef} className="reveal-text" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          Reconversion.<br />
          <span style={{ color: 'var(--cyan)' }}>Passion.</span><br />
          Code.
        </h2>
      </div>

      <div ref={textRef} style={{
        opacity: 0,
        transform: 'translateY(30px)',
        maxWidth: '600px',
      }}>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          marginBottom: '1.5rem',
        }}>
          9 ans chez SNCF. Une reconversion choisie, pas subie.
          Certifié CDA Niveau 6, je construis des applications
          full stack avec React, NestJS et Docker.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
        }}>
          Basé en Île-de-France. Disponible en remote ou hybride.
        </p>
      </div>
    </section>
  )
}
