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
          January 26 – February 1, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>The Electric Awakening — Neptune in Aries and the Leo Full Moon</b>
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
            This week is charged with momentum and meaning. On <b>January 26</b>
            , <b>Neptune enters Aries</b>, beginning a long collective shift
            from dreamy dissolution toward courageous spiritual initiation — the
            call to live our ideals, not just imagine them. The air is
            unmistakably Aquarian: the <b>Sun</b>, <b>Mercury</b>, <b>Venus</b>,
            and <b>Mars</b> all travel through <b>Aquarius</b>, amplifying
            future vision, truth-telling, liberation, and the desire to align
            with what is real.
            <br />
            On <b>January 27</b>, <b>Mars conjunct Pluto in Aquarius</b> ignites
            intensity and transformation — a threshold moment for power, agency,
            and bold action. On <b>January 29</b>,{" "}
            <b>Mercury conjunct Venus in Aquarius</b> sweetens communication and
            supports honest, heart-led conversations. The week builds toward a
            radiant climax: the <b>Full Moon in Leo on February 1</b>,
            illuminating creativity, confidence, and the courage to be seen.
            <br />
            Let this week remind you: your future is not only something you plan
            — it is something you embody, moment by moment, with brave love and
            clear intention.
          </p>
          <p>
            Let this week awaken your vision, refine your voice, and ignite the
            courage to shine without shrinking.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let your intuition become brave and embodied.",
          yang: "Let bold truth guide purposeful change.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Jan 26 – Neptune enters Aries</b>: a new era of
                spiritual initiation, courageous ideals, and awakening purpose.
                <br />- <b>Jan 26 – First Quarter Moon in Taurus</b>: grounded
                effort and steady choices strengthen what you are building.
                <br />- <b>Jan 27 – Mars conjunct Pluto in Aquarius</b>: intense
                transformation, power reclamation, and fearless forward motion.
                <br />- <b>Jan 29 – Mercury conjunct Venus in Aquarius</b>:
                heart-led conversations, elegant honesty, and social harmony.
                <br />- <b>Feb 1 – Full Moon in Leo</b>: creative confidence,
                visibility, celebration, and the courage to be fully expressed.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where am I being asked to live my truth more boldly?
                <br />
                - What power dynamic is ready to transform — within me or around
                me?
                <br />- What part of me is ready to be seen, honored, and
                celebrated?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>January 26</b>, write one spiritual ideal you are
                ready to embody through action, not just intention.
                <br />- On <b>January 27</b>, move your body with purpose (a
                strong walk, a powerful flow, a release shake) to transmute
                intensity into clarity.
                <br />- On <b>February 1</b>, light a candle and speak aloud one
                promise to yourself: a creative vow, a leadership vow, or a vow
                to take up space with love.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your nervous system feel safe in expansion.",
          yang: "Let movement clear intensity into vitality.",
          content: (
            <>
              <p className="mt-4">
                Aquarius energy can amplify mental electricity, while the Mars–
                Pluto conjunction can intensify emotions and adrenaline. Choose
                grounding, body-based practices: brisk walking, strength work,
                leg-focused yoga, or dancing to discharge stress and restore
                flow.
              </p>
              <p className="mt-4">
                Support your system with hydration, mineral-rich foods, and
                steady meals. Magnesium, warm soups, and nourishing proteins can
                help stabilize the body while your mind stretches into new
                horizons.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness soften your inner intensity.",
          yang: "Let deep rest restore your creative fire.",
          content: (
            <>
              <p className="mt-4">
                This is a week to protect your energetic boundaries. Limit
                overstimulation, especially around <b>January 27</b>, and create
                quiet rituals: warm baths, yin yoga, gentle breathwork, or
                candlelit evenings without screens.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What would it feel like to be fully
                safe in my own power?&quot; Let your dreams reveal the next
                emotional truth you are ready to hold.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive new possibilities without forcing outcomes.",
          yang: "Take brave action where your future is calling.",
          content: (
            <>
              <p className="mt-4">
                With so much Aquarius emphasis, abundance arrives through ideas,
                networks, and innovative pivots. Neptune in Aries adds a deeper
                layer: your prosperity is connected to your courage to follow a
                soul-led path — even if it looks unconventional.
              </p>
              <p className="mt-4">
                Use the <b>First Quarter Moon</b> to take one practical step,
                then let the <b>Leo Full Moon</b> help you own your brilliance:
                share your work, speak your truth, make the pitch, publish the
                post, or show up as the person you are becoming.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let your inner fire become sacred and calm.",
          yang: "Let your voice become clear and courageous.",
          content: (
            <>
              <p className="mt-4">
                Visualize a golden sun in your heart and a cool, clear sky in
                your mind. With each inhale, feel courage rise; with each
                exhale, feel peace steady you. You are both the spark and the
                sanctuary.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I am safe to be powerful, and I use my power with
                love.
                <br />
                <b>Prompt:</b> What would I create, say, or claim if I stopped
                shrinking to stay comfortable?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let your spirit lead with brave tenderness.",
          yang: "Let your actions match your highest truth.",
          content: (
            <>
              <p className="mt-4 italic">
                "I choose courageous truth, loving power, and radiant
                self-expression."
              </p>
              <p className="mt-4">
                Speak this affirmation daily, and especially under the Leo Full
                Moon, to embody confidence without hardness and visibility
                without fear.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let your future be born from faith.",
          yang: "Let your light become undeniable.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I rise — brave, clear, and unafraid to shine."
              </p>
              <p className="mt-4">
                Neptune in Aries asks for spiritual courage. Mars conjunct Pluto
                asks for honest power. And the Leo Full Moon asks for radiant
                self-expression. Let this be your invitation: release the old
                self that needed permission, and step forward as the one who
                simply chooses.
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
