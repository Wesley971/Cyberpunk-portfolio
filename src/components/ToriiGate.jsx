import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ToriiGate() {
  const mountRef = useRef()

  useEffect(() => {
    const el = mountRef.current
    const W = el.clientWidth
    const H = el.clientHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // Materials
    const cyanMat = new THREE.LineBasicMaterial({ color: 0x38BFFF, transparent: true, opacity: 0.9 })
    const magentaMat = new THREE.LineBasicMaterial({ color: 0xD4257A, transparent: true, opacity: 0.7 })

    // Helper to make a box wireframe segment
    function makeBox(w, h, d, mat) {
      const geo = new THREE.BoxGeometry(w, h, d)
      const edges = new THREE.EdgesGeometry(geo)
      return new THREE.LineSegments(edges, mat)
    }

    // Torii group
    const torii = new THREE.Group()

    // Two vertical pillars
    const pillarL = makeBox(0.18, 3.2, 0.18, cyanMat)
    pillarL.position.set(-1.1, -0.4, 0)
    const pillarR = makeBox(0.18, 3.2, 0.18, cyanMat)
    pillarR.position.set(1.1, -0.4, 0)

    // Top horizontal beam (kasagi) - curved effect with 3 boxes
    const kasagi = makeBox(2.8, 0.22, 0.22, magentaMat)
    kasagi.position.set(0, 1.2, 0)

    // Second beam (nuki) slightly lower
    const nuki = makeBox(2.3, 0.14, 0.14, cyanMat)
    nuki.position.set(0, 0.7, 0)

    // Small cap pieces on top of pillars
    const capL = makeBox(0.28, 0.12, 0.28, magentaMat)
    capL.position.set(-1.1, 1.05, 0)
    const capR = makeBox(0.28, 0.12, 0.28, magentaMat)
    capR.position.set(1.1, 1.05, 0)

    // Shimagi (decorative top beam that extends beyond)
    const shimagi = makeBox(3.2, 0.14, 0.14, magentaMat)
    shimagi.position.set(0, 1.42, 0)

    torii.add(pillarL, pillarR, kasagi, nuki, capL, capR, shimagi)
    scene.add(torii)

    // Floating particles around the gate
    const particleCount = 120
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const pVelocities = []

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 5
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2
      pVelocities.push({
        x: (Math.random() - 0.5) * 0.005,
        y: 0.004 + Math.random() * 0.006,
      })
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0x38BFFF,
      size: 0.03,
      transparent: true,
      opacity: 0.7,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0
    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / W - 0.5) * 2
      mouseY = -((e.clientY - rect.top) / H - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouse)

    // Animation
    let frameId
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Slow auto rotation + mouse influence
      torii.rotation.y = t * 0.15 + mouseX * 0.3
      torii.rotation.x = Math.sin(t * 0.3) * 0.08 + mouseY * 0.15

      // Float up/down
      torii.position.y = Math.sin(t * 0.5) * 0.12

      // Particles drift upward and reset
      const pos = particles.geometry.attributes.position.array
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += pVelocities[i].x
        pos[i * 3 + 1] += pVelocities[i].y
        if (pos[i * 3 + 1] > 2.8) {
          pos[i * 3 + 1] = -2.8
          pos[i * 3] = (Math.random() - 0.5) * 5
        }
      }
      particles.geometry.attributes.position.needsUpdate = true

      // Pulse opacity on nuki
      nuki.material.opacity = 0.4 + Math.sin(t * 2) * 0.3

      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const handleResize = () => {
      const W2 = el.clientWidth
      const H2 = el.clientHeight
      camera.aspect = W2 / H2
      camera.updateProjectionMatrix()
      renderer.setSize(W2, H2)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div ref={mountRef} style={{
      width: '100%',
      height: '100%',
      position: 'relative',
    }} />
  )
}
