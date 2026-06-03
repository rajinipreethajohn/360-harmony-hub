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

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>,
        ).toString(),
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
          June 01 – June 07, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Emotional Clarity and Grounded Integration — Gemini Insight, Cancer
            Feeling, and Taurus Steadiness
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
            This week begins in the afterglow of the Sagittarius Full Moon,
            inviting integration, reflection, and emotional processing. The{" "}
            <b>Sun remains in Gemini</b>, keeping the mind curious, expressive,
            and open to fresh perspectives, while <b>Mercury enters Cancer on
            June 1</b>, shifting communication from quick analysis into deeper
            emotional intelligence.
            <br />
            <b>Venus in Cancer</b> continues to soften love, creativity, and
            connection, encouraging tenderness, care, and emotional safety.
            Meanwhile, <b>Mars in Taurus</b> grounds action into patience,
            persistence, and embodied follow-through.
            <br />
            With the <b>waning gibbous Moon</b> moving through the week, this is
            not a time to rush. It is a time to absorb what has been revealed,
            process what feels true, and return to steady choices that nourish
            both heart and body.
          </p>

          <p>
            Let this week help you think clearly, feel honestly, and move
            forward with grounded care.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let emotional wisdom soften your thoughts.",
          yang: "Let grounded action support what feels true.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Gemini</b>: curiosity,
                communication, adaptability, learning, and fresh perspective.
                <br />- <b>Jun 1 – Mercury enters Cancer</b>: emotional
                intelligence, intuitive communication, memory, and heartfelt
                conversations.
                <br />- <b>All week – Venus in Cancer</b>: tenderness,
                nurturing connection, emotional warmth, and soulful bonding.
                <br />- <b>All week – Mars in Taurus</b>: patience, persistence,
                embodied action, and steady progress.
                <br />- <b>All week – Waning Gibbous Moon</b>: integration,
                reflection, emotional processing, and post-Full Moon clarity.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                self-leadership, and responsible growth.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What emotional truth is asking to be honored now?
                <br />
                - Where do I need softer communication and stronger grounding?
                <br />- What recent insight am I ready to integrate into daily
                life?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>June 1</b>, write a heartfelt message, journal
                entry, or private reflection about what you truly feel.
                <br />- Midweek, choose one steady action that supports emotional
                safety and long-term peace.
                <br />- Throughout the week, slow down before responding. Let
                your words come from both clarity and care.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let tenderness calm your nervous system.",
          yang: "Let steady movement strengthen your body.",
          content: (
            <>
              <p className="mt-4">
                Cancer and Taurus energy both remind you that the body needs
                safety before it can thrive. Prioritize hydration, nourishing
                meals, rest, touch, and rhythms that help you feel emotionally
                held.
              </p>

              <p className="mt-4">
                Mars in Taurus favors steady, sustainable movement: walking,
                strength work, yoga, mobility, gardening, or anything that helps
                your body feel rooted and capable.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet reflection restore your inner waters.",
          yang: "Let rest prepare your next grounded step.",
          content: (
            <>
              <p className="mt-4">
                This week is ideal for emotional integration after the Full Moon.
                Give yourself space to process before making major decisions.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What feeling needs my compassion before
                it can become wisdom?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive support that feels emotionally safe.",
          yang: "Build patiently from practical truth.",
          content: (
            <>
              <p className="mt-4">
                Gemini season supports ideas, communication, writing, marketing,
                learning, and networking. Mercury in Cancer adds emotional
                intelligence to your voice and choices.
              </p>

              <p className="mt-4">
                Mars in Taurus reminds you that abundance grows through steady
                follow-through. Choose one practical step and repeat it with
                devotion.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let feeling become guidance.",
          yang: "Let patience become power.",
          content: (
            <>
              <p className="mt-4">
                Visualize a calm lake under morning light. Your thoughts ripple
                across the surface, but beneath them is quiet depth. Let your
                breath return you to that deeper knowing.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I listen to my heart and move with steady trust.
                <br />
                <b>Prompt:</b> What would change if I trusted my emotional wisdom
                as much as my logic?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let softness become your wisdom.",
          yang: "Let steadiness shape your path.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I honor what I feel, speak with care, and build my life with
                grounded trust.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when your mind feels busy or your heart
                needs reassurance.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let emotion become medicine.",
          yang: "Let grounded action become devotion.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I integrate what I have learned and move forward
                with patience, care, and truth.&quot;
              </p>

              <p className="mt-4">
                Gemini helps you understand. Cancer helps you feel. Taurus helps
                you embody. Let this week become a bridge between insight and
                action — gentle enough to heal, steady enough to last.
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
          data-netlify="true"
          netlify-honeypot="bot-field"
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
            Subscribe by Email
          </button>

          {isSubscribed && (
            <p className="mt-4 text-sm italic text-[#5c5244]">
              You are on the list. Thank you for joining this weekly rhythm.
            </p>
          )}

          {subscribeError && (
            <p className="mt-4 text-sm italic text-red-700">
              {subscribeError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
