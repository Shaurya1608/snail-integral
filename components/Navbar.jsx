"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Initiatives", href: "#initiatives" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-10 py-4 max-w-[1400px] mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
          <Image
            src="/logo/Snail Integral New Logo-03.png"
            alt="Snail Integral Logo"
            width={200}
            height={60}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Center Nav Links — Desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-gray-100/70 backdrop-blur-sm rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative px-5 py-2 text-[13px] font-medium text-gray-600 hover:text-gray-900 rounded-full hover:bg-white/80 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side CTAs — Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className="px-5 py-2.5 text-[13px] font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 text-[13px] font-semibold rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-200 shadow-[0_1px_3px_rgba(106,154,56,0.4)] hover:shadow-[0_4px_12px_rgba(106,154,56,0.3)] hover:-translate-y-[1px]"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger — Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-gray-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}></span>
          <span className={`block w-5 h-[1.5px] bg-gray-800 transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`}></span>
          <span className={`block w-5 h-[1.5px] bg-gray-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#f9fbf7] z-[100] flex flex-col transition-transform duration-500 ease-in-out origin-top ${
          mobileOpen
            ? "scale-y-100 pointer-events-auto"
            : "scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100/50">
          <Link href="/" onClick={() => setMobileOpen(false)} className="relative z-10">
            <Image
              src="/logo/Snail Integral New Logo-03.png"
              alt="Snail Integral Logo"
              width={200}
              height={60}
              className="h-9 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-10 bg-gray-50 rounded-full"
            aria-label="Close menu"
          >
            <span className="block w-4 h-[1.5px] bg-gray-800 rotate-45 translate-y-[1.5px]"></span>
            <span className="block w-4 h-[1.5px] bg-gray-800 -rotate-45 -translate-y-[1.5px]"></span>
          </button>
        </div>
        
        <div className="flex-1 flex flex-col px-8 pt-12 gap-6 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-4xl font-serif font-semibold text-gray-900 hover:text-primary transition-all duration-300 translate-y-0 opacity-100 flex items-center justify-between group`}
              style={{ transitionDelay: mobileOpen ? `${100 + i * 50}ms` : '0ms' }}
            >
              {link.label}
              <svg className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          ))}
        </div>

        <div className="px-8 pb-10 pt-6 flex flex-col gap-4 bg-white/50 border-t border-gray-100 backdrop-blur-md">
          <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider text-center">Ready to grow?</p>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-4 text-center text-lg font-semibold rounded-2xl bg-primary text-white hover:bg-primary-hover transition-colors shadow-lg"
          >
            Get Started
          </Link>
          <div className="flex justify-center gap-6 mt-4">
            <a href="mailto:info@snailintegral.com" className="text-gray-500 hover:text-primary transition-colors">
               <span className="sr-only">Email</span>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </a>
            <a href="tel:+918750807676" className="text-gray-500 hover:text-primary transition-colors">
               <span className="sr-only">Phone</span>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
