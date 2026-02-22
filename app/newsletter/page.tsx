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
          February 23 – March 01, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Imagination and Steady Action — Pisces Flow Meets Gemini
            Momentum
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
          <p className="mb-6">
            Pisces season deepens this week, inviting compassion, intuition, and
            creative surrender. With the <b>Sun, Mercury, and Venus in Pisces</b>,
            the collective tone softens — encouraging emotional honesty,
            imagination, and soulful connection.
            <br />
            On <b>February 25</b>, the <b>First Quarter Moon in Gemini</b>
            creates forward motion. This lunar phase asks you to take action on
            ideas seeded during the recent New Moon. Gemini energy brings
            curiosity, communication, and movement — reminding you that insight
            must eventually be expressed.
            <br />
            Meanwhile, <b>Saturn in Aries</b> continues to support disciplined
            courage. The message is clear: dream deeply, but act steadily.
          </p>
          <p>
            Let intuition inspire you, and let thoughtful action move you
            forward.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let imagination open your inner world.",
          yang: "Let focused communication move your vision ahead.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Pisces</b>: compassion,
                spirituality, creativity, and emotional awareness.
                <br />- <b>All week – Mercury in Pisces</b>: intuitive thought,
                inspired speech, and poetic insight.
                <br />- <b>All week – Venus in Pisces</b>: soulful love,
                empathy, artistic inspiration, and gentle connection.
                <br />- <b>Feb 25 – First Quarter Moon in Gemini</b>: action,
                decisions, conversations, and mental clarity.
                <br />- <b>All week – Saturn in Aries</b>: courageous
                responsibility and disciplined self-leadership.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where is my intuition guiding me toward expression?
                <br />
                - What conversation needs clarity and courage?
                <br />- How can I balance dreaming with decisive movement?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>February 25</b>, take one small but visible step
                toward a goal you&apos;ve been imagining.
                <br />- Write or speak your ideas aloud — Gemini energy favors
                dialogue and articulation.
                <br />- Throughout the week, practice quiet reflection before
                making important decisions.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let rest nourish your emotional body.",
          yang: "Let light movement energize your spirit.",
          content: (
            <>
              <p className="mt-4">
                Pisces energy can feel absorbing. Protect your emotional
                boundaries and prioritize hydration, gentle stretching, and
                slow, mindful exercise.
              </p>
              <p className="mt-4">
                Gemini&apos;s influence midweek benefits from fresh air and
                mental stimulation — reading, journaling, or engaging
                conversation.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let silence restore your clarity.",
          yang: "Let insight translate into thoughtful words.",
          content: (
            <>
              <p className="mt-4">
                This is a week to honor both solitude and conversation. Make
                space for daydreaming, music, or creative expression.
              </p>
              <p className="mt-4">
                Notice how your dreams and subtle feelings guide practical
                decisions.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive inspiration without forcing outcomes.",
          yang: "Act on ideas with steady commitment.",
          content: (
            <>
              <p className="mt-4">
                Pisces invites abundance through compassion, artistry, and
                spiritual alignment. Trust intuitive nudges around creative or
                collaborative opportunities.
              </p>
              <p className="mt-4">
                Saturn in Aries reminds you to structure your ambition. Make
                plans that are bold but realistic.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let softness become your guidance.",
          yang: "Let clarity become your momentum.",
          content: (
            <>
              <p className="mt-4">
                Visualize waves meeting the shore — constant, rhythmic, steady.
                Your inner world and outer actions can flow in harmony.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I move forward with intuitive clarity and steady
                courage.
                <br />
                <b>Prompt:</b> What inspired idea am I ready to bring into
                motion?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let inspiration flow freely.",
          yang: "Let action follow with intention.",
          content: (
            <>
              <p className="mt-4 italic">
                "I trust my inner guidance, and I act with clarity."
              </p>
              <p className="mt-4">
                Repeat this affirmation when doubt arises — it bridges feeling
                and focus.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let dreams soften your edges.",
          yang: "Let courage sharpen your direction.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I speak my vision and move with steady grace."
              </p>
              <p className="mt-4">
                Pisces opens the heart. Gemini stirs the mind. Saturn steadies
                the will. Let your imagination breathe — and let your actions
                follow with intention.
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
        )
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
