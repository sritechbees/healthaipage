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
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-950/80 via-black/70 to-blue-900/70">
      {/* Top Wave Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-32 md:h-40"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,64C672,75,768,117,864,122.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Blog Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-black to-blue-900 py-24 px-6 md:px-12 z-10">
        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-[#2cb9ff] to-[#2cb9ff] text-transparent bg-clip-text drop-shadow-md">
            Latest News
          </span>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {blogs.map((post, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden border border-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#2cb9ff]/40"
            >
              {/* Blog Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-semibold uppercase text-[#2cb9ff]">
                  {post.category}
                </p>
                <h3 className="text-lg font-bold text-white mt-2 group-hover:text-[#2cb9ff] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300 mt-3">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="w-full h-32 md:h-40 rotate-180"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,64C672,75,768,117,864,122.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L0,0Z"
          />
        </svg>
      </div>
    </div>
  );
}
