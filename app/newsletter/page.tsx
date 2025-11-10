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
          November 10 – November 16, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Deepening Roots — Cultivating Stability and Inner Power in Scorpio
            Season
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
            This week the transformative energy of <b>Scorpio season</b> deepens
            as <b>Mercury retrogrades in Sagittarius</b> until November 15,
            inviting reflection and recalibration. The{" "}
            <b>New Moon in Scorpio</b> on November 12 fuels potent
            intention-setting and emotional renewal.
            <br />
            Ground yourself in <b>stability and inner power</b> as you navigate
            these energies — embracing the depth of transformation with patience
            and self-compassion.
          </p>
          <p>
            Let this week be a time to <b>nurture your roots</b>, clear
            emotional clutter, and cultivate resilience for the unfolding path
            ahead.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the stillness deepen your knowing.",
          yang: "Let your presence carry quiet strength.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Nov 11 – Mercury retrograde in Sagittarius</b>{" "}
                encourages review and inner clarity.
                <br />- <b>Nov 12 – New Moon in Scorpio</b> supports deep
                emotional resets and fresh intentions.
                <br />- <b>Nov 14 – Mars enters Capricorn</b>, grounding passion
                into structured ambition.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What old patterns are you ready to release for deeper growth?
                <br />
                - How can stillness invite clarity in your transformational
                process?
                <br />- Where in your life is it time to build stronger
                foundations?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>November 12</b>, write intentions for renewal —
                read and revisit them after one moon cycle.
                <br />
                - Meditate each morning on releasing emotional clutter.
                <br />- On <b>November 14</b>, set a practical goal to organize
                and structure a personal or professional project.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your breath steady the depths within.",
          yang: "Let movement stabilize your emerging strength.",
          content: (
            <>
              <p className="mt-4">
                Focus on grounding practices: restorative yoga, deep
                diaphragmatic breathing, and nourishing warm foods like root
                vegetables and hearty soups.
              </p>
              <p className="mt-4">
                Spend time in nature to connect with earth energy and support
                emotional balance. Prioritize hydration and gentle stretching to
                align body and mind.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet moments replenish your core.",
          yang: "Let restful boundaries protect your growth.",
          content: (
            <>
              <p className="mt-4">
                Embrace early nights and calming rituals such as herbal teas and
                sound baths. Dim lights after 8 pm and limit screen time to
                support restful sleep.
              </p>
              <p className="mt-4">
                Try gentle self-massage or warm baths infused with calming herbs
                to soothe tension and deepen relaxation.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive with trust and gentle patience.",
          yang: "Act with mindful intention and long-term vision.",
          content: (
            <>
              <p className="mt-4">
                Use this time to review your financial plans honestly and
                recalibrate for sustainable growth. Mercury retrograde reminds
                us to check the details and avoid rushing decisions.
              </p>
              <p className="mt-4">
                Seek alignment in collaborations — shared values build steady
                prosperity.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink deeply into your inner sanctuary.",
          yang: "Let calm presence radiate quiet confidence.",
          content: (
            <>
              <p className="mt-4">
                Visualize grounding like deep roots extending into earth,
                stabilizing your power. Use meditation and breathwork to connect
                to your inner strength and wisdom.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I cultivate resilience through patience and
                presence.”
                <br />
                <b>Prompt:</b> Where will you anchor your energy this week to
                build lasting strength?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let your soul’s depth be your guiding light.",
          yang: "Let your actions reflect grounded wisdom.",
          content: (
            <>
              <p className="mt-4 italic">
                “In stillness, I find strength; in patience, I grow.”
              </p>
              <p className="mt-4">
                Repeat this affirmation daily to anchor your week in calm power.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let roots grow deep before reaching skyward.",
          yang: "Let your journey unfold with steady courage.",
          content: (
            <>
              <p className="mt-4 italic">
                “This week, I ground myself fully — anchored, aligned, and ready
                to rise.”
              </p>
              <p className="mt-4">
                As <b>Scorpio season</b> deepens and <b>Mercury retrogrades</b>,
                honor the power of slow, steady transformation.
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
