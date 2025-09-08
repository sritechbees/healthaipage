'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMobileAlt, FaLaptop, FaSms, FaPhone } from 'react-icons/fa';

export default function OmniChannelEngagement() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      {/* Background Blobs (Figma Style) */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[30rem] h-[30rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/background/pattern.svg')] opacity-10" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Illustration (Modern Card Style) */}
        <div
          className="relative h-[350px] md:h-[450px] lg:h-[500px] flex items-center justify-center"
          data-aos="flip-left"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-4">
            <Image
              src="/product/Omni-Channel Engagement.jpg" // 🔄 Replace with your own
              alt="Omni-Channel Engagement"
              width={500}
              height={400}
              className="object-contain rounded-2xl drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right Content */}
        <div data-aos="fade-up" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-yellow-500 uppercase">
            Seamless Connectivity
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-snug">
            Omni-Channel Engagement
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Works across <strong>web, mobile, SMS, and voice</strong>, ensuring patients can connect instantly from any device—without waiting rooms or app installs.
          </p>

          {/* Icons Row (Figma-like badges) */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl shadow-lg border border-white/30"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <FaLaptop className="text-2xl text-yellow-400" /> <span>Web</span>
            </div>
            <div
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl shadow-lg border border-white/30"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaMobileAlt className="text-2xl text-yellow-400" /> <span>Mobile</span>
            </div>
            <div
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl shadow-lg border border-white/30"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaSms className="text-2xl text-yellow-400" /> <span>SMS</span>
            </div>
            <div
              className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-4 py-3 rounded-xl shadow-lg border border-white/30"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FaPhone className="text-2xl text-yellow-400" /> <span>Voice</span>
            </div>
          </div>

          {/* CTA */}
         
        </div>
      </div>
    </section>
  );
}
