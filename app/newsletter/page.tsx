"use client";

import { motion } from "framer-motion";

export default function NewsletterPage() {
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
    October 06 – 12, 2025
  </h2>

  <p className="italic text-sm text-gray-600 tracking-wide my-6">
    Weekly newsletter for the spiritually awakened modern-day men and women
  </p>

  <p className="italic text-lg text-gray-700">
    Theme: <b>Balance in Motion — Grace Between Strength and Softness</b>
  </p>

  
</motion.div>


      {/* Intro */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-lg leading-relaxed space-y-4"
      >
        <div className="text-center max-w-3xl mx-auto leading-relaxed text-[1.05rem]">
  <p className="mb-6">
    In the rhythm of our modern lives, <b>balance isn’t found in stillness</b> — it’s 
    <b> created through awareness. </b>  
     Within each of us live two sacred forces —  
    <b>Yin (Sacred Feminine)</b>: intuitive, receptive, nourishing,  
    and <b>Yang (Sacred Masculine)</b>: expressive, focused, courageous.
  </p>

  <p>
    This edition is for the <b>modern man and woman</b> — grounded yet awake —  
    who understand that <b>power and tenderness can coexist. </b>  
    As Venus enters Libra and Pluto turns direct, we’re invited to honor both energies:  
    <b> listen with presence, act with purpose,</b>  
    and let harmony be our quiet strength.
  </p>
</div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Balance",
          yin: "Let your inner silence receive subtle truths.",
          yang: "Let those truths guide your voice.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Events:</b> On <b>Oct 6</b>, Mercury enters Scorpio, deepening
                communication and revealing what’s hidden — conversations may hold more weight than
                usual. Full Moon in Aries (Oct 6) accelerates confrontations or breakthroughs in
                relational dynamics. Towards week’s end, the Moon’s movement encourages shifting
                perspectives into tangible action.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />• What has been unspoken, waiting beneath the surface?
                <br />• Where do you need to bridge inner clarity with outer expression?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />• On Oct 6, pause midday — breathe, listen inward, note any sudden insight or
                tension. <br />• Journal what wants to emerge, and what needs to fall away.
                <br />• Before sleep, visualize your inner and outer energies merging in harmony.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness in Flow",
          yin: "Sit with your breath; feel the space between thoughts.",
          yang: "Move your body in service of that harmony.",
          content: (
            <>
              <p className="mt-4">
                Begin the week with gentle heart stretches + 3 golden breaths. Sip rose or
                chrysanthemum tea to soften internal tension. Offer one genuine compliment or act of
                kindness each day — let your inner light touch another.
              </p>
              <p className="mt-4">
                Eat nourishing greens, berries, nuts; hydrate intentionally. In evenings, practice
                4-7-8 breathing, focusing the exhale into your heart center.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Receive rest as sacred — allow inertia its space.",
          yang: "Defend your rest with clear boundaries and rituals.",
          content: (
            <>
              <p className="mt-4">
                On or around the Full Moon, journal what you release and what you seed. Light soft,
                pale candles to honor balance and boundary. Use lavender or tulsi tea before sleep.
              </p>
              <p className="mt-4">
                Keep your sleeping space in shades of rose, cream, or pale blue. Place a moonstone
                or rose quartz nearby as quiet support. Practice a visualization: inhale yin
                (softness), exhale yang (integrity).
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Balance",
          yin: "Receive without judgment, gratitude without condition.",
          yang: "Act from integrity — give where you are called.",
          content: (
            <>
              <p className="mt-4">
                As Mercury in Scorpio reveals hidden value dynamics, revisit your beliefs about
                money, worth, and equity. Be mindful of investments or financial moves — allow
                insight to stabilize before leaps.
              </p>
              <p className="mt-4">
                Offer gratitude or small gift to someone who supports you. Draw inner scales:
                self-worth vs shared value — where do they feel imbalanced?
              </p>
              <p className="mt-4 italic">
                “I receive with openness; I act with integrity.”
              </p>
            </>
          ),
        },
        {
          title: "🧘‍♀️ Stillness & Power",
          yin: "Rest in silence; let your intuition breathe.",
          yang: "Speak and act from that grounded center.",
          content: (
            <>
              <p className="mt-4">
                Meditate visualizing silver light (yin) meeting gold light (yang) in your heart —
                dancing, not colliding.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I embody balance and speak with elegance.”<br />
                “My strength is calm; my power compassionate.”
              </p>
              <p className="mt-4">
                <b>Prompt:</b> In your relationships or leadership this week, where do you want new
                expression of truth + tenderness?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Whisper inward until truth becomes felt.",
          yang: "Let that truth echo through your actions.",
          content: (
            <>
              <p className="mt-4 italic">
                “I move in relationship with grace and grounded power.”
              </p>
              <p className="mt-4">
                Repeat each morning before your first word — let it shape your tone, your
                boundaries, your presence.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let softness guide your listening.",
          yang: "Let clarity guide your steps.",
          content: (
            <>
              <p className="mt-4 italic">
                “Harmony and power need not clash — they can dance.”
              </p>
              <p className="mt-4">
                Venus in Libra teaches elegance; Pluto direct calls for truth. Together, they ask:
                Can you be both soft and strong this week?
              </p>
            </>
          ),
        },
      ].map((section, idx) => (
        <motion.section
          key={idx}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-6 space-y-3 border border-[#e6c79244]"
        >
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <p><b>Yin (Sacred Feminine):</b> {section.yin}</p>
          <p><b>Yang (Sacred Masculine):</b> {section.yang}</p>
          {section.content}
        </motion.section>
      ))}
      {/* Floating Yin–Yang Symbol */}
{/* Floating Yin–Yang Symbol (fish-shaped) */}
{/* Yin–Yang Fish Symbol (true Taijitu) */}
{/* Yin–Yang Symbol (Balanced with Fish Eyes) */}
{/* Yin–Yang Symbol (True Fish Shape) */}
{/* Yin–Yang Symbol (perfect fish shape) */}
{/* Floating Yin–Yang Symbol */}
<motion.div
  className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-[#f9f5e6] to-[#1c1b2b] shadow-lg flex items-center justify-center border border-[#e6c792]/70"
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
>
  <svg
  viewBox="0 0 100 100"
  className="w-10 h-10 pointer-events-none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer circle */}
  <circle cx="50" cy="50" r="50" fill="#000" />

  {/* White half */}
  <path
    d="M50 0
       A50 50 0 0 1 50 100
       A25 25 0 0 0 50 50
       A25 25 0 0 1 50 0
       Z"
    fill="#fff"
  />

  {/* Yin small circle (white area’s black dot) */}
  <circle cx="50" cy="25" r="7" fill="#000" />

  {/* Yang small circle (black area’s white dot) */}
  <circle cx="50" cy="75" r="7" fill="#fff" />
</svg>
</motion.div>








    </div>
  );
}
