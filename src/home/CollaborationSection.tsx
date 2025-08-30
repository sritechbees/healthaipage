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
    <section className="relative w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Swiper with Fade effect */}
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
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Animated Titles */}
        <div className="mt-10 h-16 flex items-center justify-center">
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
