"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/layout/app-alyout";
import Benefits from "@/common/benefits";

export default function DoctorEnablementParallax() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // ✅ Track which feature is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const features = [
    {
      title: "AI Clinical Assistants",
      desc: "AI-powered assistants help doctors surface insights in real time.",
      more: "These assistants work alongside clinicians by analyzing large volumes of medical data instantly.",
      img: "/services/AI Clinical Assistants.jpg",
      aos: "fade-up",
      align: "left",
    },
    {
      title: "Voice-to-Text EMR",
      desc: "Conversations auto-transcribed into structured medical records.",
      more: "Doctors can speak naturally while AI converts it to EMR entries with high accuracy.",
      img: "/services/Voice-to-Text EMR.jpg",
      aos: "fade-right",
      align: "right",
    },
    {
      title: "Workflow Automation",
      desc: "Repetitive tasks automated so doctors focus on care.",
      more: "This reduces administrative burden and increases time with patients.",
      img: "/services/Workflow Automation.jpg",
      aos: "fade-left",
      align: "center",
    },
    {
      title: "Decision Support",
      desc: "Real-time AI suggestions based on patient history.",
      more: "AI continuously evaluates clinical patterns and highlights key risk indicators.",
      img: "/services/Decision Support.jpg",
      aos: "zoom-in",
      align: "left",
    },
    {
      title: "Seamless Collaboration",
      desc: "Secure communication between specialists & hospitals.",
      more: "AI ensures faster referrals and better case coordination.",
      img: "/services/Seamless Collaboration.jpg",
      aos: "fade-up-left",
      align: "right",
    },
    {
      title: "Faster Documentation",
      desc: "AI transcriptions reduce paperwork burden instantly.",
      more: "Doctors save hours each week with automated medical summaries.",
      img: "/services/Faster Documentation.jpg",
      aos: "fade-down",
      align: "center",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <App_layout>
      <div className="font-poppins bg-gradient-to-b from-cyan-50 via-white to-blue-100 overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative w-full min-h-[100vh] flex items-center justify-center text-center text-white overflow-hidden">
          <Image
            src="/services/Doctor Enablement1.jpg"
            alt="Doctor Enablement"
            fill
            className="object-cover brightness-50 mt-24"
          />

          <div className="relative z-10 max-w-3xl px-6 mt-24">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            >
              Doctor Enablement
            </motion.h1>

            <p className="text-base md:text-lg mb-6 text-white/90">
              Streamline workflows with AI assistants and voice-to-text EMR.
            </p>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              Explore Features
            </motion.a>
          </div>
        </section>

        {/* FEATURE SECTIONS */}
        <section id="features" className="relative">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden"
              data-aos={item.aos}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div
                className={`relative z-10 max-w-3xl px-6 md:px-12 ${
                  item.align === "left"
                    ? "text-left"
                    : item.align === "right"
                    ? "text-right"
                    : "text-center"
                }`}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
                  {item.title}
                </h2>

                <p className="text-base md:text-lg text-white/90">
                  {item.desc}
                </p>

                {/* Learn More Button */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg"
                >
                  {expandedIndex === idx ? "Hide Details" : "Learn More"}
                </button>

                {/* EXPANDED PARAGRAPH */}
                {expandedIndex === idx && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
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
