"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaMicroscope,
  FaBrain,
  FaChartLine,
  FaShieldAlt,
  FaCloudUploadAlt,
} from "react-icons/fa";

// Advanced Diagnostics — Next.js + Tailwind + Framer Motion single-file page
// Notes: Ensure 'Poppins' font is loaded in your global CSS. Place images in /public.

export default function AdvancedDiagnosticsPage() {
  const features = [
    {
      title: "AI-Assisted Imaging",
      desc: "Detect anomalies in X-ray, CT, and MRI with model-aided triage and scoring.",
      icon: <FaMicroscope className="text-3xl" />,
    },
    {
      title: "Predictive Analytics",
      desc: "Risk stratification and outcome prediction from multi-modal clinical data.",
      icon: <FaChartLine className="text-3xl" />,
    },
    {
      title: "Decision Support",
      desc: "Explainable suggestions embedded inside your workflow and PACS/EHR.",
      icon: <FaBrain className="text-3xl" />,
    },
    {
      title: "Data Privacy & Security",
      desc: "De-identification, role-based access, and audit trails for compliance.",
      icon: <FaShieldAlt className="text-3xl" />,
    },
    {
      title: "Cloud & Edge Ready",
      desc: "Deploy in hospital data centers or on secure cloud with edge accelerators.",
      icon: <FaCloudUploadAlt className="text-3xl" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white font-poppins text-gray-800">
      {/* HERO with background image */}
      <section className="relative w-full h-[88vh] flex items-center">
        <Image
          src="/hero/advanced-diagnostics-hero.jpg" // 👉 replace with your image in /public/hero/
          alt="Advanced Diagnostics Background"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="-z-10"
        />
        {/* overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent -z-10" />

        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-2xl text-white">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-sm font-semibold text-gray-900 w-max"
            >
              Advanced Diagnostics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3 text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow"
            >
              Enhance precision and speed by analyzing data using AI.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-5 text-lg text-gray-100 max-w-xl"
            >
              From AI-assisted imaging to predictive analytics, we integrate
              explainable, privacy-first tools that elevate diagnostic accuracy
              and reduce turnaround time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:opacity-95"
              >
                Explore features
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-lg font-medium hover:bg-white/20"
              >
                Talk to us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container mx-auto px-6 lg:px-20 py-14">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">What we deliver</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Five core capabilities to accelerate diagnostic workflows and improve
            clinical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{f.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-yellow-600">
                Learn more →
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SIMPLE PROCESS STRIP */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Ingest", "Analyze", "Decide"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="p-6 bg-white rounded-2xl border shadow-sm"
              >
                <div className="text-sm text-gray-500">Step {i + 1}</div>
                <div className="text-xl font-semibold mt-1">{step}</div>
                <p className="mt-2 text-gray-600">
                  {i === 0 && "Connect EHR/PACS/LIS, de-identify, and validate data quality."}
                  {i === 1 && "Apply models for detection, segmentation, and risk scoring."}
                  {i === 2 && "Deliver explainable insights inside existing workflows."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to upgrade diagnostics?</h3>
            <p className="mt-2 text-gray-300 max-w-xl">
              Tell us about your modality mix and workflow—we'll propose a focused
              pilot with measurable KPIs.
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
        © {new Date().getFullYear()} Your Organization — Advanced Diagnostics
      </footer>
    </main>
  );
}
