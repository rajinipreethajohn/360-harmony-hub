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
          December 8 – December 14, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Clarity and Vision — Bridging Sagittarius Fire with Capricorn
            Grounding
          </b>
        </p>
      </motion.div>

      {/* 💡 PDF note */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this edition, scroll to the end and click{" "}
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
            This week in late <b>Sagittarius season</b>, as we move toward
            grounded <b>Capricorn</b> energy, brings mental clarity and
            visionary expansion.{" "}
            <b>Mercury enters Sagittarius on December 11</b>, opening the mind
            to big-picture insight, while{" "}
            <b>Neptune stations direct in Pisces around December 10</b>, gently
            lifting spiritual fog. The <b>Geminids meteor shower</b> peaks on
            the nights of <b>December 13 and 14</b>, inviting cosmic wonder and
            awe.
            <br />
            Balance Sagittarius curiosity with Capricorn steadiness so that
            inspiration becomes real, sustainable structure.
          </p>
          <p>
            Let this week cultivate clear intentions, spiritual alignment, and
            inspired action from steady foundations.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Allow cosmic signs to deepen inner vision.",
          yang: "Allow clear communication to guide purposeful action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Dec 8 – Mars square Saturn</b>: effort meets limits,
                calling for patience, strategy, and resilience.
                <br />- <b>Dec 10 – Mercury opposite Uranus</b>: sudden insight,
                fresh ideas, and mental breakthroughs.
                <br />- <b>Dec 10–11 – Neptune stations direct in Pisces</b>:
                subtle but powerful spiritual clarity and renewed faith.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where are you being asked to slow down and build with more
                care rather than haste?
                <br />
                - What surprising idea or insight is ready to change how you see
                a situation?
                <br />- How can spiritual clarity support your practical
                ambitions and long-term path?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>December 8</b>, choose one area of life where you
                will commit to disciplined, sustainable effort.
                <br />- On <b>December 10</b>, journal any inspired or unusual
                ideas that appear, no matter how bold they seem.
                <br />- On the nights of <b>December 13 and 14</b>, spend time
                under the sky, watching for Geminids meteors and setting quiet
                intentions with each streak of light you notice.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Allow breath to connect body, mind, and sky.",
          yang: "Allow steady movement to channel inspiration into strength.",
          content: (
            <>
              <p className="mt-4">
                Blend grounding practices with expansive movement. Go for
                mindful walks or hikes, practice heart-opening yoga flows, or
                enjoy free-form dance that lets the body express what words may
                not. Choose foods that feel both nourishing and clear, such as
                warm grains, root vegetables, leafy greens, and herbal teas that
                support digestion and mental focus.
              </p>
              <p className="mt-4">
                Notice how physical vitality shifts when you move with intention
                rather than urgency. Let the body become a vessel that can
                actually hold the visions you are calling in.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Allow stillness to receive quiet messages from the soul.",
          yang: "Allow deep rest to fuel clear and effective action.",
          content: (
            <>
              <p className="mt-4">
                Create gentle rest rituals that tell your nervous system it is
                safe to soften. Think candlelit baths, soft music, yin yoga, or
                a slow bedtime stretch sequence. With Neptune moving forward
                again in Pisces, dreams may feel more vivid or symbolic, so keep
                a small notebook near the bed to capture anything that feels
                meaningful on waking.
              </p>
              <p className="mt-4">
                Protect your sleep window as if it is sacred temple time. Rest
                is not a reward for finishing everything on the list. It is a
                foundation that allows everything else to stay steady and
                aligned.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive new opportunities with grounded openness.",
          yang: "Act with clear vision and practical courage.",
          content: (
            <>
              <p className="mt-4">
                With <b>Mercury in Sagittarius</b>, your mind is more willing to
                explore bold ideas for work, money, and purpose. Pair this
                visionary energy with a Capricorn style of follow-through:
                lists, timelines, realistic budgeting, and small consistent
                steps. Name one long-term financial or career goal and break it
                into manageable actions that you can begin this month.
              </p>
              <p className="mt-4">
                Abundance grows where clarity, integrity, and steady effort
                meet. Trust that even small aligned actions can compound into a
                life that reflects your deepest values.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into wisdom that comes from silence and observation.",
          yang: "Radiate calm clarity in each decision and step.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself as a mountain under a starry sky — rooted
                deep into the earth, yet touched by celestial light at the peak.
                With each inhale, imagine drawing in guidance from the cosmos.
                With each exhale, feel that guidance anchoring into your body,
                choices, and daily rhythms.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I receive clear guidance and ground it into
                reality.
                <br />
                <b>Prompt:</b> What vision feels most alive in your heart right
                now, and what is one grounded step you can take toward it this
                week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Allow universal wisdom to flow gently into your roots.",
          yang: "Allow inspired action to build the path you are meant to walk.",
          content: (
            <>
              <p className="mt-4 italic">
                I align sky and earth within me, and my actions reflect clear
                and loving intention.
              </p>
              <p className="mt-4">
                Repeat this affirmation each morning or evening, especially when
                you feel scattered or pulled in many directions. Let the words
                gather your energy back to center.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Allow starlight to touch the quiet places within.",
          yang: "Allow clear vision to guide a steady and graceful ascent.",
          content: (
            <>
              <p className="mt-4 italic">
                This week, I bridge cosmos and earth with clarity, courage, and
                calm devotion.
              </p>
              <p className="mt-4">
                As Sagittarius fire expands your horizons and approaching
                Capricorn energy invites stability, trust that you do not have
                to choose between dreaming and building. You are here to do
                both, at a pace that honors your body, your spirit, and your
                unique path.
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
