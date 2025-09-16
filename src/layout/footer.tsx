import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Top Blue Curve Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44c58.64 12.19 117.7 24.61 176.51 22.54 58.9-2.07 117.27-17.55 176.11-26.9 59.34-9.42 119.38-12.82 178.66-2.71 58.18 9.9 115.44 31.75 173.24 47.84 57.44 16 115.93 27.31 174.09 28.69 59.9 1.41 119.22-7.2 178.24-18.05V0H0v27.35c107.56 20.35 214.52 40.69 321.39 56.44z"
            className="fill-[#2cb9ff]"
          ></path>
        </svg>
      </div>

      {/* Background Gradient */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-[#2cb9ff] relative">
        {/* Floating Stars Background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatUp ${10 + Math.random() * 10}s linear infinite, twinkle ${
                  2 + Math.random() * 3
                }s ease-in-out infinite`,
              }}
            ></span>
          ))}
        </div>

        {/* Content - 4 Columns */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-10">
          {/* Logo + About */}
          <div className="flex flex-col items-center md:items-start">
            {/* Circle behind Logo with rotation */}
            <div className="relative flex items-center justify-center w-44 h-44 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2cb9ff] via-gray-700 to-[#2cb9ff] opacity-80 blur-md animate-spin-slow"></div>
              <Link href="/">
              <Image
                src="/home/logofooter.png"
                height={180}
                width={180}
                alt="Beaver HealthAI Logo"
                className="relative w-36 h-auto z-10"
              />
              </Link>
            </div>

          
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#2cb9ff] mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-md  ">
              <li><Link href="/about/herosection" className="hover:text-[#2cb9ff] transition">About Us</Link></li>
              <li><Link href="/ourproduct/product_hero" className="hover:text-[#2cb9ff] transition">Our Product</Link></li>
              <li><Link href="/services/cardsection" className="hover:text-[#2cb9ff] transition">Services</Link></li>
              <li><Link href="/contact/getintouchpage" className="hover:text-[#2cb9ff] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#2cb9ff] mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <Link href="#" className="hover:text-[#2cb9ff] text-xl transition transform hover:scale-110"><FaFacebookF /></Link>
              <Link href="#" className="hover:text-[#2cb9ff] text-xl transition transform hover:scale-110"><FaTwitter /></Link>
              <Link href="#" className="hover:text-[#2cb9ff] text-xl transition transform hover:scale-110"><FaInstagram /></Link>
              <Link href="#" className="hover:text-[#2cb9ff] text-xl transition transform hover:scale-110"><FaLinkedinIn /></Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[#2cb9ff] mb-4">Contact</h3>
            <p className="text-md text-gray-300 mb-3">
              Email: <a href="mailto:support@beaverhealthai.com" className="text-[#2cb9ff]">healthai@beavertek.com</a>
            </p>
            <p className="text-md text-gray-300 mb-3">Phone (India): +91 94452 66583</p>
            <p className="text-md text-gray-300 mb-3">Phone (USA): +1 949-351-9624</p>
            <p className="text-md text-gray-300 mb-3">Irvine, CA & India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-700 text-center text-sm text-white py-4 z-10">
          <p>© {new Date().getFullYear()} Beaver HealthAI. All Rights Reserved.</p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes floatUp {
          0% { transform: translateY(0); }
          100% { transform: translateY(-120vh); }
        }
        .animate-spin-slow {
          animation: spin 30s linear infinite; /* very slow rotation */
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
