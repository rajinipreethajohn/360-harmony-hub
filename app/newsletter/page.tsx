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
          September 21 – September 27, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Sacred Balance and Courageous Truth — Libra Harmony, Aries
            Illumination, and Leo Fire
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
            This week begins with one final breath of <b>Virgo season</b>,
            carrying forward its invitation to refine, organize, discern, and
            bring greater intention to the details of daily life. On{" "}
            <b>September 21</b>, <b>Mercury in Libra sextiles Jupiter in Leo</b>
            , opening the week with expansive thinking, encouraging
            conversations, creative ideas, and a greater willingness to see
            possibility.
            <br />
            On <b>September 22</b>, the <b>Sun enters Libra</b>, marking the
            equinox and beginning a new seasonal chapter centered on balance,
            relationship, reciprocity, fairness, beauty, and the art of meeting
            life somewhere between self and other.
            <br />
            The week culminates with the{" "}
            <b>Full Moon in Aries on September 26</b>. Across the Aries–Libra
            axis, the question becomes clear: how do we honor ourselves without
            losing connection, and how do we create harmony without abandoning
            what is true? With the{" "}
            <b>Sun opposing Neptune and then trining Pluto</b> around this Full
            Moon, clarity may emerge through the meeting of intuition,
            uncertainty, honesty, and deeper transformation.
            <br />
            Finally, on <b>September 27</b>, <b>Mars enters Leo</b>, beginning a
            more expressive, creative, courageous, and visibly passionate cycle
            of action.
          </p>

          <p>
            Let this week remind you that true balance is not the absence of
            individuality — it is the ability to remain fully yourself while
            meeting life with openness, courage, and grace.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let connection reveal where greater balance is needed.",
          yang: "Let courageous truth protect the integrity of who you are.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>Sep 21 – Mercury sextile Jupiter</b>: expansive
                thinking, optimism, learning, meaningful conversations,
                cooperation, perspective, and creative possibility.
                <br />- <b>Until Sep 22 – Sun in Virgo</b>: discernment,
                organization, health, service, craftsmanship, simplicity, and
                practical refinement.
                <br />- <b>Sep 22 – Sun enters Libra</b>: balance,
                relationships, reciprocity, diplomacy, beauty, fairness,
                collaboration, and greater awareness of others.
                <br />- <b>All week – Mercury in Libra</b>: diplomacy, balanced
                thinking, thoughtful communication, negotiation, fairness, and
                seeing multiple perspectives.
                <br />- <b>All week – Venus in Scorpio</b>: emotional depth,
                intimacy, trust, loyalty, vulnerability, desire, and shared
                values.
                <br />- <b>Most of the week – Mars in Cancer</b>: protective
                action, emotional courage, instinct, home, family, and caring
                for what matters.
                <br />- <b>Sep 25 – Sun opposite Neptune</b>: heightened
                sensitivity, imagination, intuition, idealism, and a need for
                discernment where circumstances feel unclear.
                <br />- <b>Sep 26 – Sun trine Pluto</b>: inner strength, depth,
                transformation, insight, empowerment, and willingness to face
                what lies beneath the surface.
                <br />- <b>Sep 26 – Full Moon in Aries</b>: culmination,
                independence, courage, selfhood, initiative, emotional
                revelation, and balancing personal needs with relationship.
                <br />- <b>Sep 27 – Mars enters Leo</b>: creative action,
                confidence, passion, courage, leadership, visibility, play, and
                heart-led motivation.
                <br />- <b>All week – Jupiter in Leo</b>: confidence,
                generosity, creativity, expansion, visibility, and courageous
                possibility.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing responsibility, independence, leadership, courage,
                boundaries, and long-term commitments.
                <br />- <b>All week – Chiron retrograde in Aries</b>: inward
                reflection around courage, identity, self-assertion,
                vulnerability, and the right to take up space.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Where am I creating peace by compromising something that
                actually matters to me?
                <br />
                - What relationship becomes healthier when I bring more of my
                authentic self into it?
                <br />- What truth is becoming impossible to ignore beneath this
                Full Moon?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>September 21</b>, write down one conversation,
                idea, application, creative project, or possibility you would
                like to expand.
                <br />- As <b>Libra season</b> begins, choose one relationship
                or area of life where greater reciprocity would create healthier
                balance.
                <br />- Around the <b>September 26 Full Moon</b>, write two
                lists: what you need for yourself and what you want to give to
                others. Notice where those lists support each other — and where
                they do not.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body receive care without needing to earn it.",
          yang: "Let movement reconnect you with confidence and vitality.",
          content: (
            <>
              <p className="mt-4">
                The shift from Virgo into Libra season moves the emphasis from
                constant improvement toward balance. Notice whether your
                wellness routines support your life or whether they have quietly
                become another standard you feel obligated to meet.
              </p>

              <p className="mt-4">
                As Mars prepares to leave Cancer and enter Leo, physical energy
                may begin feeling more expressive and outward. Choose movement
                that brings genuine vitality — strength, dance, sport, walking,
                swimming, stretching, or anything that makes you feel more
                present inside your body.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet restore the balance that constant adjustment cannot.",
          yang: "Let clear boundaries protect the space you need to renew.",
          content: (
            <>
              <p className="mt-4">
                The Full Moon can bring emotions and realizations toward the
                surface. With the Sun–Neptune opposition nearby, not every
                feeling needs an immediate explanation. Give uncertainty enough
                space to become clearer before turning it into a conclusion.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;Where would I feel more peaceful if I
                stopped abandoning my own needs to preserve harmony?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive relationships and opportunities that honor reciprocity.",
          yang: "Let confident expression make your gifts easier to recognize.",
          content: (
            <>
              <p className="mt-4">
                Libra season highlights abundance through collaboration,
                relationships, presentation, negotiation, beauty, diplomacy, and
                mutually beneficial exchange. Consider where the right
                partnership could create more possibility than solitary effort.
              </p>

              <p className="mt-4">
                Jupiter in Leo continues to favor creative confidence and
                visibility, while Mars entering Leo adds momentum. Growth may
                ask you not only to create something valuable, but to become
                willing to stand behind it, speak about it, and let it be seen.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let relationship become a mirror without becoming your identity.",
          yang: "Let courage keep you rooted in the truth of who you are.",
          content: (
            <>
              <p className="mt-4">
                Visualize a perfectly balanced scale. On one side rests the word
                &quot;self.&quot; On the other rests the word
                &quot;connection.&quot; Neither side needs to disappear for
                balance to exist. Imagine both settling naturally into
                equilibrium.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I honor myself fully while remaining open to
                genuine connection.
                <br />
                <b>Prompt:</b> Where can I create more balance without making
                myself smaller?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let connection deepen without asking you to disappear.",
          yang: "Let courage protect the truth that belongs to you.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I create harmony without abandoning myself, and I honor my
                truth without closing my heart.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation whenever keeping the peace begins to
                require silence about something that genuinely matters.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let openness create room for deeper connection.",
          yang: "Let your inner fire remind you that your truth also belongs.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I choose balance without self-abandonment,
                connection without compromise, and courage without closing my
                heart.&quot;
              </p>

              <p className="mt-4">
                Virgo reminds you to discern. Libra teaches the art of meeting
                another. Scorpio asks for emotional honesty, while Aries reminds
                you that there is still a self inside every relationship. And as
                Mars enters Leo, courage becomes increasingly expressive. Let
                this week show you that harmony is strongest when everyone at
                the table is allowed to exist fully — including you.
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
