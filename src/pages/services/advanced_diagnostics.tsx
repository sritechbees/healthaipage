"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  FaMicroscope,
  FaBrain,
  FaChartLine,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaRobot,
  FaDatabase,
} from "react-icons/fa";

export default function AdvancedDiagnosticsPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const services = [
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
    {
      title: "Automation & Robotics",
      desc: "Leverage AI-driven automation for repetitive workflows and robotic-assisted diagnostics.",
      icon: <FaRobot className="text-3xl" />,
    },
    {
      title: "Data Integration",
      desc: "Seamlessly connect EHR, LIS, PACS, and IoT devices into a unified diagnostic pipeline.",
      icon: <FaDatabase className="text-3xl" />,
    },
  ];

  return (
    <main className="min-h-screen font-poppins text-gray-800">
      {/* HERO */}
      <section className="relative w-full h-[90vh] flex items-center">
        <Image
          src="/hero/advanced-diagnostics-hero.jpg"
          alt="Advanced Diagnostics"
          fill
          priority
          style={{ objectFit: "cover" }}
          className="-z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-10" />

        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-sm font-semibold text-gray-900"
            >
              Advanced Diagnostics
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow"
            >
              AI-powered precision to transform healthcare outcomes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-gray-100 max-w-xl"
            >
              From AI-assisted imaging to predictive analytics, we integrate
              explainable, privacy-first tools that elevate diagnostic accuracy
              and reduce turnaround time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium shadow hover:opacity-90"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="border border-white/40 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20"
              >
                Talk to us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto px-6 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Core Services</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Seven advanced capabilities designed to accelerate diagnostics and
            improve clinical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={s.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-gray-600">{s.desc}</p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm font-medium text-yellow-600"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS STRIP */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Ingest", "Analyze", "Decide"].map((step, i) => (
              <div
                key={step}
                data-aos="zoom-in-up"
                data-aos-delay={i * 150}
                className="p-6 bg-white rounded-2xl border shadow-md"
              >
                <div className="text-sm text-gray-500">Step {i + 1}</div>
                <div className="text-xl font-semibold mt-1">{step}</div>
                <p className="mt-2 text-gray-600">
                  {i === 0 &&
                    "Connect EHR/PACS/LIS, de-identify, and validate data quality."}
                  {i === 1 &&
                    "Apply models for detection, segmentation, and risk scoring."}
                  {i === 2 &&
                    "Deliver explainable insights inside existing workflows."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-gray-900 text-white py-16 text-center md:text-left"
      >
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold">
              Ready to upgrade diagnostics?
            </h3>
            <p className="mt-3 text-gray-300 max-w-xl">
              Tell us about your modality mix and workflow—we&apos;ll propose a
              focused pilot with measurable KPIs.
            </p>
          </div>
          <a
            href="mailto:hello@yourorg.com"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} Your Organization — Advanced Diagnostics
      </footer>
    </main>
  );
}
