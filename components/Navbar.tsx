'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f9f5e6] md:bg-gradient-to-r md:from-[#b59b79]/80 md:to-[#2e2939]/80 md:backdrop-blur-md shadow-md z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Site Title */}
        <Link
          href="/"
          className="text-lg font-semibold text-[#1c1b2b] hover:text-[#4b3f32] transition duration-300"
        >
          360 Harmony Hub
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: 'Home', href: '/' },
            { name: 'Newsletter', href: '/newsletter' },
            { name: 'About', href: '/about' },
            { name: 'Yoga', href: '/yoga' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm md:text-base text-[#1c1b2b] font-medium transition duration-300 hover:text-[#e6c792]"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#e6c792] transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1c1b2b] hover:text-[#e6c792] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {/* Mobile Drawer Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
  initial={{ x: '100%', opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: '100%', opacity: 0 }}
  transition={{ duration: 0.4, ease: 'easeInOut' }}
  className="fixed top-0 right-0 w-3/4 h-full bg-[#f9f5e6] border-l border-[#e6c792]/60 shadow-2xl flex flex-col items-center justify-center space-y-8 z-50 mobile-menu"

>
      {[
        { name: 'Home', href: '/' },
        { name: 'Newsletter', href: '/newsletter' },
        { name: 'About', href: '/about' },
        { name: 'Yoga', href: '/yoga' },
      ].map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className="text-xl font-serif text-[#1c1b2b] hover:text-[#b59b79] transition-all duration-300"
          whileHover={{ scale: 1.08 }}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}
