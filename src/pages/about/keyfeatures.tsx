'use client';

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TeamSection from '@/common/meetourteam';


const features = [
  {
    title: 'Real-Time Monitoring',
    image: '/about/Real-Time Monitoring.jpg',
    desc: 'Track patient vitals and data in real-time with IoT-enabled medical devices.',
  },
  {
    title: 'Smart Diagnosis',
    image: '/about/Smart Diagnosis.jpg',
    desc: 'AI-driven insights that support doctors in faster, more accurate diagnosis.',
  },
  {
    title: 'Secure Data Exchange',
    image: '/about/Secure Data Exchange.jpg',
    desc: 'End-to-end encrypted health records to maintain patient confidentiality.',
  },
  {
    title: 'Virtual Consultation',
    image: '/about/Virtual Consultation.jpg',
    desc: 'Enabling healthcare access via virtual visits and AI-enhanced chats.',
  },
];

export default function KeyFeatures() {
  return (
    <div>
      <TeamSection/>
    <section className="relative z-10 bg-gray-950 text-white overflow-hidden">
      {/* 🔹 Video Background Section */}
      <div className="relative w-full h-[60vh] md:h-[110vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src="/videos/homepagevedio.mp4" // 👉 replace with your video path
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 flex items-center justify-center h-full">
         
        </div>
      </div>
      
      {/* 🔹 Key Features Section */}
      <div className="relative z-10 py-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              gyroscope={true}
              className="transform-style-3d"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-2xl p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:shadow-[0_0_30px_#00e0ffcc] transition-all duration-300"
              >
                <div className="w-20 h-20 relative mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-[0_0_15px_#00e0ff]"
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
    </div>
    
  );
}
