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
          December 29, 2025 – January 4, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            The First Gate of 2026 — Capricorn Devotion and the Cancer Full Moon
            Heart
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
            This week bridges the final breath of <b>2025</b> and the first
            steady steps into <b>2026</b>. The{" "}
            <b>Sun continues through Capricorn</b>, asking for maturity,
            simplification, and long-term alignment — not performative
            resolutions. <b>Mercury is direct in Capricorn</b>, keeping the mind
            honest and future-facing, while inviting reflective review through
            meaning: what did you learn, what do you truly believe, and what
            story are you ready to live next?
            <br />
            The emotional center of the week arrives with the{" "}
            <b>Full Moon in Cancer on January 3</b>, illuminating home,
            belonging, family dynamics, and the deeper question of safety: where
            do you feel held, and what do you need to feel held? With{" "}
            <b>Venus traveling through Capricorn</b>, love and values lean
            toward commitment, integrity, and the kind of devotion that shows up
            in daily life. This is a week to choose what lasts — and to let your
            heart guide the structure you build.
          </p>
          <p>
            Let this week be a gentle crossing: grounded in Capricorn clarity,
            softened by Cancer tenderness, and guided by a devotion to what is
            real.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the Cancer Full Moon reveal what your heart needs.",
          yang: "Let Capricorn structure hold your intentions with strength.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Capricorn</b>: discipline, focus,
                boundaries, and long-term priorities.
                <br />- <b>All week – Mercury direct in Capricorn</b>:
                big-picture thinking, honest reflection, and truth-centered
                conversations.
                <br />- <b>All week – Venus in Capricorn</b>: mature love,
                steady values, and grounded choices in money and relationships.
                <br />- <b>Jan 3 – Full Moon in Cancer</b>: heightened emotion,
                family and home themes, deep intuition, and a call to nurture
                what is truly important.
                <br />- <b>Jan 3–4 – Quadrantids meteor shower peaks</b>: cosmic
                wonder under bright moonlight — a reminder to keep awe alive,
                even when visibility is imperfect.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What does &quot;home&quot; mean to me right now — a place, a
                person, a feeling, or a way of being?
                <br />
                - Where have I been strong, but not soft — and where have I been
                soft, but not clear?
                <br />- What commitment would make 2026 feel emotionally safer
                and spiritually truer?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>January 1</b>, choose one simple Capricorn anchor:
                a daily practice, a boundary, or a routine that supports your
                nervous system.
                <br />- On <b>January 3</b>, place a hand on your heart and one
                on your belly. Breathe slowly and ask: &quot;What am I ready to
                nurture now?&quot; Write what rises without editing.
                <br />- On <b>January 3–4</b>, look up at the night sky for a
                few minutes. Even if you see fewer meteors, let the act of
                looking up reopen your sense of possibility.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let tenderness be medicine for the body.",
          yang: "Let steady habits rebuild trust with yourself.",
          content: (
            <>
              <p className="mt-4">
                Capricorn season supports structure, but the Cancer Full Moon
                reminds you to care for your body like a beloved home. Choose
                grounding movement: long walks, gentle strength work, slow yoga,
                and deep stretching for hips, hamstrings, and back.
              </p>
              <p className="mt-4">
                Eat warming, mineral-rich foods that soothe the system: soups,
                stews, lentils, root vegetables, sesame, and leafy greens. Keep
                hydration steady and prioritize nourishment over extremes — this
                week rewards consistency.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let the Full Moon illuminate what needs soothing.",
          yang: "Let rest become a sacred strategy, not an afterthought.",
          content: (
            <>
              <p className="mt-4">
                Full Moon weeks can heighten emotions and sleep sensitivity.
                Create a simple nightly ritual: dim lights, warm shower or bath,
                and a few minutes of slow breathing. Let your nervous system
                register safety.
              </p>
              <p className="mt-4">
                Keep a journal nearby and write one line before bed: &quot;What
                I can release tonight is...&quot; and one line upon waking:
                &quot;What I want to nurture today is...&quot; Small clarity
                becomes a big reset.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what matches your values and your heart.",
          yang: "Build a stable path through clear choices.",
          content: (
            <>
              <p className="mt-4">
                Venus in Capricorn favors sustainable abundance: long-term value
                over quick wins, and devotion over impulsive spending. Review
                where your resources go — time, money, energy — and notice what
                actually returns peace.
              </p>
              <p className="mt-4">
                Let the Cancer Full Moon refine your definition of success: not
                just what looks impressive, but what feels supportive. Choose
                one practical structure for the month ahead: a weekly review, a
                budget reset, or a protected block of time for your most sacred
                work.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let your inner home become your sanctuary.",
          yang: "Let your spine become your steady promise.",
          content: (
            <>
              <p className="mt-4">
                Visualize a warm lantern glowing inside your chest. With each
                inhale, the light expands through your ribs, belly, and spine.
                With each exhale, it settles into your feet, rooting you into
                the earth. You are both held and capable — soft and strong.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I nurture what matters and build what lasts.
                <br />
                <b>Prompt:</b> What does my heart want to feel in 2026 — and
                what daily structure supports that feeling?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let care be your compass.",
          yang: "Let devotion be your direction.",
          content: (
            <>
              <p className="mt-4 italic">
                "I am safe to soften. I am strong enough to build. I begin this
                year with love, clarity, and steady grace."
              </p>
              <p className="mt-4">
                Speak this affirmation daily, especially around the Cancer Full
                Moon, to weave emotional warmth into your Capricorn intentions.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let your heart tell the truth.",
          yang: "Let your life become the proof of your intentions.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I choose what nurtures me — and I commit to what I
                am here to build."
              </p>
              <p className="mt-4">
                Capricorn season asks for integrity. The Cancer Full Moon asks
                for care. Together, they offer a beautiful beginning: a year
                shaped by steady action and softened by a heart that knows what
                truly matters.
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
