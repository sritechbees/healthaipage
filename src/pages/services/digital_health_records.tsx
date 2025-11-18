"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/layout/app-alyout";
import Benefits from "@/common/benefits";

export default function DigitalHealthRecordsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ FIXED TYPE
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const features = [
    {
      title: "Secure Access",
      desc: "Every patient record is protected with end-to-end encryption, ensuring safe access for only authorized doctors and hospitals.",
      extra1: "Encrypted storage prevents unauthorized access.",
      extra2: "Role-based login ensures controlled access.",
      img: "/services/Secure Access.jpg",
      style: "bg-gradient-to-r from-blue-50 to-white",
      aos: "fade-up",
    },
    {
      title: "Seamless Sharing",
      desc: "Enable smooth transfer of health data between patients, doctors, and hospitals across multiple devices.",
      extra1: "Share instantly without delays.",
      extra2: "Available across all devices.",
      img: "/services/Seamless Sharing.jpg",
      style: "bg-gray-900 text-white",
      aos: "fade-left",
    },
    {
      title: "AI-Powered Insights",
      desc: "Use AI to scan records, detect anomalies, and assist doctors with predictive analysis for faster decision-making.",
      extra1: "AI flags unusual patterns in reports.",
      extra2: "Improves decision-making speed.",
      img: "/services/AI-Powered Insights.jpg",
      style: "relative bg-fixed bg-cover bg-center text-white",
      overlay: true,
      aos: "fade-right",
    },
    {
      title: "Multi-Device Sync",
      desc: "Access health records anytime, anywhere—mobile, tablet, or desktop—with secure synchronization.",
      extra1: "Data stays updated across devices.",
      extra2: "Offline mode supported in emergencies.",
      img: "/services/Patient Experience.jpg",
      style: "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",
      aos: "zoom-in",
    },
    {
      title: "Patient Empowerment",
      desc: "Give patients full control over their health data with transparent consent layers and easy access options.",
      extra1: "Patients decide who sees their data.",
      extra2: "Easy access using secure OTP.",
      img: "/services/Patient Empowerment.jpg",
      style: "bg-gradient-to-r from-purple-50 to-white",
      aos: "fade-up-right",
    },
    {
      title: "Compliance Ready",
      desc: "Aligned with HIPAA and global standards, ensuring legal and regulatory compliance in every interaction.",
      extra1: "Fully audit-ready for global standards.",
      extra2: "Automatic compliance updates.",
      img: "/services/Compliance Ready.jpg",
      style: "bg-black text-white",
      aos: "fade-down",
    },
  ];

  return (
    <App_layout>
      <div className="font-poppins w-full overflow-hidden">

        {/* Hero Section */}
        <section className="relative w-full h-[650px] mt-24 flex items-center justify-center text-center text-white overflow-hidden">
          <Image
            src="/services/DigitalHealthRecords1.jpg"
            alt="HealthAI Background"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative z-10 max-w-3xl px-4 md:px-6">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Digital Health Records
            </motion.h1>

            <p className="text-base md:text-lg mb-6">
              Enable secure data sharing to doctors and hospitals, powered by AI-driven insights.
            </p>

            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold inline-block"
            >
              Discover More
            </motion.a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="space-y-0">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`relative w-full min-h-[600px] md:h-[650px] flex items-center ${item.style} overflow-hidden`}
              data-aos={item.aos}
            >
              {/* Background Image for overlay sections */}
              {item.overlay && (
                <>
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/50" />
                </>
              )}

              <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8 relative z-10">
                
                {/* Text Section */}
                <div
                  className={`flex-1 text-center lg:text-left ${
                    idx % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                  }`}
                >
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{item.title}</h2>

                  <p className="text-base md:text-lg mb-4">{item.desc}</p>

                  {/* Expanded Lines */}
                  {expandedItems[idx] && (
                    <div className="text-sm md:text-base space-y-2 mb-4">
                      <p>{item.extra1}</p>
                      <p>{item.extra2}</p>
                    </div>
                  )}

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="inline-block px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-md hover:scale-105 transition"
                  >
                    {expandedItems[idx] ? "Show Less" : "Learn More"}
                  </button>
                </div>

                {/* Right image */}
                {!item.overlay && (
                  <div className="flex-1 relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                  </div>
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
