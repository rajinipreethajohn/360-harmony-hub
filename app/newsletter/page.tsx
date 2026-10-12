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
          October 12 – October 18, 2026
        </h2>

        <p className="italic text-sm text-gray-600 tracking-wide my-6">
          Weekly newsletter for the spiritually awakened modern-day men and
          women
        </p>

        <p className="italic text-lg text-gray-700">
          Theme:{" "}
          <b>
            From Intention to Inner Strength — Libra Harmony, Aquarius
            Transformation, and Capricorn Resolve
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
            This week unfolds beneath the harmonizing influence of{" "}
            <b>Libra season</b>, carrying forward the intentions planted during
            the <b>October 10 New Moon in Libra</b>. Yet the energy now begins
            shifting from reflection toward action, asking us to give structure
            to what we have begun imagining.
            <br />
            On <b>October 15</b>, the{" "}
            <b>Sun in Libra sextiles Jupiter in Leo</b>, bringing an expansive
            and encouraging current to relationships, creativity, confidence,
            cooperation, and personal growth. It is an invitation to recognize
            possibility without losing sight of what makes that possibility
            meaningful.
            <br />
            Around <b>October 15–16</b>,{" "}
            <b>Pluto stations direct in Aquarius</b>, marking a symbolic turning
            point in the longer process of transformation surrounding collective
            systems, communities, technology, power, and the ways individuals
            participate in a changing world.
            <br />
            On <b>October 16</b>, <b>Mars in Leo trines Saturn in Aries</b>,
            bringing together courage and discipline, creative fire and patient
            commitment. This supportive alignment reminds us that lasting
            progress often comes from directing our energy with intention rather
            than simply moving faster.
            <br />
            The week culminates with the{" "}
            <b>First Quarter Moon in Capricorn on October 18</b>. Following last
            week&apos;s Libra New Moon, this lunar phase asks us to move beyond
            intentions and begin making practical decisions. Capricorn
            emphasizes responsibility, structure, patience, boundaries, and the
            quiet strength of following through.
          </p>

          <p>
            Let this week remind you that transformation does not always arrive
            as a dramatic breakthrough. Sometimes it begins when an intention
            becomes a decision, a decision becomes an action, and an action
            becomes a way of living.
          </p>
        </div>
      </motion.div>

      {/* Sections */}
      {[
        {
          title: "🌕 Celestial Flow",
          yin: "Let inner clarity reveal what is ready to take form.",
          yang: "Let disciplined courage transform intention into meaningful action.",
          content: (
            <>
              <p className="mt-4">
                <b>Astrological Highlights:</b>
                <br />- <b>All week – Sun in Libra</b>: balance, relationships,
                reciprocity, fairness, cooperation, diplomacy, beauty, and the
                ongoing search for harmony between self and other.
                <br />- <b>All week – Mercury in Scorpio</b>: depth,
                investigation, intuition, psychological insight, meaningful
                conversations, emotional honesty, and a willingness to look
                beneath appearances.
                <br />- <b>All week – Venus retrograde in Scorpio</b>:
                reassessing relationships, intimacy, trust, attachment, desire,
                money, self-worth, and the deeper values guiding personal
                choices.
                <br />- <b>All week – Mars in Leo</b>: courage, creativity,
                confidence, leadership, visibility, passion, expressive action,
                and heart-led motivation.
                <br />- <b>All week – Jupiter in Leo</b>: expansion, generosity,
                optimism, creativity, confidence, visibility, and opportunities
                for personal expression.
                <br />- <b>Oct 15 – Sun sextile Jupiter</b>: optimism,
                cooperation, creative confidence, generosity, growth,
                perspective, and a willingness to recognize new possibilities.
                <br />- <b>Oct 15–16 – Pluto stations direct in Aquarius</b>:
                transformation, collective evolution, empowerment,
                reconsideration of systems, and renewed awareness of how
                individual choices connect with larger structures.
                <br />- <b>Oct 16 – Mars trine Saturn</b>: disciplined action,
                patience, perseverance, responsibility, courage, constructive
                leadership, and the ability to work steadily toward meaningful
                goals.
                <br />- <b>Oct 18 – First Quarter Moon in Capricorn</b>:
                commitment, practical decisions, responsibility, organization,
                structure, determination, and taking concrete steps toward
                intentions established at the New Moon.
                <br />- <b>All week – Saturn retrograde in Aries</b>:
                reassessing independence, responsibility, boundaries,
                leadership, courage, and the foundations of long-term
                commitments.
                <br />- <b>All week – Uranus retrograde in Gemini</b>:
                reconsidering communication patterns, ideas, assumptions,
                freedom, adaptability, curiosity, and the ways we respond to
                change.
                <br />- <b>All week – Neptune retrograde in Aries</b>:
                revisiting ideals, inspiration, identity, personal vision, and
                the relationship between imagination and courageous action.
                <br />- <b>All week – Chiron retrograde in Aries</b>: inward
                reflection around identity, vulnerability, self-assertion,
                courage, and the right to take up space.
              </p>

              <p className="mt-4">
                <b>Reflections:</b>
                <br />
                - Which intention from last week is ready to become a practical
                commitment?
                <br />
                - Where am I confusing movement with meaningful progress?
                <br />- What would change if I trusted steady, consistent action
                more than dramatic transformation?
              </p>

              <p className="mt-4">
                <b>Rituals:</b>
                <br />- On <b>October 15</b>, write down one possibility you
                would like to expand. Consider how cooperation, generosity, or
                creative confidence could support its growth.
                <br />- Around <b>October 16</b>, choose one meaningful goal and
                break it into three manageable actions. Complete the first
                without waiting for perfect conditions.
                <br />- Around the <b>October 18 First Quarter Moon</b>, revisit
                your Libra New Moon intentions. Identify one boundary,
                responsibility, or practical decision that would help those
                intentions become sustainable.
              </p>
            </>
          ),
        },

        {
          title: "💗 Wellness & Vital Flow",
          yin: "Let your body find strength through patience and compassionate attention.",
          yang: "Let disciplined movement become an expression of lasting vitality.",
          content: (
            <>
              <p className="mt-4">
                The supportive connection between Mars and Saturn offers a
                symbolic reminder that physical strength is built through
                consistency rather than intensity alone. Mars in Leo encourages
                expressive, energizing movement, while Saturn emphasizes
                patience, structure, and sustainable effort.
              </p>

              <p className="mt-4">
                This week, consider choosing a routine that your body can
                genuinely sustain. Whether through strength training, yoga,
                walking, swimming, mobility, or restorative movement, let
                progress be measured not only by performance but by how
                supported, capable, and connected you feel. Rest and recovery
                remain essential parts of that process.
              </p>
            </>
          ),
        },

        {
          title: "🌿 Rest & Renewal",
          yin: "Let stillness reveal what no longer needs to be carried.",
          yang: "Let healthy structure create room for genuine restoration.",
          content: (
            <>
              <p className="mt-4">
                As the Moon grows toward its First Quarter phase, the pressure
                to act may become more noticeable. Yet purposeful action does
                not require constant activity. Venus retrograde in Scorpio
                continues to invite emotional reflection, particularly around
                attachments, expectations, and the relationships that shape our
                sense of security.
              </p>

              <p className="mt-4">
                Before sleep, ask: &quot;What responsibility truly belongs to
                me, and what have I been carrying simply because I have grown
                accustomed to carrying it?&quot;
              </p>
            </>
          ),
        },

        {
          title: "✨ Abundance in Alignment",
          yin: "Receive opportunities that reflect your deeper values and long-term vision.",
          yang: "Let disciplined creativity turn possibility into sustainable growth.",
          content: (
            <>
              <p className="mt-4">
                The Sun–Jupiter sextile encourages a generous and expansive
                outlook, while Mars trine Saturn brings a practical
                counterbalance. Together, these symbolic influences invite us to
                recognize opportunity while also considering what it takes to
                nurture something over time.
              </p>

              <p className="mt-4">
                With Venus retrograde in Scorpio, questions of value remain
                important. Revisit financial priorities, creative projects,
                collaborations, and professional commitments. Consider whether
                the opportunities attracting your attention are aligned with
                what you genuinely want to build. Abundance becomes more
                meaningful when expansion is supported by clarity, integrity,
                and consistency.
              </p>
            </>
          ),
        },

        {
          title: "🧘 Stillness & Power",
          yin: "Let your inner vision unfold without demanding immediate results.",
          yang: "Let patience and commitment give your intentions a foundation.",
          content: (
            <>
              <p className="mt-4">
                Visualize yourself standing before a mountain at dawn. Its
                summit is visible in the distance, but the path begins directly
                beneath your feet. You do not need to reach the summit today.
                You need only recognize the direction and take the next
                conscious step. Feel the steadiness of the earth beneath you and
                the quiet confidence that comes from knowing you are moving with
                purpose.
              </p>

              <p className="mt-4">
                <b>Affirm:</b> I trust the strength of steady progress and the
                wisdom of meaningful action.
                <br />
                <b>Prompt:</b> What becomes possible when I stop measuring my
                growth by speed and begin honoring consistency?
              </p>
            </>
          ),
        },

        {
          title: "🌟 Sacred Affirmation",
          yin: "Let trust deepen through patience and inner knowing.",
          yang: "Let commitment turn your intentions into lived truth.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;I move forward with patience, act with intention, and
                trust that lasting transformation is built one conscious step at
                a time.&quot;
              </p>

              <p className="mt-4">
                Repeat this affirmation whenever impatience makes you question
                your progress. Remember that meaningful growth does not always
                announce itself. Sometimes it develops quietly through the
                choices you continue to make.
              </p>
            </>
          ),
        },

        {
          title: "🔮 A Final Whisper",
          yin: "Let transformation begin within before asking it to appear around you.",
          yang: "Let courage and discipline carry your vision into reality.",
          content: (
            <>
              <p className="mt-4 italic">
                &quot;This week, I honor the intentions I have planted, embrace
                the strength of steady action, and allow my becoming to unfold
                with patience and purpose.&quot;
              </p>

              <p className="mt-4">
                Libra reminds you that harmony requires awareness. Scorpio asks
                whether your choices reflect what you truly value. Aquarius
                invites you to reconsider the structures shaping your world,
                while Leo encourages you to act from the heart. And as the Moon
                reaches its First Quarter in Capricorn, you are reminded that
                intention becomes meaningful through commitment. You do not need
                to transform everything at once. Sometimes the most powerful
                change begins with one decision you are willing to honor.
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
