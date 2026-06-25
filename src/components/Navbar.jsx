import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const ref = useRef()

  useEffect(() => {
    gsap.from(ref.current, {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
    })
  }, [])

  return (
    <nav ref={ref} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1.5rem 8vw',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(56,191,255,0.08)',
    }}>
      <span style={{
        fontSize: '0.75rem',
        letterSpacing: '0.3em',
        color: 'var(--cyan)',
        fontWeight: 700,
      }}>WS</span>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {['Work', 'About', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >{item}</a>
        ))}
      </div>
    </nav>
  )
}
