'use client';

import { motion } from 'framer-motion';
import { FaClinicMedical, FaChartLine, FaCapsules, FaLaptopMedical, FaBrain, FaHandHoldingHeart } from 'react-icons/fa';

const services = [
  {
    icon: <FaCapsules className="text-4xl text-white" />,
    title: 'Medical Product Trading',
    desc: 'Retail and wholesale of medical goods, prosthetics, equipment, and allied products through stores and e-commerce.',
    bg: 'bg-gradient-to-r from-indigo-500 to-blue-600',
  },
  {
    icon: <FaLaptopMedical className="text-4xl text-white" />,
    title: 'Healthcare Software Solutions',
    desc: 'Design and operation of remote monitoring, diagnostics, and patient engagement software for digital healthcare.',
    bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    icon: <FaChartLine className="text-4xl text-white" />,
    title: 'Medical Data Analytics',
    desc: 'Analyzing healthcare data for diagnosis accuracy, treatment acceleration, and clinical decision-making.',
    bg: 'bg-gradient-to-r from-green-500 to-teal-500',
  },
  {
    icon: <FaBrain className="text-4xl text-white" />,
    title: 'AI-Powered Health Insights',
    desc: 'Use of AI, ML, and emerging technologies for health analytics and improved patient outcomes.',
    bg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
  },
  {
    icon: <FaClinicMedical className="text-4xl text-white" />,
    title: 'Collaborations & Integration',
    desc: 'Partnerships with hospitals and healthcare bodies for medical device deployment and healthtech solutions.',
    bg: 'bg-gradient-to-r from-red-500 to-pink-600',
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl text-white" />,
    title: 'Research & Consultancy',
    desc: 'Providing R&D, consultancy, and development for next-gen healthcare technologies and services.',
    bg: 'bg-gradient-to-r from-sky-500 to-cyan-500',
  },
];

export default function PatientExperience() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          BeaverHealthAI LLP delivers innovation across healthcare trading, technology, data analytics, and partnerships.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl shadow-xl text-white p-6 ${service.bg}`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
