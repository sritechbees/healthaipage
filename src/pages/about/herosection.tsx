"use client";

import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import App_layout from "@/layout/app-alyout";

export default function AboutHeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => AOS.init({ duration: 1000, once: true }));
    }
  }, []);

  return (
    <App_layout>
      {/* ✅ SEO Meta Data */}
      <Head>
        <title>BeaverHealthAI | About Us</title>
        <meta
          name="description"
          content="BeaverHealthAI transforms healthcare with AI-powered innovations, digital health platforms, and data intelligence."
        />
      </Head>

      <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f2c] via-[#111827] to-black text-white">
        {/* ✅ Background Image */}
        <Image
          src="/background/aboutbg.jpg"
          alt="Healthcare AI Background"
          fill
          priority
          className="object-cover opacity-40 z-0"
        />

        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              color: { value: "#2cb9ff" },
              shape: { type: "circle" },
              opacity: { value: 0.6 },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            background: { color: "transparent" },
          }}
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-0"></div>

        {/* Content */}
        <div
          className="relative z-10 max-w-5xl text-center px-4  sm:px-6 max-sm:mt-12 md:px-8 py-16 sm:py-20 md:py-28"
          data-aos="fade-up"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-snug sm:leading-tight md:leading-tight mb-6 break-words"
          >
            Welcome to{" "}
            <span className="text-[#2cb9ff] drop-shadow-md">
              BeaverHealthAI LLP
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Transforming healthcare with AI-powered innovations, digital health
            platforms, and data intelligence for a smarter, healthier tomorrow.
          </motion.p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Link href="/about/about_us">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#2cb9ff] text-black font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-[#22a4e6] transition-all duration-300">
                Our Journey
              </button>
            </Link>

            <Link href="/contact/getintouchpage">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border-2 border-[#2cb9ff] text-[#2cb9ff] font-semibold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-[#2cb9ff] hover:text-black transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </App_layout>
  );
}
