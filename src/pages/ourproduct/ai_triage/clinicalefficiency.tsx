'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClinicalEfficiency() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
      {/* Background Blobs (Figma Style) */}
      <div className="absolute -top-28 -left-28 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-28 -right-28 w-[30rem] h-[30rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Right Side – Circular/Oval Image Design */}
        <div className="relative flex justify-center items-center" data-aos="zoom-in">
          {/* Glowing Ring Effect */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-yellow-400 to-emerald-400 blur-2xl opacity-40 animate-ping" />
          <div className="absolute w-[420px] h-[420px] rounded-full border-4 border-emerald-300/50 animate-spin-slow" />

          {/* Main Image inside circle */}
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl animate-float">
            <Image
              src="/product/Clinical Efficiency.jpg" // 🔄 Replace with your own image
              alt="Clinical Efficiency"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Left Content */}
        <div data-aos="fade-right" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-emerald-500 uppercase">
            Smarter Workflows
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-snug">
            Clinical Efficiency
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
            Saves doctors valuable time by providing <strong>structured patient data</strong>, 
            enabling quicker decision-making and reducing administrative burdens.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
