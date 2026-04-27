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
          April 27 – May 03, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Rooted Truth and Emotional Release — Taurus Grounding, Gemini
            Connection, and the Scorpio Full Moon
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
            This week asks for rooted honesty and emotional release. The{" "}
            <b>Sun remains in Taurus</b>, encouraging steadiness, embodiment,
            patience, and devotion to what truly matters. Taurus reminds you
            that growth does not need to be rushed to be real.
            <br />
            <b>Venus in Gemini</b> brings lightness, curiosity, conversation,
            and new perspectives into love, creativity, and connection.
            Meanwhile, <b>Mercury in Aries</b> keeps communication direct and
            brave until <b>May 2</b>, when <b>Mercury enters Taurus</b>, helping
            thoughts become more grounded, practical, and steady.
            <br />
            The emotional center of the week arrives with the{" "}
            <b>Full Moon in Scorpio on May 1</b>, illuminating intimacy, shared
            resources, emotional truth, trust, and release. What has been hidden
            may rise to the surface — not to overwhelm you, but to free you.
          </p>
          <p>
            Let this week ground your body, open your voice, and clear your
            emotional field.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let emotional truth rise without fear.",
          yang: "Let grounded clarity shape your next step.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Taurus</b>: grounding, nourishment,
                patience, embodiment, and long-term stability.
                <br />- <b>All week – Venus in Gemini</b>: curiosity,
                communication, social ease, and flexible connection.
                <br />- <b>Apr 27–May 1 – Mercury in Aries</b>: direct thinking,
                bold communication, and quick decisions.
                <br />- <b>May 2 – Mercury enters Taurus</b>: grounded thought,
                practical communication, and steady focus.
                <br />- <b>All week – Mars in Aries</b>: courage, initiative,
                passion, and decisive movement.
                <br />- <b>May 1 – Full Moon in Scorpio</b>: emotional
                illumination, release, intimacy, transformation, and truth.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage
                and mature self-leadership.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What emotional truth is asking to be acknowledged?
                <br />
                - Where do I need more honest communication and less assumption?
                <br />- What am I ready to release so I can feel lighter and
                more whole?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Midweek, speak or write one truth you have been holding
                inside.
                <br />- On <b>May 1</b>, release one emotional pattern,
                attachment, or fear under the Scorpio Full Moon.
                <br />- On <b>May 2</b>, ground your thoughts by writing a
                simple practical plan for the month ahead.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body feel safe enough to soften.",
          yang: "Let movement release emotional pressure.",
          content: (
            <>
              <p className="mt-4">
                Taurus season supports nervous-system healing through rhythm,
                nourishment, sleep, hydration, and slow presence. Let your body
                feel cared for before asking it to do more.
              </p>
              <p className="mt-4">
                Mars in Aries benefits from healthy outlets: brisk walks,
                strength work, dance, yoga, or shaking out tension. Move emotion
                through the body rather than storing it.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness reveal what has been buried.",
          yang: "Let rest restore your emotional strength.",
          content: (
            <>
              <p className="mt-4">
                The Scorpio Full Moon can feel intense or revealing. Give
                yourself space for privacy, journaling, and quiet emotional
                processing.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What am I ready to release with love,
                not resentment?&quot; Let the answer rise gently.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive clarity about what truly feels secure.",
          yang: "Act where courage meets practical value.",
          content: (
            <>
              <p className="mt-4">
                Taurus and Scorpio together highlight money, resources, trust,
                giving, receiving, and emotional safety. This week may reveal
                where your relationship with security needs healing.
              </p>
              <p className="mt-4">
                Venus in Gemini supports conversations around value,
                collaboration, pricing, and connection. Speak openly, but keep
                your choices rooted in self-respect.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let truth become medicine.",
          yang: "Let courage become clean action.",
          content: (
            <>
              <p className="mt-4">
                Visualize a deep river under moonlight. The surface reflects,
                but the depths hold wisdom. With each breath, allow what is
                hidden to become safe enough to be known.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I release what is heavy and return to what is
                true.
                <br />
                <b>Prompt:</b> What truth would set me free if I allowed myself
                to face it gently?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let release soften old fear.",
          yang: "Let clarity strengthen your path.",
          content: (
            <>
              <p className="mt-4 italic">
                "I am safe to release what no longer supports my peace, power,
                and becoming."
              </p>
              <p className="mt-4">
                Repeat this affirmation around the Scorpio Full Moon to return
                to grounded emotional strength.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the hidden become healing.",
          yang: "Let the honest become freeing.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I honor what is true, release what is heavy, and
                ground myself in peace."
              </p>
              <p className="mt-4">
                Taurus reminds you to value what lasts. Gemini opens the
                conversation. Scorpio reveals what must be transformed. Let this
                week be honest, grounding, and deeply freeing.
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
