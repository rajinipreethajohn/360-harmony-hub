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
          February 9 – February 15, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Soft Power and Sacred Courage — Pisces Love, Aquarian Vision, and
            Saturn&apos;s New Chapter
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
            This week blends bright Aquarian vision with the tender, intuitive
            waters of Pisces. The <b>Sun remains in Aquarius</b>, keeping your
            perspective future-facing, while{" "}
            <b>Mercury and Venus move through Pisces</b>, softening the mind and
            opening the heart. Communication becomes more intuitive, emotional
            truth feels louder than logic, and love asks for compassion over
            control.
            <br />
            On <b>February 9</b>, the <b>Third Quarter Moon</b> invites release,
            reflection, and honest editing: what no longer fits the life you are
            building? Then, on <b>February 13</b>, <b>Saturn enters Aries</b>,
            beginning a powerful new era of disciplined courage. This is the
            call to mature your independence, strengthen your inner backbone,
            and commit to the brave life you keep sensing is possible.
            <br />
            Let this week be a sacred combination: softness that heals, and
            courage that leads.
          </p>
          <p>
            Let this week help you listen deeply, release gently, and step
            forward with steady, soul-led strength.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let compassion guide your choices and soothe your heart.",
          yang: "Let courage become disciplined and intentional.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Aquarius</b>: innovation,
                community, future vision, and truth-telling.
                <br />- <b>All week – Mercury in Pisces</b>: intuitive thinking,
                poetic communication, and emotional intelligence.
                <br />- <b>All week – Venus in Pisces</b>: soulful love,
                creativity, forgiveness, and softened relationship dynamics.
                <br />- <b>Feb 9 – Third Quarter Moon</b>: release, simplify,
                and clear energy before new beginnings.
                <br />- <b>Feb 13 – Saturn enters Aries</b>: a new chapter of
                responsibility, courage, and mature self-leadership.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What is ready to be released so my heart can breathe again?
                <br />
                - Where do I need softer boundaries — and where do I need
                stronger ones?
                <br />- What brave commitment am I finally ready to honor?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>February 9</b>, write down three things you are
                complete with — habits, stories, obligations, or emotional
                patterns — and gently choose release.
                <br />- Midweek, practice one act of devotion to your intuition:
                a quiet walk, a long bath, a prayer, or a creative flow session.
                <br />- On <b>February 13</b>, set one bold boundary or goal and
                name the small daily discipline that will support it.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentleness restore your inner waters.",
          yang: "Let consistent movement strengthen your courage.",
          content: (
            <>
              <p className="mt-4">
                Pisces season energy in the mind and heart benefits from
                nervous-system care. Choose soothing movement: restorative yoga,
                swimming, long walks, or slow stretching that feels like
                self-kindness.
              </p>
              <p className="mt-4">
                Support your body with hydration, mineral-rich foods, warming
                soups, and steady mealtimes. Saturn&apos;s shift favors simple,
                repeatable routines that build strength over time.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness heal what words cannot.",
          yang: "Let rest prepare you for brave action.",
          content: (
            <>
              <p className="mt-4">
                With Mercury and Venus in Pisces, sleep and dream-life may feel
                more vivid. Create a gentle evening ritual: dim lights, less
                screen time, soft music, or breathwork that calms the heart.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What am I learning about love, and what
                am I learning about courage?&quot; Then let the answers arrive
                in their own time.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that feel like peace.",
          yang: "Build stability through brave consistency.",
          content: (
            <>
              <p className="mt-4">
                Venus in Pisces invites abundance through connection, artistry,
                compassion, and meaning. Let your wealth include the invisible:
                support, inspiration, emotional safety, and spiritual
                nourishment.
              </p>
              <p className="mt-4">
                Saturn entering Aries reminds you that prosperity also requires
                personal leadership. Choose one clear goal, one steady action,
                and one boundary that protects your energy.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let tenderness become your strength.",
          yang: "Let discipline become your freedom.",
          content: (
            <>
              <p className="mt-4">
                Visualize a lantern in your chest: warm, steady, and protected.
                With each inhale, the light grows. With each exhale, it spreads
                into your life. You do not need to force power — you simply
                embody it.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I lead my life with courage and compassion.
                <br />
                <b>Prompt:</b> What daily practice would change my life if I
                honored it for the next 30 days?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let love soften the edges of fear.",
          yang: "Let courage steady your path.",
          content: (
            <>
              <p className="mt-4 italic">
                "I am gentle with my heart, and I am brave with my life."
              </p>
              <p className="mt-4">
                Speak this affirmation when you feel overwhelmed: it will return
                you to softness without losing strength.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let release be tender and complete.",
          yang: "Let the next step be bold and true.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I release what is finished, and I choose the brave
                life I am ready to live."
              </p>
              <p className="mt-4">
                Aquarius shows you the future. Pisces reminds you to feel your
                way there. And Saturn&apos;s entrance into Aries asks you to
                commit — not perfectly, but faithfully. Let love guide your
                choices, and let courage keep you moving.
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
