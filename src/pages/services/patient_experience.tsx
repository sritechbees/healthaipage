"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaWheelchair,
  FaDollarSign,
  FaMapSigns,
  FaVideo,
  FaChartLine,
} from "react-icons/fa";
import App_layout from "@/layout/app-alyout";

// PatientExperiencePage.jsx
// - Next.js + Tailwind + Framer Motion single-file page component
// - Uses the 'Poppins' font (add to globals: @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); and set font-family in tailwind or global.css)

export default function PatientExperiencePage() {
  const featureList = [
    {
      title: "Access Optimization",
      desc: "Reduce wait times and simplify appointment booking across channels.",
      icon: <FaWheelchair className="text-3xl" />,
    },
    {
      title: "Affordability Programs",
      desc: "Design sliding-scale pricing, subsidies and insurance navigation.",
      icon: <FaDollarSign className="text-3xl" />,
    },
    {
      title: "Care Navigation",
      desc: "Personalized care pathways and coordinator-led follow-ups.",
      icon: <FaMapSigns className="text-3xl" />,
    },
    {
      title: "Telehealth Integration",
      desc: "Seamless virtual visits, remote monitoring and secure messaging.",
      icon: <FaVideo className="text-3xl" />,
    },
    {
      title: "Feedback & Analytics",
      desc: "Collect real-time patient feedback and convert it into action.",
      icon: <FaChartLine className="text-3xl" />,
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
              Patient Experience
            </p>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Improve access — increase affordability — transform care experience
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              We design patient-centered solutions that lower barriers, streamline
              journeys and empower care teams with actionable insights.
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
              <strong>Impact snapshot:</strong> 30% reduction in average wait
              times · 22% increase in appointment completion.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Placeholder image - replace with your own hero/video */}
            <Image
              src="/services/Patient Experience.jpg"
              alt="Patient Experience illustration"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURES / FIVE TITLES */}
      <section id="features" className="container mx-auto px-6 lg:px-20 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Core services we deliver</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Solutions crafted to improve patient outcomes, operational efficiency
            and long-term sustainability.
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

              <a href="#" className="mt-4 inline-block text-sm font-medium text-yellow-600">
                Learn more →
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* DEEP DIVE SECTIONS (optional expanded content for each title) */}
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
              <p className="text-gray-600 max-w-xl">{f.desc} We help by
                implementing user-friendly booking flows, automated reminders, and
                support for low-connectivity environments.</p>

              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Prototype & test patient booking journeys</li>
                <li>Design subsidy & billing rules engine</li>
                <li>Integrate telehealth with EHRs and secure messaging</li>
              </ul>

              <a href="#contact" className="inline-block mt-4 px-4 py-2 border rounded-lg">
                Request a consultation
              </a>
            </div>

            <div className="relative w-full h-56 rounded-xl overflow-hidden shadow">
              <Image
                src={`/features/${f.title.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                alt={f.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(min-width:1024px) 33vw, 100vw"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to transform patient experience?</h3>
            <p className="mt-2 text-gray-300 max-w-xl">
              Tell us about your challenge and we’ll propose a focused pilot that
              delivers measurable improvements.
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
        © {new Date().getFullYear()} Your Organization — Patient Experience
      </footer>
    </main>
    </App_layout>
  );
}
