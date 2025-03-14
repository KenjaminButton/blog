'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Ramblings', href: '/ramblings', icon: '✍️' },
    { name: 'Gallery', href: '/gallery', icon: '📸' },
    { name: 'Random', href: '/random', icon: '🎲' },
    { name: 'About Me', href: '/about', icon: '🏀' }
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#FFA726] to-[#FF5252] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image 
                src="/icon.svg" 
                alt="Blog Logo" 
                width={32} 
                height={32} 
                className="transform group-hover:rotate-180 transition-all duration-500 hover:scale-110" 
              />
              <span className="text-white font-bold text-xl group-hover:text-white/90 transition-colors">Blog</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all hover:bg-white/10 hover:scale-105 flex items-center space-x-1"
                >
                  {item.icon && <span className="opacity-80 group-hover:opacity-100">{item.icon}</span>}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden absolute top-16 right-0 w-64 shadow-xl transition-all transform duration-300 ease-in-out bg-gradient-to-b from-[#FF5252] to-[#FFA726] rounded-bl-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/90 hover:text-white flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon && <span>{item.icon}</span>}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
