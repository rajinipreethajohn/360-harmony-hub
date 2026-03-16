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
          March 16 – March 22, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Reset and Fiery Renewal — Pisces Closure, Aries Rising, and
            the Courage to Begin Again
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
            This week is a portal between endings and beginnings. The first half
            is deeply Piscean: intuitive, emotional, reflective, and inward.
            Then everything changes. On <b>March 18</b>, the{" "}
            <b>New Moon in Pisces</b> offers a soulful reset — a moment to plant
            intentions around healing, trust, creativity, and spiritual
            alignment. Soon after, on <b>March 20</b>, two major shifts arrive
            together: <b>Mercury stations direct in Pisces</b>, helping clarity
            slowly return, and the <b>Sun enters Aries</b>, marking the equinox
            and the astrological new year.
            <br />
            <b>Venus in Aries</b> continues to embolden the heart, while{" "}
            <b>Mars in Pisces</b> asks you to act from intuition rather than
            pressure. <b>Saturn in Aries</b> remains a steady call toward mature
            courage and self-leadership.
            <br />
            Let this week be both a blessing and a beginning: release the fog,
            trust the seed, and welcome the fire.
          </p>
          <p>
            Let your soul soften where it must, and let your spirit rise where
            it is ready.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the New Moon renew your inner faith.",
          yang: "Let Aries season awaken your forward fire.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Pisces until Mar 20, then Aries</b>
                : spiritual closure gives way to courage, renewal, and direct
                action.
                <br />-{" "}
                <b>
                  All week – Mercury retrograde in Pisces until Mar 20, then
                  direct
                </b>
                : reflection and reorientation begin to shift toward clearer
                movement.
                <br />- <b>All week – Venus in Aries</b>: bold love, fresh
                confidence, and self-honoring desire.
                <br />- <b>All week – Mars in Pisces</b>: intuitive action,
                subtle motivation, and devotional movement.
                <br />- <b>Mar 18 – New Moon in Pisces</b>: a fresh beginning
                rooted in healing, compassion, imagination, and trust.
                <br />- <b>Mar 20 – Mercury stations direct in Pisces</b>:
                mental fog begins to lift, and inner clarity starts returning.
                <br />- <b>Mar 20 – Sun enters Aries</b>: the equinox, the
                astrological new year, and a bold energetic reset.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                self-responsibility, and brave structure.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What am I ready to leave behind with love?
                <br />
                - What new beginning feels spiritually true and energetically
                alive?
                <br />- Where is life asking me to trust myself more directly?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>March 18</b>, write 3 intentions for the Pisces
                New Moon: one for healing, one for faith, one for creativity.
                <br />- On <b>March 20</b>, greet the equinox with a simple act
                of renewal: light a candle, open a window, or step into the sun
                and speak one clear intention aloud.
                <br />- Toward the weekend, choose one Aries-style action:
                something clean, bold, and aligned with who you are becoming.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentleness restore what has been tired.",
          yang: "Let fresh energy move through your body cleanly.",
          content: (
            <>
              <p className="mt-4">
                Early in the week, your system may still need softness:
                hydration, extra sleep, warm foods, quiet mornings, and slower
                pacing. Pisces energy asks you to replenish before you push.
              </p>
              <p className="mt-4">
                As Aries season begins, energy may rise naturally. Meet it with
                clean movement: walking, light strength work, stretching, or
                anything that helps you feel alive without overwhelming your
                nervous system.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let rest close the old cycle with grace.",
          yang: "Let stillness prepare your next beginning.",
          content: (
            <>
              <p className="mt-4">
                The days leading up to the New Moon are ideal for quiet release.
                Make space for silence, music, journaling, or simply doing less.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What am I ready to stop carrying into
                the next season of my life?&quot; Let the answer come softly.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what feels spiritually nourishing.",
          yang: "Act on what feels clear and self-respecting.",
          content: (
            <>
              <p className="mt-4">
                The Pisces New Moon is fertile for intuitive ideas around work,
                money, and purpose — but not all ideas need immediate action.
                Let them breathe first.
              </p>
              <p className="mt-4">
                Once Mercury turns direct and the Sun enters Aries, choose one
                straightforward step. Abundance responds well this week to
                clarity, self-trust, and clean decisions.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let surrender make you wiser.",
          yang: "Let courage make you simpler.",
          content: (
            <>
              <p className="mt-4">
                Visualize a candle being lit at dawn. First there is silence,
                then a spark, then steady flame. That is your rhythm this week:
                stillness, ignition, movement.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I release with trust, and I begin with courage.
                <br />
                <b>Prompt:</b> What am I ready to begin now that feels both
                brave and true?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let trust soften the unknown.",
          yang: "Let renewal strengthen your path.",
          content: (
            <>
              <p className="mt-4 italic">
                "I welcome a new beginning with an open heart, a clear spirit,
                and courageous trust."
              </p>
              <p className="mt-4">
                Repeat this affirmation as the week shifts from Pisces to Aries.
                It helps bridge softness and strength.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the old cycle end with tenderness.",
          yang: "Let the new cycle begin with fire.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I release what is complete, and I step into what is
                ready to live through me."
              </p>
              <p className="mt-4">
                Pisces blesses the ending. Aries blesses the beginning. Mercury
                reminds you that clarity returns in its own time. Let this week
                be sacred not because it is perfect, but because it is honest,
                alive, and full of new possibility.
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
