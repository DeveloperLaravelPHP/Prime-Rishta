"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white w-[100%] mx-auto items-center justify-between relative z-50">
      {/* Top Navigation (Religions & Countries) */}

      <div className="w-screen-xl max-w-[1026px] mx-auto hidden md:flex flex-col md:flex-row lg:gap-4 md:gap-1 px-4 py-2 text-sm font-medium text-gray-700 items-center justify-between ">
        <ul className="flex flex-wrap lg:gap-4 md:gap-0.5 overflow-x-auto">
          {['Hindu', 'Muslim', 'Sikh', 'Christian', 'Buddh', 'Jain'].map((item) => (
            <li key={item} className="p-2">{item}</li>
          ))}
        </ul>
        <div className="w-px h-[29px] bg-gray-300  "></div>
        <ul className="flex flex-wrap lg:gap-4  md:gap-0.5  overflow-x-auto">
          {['USA', 'Canada', 'UK', 'UAE', 'New Zealand', 'Australia', 'India'].map((item) => (
            <li key={item} className="p-2">{item}</li>
          ))}
        </ul>
      </div>

      {/* Main Navigation */}
      <div className="bg-black/40 w-full text-white absolute">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between px-12 h-[92px]">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/primerishta.png" width={142} height={52} alt="logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-bold text-[16px]">
            <Link href="#" className="hover:text-pink-600">Success stories</Link>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-pink-600">
                <Image src="/customer-service.png" width={32} height={32} alt="Help" />
                Help
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul className="absolute left-0 mt-2 bg-white text-gray-800 shadow-md rounded-md text-sm w-40 hidden group-hover:block">
                <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">FAQs</Link></li>
                <li><Link href="#" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link></li>
              </ul>
            </div>

            <Link href="#" className="px-4 py-2 border border-white rounded hover:bg-pink-500">Login</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black text-white px-4 py-2 space-y-2">
            <Link href="#" className="block hover:text-pink-400">Success stories</Link>
            <Link href="#" className="block hover:text-pink-400">FAQs</Link>
            <Link href="#" className="block hover:text-pink-400">Contact Us</Link>
            <Link href="#" className="block hover:text-pink-400">Login</Link>
          </div>
        )}
      </div>
    </header >
  );
};

export default Header;