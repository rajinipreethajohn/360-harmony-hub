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
          September 28 – October 04, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Beneath the Surface — Libra Balance, Scorpio Truth, and the Courage
            to Reassess What Matters
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
            This week begins beneath the balancing influence of{" "}
            <b>Libra season</b>, with the <b>Sun in Libra</b> continuing to
            illuminate relationship, reciprocity, fairness, cooperation, beauty,
            and the delicate meeting place between self and other. Yet beneath
            Libra&apos;s search for harmony, the astrology of the week begins
            moving steadily toward deeper territory.
            <br />
            On <b>September 28</b>, the <b>Sun trines Uranus</b>, bringing a
            refreshing current of openness, experimentation, originality, and
            willingness to approach familiar situations differently. Then, on{" "}
            <b>September 30</b>, <b>Mercury enters Scorpio</b>, shifting
            communication away from surface-level balance and toward depth,
            honesty, investigation, intuition, motives, and truths that may have
            remained unspoken.
            <br />
            Around <b>October 2–3</b>, the energy intensifies.{" "}
            <b>Mercury squares Mars and Pluto</b>, while{" "}
            <b>Mars trines Neptune and opposes Pluto</b>. Words, convictions,
            desires, power dynamics, and buried tensions may carry greater
            force, making conscious communication especially valuable.
            <br />
            On <b>October 3</b>, <b>Venus stations retrograde in Scorpio</b>,
            beginning a deeper review of love, relationships, intimacy, trust,
            money, desire, self-worth, and personal values. The{" "}
            <b>Last Quarter Moon in Cancer</b> on the same day adds another
            invitation to release, reassess, and make emotional space before the
            next lunar cycle begins.
          </p>

          <p>
            Let this week remind you that harmony is not created by avoiding
            depth. Sometimes balance becomes possible only after we are willing
            to look honestly at what lies beneath the surface.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let what lies beneath the surface reveal itself without force.",
          yang: "Let courage meet truth with clarity rather than reaction.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Libra</b>: balance, relationship,
                reciprocity, diplomacy, beauty, fairness, cooperation, and
                awareness of multiple perspectives.
                <br />- <b>All week – Mars in Leo</b>: creative action,
                confidence, passion, courage, leadership, visibility, play, and
                heart-led motivation.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                creativity, confidence, visibility, optimism, and courageous
                possibility.
                <br />- <b>Sep 28 – Sun trine Uranus</b>: originality,
                flexibility, experimentation, fresh perspective, independence,
                and openness to constructive change.
                <br />- <b>Until Sep 30 – Mercury in Libra</b>: diplomacy,
                balanced thinking, negotiation, fairness, thoughtful
                communication, and seeing multiple perspectives.
                <br />- <b>Sep 30 – Mercury enters Scorpio</b>: deeper thinking,
                investigation, intuition, psychological insight, meaningful
                conversations, truth-seeking, and attention to what remains
                hidden.
                <br />- <b>Oct 2 – Mercury square Mars</b>: fast thinking,
                assertive communication, debate, impatience, strong opinions,
                and the need to pause before reacting.
                <br />- <b>Oct 2 – Mercury square Pluto</b>: penetrating
                thought, intense conversations, questions of power, hidden
                motives, conviction, and deeper mental focus.
                <br />- <b>Oct 2 – Mars trine Neptune</b>: intuitive action,
                imagination, compassion, creativity, inspiration, and acting
                from a deeper sense of meaning.
                <br />- <b>Oct 3 – Venus stations retrograde in Scorpio</b>:
                reassessment of relationships, intimacy, trust, desire, money,
                self-worth, attachment, and personal values.
                <br />- <b>Oct 3 – Mars opposite Pluto</b>: powerful drive,
                intensity, ambition, confrontation with control or resistance,
                and the need to use personal power consciously.
                <br />- <b>Oct 3 – Last Quarter Moon in Cancer</b>: emotional
                release, reflection, home, belonging, security, nourishment, and
                clearing what no longer supports the next beginning.
                <br />- <b>Oct 4 – Sun opposite Saturn</b>: responsibility,
                boundaries, maturity, accountability, patience, and confronting
                what requires greater commitment or realism.
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
                - What am I beginning to understand now that I am willing to
                look beneath the surface?
                <br />
                - Which relationship, desire, or value deserves thoughtful
                reassessment rather than an immediate decision?
                <br />- Where can I respond from personal power instead of
                reacting from defensiveness?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>September 28</b>, change one familiar pattern,
                routine, or approach and notice what becomes possible when you
                allow yourself to experiment.
                <br />- As <b>Mercury enters Scorpio</b>, journal about one
                question you have been circling around and ask yourself what you
                already know beneath the explanations.
                <br />- Around <b>October 3</b>, begin a quiet Venus retrograde
                reflection: What do I value now? What feels reciprocal? What am
                I holding onto because it is meaningful — and what am I holding
                onto simply because it is familiar?
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body reveal what intensity has been asking you to hear.",
          yang: "Let strength move through you without becoming force.",
          content: (
            <>
              <p className="mt-4">
                Mars in Leo supports expressive, energizing movement, but the
                intensity surrounding Mars and Pluto this week makes conscious
                pacing especially valuable. Strength does not require pushing
                through every signal your body gives you.
              </p>

              <p className="mt-4">
                The Cancer Last Quarter Moon favors nourishment, emotional
                grounding, rest, hydration, comforting food, gentle mobility,
                sleep, and time in spaces where your nervous system can settle.
                Let recovery remain part of strength rather than something that
                happens only after exhaustion.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let release create space where intensity has accumulated.",
          yang: "Let boundaries protect the quiet needed for perspective.",
          content: (
            <>
              <p className="mt-4">
                Mercury in Scorpio can draw the mind toward deeper questions,
                while Venus stationing retrograde may bring old feelings,
                relationships, desires, memories, or unresolved values back into
                awareness. Not everything that returns requires immediate
                action.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What can I allow myself to understand
                slowly instead of demanding an answer tonight?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what reflects your deeper values rather than surface desire.",
          yang: "Let courage and integrity guide where you invest your energy.",
          content: (
            <>
              <p className="mt-4">
                Venus stationing retrograde in Scorpio shifts abundance inward.
                This is a useful time to reconsider what value actually means:
                where your money goes, what your work is worth, which
                relationships feel reciprocal, and whether your choices still
                reflect what matters to you now.
              </p>

              <p className="mt-4">
                Jupiter and Mars in Leo continue to support confidence,
                creativity, visibility, and expressive leadership. Yet this week
                reminds you that sustainable growth needs more than enthusiasm.
                Let ambition remain connected to purpose, values, and the kind
                of life you genuinely want to create.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let stillness reveal what effort has kept hidden.",
          yang: "Let conscious power replace the need to control.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing beside deep, still water. The
                surface reflects the sky, but beneath it exists an entire unseen
                world. You do not need to disturb the water to know that depth
                exists. Simply remain present long enough for what matters to
                become visible.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I can face what is true without losing my center.
                <br />
                <b>Prompt:</b> What becomes visible when I stop trying to
                control what I might discover?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let truth arrive in its own time.",
          yang: "Let courage hold steady when deeper honesty is required.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I meet what is true with courage, reassess what matters
                with honesty, and release what no longer belongs in my
                becoming.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when intensity tempts you toward
                immediate reaction instead of deeper understanding.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let depth teach you what surface harmony cannot.",
          yang: "Let your power become deliberate, grounded, and wise.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I listen beneath the noise, honor what is being
                revealed, and choose from a deeper place within myself.&quot;
              </p>

              <p className="mt-4">
                Libra reminds you to seek balance. Scorpio asks whether that
                balance is honest. Leo reminds you to act from the heart, while
                Cancer reminds you that emotional safety matters too. And as
                Venus begins her retrograde journey, the question becomes less
                about what looks valuable from the outside and more about what
                remains valuable when you look deeply within.
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
