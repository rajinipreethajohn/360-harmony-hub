'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#b59b79]/80 to-[#2e2939]/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Site Title */}
        <Link href="/" className="text-lg font-semibold text-[#1c1b2b] hover:text-[#4b3f32] transition duration-300">
          360 Harmony Hub
        </Link>
    <div className="space-x-6 md:space-x-8 flex items-center">
      <a
        href="/newsletter"
        className="relative text-sm md:text-base text-[#1c1b2b] font-medium transition duration-300 hover:text-[#e6c792]"
      >
        Newsletter
        <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#e6c792] transition-all duration-300 hover:w-full"></span>
      </a>
      <a
        href="/about"
        className="relative text-sm md:text-base text-[#1c1b2b] font-medium transition duration-300 hover:text-[#e6c792]"
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#e6c792] transition-all duration-300 hover:w-full"></span>
      </a>
    </div>
  </div>
</nav>

  )
}

