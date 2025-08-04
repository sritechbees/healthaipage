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
    image: '/home/Revolutionizing_Healthcare.jpg',
    date: 'July 3, 2025',
  },
  {
    title: 'BeaverHealthAI Partners with Govt Hospitals',
    category: 'Company Update',
    image: '/home/Revolutionizing_Healthcare.jpg',
    date: 'June 27, 2025',
  },
];

export default function LatestBlogs() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative">
      {/* Top Curved Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-32 md:h-40"
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
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 py-24 px-6 md:px-12 z-10">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          <span className="inline-block border-b-4 border-yellow-400 pb-2">
            Latest News
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((post, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-72 w-full">
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
                <h3 className="text-xl font-bold text-gray-800 mt-2">
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
