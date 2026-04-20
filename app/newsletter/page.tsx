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
          April 20 – April 26, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Grounding and Bright Visibility — Taurus Season, Rooted
            Worth, and the Courage to Be Seen
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
            This week settles more deeply into the rich and steady rhythm of{" "}
            <b>Taurus season</b>. The <b>Sun in Taurus</b> invites patience,
            embodiment, simplicity, and devotion to what truly matters. Life may
            ask you to slow down — not to delay you, but to help you build
            wisely.
            <br />
            <b>Venus remains in Taurus</b>, amplifying themes of self-worth,
            beauty, loyalty, sensuality, and receiving what is aligned with your
            values. <b>Mercury in Aries</b> keeps communication honest and bold,
            while <b>Mars in Aries</b> supports initiative, courage, and visible
            momentum.
            <br />
            On <b>April 23</b>, the <b>First Quarter Moon in Leo</b> energizes
            creativity, confidence, and heart-led action. This week asks you to
            root yourself in what is real while allowing yourself to shine more
            fully. Build steadily, but do not hide your light.
          </p>
          <p>Let what you value become visible through the way you live.</p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let self-worth ground your choices.",
          yang: "Let courage bring your gifts into the light.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Taurus</b>: stability, embodiment,
                patience, pleasure, and value-centered growth.
                <br />- <b>All week – Venus in Taurus</b>: grounded love,
                beauty, loyalty, abundance, and self-respect.
                <br />- <b>All week – Mercury in Aries</b>: direct speech, bold
                decisions, and clear mental momentum.
                <br />- <b>All week – Mars in Aries</b>: courage, action,
                leadership, and energetic forward movement.
                <br />- <b>Apr 23 – First Quarter Moon in Leo</b>: confidence,
                creativity, visibility, and heart-led progress.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                self-leadership, and responsible action.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What feels truly valuable and worth my devotion now?
                <br />
                - Where am I ready to be seen more fully?
                <br />- What can I build patiently while acting courageously?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Create one Taurus ritual this week: beautiful meals,
                fresh flowers, music, touch, or time in nature.
                <br />- On <b>April 23</b>, take one visible action that honors
                your talents or leadership.
                <br />- Choose one commitment this week that reflects your real
                priorities rather than old habits.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let nourishment calm your nervous system.",
          yang: "Let movement energize your confidence.",
          content: (
            <>
              <p className="mt-4">
                Taurus season supports healing through rhythm and consistency.
                Prioritize sleep, hydration, grounding foods, and routines that
                help your body feel safe and strong.
              </p>
              <p className="mt-4">
                Mars in Aries benefits from active outlets: brisk walks,
                strength work, dance, yoga, or anything that channels fire into
                vitality rather than restlessness.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness reconnect you to your body.",
          yang: "Let rest strengthen your next move.",
          content: (
            <>
              <p className="mt-4">
                Slow moments are sacred this week. Taurus reminds you that peace
                is productive when it restores your inner resources.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What already feels abundant in my life,
                and how can I honor it more deeply?&quot;
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what matches your worth.",
          yang: "Take action where visibility creates growth.",
          content: (
            <>
              <p className="mt-4">
                Venus in Taurus favors abundance through quality, consistency,
                craftsmanship, beauty, trust, and long-term value.
              </p>
              <p className="mt-4">
                The Leo Quarter Moon supports being seen. Promote your work,
                share your ideas, speak up, or let others witness the value you
                carry.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let calmness become your magnetism.",
          yang: "Let courage become your momentum.",
          content: (
            <>
              <p className="mt-4">
                Visualize roots growing beneath your feet while sunlight warms
                your face. You are steady below and radiant above. Both are
                true.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I honor my worth, and I let myself be seen.
                <br />
                <b>Prompt:</b> Where would life expand if I stopped hiding my
                gifts?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let worthiness soften self-doubt.",
          yang: "Let boldness shape your future.",
          content: (
            <>
              <p className="mt-4 italic">
                "I root myself in value, and I rise with confidence."
              </p>
              <p className="mt-4">
                Repeat this affirmation whenever hesitation appears. Let it
                return you to grounded strength.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let your roots deepen.",
          yang: "Let your light reach farther.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I choose what is real, and I allow myself to shine."
              </p>
              <p className="mt-4">
                Taurus teaches you to treasure what lasts. Leo reminds you to be
                seen. Aries gives you the courage to act. Let this week become a
                sacred blend of steadiness, confidence, and embodied joy.
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
