import React from 'react'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 neon-glow">
        Creative Developer
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Crafting immersive & futuristic web experiences
      </p>
      <button className="mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 transition rounded shadow-lg neon-button">
        VIEW MY WORK
      </button>
    </section>
  )
}
