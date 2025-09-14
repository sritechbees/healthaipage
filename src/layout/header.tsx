'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Nav links
  const navItems = [
    { name: 'Home', href: '/' }, 
    { name: 'About', href: '/about/herosection' },
     { name: 'Product', href: '/ourproduct/product_hero' },
    { name: 'Services', href: '/services/cardsection' },
    { name: 'Contact', href: '/contact/getintouchpage' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo (Image instead of text) */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/home/logo.jpg" // 👈 replace with your logo path
            alt="Company Logo"
            width={120} // adjust size
            height={120}
            className="object-contain"
          />
         
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact/getintouchpage">
            <button className="bg-[#2cb9ff] hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg transition">
              Get In Touch
            </button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-[#2cb9ff]"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact/getintouchpage" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg transition">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
