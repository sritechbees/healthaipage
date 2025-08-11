'use client';

import { motion } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';

export default function LongTermHealth() {
  return (
    <section className="py-12 px-6 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800"
        >
          Better Long-Term Health Outcomes
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Reduce risks of complications by maintaining stable glucose patterns.
        </motion.p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full sm:w-96 border border-green-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full">
              <FaHeartbeat className="text-3xl" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Stable Glucose, Better Health
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Continuous glucose monitoring helps you keep levels steady, lowering the risk of future health issues and supporting a longer, healthier life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
