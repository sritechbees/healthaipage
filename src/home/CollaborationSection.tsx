'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const partners = [
  {
    name: 'City Hospital',
    logo: '/home/City Hospital.jpg',
    type: 'Clinic',
  },
  {
    name: 'LabX Diagnostics',
    logo: '/partners/diagnostic1.png',
    type: 'Diagnostic Center',
  },
  {
    name: 'Govt Health Org',
    logo: '/home/City Hospital.jpg',
    type: 'Government Body',
  },
  {
    name: 'AI Care Clinic',
    logo: '/partners/hospital2.png',
    type: 'Clinic',
  },
  {
    name: 'RapidTest Labs',
    logo: '/home/City Hospital.jpg',
    type: 'Diagnostic Center',
  },
  {
    name: 'Public Health Dept',
    logo: '/partners/govt2.png',
    type: 'Government Body',
  },
];

export default function CollaborationSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/teambgopsit.jpg" // Replace with your background image path
          alt="Background"
          fill
          className="object-cover object-center"
        />
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0"></div>
      </div>

     
      {/* Content */}
      <div className="relative z-20 pt-24 pb-20 px-4 md:px-12">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-white mb-10 relative inline-block"
        >
          <span className="border-b-4 border-blue-400 pb-1">
            Collaboration & Partnerships
          </span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center bg-blue-50 p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-24 h-24 relative mb-3">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-blue-700 font-semibold text-sm text-center">{partner.name}</p>
              <span className="text-xs text-gray-500">{partner.type}</span>
            </div>
          ))}
        </div>
      </div>

     
    </section>
  );
}
