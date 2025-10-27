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
          October 27 – November 2, 2025
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme: <b>Emergent Truth — Clarity in the Depths of Scorpio</b>
        </p>
      </motion.div>

      {/* 💡 PDF note */}
      <p className="text-center text-sm italic text-gray-600 mt-6 no-print">
        💡 To save this week’s edition, scroll to the end and click <b>“Download as PDF.”</b>
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
            This week opens under a <b>deep Scorpio influence</b>. On <b>October 29</b>, <b>Mercury enters Sagittarius</b>, inviting <b>truth to travel freely</b> and <b>intentions to be anchored in hope</b>. Meanwhile, the tone of transformation remains potent — you are called to move from <b>hidden knowing</b> into <b>articulate clarity</b>.<br />
            As <b>boundaries dissolve</b> and <b>authenticity rises</b>, may you emerge renewed — speaking from depth and living with aligned purpose.
          </p>
          <p>
            Let this week be your <b>channel of clarity</b> — where <b>silence becomes voice</b>, <b>alignment births action</b>, and your <b>inner power</b> becomes outward expression.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the undercurrents speak before the surface stirs.",
          yang: "Let your words reflect the depth of your felt experience.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b><br />
                • <b>Oct 29 – Mercury enters Sagittarius</b>: communication expands in <b>optimism and truth</b>.<br />
                • <b>Sun, Mars & Pluto in Scorpio</b> continue their <b>transformational run</b> — from <b>shadow</b> to <b>phoenix flight</b>.<br />
                • <b>Oct 31 – Waxing Gibbous Moon in Pisces</b>: inviting <b>mystery</b>, <b>release</b>, and <b>creative surrender</b>.
              </p>
              <p className="mt-4">
                <b>Reflections:</b><br />
                • What truth have you been avoiding because your <b>voice was too soft</b>?<br />
                • Where is your <b>inner world</b> asking to be translated into <b>expression</b>?<br />
                • Can your <b>shadow become your message</b> instead of your secret?
              </p>
              <p className="mt-4">
                <b>Rituals:</b><br />
                • On <b>October 29</b>, write one sentence you’ve held in silence — read it aloud at sunrise.<br />
                • On the night of <b>October 31</b>, light one black and one silver candle and whisper: <i>“I release what hides; I receive what emerges.”</i><br />
                • In your journal, trace the line between what you feel and what you say — <b>notice the gap</b> and <b>step through it</b>.
              </p>
            </>
          ),
        },
        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your breath soften the tension; let your motion flow the truth.",
          yang: "Let your body express the clarity your mind births.",
          content: (
            <>
              <p className="mt-4">
                As <b>Scorpio energies deepen</b>, choose <b>restorative movement</b>: yin yoga, slow pranayama, and long exhalations. Nourish yourself with <b>wild rice</b>, <b>mushrooms</b>, <b>selenium-rich Brazil nuts</b>, and <b>deeply hydrating greens</b>.
              </p>
              <p className="mt-4">
                On <b>October 30</b>, aim for a <b>silent walk by water</b> — let your nervous system integrate the subtle charge of transformation. Later in the week, use shorter, grounded <b>strength practices</b> (body-weight or kettlebells) to stabilize the fire you’ve stirred.
              </p>
            </>
          ),
        },
        {
          title: "🌿 Rest & Renewal",
          yin: "Let the depth of your stillness mirror the magnitude of your growth.",
          yang: "Let boundaries protect your rest so your roots can rebuild.",
          content: (
            <>
              <p className="mt-4">
                With the <b>intensity of Scorpio season</b>, your system needs <b>sanctuary</b>. Prioritize <b>7–8 hours of rest</b>. Dim lights after 8 pm; use amber filters if screens remain. Journal what stillness brings rather than what motion takes.
              </p>
              <p className="mt-4">
                At bedtime, choose one of two rituals: a <b>salt bath</b> followed by 10 minutes of <b>alternate-nostril breathing</b>, or a <b>sound bath</b> with soft hums. Let the night <b>soften the edges</b> of your transformation.
              </p>
            </>
          ),
        },
        {
          title: "✨ Abundance in Alignment",
          yin: "Receive the shift without over-structuring it.",
          yang: "Act from insight, not urgency.",
          content: (
            <>
              <p className="mt-4">
                <b>Mercury in Sagittarius</b> opens <b>new pathways</b> — stay alert to <b>messages and invitations</b> that feel meaningful, not rushed. Financially, <b>revisit joint commitments</b> from Libra season; <b>clarity prevents regret</b>.
              </p>
              <p className="mt-4">
                Trust the <b>slow build</b>. This is not a sprint but a refinement of power. Choose one <b>aligned collaboration</b> — not because it dazzles, but because it endures.
              </p>
            </>
          ),
        },
        {
          title: "🧘 Stillness & Power",
          yin: "Sink into the depth of your knowing before you rise into your voice.",
          yang: "Let your emergence be the ripple, not the storm.",
          content: (
            <>
              <p className="mt-4">
                Meditate on the image of the <b>phoenix rising from the sea</b> — dark water, silver flame. Let <b>stillness become fire</b> within your chest. Each inhale calls power in; each exhale releases what no longer aligns.
              </p>
              <p className="mt-4">
                <b>Affirm:</b> “I emerge not from haste but from depth.”<br />
                <b>Prompt:</b> Where will you take your <b>first quiet step of emergence</b> this week?
              </p>
            </>
          ),
        },
        {
          title: "🌟 Sacred Affirmation",
          yin: "Let the roots of your truth stretch quietly beneath the soil.",
          yang: "Let your presence be the signal, not just the message.",
          content: (
            <>
              <p className="mt-4 italic">
                “From shadowed whisper to radiant clarity — I rise in my own light.”
              </p>
              <p className="mt-4">
                Speak this each morning as you sip water or breathe in stillness. Let it be your <b>anchor of self-trust</b> and your <b>foundation for courage</b>.
              </p>
            </>
          ),
        },
        {
          title: "🔮 A Final Whisper",
          yin: "Let the hidden parts of you become the next chapter of your story.",
          yang: "Let your story lead with integrity, not urgency.",
          content: (
            <>
              <p className="mt-4 italic">
                “This week I step from beneath into beyond — aligned, anchored, and alive.”
              </p>
              <p className="mt-4">
                As we move deeper into <b>Scorpio season</b> and <b>Mercury’s voyage into Sagittarius</b> begins, your task is not merely to transform — it is to <b>emerge</b>. Let your <b>inner truth</b> become your <b>outer path</b>.
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
        <a href="https://360harmonyhub.netlify.app" target="_blank" rel="noopener noreferrer">
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
