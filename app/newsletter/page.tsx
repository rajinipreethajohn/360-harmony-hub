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
          August 03 – August 09, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Radiant Truth and Graceful Rebalancing — Leo Courage, Taurus
            Healing, and Libra Harmony
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
            This week keeps the heart illuminated beneath the <b>Sun in Leo</b>,
            encouraging courage, creativity, confidence, and authentic
            self-expression. With <b>Jupiter also in Leo</b>, growth asks for
            generosity of spirit — not simply becoming louder, but becoming more
            fully yourself.
            <br />
            On <b>August 3</b>, <b>Chiron stations retrograde in Taurus</b>,
            turning attention toward quieter healing around worth, security,
            embodiment, stability, and the places where enoughness has felt
            uncertain. Then, on <b>August 6</b>, the <b>Last Quarter Moon</b>{" "}
            invites release, simplification, and honest course correction.
            <br />
            On <b>August 7</b>, <b>Venus enters Libra</b>, softening the
            relational landscape and emphasizing harmony, beauty, fairness,
            cooperation, and reciprocal connection. Meanwhile,{" "}
            <b>Mercury remains in Cancer</b>, keeping communication heartfelt
            and intuitive, while <b>Mars in Gemini</b> keeps ideas, movement,
            curiosity, and conversations lively.
          </p>

          <p>
            Let this week help you heal quietly, express yourself boldly, and
            restore balance where your heart needs more grace.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let gentleness reveal what still needs healing.",
          yang: "Let courageous truth restore authentic balance.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Leo</b>: confidence, creativity,
                visibility, joy, leadership, and heart-led self-expression.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                optimism, creative growth, and courageous possibility.
                <br />- <b>All week – Mercury in Cancer</b>: emotional
                intelligence, intuitive communication, memory, and heartfelt
                conversations.
                <br />- <b>Aug 3 – Chiron stations retrograde in Taurus</b>:
                inward healing around worth, security, embodiment, stability,
                and self-trust.
                <br />- <b>Aug 6 – Last Quarter Moon</b>: release,
                simplification, reflection, and honest course correction.
                <br />- <b>Until Aug 7 – Venus in Virgo</b>: practical care,
                discernment, devotion, and thoughtful improvement.
                <br />- <b>Aug 7 – Venus enters Libra</b>: harmony, beauty,
                reciprocity, diplomacy, partnership, and graceful connection.
                <br />- <b>All week – Mars in Gemini</b>: movement,
                conversation, curiosity, adaptability, and mental momentum.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, leadership, courage, boundaries, and
                long-term commitments.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where does my sense of worth need gentleness rather than
                proving?
                <br />
                - What am I ready to simplify or stop carrying?
                <br />- Where would greater reciprocity create more peace in my
                relationships?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>August 4</b>, journal about one area where you
                have tied your worth to productivity, approval, or external
                security.
                <br />- On <b>August 6</b>, release one obligation, habit, or
                expectation that is taking more energy than it deserves.
                <br />- On <b>August 7</b>, bring beauty or balance into one
                relationship or space through appreciation, conversation, art,
                music, flowers, or a simple act of care.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body feel safe enough to soften.",
          yang: "Let joyful movement keep your energy alive.",
          content: (
            <>
              <p className="mt-4">
                Chiron&apos;s retrograde turn in Taurus makes embodiment a
                meaningful theme this week. Return to simple physical anchors:
                nourishing food, hydration, sleep, sunlight, stretching, touch,
                and rhythms that remind your body it is safe to slow down.
              </p>

              <p className="mt-4">
                Mars in Gemini benefits from variety. Walking, tennis, dancing,
                mobility, playful movement, or changing your routine can keep
                energy flowing without making wellness feel rigid.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet healing happen without explanation.",
          yang: "Let rest clear the noise around your next step.",
          content: (
            <>
              <p className="mt-4">
                The Last Quarter Moon favors subtraction rather than addition.
                Give yourself permission to do less, consume less, and create
                more breathing room before the next lunar cycle begins.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What would I release if I trusted that
                my worth did not depend on holding everything together?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what honors your value without strain.",
          yang: "Let visible creativity meet thoughtful strategy.",
          content: (
            <>
              <p className="mt-4">
                Leo energy continues to support abundance through creativity,
                visibility, leadership, courage, generosity, and sharing what
                makes your work distinctive.
              </p>

              <p className="mt-4">
                Chiron in Taurus asks you to notice where fear around worth or
                security limits receiving. Venus entering Libra reminds you that
                collaboration, diplomacy, good relationships, and mutual benefit
                can create opportunities that force alone cannot.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let enoughness settle quietly into your body.",
          yang: "Let confidence rise without needing to prove.",
          content: (
            <>
              <p className="mt-4">
                Visualize your feet resting firmly on warm earth while a golden
                light glows in your chest. You are both rooted and radiant.
                Nothing needs to be performed for your worth to exist.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I am grounded in my worth and free to express my
                light.
                <br />
                <b>Prompt:</b> What would I create, ask for, or receive if I
                already believed I was enough?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let worth exist before achievement.",
          yang: "Let courage express what is already true.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I do not need to prove my worth; I honor it, embody it,
                and let my life grow from it.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation whenever comparison, overwork, or the
                need for approval begins to pull you away from yourself.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let healing return you to enoughness.",
          yang: "Let radiance meet the world with grace.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I release what exhausts me, remember my worth,
                and choose relationships and actions rooted in truth.&quot;
              </p>

              <p className="mt-4">
                Leo reminds you to shine. Taurus reminds you that you are
                already worthy beneath the performance. Libra reminds you that
                beauty grows through balance and reciprocity. Let this week
                reconnect courage with softness — and self-expression with
                deeper self-respect.
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
