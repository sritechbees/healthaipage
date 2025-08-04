import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">HealthAI</h2>
          <p className="text-sm text-gray-300">
            Revolutionizing healthcare through advanced AI solutions for smarter diagnosis, monitoring, and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#product">Our Product</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#benefits">Benefits</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Email: <a href="mailto:support@healthai.com" className="text-blue-400">support@healthai.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="text-blue-400">+1 234 567 890</a></li>
            <li>Location: San Francisco, CA</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-blue-400 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} HealthAI. All rights reserved.
      </div>
    </footer>
  );
}
