'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ScalableDigitalHealth() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-tr from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      {/* Background glow */}
     <div className="absolute -top-20 -left-20 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div data-aos="fade-right" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-purple-500 uppercase">
            Built to Scale
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Scalable Digital Health Platforms
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Designed for <strong>mass deployment</strong>, enabling healthcare
            organizations to expand accessibility and coverage at scale.
          </p>
        </div>

        {/* Image side */}
        <div className="relative" data-aos="fade-left">
          <Image
            src="/product/Scalable Digital Health Platforms.jpg"
            alt="Scalable Health"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
