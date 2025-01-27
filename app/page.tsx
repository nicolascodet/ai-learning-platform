import React from 'react'

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 animate-gradient-xy"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      
      {/* Main content with glassmorphism */}
      <div className="relative z-10 text-center p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <h1 className="text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-text sm:text-7xl md:text-8xl">
          <span className="block transform hover:scale-105 transition-transform">NEURAL</span>
          <span className="block transform hover:scale-105 transition-transform">NEXUS</span>
        </h1>
        
        <p className="mt-6 text-xl text-gray-300 sm:max-w-2xl mx-auto leading-relaxed">
          <span className="font-mono">Dive into the quantum realm of AI development.</span>
          <br />
          <span className="font-mono text-indigo-300">Where code meets consciousness.</span>
        </p>

        {/* Cyberpunk-style buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/items"
            className="group relative px-8 py-4 w-64 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <div className="absolute inset-0 h-full w-full bg-white/20 transition-all duration-200 group-hover:bg-white/30"></div>
            <span className="relative font-mono font-bold tracking-wider">EXPLORE MATRIX</span>
          </a>
          
          <a
            href="/health"
            className="group relative px-8 py-4 w-64 overflow-hidden rounded-lg bg-black text-white border border-indigo-500 shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:border-purple-500"
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-indigo-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30"></div>
            <span className="relative font-mono font-bold tracking-wider">CHECK VITALS</span>
          </a>
        </div>
      </div>

      {/* Tech decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </div>
  )
} 