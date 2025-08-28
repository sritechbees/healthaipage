"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const useCases = [
  {
    title: "Faster Diagnosis",
    description:
      "AI-assisted tools reduce time to diagnose illnesses by processing complex data rapidly.",
    image: "/home/Faster Diagnosis.jpg",
  },
  {
    title: "Personalized Treatment",
    description:
      "Treatment plans tailored to individual genetic and lifestyle data for better outcomes.",
    image: "/home/Personalized Treatment.jpg",
  },
  {
    title: "Remote Healthcare Access",
    description:
      "Telehealth and monitoring tools bridge the gap for rural and remote communities.",
    image: "/home/Remote Healthcare Access.jpg",
  },
  {
    title: "Efficient Workflows",
    description:
      "Automation streamlines clinical operations and reduces admin overhead.",
    image: "/home/Efficient Workflows.jpg",
  },
  {
    title: "Real-time Monitoring",
    description:
      "Continuous patient data monitoring improves response times and decision-making.",
    image: "/home/Real-time Monitoring.jpg",
  },
  {
    title: "Preventive Healthcare",
    description:
      "AI-powered insights support early detection and proactive care strategies.",
    image: "/home/Preventive Healthcare.jpg",
  },
];

export default function UseCasesSection() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-r from-blue-950/80 via-black/70 to-blue-900/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Use Cases & Benefits
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how AI-powered healthcare solutions transform diagnosis,
            treatment, and patient care efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl shadow-xl overflow-hidden bg-gray-900/70 backdrop-blur-md border border-gray-700"
            >
              {/* Image */}
              <div className="relative w-full h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Title (always visible on image bottom) */}
             <h3 className="text-white font-semibold text-center p-4 text-lg">{item.title}</h3>

              {/* Popup Content */}
              <div className="absolute bottom-0 left-0 right-0 h-[70%] translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                <div className="h-full w-full bg-gradient-to-t from-blue-950 via-blue-900/95 to-transparent rounded-t-[30%] p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-3 text-sm">
                    {item.description}
                  </p>
                  <button className="mt-5 flex items-center justify-center gap-2 text-cyan-400 font-semibold hover:text-white transition-colors">
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
