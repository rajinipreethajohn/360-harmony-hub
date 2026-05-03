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
          May 04 – May 10, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Steady Growth and Heart-Led Expression — Taurus Stability, Leo
            Courage, and Grounded Momentum
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
            This week continues the grounded rhythm of <b>Taurus season</b>,
            inviting patience, embodiment, and steady growth. The <b>Sun in
            Taurus</b> keeps the focus on what is real, sustainable, and deeply
            nourishing. You are being asked to build something that lasts — not
            something that simply looks good for a moment.
            <br />
            <b>Venus in Gemini</b> brings lightness into connection,
            communication, and creativity, reminding you that curiosity and
            openness can coexist with stability. Meanwhile, <b>Mercury in
            Taurus</b> supports practical thinking, grounded decisions, and
            clear, steady communication.
            <br />
            On <b>May 9</b>, the <b>Last Quarter Moon in Aquarius</b> invites release
            around ego, pride, and old expressions of identity. This is a moment
            to refine how you show up — not by shrinking, but by aligning more
            honestly with your heart.
          </p>
          <p>
            Let your growth be steady, your expression be true, and your energy
            be rooted in what matters most.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let grounded truth guide your choices.",
          yang: "Let authentic expression refine your path.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Taurus</b>: stability,
                nourishment, patience, embodiment, and value-driven living.
                <br />- <b>All week – Venus in Gemini</b>: curiosity,
                communication, flexibility, and social connection.
                <br />- <b>Early week – Mercury in Aries: direct thinking, bold communication, and quick decisions.
                May 6 – Mercury enters Taurus: grounded thought, practical communication, and steady focus.
                <br />- <b>All week – Mars in Aries</b>: courage, initiative,
                action, and forward momentum.
                <br />- <b>May 9 – Last Quarter Moon in Aquarius</b>: release, perspective shifts, emotional detachment, and forward-thinking clarity.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage
                and responsible self leadership.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What am I building that truly matters long-term?
                <br />
                - Where does my expression feel misaligned or forced?
                <br />- What can I release to show up more authentically?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Midweek, release one behavior or expectation that no
                longer reflects who you are becoming.
                <br />- On <b>May 7</b>, reflect on how you present yourself and
                gently refine it toward truth.
                <br />- Choose one grounded action that supports your future
                self and repeat it daily.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let steady rhythms calm your system.",
          yang: "Let movement strengthen your vitality.",
          content: (
            <>
              <p className="mt-4">
                Taurus energy supports healing through consistency: nourishing
                meals, hydration, sunlight, rest, and routines that feel safe
                and stabilizing.
              </p>
              <p className="mt-4">
                Mars in Aries benefits from active outlets. Move your body in
                ways that build strength and release tension — walking, yoga,
                strength work, or playful movement.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness reconnect you to your truth.",
          yang: "Let rest sharpen your clarity.",
          content: (
            <>
              <p className="mt-4">
                This is a week to simplify. Reduce noise, distractions, and
                unnecessary commitments so you can hear yourself more clearly.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What version of me feels most honest and
                at peace?&quot;
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what reflects your true value.",
          yang: "Act where consistency builds growth.",
          content: (
            <>
              <p className="mt-4">
                Taurus energy supports slow, reliable abundance. Focus on
                quality, consistency, and trust rather than quick wins.
              </p>
              <p className="mt-4">
                Venus in Gemini may bring opportunities through conversations,
                networking, and sharing ideas. Stay open, but grounded in your
                worth.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let calmness become your anchor.",
          yang: "Let authenticity become your strength.",
          content: (
            <>
              <p className="mt-4">
                Visualize standing rooted like a tree, while sunlight warms your
                face. You are steady, yet alive and expressive.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I move steadily, and I express myself honestly.
                <br />
                <b>Prompt:</b> What would change if I allowed myself to be fully
                authentic this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let truth soften resistance.",
          yang: "Let courage refine your direction.",
          content: (
            <>
              <p className="mt-4 italic">
                "I honor my truth, and I build my life with steady courage."
              </p>
              <p className="mt-4">
                Repeat this when you feel pulled between comfort and growth.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let your roots deepen in truth.",
          yang: "Let your expression rise with clarity.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I release what is not true and stand firmly in who I
                am becoming."
              </p>
              <p className="mt-4">
                Taurus grounds you. Leo refines your expression. Aries fuels your
                courage. Let this week become a quiet turning point — where you
                choose authenticity over performance, and steadiness over
                urgency.
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