"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function SingleImageAOSSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-black text-white font-poppins px-6 md:px-12">
      <div
        className="max-w-5xl mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400 drop-shadow-lg">
          Patient Health Monitoring
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-sm md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Experience the power of real-time AI-driven healthcare insights with
          HDome — ensuring smarter, faster, and more connected patient care.
        </p>

        {/* Image Container */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Image
            src="/product/image1.jpeg"
            alt="Patient Care Monitoring"
            width={1200}
            height={700}
            className="object-cover w-full h-[400px] md:h-[600px] hover:scale-105 transition-transform duration-700"
            priority
          />

          {/* Overlay text (optional) */}
        
        </div>
      </div>
    </section>
  );
}
