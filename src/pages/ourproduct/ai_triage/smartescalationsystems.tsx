'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SmartEscalationSystems() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-emerald-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-teal-400/30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div data-aos="fade-right" className="text-gray-900 dark:text-white">
          <span className="text-sm font-semibold tracking-wide text-emerald-500 uppercase">
            Human + AI Collaboration
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Smart Escalation Systems
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            When AI reaches its limits, patients are seamlessly connected to a{' '}
            <strong>human doctor</strong>, ensuring trust, empathy, and care continuity.
          </p>
        </div>

        {/* Right image */}
        <div className="relative" data-aos="zoom-in">
          <Image
            src="/product/Smart Escalation systems.jpg"
            alt="Smart Escalation"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
