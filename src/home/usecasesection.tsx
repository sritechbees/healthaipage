'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useCases = [
  {
    title: '📊 Faster Diagnosis',
    description: 'AI-assisted tools reduce time to diagnose illnesses by processing complex data rapidly.',
  },
  {
    title: '🧬 Personalized Treatment',
    description: 'Treatment plans tailored to individual genetic and lifestyle data for better outcomes.',
  },
  {
    title: '🌐 Remote Healthcare Access',
    description: 'Telehealth and monitoring tools bridge the gap for rural and remote communities.',
  },
  {
    title: '⚙️ Efficient Workflows',
    description: 'Automation streamlines clinical operations and reduces admin overhead.',
  },
  {
    title: '🔍 Real-time Monitoring',
    description: 'Continuous patient data monitoring improves response times and decision-making.',
  },
];

export default function UseCasesSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
   <section
  className="w-full px-4 md:px-12 py-16 relative bg-gradient-to-r from-white via-blue-50 to-white overflow-hidden"
  style={{ backgroundImage: "url('/images/usecase-bg.jpg')" }} // Add this if you want to use inline image directly
>
  {/* Background image layer (optional, for better control) */}
  <div
    className="absolute inset-0 bg-[url('/background/teambg.jpg')] bg-cover bg-center"
    aria-hidden="true"
  ></div>

  {/* Content layer */}
  <div className="relative z-10">
    <h2
      data-aos="fade-up"
      className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative inline-block"
    >
      <span className="border-b-4 border-blue-400 pb-1">Use Cases & Benefits</span>
    </h2>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {useCases.map((item, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-blue-100 transition transform hover:scale-105 hover:shadow-blue-300"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
          <p className="text-gray-700 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
