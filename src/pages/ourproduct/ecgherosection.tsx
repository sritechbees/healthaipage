"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Link from "next/link";
import App_layout from "@/layout/app-alyout";

export default function ECGHeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <App_layout>
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen mt-20 sm:mt-24 flex items-center justify-center overflow-hidden">
        {/* ✅ Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/tracky2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-3xl py-16 sm:py-20 md:py-24">
          <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-snug sm:leading-tight mb-4"
            data-aos="fade-down"
          >
            Smart Health{" "}
            <span className="text-[#2cb9ff]">ECG Monitoring</span>
          </h1>

          <p
            className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stay ahead with real-time ECG tracking, AI-driven insights, and
            proactive heart health monitoring — anytime, anywhere.
          </p>

          {/* Buttons */}
          <div
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link href="/ourproduct/earlydetectionecg">
              <button className="w-full max-sm:w-36 sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#2cb9ff] text-black font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-[#22a4e6] transition-all duration-300">
                Explore ECG
              </button>
            </Link>
          </div>
        </div>

        {/* Floating Trendy Shapes */}
        <motion.div
          className="absolute top-12 left-6 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#2cb9ff]/30 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-16 right-6 w-20 sm:w-28 md:w-40 h-20 sm:h-28 md:h-40 bg-[#2cb9ff]/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </section>
    </App_layout>
  );
}
