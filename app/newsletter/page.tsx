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
          January 12 – January 18, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>The Sacred Reset — Capricorn Closure and the New Moon Threshold</b>
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
            This week carries a powerful sense of <b>closure and renewal</b>.
            The{" "}
            <b>
              Sun, Mercury, Venus, and Mars continue their journey through
              Capricorn
            </b>
            , concentrating energy around responsibility, long-term vision, and
            conscious life design. <b>Mercury remains direct in Capricorn</b>,
            supporting practical thinking and honest assessment: what systems
            are working, and what needs refinement?
            <br />
            As the week unfolds, we approach a potent reset point — the{" "}
            <b>New Moon in Capricorn on January 18</b>. This lunation invites
            intentional beginnings rooted in discipline rather than impulse. On{" "}
            <b>January 17</b>, <b>Venus enters Aquarius</b>, subtly shifting
            relationship and value themes toward authenticity, freedom, and
            future-oriented connections. This is a bridge week: release the
            weight of old obligations, clarify your commitments, and prepare to
            seed what you are truly ready to build next.
          </p>
          <p>
            Let this week be deliberate and spacious — a quiet clearing before a
            grounded, purposeful new beginning.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let completion soften you into readiness.",
          yang: "Let intention anchor your next beginning.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Capricorn</b>: focus on structure,
                accountability, and long-term priorities.
                <br />- <b>All week – Mercury direct in Capricorn</b>: clear
                planning, grounded communication, and realistic thinking.
                <br />- <b>All week – Mars in Capricorn</b>: disciplined drive,
                patience, and sustained effort.
                <br />- <b>Jan 17 – Venus enters Aquarius</b>: relationships and
                values shift toward authenticity, independence, and future
                vision.
                <br />- <b>Jan 18 – New Moon in Capricorn</b>: a powerful reset
                for goals, commitments, and life structures built to last.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What responsibility am I ready to release because it no longer
                reflects who I am becoming?
                <br />
                - What kind of structure would actually support my freedom?
                <br />- What does success feel like in my body and daily life —
                not just on paper?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Early in the week, complete one lingering task you have
                been avoiding — let closure create space.
                <br />- On <b>January 17</b>, review your relationships and
                commitments: where can honesty replace obligation?
                <br />- On <b>January 18</b>, write 1–3 New Moon intentions that
                focus on habits, boundaries, or systems you can sustain over
                time.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let steadiness restore your energy.",
          yang: "Let simple structure support vitality.",
          content: (
            <>
              <p className="mt-4">
                Capricorn energy continues to favor consistency over intensity.
                Choose movements that strengthen and stabilize: slow strength
                training, long walks, Pilates, or grounding yoga focused on the
                legs and core.
              </p>
              <p className="mt-4">
                Nourish your body with warming, mineral-rich foods and regular
                mealtimes. Gentle routines support hormone balance and nervous
                system regulation as the New Moon approaches.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let rest integrate the lessons of effort.",
          yang: "Let restoration prepare you for a clean start.",
          content: (
            <>
              <p className="mt-4">
                The days before a New Moon are ideal for rest and reflection.
                Create quieter evenings, reduce stimulation, and allow yourself
                to slow down without guilt.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What am I ready to release so I can
                begin again with clarity?&quot; Trust that rest is part of your
                productivity cycle, not separate from it.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive clarity about what is sustainable.",
          yang: "Build wealth through patience and focus.",
          content: (
            <>
              <p className="mt-4">
                The Capricorn New Moon supports long-term abundance strategies.
                This is a strong week to simplify financial plans, review
                commitments, and remove energy leaks.
              </p>
              <p className="mt-4">
                As Venus prepares to shift signs, reassess what you value most:
                stability, freedom, or innovation — and how your choices can
                reflect all three in balance.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let inner truth guide your reset.",
          yang: "Let commitment become your quiet strength.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing at the base of a mountain at dawn.
                The path ahead is clear, not rushed. With each breath, feel
                yourself grounded, capable, and supported by your own
                consistency.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I release what is complete and commit to what is
                true.
                <br />
                <b>Prompt:</b> What structure, habit, or boundary would most
                support the life I am ready to build now?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let release create spaciousness.",
          yang: "Let intention shape the path ahead.",
          content: (
            <>
              <p className="mt-4 italic">
                "I honor what I have built, I release what no longer fits, and I
                begin again with clarity and devotion."
              </p>
              <p className="mt-4">
                Speak this affirmation during the New Moon to align your inner
                resolve with grounded, sustainable action.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let endings be gentle.",
          yang: "Let beginnings be intentional.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I clear the ground — and I choose what I am ready to
                grow."
              </p>
              <p className="mt-4">
                The Capricorn New Moon does not ask for perfection — it asks for
                honesty and commitment. Release what is heavy, keep what is
                essential, and step forward with patience and trust in your
                ability to build a life that truly supports you.
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
