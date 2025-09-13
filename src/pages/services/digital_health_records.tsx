"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/layout/app-alyout";

export default function DigitalHealthRecordsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Secure Access",
      desc: "Every patient record is protected with end-to-end encryption, ensuring safe access for only authorized doctors and hospitals.",
      img: "/services/Secure Access.jpg",
      style: "bg-gradient-to-r from-blue-50 to-white",
      aos: "fade-up",
    },
    {
      title: "Seamless Sharing",
      desc: "Enable smooth transfer of health data between patients, doctors, and hospitals across multiple devices.",
      img: "/services/Seamless Sharing.jpg",
      style: "bg-gray-900 text-white",
      aos: "fade-left",
    },
    {
      title: "AI-Powered Insights",
      desc: "Use AI to scan records, detect anomalies, and assist doctors with predictive analysis for faster decision-making.",
      img: "/services/AI-Powered Insights.jpg",
      style: "relative bg-fixed bg-cover bg-center text-white",
      overlay: true,
      aos: "fade-right",
    },
    {
      title: "Multi-Device Sync",
      desc: "Access health records anytime, anywhere—mobile, tablet, or desktop—with secure synchronization.",
      img: "/services/Patient Experience.jpg",
      style: "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",
      aos: "zoom-in",
    },
    {
      title: "Patient Empowerment",
      desc: "Give patients full control over their health data with transparent consent layers and easy access options.",
      img: "/services/Patient Empowerment.jpg",
      style: "bg-gradient-to-r from-purple-50 to-white",
      aos: "fade-up-right",
    },
    {
      title: "Compliance Ready",
      desc: "Aligned with HIPAA and global standards, ensuring legal and regulatory compliance in every interaction.",
      img: "/services/Compliance Ready.jpg",
      style: "bg-black text-white",
      aos: "fade-down",
    },
  ];

  return (
    <App_layout>
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative w-full h-[650px] mt-24 flex items-center justify-center text-center text-white">
        <Image
          src="/services/DigitalHealthRecords1.jpg"
          alt="HealthAI Background"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Digital Health Records
          </motion.h1>
          <p className="text-lg mb-6">
            Enable secure data sharing to doctors and hospitals, powered by AI-driven insights.
          </p>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold"
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
            className={`relative w-full h-[650px] flex items-center ${item.style}`}
            data-aos={item.aos}
          >
            {/* Background Image with optional overlay */}
            {item.overlay && (
              <>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
              </>
            )}

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
              {/* Text */}
              <div
                className={`flex-1 ${
                  idx % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg mb-6">{item.desc}</p>
                <a
                  href="#"
                  className="inline-block px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-md hover:scale-105 transition"
                >
                  Learn More
                </a>
              </div>

              {/* Image (only for non-overlay sections) */}
              {!item.overlay && (
                <div className="flex-1 relative w-full h-96">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
    </App_layout>
  );
}
