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
          May 11 – May 17, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Deep Release and Sacred Rebuilding — Scorpio Illumination, Taurus
            Stability, and the Courage to Begin Again
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
            This week carries transformative energy beneath a calm Taurus
            surface. The <b>Sun remains in Taurus</b>, encouraging steadiness,
            embodiment, and grounded growth, while emotional undercurrents
            deepen through a powerful <b>Full Moon in Scorpio on May 12</b>.
            Scorpio energy reveals what has been hidden — emotionally,
            relationally, financially, and spiritually — inviting release,
            honesty, and renewal.
            <br />
            <b>Mercury in Taurus</b> supports slower, more intentional thinking
            and communication. This is not a week for rushed decisions; it is a
            week for listening carefully to what feels truly sustainable.
            Meanwhile, <b>Venus remains in Gemini</b>, bringing movement through
            conversations, curiosity, learning, and meaningful exchanges.
            <br />
            On <b>May 16</b>, <b>Ceres enters Aries</b>, reigniting themes of
            self-nourishment, independence, and courageous self-care. The
            message this week is clear: release what drains your spirit, protect
            what nourishes your future, and rebuild from deeper truth.
          </p>
          <p>
            Let this week help you release with courage and rebuild with
            intention.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let emotional truth guide your release.",
          yang: "Let grounded courage shape your next chapter.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Taurus</b>: stability, embodiment,
                nourishment, patience, and grounded values.
                <br />- <b>All week – Mercury in Taurus</b>: thoughtful
                communication, practical decisions, and slow clarity.
                <br />- <b>All week – Venus in Gemini</b>: curiosity,
                connection, flexibility, and meaningful conversations.
                <br />- <b>All week – Mars in Aries</b>: initiative, confidence,
                action, and forward momentum.
                <br />- <b>May 12 – Full Moon in Scorpio</b>: emotional release,
                transformation, truth, endings, and renewal.
                <br />- <b>May 16 – Ceres enters Aries</b>: independent
                self-care, personal courage, and reclaiming emotional autonomy.
                <br />- <b>All week – Saturn in Aries</b>: disciplined
                leadership and mature self-responsibility.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What truth am I finally ready to face honestly?
                <br />
                - What emotional pattern or attachment is ready to be released?
                <br />- What kind of future feels genuinely nourishing to build?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>May 12</b>, write down one fear, resentment, or
                emotional burden you are ready to release.
                <br />- Clean or organize one physical space as a symbolic act
                of energetic renewal.
                <br />- Throughout the week, choose one grounded action daily
                that supports long-term peace rather than temporary comfort.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentleness restore emotional balance.",
          yang: "Let movement strengthen resilience.",
          content: (
            <>
              <p className="mt-4">
                Scorpio Full Moon energy can intensify emotions and
                nervous-system sensitivity. Support yourself with hydration,
                grounding meals, slower pacing, and practices that calm
                emotional overwhelm.
              </p>
              <p className="mt-4">
                Taurus season reminds you that healing often happens through
                consistency: rest, nourishment, movement, sunlight, and
                supportive routines.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let silence reveal what needs healing.",
          yang: "Let rest restore inner clarity.",
          content: (
            <>
              <p className="mt-4">
                This week favors emotional decluttering. Reduce unnecessary
                noise, overcommitment, and emotional labor where possible.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What am I holding onto that no longer
                supports who I am becoming?&quot;
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what aligns with your deeper values.",
          yang: "Build steadily from emotional truth.",
          content: (
            <>
              <p className="mt-4">
                Taurus energy supports stable, long-term abundance rather than
                impulsive gains. Focus on sustainability, quality, and emotional
                alignment in finances and work.
              </p>
              <p className="mt-4">
                The Scorpio Full Moon may reveal hidden financial or emotional
                dynamics. Pay attention to what feels draining versus genuinely
                supportive.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let emotional honesty soften your resistance.",
          yang: "Let courage rebuild your foundations.",
          content: (
            <>
              <p className="mt-4">
                Visualize standing in a quiet forest after rain. The air is
                clean, the ground is steady, and everything unnecessary has been
                washed away.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I release what no longer serves me and rebuild
                from truth.
                <br />
                <b>Prompt:</b> What would become possible if I trusted myself
                enough to let go completely?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let release create space for peace.",
          yang: "Let truth strengthen your direction.",
          content: (
            <>
              <p className="mt-4 italic">
                "I trust the endings that create space for deeper alignment."
              </p>
              <p className="mt-4">
                Repeat this affirmation when emotions feel heavy or uncertain.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let transformation happen gently.",
          yang: "Let courage carry you forward.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I release what weighs on my spirit and rebuild my
                life from grounded truth."
              </p>
              <p className="mt-4">
                Taurus teaches stability. Scorpio teaches transformation.
                Together, they remind you that true growth is both rooted and
                brave. Let this week help you clear emotional weight, honor your
                deeper values, and move toward what genuinely nourishes your
                life.
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
