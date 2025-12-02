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
          December 1 – December 7, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Embracing Reflection — Deepening Presence in Early Capricorn Energy
          </b>
        </p>
      </motion.div>

      {/* 💡 PDF note */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this week’s edition, scroll to the end and click{" "}
        <b>“Download as PDF.”</b>
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
            As <b>December begins</b>, the Sun’s transit into{" "}
            <b>Capricorn on December 3</b> invites us into a season of
            discipline, presence, and steady growth. This week is perfect for
            reflection on all that’s emerged so far this year and turning
            intention into grounded action.
            <br />
            Allow yourself to slow down, connect deeply with your roots, and
            prepare to build steadily for the future.
          </p>
          <p>
            Let this week be a space of{" "}
            <b>intentional patience, focused presence, and evolving wisdom.</b>
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let reflection deepen your inner knowing.",
          yang: "Let steady action embody emerging clarity.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Dec 1 – Venus sextile Neptune</b>, enhancing
                compassion and spiritual connection.
                <br />- <b>Dec 3 – Sun enters Capricorn</b>, marking a turn
                toward discipline and structure.
                <br />- <b>Dec 6 – Mercury conjunct Saturn</b>, focusing mental
                energy on realistic planning.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What areas of your life need thoughtful tending and steady
                patience?
                <br />
                - How can you align ambition with heart-centered wisdom?
                <br />- Where will you plant seeds for growth this winter?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>December 1</b>, practice a gratitude meditation
                focused on support systems.
                <br />- On <b>December 3</b>, set intentions for disciplined
                nurturing and growth.
                <br />- On <b>December 6</b>, journal about realistic goals and
                practical next steps.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let calm breath ease the mind and body.",
          yang: "Let purposeful movement nourish strength and endurance.",
          content: (
            <>
              <p className="mt-4">
                Embrace grounding wellness practices: slow mindful yoga,
                restorative stretching, and warm, nourishing foods like root
                vegetables, whole grains, and stews.
              </p>
              <p className="mt-4">
                Include breath-focused practices such as slow pranayama or
                gentle meditation to steady energy and improve focus.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let nurturing stillness restore your core.",
          yang: "Let restful rhythms support sustained vitality.",
          content: (
            <>
              <p className="mt-4">
                Prioritize earlier bedtimes and calming evenings with herbal
                teas and journaling. Minimize screen use at least one hour
                before sleep to support natural rest cycles.
              </p>
              <p className="mt-4">
                Consider a weekly ritual of salt baths or sound healing to clear
                tension and invite deep renewal.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive with openness and wisdom.",
          yang: "Act with strategic clarity and patient intent.",
          content: (
            <>
              <p className="mt-4">
                As the Sun enters Capricorn, focus on long-term financial wisdom
                and responsibility. Mercury conjunct Saturn supports clear,
                practical communication in partnership and work.
              </p>
              <p className="mt-4">
                Take steady steps toward goals, balancing ambition with
                self-care and integrity.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into the grounding warmth within you.",
          yang: "Radiate calm, confident strength outward.",
          content: (
            <>
              <p className="mt-4">
                Visualize roots growing deep beneath you, anchoring your
                empowered presence. Use meditation and centered breathing to
                balance focus and relaxation.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I am grounded, patient, and steadily growing.”
                <br />
                <b>Prompt:</b> What steady growth will you nurture this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let steady patience be your guiding light.",
          yang: "Let your actions reflect honest intention.",
          content: (
            <>
              <p className="mt-4 italic">
                “With grounded roots and open heart, I build my future wisely.”
              </p>
              <p className="mt-4">
                Repeat this affirmation each day to embody focus and presence.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let wisdom and patience sow seeds for lasting change.",
          yang: "Let steady effort guide your unfolding path.",
          content: (
            <>
              <p className="mt-4 italic">
                “This week, I embrace reflection and steady action — anchored,
                aligned, alive.”
              </p>
              <p className="mt-4">
                As early Capricorn energy sets in, open to growth through
                presence and intention.
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
