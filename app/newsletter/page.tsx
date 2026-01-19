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
          January 19 – January 25, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme: <b>From Structure to Vision — The Capricorn–Aquarius Shift</b>
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
            This week marks a meaningful energetic pivot. The{" "}
            <b>Sun completes its journey through Capricorn</b> and enters{" "}
            <b>Aquarius on January 20</b>, shifting focus from responsibility
            and structure toward innovation, authenticity, and future vision. We
            are still in the early days of the <b>Capricorn New Moon cycle</b>,
            making this an ideal time to gently grow what you committed to last
            week — without rushing the process.
            <br />
            <b>Mercury continues in Capricorn</b> through most of the week,
            keeping thinking practical and grounded, before{" "}
            <b>entering Aquarius on January 25</b>, where ideas open up and
            perspectives widen. <b>Venus travels through Aquarius</b>,
            encouraging honest, unconventional expressions of love and value.{" "}
            <b>Mars remains in Capricorn</b>, providing discipline and stamina
            to support the Aquarian visions beginning to form.
          </p>
          <p>
            Let this week bridge wisdom and originality — build wisely, then
            allow yourself to imagine differently.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let space and perspective awaken new insight.",
          yang: "Let disciplined effort support emerging vision.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Jan 19 – Sun in Capricorn</b>: final refinements,
                responsibility, and structural clarity.
                <br />- <b>Jan 20 – Sun enters Aquarius</b>: innovation,
                individuality, and future-oriented thinking come online.
                <br />- <b>All week – Mars in Capricorn</b>: sustained effort,
                patience, and focused ambition.
                <br />- <b>All week – Venus in Aquarius</b>: authentic
                connections, freedom in relationships, and values aligned with
                truth.
                <br />- <b>Jan 25 – Mercury enters Aquarius</b>: mental
                breakthroughs, fresh perspectives, and unconventional ideas.
                <br />- <b>Jan 25/26 – First Quarter Moon in Taurus</b>: steady
                action and practical follow-through support growth.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where am I ready to think differently without abandoning what
                works?
                <br />
                - What responsibility can now feel lighter if I approach it with
                creativity?
                <br />- How can stability and innovation coexist in my life?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>January 20</b>, write down one outdated rule or
                belief you are ready to question.
                <br />- Midweek, take one small, disciplined step toward a new
                idea you have been quietly considering.
                <br />- On <b>January 25</b>, commit to a tangible action that
                grounds a fresh vision into reality.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let nervous-system ease invite creativity.",
          yang: "Let consistent movement anchor vitality.",
          content: (
            <>
              <p className="mt-4">
                As Aquarius energy rises, your system benefits from variety
                paired with routine. Keep your core practices steady — walks,
                strength, yoga — but allow small changes that keep you mentally
                engaged and inspired.
              </p>
              <p className="mt-4">
                Support circulation and clarity with hydration, magnesium-rich
                foods, and gentle stretching for calves, ankles, and lower legs.
                Balance stimulation with grounding nourishment.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let mental spaciousness restore you.",
          yang: "Let rest sharpen focus and direction.",
          content: (
            <>
              <p className="mt-4">
                Aquarius season can bring mental buzz. Create intentional
                pauses: brief screen breaks, fresh air, or quiet reflection
                without input. Space allows insight to surface naturally.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What idea is asking for patience rather
                than pressure?&quot; Let rest integrate inspiration into
                something sustainable.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive innovative solutions with openness.",
          yang: "Build security through steady execution.",
          content: (
            <>
              <p className="mt-4">
                Mars in Capricorn continues to favor long-term planning and
                disciplined work, while Venus and Mercury in Aquarius invite new
                approaches to value, income, and collaboration. Innovation is
                most effective when paired with structure.
              </p>
              <p className="mt-4">
                Experiment thoughtfully: test a new idea on a small scale, keep
                what works, and release what doesn&apos;t without judgment.
                Sustainable abundance grows through intelligent adaptation.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let clarity arrive through spacious awareness.",
          yang: "Let grounded action carry your insight forward.",
          content: (
            <>
              <p className="mt-4">
                Visualize standing on solid ground beneath a wide open sky. With
                each inhale, welcome possibility; with each exhale, anchor it
                into your body. You are supported by both vision and effort.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I allow new ideas to grow on steady ground.
                <br />
                <b>Prompt:</b> What future-focused idea feels exciting — and
                what practical step makes it real?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let openness expand your inner world.",
          yang: "Let commitment stabilize your path.",
          content: (
            <>
              <p className="mt-4 italic">
                "I honor what I have built, and I welcome new ways of becoming."
              </p>
              <p className="mt-4">
                Repeat this affirmation as the Sun moves into Aquarius, allowing
                innovation to rest on a foundation of wisdom.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let curiosity guide you gently forward.",
          yang: "Let consistency turn vision into form.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I trust both my structure and my originality."
              </p>
              <p className="mt-4">
                You are not asked to abandon what you&apos;ve built — only to
                allow it to evolve. Let the week be a conversation between the
                future you can imagine and the steady actions that make it
                possible.
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
