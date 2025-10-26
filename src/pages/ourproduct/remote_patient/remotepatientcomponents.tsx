"use client";

import App_layout from "@/layout/app-alyout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import {
  FaHeartbeat,
  FaClipboardList,
  FaTabletAlt,
  FaMobileAlt,
} from "react-icons/fa";
import ConditionsManaged from "./conditions_managed";
import RemotePatientBenefits from "./benefitssection";
import RemotePatientMonitoring from "@/common/remote_patientmonitoring";
import ImageHoverTextSection from "@/common/imagehovertextsection";

const components = [
  {
    icon: <FaHeartbeat className="text-4xl text-pink-500" />,
    title: "Wearable Devices",
    text: "Track vitals in real-time using advanced wearable IoT health sensors.",
    image: "/product/Wearable ECG Devices.jpg",
  },
  {
    icon: <FaClipboardList className="text-4xl text-blue-400" />,
    title: "Health Data",
    text: "Secure and actionable insights derived from continuous patient data streams.",
    image: "/product/triage-ai.jpg",
  },
  {
    icon: <FaTabletAlt className="text-4xl text-green-400" />,
    title: "Monitoring Platform",
    text: "Centralized AI-powered dashboard for healthcare providers and clinics.",
    image: "/product/Monitoring.jpg",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-yellow-400" />,
    title: "Patient App",
    text: "Real-time alerts and easy access for patients to track their health progress.",
    image: "/product/app.jpg",
  },
];

export default function RemotePatientComponents() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <App_layout>
      {/* 🔹 Video Hero Section */}
     

      {/* 🔹 Key Components Section */}
      <section className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white font-poppins overflow-hidden">
        <div className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white font-poppins overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 blur-[150px]" />
        </div>
        <RemotePatientMonitoring />
        <ImageHoverTextSection/>
      </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[150px] rounded-full -translate-x-1/2" />
        </div>

        {/* Section Header */}
        <div className="relative z-10 text-center mb-16 mt-16 px-4">
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400"
          >
            🛠️ Key Components
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore the core building blocks that power intelligent remote patient
            monitoring.
          </p>
        </div>

        {/* Component Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-20">
          {components.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-40 mb-5 overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-3">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-yellow-400 text-center mb-2">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-gray-300 text-center leading-relaxed">
                {item.text}
              </p>

              {/* Floating Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/0 via-transparent to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Animated Sections */}
      <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-pink-500/5 blur-3xl" />
        <div data-aos="fade-up">
          <ConditionsManaged />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <RemotePatientBenefits />
        </div>
      </div>
    </App_layout>
  );
}
