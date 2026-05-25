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
          May 25 – May 31, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Expansion and Emotional Illumination — Gemini Curiosity,
            Sagittarius Truth, and Courageous Inner Growth
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
            This week carries expansive, truth-seeking energy as{" "}
            <b>Gemini season</b> awakens movement, curiosity, communication, and
            fresh mental clarity. The <b>Sun in Gemini</b> invites exploration —
            emotionally, intellectually, and spiritually — encouraging you to
            remain open to new ideas, perspectives, and possibilities.
            <br />
            <b>Mercury continues its journey through Gemini</b>, amplifying
            conversations, learning, creativity, writing, networking, and mental
            stimulation. Thoughts move quickly now, making this a powerful week
            for brainstorming, connecting, teaching, sharing, and discovering
            new inspiration.
            <br />
            Meanwhile, <b>Venus in Cancer</b> softens the emotional landscape,
            encouraging deeper emotional bonding, nurturing connections, and
            heartfelt conversations. Then, on <b>May 31</b>, the{" "}
            <b>Full Moon in Sagittarius</b> illuminates themes of truth,
            freedom, expansion, and spiritual growth. This Full Moon asks you to
            release limiting beliefs and reconnect with a larger vision for your
            life.
          </p>

          <p>
            Let this week help you expand your mind, trust your truth, and move
            toward what feels deeply alive.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let openness soften old limitations.",
          yang: "Let courageous truth guide your expansion.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Gemini</b>: curiosity,
                communication, adaptability, learning, and fresh perspective.
                <br />- <b>Since May 17 – Mercury in Gemini</b>: quick thinking,
                conversation, creativity, networking, writing, and mental
                clarity.
                <br />- <b>All week – Venus in Cancer</b>: emotional warmth,
                nurturing connections, intuitive relating, and soulful bonding.
                <br />- <b>Mars in mid‑to‑late Aries (until May 18)</b>:
                confidence, momentum, courage, initiative, and decisive action.
                <br />- <b>May 31 – Full Moon in Sagittarius</b>: truth,
                emotional illumination, freedom, spiritual expansion, and
                releasing limiting beliefs.
                <br />- <b>From May 24 – Saturn in Aries</b>: disciplined
                courage, self-leadership, and long-term growth through
                responsibility.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What truth feels impossible to ignore now?
                <br />
                - What belief or fear is limiting my expansion?
                <br />- What new direction feels exciting, aligned, and freeing?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Midweek, begin a new journal, idea list, or creative
                writing practice.
                <br />- On <b>May 31</b>, release one belief, habit, or fear
                that keeps you emotionally small.
                <br />- Throughout the week, stay curious: read, explore, learn,
                ask questions, and allow new perspectives to expand your world.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let spaciousness calm your nervous system.",
          yang: "Let movement energize your body and spirit.",
          content: (
            <>
              <p className="mt-4">
                Gemini energy can increase mental activity, overstimulation, and
                scattered focus. Support your nervous system through hydration,
                grounding meals, movement, breathwork, and moments of quiet away
                from screens and constant input.
              </p>

              <p className="mt-4">
                Venus in Cancer reminds you that emotional wellness also grows
                through comfort, safety, nourishment, and meaningful connection.
                Let softness become part of your healing.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let silence reconnect you to inner wisdom.",
          yang: "Let rest sharpen your clarity and direction.",
          content: (
            <>
              <p className="mt-4">
                This week invites both exploration and integration. Balance
                external stimulation with stillness so your inner voice does not
                get drowned out by constant motion.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What truth wants to guide my next
                chapter?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that expand your world.",
          yang: "Act boldly where growth feels aligned.",
          content: (
            <>
              <p className="mt-4">
                Gemini season supports abundance through communication,
                collaboration, networking, teaching, writing, marketing,
                learning, and exchanging ideas.
              </p>

              <p className="mt-4">
                The Sagittarius Full Moon reminds you that abundance also grows
                through belief. Notice where your mindset is expanding — and
                where fear still asks you to play small.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let openness expand your perspective gently.",
          yang: "Let truth move you forward with courage.",
          content: (
            <>
              <p className="mt-4">
                Visualize standing beneath a vast open sky. The horizon
                stretches endlessly before you. Your mind opens, your breath
                deepens, and your path becomes clearer with every step forward.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I trust the truth that expands my life.
                <br />
                <b>Prompt:</b> What would become possible if I fully believed in
                my own growth?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let trust soften fear.",
          yang: "Let truth guide your expansion.",
          content: (
            <>
              <p className="mt-4 italic">
                "I release limiting beliefs and welcome the expansion meant for
                me."
              </p>

              <p className="mt-4">
                Repeat this affirmation whenever self-doubt or uncertainty
                appears.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let curiosity awaken your spirit gently.",
          yang: "Let courage carry you toward a larger life.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I open my heart, expand my mind, and trust the truth
                guiding me forward."
              </p>

              <p className="mt-4">
                Gemini reminds you to stay curious. Sagittarius reminds you to
                seek deeper meaning. Together, they create movement that expands
                both mind and soul. Let this week help you release old limits,
                reconnect with possibility, and move toward a future that feels
                honest, alive, and expansive.
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
