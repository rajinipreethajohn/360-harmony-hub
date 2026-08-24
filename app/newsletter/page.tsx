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
          August 24 – August 30, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Refinement and Emotional Release — Virgo Clarity, Pisces
            Surrender, and Heart-Led Integration
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
            This week settles fully into the clarifying rhythm of{" "}
            <b>Virgo season</b>. The <b>Sun in Virgo</b> turns attention toward
            discernment, health, routines, service, craftsmanship, and the
            practical choices that make life work more smoothly. The invitation
            is not perfection — it is refinement with purpose.
            <br />
            On <b>August 25</b>, <b>Mercury enters Virgo</b>, sharpening
            thought, communication, organization, and attention to detail. Then,
            on <b>August 27</b>, the <b>Sun meets Mercury in Virgo</b>, creating
            a strong moment for insight, decisions, conversations, editing,
            planning, and seeing what needs to become simpler or clearer.
            <br />
            On <b>August 28</b>, the{" "}
            <b>Full Moon and partial lunar eclipse in Pisces</b> brings the
            Virgo–Pisces axis into full illumination. Virgo asks what can be
            improved; Pisces asks what must be released. Together, they invite a
            deeper balance between order and surrender, effort and trust,
            practicality and intuition.
          </p>

          <p>
            Let this week help you refine what matters, release what cannot be
            controlled, and return to a quieter kind of clarity.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let surrender soften what effort cannot resolve.",
          yang: "Let clear discernment strengthen what truly matters.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Virgo</b>: discernment,
                organization, health, service, craftsmanship, and practical
                refinement.
                <br />- <b>Early week – Mercury in Leo</b>: expressive thought,
                confidence, creativity, and speaking from the heart.
                <br />- <b>Aug 25 – Mercury enters Virgo</b>: clear thinking,
                detailed communication, planning, editing, analysis, and
                practical decisions.
                <br />- <b>Aug 27 – Sun conjunct Mercury in Virgo</b>: insight,
                mental clarity, important conversations, organization, and
                seeing what needs attention.
                <br />- <b>All week – Venus in Libra</b>: harmony, beauty,
                reciprocity, diplomacy, partnership, and graceful connection.
                <br />- <b>All week – Mars in Cancer</b>: protective action,
                emotional courage, intuition, home, family, and caring for what
                matters.
                <br />-{" "}
                <b>Aug 28 – Full Moon / Partial Lunar Eclipse in Pisces</b>:
                culmination, emotional release, intuition, surrender,
                compassion, spiritual insight, and closure.
                <br />- <b>All week – Jupiter in Leo</b>: confidence,
                generosity, creativity, expansion, and courageous possibility.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, leadership, boundaries, courage, and
                long-term commitments.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - What genuinely needs improvement — and what simply needs
                acceptance?
                <br />
                - Where am I using control to avoid uncertainty?
                <br />- What emotional weight is ready to be released rather
                than analyzed again?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>August 25</b>, organize one area that has felt
                mentally cluttered: your schedule, notes, inbox, finances, or
                workspace.
                <br />- On <b>August 27</b>, write down one decision or truth
                that has become clearer and identify the simplest next step.
                <br />- On <b>August 28</b>, create a quiet release ritual:
                journal, meditate, spend time near water, or name something you
                are finally willing to stop carrying.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body soften where it has been holding too much.",
          yang: "Let simple routines become quiet strength.",
          content: (
            <>
              <p className="mt-4">
                Virgo season supports wellness through consistency rather than
                intensity. Return to basics: hydration, nourishing meals, sleep,
                mobility, stretching, sunlight, and routines that reduce
                unnecessary friction.
              </p>

              <p className="mt-4">
                The Pisces lunar eclipse may heighten emotional sensitivity.
                Balance practical care with gentleness: slower evenings, fewer
                inputs, restorative movement, and permission to rest when your
                system asks for it.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness dissolve what no longer needs effort.",
          yang: "Let order create space for genuine rest.",
          content: (
            <>
              <p className="mt-4">
                This week asks for both simplification and surrender. Clear one
                practical source of clutter, then leave enough empty space for
                your mind and emotions to settle naturally.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What would become lighter if I stopped
                trying to solve everything tonight?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive what flows without asking you to abandon yourself.",
          yang: "Let refinement strengthen the value of what you offer.",
          content: (
            <>
              <p className="mt-4">
                Virgo energy supports abundance through skill, reliability,
                systems, service, quality, and thoughtful improvement. This is
                an excellent week to refine one process, offer, habit, or piece
                of work rather than constantly starting something new.
              </p>

              <p className="mt-4">
                Jupiter in Leo keeps the larger vision alive, while Venus in
                Libra highlights collaboration and mutually supportive
                relationships. Let confidence open the door, then let quality
                and connection help you stay there.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let intuition speak after the noise becomes quiet.",
          yang: "Let clarity guide one simple next step.",
          content: (
            <>
              <p className="mt-4">
                Visualize a bowl of clear water. At first, the surface is
                moving. Then everything slowly becomes still, and what was
                clouding the water settles naturally. Clarity does not always
                need to be forced.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I refine what I can and release what I cannot
                control.
                <br />
                <b>Prompt:</b> What am I ready to stop fixing and simply allow
                to complete?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let surrender create room for peace.",
          yang: "Let discernment protect what deserves your energy.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I release what is complete, refine what matters, and trust
                what becomes clear in stillness.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when the desire to perfect everything
                begins to replace trust.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let softness complete what effort cannot.",
          yang: "Let clarity become useful, grounded, and kind.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I simplify what is complicated, release what is
                finished, and make room for deeper peace.&quot;
              </p>

              <p className="mt-4">
                Virgo reminds you to discern. Pisces reminds you to surrender.
                Libra reminds you to seek balance, while Cancer reminds you to
                protect what matters emotionally. Let this week show you that
                wisdom is not only knowing what to improve — it is also knowing
                what to let go.
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
