import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const contentRef = useRef()

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
    gsap.to(contentRef.current, {
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
    <section id="contact" ref={sectionRef} style={{
      minHeight: '60vh',
      padding: '120px 8vw',
      borderTop: '1px solid rgba(56,191,255,0.08)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <div className="reveal-wrap" style={{ marginBottom: '3rem' }}>
        <h2 ref={titleRef} className="reveal-text" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          On se<br />
          <span style={{ color: 'var(--cyan)' }}>parle ?</span>
        </h2>
      </div>

      <div ref={contentRef} style={{
        opacity: 0,
        transform: 'translateY(30px)',
      }}>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          maxWidth: '500px',
          marginBottom: '3rem',
        }}>
          Disponible pour des opportunités CDI en Île-de-France,
          remote ou hybride. Junior Full Stack TypeScript.
        </p>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="mailto:abdoulwes@gmail.com" style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            color: 'var(--cyan)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(56,191,255,0.3)',
            paddingBottom: '0.25rem',
            transition: 'border-color 0.3s',
          }}>Email</a>

          <a href="https://github.com/Wesley971" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(107,107,138,0.3)',
            paddingBottom: '0.25rem',
            transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => { e.target.style.color = 'var(--cyan)'; e.target.style.borderColor = 'rgba(56,191,255,0.3)' }}
          onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.borderColor = 'rgba(107,107,138,0.3)' }}
          >GitHub</a>

          <a href="https://linkedin.com/in/wesley-dev" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(107,107,138,0.3)',
            paddingBottom: '0.25rem',
            transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => { e.target.style.color = 'var(--cyan)'; e.target.style.borderColor = 'rgba(56,191,255,0.3)' }}
          onMouseLeave={e => { e.target.style.color = 'var(--text-muted)'; e.target.style.borderColor = 'rgba(107,107,138,0.3)' }}
          >LinkedIn</a>
        </div>

        <div style={{
          marginTop: '6rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(56,191,255,0.06)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
          opacity: 0.5,
        }}>
          © 2026 WESLEY — BUILT WITH THREE.JS + GSAP + REACT
        </div>
      </div>
    </section>
  )
}
