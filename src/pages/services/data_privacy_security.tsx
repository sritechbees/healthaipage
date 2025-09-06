'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DataPrivacyPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          Data Privacy & Security
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10">
          Build trust and compliance using Blockchain and consent layers.
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-80 mb-10 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/home/data-privacy.jpg" // 🔄 Replace with your image path
            alt="Data Privacy & Security"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-md text-left text-gray-700 leading-relaxed"
        >
          <p className="mb-4">
            Protecting sensitive health data is at the core of patient trust. Our{" "}
            <strong>Data Privacy & Security</strong> solutions integrate{" "}
            <em>Blockchain technology</em> and advanced consent management to
            ensure secure, tamper-proof, and transparent information sharing.
          </p>
          <p>
            With compliance frameworks like HIPAA and GDPR in mind, our platform
            enables healthcare providers to safeguard patient information while
            maintaining seamless access for authorized stakeholders.
          </p>
        </motion.div>

        {/* Back Button */}
        <div className="mt-8">
          <Link href="/services">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
              ← Back to Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
