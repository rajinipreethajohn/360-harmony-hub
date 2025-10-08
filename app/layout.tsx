import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '360 Harmony Hub',
  description: 'Where science meets soul — a mindful fusion of data, design, and dharma.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-gray-900">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-12 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

