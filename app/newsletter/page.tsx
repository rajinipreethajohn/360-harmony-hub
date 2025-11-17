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
          November 17 – November 23, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Harvesting Wisdom — Integration and Renewal in the Wake of Scorpio
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
            As <b>Scorpio season draws to a close</b>, the week invites you to{" "}
            <b>integrate deep insights</b> and <b>harvest the wisdom</b> from
            recent transformations. With{" "}
            <b>Mercury direct motion resuming on November 16</b>, clarity and
            forward momentum return.
            <br />
            Embrace this time to renew your emotional foundations and prepare
            for new cycles of growth.
          </p>
          <p>
            May this week be a sacred container for{" "}
            <b>reflection, gratitude, and grounded renewal.</b>
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let quiet insight soak deeply into your spirit.",
          yang: "Let renewed clarity inform your bold steps forward.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Nov 16 – Mercury goes direct in Sagittarius</b>,
                releasing retrograde tensions.
                <br />- <b>Nov 18 – Venus enters Sagittarius</b> bringing
                adventurous and expansive love energy.
                <br />- <b>Nov 19 – Sun enters Sagittarius</b> igniting optimism
                and expansive vision.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What new insights are ready to guide your next steps?
                <br />
                - How can you embody both grounded roots and soaring vision?
                <br />- Where does your heart seek expansion and joy?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>November 16</b>, journal about lessons learned
                during Mercury retrograde.
                <br />- On <b>November 18</b>, set intentions for joyful
                connection and exploration.
                <br />- On <b>November 19</b>, spend time in nature envisioning
                your next goals with optimism.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your breath open pathways of curiosity.",
          yang: "Let movement inspire joy and discovery.",
          content: (
            <>
              <p className="mt-4">
                Focus on invigorating practices like dynamic yoga flows or
                outdoor walks. Incorporate bright, seasonal foods such as
                citrus, leafy greens, and warming spices to energize your body.
              </p>
              <p className="mt-4">
                Cultivate playful movement and deep breathing to align vitality
                with expanding horizons.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let your body and mind relax fully into calm.",
          yang: "Let restorative rest fuel inspired action.",
          content: (
            <>
              <p className="mt-4">
                Prioritize restful sleep with grounding rituals like herbal teas
                or calming music before bed. Consider gentle evening stretching
                or meditation to ease transition from activity to rest.
              </p>
              <p className="mt-4">
                Allow yourself moments of quiet reflection to integrate the
                week&apos;s experiences.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities with open-hearted grace.",
          yang: "Move forward with clarity and inspired intention.",
          content: (
            <>
              <p className="mt-4">
                Mercury’s direct motion supports fresh perspectives on finances
                and partnerships. Review and adjust goals with confidence,
                trusting slow but steady progress.
              </p>
              <p className="mt-4">
                Embrace collaboration and new ideas that align with your
                authentic vision.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into deep wellsprings of calm wisdom.",
          yang: "Radiate confidence grounded in quiet strength.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself as a tree fully rooted yet reaching toward
                the sun. Use meditation to balance inner calm with outward
                energy.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I stand grounded, open, and ready for growth.”
                <br />
                <b>Prompt:</b> How will you embody steady strength this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let gratitude fill the depths of your being.",
          yang: "Let your spirit soar on wings of renewed hope.",
          content: (
            <>
              <p className="mt-4 italic">
                “With open heart and grounded roots, I embrace the unfolding
                journey.”
              </p>
              <p className="mt-4">
                Speak this daily to nurture both presence and expansion.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let renewal be the soil of your next chapter.",
          yang: "Let joy and clarity guide your rising steps.",
          content: (
            <>
              <p className="mt-4 italic">
                “This week, I harvest wisdom and prepare to soar — anchored,
                aligned, and alive.”
              </p>
              <p className="mt-4">
                As <b>Sagittarius energy</b> unfolds, welcome new visions with
                open arms and a steady heart.
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
