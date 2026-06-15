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
          June 15 – June 21, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            New Thoughts and Heart-Led Radiance — Gemini Seeds, Leo Love, and
            the Cancer Solstice Turning
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
            This week begins with the quiet freshness of a{" "}
            <b>New Moon in Gemini</b>, opening a new cycle of thought,
            communication, learning, writing, and perspective. The{" "}
            <b>Sun remains in Gemini</b> for most of the week, keeping the mind
            curious, adaptable, and ready to explore new ideas.
            <br />
            <b>Mercury in Cancer</b> asks words to come from emotional honesty,
            memory, intuition, and care, while <b>Venus in Leo</b> brings
            warmth, creativity, romance, confidence, and heart-led expression.
            Meanwhile, <b>Mars in Taurus</b> reminds you to move steadily, not
            urgently.
            <br />
            Around <b>June 17</b>, the <b>Moon and Venus</b> bring a tender
            visual and energetic moment for love, beauty, and emotional
            connection. Then, on <b>June 21</b>, the <b>June Solstice</b>{" "}
            arrives as the Sun enters Cancer, turning the season toward home,
            heart, nourishment, and inner belonging.
          </p>

          <p>
            Let this week help you plant new thoughts, speak with care, and move
            toward the light with an open heart.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let emotional truth soften your communication.",
          yang: "Let fresh ideas become brave new beginnings.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Jun 15 – New Moon in Gemini</b>: fresh thoughts,
                communication, learning, writing, and mental renewal.
                <br />- <b>Jun 15–20 – Sun in Gemini</b>: curiosity,
                adaptability, conversation, movement, and new perspectives.
                <br />- <b>All week – Mercury in Cancer</b>: emotional
                intelligence, intuitive communication, memory, and heartfelt
                conversations.
                <br />- <b>All week – Venus in Leo</b>: warmth, creativity,
                romance, confidence, playfulness, and heart-led expression.
                <br />- <b>All week – Mars in Taurus</b>: patience, persistence,
                embodied action, and steady progress.
                <br />- <b>Jun 17 – Moon and Venus pairing</b>: tenderness,
                beauty, emotional connection, and gentle affection.
                <br />- <b>Jun 21 – June Solstice / Sun enters Cancer</b>:
                seasonal turning, home, nourishment, belonging, and emotional
                renewal.
                <br />- <b>All week – Saturn in Aries</b>: disciplined courage,
                self-leadership, and responsible growth.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What new idea or conversation is ready to begin?
                <br />
                - Where can I speak more honestly, but with greater care?
                <br />- What does my heart want to express without shrinking?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>June 15</b>, write three Gemini New Moon
                intentions around communication, learning, writing, or
                connection.
                <br />- On <b>June 17</b>, do one small act of beauty,
                affection, or appreciation for yourself or someone you love.
                <br />- On <b>June 21</b>, create a simple solstice ritual:
                light a candle, sit in gratitude, or name what you want to
                nourish in the season ahead.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let emotional care steady your nervous system.",
          yang: "Let gentle consistency strengthen your body.",
          content: (
            <>
              <p className="mt-4">
                Gemini and Cancer energy can make the mind and heart feel busy
                at once. Support yourself with hydration, grounding meals,
                breathwork, gentle movement, and quiet moments away from excess
                stimulation.
              </p>

              <p className="mt-4">
                Mars in Taurus favors sustainable wellness. Choose steady
                routines: walking, stretching, strength work, mobility,
                gardening, or any practice that helps your body feel rooted and
                supported.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness prepare the new beginning.",
          yang: "Let rest protect your growing light.",
          content: (
            <>
              <p className="mt-4">
                New Moon weeks are not only for action; they are also for
                listening. Give your mind space to reset before filling it with
                too many new plans.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What thought, story, or intention wants
                to begin again through me?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive inspiration that feels joyful and true.",
          yang: "Build steadily through clear, caring action.",
          content: (
            <>
              <p className="mt-4">
                Gemini energy supports abundance through ideas, communication,
                writing, marketing, teaching, networking, and learning. Let your
                voice become part of your growth.
              </p>

              <p className="mt-4">
                Venus in Leo reminds you that visibility, confidence,
                creativity, and joy can also be forms of prosperity. Share what
                lights you up, but keep your actions grounded and sustainable.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let care become your inner compass.",
          yang: "Let courage express your heart clearly.",
          content: (
            <>
              <p className="mt-4">
                Visualize a small golden seed of light inside your chest. With
                each inhale, it glows brighter. With each exhale, it sends
                warmth through your words, choices, and next steps.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I speak with care and express my light with
                courage.
                <br />
                <b>Prompt:</b> What new message or creative truth wants to move
                through me this week?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let softness guide your words.",
          yang: "Let radiance guide your actions.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I plant new thoughts with intention and express my heart
                with courage.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when you feel ready to begin again, but
                want to stay rooted in love.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let the heart feel safe enough to open.",
          yang: "Let the mind stay brave enough to begin.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I begin again with clear thoughts, a warm
                heart, and steady devotion.&quot;
              </p>

              <p className="mt-4">
                Gemini helps you begin through thought and word. Leo reminds you
                to shine from the heart. Cancer calls you home to what
                nourishes. Let this week become a sacred bridge between new
                ideas, emotional truth, and the light you are ready to carry
                forward.
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
