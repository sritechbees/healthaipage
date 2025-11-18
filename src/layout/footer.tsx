'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#172d70]">
      {/* Floating Particles Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="particle" style={{ top: "10%", left: "15%" }} />
        <span className="particle" style={{ top: "25%", right: "10%" }} />
        <span className="particle" style={{ bottom: "20%", left: "25%" }} />
        <span className="particle" style={{ bottom: "15%", right: "20%" }} />
        <span className="particle" style={{ top: "50%", left: "50%" }} />
      </div>

      {/* Content - 4 Columns with animation */}
      <motion.div
        className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative flex items-center justify-center w-44 h-44 mb-4">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md animate-spin-slow" />
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
          <p className="text-sm text-gray-200/80 text-center md:text-left max-w-xs">
            Empowering healthcare with AI-driven insights, seamless platforms, and
            innovative digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-200 text-md">
            <li>
              <Link
                href="/about/herosection"
                className="hover:text-gray-100 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/ourproduct/product_hero"
                className="hover:text-gray-100 transition-colors"
              >
                Our Product
              </Link>
            </li>
            <li>
              <Link
                href="/services/cardsection"
                className="hover:text-gray-100 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact/getintouchpage"
                className="hover:text-gray-100 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <p className="text-sm text-gray-200 mb-4">
            Stay connected with Beaver HealthAI across platforms.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 text-xl transition transform hover:scale-110"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 text-xl transition transform hover:scale-110"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 text-xl transition transform hover:scale-110"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-100 text-xl transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Contact Section with Icons */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

          <div className="space-y-3 text-md text-gray-200">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FiMail className="text-xl" />
             
                <Link href="https://www.google.com/search?q=info%40beavertek.com">
              <span className=" text-[#2cb9ff] hover:underline"> healthai@beavertek.com</span>
            </Link>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FiPhone className="text-xl" />
              <span>+91 94452 66583 (India)</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FiPhone className="text-xl" />
              <span>+1 949-351-9624 (USA)</span>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-start justify-center md:justify-start gap-3">
                <FiMapPin className="text-xl mt-1" />
                <div className="text-left">
                  <p className="font-semibold text-gray-100">Address</p>
                  <p>Irvine, California, USA</p>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/30 text-center text-sm text-white py-4 z-10">
        <p>© {new Date().getFullYear()} Beaver HealthAI. All Rights Reserved.</p>
      </div>

      {/* Animations & Particles CSS */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 30s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .particle {
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.85), transparent);
          opacity: 0.35;
          animation: float 12s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-30px) translateX(15px) scale(1.15);
            opacity: 0.6;
          }
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.25;
          }
        }
      `}</style>
    </footer>
  );
}
