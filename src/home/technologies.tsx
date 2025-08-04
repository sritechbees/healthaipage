'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBrain, FaCloud, FaLink } from 'react-icons/fa';

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
];

export default function TechnologyStack() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
   <section
  className="w-full bg-cover bg-center bg-no-repeat py-16 px-6 md:px-12 relative"
  style={{ backgroundImage: "url('/background/teambg.jpg')" }} // <- your image path
>
  {/* Optional: Dark overlay */}
  <div className="absolute inset-0 "></div>

  <div className="relative z-10">
    <h2
      data-aos="fade-up"
      className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
    >
      <span className="border-b-4 border-blue-400 pb-1">Technology Stack</span>
    </h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
      {technologies.map((tech, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 150}
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="mb-4 flex justify-center">{tech.icon}</div>
          <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
            {tech.title}
          </h3>
          <p className="text-sm text-gray-600 text-center">{tech.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
