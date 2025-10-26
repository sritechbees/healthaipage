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
    <section className="relative w-full py-16 bg-gradient-to-r from-gray-100 via-white to-gray-200 overflow-hidden">
      {/* Smokey Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gray-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gray-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-gray-200/50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Use Cases & Benefits
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
            Discover how AI-powered healthcare solutions transform diagnosis,
            treatment, and patient care efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {useCases.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl shadow-lg overflow-hidden bg-white/70 backdrop-blur-md border border-gray-300 hover:shadow-2xl transition-shadow duration-500"
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

              {/* Title always visible */}
              <h3 className="text-gray-800 font-semibold text-center p-4 text-lg">
                {item.title}
              </h3>

              {/* Popup Content */}
              <div className="absolute bottom-0 left-0 right-0 h-[70%] translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                <div className="h-full w-full bg-gradient-to-t from-white via-gray-100/95 to-transparent rounded-t-[30%] p-8 flex flex-col items-center justify-center text-center shadow-inner">
                  <h3 className="text-xl font-bold text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mt-3 text-sm">
                    {item.description}
                  </p>
                  <button className="mt-5 flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
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
