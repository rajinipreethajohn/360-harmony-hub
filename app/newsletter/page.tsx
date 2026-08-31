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
          August 31 – September 06, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Quiet Integration and Clearer Choices — Virgo Discernment, Gemini
            Release, and Libra Balance
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
            This week begins in the reflective aftermath of the recent{" "}
            <b>Pisces lunar eclipse</b>, inviting integration rather than
            immediate reinvention. The <b>Sun and Mercury in Virgo</b> bring
            attention back to discernment, organization, health, routines,
            thoughtful communication, and the practical details that help life
            feel clearer.
            <br />
            <b>Venus in Libra</b> begins to soften relationships through
            reciprocity, beauty, fairness, diplomacy, and balance, while{" "}
            <b>Mars in Cancer</b> keeps action emotionally rooted — protective,
            intuitive, and closely connected to home, family, safety, and what
            genuinely matters.
            <br />
            Around <b>September 4</b>, the <b>Last Quarter Moon in Gemini</b>{" "}
            creates a natural point of release and mental editing. Old thoughts,
            conversations, plans, and assumptions may be ready for revision.
            Virgo asks what is useful; Gemini asks what still needs to be said,
            understood, or simply let go.
          </p>

          <p>
            Let this week help you integrate what has changed, simplify what has
            become too complicated, and choose your next steps with quieter
            clarity.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let reflection reveal what no longer needs to be carried.",
          yang: "Let clear thinking guide practical, intentional choices.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Virgo</b>: discernment,
                organization, health, service, craftsmanship, and practical
                refinement.
                <br />- <b>All week – Mercury in Virgo</b>: clear thinking,
                detailed communication, planning, editing, analysis, and
                thoughtful decisions.
                <br />- <b>Most of the week – Venus in Libra (from Sept 02)</b>:
                harmony, beauty, reciprocity, diplomacy, partnership, fairness,
                and graceful connection.
                <br />- <b>All week – Mars in Cancer</b>: protective action,
                emotional courage, instinct, home, family, and caring for what
                matters.
                <br />- <b>All week – Jupiter in Leo</b>: confidence,
                generosity, creativity, expansion, visibility, and courageous
                possibility.
                <br />- <b>Sep 4 – Last Quarter Moon in Gemini</b>: release,
                mental editing, communication, reflection, changing perspective,
                and clearing unfinished thoughts.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, leadership, courage, boundaries, and
                long-term commitments.
                <br />- <b>All week – Chiron retrograde in Taurus</b>: inward
                healing around worth, stability, embodiment, security, and
                self-trust.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Which thought, plan, or conversation no longer needs so much
                mental energy?
                <br />
                - What simple adjustment would make daily life feel more
                spacious?
                <br />- Where can I choose balance instead of automatically
                choosing obligation?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Early in the week, review one routine, system, or
                commitment and remove one unnecessary complication.
                <br />- Around <b>September 4</b>, write down one recurring
                thought, unfinished conversation, or old story you are ready to
                release or reframe.
                <br />- Before the week ends, create one small pocket of order:
                clear a surface, simplify your calendar, organize your notes, or
                finish one lingering task.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let gentleness help your body integrate what has shifted.",
          yang: "Let simple routines become reliable strength.",
          content: (
            <>
              <p className="mt-4">
                Virgo season favors wellness through consistency rather than
                intensity. Support yourself with hydration, nourishing meals,
                steady sleep, stretching, sunlight, movement, and routines that
                make healthy choices easier to repeat.
              </p>

              <p className="mt-4">
                Mars in Cancer adds an emotional dimension to physical energy.
                Notice whether your body needs effort or reassurance. Movement
                can be strengthening without becoming another demand you place
                on yourself.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let mental noise soften into spaciousness.",
          yang: "Let rest restore the clarity needed for wise action.",
          content: (
            <>
              <p className="mt-4">
                The waning Moon supports subtraction. Reduce unnecessary input,
                unfinished tabs, constant notifications, and conversations that
                leave your mind carrying more than it needs.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What am I still thinking about that no
                longer requires an answer tonight?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that feel reciprocal and sustainable.",
          yang: "Let thoughtful refinement increase the value of what you offer.",
          content: (
            <>
              <p className="mt-4">
                Virgo energy supports abundance through quality, reliability,
                skill, service, organization, and attention to the details that
                make good work stronger.
              </p>

              <p className="mt-4">
                Jupiter in Leo keeps confidence and creative possibility alive,
                while Venus in Libra favors partnership, presentation,
                collaboration, and mutually supportive relationships. Growth can
                come from doing something better — not necessarily doing more.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let silence separate truth from mental repetition.",
          yang: "Let discernment choose the next useful step.",
          content: (
            <>
              <p className="mt-4">
                Visualize a desk covered with loose pages. One by one, you sort
                them: keep, release, return later. Nothing needs to be solved
                all at once. Clarity comes from knowing what deserves your
                attention now.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I release mental clutter and give my energy to
                what matters.
                <br />
                <b>Prompt:</b> What becomes clearer when I stop treating every
                thought as equally important?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let release make room for a quieter mind.",
          yang: "Let clarity become practical and kind.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I release what no longer needs my attention and choose
                what supports clarity, balance, and peace.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation when overthinking begins to make a
                simple choice feel complicated.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let integration happen without rushing the next beginning.",
          yang: "Let thoughtful choices create steadier forward movement.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I clear what is finished, simplify what
                remains, and make room for what deserves my energy next.&quot;
              </p>

              <p className="mt-4">
                Virgo reminds you to discern. Gemini reminds you that thoughts
                can change. Libra reminds you to seek balance, while Cancer
                reminds you to protect what matters emotionally. Let this week
                be less about forcing a new chapter and more about clearing the
                page so the next one can begin cleanly.
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
