'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HealthcareAccessibility() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      {/* Background Blobs */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[28rem] h-[28rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div data-aos="fade-right" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-emerald-500 uppercase">
            Inclusive Healthcare
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-snug">
            Healthcare Accessibility & Inclusion
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Available <strong>24/7</strong>, requiring no app installs, and designed for 
            <strong>easy adoption</strong> across all devices—bringing care closer to every patient.
          </p>

         
        </div>

        {/* Right Side – 2 Images Overlapping */}
        <div className="relative flex justify-center items-center" data-aos="fade-left">
          {/* First Image */}
          <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[460px] rotate-[-3deg] shadow-2xl rounded-2xl overflow-hidden animate-float-slow">
            <Image
              src="/product/Healthcare Accessibility & Inclusion.jpg" // 🔄 Replace with your own
              alt="Healthcare Access"
              fill
              className="object-cover"
            />
          </div>

          {/* Second Image (Overlapping) */}
          <div
            className="absolute -right-10 bottom-[-40px] w-[220px] h-[300px] md:w-[260px] md:h-[340px] lg:w-[280px] lg:h-[380px] rotate-[5deg] shadow-xl rounded-2xl overflow-hidden animate-float-fast"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Image
              src="/product/Healthcare Accessibility & Inclusion.jpg" // 🔄 Replace with your own
              alt="Inclusive Healthcare"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
}
