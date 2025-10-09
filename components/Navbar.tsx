'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#f9f5e6]/90 via-[#e6c792]/70 to-[#1c1b2b]/90 shadow-sm">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-lg font-semibold text-[#1b1b34] tracking-wide">
      360 Harmony Hub
    </h1>
    <div className="space-x-10 flex items-center">
      <a
        href="/newsletter"
        className="relative text-[1.05rem] text-[#1c1b2b] font-semibold tracking-wide transition duration-300 hover:text-[#e6c792]"
      >
        Newsletter
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e6c792] transition-all duration-300 hover:w-full"></span>
      </a>
      <a
        href="/about"
        className="relative text-[1.05rem] text-[#1c1b2b] font-semibold tracking-wide transition duration-300 hover:text-[#e6c792]"
      >
        About
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#e6c792] transition-all duration-300 hover:w-full"></span>
      </a>
    </div>
  </div>
</nav>
  )
}

