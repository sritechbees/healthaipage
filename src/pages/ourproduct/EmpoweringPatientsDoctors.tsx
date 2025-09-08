'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function EmpoweringPatientsDoctors() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            Empowering <span className="text-blue-600">Patients</span> &{" "}
            <span className="text-purple-600">Doctors</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            HealthAI is reshaping healthcare by giving{" "}
            <span className="font-semibold text-gray-900">patients ownership</span>{" "}
            of their health data and enabling{" "}
            <span className="font-semibold text-gray-900">doctors with AI-powered tools</span>{" "}
            for more accurate, personalized, and faster care.
          </p>
          <ul className="space-y-5 text-gray-800">
            <li
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>
              <p><strong>Patient Empowerment:</strong> Easy access to health records and secure sharing.</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-indigo-500 rounded-full mt-2"></span>
              <p><strong>Doctor Enablement:</strong> AI assistants, workflow automation, and predictive diagnostics.</p>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 bg-purple-500 rounded-full mt-2"></span>
              <p><strong>Better Outcomes:</strong> Collaboration builds trust, transparency, and healthier lives.</p>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div
          data-aos="fade-left"
          className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/product/empowering.jpg" // 🔄 Replace with your image
            alt="Empowering Patients & Doctors"
            fill
            className="object-cover hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
