'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RemoteECGMonitoring() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gray-900 text-white">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-800 to-gray-900 opacity-80 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/product/Remote ECG Monitoring for Patients.jpg')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
         {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 relative flex justify-center"
        >
          {/* Glow Effect */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500 rounded-full blur-3xl opacity-30 animate-ping"></div>

          <Image
            src="/product/Remote ECG Monitoring for Patients1.jpg" // <-- replace with your ECG image
            alt="Remote ECG Monitoring"
            width={500}
            height={400}
            className="relative rounded-2xl shadow-2xl border border-white/20"
          />
        </motion.div>
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            Remote ECG Monitoring <br /> for Patients
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            Experience real-time heart monitoring from the comfort of your home. 
            Our <span className="text-yellow-400 font-semibold">AI-powered ECG technology</span> 
            enables continuous tracking, early detection of abnormalities, and 
            instant sharing with healthcare professionals for timely care.
          </p>
          <button className="px-7 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition">
            Explore More
          </button>
        </motion.div>

       
      </div>
    </section>
  );
}
