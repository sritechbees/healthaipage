"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLock,
  FaHospitalUser,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaFileMedical,
} from "react-icons/fa";
import App_layout from "@/layout/app-alyout";

// DigitalHealthRecordsPage.jsx
// Next.js + Tailwind + Framer Motion page component

export default function DigitalHealthRecordsPage() {
  const featureList = [
    {
      title: "Secure Data Sharing",
      desc: "Enable encrypted medical record sharing between doctors and hospitals.",
      icon: <FaLock className="text-3xl" />,
    },
    {
      title: "Patient-Centric Access",
      desc: "Give patients control over who can access their records anytime.",
      icon: <FaHospitalUser className="text-3xl" />,
    },
    {
      title: "Cloud Storage",
      desc: "Reliable, scalable cloud infrastructure for storing health data.",
      icon: <FaCloudUploadAlt className="text-3xl" />,
    },
    {
      title: "Compliance & Security",
      desc: "HIPAA/GDPR compliant architecture with strict privacy controls.",
      icon: <FaShieldAlt className="text-3xl" />,
    },
    {
      title: "Unified Health Records",
      desc: "Aggregate data across labs, clinics, and hospitals into one record.",
      icon: <FaFileMedical className="text-3xl" />,
    },
  ];

  return (
    <App_layout>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-poppins text-gray-800">
        {/* HERO */}
        <section className="container mx-auto px-6 lg:px-20 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-sm font-semibold text-gray-900 w-max">
                Digital Health Records
              </p>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Enable secure data sharing to doctors and hospitals
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                Our Digital Health Records system ensures seamless, secure, and
                real-time sharing of patient information, empowering doctors,
                hospitals, and patients alike.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:opacity-95"
                >
                  Get started
                </a>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-lg font-medium hover:bg-gray-100"
                >
                  Explore services
                </a>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <strong>Impact snapshot:</strong> 40% faster record sharing · 25%
                reduction in duplicate tests.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/services/Digital Health Records.jpg"
                alt="Digital Health Records illustration"
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width:1024px) 50vw, 100vw"
              />
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="container mx-auto px-6 lg:px-20 py-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Core services we deliver</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Solutions designed to enhance trust, improve interoperability, and
              safeguard patient health data across the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((f, idx) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>

                <p className="mt-3 text-gray-600">{f.desc}</p>

                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-yellow-600"
                >
                  Learn more →
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        {/* DEEP DIVE */}
        <section className="container mx-auto px-6 lg:px-20 py-12 space-y-12">
          {featureList.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold">{f.title}</h3>
                <p className="text-gray-600 max-w-xl">
                  {f.desc} Our solutions are designed with robust encryption,
                  user-friendly access controls, and seamless integrations with
                  hospital systems.
                </p>

                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                  <li>End-to-end encrypted data exchange</li>
                  <li>Role-based access for doctors & patients</li>
                  <li>Cloud-native storage and disaster recovery</li>
                </ul>

                <a
                  href="#contact"
                  className="inline-block mt-4 px-4 py-2 border rounded-lg"
                >
                  Request a consultation
                </a>
              </div>

              <div className="relative w-full h-56 rounded-xl overflow-hidden shadow">
                <Image
                  src={`/features/${f.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.jpg`}
                  alt={f.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width:1024px) 33vw, 100vw"
                />
              </div>
            </motion.div>
          ))}
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">
                Ready to implement secure health records?
              </h3>
              <p className="mt-2 text-gray-300 max-w-xl">
                Share your requirements with us, and we’ll build a tailored
                digital records solution for your hospital or practice.
              </p>
            </div>

            <a
              href="mailto:hello@yourorg.com"
              className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow"
            >
              Contact us
            </a>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 py-8">
          © {new Date().getFullYear()} Your Organization — Digital Health Records
        </footer>
      </main>
    </App_layout>
  );
}
