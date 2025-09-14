"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/layout/app-alyout";
import Benefits from "@/common/benefits";

export default function RemoteMonitoringPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "IoT-Connected Devices",
      desc: "Seamlessly connect wearable devices, smart sensors, and hospital equipment to track patient health in real-time.",
      img: "/services/IoT-Connected Devices.jpg",
      style: "bg-gradient-to-r from-blue-50 to-white",
      aos: "fade-up",
    },
    {
      title: "Real-Time Alerts",
      desc: "Doctors and caregivers receive instant notifications when vital signs cross thresholds, enabling timely interventions.",
      img: "/services/Real-Time Alerts.jpg",
      style: "bg-gray-900 text-white",
      aos: "fade-left",
    },
    {
      title: "AI Health Dashboard",
      desc: "Centralized AI-driven dashboards give doctors a complete view of patient health across multiple devices and locations.",
      img: "/services/AI Health Dashboard.jpg",
      style: "relative bg-fixed bg-cover bg-center text-white",
      overlay: true,
      aos: "fade-right",
    },
    {
      title: "Chronic Care Support",
      desc: "Patients with chronic illnesses get continuous support and monitoring from home, reducing hospital visits.",
      img: "/services/Chronic Care Support.jpg",
      style: "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",
      aos: "zoom-in",
    },
    {
      title: "Seamless Data Integration",
      desc: "All device data syncs into digital health records, ensuring a single source of truth for patient care.",
      img: "/services/Seamless Data Integration.jpg",
      style: "bg-gradient-to-r from-purple-50 to-white",
      aos: "fade-up-right",
    },
    {
      title: "Scalable Remote Care",
      desc: "Designed for mass deployment, empowering hospitals and clinics to extend care to rural and underserved regions.",
      img: "/services/Scalable Remote Care.jpg",
      style: "bg-black text-white",
      aos: "fade-down",
    },
  ];

  return (
    <App_layout>
      <div className="font-poppins overflow-hidden">
        {/* Hero Section */}
        <section className="relative w-full min-h-[650px] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
          <Image
            src="/services/RemoteMonitoring.jpg"
            alt="Remote Monitoring"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative z-10 max-w-3xl px-6">
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Remote Monitoring
            </motion.h1>
            <p className="text-base md:text-lg mb-6">
              Extend care beyond hospital walls using medical devices and IoT.
            </p>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Explore Features
            </motion.a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="space-y-0 overflow-hidden">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`relative w-full min-h-[650px] flex items-center overflow-hidden ${item.style}`}
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

              <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                {/* Text */}
                <div
                  className={`flex-1 ${
                    idx % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6">{item.desc}</p>
                  <a
                    href="#"
                    className="inline-block px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg shadow-md hover:scale-105 transition"
                  >
                    Learn More
                  </a>
                </div>

                {/* Image (only for non-overlay sections) */}
                {!item.overlay && (
                  <div className="flex-1 relative w-full h-64 md:h-96">
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
      <Benefits/>
    </App_layout>
    
  );
}
