"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Side = "left" | "right" | null;

export default function ImageHoverTextSection() {
  const [active, setActive] = useState<Side>(null);

  const handleEnter = (side: Side) => setActive(side);
  const handleLeave = () => setActive(null);

  const caption = {
    left: {
      title: "Remote Vitals Tracking",
      lines: [
        "Continuous heart rate & BP monitoring",
        "Instant AI-powered alerts",
      ],
      image: "/product/patient care.png",
    },
    right: {
      title: "Patient Teleconsult",
      lines: ["Video visits & secure messaging", "Care history at your fingertips"],
      image: "/product/patient care1.png",
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="w-full px-6 md:px-12 bg-gradient-to-b from-gray-950 to-black text-white font-poppins">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Patient Care From Home
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {(["left", "right"] as Side[]).map((side) => (
            <div
              key={side}
              onMouseEnter={() => handleEnter(side)}
              onMouseLeave={handleLeave}
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            >
              <div className="relative w-full h-80 md:h-[450px] overflow-hidden rounded-2xl">
                <Image
                  src={caption[side!].image}
                  alt={caption[side!].title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

              {/* Text overlay */}
              <AnimatePresence>
                {active === side && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
                      {caption[side!].title}
                    </h3>
                    <p className="mt-3 text-gray-200 text-sm md:text-base leading-snug">
                      {caption[side!].lines[0]}
                      <br />
                      {caption[side!].lines[1]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Glow border animation */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
