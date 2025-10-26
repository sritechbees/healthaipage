"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ConditionProps {
  title: string;
  text: string;
  image: string;
}

const conditions: ConditionProps[] = [
  {
    title: "Hypertension",
    text: "Monitor and manage blood pressure in real-time with intelligent health alerts.",
    image: "/product/Hypertension.jpg",
  },
  {
    title: "Diabetes",
    text: "Track glucose levels and receive personalized insights to improve daily health routines.",
    image: "/product/Diabetes.jpg",
  },
  {
    title: "Heart Disease",
    text: "AI-driven monitoring detects irregularities early for better heart care.",
    image: "/product/Heart Disease.jpg",
  },
  {
    title: "Asthma",
    text: "Monitor symptoms and environmental triggers for proactive asthma management.",
    image: "/product/Asthma.jpg",
  },
];

export default function ConditionsManaged() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-gray-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          🧠 Conditions Managed
        </h2>

        {conditions.map((item, index) => (
          <ScrollRevealCard
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

function ScrollRevealCard({
  title,
  text,
  image,
  reverse,
}: ConditionProps & { reverse?: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-4"
      >
        <h3 className="text-3xl font-semibold text-yellow-400">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <div className="relative w-full h-72 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>
    </div>
  );
}
