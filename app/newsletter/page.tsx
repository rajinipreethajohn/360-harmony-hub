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
          August 10 – August 16, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Radiant Beginnings and Emotional Courage — Leo Eclipse Renewal,
            Cancer Action, and Heart-Led Becoming
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
            This week carries powerful beginning energy beneath the radiant{" "}
            <b>Sun in Leo</b>. With <b>Jupiter also in Leo</b>, themes of
            courage, creativity, visibility, generosity, and authentic
            self-expression continue to expand. And now <b>Mercury is in Leo</b>{" "}
            too, giving thoughts and words more warmth, confidence, conviction,
            and creative fire.
            <br />
            On <b>August 11</b>, <b>Mars enters Cancer</b>, shifting action away
            from restless mental motion and toward emotional instinct,
            protection, home, family, belonging, and what feels personally worth
            defending. Courage becomes less performative and more deeply rooted
            in care.
            <br />
            Then comes the defining celestial moment of the week: the{" "}
            <b>Total Solar Eclipse and New Moon in Leo on August 12–13</b>. The
            exact calendar date may vary slightly depending on timezone, but
            this is a potent reset around identity, creativity, visibility,
            leadership, joy, and the question of how fully you are willing to
            inhabit your own life.
          </p>

          <p>
            Let this week help you begin again from the heart — not louder, but
            truer.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let the heart reveal what is ready to be reborn.",
          yang: "Let courageous self-expression begin a new chapter.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Leo</b>: confidence, creativity,
                visibility, joy, leadership, and heart-led self-expression.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                optimism, creative growth, and courageous possibility.
                <br />- <b>All week – Mercury in Leo</b>: bold communication,
                creative thinking, confidence, storytelling, and speaking from
                the heart.
                <br />- <b>All week – Venus in Libra</b>: harmony, beauty,
                reciprocity, diplomacy, partnership, and graceful connection.
                <br />- <b>Aug 11 – Mars enters Cancer</b>: protective action,
                emotional courage, instinct, home, family, and defending what
                matters.
                <br />- <b>Aug 12–13 – Total Solar Eclipse / New Moon in Leo</b>
                : powerful beginnings, identity renewal, creativity, visibility,
                courage, joy, and heart-led reinvention.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing leadership, responsibility, courage, boundaries, and
                long-term commitments.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What version of myself am I ready to stop outgrowing quietly?
                <br />
                - Where am I being asked to become more visible, creative, or
                courageous?
                <br />- What deserves my protection because it genuinely matters
                to my heart?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Around <b>August 12–13</b>, write three intentions for
                the Leo New Moon around courage, creativity, identity,
                leadership, or authentic self-expression.
                <br />- Choose one place where you have been waiting for
                permission and give yourself permission instead.
                <br />- Before the week ends, take one protective, caring action
                for your home, family, emotional wellbeing, or inner sense of
                safety.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let emotional safety soften your nervous system.",
          yang: "Let joyful movement strengthen your inner fire.",
          content: (
            <>
              <p className="mt-4">
                Eclipse weeks can feel stimulating even when nothing outwardly
                dramatic is happening. Give your nervous system more room:
                hydration, nourishing meals, steady sleep, slower transitions,
                and moments away from constant information.
              </p>

              <p className="mt-4">
                Mars entering Cancer favors movement that feels supportive
                rather than punishing. Walk, swim, stretch, strengthen, or move
                in ways that reconnect you with your body instead of demanding
                performance from it.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness make space for the new self emerging.",
          yang: "Let rest protect the courage required for change.",
          content: (
            <>
              <p className="mt-4">
                A New Moon is a beginning hidden in darkness. You do not need to
                know exactly what comes next. Allow some intentions to remain
                private while they gather strength.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;Who am I becoming when I stop shaping
                myself around other people&apos;s expectations?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that recognize your authentic gifts.",
          yang: "Let visibility meet courageous, meaningful action.",
          content: (
            <>
              <p className="mt-4">
                With the Sun, Mercury, and Jupiter emphasizing Leo, abundance
                can grow through creativity, leadership, visibility,
                communication, confidence, and sharing what makes your work
                distinctly yours.
              </p>

              <p className="mt-4">
                Venus in Libra reminds you that growth does not need to happen
                alone. Collaboration, relationships, diplomacy, aesthetics, and
                mutually beneficial partnerships can become powerful forms of
                abundance.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let your inner light exist before anyone sees it.",
          yang: "Let courage give that light a place in the world.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing before a sunrise. The horizon is
                still dark, but light is already forming beneath it. You do not
                rush the dawn. You simply know that something new has begun.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I am ready to inhabit my life more fully.
                <br />
                <b>Prompt:</b> What would I begin if I trusted that being fully
                myself was already enough?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let becoming unfold without force.",
          yang: "Let courage answer the life calling you forward.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I release the version of me built for approval and step
                into the life that feels true.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when an old identity feels safer than
                the new possibility asking you to grow.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let the new beginning form quietly within.",
          yang: "Let your heart become brave enough to live it.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I begin again — with greater truth, deeper
                courage, and a heart willing to be seen.&quot;
              </p>

              <p className="mt-4">
                Leo reminds you that radiance is not performance; it is the
                courage to inhabit your own life. Cancer reminds you to protect
                what matters. Libra reminds you that authentic connection leaves
                room for both people to exist fully. Let this eclipse week open
                a door toward a life that feels more unmistakably yours.
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
