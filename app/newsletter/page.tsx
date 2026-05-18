"use client";
import useIsPrinting from "@/hooks/useIsPrinting";
import { motion } from "framer-motion";

export default function NewsletterPage() {
  const isPrinting = useIsPrinting();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-3xl mx-auto text-gray-900 py-24 px-6 space-y-12">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
        className="text-center space-y-2"
      >
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2">
          🌗 The Yin Yang Newsletter
        </h1>

        <h2 className="text-2xl font-serif text-gray-800 mb-1">
          May 18 – May 24, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Renewal and Courageous Momentum — Gemini Season Awakening,
            Taurus Grounding, and Heart-Led Expansion
          </b>
        </p>
      </motion.div>

      {/* 💡 PDF note */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this week&apos;s edition, scroll to the end and click{" "}
        <b>Download as PDF</b>.
      </p>

      {/* Intro */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg leading-relaxed space-y-4"
      >
        <div className="text-center max-w-3xl mx-auto leading-loose text-[1.05rem] font-serif text-gray-700 tracking-wider">
          <p className="mt-4">
            <b>Astrological Highlights:</b>
            <br />- <b>Until May 20 – Sun in Taurus</b>: grounding, stability,
            embodiment, nourishment, and sustainable growth.
            <br />- <b>May 20 – Sun enters Gemini</b>: curiosity, communication,
            movement, fresh perspective, and mental expansion.
            <br />- <b>Early week – Mercury in Taurus</b>: thoughtful
            communication, practical planning, and grounded clarity.
            <br />- <b>All week – Venus in Gemini</b>: connection, creativity,
            social energy, learning, and meaningful exchanges.
            <br />- <b>All week – Mars in Aries</b>: initiative, confidence,
            motivation, and forward momentum.
            <br />- <b>May 23 – First Quarter Moon</b>: refinement, productive
            action, organization, and forward movement.
            <br />- <b>All week – Saturn in Aries</b>: disciplined leadership,
            self-responsibility, and courageous long-term growth.
          </p>
          <p>
            Let this week help you move forward with curiosity, clarity, and
            grounded courage.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let grounded clarity support inspired movement.",
          yang: "Let courageous curiosity guide your next chapter.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Until May 20 – Sun in Taurus</b>: grounding,
                stability, embodiment, nourishment, and sustainable growth.
                <br />- <b>May 21 – Sun enters Gemini</b>: curiosity,
                communication, mental stimulation, movement, and fresh
                perspective.
                <br />- <b>All week – Mercury in Taurus</b>: thoughtful
                communication, steady planning, and practical clarity.
                <br />- <b>All week – Venus in Gemini</b>: connection,
                creativity, social energy, learning, and meaningful exchanges.
                <br />- <b>All week – Mars in Aries</b>: initiative, confidence,
                motivation, and forward momentum.
                <br />- <b>May 22 – First Quarter Moon in Virgo</b>: refinement,
                organization, practical action, and productive momentum.
                <br />- <b>All week – Saturn in Aries</b>: disciplined
                leadership, self-responsibility, and courageous long-term
                growth.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What new direction feels mentally and emotionally alive?
                <br />
                - Where do I need better structure to support future growth?
                <br />- How can I stay grounded while embracing change?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>May 21</b>, write down three new ideas, dreams, or
                directions you feel curious about exploring.
                <br />- On <b>May 22</b>, organize one area of your life that
                feels mentally cluttered or unfinished.
                <br />- Throughout the week, balance movement with grounding:
                learn something new while staying connected to daily routines.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let grounding calm an active mind.",
          yang: "Let movement energize your spirit.",
          content: (
            <>
              <p className="mt-4">
                Gemini season can increase mental stimulation and nervous-system
                activity, so balance busy thoughts with grounding practices:
                hydration, nourishing meals, mindful movement, breathwork, and
                quality sleep.
              </p>

              <p className="mt-4">
                Taurus energy still supports healing through consistency. Let
                simple daily rituals — sunlight, stretching, walking, music, and
                rest — regulate your emotional and physical energy.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness reconnect you to yourself.",
          yang: "Let rest restore mental clarity.",
          content: (
            <>
              <p className="mt-4">
                This week asks you to balance stillness with movement. Allow
                yourself space to think, reflect, and mentally reset before
                rushing into new commitments.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What new possibility wants my attention
                now?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that align with your values.",
          yang: "Build steadily while staying open to change.",
          content: (
            <>
              <p className="mt-4">
                Taurus season reminds you that abundance grows steadily through
                consistency, patience, and emotional alignment.
              </p>

              <p className="mt-4">
                Gemini season may bring new opportunities through communication,
                collaboration, networking, writing, teaching, or learning. Stay
                curious, but stay grounded in your deeper values.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let openness expand your perspective.",
          yang: "Let grounded courage support your growth.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing beneath an open sky with strong
                roots beneath your feet. Your mind remains open and curious,
                while your foundation stays calm and steady.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I welcome new possibilities while remaining
                grounded in my truth.
                <br />
                <b>Prompt:</b> What fresh direction feels exciting, aligned, and
                sustainable?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let trust soften uncertainty.",
          yang: "Let curiosity guide your momentum.",
          content: (
            <>
              <p className="mt-4 italic">
                "I move forward with grounded curiosity and trust the growth
                unfolding within me."
              </p>

              <p className="mt-4">
                Repeat this affirmation when life feels fast-moving or mentally
                overwhelming.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let openness expand your world gently.",
          yang: "Let grounded action move you forward.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I stay rooted in what matters while allowing new
                energy to guide me forward."
              </p>

              <p className="mt-4">
                Taurus reminds you to stay grounded. Gemini reminds you to stay
                open. Together, they create growth that is both stable and
                alive. Let this week help you welcome new possibilities without
                losing connection to yourself.
              </p>
            </>
          ),
        },
      ].map((section, idx) =>
        isPrinting ? (
          <section
            key={idx}
            className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-6 space-y-3 border border-[#e6c79244] text-center font-serif text-gray-700 tracking-wider leading-loose"
          >
            <h2 className="text-2xl font-semibold text-center">
              {section.title}
            </h2>

            <p>
              <b>Yin (Sacred Feminine):</b> {section.yin}
            </p>

            <p>
              <b>Yang (Sacred Masculine):</b> {section.yang}
            </p>

            {section.content}
          </section>
        ) : (
          <motion.section
            key={idx}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-6 space-y-3 border border-[#e6c79244] text-center font-serif text-gray-700 tracking-wider leading-loose"
          >
            <h2 className="text-2xl font-semibold text-center">
              {section.title}
            </h2>

            <p>
              <b>Yin (Sacred Feminine):</b> {section.yin}
            </p>

            <p>
              <b>Yang (Sacred Masculine):</b> {section.yang}
            </p>

            {section.content}
          </motion.section>
        ),
      )}

      {/* Floating Yin–Yang Symbol */}
      <motion.div
        className="no-print fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9f5e6] to-[#1c1b2b] shadow-lg flex items-center justify-center border border-[#e6c792]/70"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-10 h-10 pointer-events-none">
          <circle cx="50" cy="50" r="50" fill="#000" />

          <path
            d="M50 0 A50 50 0 0 1 50 100 A25 25 0 0 0 50 50 A25 25 0 0 1 50 0 Z"
            fill="#fff"
          />

          <circle cx="50" cy="25" r="7" fill="#000" />
          <circle cx="50" cy="75" r="7" fill="#fff" />
        </svg>
      </motion.div>

      {/* Footer + Print Button */}
      <footer className="print-only">
        Visit us at{" "}
        <a
          href="https://360harmonyhub.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          360harmonyhub.netlify.app
        </a>
      </footer>

      <div className="text-center my-8 no-print">
        <button
          onClick={() => window.print()}
          className="px-5 py-2 bg-[#1c1b2b] text-[#f9f5e6] rounded-lg shadow-md hover:bg-[#cbb89d] hover:text-[#1c1b2b] transition-all duration-300"
        >
          📄 Download as PDF
        </button>
      </div>
    </div>
  );
}
