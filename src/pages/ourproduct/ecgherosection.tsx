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
    <section className="relative w-full h-screen mt-24 flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center mb-24 px-6 max-w-4xl">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          data-aos="fade-down"
        >
          Smart Health <span className="text-[#2cb9ff]">ECG Monitoring</span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Stay ahead with real-time ECG tracking, AI-driven insights, and
          proactive heart health monitoring  anytime, anywhere.
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Link href="/ourproduct/earlydetectionecg ">
            <button className="px-8 py-3 bg-[#2cb9ff] text-black font-semibold text-lg rounded-full shadow-lg hover:bg-[#22a4e6] transition-all duration-300">
              Explore ECG
            </button>
          </Link>

          
        </div>
      </div>

      {/* Floating Trendy Shapes */}
      <motion.div
        className="absolute top-16 left-10 w-32 h-32 bg-[#2cb9ff]/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#2cb9ff]/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
    </section>
    </App_layout>
  );
}
