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
          March 09 – March 15, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Quiet Knowing and Brave Alignment — Pisces Devotion, Jupiter&apos;s
            Forward Turn, and Clearer Inner Direction
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
            This week carries a quieter kind of power. The{" "}
            <b>Sun remains in Pisces</b>, and both <b>Mercury retrograde</b> and{" "}
            <b>Mars in Pisces</b> ask you to listen beneath the noise: beneath
            urgency, beneath overthinking, beneath old emotional habits. This is
            a week for moving in alignment rather than in force.
            <br />
            On <b>March 11</b>, <b>Jupiter stations direct in Cancer</b>,
            restoring flow in the emotional, familial, and inner-foundation
            areas of life. The same day, the <b>Last Quarter Moon</b> invites a
            thoughtful release: what is no longer worth carrying forward? Then,
            on <b>March 13</b>, <b>Mars conjoins the North Node in Pisces</b>,
            amplifying the feeling that a soul-led path is opening — quietly,
            but unmistakably.
            <br />
            By <b>March 15</b>, <b>Mercury conjoins Mars in Pisces</b>, bringing
            sharp feeling, honest words, and the potential for emotional truth
            to rise quickly. Speak gently, move intentionally, and trust what
            feels clear in your body.
          </p>
          <p>
            Let this week help you release what is heavy and move toward what is
            quietly calling you.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let stillness reveal the truth beneath emotion.",
          yang: "Let inner clarity guide the next brave move.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Pisces</b>: intuition, empathy,
                spiritual depth, and emotional sensitivity.
                <br />- <b>All week – Mercury retrograde in Pisces</b>: review,
                reflection, unfinished feelings, and inward listening.
                <br />- <b>All week – Venus in Aries</b>: bold self-worth,
                direct desire, and fresh confidence in love and value.
                <br />- <b>All week – Mars in Pisces</b>: heart-led action,
                subtle courage, and movement guided by feeling.
                <br />- <b>Mar 11 – Jupiter stations direct in Cancer</b>:
                emotional growth, restored faith, and renewed support around
                home and belonging.
                <br />- <b>Mar 11 – Last Quarter Moon</b>: release, edit, and
                course-correct with honesty.
                <br />- <b>Mar 13 – Mars conjunct North Node in Pisces</b>:
                destiny-tinted action, intuitive courage, and soulful momentum.
                <br />- <b>Mar 15 – Mercury conjunct Mars in Pisces</b>: charged
                conversations, fast insight, and words that carry emotional
                heat.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What feels quietly undeniable now?
                <br />
                - What am I being guided to release before the next beginning?
                <br />- Where can I trust intuition without abandoning
                discernment?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>March 11</b>, journal what feels lighter, clearer,
                or newly hopeful as Jupiter turns direct.
                <br />- Use the <b>Last Quarter Moon</b> to release one task,
                expectation, or emotional loop that no longer supports you.
                <br />- On <b>March 15</b>, pause before sending important
                messages. Let honesty stay compassionate.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentle care restore your inner waters.",
          yang: "Let consistent action support emotional strength.",
          content: (
            <>
              <p className="mt-4">
                Pisces energy can feel permeable, so your body may need more
                grounding than usual. Prioritize hydration, warm meals,
                magnesium-rich foods, slower mornings, and movement that calms
                rather than agitates.
              </p>
              <p className="mt-4">
                Jupiter turning direct can feel like a subtle emotional exhale.
                Support that shift with routines that feel safe and repeatable:
                walks, stretching, breathwork, and simple nourishment.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let silence become medicine.",
          yang: "Let rest sharpen your discernment.",
          content: (
            <>
              <p className="mt-4">
                This is a strong week for quiet restoration. With Mercury
                retrograde and Mars in Pisces, your system may pick up more than
                usual. Protect your peace from excess input.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What truth is emerging when I stop
                forcing answers?&quot; Let your dreams and body sensations speak
                in their own language.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive support that feels nourishing and real.",
          yang: "Act on what aligns, not on what merely pressures.",
          content: (
            <>
              <p className="mt-4">
                Jupiter direct brings movement to what may have felt delayed,
                especially around emotional security, home, belonging, and inner
                trust. Notice where life starts breathing again.
              </p>
              <p className="mt-4">
                Venus in Aries reminds you that self-worth shapes abundance.
                Make one decision this week that reflects your standards, not
                your fear.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let softness become your compass.",
          yang: "Let brave clarity move through you cleanly.",
          content: (
            <>
              <p className="mt-4">
                Visualize standing at the shoreline just before sunrise. The
                tide moves in and out without strain. Your truth can do the
                same. It can arrive gently and still be powerful.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I trust what is quietly becoming clear.
                <br />
                <b>Prompt:</b> What would change if I let alignment matter more
                than urgency this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let trust soften your resistance.",
          yang: "Let courage follow what feels true.",
          content: (
            <>
              <p className="mt-4 italic">
                "I release what is no longer mine to carry, and I move with
                quiet courage toward what is meant for me."
              </p>
              <p className="mt-4">
                Repeat this affirmation when you feel pulled between emotion and
                clarity. It returns you to trust.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the heart speak in subtler ways.",
          yang: "Let your next step come from clean inner knowing.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I listen more deeply, release more gently, and trust
                what is quietly guiding me forward."
              </p>
              <p className="mt-4">
                Pisces asks for surrender, but not passivity. Jupiter direct
                restores faith. Mars and Mercury remind you that words and
                choices carry energy. Let this week be softer — and truer.
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
