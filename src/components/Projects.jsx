import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    name: 'Lockr',
    desc: 'Application de gestion de documents sécurisée. Auth JWT, chiffrement, interface Aurora glassmorphism.',
    tags: ['NestJS', 'React', 'Prisma', 'MySQL', 'Docker'],
    color: '#38BFFF',
    link: 'https://github.com/Wesley971/Lockr',
  },
  {
    id: '02',
    name: 'My Bibs',
    desc: 'Application mobile de suivi pour parents. Animations Reanimated, export CSV, statistiques 7 jours.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    color: '#D4257A',
    link: '#',
  },
  {
    id: '03',
    name: 'Portfolio',
    desc: 'Ce portfolio. Three.js, GSAP ScrollTrigger, ambiance cyberpunk Tokyo.',
    tags: ['React', 'Three.js', 'GSAP', 'Tailwind'],
    color: '#7B4FFF',
    link: '#',
  },
]

function colorRgb(hex) {
  if (hex === '#38BFFF') return '56,191,255'
  if (hex === '#D4257A') return '212,37,122'
  return '123,79,255'
}

export default function Projects() {
  const sectionRef = useRef()
  const titleRef = useRef()
  const cardsRef = useRef([])

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

    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: i * 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        }
      })
    })
  }, [])

  return (
    <section id="work" ref={sectionRef} style={{
      minHeight: '100vh',
      padding: '120px 8vw',
      borderTop: '1px solid rgba(56,191,255,0.08)',
    }}>
      <div className="reveal-wrap" style={{ marginBottom: '4rem' }}>
        <h2 ref={titleRef} className="reveal-text" style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          Projets<span style={{ color: 'var(--cyan)' }}>.</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
      }}>
        {projects.map((p, i) => (
          <a
            key={p.id}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => cardsRef.current[i] = el}
            style={{
              opacity: 0,
              transform: 'translateY(40px)',
              textDecoration: 'none',
              display: 'block',
              padding: '2rem',
              border: `1px solid rgba(${colorRgb(p.color)},0.2)`,
              borderRadius: '4px',
              background: 'rgba(4,4,15,0.6)',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.3s, transform 0.3s',
              cursor: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = p.color
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = `rgba(${colorRgb(p.color)},0.2)`
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: p.color,
              marginBottom: '1rem',
            }}>{p.id}</div>

            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 900,
              color: '#e8e8f0',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
            }}>{p.name}</h3>

            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}>{p.desc}</p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.tags.map(tag => (
                <span key={tag} style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  padding: '0.25rem 0.6rem',
                  border: `1px solid rgba(${colorRgb(p.color)},0.3)`,
                  color: p.color,
                  borderRadius: '2px',
                  textTransform: 'uppercase',
                }}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
