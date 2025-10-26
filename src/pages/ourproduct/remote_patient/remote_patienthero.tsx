"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import App_layout from "@/layout/app-alyout";

const slides = [
  {
    image: "/product/Remote Patient Monitoring1.jpg",
    title: "product Patient Monitoring",
    text: "Track patient health in real-time using advanced AI and IoT technologies.",
  },
  {
    image: "/product/Remote Patient Monitoring2.jpg",
    title: "Smart Health Insights",
    text: "Empower doctors and patients with intelligent, data-driven health tracking.",
  },
  {
    image: "/product/Remote Patient Monitoring3.jpg",
    title: "Healthcare Beyond Boundaries",
    text: "Deliver continuous care from anywhere with seamless digital health systems.",
  },
];

export default function RemotePatientHero() {
  const [current, setCurrent] = useState(0);

  // Auto image rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <App_layout>
    <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden font-poppins">
      {/* Background image animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover mt-24"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

      {/* Text and button content */}
      <div className="relative z-10 mt-24 text-center px-6">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={slides[current].text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-6"
        >
          {slides[current].text}
        </motion.p>

        <motion.a
          href="/ourproduct/remote_patient/remotepatientcomponents"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Learn More
        </motion.a>
      </div>
    </section>
    </App_layout>
  );
}
