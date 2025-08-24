'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AIDrivenECGAnalysis() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-gray-950 text-white">
      {/* Background Gradient + Particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black opacity-90"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(0,153,255,0.25),transparent_60%)]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(255,0,200,0.2),transparent_60%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AI-Driven ECG Analysis
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Leveraging <span className="text-cyan-400 font-semibold">machine learning algorithms</span> 
            to enhance accuracy in ECG interpretation. Our AI models detect subtle 
            cardiac patterns, helping doctors make faster and more reliable diagnoses.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-semibold rounded-2xl shadow-lg hover:from-blue-500 hover:to-cyan-400 transition">
            Discover More
          </button>
        </motion.div>

        {/* Right Side - Futuristic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          {/* Glowing Border Card */}
          <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-2xl p-6">
            <Image
              src="/product/AI-Driven ECG Analysis.jpg" // <-- replace with your AI ECG image
              alt="AI-Driven ECG Analysis"
              width={500}
              height={400}
              className="rounded-2xl mx-auto"
            />
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 blur opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
