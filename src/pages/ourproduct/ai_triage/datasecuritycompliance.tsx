'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DataSecurityCompliance() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      {/* Glow blobs */}
      <div className="absolute -top-40 left-20 w-[24rem] h-[24rem] bg-yellow-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 right-20 w-[26rem] h-[26rem] bg-orange-400/40 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row gap-16 items-center">
        {/* Image */}
        <div className="relative" data-aos="zoom-in">
          <div className="absolute inset-0 rounded-3xl border-4 border-yellow-400/30 animate-spin-slow" />
          <Image
            src="/product/Data Security & Compliance.jpg"
            alt="Data Security"
            width={480}
            height={480}
            className="rounded-3xl shadow-2xl relative z-10"
          />
        </div>

        {/* Content */}
        <div data-aos="fade-left" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-yellow-500 uppercase">
            Privacy First
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Data Security & Compliance
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
            Built with <strong>HIPAA-aligned architecture</strong>, ensuring patient
            privacy and security without compromising performance.
          </p>
        </div>
      </div>
    </section>
  );
}
