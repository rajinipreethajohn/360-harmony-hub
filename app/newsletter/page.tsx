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
          June 22 – June 28, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Emotional Foundations and Mental Movement — Cancer Nourishment,
            Libra Balance, and Gemini Momentum
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
            This week carries the tender, protective energy of{" "}
            <b>Cancer season</b>. The <b>Sun in Cancer</b> turns attention
            toward home, belonging, emotional safety, nourishment, and the inner
            world. After the mental freshness of Gemini season, life now asks:
            what truly feels like shelter for your spirit?
            <br />
            <b>Mercury in Cancer</b> keeps communication intuitive and
            heart-led, while <b>Venus in Leo</b> adds warmth, creativity,
            affection, and expressive love. Meanwhile, <b>Mars in Taurus</b>{" "}
            continues to support steady effort and embodied action until{" "}
            <b>June 28</b>, when <b>Mars enters Gemini</b>, shifting motivation
            toward conversation, movement, learning, and mental agility.
            <br />
            Around <b>June 22</b>, the <b>First Quarter Moon in Libra</b> asks
            for balance, harmony, and thoughtful adjustment. As the Moon grows
            toward fullness, this week invites both emotional grounding and
            clearer relational choices.
          </p>

          <p>
            Let this week help you nourish what matters, speak with care, and
            move forward with balance.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let emotional safety guide your choices.",
          yang: "Let balanced action move your life forward.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Cancer</b>: emotional awareness,
                nourishment, home, belonging, intuition, and inner safety.
                <br />- <b>All week – Mercury in Cancer</b>: heartfelt
                communication, memory, emotional intelligence, and intuitive
                conversations.
                <br />- <b>All week – Venus in Leo</b>: warmth, creativity,
                romance, playfulness, confidence, and heart-led expression.
                <br />- <b>Jun 22 – First Quarter Moon in Libra</b>: balance,
                adjustment, harmony, relationship awareness, and aligned action.
                <br />- <b>Jun 22–28 – Waxing Gibbous Moon</b>: growth,
                refinement, preparation, and emotional momentum.
                <br />- <b>Until Jun 28 – Mars in Taurus</b>: patience,
                persistence, embodied action, and steady progress.
                <br />- <b>Jun 28 – Mars enters Gemini</b>: movement,
                conversation, curiosity, learning, and flexible motivation.
                <br />-{" "}
                <b>
                  All week – Saturn in Aries, stationary retrograde this week
                </b>
                : disciplined courage, self-leadership, and responsible growth.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What helps me feel emotionally safe and supported?
                <br />
                - Where do I need more balance in my relationships or routines?
                <br />- What conversation or idea is ready to move forward?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>June 22</b>, restore balance in one area of life:
                your space, schedule, relationship, or emotional rhythm.
                <br />- Midweek, choose one nurturing action that supports your
                sense of home, body, or belonging.
                <br />- On <b>June 28</b>, write down one idea, conversation, or
                project that feels ready for movement.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let nourishment calm your inner waters.",
          yang: "Let steady movement support your strength.",
          content: (
            <>
              <p className="mt-4">
                Cancer season reminds you that wellness begins with safety.
                Prioritize hydration, warm meals, emotional rest, gentle
                routines, and environments that help your nervous system soften.
              </p>

              <p className="mt-4">
                Mars in Taurus supports slow, consistent movement early in the
                week. As Mars enters Gemini, your body may crave variety:
                walking, stretching, dancing, mobility, or playful movement that
                keeps energy flowing.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet care restore your heart.",
          yang: "Let rest prepare your next clear action.",
          content: (
            <>
              <p className="mt-4">
                This week asks you to listen to your emotional needs before
                pushing forward. Rest is not avoidance; it is preparation for
                clearer action.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What part of me needs more tenderness,
                protection, or balance?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive support that feels warm and sincere.",
          yang: "Build through steady choices and clear communication.",
          content: (
            <>
              <p className="mt-4">
                Cancer energy supports abundance through care, trust, emotional
                intelligence, family, home, nourishment, and meaningful
                connection.
              </p>

              <p className="mt-4">
                Venus in Leo reminds you that confidence and creativity are also
                resources. As Mars enters Gemini, conversations, writing,
                networking, and ideas may open new doors.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let emotional honesty become your anchor.",
          yang: "Let curiosity become your movement.",
          content: (
            <>
              <p className="mt-4">
                Visualize a quiet home within your heart. Its windows are open
                to fresh air, but its foundation is steady. You can welcome new
                movement without abandoning your center.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I am safe to feel deeply and move forward with
                clarity.
                <br />
                <b>Prompt:</b> What would change if I honored both my emotional
                needs and my desire for growth?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let care soften old defenses.",
          yang: "Let clarity guide your next step.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I nourish my inner world and move forward with balanced
                courage.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when you feel pulled between rest and
                action.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let home begin within you.",
          yang: "Let movement begin from truth.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I protect what nourishes me and move toward
                what feels honest, balanced, and alive.&quot;
              </p>

              <p className="mt-4">
                Cancer teaches you to care. Libra teaches you to balance. Gemini
                teaches you to move, speak, and stay curious. Let this week
                become a bridge between emotional safety and fresh momentum.
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
