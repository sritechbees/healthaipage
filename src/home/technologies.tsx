'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBrain, FaCloud, FaLink, FaShieldAlt, FaMobileAlt, FaChartLine } from 'react-icons/fa';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const technologies = [
  { title: 'AI, Machine Learning, Data Science', icon: <FaBrain className="text-5xl text-blue-500" /> },
  { title: 'Secure Cloud Infrastructure', icon: <FaCloud className="text-5xl text-green-500" /> },
  { title: 'Interoperable APIs for EMR/EHR', icon: <FaLink className="text-5xl text-purple-500" /> },
  { title: 'Advanced Security & Compliance', icon: <FaShieldAlt className="text-5xl text-red-500" /> },
  { title: 'Mobile-First Platforms', icon: <FaMobileAlt className="text-5xl text-pink-500" /> },
  { title: 'Analytics & Visualization', icon: <FaChartLine className="text-5xl text-yellow-500" /> },
];

export default function TechnologyStack() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20 relative overflow-hidden"
      style={{ backgroundImage: "url('/background/teamb.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          <span className="border-b-4 border-blue-400 pb-1">Technology Stack</span>
        </h2>

        {/* Trending Scroll Animation (Swiper Marquee Style) */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000} // smooth scrolling speed
          loop={true}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center group">
                {/* Icon with hover effect */}
                <div className="mb-3 transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {tech.icon}
                </div>
                {/* Title with fade animation */}
                <p className="text-white text-sm md:text-base font-medium opacity-80 group-hover:opacity-100 transition duration-300 text-center">
                  {tech.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
