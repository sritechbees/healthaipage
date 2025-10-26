"use client";

import { motion } from "framer-motion";
import { FaHeartbeat, FaHospitalUser, FaBell } from "react-icons/fa";

const benefits = [
  {
    icon: <FaHeartbeat className="text-5xl text-pink-500" />,
    title: "Better Management of Chronic Conditions",
    text: "Empowers patients and providers to track long-term health trends efficiently.",
  },
  {
    icon: <FaHospitalUser className="text-5xl text-green-400" />,
    title: "Reduces Hospital Readmissions",
    text: "Real-time monitoring helps prevent emergencies through early detection.",
  },
  {
    icon: <FaBell className="text-5xl text-yellow-400" />,
    title: "Immediate Alerts for Abnormal Readings",
    text: "AI-powered alerts ensure timely intervention for critical health parameters.",
  },
];

export default function RemotePatientBenefits() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 to-black text-white overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
        >
          🌟 Benefits
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900/80 to-gray-800/60 p-8 rounded-2xl shadow-xl border border-gray-700 hover:shadow-yellow-500/20 hover:scale-105 transition-transform duration-500"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
