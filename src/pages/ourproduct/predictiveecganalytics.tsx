'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PredictiveECGAnalytics() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gray-950 text-white">
      {/* Background with abstract gradient + grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/ecg/grid-pattern.png')] bg-cover opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-14">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Predictive Analytics in ECG Data
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Identifying <span className="text-cyan-400 font-semibold">patterns and forecasting cardiac events</span> 
            before they occur. By analyzing real-time ECG data with AI algorithms, 
            healthcare providers can predict risks and enable proactive treatment 
            for patients worldwide.
          </p>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl bg-gray-900/60 border border-blue-500/30 shadow-lg backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Pattern Detection</h3>
              <p className="text-gray-300 text-sm">
                Recognizing subtle trends in ECG signals for early intervention.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-5 rounded-2xl bg-gray-900/60 border border-cyan-400/30 shadow-lg backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Event Forecasting</h3>
              <p className="text-gray-300 text-sm">
                Predicting cardiac events to help reduce emergency incidents.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 relative flex justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          
          <Image
            src="/product/Predictive Analytics.jpg" // <-- replace with your ECG chart/analytics image
            alt="Predictive ECG Analytics"
            width={500}
            height={380}
            className="relative rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
}
