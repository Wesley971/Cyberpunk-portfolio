import { useEffect } from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const ring = document.querySelector('.cursor-ring')
    if (!cursor || !ring) return

    const move = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor" />
      <div className="cursor-ring" />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
