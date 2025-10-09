"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-center text-gray-900">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-serif font-bold mb-6"
      >
        About 360 Harmony Hub
      </motion.h1>

      {/* Subtitle */}
      <p className="text-gray-700 italic mb-10">
        A mindful digital sanctuary where <b>science meets soul</b>.
      </p>

      {/* Divider — soft golden lotus */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex justify-center mb-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-10 h-10 text-[#d4b78f] opacity-80"
          fill="currentColor"
        >
          <path d="M32 4c2.8 4.3 5.2 8.7 7.1 13.3C41 22 42 27.3 42 32s-1 10-2.9 14.7C37.2 51.3 34.8 55.7 32 60c-2.8-4.3-5.2-8.7-7.1-13.3C23 42 22 36.7 22 32s1-10 2.9-14.7C26.8 12.7 29.2 8.3 32 4z" />
        </svg>
      </motion.div>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="space-y-6 leading-relaxed text-lg"
      >
        <p>
          <b>360 Harmony Hub</b> is a mindful digital space that merges{" "}
          <b>data, design, and dharma</b> — guiding modern souls to reconnect
          with their natural rhythm. Here, sacred wisdom harmonizes with
          evidence-based insight.
        </p>

        <p>
          Through <b>The Yin Yang Newsletter</b>, we explore the divine balance
          between <b>Yin (Sacred Feminine)</b> — intuition, receptivity, and
          nurturing — and <b>Yang (Sacred Masculine)</b> — focus, action, and
          expression.
        </p>

        <p>
          Our ecosystem expands through six realms of harmony:{" "}
          <b>Celestial Insights</b>, <b>Sacred Wellness</b>,{" "}
          <b>Restful Rhythms</b>, <b>Financial Wisdom</b>,{" "}
          <b>Meditation Focus</b>, and <b>Sacred Affirmation</b>. Together, they
          form a circle of wholeness — empowering every seeker to live in tune
          with mind, body, and cosmos.
        </p>
      </motion.div>

      {/* CTA Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 text-gray-700 italic text-base"
      >
        “Join us each week in rediscovering harmony —
        <br /> one breath, one story, one insight at a time.”
      </motion.footer>
    </main>
  );
}
