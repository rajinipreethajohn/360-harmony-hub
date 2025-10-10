'use client';

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8e9c9] to-[#e6c792]/40 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif font-bold mb-4"
        >
          Welcome to <span className="text-[#1c1b2b]">360 Harmony Hub</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg italic text-gray-700 mb-8"
        >
          Where modern life meets mindful living 🌿
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-800 mb-10"
        >
          Find harmony between your <b>Yin and Yang</b> — between rest and renewal,
          strength and softness. Let awareness guide your rhythm and grace shape
          your journey.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/newsletter"
            className="px-6 py-3 rounded-full bg-[#1c1b2b] text-[#f8f5e6] font-semibold hover:bg-[#2d2b3d] transition"
          >
            Read This Week’s Newsletter
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full border border-[#1c1b2b] text-[#1c1b2b] font-semibold hover:bg-[#1c1b2b] hover:text-[#f8f5e6] transition"
          >
            About 360 Harmony Hub
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">360 Harmony Hub</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          360 Harmony Hub is a sanctuary for the spiritually awakened modern soul —
          a space where <b>mindfulness</b>, <b>wellness</b>, and
          <b> wisdom</b> converge. Every week, we explore how celestial rhythms can
          inspire inner balance, empowering both <i>strength</i> and <i>softness </i>
          in daily life.
        </p>
      </section>

      {/* Weekly Theme Snapshot */}
      <section className="bg-[#f9f5e6]/80 py-16 px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">✨ This Week’s Theme</h3>
        <p className="text-lg italic text-gray-700 mb-6">
          <b>Balance in Motion — Grace Between Strength and Softness</b>
        </p>
        <Link
          href="/newsletter"
          className="px-6 py-2 rounded-full bg-[#1c1b2b] text-[#f8f5e6] font-semibold hover:bg-[#2d2b3d] transition"
        >
          Read the Full Edition
        </Link>
      </section>

      {/* Six Harmony Sections Preview */}
<section className="max-w-5xl mx-auto px-6 py-20">
  <h2 className="text-2xl font-serif font-bold text-center mb-10">
    Explore the Six Realms of Harmony 🌸
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Celestial Insights",
        description:
          "Trace the rhythm of the stars and the pull of the moon. Learn how cosmic shifts shape your emotions, intentions, and flow.",
      },
      {
        title: "Sacred Wellness",
        description:
          "Nourish your body as a temple of light. Explore rituals, herbs, and mindful practices for holistic vitality.",
      },
      {
        title: "Restful Rhythms",
        description:
          "Sink into the softness of stillness. Discover how sleep, breath, and silence restore your spirit.",
      },
      {
        title: "Financial Wisdom",
        description:
          "Redefine abundance through conscious living. Align your energy with prosperity that sustains, not drains.",
      },
      {
        title: "Meditation Focus",
        description:
          "Return to your inner sanctuary. Breathe, pause, and awaken awareness beyond the noise.",
      },
      {
        title: "Sacred Affirmation",
        description:
          "Rewrite your inner narrative with compassion. Let your words become the bridge between thought and transformation.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="rounded-2xl bg-[#fefaf2] shadow-md border border-[#e6c792]/50 p-6 text-center hover:shadow-xl hover:scale-[1.02] transition"
      >
        <h3 className="text-lg font-semibold text-[#1c1b2b] mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Footer Quote */}
      <footer className="print-only text-center mt-12 text-sm italic text-[#5c5244]">
  Visit us at <a href="https://360harmonyhub.netlify.app">https://360harmonyhub.netlify.app</a>
</footer>


    </main>
  );
}
