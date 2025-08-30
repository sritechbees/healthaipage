'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Nav links

  const navItems = [
    { name: 'Home', href: '/' },
     { name: 'Product', href: '/ourproduct/cgmwelcomekit' },
    { name: 'About', href: '/about/about_us' },
    { name: 'Services', href: '/services/cardsection' },
    { name: 'Contact', href: '/contact/getintouchpage' },
  ];
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          YourLogo
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
          <Link href="#contact">
            <button className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg transition">
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
              className="block text-gray-700 hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg transition">
              Get In Touch
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
