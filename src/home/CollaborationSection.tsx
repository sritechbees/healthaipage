'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  { title: 'AI-Powered Healthcare', image: '/home/City_Hospital.jpg' },
  { title: 'Smart Diagnostics', image: '/home/LabX Diagnostics.jpg' },
  { title: 'Trusted Government Partners', image: '/home/Govt Health Org.jpg' },
  { title: 'Next-Gen Clinics', image: '/home/AI Care Clinic.jpg' },
  { title: 'Advanced Labs', image: '/home/RapidTest Labs.jpg' },
  { title: 'Public Health Impact', image: '/home/Public Health Dept.jpg' },
];

export default function PhotoShootSection() {
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-gray-100 via-white to-gray-200 overflow-hidden">
      {/* Smokey White Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gray-300/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gray-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-gray-200/50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Swiper with Fade Effect */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          speed={1000}
          loop
          onSlideChange={(swiper) => setActiveTitle(swiper.realIndex)}
          className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Animated Titles */}
        <div className="mt-10 h-16 flex items-center justify-center relative">
          {slides.map((slide, index) => (
            <h2
              key={index}
              className={`absolute text-2xl md:text-4xl font-bold transition-all duration-700 ${
                activeTitle === index
                  ? 'opacity-100 translate-y-0 text-blue-600'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              {slide.title}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}
