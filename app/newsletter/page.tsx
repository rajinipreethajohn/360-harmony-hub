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
          September 14 – September 20, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Steady Action and Deeper Truth — Virgo Discernment, Scorpio
            Intensity, and Sagittarius Forward Motion
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
            This week carries the practical intelligence of <b>Virgo season</b>,
            asking you to turn recent intentions into useful, grounded action.
            The <b>Sun in Virgo</b> continues to illuminate routines, health,
            work, service, discernment, and the small details that quietly shape
            larger outcomes.
            <br />
            Around <b>September 14–15</b>, the <b>Sun sextiles Mars</b>,
            supporting steady effort and emotionally meaningful action. Then,
            around <b>September 15–16</b>, <b>Venus in Scorpio squares Pluto</b>
            , bringing greater intensity to themes of intimacy, trust, desire,
            attachment, money, and personal values. What matters deeply may
            become difficult to ignore.
            <br />
            On <b>September 18</b>, <b>Mercury in Libra opposes Saturn</b>,
            encouraging maturity in communication and decisions. Around{" "}
            <b>September 18–19</b>, the <b>First Quarter Moon in Sagittarius</b>{" "}
            adds momentum, asking you to move beyond analysis and act on what
            feels meaningful, honest, and worth exploring.
          </p>

          <p>
            Let this week help you act with intention, speak with maturity, and
            move toward what feels both truthful and sustainable.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let deeper truth reveal what deserves your devotion.",
          yang: "Let purposeful action move your intentions into reality.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Virgo</b>: discernment,
                organization, health, service, craftsmanship, simplicity, and
                practical refinement.
                <br />- <b>All week – Mercury in Libra</b>: diplomacy, balanced
                thinking, fairness, thoughtful communication, negotiation, and
                seeing multiple perspectives.
                <br />- <b>All week – Venus in Scorpio</b>: emotional depth,
                intimacy, trust, loyalty, vulnerability, desire, and shared
                values.
                <br />- <b>All week – Mars in Cancer</b>: protective action,
                emotional courage, instinct, home, family, and caring for what
                matters.
                <br />- <b>Sep 14–15 – Sun sextile Mars</b>: productive action,
                confidence, initiative, emotional motivation, and steady
                follow-through.
                <br />- <b>Sep 15–16 – Venus square Pluto</b>: intensity around
                love, trust, attachment, desire, power, money, and personal
                values.
                <br />- <b>Sep 18 – Mercury opposite Saturn</b>: serious
                conversations, responsibility, boundaries, careful decisions,
                and mature communication.
                <br />- <b>Sep 18–19 – First Quarter Moon in Sagittarius</b>:
                action, momentum, truth-seeking, courage, perspective, and
                moving recent intentions forward.
                <br />- <b>All week – Jupiter in Leo</b>: confidence,
                generosity, creativity, expansion, visibility, and courageous
                possibility.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, leadership, courage, boundaries, and
                long-term commitments.
                <br />-{" "}
                <b>
                  This week –Chiron retrograde moves from Taurus to Aries (Sep
                  17)
                </b>
                : early week focuses on worth, stability, and security; from the
                17th onward, healing shifts toward identity, courage, and
                assertiveness.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What deserves steady action rather than more preparation?
                <br />
                - Where is emotional intensity revealing something important
                about my values?
                <br />- What truth am I ready to act on, even if the entire path
                is not yet clear?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Around <b>September 14–15</b>, take one practical action
                toward something you have been planning but postponing.
                <br />- Midweek, journal about one relationship, attachment, or
                desire that is showing you something deeper about what you truly
                value.
                <br />- Around <b>September 18–19</b>, revisit your recent New
                Moon intentions and choose one that is ready for a visible next
                step.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body tell you where intensity needs softness.",
          yang: "Let steady movement become supportive strength.",
          content: (
            <>
              <p className="mt-4">
                Virgo season continues to favor simple, repeatable care:
                hydration, nourishing meals, regular sleep, sunlight,
                stretching, strength, mobility, and routines that reduce
                unnecessary stress.
              </p>

              <p className="mt-4">
                Mars in Cancer reminds you that energy is affected by emotional
                wellbeing. Notice what restores you after demanding days.
                Movement can create strength, while quiet, nourishment, and
                emotional safety help that strength become sustainable.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness reveal what intensity has been trying to say.",
          yang: "Let boundaries protect the rest your system needs.",
          content: (
            <>
              <p className="mt-4">
                With Venus in Scorpio and Mercury meeting Saturn by opposition,
                emotional or relational questions may feel heavier than usual.
                Resist the urge to resolve everything immediately. Some clarity
                arrives only after the nervous system settles.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What truth becomes easier to hear when
                I stop demanding an immediate answer?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities rooted in trust and genuine value.",
          yang: "Let disciplined action support meaningful growth.",
          content: (
            <>
              <p className="mt-4">
                Virgo continues to support abundance through reliability,
                craftsmanship, organization, skill, service, and thoughtful
                refinement. Progress can come from strengthening what already
                works rather than constantly creating something new.
              </p>

              <p className="mt-4">
                Jupiter in Leo supports visibility and creative confidence,
                while Venus in Scorpio asks whether opportunities carry genuine
                value beneath the surface. Choose depth over appearance and
                sustainability over urgency.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let depth reveal what surface certainty cannot.",
          yang: "Let conviction become one clear next step.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing where a narrow path opens into a
                wide horizon. You cannot see every mile ahead, but you can see
                enough to take the next step. Trust does not require complete
                certainty.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I move with discernment, courage, and trust in
                what is becoming clear.
                <br />
                <b>Prompt:</b> What am I ready to act on even without knowing
                every detail of the outcome?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let truth deepen without becoming fear.",
          yang: "Let courage move before certainty is complete.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I trust what is becoming clear and move forward with
                steady, grounded courage.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when caution begins turning into
                hesitation or overthinking.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let honesty deepen what deserves to remain.",
          yang: "Let action carry your intentions beyond thought.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I listen deeply, choose carefully, and take the
                next meaningful step with courage.&quot;
              </p>

              <p className="mt-4">
                Virgo reminds you to discern. Libra reminds you to consider
                perspective. Scorpio asks for emotional honesty, while
                Sagittarius reminds you that truth eventually asks for movement.
                Let this week become a bridge between understanding what matters
                and having the courage to act on it.
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
