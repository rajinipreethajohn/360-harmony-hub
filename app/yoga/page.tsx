"use client";
import { motion } from "framer-motion";

export default function YogaPage() {
  const kidsDecks = [
    { title: "Toddler Yoga", img: "/images/yoga/toddler.png" },
    { title: "Early Childhood Yoga", img: "/images/yoga/early.png" },
    { title: "Tween Yoga", img: "/images/yoga/tween.png" },
    { title: "Teen Yoga", img: "/images/yoga/teen.png" },
    
  ];

  const seniorDeck = { title: "Senior Yoga", img: "/images/yoga/senior.png" };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section-wrapper max-w-5xl mx-auto py-28 px-6 text-center">
      {/* Title */}
      <motion.h1
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-serif font-bold text-[#1c1b2b] mb-4"
      >
        Yoga - The Union of Body, Mind & Spirit
      </motion.h1>

      {/* 🌿 Intro with Vedic roots */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.2 }}
        className="text-gray-700 italic text-lg mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Born from the ancient <b>Vedic civilization</b>, yoga is far more than a
        series of poses — it is a way of living in harmony with oneself and the
        universe. Rooted in timeless wisdom, yoga teaches us to unite{" "}
        <b>body, mind, and soul</b> through awareness, discipline, and
        compassion.
      </motion.p>

      {/* 🌸 Bridge to modern life */}
      <motion.p
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-700 italic text-lg mb-14 max-w-3xl mx-auto leading-relaxed"
      >
        At <b>360 Harmony Hub</b>, we bring this ancient science into modern
        rhythm — blending movement, mindfulness, and inner reflection to nurture
        balance in every age and stage of life.
      </motion.p>

      {/* 🌻 Section 1 — Kids & Teens */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-serif font-semibold text-[#1c1b2b] mb-8">
          Yoga for Children & Teens
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {kidsDecks.map((deck, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-[#fffdf8] border border-[#d0b788] rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] w-64 h-80 flex flex-col items-center justify-center transition-all duration-300"
            >
              <div className="w-44 h-60 bg-[#fffaf3] border border-[#e6d3b1] rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src={deck.img}
                  alt={deck.title}
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mt-4 text-[#1c1b2b] font-serif font-medium">
                {deck.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🌼 Section 2 — Seniors */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <h2 className="text-2xl font-serif font-semibold text-[#1c1b2b] mb-8">
          Yoga for Seniors
        </h2>

        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-4 bg-[#fffdf8] border border-[#d0b788] rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] w-64 h-80 flex flex-col items-center justify-center transition-all duration-300"


          >
            <div className="w-44 h-60 bg-[#fffdf9] border border-[#e6d3b1] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={seniorDeck.img}
                alt={seniorDeck.title}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="mt-4 text-[#1c1b2b] font-serif font-medium">
              {seniorDeck.title}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 🌿 Closing line */}
      <p className="mt-16 text-sm italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
        🌺 Yoga is not a luxury — it is our ancient inheritance, a bridge
        between movement and meditation, guiding us toward stillness, grace, and
        joy.
      </p>
    </div>
  );
}
