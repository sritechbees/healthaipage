'use client';

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#172d70]"> {/* Royal Blue */}
      
      {/* Content - 4 Columns */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-10">
        
        {/* Logo + About */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative flex items-center justify-center w-44 h-44 mb-4">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md animate-spin-slow"></div>
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
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-200 text-md">
            <li><Link href="/about/herosection" className="hover:text-gray-100 transition">About Us</Link></li>
            <li><Link href="/ourproduct/product_hero" className="hover:text-gray-100 transition">Our Product</Link></li>
            <li><Link href="/services/cardsection" className="hover:text-gray-100 transition">Services</Link></li>
            <li><Link href="/contact/getintouchpage" className="hover:text-gray-100 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link href="#" className="hover:text-gray-100 text-xl transition transform hover:scale-110"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-gray-100 text-xl transition transform hover:scale-110"><FaTwitter /></Link>
            <Link href="#" className="hover:text-gray-100 text-xl transition transform hover:scale-110"><FaInstagram /></Link>
            <Link href="#" className="hover:text-gray-100 text-xl transition transform hover:scale-110"><FaLinkedinIn /></Link>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-md text-gray-200 mb-3">
            Email: <a href="mailto:support@beaverhealthai.com" className="text-white/90">healthai@beavertek.com</a>
          </p>
          <p className="text-md text-gray-200 mb-3">Phone (India): +91 94452 66583</p>
          <p className="text-md text-gray-200 mb-3">Phone (USA): +1 949-351-9624</p>
          <p className="text-md text-gray-200 mb-3">Irvine, CA & India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/30 text-center text-sm text-white py-4 z-10">
        <p>© {new Date().getFullYear()} Beaver HealthAI. All Rights Reserved.</p>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
