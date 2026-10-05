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
          October 05 – October 11, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Returning to What Matters — Libra Renewal, Scorpio Truth, and the
            Courage to Choose Differently
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
            This week unfolds during <b>Libra season</b>, while{" "}
            <b>Venus retrograde in Scorpio</b> continues an astrological review
            of relationships, intimacy, trust, desire, money, and self-worth.
            <br />
            Around <b>October 6–7</b>, depending on timezone,{" "}
            <b>Mercury meets retrograde Venus in Scorpio</b>, bringing
            conversations and feelings into closer focus.
            <br />
            On <b>October 7</b>,{" "}
            <b>Mars in Leo forms a sextile with Uranus in Gemini</b>, an aspect
            traditionally associated with experimentation, flexibility, and
            fresh approaches.
            <br />
            The week culminates with the <b>October 10 New Moon in Libra</b>,
            followed by <b>Venus retrograde squaring Mars in Leo</b>. Together,
            these signatures invite reflection on balance, desire, reciprocity,
            boundaries, and the difference between preserving peace and creating
            genuine harmony.
          </p>

          <p>
            Let this week help you distinguish between keeping the peace and
            creating genuine harmony — and begin again from a place where truth,
            desire, self-respect, and connection are all allowed to exist.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let reflection reveal what your relationships and values are teaching you.",
          yang: "Let courageous choices create a more honest kind of balance.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Libra</b>: balance, relationship,
                reciprocity, diplomacy, beauty, fairness, cooperation, and the
                art of honoring both self and other.
                <br />- <b>All week – Mercury in Scorpio</b>: deeper thinking,
                investigation, intuition, psychological insight, meaningful
                conversations, truth-seeking, and attention to what remains
                beneath the surface.
                <br />- <b>All week – Venus retrograde in Scorpio</b>:
                reassessing relationships, intimacy, trust, desire, money,
                self-worth, attachment, and personal values.
                <br />- <b>All week – Mars in Leo</b>: creative action,
                confidence, passion, courage, leadership, visibility, play, and
                heart-led motivation.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                creativity, confidence, visibility, optimism, and courageous
                possibility.
                <br />-{" "}
                <b>Around Oct 6/7 – Mercury conjunct Venus retrograde</b>:
                revisiting conversations, relationships, feelings, agreements,
                values, desires, financial choices, and truths that may now be
                understood differently.
                <br />- <b>Oct 7 – Mars sextile Uranus</b>: experimentation,
                inventive action, independence, courage, fresh approaches,
                spontaneity, and constructive change.
                <br />- <b>Oct 9 – Mercury quincunx Saturn</b>: adjustment,
                careful thinking, responsibility, realism, and reconsidering
                plans or conversations where something does not yet fit.
                <br />- <b>Oct 10 – New Moon in Libra</b>: a fresh beginning
                around partnership, reciprocity, harmony, negotiation, fairness,
                cooperation, beauty, and creating healthier relational patterns.
                <br />- <b>Oct 10 – Venus square Mars</b>: attraction, desire,
                passion, creative tension, differing needs, relationship
                dynamics, and learning how to honor both connection and
                individuality.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, independence, leadership, courage,
                boundaries, and long-term commitments.
                <br />- <b>All week – Uranus retrograde in Gemini</b>:
                reconsidering ideas, communication patterns, freedom, change,
                curiosity, and the assumptions through which we understand the
                world.
                <br />- <b>All week – Chiron retrograde in Aries</b>: inward
                reflection around courage, identity, self-assertion,
                vulnerability, and the right to take up space.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Which relationship pattern am I now able to see more clearly?
                <br />
                - Where have I confused harmony with avoiding an uncomfortable
                truth?
                <br />- What would reciprocity look like if my needs mattered
                just as much as everyone else&apos;s?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Around <b>October 6</b>, revisit an old journal entry,
                conversation, relationship lesson, or decision and notice what
                you understand differently now.
                <br />- On <b>October 7</b>, deliberately do one familiar thing
                differently. Break a small pattern and notice what new
                possibility appears.
                <br />- Around the <b>October 10 New Moon</b>, write one
                intention for your relationship with yourself and one for your
                relationships with others. Let both begin with mutual respect.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body receive care without turning care into another obligation.",
          yang: "Let movement reconnect you with vitality, confidence, and joy.",
          content: (
            <>
              <p className="mt-4">
                Mars in Leo favors movement that feels expressive and alive.
                Strength training, sport, dance, walking, swimming, stretching,
                or playful movement can reconnect physical effort with enjoyment
                rather than treating the body as another project to perfect.
              </p>

              <p className="mt-4">
                Venus retrograde in Scorpio also encourages a deeper question:
                how do you treat your body when nobody else is watching? Let
                nourishment, sleep, recovery, movement, and self-care come from
                respect for the body you inhabit rather than from comparison or
                punishment.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet make room for feelings that need to be understood.",
          yang: "Let clear boundaries protect the space required for renewal.",
          content: (
            <>
              <p className="mt-4">
                The waning Moon dominates most of the week before
                Saturday&apos;s New Moon, making the days leading up to it
                especially suited to clearing, simplifying, finishing, and
                releasing. Venus retrograde suggests that emotional clutter
                deserves attention too.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What am I ready to stop carrying into
                the next chapter of my relationships — including my relationship
                with myself?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what reflects your values rather than what merely looks desirable.",
          yang: "Let confidence serve what is genuinely worth building.",
          content: (
            <>
              <p className="mt-4">
                Venus retrograde invites review rather than automatic expansion.
                Look again at spending, pricing, possessions, collaborations,
                agreements, and the ways you measure value. Something does not
                become valuable simply because it is desired — and something
                meaningful does not become less valuable because it requires
                patience.
              </p>

              <p className="mt-4">
                Jupiter and Mars in Leo continue to encourage creative
                confidence, leadership, visibility, and bold expression, while
                the Libra New Moon highlights partnership. Consider where the
                right collaboration could support growth without requiring you
                to compromise what matters.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let reflection show you what balance feels like from within.",
          yang: "Let self-respect become part of every agreement you make.",
          content: (
            <>
              <p className="mt-4">
                Visualize two candles burning beside one another. Neither must
                dim for the other to shine. Their flames remain distinct, yet
                together they create more light. Let this become your image of
                healthy connection: closeness without disappearance, love
                without self-abandonment.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I can honor my own truth and remain open to
                genuine connection.
                <br />
                <b>Prompt:</b> What would change if I stopped believing that
                harmony requires someone to become smaller?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let connection begin with honest listening.",
          yang: "Let self-respect remain present inside every relationship.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I welcome relationships, choices, and opportunities that
                honor both my heart and my truth.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation whenever the desire to preserve harmony
                tempts you to ignore what you genuinely feel or need.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let love deepen through honesty rather than performance.",
          yang: "Let courage create relationships in which everyone can remain whole.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I release old ways of relating, listen to what
                my values are becoming, and begin again from a place of greater
                truth and balance.&quot;
              </p>

              <p className="mt-4">
                Libra reminds you that connection matters. Scorpio reminds you
                that honesty matters too. Leo asks you to keep your heart alive,
                while Aries reminds you that there must still be a self inside
                every partnership. This New Moon does not ask you to create
                perfect harmony. It asks you to create something more honest:
                relationships in which closeness and individuality are allowed
                to coexist.
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
