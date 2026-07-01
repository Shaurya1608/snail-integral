"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const eventsRef = useRef(null);
  const mobileEventsRef = useRef(null);
  const pathname = usePathname();
  const isDarkHero = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (eventsRef.current && !eventsRef.current.contains(e.target)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Initiatives", href: "/initiatives" },
    { label: "Case Studies", href: "/case-studies" },
  ];

  const events = [
    {
      label: "Brand R.Comm Summit",
      desc: "Agriculture & rural communication excellence",
      href: "/initiatives#brand-rcomm-summit",
      logo: "/initiatives/Brand R.Comm final logo.png",
    },
    {
      label: "Bio-Agri Next Global Conference",
      desc: "Sustainable agriculture meets global collaboration",
      href: "/initiatives#bio-agri-conference",
      logo: "/initiatives/BIO AGRI NEXT LOGO.png",
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-colors duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
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
              className={`h-9 w-auto transition-all duration-300 ${
                scrolled || !isDarkHero ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Center Nav Links — Desktop */}
          <div className={`hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
            scrolled || !isDarkHero
              ? 'bg-gray-100/70 backdrop-blur-sm'
              : 'bg-white/10 backdrop-blur-md border border-white/10'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                  pathname === link.href
                    ? scrolled || !isDarkHero
                      ? 'text-[#4a7c24] bg-white shadow-sm'
                      : 'text-white bg-white/20'
                    : scrolled || !isDarkHero
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Events Dropdown */}
            <div className="relative" ref={eventsRef}>
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className={`relative px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  eventsOpen
                    ? scrolled || !isDarkHero
                      ? 'text-[#4a7c24] bg-white shadow-sm'
                      : 'text-white bg-white/20'
                    : scrolled || !isDarkHero
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                      : 'text-white/80 hover:text-white hover:bg-white/15'
                }`}
              >
                Events
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              <div className={`absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                eventsOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
              }`}>
                <div className="p-2">
                  {events.map((event) => (
                    <Link
                      key={event.label}
                      href={event.href}
                      onClick={() => setEventsOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#f4f9ee] group transition-all duration-200"
                    >
                      <div className="w-14 h-10 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-100 p-1.5">
                        <Image
                          src={event.logo}
                          alt={event.label}
                          width={48}
                          height={32}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-800 group-hover:text-[#4a7c24] transition-colors leading-tight">
                          {event.label}
                        </span>
                        <span className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                          {event.desc}
                        </span>
                      </div>
                      <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#4a7c24] group-hover:translate-x-0.5 transition-all ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Right Side CTAs — Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`px-5 py-2.5 text-[13px] font-semibold border rounded-full transition-all duration-200 hover:-translate-y-[1px] ${
                scrolled || !isDarkHero
                  ? 'border-gray-200/80 bg-gray-100/90 text-gray-700 hover:text-gray-900 hover:bg-gray-200/70 hover:border-gray-300'
                  : 'border-white/35 bg-white/15 text-white hover:text-white hover:bg-white/25 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact#contact-form"
              className={`px-6 py-2.5 text-[13px] font-semibold rounded-full transition-all duration-200 hover:-translate-y-[1px] ${
                scrolled || !isDarkHero
                  ? 'bg-primary text-white hover:bg-primary-hover shadow-[0_1px_3px_rgba(106,154,56,0.4)] hover:shadow-[0_4px_12px_rgba(106,154,56,0.3)]'
                  : 'bg-white text-gray-900 hover:bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
              }`}
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
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled || !isDarkHero ? 'bg-gray-800' : 'bg-white'
            } ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}></span>
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled || !isDarkHero ? 'bg-gray-800' : 'bg-white'
            } ${mobileOpen ? "opacity-0 scale-0" : ""}`}></span>
            <span className={`block w-5 h-[1.5px] transition-all duration-300 ${
              scrolled || !isDarkHero ? 'bg-gray-800' : 'bg-white'
            } ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#f9fbf7] z-[100] flex flex-col transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
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
        
        <div className="flex-1 relative overflow-hidden">
          {/* Scroll fade hint at bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f9fbf7] to-transparent z-10" />
          {/* Bouncing chevron hint */}
          <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-opacity duration-500 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}>
            <svg className="w-5 h-5 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="h-full flex flex-col px-8 pt-12 gap-6 overflow-y-auto pb-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-4xl font-serif font-semibold transition-all duration-300 flex items-center justify-between group ${
                pathname === link.href ? "text-[#4a7c24]" : "text-gray-900 hover:text-[#4a7c24]"
              } ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? `${100 + i * 50}ms` : '0ms' }}
            >
              {link.label}
              <svg className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          ))}

          {/* Events accordion — Mobile */}
          <div
            ref={mobileEventsRef}
            className={`transition-all duration-300 ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? `${100 + navLinks.length * 50}ms` : '0ms' }}
          >
            <button
              onClick={() => {
                const opening = !mobileEventsOpen;
                setMobileEventsOpen(opening);
                if (opening) {
                  setTimeout(() => {
                    mobileEventsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }, 50);
                }
              }}
              className="w-full text-4xl font-serif font-semibold text-gray-900 hover:text-[#4a7c24] transition-colors flex items-center justify-between group"
            >
              Events
              <svg
                className={`w-6 h-6 text-gray-300 group-hover:text-primary transition-all duration-300 ${mobileEventsOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Sub-items */}
            <div className={`mt-3 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${mobileEventsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {events.map((event) => (
                <Link
                  key={event.label}
                  href={event.href}
                  onClick={() => { setMobileOpen(false); setMobileEventsOpen(false); }}
                  className="flex items-center gap-3 pl-2 py-3 rounded-xl hover:bg-white group transition-all border-b border-gray-100 last:border-0"
                >
                  <div className="w-14 h-10 flex items-center justify-center bg-white rounded-lg border border-gray-100 p-1.5 flex-shrink-0 shadow-sm">
                    <Image
                      src={event.logo}
                      alt={event.label}
                      width={48}
                      height={32}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-semibold text-gray-800 group-hover:text-[#4a7c24] transition-colors leading-tight">{event.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-snug">{event.desc}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#4a7c24] flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          </div>
        </div>

        <div className="px-8 pb-10 pt-6 flex flex-col gap-4 bg-[#f9fbf7] border-t border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider text-center">Ready to grow?</p>
          <Link
            href="/contact#contact-form"
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
    </>
  );
}
