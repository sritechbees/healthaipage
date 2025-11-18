'use client';

import App_layout from '@/layout/app-alyout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Coursescard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // ✅ Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <App_layout>
      <section
        className={`relative w-full py-16 mt-10 transition-colors duration-500 ${
          darkMode
            ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white'
            : 'bg-gradient-to-r from-green-100 via-green-200 to-blue-300 text-gray-900'
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-left"
          >
            <h4
              className={`text-lg font-semibold flex items-center gap-2 ${
                darkMode ? 'text-[#2cb9ff]' : 'text-blue-800'
              }`}
            >
              <span className="text-xl">🏥</span> Beaver HealthAI.
            </h4>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Healthcare{' '}
              <span
                className={`${
                  darkMode ? 'text-[#2cb9ff]' : 'text-[#2cb9ff]'
                }`}
              >
                AI Products
              </span>
            </h1>

            <p
              className={`mt-4 text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Build smarter healthcare solutions with AI-driven innovation.
              Explore real-time patient monitoring, predictive analytics, and
              connected medical devices—all designed to save lives and improve
              care.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/ourproduct/realtimeglucosetracking"
                className={`inline-block px-8 py-3 rounded-full font-semibold shadow-md transition ${
                  darkMode
                    ? 'bg-green-500 text-black hover:bg-green-400'
                    : 'bg-green-500 text-black hover:bg-green-400'
                }`}
              >
                Explore Products
              </Link>
            </div>

            {/* List of Products with Links */}
            <ul className="mt-6 space-y-3 text-lg">
                <li>
                <Link
                  href="/ourproduct/remote_patient/remote_patienthero"
                  className={`hover:underline ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  ✔ Remote Patient Monitoring (RPM)
                </Link>
              </li>
              <li>
                <Link
                  href="/ourproduct/cgmherosection"
                  className={`hover:underline ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  ✔ Continuous Glucose Monitoring (CGM)
                </Link>
              </li>
              
              <li>
                <Link
                  href="/ourproduct/ecgherosection"
                  className={`hover:underline ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  ✔ Smart Health ECG
                </Link>
              </li>
              <li>
                <Link
                  href="/ourproduct/ai_triage/triagehero"
                  className={`hover:underline ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  ✔ AI Triage Systems
                </Link>
              </li>
            </ul>

            {/* Contact Info */}
           <div
  className={`mt-6 flex items-center gap-6 font-medium ${
    darkMode ? 'text-gray-300' : 'text-gray-900'
  }`}
>
  <p>📞 +91 9443604461</p>
  <p>🌐 
    <Link href="https://www.google.com/search?q=info%40beavertek.com">
                <span className=" hover:text-[#2cb9ff] hover:underline"> healthai@beavertek.com</span>
              </Link></p>
</div>

            {/* Dark Mode Toggle */}
            <div className="mt-8">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-6 py-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
              >
                {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-10 md:mt-0"
          >
            <Image
              src="/product/women.png" // ✅ Replace with your image path
              alt="Healthcare AI"
              width={450}
              height={500}
              className="rounded-lg object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </App_layout>
  );
}
