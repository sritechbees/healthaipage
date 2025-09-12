"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CGMHeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/product/cgm hero1.jpg" // 👈 replace with your image
        alt="CGM Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Continuous Glucose Monitoring <br />
          <span className="text-yellow-400">For Smarter Health</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto"
        >
          Track your glucose levels in real time and take control of your health
          with our AI-powered monitoring solutions.
        </motion.p>

        {/* Button */}
        <Link href="/ourproduct/cgmwelcomekit">
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            type: "spring",
            stiffness: 200,
          }}
          className="mt-8 px-8 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-full shadow-lg hover:bg-yellow-300 transition-all duration-300"
        >
           Explore CGM
        </motion.button>
        </Link>
      </div>

      {/* Decorative Floating Circles */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-yellow-400/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
}
