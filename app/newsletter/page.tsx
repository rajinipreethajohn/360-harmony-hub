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
          April 06 – April 12, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Grounded Expansion and Honest Momentum — Aries Fire, Taurus Values,
            and the Power of Steady Growth
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
            This week continues to build on the <b>Aries season momentum</b>,
            encouraging forward movement, courage, and clean decision-making.
            The <b>Sun in Aries</b> keeps energy direct and action-oriented,
            while <b>Mercury now moving direct in Pisces</b> helps intuition
            slowly translate into clearer thought and communication.
            <br />
            <b>Venus in Taurus</b> deepens the theme of stability, reminding you
            to root your desires in what truly nourishes and lasts. At the same
            time, <b>Mars in Pisces</b> continues to guide action through
            feeling, compassion, and inner alignment rather than force.
            <br />
            On <b>April 9</b>, the <b>Last Quarter Moon in Capricorn</b> invites
            a grounded release: letting go of structures, habits, or
            expectations that no longer support your long-term vision. This is a
            week to refine, simplify, and move forward with both courage and
            integrity.
          </p>
          <p>Let your actions be bold, but let your foundations be steady.</p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let stability guide your emotional clarity.",
          yang: "Let disciplined action shape your forward path.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Aries</b>: courage, initiative,
                leadership, and forward motion.
                <br />- <b>All week – Mercury direct in Pisces</b>: intuitive
                clarity returning, softer communication, and emotional insight.
                <br />- <b>All week – Venus in Taurus</b>: grounded love,
                self-worth, beauty, and steady values.
                <br />- <b>All week – Mars in Pisces</b>: intuitive action,
                gentle persistence, and heart-led movement.
                <br />- <b>Apr 9 – Last Quarter Moon in Capricorn</b>: release,
                restructuring, and practical course correction.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                responsibility, and building with intention.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What structures in my life feel aligned, and what feels heavy
                or outdated?
                <br />
                - Where can I bring more integrity into my actions?
                <br />- What am I building that I truly want to sustain?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>April 9</b>, write down one habit or expectation
                you are ready to release, and one structure you are ready to
                strengthen.
                <br />- Choose one grounded action this week that supports your
                long-term vision.
                <br />- Spend time in nature or in a calm space to reconnect
                with what feels stable and true.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body feel supported and steady.",
          yang: "Let movement be intentional and sustainable.",
          content: (
            <>
              <p className="mt-4">
                This week favors consistency over intensity. Support your body
                with nourishing meals, hydration, and routines that feel
                repeatable and grounding.
              </p>
              <p className="mt-4">
                Choose movement that builds strength without strain: walking,
                strength training, yoga, or any form of exercise that feels both
                energizing and stabilizing.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let rest soften the edges of effort.",
          yang: "Let stillness sharpen your long-term vision.",
          content: (
            <>
              <p className="mt-4">
                The Last Quarter Moon invites you to pause and reflect before
                pushing ahead. Rest is not a delay — it is part of alignment.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What am I ready to release so I can
                move forward more cleanly?&quot; Let the answer guide your next
                steps.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what is steady and nourishing.",
          yang: "Act on what builds long-term value.",
          content: (
            <>
              <p className="mt-4">
                Venus in Taurus supports abundance that is rooted in
                consistency, self-worth, and real value. Focus on what feels
                sustainable rather than what feels urgent.
              </p>
              <p className="mt-4">
                The Capricorn Moon energy encourages practical adjustments.
                Small, intentional changes now can create strong foundations for
                future growth.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let patience deepen your strength.",
          yang: "Let steady action carry your momentum.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself building something stone by stone. Each step
                is intentional, each choice grounded. You are not rushing — you
                are creating something that will last.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I move forward with clarity, strength, and
                integrity.
                <br />
                <b>Prompt:</b> What can I do this week that my future self will
                thank me for?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let steadiness calm your mind.",
          yang: "Let intention guide your actions.",
          content: (
            <>
              <p className="mt-4 italic">
                "I build my life with patience, purpose, and grounded
                confidence."
              </p>
              <p className="mt-4">
                Repeat this affirmation when you feel pulled between rushing and
                trusting the process.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let calmness become your anchor.",
          yang: "Let courage become your direction.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I release what no longer supports me and step
                forward with grounded strength."
              </p>
              <p className="mt-4">
                Aries fuels your courage. Taurus anchors your values. Capricorn
                refines your path. Let this week be one of quiet strength —
                steady, intentional, and aligned with what truly matters.
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
