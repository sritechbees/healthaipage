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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-20"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
          Latest News
        </span>
      </h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8">
        {blogs.map((post, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            className="relative group overflow-hidden rounded-3xl break-inside-avoid"
          >
            {/* Blog Image */}
            <div className="relative w-full overflow-hidden rounded-3xl">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Text overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white transition-all duration-500">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
                  {post.category}
                </p>
                <h3 className="text-xl font-bold leading-snug group-hover:text-blue-200">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Animation for heading */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
