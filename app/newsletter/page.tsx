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
          October 13 – 19, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme: <b>Relational Rebirth — Power, Beauty & Trust in Union</b>
        </p>
      </motion.div>

      {/* 🌿 Note at the top */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this week’s edition, scroll to the end and click{" "}
        <b>“Download as PDF”</b>.
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
            As we step into this week, the cosmic atmosphere invites a profound shift.
            On <b>October 13</b>, two major transits — <b>Venus entering Libra</b> and{" "}
            <b>Pluto turning direct in Aquarius</b> — activate the energies of{" "}
            <b>relationship, power, trust, and transformation</b>.<br />
            This is not a casual week: it is a threshold.<br />
            Let us move with <b>vulnerability and strength</b>, open to deeper
            connection and greater clarity.
          </p>

          <p>
            We enter a week of <b>relational rebirth</b> — where softness can be sure,
            power gentle, and trust sacred.<br />
            May your inner balance guide your outer dance.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Balance",
          yin: "Let your heart feel first; let your lips speak later.",
          yang: "Let your words carry the weight of your inner truth.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Events:</b><br />
                • On <b>October 13</b>, <b>Venus enters Libra</b>, opening the door to graceful relating, harmony, and reclamation of beauty in connection.<br />
                • Also on <b>October 13</b>, <b>Pluto stations direct</b> at ~1° Aquarius, ending a 5-month retrograde and releasing transformative power into forward motion.<br />
                • On <b>October 14</b>, Venus opposes Neptune (ideal love vs reality) and trines Uranus + Pluto (flashes of relational insight).<br />
                • Midweek (Oct 16–17), <b>Mars & Mercury trine the North Node</b>, supporting aligned action and communication.<br />
                • On <b>October 17</b>, <b>Sun squares Jupiter</b> — expansive yet overreaching energy.<br />
                • <b>Oct 17–18</b>: Sun opposes Chiron — healing through vulnerability in relationships.<br />
              </p>
              <p className="mt-4">
                <b>Reflections:</b><br />
                • In your closest relationships, where does idealism blind you?<br />
                • Where is power unmet by tenderness?<br />
                • What trust do you long to rebuild or reimagine?
              </p>
              <p className="mt-4">
                <b>Rituals:</b><br />
                • On Oct 13, pause at sunrise and set the intention: <i>“I invite harmony, I speak truth.”</i><br />
                • Midweek, write a dialog between your youthful heart and your present wisdom—permit both to speak.<br />
                • At week’s end, draw a mandala of relational balance (yin + yang forces) and sit with it in silence.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness in Flow",
          yin: "Let your nervous system rest in the quiet between heartbeats.",
          yang: "Let your body speak in movement aligned with your center.",
          content: (
            <>
              <p className="mt-4">
                Begin each day with <b>5 slow heart-centered breaths</b>. As Venus blesses Libra, let beauty guide your movement: flowing yoga, dance, or tai chi. Let your body be an art form.
              </p>
              <p className="mt-4">
                For nourishment: include fresh greens, pomegranate, olive oil, seeds. Cultivate bites of beauty—herbs, edible flowers, colorful plates. At night, practice <b>coherent breathing</b> (inhale ~5, exhale ~5) to ground body and emotion.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let rest be your altar — guard it tenderly.",
          yang: "Let your boundaries protect your peace.",
          content: (
            <>
              <p className="mt-4">
                As Pluto shifts direct, deep sediments may stir. Offer yourself longer pauses, soft baths, moonlit journaling. Use moonstone, amethyst, or selenite in your resting space.
              </p>
              <p className="mt-4">
                Create a nightly ritual: dim lights, herbal teas (lavender, passionflower), write three things you release and three you intend to invite. Then rest, knowing transformation works beneath.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Balance",
          yin: "Receive energy and value in honest ways.",
          yang: "Offer with integrity, not overreach.",
          content: (
            <>
              <p className="mt-4">
                Venus in Libra awakens the art of equitable exchange. This week, notice where you overgive or undersell your value. Rebalance: receive openly, give from grounded purpose.
              </p>
              <p className="mt-4">
                In finances, hold off on risky leaps until clarity deepens (especially early in the week). Later, look for inspired opportunities in relational ventures or creative collaboration.
              </p>
              <p className="mt-4 italic">
                “I attract in beauty; I act in truth.”
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Be still; let insight rise from the depths.",
          yang: "Let your actions root from that stillness.",
          content: (
            <>
              <p className="mt-4">
                Meditate with imagery of <b>lavender & steel</b> — softness meeting strength. Let whatever surfaces be witnessed without judgment.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “My voice is both gentle and exact.”<br />
                “I move in alignment; I attract with integrity.”
              </p>
              <p className="mt-4">
                <b>Prompt:</b> In your inner leadership this week, where is there room for more listening, and where must you speak even if it feels risky?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Whisper into your being until it blossoms.",
          yang: "Let your life echo that whisper loud.",
          content: (
            <>
              <p className="mt-4 italic">
                “In love, power, vulnerability — I stand in both grace and strength.”
              </p>
              <p className="mt-4">
                Speak it daily, especially before relational encounters. Let it anchor your boundaries, your tone, your presence.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let beauty draw you in; let truth steady your step.",
          yang: "Move with courage from the devotional center within.",
          content: (
            <>
              <p className="mt-4 italic">
                “Relational rebirth is my invitation, integrity my compass.”
              </p>
              <p className="mt-4">
                Venus in Libra re-tunes our relational frequency toward harmony. Pluto direct releases us from hidden binds. This week asks: <b>can you hold tenderness and resolve simultaneously?</b> Let the dance begin.
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
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#000" />
          <path
            d="M50 0 A50 50 0 0 1 50 100 A25 25 0 0 0 50 50 A25 25 0 0 1 50 0 Z"
            fill="#fff"
          />
          <circle cx="50" cy="25" r="7" fill="#000" />
          <circle cx="50" cy="75" r="7" fill="#fff" />
        </svg>
      </motion.div>

      {/* 🌿 Footer */}
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
