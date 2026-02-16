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
          February 16 – February 22, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Vision Into Surrender — Aquarius Seeds and Pisces Season&apos;s
            Sacred Flow
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
            This week begins with bright, future-minded Aquarian energy and
            gently transitions into the mystic waters of Pisces season. On{" "}
            <b>February 17</b>, the <b>New Moon in Aquarius</b> invites bold
            intentions around innovation, freedom, and authentic self-expression.
            Then, on <b>February 18</b>, the <b>Sun enters Pisces</b>, shifting
            the collective tone from mental clarity to emotional depth and
            spiritual surrender.
            <br />
            <b>Mercury and Venus in Pisces</b> continue to soften communication
            and relationships, encouraging compassion, creativity, and intuitive
            decision-making. Meanwhile, <b>Saturn in Aries</b> asks you to bring
            discipline to your independence and courage to your commitments.
            <br />
            Let this week be a bridge: plant visionary seeds, then water them
            with trust.
          </p>
          <p>
            Let your mind imagine freely, and let your heart guide what grows.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let intuition soften your path forward.",
          yang: "Let clarity shape your new beginnings.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Feb 17 – New Moon in Aquarius</b>: fresh ideas,
                visionary intentions, and courageous authenticity.
                <br />- <b>Feb 18 – Sun enters Pisces</b>: compassion,
                imagination, and emotional awareness deepen.
                <br />- <b>All week – Mercury in Pisces</b>: intuitive
                conversations, poetic thought, and heart-led insight.
                <br />- <b>All week – Venus in Pisces</b>: soulful connection,
                creativity, and gentle healing in relationships.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage
                and responsible independence.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What new vision am I ready to commit to?
                <br />
                - Where does surrender feel wiser than force?
                <br />- How can I balance imagination with responsibility?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>February 17</b>, write three intentions that feel
                innovative and authentic — not what is expected, but what feels
                true.
                <br />- On <b>February 18</b>, create space for stillness:
                meditate, journal, or spend time near water.
                <br />- Throughout the week, take one courageous action that
                aligns with your long-term vision.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let rest replenish your emotional waters.",
          yang: "Let steady routines anchor your dreams.",
          content: (
            <>
              <p className="mt-4">
                Pisces season benefits from gentle care. Prioritize hydration,
                restorative movement, stretching, and mindful breathing.
                Protect your energy from overstimulation.
              </p>
              <p className="mt-4">
                Saturn&apos;s presence in Aries reminds you that wellness also
                requires consistency. Choose one small habit and honor it daily.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let dreams speak without interruption.",
          yang: "Let clarity rise from stillness.",
          content: (
            <>
              <p className="mt-4">
                Sleep may feel vivid and symbolic as Pisces season begins.
                Keep a notebook nearby and record impressions upon waking.
              </p>
              <p className="mt-4">
                Create an evening wind-down ritual: dim lighting, calming tea,
                and gentle breathwork to quiet the nervous system.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive inspiration without pressure.",
          yang: "Build your vision step by step.",
          content: (
            <>
              <p className="mt-4">
                The Aquarius New Moon invites innovative financial and career
                ideas. Think differently about opportunity and collaboration.
              </p>
              <p className="mt-4">
                As Pisces season unfolds, trust intuitive nudges — but let
                Saturn&apos;s steady influence help you act with maturity and
                follow-through.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let softness become your wisdom.",
          yang: "Let courage become your structure.",
          content: (
            <>
              <p className="mt-4">
                Visualize standing at the edge of the sea: the horizon wide,
                infinite possibility before you. With each inhale, feel
                expansion. With each exhale, feel grounding.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I trust my vision, and I honor my timing.
                <br />
                <b>Prompt:</b> What new beginning feels both exciting and
                aligned with my deeper values?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let surrender soften your edges.",
          yang: "Let intention guide your steps.",
          content: (
            <>
              <p className="mt-4 italic">
                "I plant bold visions and trust divine timing to unfold them."
              </p>
              <p className="mt-4">
                Speak this affirmation when you feel uncertain. It bridges faith
                and action.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let your heart guide what your mind begins.",
          yang: "Let commitment strengthen your dreams.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I dare to envision boldly and surrender gracefully."
              </p>
              <p className="mt-4">
                The Aquarius New Moon plants seeds of originality. Pisces season
                waters them with compassion. And Saturn in Aries asks you to
                tend them faithfully. Let imagination lead — and let discipline
                protect what grows.
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
