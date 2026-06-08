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
          June 08 – June 14, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Reflection and New Mental Seeds — Gemini Clarity, Cancer
            Nourishment, and Pisces Release
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
            This week carries a beautiful blend of release, emotional
            nourishment, and fresh mental beginnings. The{" "}
            <b>Sun remains in Gemini</b>, keeping the mind curious, adaptable,
            and open to new ideas, while <b>Mercury in Cancer</b> asks
            communication to come from the heart as much as the intellect.
            <br />
            <b>Venus and Jupiter meet in Cancer around June 8–9</b>, softening
            the emotional field and expanding themes of love, belonging,
            compassion, family, and inner safety. This is a tender cosmic
            opening — one that reminds you that growth can feel nurturing, not
            only challenging.
            <br />
            On <b>June 8</b>, the <b>Last Quarter Moon in Pisces</b> invites
            release, reflection, and spiritual surrender. Then, on{" "}
            <b>June 14</b>, the <b>New Moon in Gemini</b> opens a fresh cycle of
            thought, learning, writing, communication, and new perspectives.
          </p>

          <p>
            Let this week help you release softly, receive deeply, and plant new
            thoughts with intention.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let emotional nourishment soften your inner world.",
          yang: "Let new ideas guide fresh beginnings.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Gemini</b>: curiosity,
                communication, adaptability, learning, and mental renewal.
                <br />- <b>All week – Mercury in Cancer</b>: emotional
                intelligence, intuitive communication, memory, and heartfelt
                conversations.
                <br />- <b>All week – Venus in Cancer</b>: tenderness, nurturing
                connection, emotional warmth, and soulful bonding.
                <br />- <b>Jun 8–9 – Venus conjunct Jupiter in Cancer</b>:
                emotional expansion, love, belonging, generosity, and healing
                connection.
                <br />- <b>All week – Mars in Taurus</b>: patience, persistence,
                embodied action, and steady progress.
                <br />- <b>Jun 8 – Last Quarter Moon in Pisces</b>: release,
                surrender, compassion, closure, and spiritual reflection.
                <br />- <b>Jun 14 – New Moon in Gemini</b>: new ideas, fresh
                conversations, learning, writing, and mental reset.
                <br />- <b>All week – Saturn in Pisces</b>: disciplined courage,
                self-leadership, and responsible growth.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What am I ready to release with compassion rather than force?
                <br />
                - Where do I need more emotional safety and honest connection?
                <br />- What new idea or perspective wants to begin through me?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>June 8</b>, release one emotional pattern,
                expectation, or fear through journaling, prayer, or quiet
                reflection.
                <br />- Around <b>June 8–9</b>, do one nurturing act for
                yourself or someone you love.
                <br />- On <b>June 14</b>, write three intentions for the Gemini
                New Moon around communication, learning, creativity, or
                connection.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let tenderness restore your nervous system.",
          yang: "Let steady movement support your vitality.",
          content: (
            <>
              <p className="mt-4">
                Cancer and Pisces energy this week may heighten sensitivity, so
                prioritize emotional safety: hydration, nourishing meals, gentle
                routines, quiet spaces, and comforting rituals.
              </p>

              <p className="mt-4">
                Mars in Taurus favors slow, sustainable movement. Choose
                walking, stretching, strength work, yoga, gardening, or any
                practice that helps your body feel rooted and supported.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet surrender clear emotional weight.",
          yang: "Let rest prepare your next mental beginning.",
          content: (
            <>
              <p className="mt-4">
                The Last Quarter Moon in Pisces invites you to soften the grip
                around what no longer needs to be carried. Rest, music, water,
                prayer, and silence can feel especially healing.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What am I ready to release so my mind
                can begin again?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive support that feels nourishing and safe.",
          yang: "Build steadily through clear communication.",
          content: (
            <>
              <p className="mt-4">
                Venus and Jupiter in Cancer highlight abundance through care,
                trust, emotional intelligence, home, family, nourishment, and
                meaningful connection.
              </p>

              <p className="mt-4">
                The Gemini New Moon supports new ideas, writing, teaching,
                marketing, conversations, networking, and learning. Plant one
                seed that can grow through your voice.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let compassion become your inner medicine.",
          yang: "Let clarity become your next beginning.",
          content: (
            <>
              <p className="mt-4">
                Visualize a soft river washing away old thoughts, fears, and
                emotional heaviness. Then imagine a bright new page opening
                before you — clean, spacious, and ready.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I release with compassion and begin again with
                clarity.
                <br />
                <b>Prompt:</b> What new story am I ready to write for myself?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let love soften old endings.",
          yang: "Let new thoughts shape your path.",
          content: (
            <>
              <p className="mt-4 italic">
                "I release what is complete and welcome the new ideas meant to
                guide me forward."
              </p>

              <p className="mt-4">
                Repeat this affirmation when you feel between endings and
                beginnings.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let your heart receive what is tender.",
          yang: "Let your mind open to what is new.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I soften, receive, release, and begin again with an
                open heart and clear mind."
              </p>

              <p className="mt-4">
                Pisces helps you release. Cancer helps you receive. Gemini helps
                you begin again through thought, word, and curiosity. Let this
                week become a sacred bridge between emotional healing and mental
                renewal.
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
