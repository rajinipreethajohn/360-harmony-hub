'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#f9f5eecc] via-[#e6c792cc] to-[#1b1b3acc] shadow-sm border-b border-[#e6c79233]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-[#1b1b3a] tracking-wide">
          360 Harmony Hub
        </h1>
        <div className="space-x-6">
          <a href="/newsletter" className="hover:text-[#e6c792] transition">Newsletter</a>
          <a href="/about" className="hover:text-[#e6c792] transition">About</a>
        </div>
      </div>
    </nav>
  )
}

