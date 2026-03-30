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
          March 30 – April 05, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Rooted Desire and Sacred Momentum — Aries Fire, Taurus Grace, and
            the Courage to Stabilize
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
            This week carries a strong blend of <b>Aries fire</b> and emerging{" "}
            <b>Taurus steadiness</b>. The <b>Sun remains in Aries</b>, keeping
            life direct, initiating, and courage-centered, while{" "}
            <b>Mercury stays in Pisces</b>, reminding you that not all clarity
            arrives through logic alone. Intuition still matters. Timing still
            matters. Softness still matters.
            <br />
            On <b>March 30</b>, <b>Venus enters Taurus</b>, shifting the heart
            toward grounded love, embodied pleasure, self-worth, beauty, and
            stability. What felt impulsive begins to seek roots. What felt
            exciting now asks: can this last, can this nourish, can this become
            real?
            <br />
            The week builds toward a revealing emotional crest with the{" "}
            <b>Full Moon in Libra on April 1</b>, illuminating relationship
            dynamics, reciprocity, harmony, and the balance between self and
            other. This is a beautiful week to notice what feels aligned, what
            feels sustainable, and where your life is asking for both courage
            and grace.
          </p>
          <p>
            Let this week teach you that bold beginnings become sacred when they
            are rooted in what truly nourishes you.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let beauty and balance reveal what is truly worth keeping.",
          yang: "Let courage root itself in what feels real and lasting.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Aries</b>: courage, initiative,
                self-leadership, and forward momentum.
                <br />- <b>All week – Mercury in Pisces</b>: intuitive insight,
                emotional intelligence, and reflective thought.
                <br />- <b>Mar 30 – Venus enters Taurus</b>: grounded love,
                sensuality, steadiness, beauty, and self-worth deepen.
                <br />- <b>Apr 1 – Full Moon in Libra</b>: relationship clarity,
                emotional illumination, balance, and honest reflection on
                partnership dynamics.
                <br />- <b>All week – Mars in Pisces</b>: heart-led action,
                spiritual motivation, and softer movement.
                <br />- <b>All week – Saturn in Aries</b>: brave maturity,
                committed self-leadership, and strong inner structure.
              </p>
              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What feels both beautiful and sustainable now?
                <br />
                - Where am I being asked to create greater balance in giving and
                receiving?
                <br />- What desire is becoming more rooted, clear, and real?
              </p>
              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>March 30</b>, create one small Venus-in-Taurus
                pleasure ritual: fresh flowers, beautiful food, a slow walk, or
                a nourishing self-care moment.
                <br />- On <b>April 1</b>, journal honestly about one important
                relationship: what feels balanced, and what wants adjustment?
                <br />- Throughout the week, choose one action that honors both
                your self-worth and your peace.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body receive steadiness and care.",
          yang: "Let your energy move in ways that feel clean and grounding.",
          content: (
            <>
              <p className="mt-4">
                Venus in Taurus reminds you that wellness is not just about
                discipline — it is also about nourishment, pleasure, and feeling
                safe in your body. Slow down enough to notice what truly
                supports you.
              </p>
              <p className="mt-4">
                Choose movement that grounds rather than depletes: walking,
                stretching, mindful strength work, or yoga that helps you feel
                rooted and present.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness restore your inner harmony.",
          yang: "Let rest refine your direction and relationships.",
          content: (
            <>
              <p className="mt-4">
                The Libra Full Moon may highlight emotional imbalances or
                tensions that need gentleness, not force. Rest becomes a form of
                recalibration this week.
              </p>
              <p className="mt-4">
                Before sleep, ask: &quot;What would balance feel like in my
                body, my heart, and my closest relationships?&quot; Let the
                answer arrive without rushing.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what feels nourishing, beautiful, and true.",
          yang: "Act on what creates stability and long-term value.",
          content: (
            <>
              <p className="mt-4">
                Venus in Taurus favors abundance that is tangible, steady, and
                rooted in self-respect. Notice where you are building from real
                value rather than from urgency or comparison.
              </p>
              <p className="mt-4">
                The Libra Full Moon can also reveal where your energy has been
                overextended. Make one practical adjustment this week that
                protects your peace and supports your long-term growth.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Let grace soften what force cannot fix.",
          yang: "Let clean courage anchor your next choice.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing in a beautiful open field with roots
                beneath your feet and sunlight warming your chest. You do not
                have to choose between strength and softness. You can be both
                grounded and brave.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> I choose what is balanced, beautiful, and true.
                <br />
                <b>Prompt:</b> What would it look like to honor both my desires
                and my peace this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let beauty and balance soften your path.",
          yang: "Let self-worth shape your next step.",
          content: (
            <>
              <p className="mt-4 italic">
                "I root my life in what nourishes me, and I move forward with
                grace, courage, and self-respect."
              </p>
              <p className="mt-4">
                Repeat this affirmation when the week feels emotionally full. It
                will return you to steadiness and truth.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let harmony become your medicine.",
          yang: "Let courage become your structure.",
          content: (
            <>
              <p className="mt-4 italic">
                "This week, I choose what feels balanced, rooted, and deeply
                alive."
              </p>
              <p className="mt-4">
                Aries asks you to begin. Taurus asks you to ground. Libra asks
                you to balance. Let this week be a quiet masterpiece of
                self-respect: honest in love, rooted in value, and brave enough
                to choose what lasts.
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
