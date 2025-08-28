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
  {
    title: 'AI, Machine Learning, Data Science',
    icon: <FaBrain className="text-4xl text-blue-600" />,
    desc: 'Empowering predictions, automation, and insights across the health spectrum.',
  },
  {
    title: 'Secure Cloud Infrastructure',
    icon: <FaCloud className="text-4xl text-green-600" />,
    desc: 'Scalable, compliant, and secure data handling via cloud-native infrastructure.',
  },
  {
    title: 'Interoperable APIs for EMR/EHR',
    icon: <FaLink className="text-4xl text-purple-600" />,
    desc: 'Seamlessly integrates with existing systems for unified healthcare workflows.',
  },
  {
    title: 'Advanced Security & Compliance',
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
    desc: 'HIPAA, GDPR compliant systems ensuring data privacy and trust.',
  },
  {
    title: 'Mobile-First Platforms',
    icon: <FaMobileAlt className="text-4xl text-pink-500" />,
    desc: 'Healthcare solutions designed for accessibility anytime, anywhere.',
  },
  {
    title: 'Analytics & Visualization',
    icon: <FaChartLine className="text-4xl text-yellow-500" />,
    desc: 'Transforming raw health data into meaningful insights and trends.',
  },
];

export default function TechnologyStack() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 relative"
      style={{ backgroundImage: "url('/background/teamb.jpg')" }}
    >
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      <div className="relative z-10">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          <span className="border-b-4 border-blue-400 pb-1">Technology Stack</span>
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, reverseDirection: true, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="mb-4 flex justify-center">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-600 text-center">{tech.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
