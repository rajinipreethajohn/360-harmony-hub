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
          December 15 – December 21, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            The Threshold Week — Mars in Capricorn, Sagittarius New Moon, and
            the Solstice Shift
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
            This week is a powerful <b>threshold</b>: we move through{" "}
            <b>late Sagittarius season</b> and arrive at{" "}
            <b>Capricorn&apos;s grounded beginning</b> at the{" "}
            <b>Winter Solstice on December 21</b> (Sun enters Capricorn). On{" "}
            <b>December 15</b>, <b>Mars enters Capricorn</b>, shifting our drive
            from spontaneous fire to disciplined, steady ambition — a signature
            energy for building what lasts. By <b>December 16</b>, Mercury fully
            clears its post-retrograde shadow, helping conversations, plans, and
            decisions feel cleaner and less tangled. The{" "}
            <b>New Moon in Sagittarius</b> arrives on <b>December 20</b>,
            offering a fresh reset for beliefs, vision, and faith — and the
            Solstice the next day anchors those visions into structure.
            <br />
            Let Sagittarius inspire the meaning, and let Capricorn shape the
            method — so your next steps become both soulful and sustainable.
          </p>
          <p>
            Let this week be your quiet pivot: a clearer mind, a steadier
            backbone, and a renewed devotion to what you are here to build.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the New Moon renew your inner truth.",
          yang: "Let Capricorn discipline turn vision into form.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Dec 15 – Mars enters Capricorn</b>: focused ambition,
                deliberate action, and the strength to commit to long-term
                goals.
                <br />-{" "}
                <b>Dec 16 – Mercury clears its post-retrograde shadow</b>:
                clarity returns to plans, logistics, and communication.
                <br />- <b>Dec 20 – New Moon in Sagittarius</b>: a fresh start
                for faith, purpose, learning, and big-picture intention-setting.
                <br />- <b>Dec 21 – Winter Solstice (Sun enters Capricorn)</b>:
                a seasonal and spiritual turning point toward structure,
                maturity, and sustainable growth.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What do you want to build in 2026 that requires consistency
                more than intensity?
                <br />
                - Which belief, story, or dream needs an honest New Moon reset?
                <br />- Where can you simplify your plan so it becomes easy to
                repeat — day after day?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>December 15</b>, choose one goal and write the
                smallest daily action that proves your devotion to it.
                <br />- On <b>December 20</b>, set 3 New Moon intentions: one
                for mindset, one for relationships, one for your life path.
                <br />- On <b>December 21</b>, light a candle and speak one vow
                aloud: &quot;I commit to building my life with patience,
                integrity, and grace.&quot;
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let steadiness soothe the nervous system.",
          yang: "Let disciplined movement strengthen your foundations.",
          content: (
            <>
              <p className="mt-4">
                With Mars moving into Capricorn, your body benefits from
                consistency more than intensity. Choose a simple plan you can
                repeat: strength training basics, long walks, or slow, focused
                yoga that builds stability through the legs, hips, and core.
              </p>
              <p className="mt-4">
                Support your bones and energy with grounding nourishment: warm
                soups, root vegetables, sesame, lentils, and mineral-rich
                greens. Hydrate steadily, and keep caffeine balanced — this week
                rewards calm stamina.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let darkness teach you sacred quiet.",
          yang: "Let rest become your strategy for power.",
          content: (
            <>
              <p className="mt-4">
                Solstice week invites deeper restoration. Create an evening
                ritual that signals safety to the body: dim lights, fewer
                screens, gentle stretches, and a warm shower or bath. If your
                mind feels busy, repeat one calming phrase with your breath:
                inhale &quot;I soften&quot; — exhale &quot;I trust.&quot;
              </p>
              <p className="mt-4">
                Place a notebook near your bed. Write one sentence each night:
                &quot;What I release today is...&quot; and &quot;What I am
                willing to receive is...&quot; The answers don&apos;t need to be
                dramatic — they just need to be true.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what matches your values.",
          yang: "Build what matches your vision.",
          content: (
            <>
              <p className="mt-4">
                Mars in Capricorn favors slow wealth: disciplined habits, clear
                boundaries, and purposeful effort. The Sagittarius New Moon
                reminds you to keep your work connected to meaning — abundance
                grows faster when your &quot;why&quot; is alive.
              </p>
              <p className="mt-4">
                Audit your time and energy like a sacred budget. Where are you
                leaking attention? What single system (a calendar routine, a
                weekly review, a focused work block) would make your next level
                feel inevitable rather than exhausting?
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let inner truth guide the way.",
          yang: "Let commitment become your calm authority.",
          content: (
            <>
              <p className="mt-4">
                Imagine yourself standing at a mountain gate. Behind you is the
                old year&apos;s noise; ahead is a quieter, stronger path. With
                each inhale, gather your scattered energy back into your body.
                With each exhale, seal it into your spine — steady, unshakable,
                and aligned.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I move with patience, power, and purpose.
                <br />
                <b>Prompt:</b> What is my one most sacred commitment for the
                season ahead — and what does it look like in daily life?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let faith renew your inner compass.",
          yang: "Let discipline turn intention into destiny.",
          content: (
            <>
              <p className="mt-4 italic">
                "I honor the turning of the season. I release what is heavy, and
                I commit to building what is true."
              </p>
              <p className="mt-4">
                Speak this affirmation daily, especially as you set New Moon
                intentions and step into Capricorn&apos;s steady, life-shaping
                energy.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the Solstice quiet reveal your wisdom.",
          yang: "Let your devotion shape the year ahead.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I cross the threshold — renewed in spirit, steady in
                action, and devoted to what I am becoming."
              </p>
              <p className="mt-4">
                The New Moon invites vision, Mars in Capricorn invites mastery,
                and the Solstice invites maturity. You don&apos;t need to rush.
                You only need to keep returning — to your breath, your truth,
                and the small daily actions that build a life you can trust.
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
