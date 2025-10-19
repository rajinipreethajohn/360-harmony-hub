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
          October 20 – 26, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme: <b>Inner Alchemy — Transforming Shadow into Light</b>
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
            This week’s cosmic currents invite deep inner transmutation. On{" "}
            <b>October 20</b>, <b>Mercury conjunct Mars in Scorpio</b> ignites
            piercing honesty and courage in communication, while on{" "}
            <b>October 21</b> the <b>New Moon in Libra</b> restores equilibrium
            to hearts stretched by change. <br />
            As light meets shadow, we are asked to speak truth and
            surrender control — to find sacred balance in the fire of
            transformation.
          </p>
          <p>
            May this week be your crucible of renewal: where clarity
            replaces confusion, courage dissolves fear, and softness
            becomes your strength.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Alchemy",
          yin: "Let silence hold your truth before you release it.",
          yang: "Speak not from impulse, but from insight.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b><br />
                • <b>Oct 20 – Mercury conjunct Mars in Scorpio</b>: mental fire,
                decisive speech, and courage to confront truth.<br />
                • <b>Oct 21 – New Moon in Libra</b>: recalibration of harmony,
                fairness, and heartfelt connection.<br />
                • <b>Oct 22 – Sun enters Scorpio</b>: the descent into depth and
                regeneration begins.<br />
                • <b>Oct 24–25</b>: Moon conjunct Venus in Libra softens edges,
                opening intimacy after clarity.<br />
              </p>
              <p className="mt-4">
                <b>Reflections:</b><br />
                • Where are you still afraid to speak your full truth?<br />
                • Which relationship mirrors your own unhealed patterns?<br />
                • Can honesty become a bridge instead of a weapon?
              </p>
              <p className="mt-4">
                <b>Rituals:</b><br />
                • Write a letter you’ll never send — release unspoken words.<br />
                • During the New Moon, light one white and one black candle
                  beside a mirror: whisper what balance means to you.<br />
                • End the week with a water-based ritual — a bath, a river, a
                  simple bowl — to symbolize rebirth.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let still waters cleanse your nervous system.",
          yang: "Let movement circulate that renewal through every cell.",
          content: (
            <>
              <p className="mt-4">
                This week, merge detox with nourishment. Choose grounding foods:
                beetroot, turmeric, ginger, and dark leafy greens. Drink warm
                lemon water + a pinch of cinnamon at dawn to awaken inner fire
                gently.
              </p>
              <p className="mt-4">
                In movement, prefer slow flow yoga or walking meditations near
                water. The Scorpio current asks for presence over intensity.
                Move like liquid light through resistance.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let darkness cradle your light.",
          yang: "Let release become your restoration.",
          content: (
            <>
              <p className="mt-4">
                With the Sun shifting into Scorpio, sleep carries symbolic
                weight. Keep your room dim, cool, and free of digital light.
                Journal before bed to clear the mind’s surface ripples.
              </p>
              <p className="mt-4">
                Use lavender, vetiver, or myrrh essential oils to anchor your
                breath. Each exhale is an exorcism of stress; each inhale a
                quiet homecoming.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Equilibrium",
          yin: "Receive by relaxing, not by reaching.",
          yang: "Give with precision, not pressure.",
          content: (
            <>
              <p className="mt-4">
                The New Moon in Libra reminds us that abundance follows
                alignment. Balance your books and your energies — notice where
                giving drains you and where receiving feels unsafe.
              </p>
              <p className="mt-4">
                Mid-week insights may inspire new partnerships or collaborations.
                Say yes only if the exchange feels reciprocal. Trust that less can be more.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Enter your depth without fear.",
          yang: "Emerge with clarity, not ego.",
          content: (
            <>
              <p className="mt-4">
                Meditate on the symbol of the phoenix — breathing light into the
                ashes of what was. Let the breath rise and fall like wings.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I transform through truth; I create through peace.”<br />
                <b>Prompt:</b> What truth about yourself are you ready to honor without defense?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Whisper forgiveness into your bones.",
          yang: "Act from the grace of that forgiveness.",
          content: (
            <>
              <p className="mt-4 italic">
                “I am both shadow and light — and I walk home whole.”
              </p>
              <p className="mt-4">
                Speak this each morning as you stretch or breathe. Let it soften
                guilt and anchor self-trust.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the embers of the past warm you, not burn you.",
          yang: "Step into the fire of truth and emerge as gold.",
          content: (
            <>
              <p className="mt-4 italic">
                “From shadow to light, from fear to faith — I am renewed.”
              </p>
              <p className="mt-4">
                The New Moon resets our relational and inner harmony. Mercury +
                Mars in Scorpio teach bravery in truth. Let honesty be your alchemy and
                stillness your power.
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
            <h2 className="text-2xl font-semibold text-center">{section.title}</h2>
            <p><b>Yin (Sacred Feminine):</b> {section.yin}</p>
            <p><b>Yang (Sacred Masculine):</b> {section.yang}</p>
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
            <h2 className="text-2xl font-semibold text-center">{section.title}</h2>
            <p><b>Yin (Sacred Feminine):</b> {section.yin}</p>
            <p><b>Yang (Sacred Masculine):</b> {section.yang}</p>
            {section.content}
          </motion.section>
        )
      )}

      {/* Floating Yin–Yang Symbol */}
      <motion.div
        className="no-print fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9f5e6] to-[#1c1b2b] shadow-lg flex items-center justify-center border border-[#e6c792]/70"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
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
        <a href="https://360harmonyhub.netlify.app" target="_blank" rel="noopener noreferrer">
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
