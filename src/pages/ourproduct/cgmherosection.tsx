"use client";

import App_layout from "@/layout/app-alyout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CGMHeroSection() {
  return (
    <App_layout>
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/trackyone.mp4" type="video/mp4" /> 
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 mt-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          Continuous Glucose Monitoring <br />
          <span className="text-[#2cb9ff]">For Smarter Health</span>
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

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Explore CGM */}
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
              className="px-8 py-3 bg-[#2cb9ff] text-black font-semibold text-lg rounded-full shadow-lg hover:bg-[#22a4e6] transition-all duration-300"
            >
              Explore CGM
            </motion.button>
          </Link>

          {/* Read More */}
          <Link href="/ourproduct/realtimeglucosetracking">
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                type: "spring",
                stiffness: 200,
              }}
              className="px-8 py-3 border-2 border-[#2cb9ff] text-[#2cb9ff] font-semibold text-lg rounded-full shadow-lg hover:bg-[#2cb9ff] hover:text-black transition-all duration-300"
            >
              Read More
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Decorative Floating Circles */}
      <motion.div
        className="absolute top-20 left-10 w-24 h-24 bg-[#2cb9ff]/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#2cb9ff]/30 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
    </App_layout>
  );
}
