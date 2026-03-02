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
          March 02 – March 08, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Eclipse Clarity and Soulful Momentum — Pisces Depth, Virgo Truth,
            and Brave New Desire
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
            This week is a threshold — deeply Pisces, sharply clarifying, and
            emotionally catalytic. The <b>Sun remains in Pisces</b>, drawing you
            inward toward intuition, compassion, and spiritual truth. But this
            is not a soft week only: on <b>March 3</b>, a{" "}
            <b>Full Moon Lunar Eclipse in Virgo</b> illuminates what is working
            and what is not. Virgo asks for honesty, refinement, and grounded
            care — not perfection, but clarity.
            <br />
            On <b>March 2</b>, <b>Mars enters Pisces</b>, shifting motivation
            from force to feeling. Action becomes more intuitive, devotional,
            and heart-led. Meanwhile,{" "}
            <b>Mercury remains retrograde in Pisces</b>, making this a week for
            revisiting conversations, re-reading your own emotions, and allowing
            truth to surface in waves rather than in straight lines.
            <br />
            Then on <b>March 6</b>, <b>Venus enters Aries</b>, bringing a fresh
            spark to love, desire, money, and confidence. The message is clear:
            release what is misaligned, refine what matters, and choose brave,
            clean desire moving forward.
          </p>
          <p>
            Let this week cleanse your inner world and reawaken your courage.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the eclipse reveal what your soul already knows.",
          yang: "Let clean desire guide brave, simple action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Pisces</b>: intuition, compassion,
                spiritual sensitivity, and emotional depth.
                <br />- <b>All week – Mercury retrograde in Pisces</b>: review,
                reflection, and returning to unfinished emotional truth.
                <br />- <b>Mar 2 – Mars enters Pisces</b>: heart-led action,
                devotion, and gentle motivation over force.
                <br />- <b>Mar 3 – Full Moon Lunar Eclipse in Virgo</b>:
                clarity, endings, purification, and grounded course correction.
                <br />- <b>Mar 6 – Venus enters Aries</b>: bold love, fresh
                confidence, and courageous choices in relationships and value.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                mature self-leadership, and strong inner backbone.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What is the eclipse making impossible to ignore?
                <br />
                - Where do I need refinement instead of self-criticism?
                <br />- What brave desire is ready to be honored without guilt?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>March 3</b>, declutter one small area (desk, bag,
                inbox, pantry) as a symbolic cleansing of energy.
                <br />- All week, return to one conversation, one project, or
                one feeling you&apos;ve been avoiding — with compassion, not
                pressure.
                <br />- On <b>March 6</b>, choose one bold action that says:
                &quot;I value myself.&quot; Keep it simple and real.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentle care soothe your nervous system.",
          yang: "Let clean routines support your energy.",
          content: (
            <>
              <p className="mt-4">
                Eclipse weeks can feel emotionally intense. Support your system
                with hydration, minerals, warm meals, and slower pacing. Allow
                your body to process feelings without rushing to fix them.
              </p>
              <p className="mt-4">
                Virgo eclipse energy loves practical wellness: tidy sleep
                routines, simple movement, and nourishment that feels clean and
                supportive. Let small habits be your anchor.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let rest become a sacred reset.",
          yang: "Let stillness reveal the next right step.",
          content: (
            <>
              <p className="mt-4">
                Mercury retrograde in Pisces asks for deep listening. Give
                yourself more silence than usual: fewer inputs, less scrolling,
                more space for intuition to speak.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What is my life asking me to
                simplify?&quot; Let the answer arrive slowly through dreams,
                sensations, and quiet clarity.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive clarity about what truly matters.",
          yang: "Act boldly where value is unmistakable.",
          content: (
            <>
              <p className="mt-4">
                Virgo eclipse energy highlights systems: money habits, work
                rhythms, and the practical structures that either support or
                drain you. Notice what needs adjustment rather than overhaul.
              </p>
              <p className="mt-4">
                With Venus entering Aries, abundance also responds to
                self-belief. Make one confident decision this week that protects
                your time, your worth, or your energy.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let your heart soften into truth.",
          yang: "Let courage rise from calm clarity.",
          content: (
            <>
              <p className="mt-4">
                Visualize a bowl of clear water. With each inhale, the water
                becomes still. With each exhale, anything cloudy settles to the
                bottom. You do not force clarity — you allow it.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I welcome truth, and I choose what supports my
                peace.
                <br />
                <b>Prompt:</b> What is one simple refinement that would make my
                life feel lighter this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let truth be gentle and freeing.",
          yang: "Let desire be brave and clean.",
          content: (
            <>
              <p className="mt-4 italic">
                "I release what drains me, refine what matters, and choose
                myself with courage."
              </p>
              <p className="mt-4">
                Repeat this affirmation when emotions rise. It brings you back
                to grounded truth and simple strength.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the eclipse cleanse your inner world.",
          yang: "Let love and courage move you forward.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I let truth purify me, and I move forward with brave
                softness."
              </p>
              <p className="mt-4">
                Pisces reminds you to feel. Virgo demands you see clearly. Mars
                in Pisces asks for heart-led action, and Venus in Aries reminds
                you that desire is sacred. Release what is heavy. Choose what is
                true. Begin again — simply, bravely, beautifully.
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
