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
          April 13 – April 19, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Stability and Fresh Fire — Taurus Season Rising, Rooted Love,
            and the Courage to Begin Again
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
            This week bridges bold momentum with grounded embodiment. The{" "}
            <b>Sun finishes its final days in Aries</b>, encouraging courage,
            action, and self-trust, before entering <b>Taurus on April 19</b>,
            where the collective energy slows, stabilizes, and seeks what is
            lasting and real.
            <br />
            <b>Venus remains in Taurus</b>, deepening themes of self-worth,
            beauty, sensuality, and steady love. What nourishes you becomes more
            obvious now. What drains you becomes harder to ignore.
            <br />
            On <b>April 16</b>, the <b>New Moon in Aries</b> opens a fresh cycle
            of confidence, independence, and courageous beginnings. This is a
            powerful week to plant a seed that reflects who you are now — not
            who you used to be. Let action be brave, but let your roots grow
            deep.
          </p>
          <p>
            Begin boldly, but build slowly. What lasts is worth the patience.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let grounded love hold your new beginning.",
          yang: "Let courage move you into your next chapter.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Apr 13–18 – Sun in Aries</b>: initiative, confidence,
                leadership, and brave momentum.
                <br />- <b>Apr 19 – Sun enters Taurus</b>: stability,
                embodiment, patience, and value-centered living.
                <br />- <b>All week – Venus in Taurus</b>: self-worth, grounded
                love, beauty, sensuality, and steady connection.
                <br />- <b>All week – Mercury in Pisces</b>: intuitive thought,
                emotional intelligence, and softer communication.
                <br />- <b>All week – Mars in Pisces</b>: heart-led action,
                subtle persistence, and soul-guided movement.
                <br />- <b>Apr 16 – New Moon in Aries</b>: courageous new
                beginnings, identity renewal, and bold intentions.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                mature self-leadership, and building through action.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What am I ready to begin with full honesty and courage?
                <br />
                - What kind of life feels sustainable, nourishing, and true?
                <br />- Where do I need both boldness and patience right now?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>April 16</b>, write three intentions that reflect
                the version of you that is emerging now.
                <br />- Start one small brave action this week that your future
                self will thank you for.
                <br />- On <b>April 19</b>, ground your energy through nature,
                beautiful food, touch, or time in stillness.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let nourishment become your medicine.",
          yang: "Let movement support your confidence.",
          content: (
            <>
              <p className="mt-4">
                Aries energy benefits from movement, circulation, and healthy
                challenge. Taurus energy benefits from nourishment, routine, and
                consistency. Blend both this week.
              </p>
              <p className="mt-4">
                Choose workouts that energize without depleting, meals that feel
                satisfying and supportive, and rhythms that calm your nervous
                system while keeping momentum alive.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness root your next chapter.",
          yang: "Let rest sharpen your courage.",
          content: (
            <>
              <p className="mt-4">
                A New Moon week asks for inner space as much as outer action.
                Protect your energy from noise, urgency, and comparison.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What wants to begin through me now, and
                what needs gentler timing?&quot;
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what feels nourishing and real.",
          yang: "Take action where growth wants momentum.",
          content: (
            <>
              <p className="mt-4">
                Venus in Taurus supports abundance through value, consistency,
                beauty, trust, and tangible results. Focus on what can grow
                steadily rather than instantly.
              </p>
              <p className="mt-4">
                The Aries New Moon supports entrepreneurial courage and fresh
                initiatives. Start simply. Momentum builds through repetition.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let softness anchor your worth.",
          yang: "Let courage carry your vision forward.",
          content: (
            <>
              <p className="mt-4">
                Visualize planting a seed in rich soil. Above ground, life is
                beginning. Below ground, roots are forming. Both are sacred.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I begin bravely, and I build wisely.
                <br />
                <b>Prompt:</b> What new beginning deserves my steady devotion?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let worthiness soften your fears.",
          yang: "Let action strengthen your trust.",
          content: (
            <>
              <p className="mt-4 italic">
                "I honor what I desire, and I build it with courage, patience,
                and love."
              </p>
              <p className="mt-4">
                Repeat this affirmation whenever doubt appears. Let it bring you
                back to your center.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let roots grow beneath what is blooming.",
          yang: "Let courage meet consistency.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I begin again with bravery, and I grow with grace."
              </p>
              <p className="mt-4">
                Aries reminds you to trust yourself enough to start. Taurus
                reminds you to love yourself enough to sustain it. Let this week
                become a turning point — not because it was dramatic, but
                because it was true.
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
