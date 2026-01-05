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
          January 5 – 11, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Ambition — The Capricorn Conjunctions and the Art of Devoted
            Action
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
            This week is a potent Capricorn portal:{" "}
            <b>Sun, Mercury, Venus, and Mars</b> are all moving through{" "}
            <b>Capricorn</b>, strengthening the themes of discipline, devotion,
            and life-building choices. <b>Mercury is direct in Capricorn</b>,
            helping your mind get practical: clearer plans, cleaner boundaries,
            and fewer distractions. The heart of the week is a powerful ignition
            sequence — <b>Venus aligns with Mars on January 7</b>, and{" "}
            <b>the Sun aligns with Mars on January 9</b>, energizing desire,
            courage, and purposeful momentum. On <b>January 10</b>, the{" "}
            <b>Last Quarter Moon in Libra</b> offers a balancing release point:
            refine relationships, restore harmony, and let go of what throws you
            off-center. The same day, <b>Mars opposes Jupiter</b>, reminding us
            that true power is not excess — it is direction.
            <br />
            This is a week to choose your mountain, take one grounded step at a
            time, and let devotion become the most spiritual thing you do.
          </p>
          <p>
            Let this week strengthen your inner backbone, soften your
            relationships with wisdom, and focus your energy on what truly
            matters.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let devotion deepen your inner commitment.",
          yang: "Let disciplined action transform intention into reality.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Capricorn</b>: maturity, structure,
                and long-term focus.
                <br />- <b>All week – Mercury direct in Capricorn</b>: practical
                clarity, grounded planning, and steady decision-making.
                <br />- <b>All week – Venus in Capricorn</b>: love and values
                expressed through consistency, integrity, and devotion.
                <br />- <b>All week – Mars in Capricorn</b>: disciplined drive,
                patient ambition, and focused momentum.
                <br />- <b>Jan 7 – Venus conjunct Mars in Capricorn</b>: desire
                meets devotion; attraction, creativity, and relationship energy
                intensify with purpose.
                <br />- <b>Jan 9 – Sun conjunct Mars in Capricorn</b>: courage,
                vitality, and bold forward motion — power becomes visible
                through action.
                <br />- <b>Jan 10 – Last Quarter Moon in Libra</b>: release
                imbalance, refine boundaries, and restore harmony in your
                relationships and commitments.
                <br />- <b>Jan 10 – Sun and Mars opposite Jupiter</b>: big drive
                meets big expectations — choose wisdom over excess, and
                direction over force.
                <br />- <b>Jan 11 – Vesta enters Aquarius</b>: devotion shifts
                toward community, vision, and the future — commit to what
                matters beyond the ego.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where am I ready to show love through consistency, not just
                words?
                <br />
                - What goal needs less pressure and more daily devotion?
                <br />- What relationship dynamic feels out of balance — and
                what boundary restores harmony?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>January 7</b>, write one commitment you are ready
                to honor in love, money, or self-respect — then take one small
                action to prove it.
                <br />- On <b>January 9</b>, move your body with intention: a
                brisk walk, strength practice, or grounded yoga to channel Mars
                energy cleanly.
                <br />- On <b>January 10</b>, do a Libra reset: tidy a space,
                clear one unresolved conversation, or release one obligation
                that drains you.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let steadiness calm your nervous system.",
          yang: "Let strength build from repetition, not intensity.",
          content: (
            <>
              <p className="mt-4">
                With so much Capricorn energy, the body thrives on simple
                structure. Choose a routine you can repeat: strength training
                basics, long walks, slow yoga, or focused mobility work. The
                goal is not to do more — it is to do what you can sustain.
              </p>
              <p className="mt-4">
                Support bones, joints, and muscles with grounding nourishment:
                warming soups, root vegetables, lentils, sesame, and
                mineral-rich greens. Hydration and sleep are part of the plan —
                not optional extras.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let your inner world soften and restore.",
          yang: "Let rest become the foundation of your power.",
          content: (
            <>
              <p className="mt-4">
                This week can feel energizing and demanding at the same time.
                Create pockets of quiet to prevent burnout: early bedtime
                rituals, screen boundaries, and a slower morning start where
                possible. Capricorn thrives when the system is regulated.
              </p>
              <p className="mt-4">
                The <b>Last Quarter Moon</b> is ideal for release. Before sleep,
                ask: &quot;What am I carrying that is not mine to hold?&quot;
                Exhale it out gently. Let rest be a conscious act of
                self-respect.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive clarity about what is truly valuable.",
          yang: "Build wealth through integrity and focus.",
          content: (
            <>
              <p className="mt-4">
                Venus and Mars in Capricorn favor long-term value: consistent
                effort, wise boundaries, and devotion to craft. This is a strong
                week to review pricing, budgeting, timelines, and systems — not
                from fear, but from sovereignty.
              </p>
              <p className="mt-4">
                With <b>Mars opposite Jupiter</b>, watch the temptation to
                overcommit. Abundance grows faster when your energy is
                protected. Choose one priority that moves the needle, and let
                everything else become secondary.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let your heart become the calm center.",
          yang: "Let your spine become your steady vow.",
          content: (
            <>
              <p className="mt-4">
                Visualize a mountain path beneath your feet. With each inhale,
                draw strength up from the earth. With each exhale, feel your
                energy settle into your body — calm, focused, and unshakable.
                You do not need urgency. You need devotion.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I move with steady purpose and sacred discipline.
                <br />
                <b>Prompt:</b> What is my most important commitment right now —
                and what daily action makes it real?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let devotion soften you into trust.",
          yang: "Let discipline lift you into mastery.",
          content: (
            <>
              <p className="mt-4 italic">
                "I honor my desires with wisdom, and I build my life with
                patience, integrity, and grace."
              </p>
              <p className="mt-4">
                Speak this affirmation daily, especially around the Venus–Mars
                and Sun–Mars conjunctions, to channel power into aligned action.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let love be shown through steadiness.",
          yang: "Let your actions become your prayers.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I choose devotion over distraction — and I become
                the one who follows through."
              </p>
              <p className="mt-4">
                Capricorn energy rewards the quiet ones who keep showing up. Let
                the week be simple: one clear goal, one steady rhythm, one
                honest boundary, and one loving act that proves you mean what
                you say — to others and to yourself.
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
