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
          August 17 – August 23, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Radiance Into Refinement — Leo Courage, Virgo Clarity, and Balanced
            Forward Movement
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
            This week begins beneath the radiant confidence of <b>Leo season</b>
            , with the <b>Sun, Mercury, and Jupiter in Leo</b> keeping
            creativity, visibility, courage, expression, and heart-led
            leadership brightly illuminated. The energy still encourages you to
            take up space — but increasingly, the question becomes what you want
            to do with that light.
            <br />
            Around <b>August 19–20</b>, the <b>First Quarter Moon in Scorpio</b>{" "}
            brings a natural moment of movement, adjustment, and decision.
            Intentions set around the recent New Moon begin asking for action
            rather than imagination alone — with Scorpio's depth urging honest
            transformation.
            <br />
            Then, around <b>August 21–22</b>, the <b>Sun enters Virgo</b>,
            beginning a quieter shift from radiance toward refinement. Attention
            turns toward routines, health, service, organization, craftsmanship,
            discernment, and the small choices that turn inspiration into a
            sustainable life.
          </p>

          <p>
            Let this week help you carry your light forward with greater
            clarity, care, and intention.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let discernment gently refine what your heart has begun.",
          yang: "Let courageous action turn inspiration into form.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Early week – Sun in Leo</b>: confidence, creativity,
                visibility, joy, leadership, and heart-led self-expression.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                optimism, creative growth, and courageous possibility.
                <br />- <b>All week – Mercury in Leo</b>: bold communication,
                storytelling, creative thinking, confidence, and speaking from
                the heart.
                <br />- <b>All week – Venus in Libra</b>: harmony, beauty,
                reciprocity, diplomacy, partnership, and graceful connection.
                <br />- <b>All week – Mars in Cancer</b>: protective action,
                emotional courage, intuition, home, family, and caring for what
                matters.
                <br />- <b>Aug 19–20 – First Quarter Moon</b>: action,
                adjustment, decision-making, momentum, and strengthening recent
                intentions through honest transformation.
                <br />- <b>Aug 21–22 – Sun enters Virgo</b>: refinement,
                organization, health, service, discernment, practical care, and
                meaningful improvement.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, leadership, courage, boundaries, and
                long-term commitments.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Which recent beginning now needs practical follow-through?
                <br />
                - What can I refine without turning refinement into
                perfectionism?
                <br />- Where would one simple routine make my life feel
                lighter?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Around <b>August 19–20</b>, choose one intention from
                the recent New Moon and take one visible step toward it.
                <br />- As Virgo season begins, organize one small area of your
                life: a desk, schedule, inbox, routine, or unfinished task.
                <br />- Before the week ends, ask yourself what deserves
                consistency rather than another burst of motivation.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let care become simple, steady, and restorative.",
          yang: "Let consistency strengthen the body you live through.",
          content: (
            <>
              <p className="mt-4">
                The transition toward Virgo season supports returning to the
                basics: hydration, nourishing meals, regular sleep, stretching,
                movement, sunlight, and routines that quietly support your
                nervous system.
              </p>

              <p className="mt-4">
                Mars in Cancer reminds you that wellness does not need to feel
                aggressive. Choose movement that leaves you feeling stronger and
                more supported rather than depleted.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet order create more breathing room.",
          yang: "Let rest protect the energy needed for meaningful action.",
          content: (
            <>
              <p className="mt-4">
                Leo season may have encouraged expression and expansion. Virgo
                season begins asking what can be simplified. Reduce unnecessary
                noise, unfinished obligations, and small sources of friction
                where possible.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What small change would make tomorrow
                feel more peaceful?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that honor both value and balance.",
          yang: "Let craftsmanship turn possibility into sustainable growth.",
          content: (
            <>
              <p className="mt-4">
                Jupiter in Leo continues to support growth through visibility,
                creativity, generosity, leadership, and the confidence to share
                what makes your work distinctive.
              </p>

              <p className="mt-4">
                Virgo season adds an important second half to that equation:
                refine what you offer, improve the system behind it, and make
                your gifts easier for others to understand, trust, and use.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let clarity emerge through gentle attention.",
          yang: "Let discipline protect what your heart wants to build.",
          content: (
            <>
              <p className="mt-4">
                Visualize a bright golden flame inside your chest becoming a
                steady lantern. The light remains, but now it has structure,
                direction, and purpose.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I honor my light by giving it steady form.
                <br />
                <b>Prompt:</b> What deserves my consistent attention instead of
                occasional intensity?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let enoughness soften the need for perfection.",
          yang: "Let devotion turn intention into progress.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I refine with care, act with purpose, and trust the power
                of steady progress.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when improvement begins turning into
                self-criticism.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let gentleness guide what needs adjusting.",
          yang: "Let your light become useful, grounded, and real.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I carry my courage into the details and build
                what matters one thoughtful step at a time.&quot;
              </p>

              <p className="mt-4">
                Leo reminds you to shine. Virgo reminds you to refine. Libra
                reminds you to stay balanced, while Cancer reminds you to
                protect what matters. Let this week become the bridge between
                inspiration and embodiment — where what you believe in begins
                taking practical form.
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
