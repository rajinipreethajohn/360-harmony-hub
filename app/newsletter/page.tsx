"use client";
import useIsPrinting from "@/hooks/useIsPrinting";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";

export default function NewsletterPage() {
  const isPrinting = useIsPrinting();
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribeError("");

    const formData = new FormData(event.currentTarget);
    const encodedFormData = new URLSearchParams();

    formData.forEach((value, key) => {
      encodedFormData.append(key, value.toString());
    });

    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedFormData.toString(),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setSubscriberName("");
      setSubscriberEmail("");
      setIsSubscribed(true);
    } catch {
      setSubscribeError(
        "Something did not flow through. Please try again in a moment.",
      );
    }
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
          July 27 – August 02, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Radiant Expansion and Liberating Truth — Leo Courage, Aquarius
            Illumination, and Heart-Led Reinvention
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
            This week carries bold, expansive energy as the{" "}
            <b>Sun moves through Leo</b>, illuminating confidence, creativity,
            self-expression, visibility, and the courage to live from the heart.
            With <b>Jupiter also in Leo</b>, the invitation is not merely to be
            seen — it is to grow into a larger and more generous expression of
            who you truly are.
            <br />
            <b>Mercury is newly direct in Cancer</b>, helping emotional
            conversations and delayed decisions begin moving forward again.
            Communication may gradually feel clearer, but tenderness and
            patience remain important as recent misunderstandings continue to
            settle.
            <br />
            On <b>July 29</b>, the <b>Full Moon in Aquarius</b> illuminates
            freedom, friendship, community, belonging, future vision, and the
            courage to release roles that no longer reflect your authentic self.
            The same Leo–Aquarius axis asks a powerful question: how can you
            shine fully while contributing something meaningful to the wider
            world?
          </p>

          <p>
            Let this week help you release what limits your light and step
            forward with courage, generosity, and truth.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let spacious truth free your authentic self.",
          yang: "Let courageous radiance move your life forward.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Leo</b>: confidence, creativity,
                visibility, joy, leadership, and heart-led self-expression.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                optimism, creative growth, and courageous possibility.
                <br />- <b>All week – Mercury direct in Cancer</b>: emotional
                clarity, heartfelt communication, memory, and gently resolving
                unfinished conversations.
                <br />- <b>All week – Venus in Virgo</b>: thoughtful love,
                practical care, discernment, devotion, and meaningful
                improvement.
                <br />- <b>All week – Mars in Gemini</b>: mental movement,
                conversation, curiosity, adaptability, and multiple directions
                of action.
                <br />- <b>Jul 29 – Full Moon in Aquarius</b>: liberation,
                community, friendship, future vision, emotional illumination,
                and authentic belonging.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, leadership, courage, boundaries, and
                long-term commitments.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where am I ready to stop shrinking my light?
                <br />
                - Which role, expectation, or identity no longer feels
                authentic?
                <br />- How can my personal gifts contribute to something larger
                than myself?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>July 29</b>, write down one outdated role,
                expectation, or social pattern you are ready to release.
                <br />- Share one creative idea, truth, or expression that you
                have been keeping hidden.
                <br />- Before the week ends, reconnect with one friend,
                community, or meaningful vision that reminds you of the future
                you want to help create.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentle care restore your inner rhythm.",
          yang: "Let joyful movement awaken your vitality.",
          content: (
            <>
              <p className="mt-4">
                Leo energy benefits from warmth, creativity, sunlight, play, and
                movement that reconnects you with joy. Let wellness include
                pleasure and self-expression, not only discipline.
              </p>

              <p className="mt-4">
                Venus in Virgo supports practical care: nourishing meals,
                hydration, sleep, stretching, and simple routines that make your
                body feel respected. Mars in Gemini may scatter energy, so
                alternate stimulation with quiet grounding.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let spaciousness clear emotional noise.",
          yang: "Let rest protect your creative fire.",
          content: (
            <>
              <p className="mt-4">
                The Aquarius Full Moon may make the mind feel active or socially
                overstimulated. Create space away from constant messages,
                opinions, and digital input so your own truth can become easier
                to hear.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What becomes possible when I stop
                performing and simply allow myself to be real?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that honor your true gifts.",
          yang: "Let confident expression create meaningful growth.",
          content: (
            <>
              <p className="mt-4">
                The Sun and Jupiter in Leo support abundance through creativity,
                confidence, leadership, generosity, visibility, and the courage
                to share what makes you distinctive.
              </p>

              <p className="mt-4">
                Venus in Virgo reminds you that inspiration becomes sustainable
                through care and craftsmanship. Refine one offer, skill, system,
                or creative project rather than chasing every new idea at once.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let freedom open space within your heart.",
          yang: "Let courage make your light visible.",
          content: (
            <>
              <p className="mt-4">
                Visualize a golden flame glowing in the center of your chest.
                Around it is a wide, clear sky. Your light does not compete with
                anyone else&apos;s freedom; it becomes brighter when both can
                exist together.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I honor my uniqueness and share my light with
                courage.
                <br />
                <b>Prompt:</b> What truth would I express if I no longer feared
                being misunderstood?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let authenticity soften the need for approval.",
          yang: "Let confidence guide your expression.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I release the need to fit in and allow my authentic light
                to serve the world.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when you feel torn between belonging and
                being fully yourself.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let freedom return you to your truth.",
          yang: "Let radiance carry your gifts outward.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I release what dims me and step forward with an
                open heart, a clear vision, and courageous light.&quot;
              </p>

              <p className="mt-4">
                Leo reminds you to shine. Aquarius reminds you that your light
                belongs within a larger constellation. Cancer reminds you to
                speak from the heart, while Virgo asks you to make your gifts
                useful and real. Let this week reconnect personal radiance with
                meaningful contribution.
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

      {/* Footer + Print and Subscribe Actions */}
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

      <div className="my-8 no-print space-y-6">
        <div className="text-center">
          <button
            onClick={() => window.print()}
            className="px-5 py-2 bg-[#1c1b2b] text-[#f9f5e6] rounded-lg shadow-md hover:bg-[#cbb89d] hover:text-[#1c1b2b] transition-all duration-300"
          >
            📄 Download as PDF
          </button>
        </div>

        <form
          name="harmony-newsletter-subscribe"
          method="POST"
          action="/forms.html"
          onSubmit={handleSubscribe}
          className="max-w-xl mx-auto bg-white/65 backdrop-blur-sm border border-[#e6c79266] rounded-2xl shadow-md p-5 text-center font-serif text-[#1c1b2b]"
        >
          <input
            type="hidden"
            name="form-name"
            value="harmony-newsletter-subscribe"
          />

          <p className="hidden">
            <label>
              Do not fill this out if you are human:{" "}
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <p className="text-sm italic text-gray-600 mb-4">
            Receive the weekly Yin Yang Newsletter gently in your inbox.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <label className="sr-only" htmlFor="subscriber-name">
              Name
            </label>
            <input
              id="subscriber-name"
              name="name"
              type="text"
              value={subscriberName}
              onChange={(event) => setSubscriberName(event.target.value)}
              placeholder="Name"
              className="w-full rounded-lg border border-[#d6be96] bg-[#fffaf3] px-4 py-2 text-sm text-[#1c1b2b] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cbb89d]"
            />

            <label className="sr-only" htmlFor="subscriber-email">
              Email
            </label>
            <input
              id="subscriber-email"
              name="email"
              type="email"
              value={subscriberEmail}
              onChange={(event) => setSubscriberEmail(event.target.value)}
              placeholder="Email address"
              required
              className="w-full rounded-lg border border-[#d6be96] bg-[#fffaf3] px-4 py-2 text-sm text-[#1c1b2b] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#cbb89d]"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2 bg-[#1c1b2b] text-[#f9f5e6] rounded-lg shadow-md hover:bg-[#cbb89d] hover:text-[#1c1b2b] transition-all duration-300"
          >
            Receive Weekly Newsletter
          </button>

          {isSubscribed && (
            <p className="mt-4 text-sm italic text-[#5c5244]">
              You are on the list. Thank you for joining this weekly rhythm.
            </p>
          )}

          {subscribeError && (
            <p className="mt-4 text-sm italic text-red-700">{subscribeError}</p>
          )}
        </form>
      </div>
    </div>
  );
}
