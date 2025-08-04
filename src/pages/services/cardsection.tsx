'use client';

import Benefits from '@/common/benefits';
import HealthAIFAQ from '@/common/faq';
import TeamSection from '@/common/meetourteam';
import Services from '@/common/services';
import App_layout from '@/layout/app-alyout';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Patient Experience',
    description: 'Improve access and affordability.',
    image: '/home/services1.jpg',
  },
  {
    title: 'Advanced Diagnostics',
    description: 'Enhance precision and speed by analyzing data using AI.',
    image: '/home/services1.jpg',
  },
  {
    title: 'Digital Health Records',
    description: 'Enable secure data sharing to doctors and hospitals.',
    image: '/home/services1.jpg',
  },
  {
    title: 'Remote Monitoring',
    description: 'Extend care beyond hospital walls using medical devices and IoT.',
    image: '/home/services1.jpg',
  },
  {
    title: 'Doctor Enablement',
    description: 'Streamline clinical workflows with AI assistants and voice-to-text EMR.',
    image: '/home/services1.jpg',
  },
  {
    title: 'Data Privacy & Security',
    description: 'Build trust and compliance using Blockchain and consent layers.',
    image: '/home/services1.jpg',
  },
];

export default function ServicesCard() {
  return (
    <App_layout>
      <Services/>
      <Benefits/>
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 mt-12">
        <div className="max-w-7xl mx-auto text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our HealthAI Services
          </h2>
        
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Explore how technology is transforming the future of healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group bg-gray-200 rounded-lg shadow-lg overflow-hidden h-72"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover absolute z-0 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 transform group-hover:-translate-y-64 transition-transform duration-500 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-950 text-center mt-40 transition-all duration-500">
                  {service.title}
                </h3>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 bg-opacity-10 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm text-center mb-4">
                  {service.description}
                </p>
                <button className="mt-2 px-4 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300">
                  View Service
                </button>
              </div>

              {/* Top Reveal Ribbon */}
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-b-full -translate-y-6 group-hover:translate-y-0 transition-transform duration-300 z-20" />
            </motion.div>
          ))}
        </div>
      </section>
      <TeamSection/>
      <HealthAIFAQ/>
      
     
    </App_layout>
  );
}
