'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DigitalHealthRecordsPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Digital Health Records
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enable secure data sharing to doctors and hospitals.
          </p>
        </motion.div>

        {/* Image */}
        <div className="relative w-full h-96 mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/home/services1.jpg" // 🔄 replace with your actual image
            alt="Digital Health Records"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 leading-relaxed text-lg bg-white p-8 rounded-2xl shadow-md mb-12"
        >
          <p className="mb-4">
            Our <strong>Digital Health Records</strong> solution ensures
            healthcare providers and patients have secure, interoperable, and
            accessible medical records. By leveraging <em>blockchain
            technology</em> and <em>advanced encryption</em>, we make sure that
            sensitive health data remains protected and can only be shared with
            authorized professionals.
          </p>
          <p className="mb-4">
            Doctors and hospitals can securely exchange records, enabling faster
            diagnoses, more informed treatment decisions, and reduced
            duplication of tests. Patients gain control of their medical
            history, empowering them with transparency and trust.
          </p>
          <p>
            Our system is fully compliant with global healthcare data standards
            like <strong>HL7 FHIR</strong> and <strong>HIPAA</strong>,
            guaranteeing both interoperability and regulatory adherence.
          </p>
        </motion.div>

        {/* Back to Services Button */}
        <div className="text-center">
          <Link href="/services">
            <button className="px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
              ← Back to Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
