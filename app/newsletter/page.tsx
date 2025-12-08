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
            Clarity and Wonder — Bridging Sagittarius Fire with Capricorn
            Grounding
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
            This week in <b>late Sagittarius season</b>, as we move toward{" "}
            <b>Capricorn&apos;s grounded expansion</b>, brings mental clarity
            and visionary insight. On <b>December 10</b>, Mercury opposes
            Uranus, sparking sudden realizations and fresh perspectives. Around
            <b> December 10–11</b>, Neptune stations direct in Pisces, lifting
            spiritual fog and deepening intuitive knowing, while{" "}
            <b>Mercury enters Sagittarius on December 11</b>, expanding our
            thinking and communication. The <b>Geminids meteor shower</b> peaks
            on <b>December 13–14</b>, inviting us to reconnect with cosmic
            wonder.
            <br />
            Balance Sagittarius&apos; big-picture fire with Capricorn&apos;s
            steady discipline to manifest your visions in tangible, soul-aligned
            ways.
          </p>
          <p>
            Let this week cultivate clear intentions, spiritual alignment, and
            inspired action rooted in steady foundations.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let cosmic wonder deepen your inner vision.",
          yang: "Let clear communication guide purposeful action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Dec 10 – Mercury opposite Uranus</b>: sudden
                insights, surprising news, and innovative ideas that shake up
                stale thinking.
                <br />- <b>Dec 10–11 – Neptune stations direct in Pisces</b>:
                spiritual clarity emerges as confusion fades, inviting renewed
                faith.
                <br />- <b>Dec 11 – Mercury enters Sagittarius</b>: expansive,
                truth-seeking communication and big-picture planning.
                <br />- <b>Dec 13–14 – Geminids meteor shower peaks</b>: a
                dazzling sky show that awakens awe and cosmic connection.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Which surprising insights are asking you to see life from a
                wider angle?
                <br />
                - How can spiritual clarity guide the practical decisions you
                need to make?
                <br />- Where do you need both disciplined structure and cosmic
                vision?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>December 10</b>, journal any breakthrough ideas
                that arrive suddenly and note where they challenge old patterns.
                <br />- On <b>December 11</b>, speak your big visions aloud,
                sharing them with a trusted person or recording a voice note.
                <br />- On <b>December 13–14</b>, spend a few minutes under the
                night sky (if possible) and make wishes with each shooting star
                you see in your mind&apos;s eye.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let breath connect earth and cosmic energies.",
          yang: "Let movement balance discipline with inspiration.",
          content: (
            <>
              <p className="mt-4">
                Blend grounding practices with expansive movement. Take a steady
                walk or hike in nature, practice heart-opening yoga postures, or
                put on music and allow yourself to dance freely. Let your body
                be the bridge between earth and sky.
              </p>
              <p className="mt-4">
                Nourish yourself with antioxidant-rich foods (berries, leafy
                greens, colorful vegetables) and warming herbal teas that
                support circulation and nervous-system ease. This week is ideal
                for routines that support both stamina and joy.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness receive cosmic downloads.",
          yang: "Let deep rest fuel visionary action.",
          content: (
            <>
              <p className="mt-4">
                Create sacred rest rituals that feel like small ceremonies.
                Think candlelit baths, gentle yin or restorative yoga, or
                listening to soft sound-healing tracks before bed. With Neptune
                moving direct, your dreams may feel more vivid or meaningful.
              </p>
              <p className="mt-4">
                Keep a journal by your bedside and jot down any symbols,
                feelings, or phrases you remember upon waking. These subtle
                messages can guide your next aligned steps more than force or
                overthinking ever could.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive inspired opportunities with open wisdom.",
          yang: "Act with clear vision and grounded strategy.",
          content: (
            <>
              <p className="mt-4">
                With <b>Mercury in Sagittarius</b>, your financial and career
                thinking naturally leans toward the big picture: long-term
                dreams, impact, and meaning. At the same time, the approaching{" "}
                <b>Capricorn energy</b> reminds you to anchor those dreams in
                realistic timelines and structures.
              </p>
              <p className="mt-4">
                Review your goals, offerings, or projects from a higher
                perspective, then turn that clarity into simple, actionable
                steps. Abundance flows more easily when your vision is expansive
                but your next actions are concrete and doable.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into cosmic wisdom while staying grounded.",
          yang: "Radiate clarity from your steady center.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself as a mountain under a star-filled sky: deeply
                rooted into the earth, while your crown receives gentle
                starlight. With each inhale, imagine drawing down cosmic wisdom;
                with each exhale, feel that wisdom anchoring into your body and
                life.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I receive cosmic wisdom and ground it into
                reality.
                <br />
                <b>Prompt:</b> Which single vision or intention feels most
                important to anchor this week, even if it is only through one
                small step?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let universal wisdom flow through your roots.",
          yang: "Let inspired action build your destined path.",
          content: (
            <>
              <p className="mt-4 italic">
                "I align heaven and earth within me, and I walk my path with
                clear vision and steady grace."
              </p>
              <p className="mt-4">
                Speak this affirmation daily, especially in the mornings, to
                weave together your spiritual insights and your practical
                responsibilities.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let starlight illuminate your deepest foundations.",
          yang: "Let clear vision guide your steady ascent.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I bridge cosmos and earth — clear, grounded, and
                fully alive to what is possible."
              </p>
              <p className="mt-4">
                As Neptune turns direct and Mercury expands into Sagittarius,
                trust both your intuition and your intellect. Let wonder open
                the path, and let discipline carry you step by step toward the
                life you are consciously building.
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
