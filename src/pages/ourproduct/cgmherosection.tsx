"use client";

import App_layout from "@/layout/app-alyout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CGMHeroSection() {
  return (
    <App_layout>
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center px-4 max-sm:mt-12 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-28">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight md:leading-tight mb-4"
          >
            Continuous Glucose Monitoring <br />
            <span className="text-[#2cb9ff]">For Smarter Health</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-xl md:max-w-2xl mx-auto leading-relaxed"
          >
            Track your glucose levels in real time and take control of your
            health with our AI-powered monitoring solutions.
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
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
                className="w-full max-sm:w-36 sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#2cb9ff] text-black font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-[#22a4e6] transition-all duration-300"
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
                className="w-full max-sm:w-36 sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#2cb9ff] text-[#2cb9ff] font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-[#2cb9ff] hover:text-black transition-all duration-300"
              >
                Read More
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Decorative Floating Circles */}
        <motion.div
          className="absolute top-16 left-8 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-[#2cb9ff]/30 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 right-8 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-[#2cb9ff]/30 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </section>
    </App_layout>
  );
}
