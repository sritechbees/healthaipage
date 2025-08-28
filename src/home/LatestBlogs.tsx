'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const blogs = [
  {
    title: 'Revolutionizing Healthcare with AI',
    category: 'Healthtech',
    image: '/home/Revolutionizing_Healthcare.jpg',
    date: 'July 10, 2025',
  },
  {
    title: 'How ML Enhances Patient Outcomes',
    category: 'AI in Medicine',
    image: '/home/How ML Enhances Patient Outcomes.jpg',
    date: 'July 3, 2025',
  },
  {
    title: 'BeaverHealthAI Partners with Govt Hospitals',
    category: 'Company Update',
    image: '/home/BeaverHealthAI Partners with Govt Hospitals.jpg',
    date: 'June 27, 2025',
  },
  {
    title: 'The Future of Telemedicine with AI',
    category: 'Digital Health',
    image: '/home/The Future of Telemedicine with AI.jpg',
    date: 'June 20, 2025',
  },
  {
    title: 'AI-Powered Predictive Analytics in Hospitals',
    category: 'Health Data',
    image: '/home/AI-Powered Predictive Analytics in Hospitals.jpg',
    date: 'June 15, 2025',
  },
  {
    title: 'How BeaverHealthAI is Transforming Rural Healthcare',
    category: 'Innovation',
    image: '/home/How BeaverHealthAI is Transforming Rural Healthcare1.jpg',
    date: 'June 10, 2025',
  },
];

export default function LatestBlogs() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative">
      {/* Top Curved Shape */}
      <div className="absolute  top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-32 md:h-52"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#eff6ff"
            d="M0,100 C480,0 960,120 1440,0 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* Blog Section */}
      <section className="relative bg-gradient-to-r from-blue-950/80 via-black/70 to-blue-900/70 py-24 px-6 md:px-12 z-10">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          <span className="inline-block border-b-4 border-yellow-400 pb-2">
            Latest News
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((post, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold uppercase">
                  {post.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Curved Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-32 md:h-40 rotate-180"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#eff6ff"
            d="M0,100 C480,0 960,120 1440,0 L1440,150 L0,150 Z"
          />
        </svg>
      </div>
    </div>
  );
}
