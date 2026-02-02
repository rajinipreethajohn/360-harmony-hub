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
          February 2 – February 8, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Intuitive Insight & Brave Innovation — From Leo Lunar Illumination
            to Mercury’s Pisces Shift
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
            This week opens under the final glow of the **Leo Full Moon** — a
            spotlight on confidence, creative authenticity, and emotional
            illumination that still lingers in the first days of February. 🌕
            Soon after, **Uranus stations direct in Taurus** on <b>Feb 3</b>,
            stabilizing surprising shifts and helping innovations take root in
            practical reality. Midweek, we encounter dynamic sparks: **Mercury
            squares Uranus** on <b>Feb 5</b>, shaking up old mental patterns
            with sudden insights. On <b>Feb 6</b>, **Mercury enters Pisces**,
            softening logic into intuition and inviting dreamy, poetic thinking.
            The week finishes with **Venus square Uranus** on <b>Feb 8</b>,
            encouraging liberated expressions of love, beauty, and values.
            <br />
            This is a week to balance the fire of creative clarity with the
            receptive flow of imagination — to think with your heart and act
            with vision.
          </p>
          <p>
            Let this week remind you: clarity can come from stillness, and
            inspiration can come from surprise.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the Full Moon illuminate your inner fire and heartfelt truth.",
          yang: "Let fresh innovation spark intentional action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Feb 2 – Leo Full Moon carried forward</b>:
                confidence, creativity, recognition, and emotional illumination.
                <br />- <b>Feb 3 – Uranus stations direct in Taurus</b>:
                stabilizes unexpected shifts and supports grounded innovation.
                <br />- <b>Feb 5 – Mercury square Uranus</b>: sudden insights,
                bold ideas, and mental recalibration.
                <br />- <b>Feb 6 – Mercury enters Pisces</b>: intuitive, dreamy,
                holistic thinking rises.
                <br />- <b>Feb 8 – Venus square Uranus</b>: liberated love,
                spontaneous connection, and creative surprises.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What truth did the Full Moon reveal that still feels alive?
                <br />
                - Where in your life is surprise asking you to stretch — without
                losing your center?
                <br />- How can imagination and structure collaborate this week?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>Feb 3</b>, journal one surprise you want to make
                steady — a creative habit, a relationship rhythm, or a new
                intention.
                <br />- On <b>Feb 5</b>, do a creative free-write: let ideas
                flow uncensored for 10–15 minutes.
                <br />- On <b>Feb 6</b>, take a slow, meditative walk and notice
                what your intuition wants to tell you.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let the nervous system soften into receptive awareness.",
          yang: "Let consistent movement anchor your vitality.",
          content: (
            <>
              <p className="mt-4">
                Pisces and Aquarius influences ask for nourishment that balances
                energy and calm. Move gently: long walks, restorative yoga,
                breathwork, or dance that releases tension.
              </p>
              <p className="mt-4">
                Support your system with cooling herbs, hydration, and
                nutrient-rich meals. A short evening ritual — tea, warmth, dim
                lights — can support restful integration of the day’s intensity.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness become your sanctuary.",
          yang: "Let deep rest deepen your insight.",
          content: (
            <>
              <p className="mt-4">
                With Mercury in Pisces, rest isn’t “checking out” — it’s tuning
                in to subtle wisdom. Prioritize sleep routines and calm rituals
                before bed. This opens space for imagination to become intuitive
                clarity.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What did my heart want to tell me
                today?&quot; Let the answer float up without judgment or force.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what opens your heart and expands your vision.",
          yang: "Build what feels soulful and practical.",
          content: (
            <>
              <p className="mt-4">
                Venus square Uranus invites adaptive approaches to
                relationships, creativity, and value. New opportunities can
                arrive from unexpected sources — be willing to listen before
                choosing.
              </p>
              <p className="mt-4">
                Mercury in Pisces helps you see the “soft edges” of abundance:
                community, intuition, imagination, and empathy. Let these become
                part of your wealth-building practice.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let inner curiosity expand your awareness.",
          yang: "Let deliberate action anchor your inspiration.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself with one foot rooted deep like an oak and one
                foot reaching out like a stream of light. You are both stable
                and connected — grounded, yet open.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I open my heart to insight and act with clear
                intention.
                <br />
                <b>Prompt:</b> What wisdom wants to be lived, not just known?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let imagination guide your spirit.",
          yang: "Let intention shape your day.",
          content: (
            <>
              <p className="mt-4 italic">
                "I balance revelation with presence, imagination with grounded
                intention."
              </p>
              <p className="mt-4">
                Speak this affirmation daily, especially in the moments when
                insight and action overlap.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let your inner insight calm your heart.",
          yang: "Let your creative bravery become your practice.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I remain open — to surprise, to intuition, to
                unexpected beauty."
              </p>
              <p className="mt-4">
                As Mercury moves into Pisces and dynamic aspects activate the
                sky, you are invited to balance wonder with grounded choice.
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
