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
          September 07 – September 13, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            Intentional Beginnings and Deeper Truth — Virgo Renewal, Libra
            Perspective, and Scorpio Depth
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
            This week begins beneath the thoughtful rhythm of{" "}
            <b>Virgo season</b>, with the <b>Sun in Virgo</b> continuing to
            illuminate discernment, health, routines, service, craftsmanship,
            and the practical choices that help life become clearer and more
            intentional.
            <br />
            On <b>September 10</b>, two important shifts reshape the tone:{" "}
            <b>Venus enters Scorpio</b>, deepening themes of love, intimacy,
            trust, value, and emotional honesty, while{" "}
            <b>Mercury enters Libra</b>, bringing greater attention to balance,
            diplomacy, fairness, relationships, and the ability to consider more
            than one perspective.
            <br />
            Then, on <b>September 11</b>, the <b>New Moon in Virgo</b> opens a
            fresh lunar cycle centered on intentional improvement. This is a
            beautiful moment to begin again through small, meaningful choices —
            refining routines, simplifying systems, caring for the body, and
            creating structures that genuinely support the life you want to
            live.
          </p>

          <p>
            Let this week remind you that transformation does not always begin
            with a dramatic leap — sometimes it begins with one honest choice,
            repeated with care.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let inner truth reveal what deserves deeper devotion.",
          yang: "Let thoughtful intention become meaningful action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Virgo</b>: discernment,
                organization, health, service, craftsmanship, simplicity, and
                practical refinement.
                <br />- <b>Until Sep 10 – Mercury in Virgo</b>: detailed
                thinking, planning, analysis, editing, organization, and
                practical communication.
                <br />- <b>Sep 10 – Mercury enters Libra</b>: diplomacy,
                balanced thinking, negotiation, fairness, relationships, and
                seeing multiple perspectives.
                <br />- <b>Until Sep 10 – Venus in Libra</b>: harmony, beauty,
                reciprocity, partnership, diplomacy, and graceful connection.
                <br />- <b>Sep 10 – Venus enters Scorpio</b>: emotional depth,
                intimacy, trust, loyalty, vulnerability, shared values, and
                deeper connection.
                <br />- <b>Sep 11 – New Moon in Virgo</b>: new beginnings around
                routines, wellbeing, organization, work, service, habits, and
                meaningful self-improvement.
                <br />- <b>Sep 12 – Mercury trine Pluto</b>: depth of thought,
                meaningful conversations, investigation, insight, and seeing
                beneath the surface.
                <br />- <b>Sep 12 – Mercury opposite Neptune</b>: heightened
                imagination and intuition alongside a need for clarity,
                discernment, and careful interpretation.
                <br />- <b>Sep 13 – Mercury trine Uranus</b>: fresh ideas,
                unexpected insight, new perspectives, inventive thinking, and
                mental breakthroughs.
                <br />- <b>All week – Mars in Cancer</b>: protective action,
                emotional courage, instinct, home, family, and caring for what
                matters.
                <br />- <b>All week – Jupiter in Leo</b>: confidence,
                generosity, creativity, expansion, visibility, and courageous
                possibility.
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
                - Which part of my daily life is ready for a simpler, healthier
                beginning?
                <br />
                - Where would deeper honesty create greater intimacy or trust?
                <br />- What becomes possible when I listen to another
                perspective without abandoning my own?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- Before the <b>September 11 New Moon</b>, clear one
                physical or mental space that feels cluttered or unfinished.
                <br />- On <b>September 11</b>, write three intentions centered
                on routines, wellbeing, organization, meaningful work, or one
                habit you genuinely want to nurture.
                <br />- Before the week ends, have one conversation with greater
                honesty and curiosity — listening not simply to respond, but to
                understand.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let care begin with listening to what your body actually needs.",
          yang: "Let simple habits become steady sources of strength.",
          content: (
            <>
              <p className="mt-4">
                Virgo season and the Virgo New Moon make this a natural week for
                a gentle wellness reset. Rather than attempting an entire
                transformation at once, choose one supportive habit you can
                repeat: regular sleep, hydration, nourishing food, movement,
                stretching, sunlight, or more intentional recovery.
              </p>

              <p className="mt-4">
                Mars in Cancer reminds you that physical wellbeing is connected
                to emotional safety. Strength and softness can coexist. Let
                movement energize you while rest, nourishment, and familiar
                rhythms help restore you.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let quiet reveal what constant activity has been hiding.",
          yang: "Let supportive routines protect the space you need to restore.",
          content: (
            <>
              <p className="mt-4">
                The days surrounding the New Moon invite a quieter rhythm.
                Reduce unnecessary input, simplify the evening, and allow
                yourself moments where nothing needs to be optimized or solved.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What small ritual would help me feel
                more supported by my own life?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that carry depth, trust, and mutual value.",
          yang: "Let refinement make your gifts easier to recognize and receive.",
          content: (
            <>
              <p className="mt-4">
                Virgo supports abundance through quality, reliability, skill,
                organization, service, and thoughtful improvement. Look closely
                at what already exists before assuming that growth requires
                something entirely new.
              </p>

              <p className="mt-4">
                Jupiter in Leo continues to encourage visibility and creative
                confidence, while Mercury in Libra favors thoughtful
                collaboration and Venus in Scorpio favors deeper, more
                meaningful alliances. The right opportunity may grow through
                trust as much as exposure.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let depth reveal what surface thinking cannot.",
          yang: "Let clarity turn one intention into a lived practice.",
          content: (
            <>
              <p className="mt-4">
                Visualize a small seed resting beneath dark soil. Nothing
                appears to be happening above the surface, yet the first
                movement has already begun. Your intentions do not need
                immediate evidence to be real.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I create change through choices that honor what
                truly matters.
                <br />
                <b>Prompt:</b> Which small action, repeated consistently, could
                quietly transform my life?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let intention grow quietly before demanding proof.",
          yang: "Let devotion give your intentions form.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I begin with intention, refine with wisdom, and trust the
                quiet power of consistent change.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation whenever impatience makes meaningful
                progress feel too small.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let truth deepen what is worthy of your heart.",
          yang: "Let thoughtful action build the life your intentions imagine.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I choose what deserves to grow and give it my
                attention one meaningful step at a time.&quot;
              </p>

              <p className="mt-4">
                Virgo reminds you to refine. Libra reminds you to consider
                balance and perspective. Scorpio reminds you that true
                connection requires depth, while Cancer reminds you to protect
                what matters emotionally. Let this New Moon week become an
                invitation to begin again — quietly, intentionally, and with
                greater honesty about what deserves your energy.
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
