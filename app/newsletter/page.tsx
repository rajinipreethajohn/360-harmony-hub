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
          November 24 – November 30, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>Embracing Change — Wisdom and Renewal in the Sagittarius Season</b>
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
            As <b>Sagittarius season</b> unfolds, this week calls for embracing{" "}
            <b>expansive growth</b> and <b>wisdom through change</b>. The
            continuing glow of the <b>New Moon energy</b> invites a fresh start
            in your vision, purpose, and connections.
            <br />
            Stand boldly in your truth and open your heart to new adventures and
            possibilities.
          </p>
          <p>
            Let this week be a bridge between reflection and action — a time to
            plant seeds for future growth and expansion.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let expansive vision open your soul’s horizon.",
          yang: "Let bold action follow inspired insight.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Nov 24 – Mercury conjunct Sagittarius Sun</b>:
                clarity and communication amplify.
                <br />- <b>Nov 25 – Moon in Aquarius</b>: innovation and
                connection with community.
                <br />- <b>Nov 27 – Mars sextile Uranus</b>: dynamic energy
                sparks creative breakthroughs.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where is your spirit ready to expand boldly?
                <br />
                - How can innovation inspire your daily life and relationships?
                <br />- What new paths does your heart wish to explore?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>November 24</b>, set clear intentions for
                courageous communication.
                <br />- On <b>November 25</b>, engage in community or group
                creativity.
                <br />- On <b>November 27</b>, embrace spontaneous action for
                innovation.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let breath and movement cultivate freedom within.",
          yang: "Let your body express joy and vitality.",
          content: (
            <>
              <p className="mt-4">
                Energize your system with outdoor movement: brisk walks, playful
                exercise, or dance. Include vibrant foods such as fresh berries,
                leafy greens, and warming spices to support vitality.
              </p>
              <p className="mt-4">
                Incorporate breathwork practices that open the chest and enhance
                oxygen flow—pranayama or deep diaphragmatic breathing work well.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let calm presence replenish your inner wells.",
          yang: "Let restful pauses inspire renewed energy.",
          content: (
            <>
              <p className="mt-4">
                Prioritize quality sleep with calming rituals like lavender tea
                and crescent moon visualization before bed. Reduce screen
                exposure after sunset to support natural rhythms.
              </p>
              <p className="mt-4">
                Practice mindfulness meditation to ground restless energy and
                promote peace.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Open to receive with grace and mindfulness.",
          yang: "Act decisively with clear intent.",
          content: (
            <>
              <p className="mt-4">
                Review financial plans and partnerships with optimism. Venus
                moves into Sagittarius, encouraging expansive generosity and
                aligned collaborations.
              </p>
              <p className="mt-4">
                Take inspired steps forward, balancing risk and wisdom for
                sustainable abundance.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into the strength of your centered core.",
          yang: "Radiate calm confidence in all your actions.",
          content: (
            <>
              <p className="mt-4">
                Visualize energy flowing freely yet rooted firmly within. Use
                grounding meditation to balance the fire of expansion with the
                calm of presence.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I ground myself in courage and move with
                clarity.”
                <br />
                <b>Prompt:</b> Where will your courage lead you this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let your spirit soar with fearless grace.",
          yang: "Let your actions reflect deep authenticity.",
          content: (
            <>
              <p className="mt-4 italic">
                “With open heart and steady steps, I embrace the flow of
                change.”
              </p>
              <p className="mt-4">
                Recite this daily to anchor courage and authenticity in your
                journey.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let renewal be the fertile soil of your evolution.",
          yang: "Let inspired action guide your impending growth.",
          content: (
            <>
              <p className="mt-4 italic">
                “This week, I stand ready — anchored, inspired, and alive.”
              </p>
              <p className="mt-4">
                As the Sagittarius sun shines warmly, open to possibility and
                purposeful direction.
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
