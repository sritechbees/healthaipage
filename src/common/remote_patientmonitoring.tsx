"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function RemotePatientMonitoring() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay the video once the component is mounted
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true; // Required for autoplay in most browsers
      video.play().catch((err) => console.log("Autoplay prevented:", err));
    }
  }, []);

  return (
    <section className="w-full flex items-center justify-center py-20 mt-16 text-white font-poppins bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-5xl w-full px-6">
        {/* Title */}
        <motion.h1
          initial={{ y: -30, opacity: 0, letterSpacing: -2 }}
          animate={{ y: 0, opacity: 1, letterSpacing: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-8 tracking-tight"
        >
          Remote Patient Monitoring: Patient Care From Home!

        </motion.h1>

        {/* Video Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative bg-gradient-to-t from-black/60 to-transparent rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
        >
          <div className="relative w-full h-[420px] md:h-[520px] lg:h-[560px]">
            <video
              ref={videoRef}
              className="w-full h-[550px] object-cover"
              src="/videos/healthai.mp4"
              poster="/videos/healthai.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Soft overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Glow Animation */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-pink-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-yellow-400/6 blur-3xl" />
          </motion.div>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-300 mt-6 max-w-3xl mx-auto"
        >
          Experience seamless remote health tracking real-time vitals, intelligent alerts,
          and AI-powered insights that redefine patient care.
        </motion.p>
      </div>
    </section>
  );
}
