'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HowToUseCGM() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const videos = [
    '/videos/one.mp4',
    '/videos/two.mp4',
    '/videos/three.mp4',
    '/videos/four.mp4',
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 md:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-down"
        >
          How to use <span className="text-[#2cb9ff]">Tracky CGM</span>
        </h2>

        {/* Videos in single row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((src, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border bg-black"
            >
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
