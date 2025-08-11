'use client';

import { motion } from 'framer-motion';
import { FaUserMd, FaUserFriends } from 'react-icons/fa';

export default function EmpoweringPatientsDoctors() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Icon Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-4 mb-6"
        >
          <FaUserFriends className="text-indigo-600 text-5xl" />
          <FaUserMd className="text-pink-500 text-5xl" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Empowering Patients & Doctors
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Share real-time glucose data with your healthcare team for proactive, 
          personalized care. Enable faster interventions, better decision-making, 
          and improved patient confidence.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium shadow-lg hover:shadow-xl transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
