"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/layout/app-alyout";
import Benefits from "@/common/benefits";

export default function DataPrivacySecurityPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // ⭐ Track which "Learn More" item is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const features = [
    {
      title: "Blockchain-Based Security",
      desc: "Implement blockchain to ensure tamper-proof medical records and secure transactions.",
      more: "Blockchain ensures that no unauthorized person can modify the medical data. Every transaction is cryptographically secured.",
      img: "/services/Blockchain-Based Security.jpg",
      aos: "fade-right",
      align: "left",
    },
    {
      title: "Consent Layer Management",
      desc: "Empower patients with control over data access using layered consent protocols.",
      more: "Patients can easily grant, modify, and revoke access to their data using a transparent consent dashboard.",
      img: "/services/Consent Layer Management.jpg",
      aos: "fade-left",
      align: "right",
    },
    {
      title: "HIPAA & GDPR Compliance",
      desc: "Guarantee global compliance with healthcare regulations and patient privacy laws.",
      more: "Our platform ensures all workflows follow HIPAA & GDPR policy requirements including access logs, encryption, and consent.",
      img: "/services/HIPAA & GDPR Compliance.jpg",
      aos: "zoom-in",
      align: "center",
    },
    {
      title: "Advanced Encryption",
      desc: "Protect sensitive data with multi-layer encryption and secure key management.",
      more: "End-to-end encryption ensures data is unreadable during storage and transmission. Secure key vaults protect access.",
      img: "/services/Advanced Encryption.jpg",
      aos: "fade-up-right",
      align: "left",
    },
    {
      title: "Audit & Monitoring",
      desc: "Continuous monitoring and auditing to detect threats and maintain compliance.",
      more: "AI monitors system activity, flags anomalies, and generates compliance-ready audit logs.",
      img: "/services/Audit & Monitoring.jpg",
      aos: "fade-up-left",
      align: "right",
    },
    {
      title: "Patient Data Sovereignty",
      desc: "Ensure patients retain ownership and control of their medical data with transparent access layers.",
      more: "Patients can view, control, and track who accessed their health data using a sovereignty dashboard.",
      img: "/services/Patient Data Sovereignty.jpg",
      aos: "fade-down",
      align: "center",
    },
  ];

  return (
    <App_layout>
      <div className="font-poppins w-full overflow-x-hidden">

        {/* HERO SECTION */}
        <section
          className="relative w-full min-h-[70vh] md:min-h-[100vh] flex items-center justify-center text-center text-white overflow-hidden"
          aria-label="Data Privacy & Security Hero"
        >
          <Image
            src="/services/DataPrivacySecurity.jpg"
            alt="Data Privacy & Security"
            fill
            className="object-cover brightness-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />

          <div className="relative z-10 max-w-3xl px-4 md:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Data Privacy & Security
            </motion.h1>

            <p className="text-base md:text-lg text-white/90 mb-6">
              Build trust and compliance using Blockchain and consent layers.
            </p>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.04 }}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold shadow-lg"
            >
              Explore Features
            </motion.a>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="relative">
          {features.map((item, idx) => (
            <div
              key={idx}
              data-aos={item.aos}
              className="relative w-full min-h-[600px] md:min-h-[650px] flex items-center justify-center overflow-hidden"
            >
              {/* BACKGROUND IMAGE */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/45" />
              </div>

              {/* CONTENT */}
              <div
                className={`relative z-10 max-w-4xl w-full px-6 md:px-8 ${
                  item.align === "left"
                    ? "text-left"
                    : item.align === "right"
                    ? "text-right"
                    : "text-center"
                }`}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white drop-shadow-sm">
                  {item.title}
                </h2>

                <p className="text-sm md:text-lg text-white/90 mb-5">
                  {item.desc}
                </p>

                {/* LEARN MORE BUTTON (with expand logic) */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="inline-block px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-md"
                >
                  {expandedIndex === idx ? "Hide Details" : "Learn More"}
                </button>

                {/* EXPANDED PARAGRAPH */}
                {expandedIndex === idx && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-white/90 text-base md:text-lg bg-black/30 p-4 rounded-lg backdrop-blur"
                  >
                    {item.more}
                  </motion.p>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

      <Benefits />
    </App_layout>
  );
}
