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
          November 3 – November 9, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Transformation and Expansion — Embrace New Horizons in Scorpio
            Season
          </b>
        </p>
      </motion.div>

      {/* 💡 PDF note */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this week’s edition, scroll to the end and click{" "}
        <b>“Download as PDF.”</b>
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
            This week opens under the expansive energy of{" "}
            <b>Mars entering Sagittarius</b> on <b>November 4</b>, igniting
            motivation and passion to explore new horizons. The{" "}
            <b>Full Moon in Taurus</b> on <b>November 5</b> grounds our
            intentions in stability, while <b>Venus enters Scorpio</b> on{" "}
            <b>November 6</b>, deepening emotional connections and authentic
            intimacy.
            <br />
            As you navigate these celestial shifts, focus on expanding your
            vision while staying rooted in your core values.
          </p>
          <p>
            Let this week be a powerful period of{" "}
            <b>transformation, growth, and alignment</b> — where your passion
            fuels purposeful action and your relationships deepen in meaning.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the expansive fire guide your spirit’s quest.",
          yang: "Let your actions be bold yet grounded.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Nov 4 – Mars enters Sagittarius</b>: motivation soars
                with adventurous energy.
                <br />- <b>Nov 5 – Full Moon in Taurus</b>: focus on stability,
                finance, and sensual grounding.
                <br />- <b>Nov 6 – Venus enters Scorpio</b>: emotional depth and
                transformative love deepen relationships.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What bold step are you ready to take that aligns with your
                true values?
                <br />
                - How can grounding your intentions create lasting growth?
                <br />- Where can deeper emotional connection bring healing and
                transformation?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>November 4</b>, set an intention for fearless
                exploration—write it and revisit throughout the week.
                <br />- On <b>November 5</b>, ground yourself with a mindful
                meditation focused on stability.
                <br />- On <b>November 6</b>, express gratitude for deep
                connections by lighting a candle and reflecting on loved ones.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your breath expand with new energy.",
          yang: "Let your body move with intention and joy.",
          content: (
            <>
              <p className="mt-4">
                With the celestial energy expanding, focus on nourishing your
                body with <b>hydrating foods</b>, <b>vitamin D</b>, and{" "}
                <b>grounding herbs</b>. Incorporate mindful movement practices
                such as <b>yoga</b> or <b>tai chi</b> to balance your energetic
                flow.
              </p>
              <p className="mt-4">
                Schedule time in nature to connect with the grounding energy of
                earth as the season shifts. Practice gratitude journaling to
                align body and mind with abundance.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness nurture your roots deeply.",
          yang: "Let restful boundaries protect your growth.",
          content: (
            <>
              <p className="mt-4">
                Prioritize sleep with calming evening routines—dim lights after
                8 pm and consider using amber light filters if using screens. A
                salt bath or sound bath can offer deep restoration and help
                release tension.
              </p>
              <p className="mt-4">
                Practice gentle breathing exercises before sleep to calm the
                nervous system and invite restorative rest.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive with openness and patience.",
          yang: "Act with clarity and strategic intent.",
          content: (
            <>
              <p className="mt-4">
                Use this week to recalibrate your financial goals under the
                grounding Full Moon energies. Practice patience and long-term
                planning—avoid impulsive financial decisions and focus on
                sustainable growth.
              </p>
              <p className="mt-4">
                Collaborate thoughtfully and seek harmony in joint ventures.
                Trust the slow, steady pace of aligned abundance.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into the quiet strength within.",
          yang: "Let your presence radiate calm confidence.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself rooted like a sturdy tree—grounded yet
                reaching upward. Use meditation to anchor your strength and
                clarity amidst expansion.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I expand with grace and stand firm in my truth.”
                <br />
                <b>Prompt:</b> What is one area this week where you can embody
                both strength and openness?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let your spirit unfold gently like a blooming flower.",
          yang: "Let your actions reflect your deepest values.",
          content: (
            <>
              <p className="mt-4 italic">
                “I embrace change with grace, and my spirit expands with
                clarity.”
              </p>
              <p className="mt-4">
                Repeat this affirmation each morning to center your intentions
                and energize your day.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let transformation be your guide.",
          yang: "Let expansion be your compass.",
          content: (
            <>
              <p className="mt-4 italic">
                “This week I step boldly into new horizons — anchored, aligned,
                and alive.”
              </p>
              <p className="mt-4">
                As we journey deeper into <b>Scorpio season</b> and welcome new
                fire with <b>Mars in Sagittarius</b>, open your heart to
                transformation and the unknown.
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
