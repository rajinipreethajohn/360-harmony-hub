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
            Clarity & Vision — Bridging Sagittarius Fire and Capricorn Grounding
          </b>
        </p>
      </motion.div>

      {/* 💡 PDF note */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this week's edition, scroll to the end and click{" "}
        <b>"Download as PDF."</b>
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
            and visionary perspective. On <b>December 10</b>,{" "}
            <b>Neptune stations direct in Pisces</b>, lifting spiritual fog and
            sharpening intuition, while <b>Mercury opposes Uranus</b>, sparking
            sudden insights and liberating ideas. On <b>December 11</b>,{" "}
            <b>Mercury enters Sagittarius</b>, inviting big-picture thinking and
            truth-telling, and the{" "}
            <b>Geminids meteor shower peaks on December 13–14</b>, adding cosmic
            wonder to the night sky.
            <br />
            Balance Sagittarius&apos; expansive fire with the steady, practical
            focus of the approaching Capricorn season for powerful, grounded
            manifestation.
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
          yin: "Let cosmic wonder deepen your inner vision.",
          yang: "Let clear communication guide purposeful action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological & Celestial Highlights:</b>
                <br />- <b>Dec 10 – Neptune stations direct in Pisces</b>:
                spiritual fog lifts, intuition and dreams gain clarity.
                <br />- <b>Dec 10 – Mercury opposite Uranus</b>: sudden
                downloads, breakthrough ideas, and liberating conversations.
                <br />- <b>Dec 11 – Mercury enters Sagittarius</b>: expansive
                communication and big-picture vision.
                <br />- <b>Dec 13–14 – Geminid meteor shower peaks</b>: a
                celestial spectacle amplifying awe, wonder, and cosmic
                connection.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What sudden insights are ready to expand your perspective?
                <br />
                - How can spiritual clarity guide your practical ambitions?
                <br />- Where do you need both disciplined structure and cosmic
                vision?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>December 10</b>, journal intuitive messages and
                surprising ideas that come through — treat them as guidance from
                your higher mind.
                <br />- On <b>December 11</b>, speak your big visions aloud with
                confidence: record a voice note or share with someone you trust.
                <br />- On <b>December 13–14</b>, if possible, watch the
                Geminids under the night sky and make wishes or set intentions
                with each meteor you notice.
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
                Blend grounding practices with expansive movement this week.
                Think <b>slow, strong foundations</b> with moments of{" "}
                <b>free expression</b>: a steady walk or hike in nature,
                followed by heart-opening yoga, dancing in your living room, or
                a few playful sprints with the kids.
              </p>
              <p className="mt-4">
                Nourish your body with <b>warming, antioxidant-rich foods</b>:
                root vegetables, lentil stews, herbal teas with ginger or
                cinnamon, and dark berries where available. Let hydration be a
                loving ritual rather than a chore.
              </p>
              <p className="mt-4">
                Notice how your body feels when you move from{" "}
                <b>inspiration rather than obligation</b>. Let wellness be a
                joyful expression of your life force, not a punishment.
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
                With <b>Neptune turning direct</b>, your dream life and subtle
                senses may feel extra active. Prioritize{" "}
                <b>restorative practices</b>: candlelit baths, gentle yin yoga,
                yoga nidra, or simply lying down with soothing music and no
                screens.
              </p>
              <p className="mt-4">
                Keep a journal or notes app by your bed. On waking, jot down{" "}
                <b>symbols, feelings, or phrases</b> from your dreams —
                don&apos;t over-analyze. Let patterns reveal themselves over
                time.
              </p>
              <p className="mt-4">
                Protect your nervous system with <b>soft boundaries</b>: limit
                doomscrolling, step back from draining conversations, and give
                yourself permission to say, “I&apos;ll answer this tomorrow.”
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
                With <b>Mercury in Sagittarius</b>, your money and work mindset
                naturally zooms out to the <b>big picture</b>. This is a
                beautiful time to revisit your long-term financial story: What
                kind of life are you truly building, and does your current
                strategy match that vision?
              </p>
              <p className="mt-4">
                Use Sagittarius&apos; optimism to brainstorm possibilities, then
                invite the approaching <b>Capricorn energy</b> to refine them
                into realistic steps: budgets, timelines, and small, consistent
                actions.
              </p>
              <p className="mt-4">
                Ask yourself:{" "}
                <b>Where can I be more courageous in sharing my gifts?</b> and{" "}
                <b>Where can I be more disciplined in nurturing them?</b>{" "}
                Abundance grows where inspiration and responsibility meet.
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
                In meditation, visualize yourself as a{" "}
                <b>mountain under a star-filled sky</b>: roots deep in the
                earth, crown illuminated by cosmic light. Each inhale draws in
                wisdom from above; each exhale anchors it into your body and
                daily life.
              </p>
              <p className="mt-4">
                Try a simple breath pattern: inhale for 4, hold for 4, exhale
                for 6–8. Let the longer exhale signal safety to your nervous
                system and create space for insight.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> &quot;I receive cosmic wisdom and ground it into
                reality.&quot;
                <br />
                <b>Prompt:</b> What vision will you lovingly and realistically
                anchor this week?
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
                &quot;I align heaven and earth within me — clear in vision,
                steady in action.&quot;
              </p>
              <p className="mt-4">
                Repeat this each morning and evening. Imagine a column of light
                running from above your head down through your spine into the
                earth. See your choices for the day aligning with this column of
                truth.
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
                &quot;This week, I bridge cosmos and earth — clear, grounded,
                alive.&quot;
              </p>
              <p className="mt-4">
                As <b>Neptune clears</b> and <b>Mercury expands</b>, trust both
                your intuition and your intellect. Let the skies inspire you,
                but let your daily choices build the life you&apos;re truly
                meant to live. One honest decision, one steady step at a time is
                more magical than it looks.
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
