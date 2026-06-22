"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  const navLinks = [
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'About Us', href: '/about' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
          isTransparent 
            ? 'bg-transparent py-6' 
            : 'bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="The Social Purpose Trust Logo" 
                  fill
                  sizes="(max-width: 768px) 40px, 48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className={`text-base sm:text-[17px] font-black leading-none tracking-wide transition-colors duration-300 ${isTransparent ? 'text-green-500' : 'text-green-950'}`}>
                  THE SOCIAL PURPOSE TRUST
                </h1>
                <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mt-1 transition-colors duration-300 ${isTransparent ? 'text-[#F97316]' : 'text-orange-600'}`}>
                  Making India Carbon Smart
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex gap-8 text-sm font-bold items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`transition-colors duration-200 ${
                      isActive 
                        ? (isTransparent ? 'text-white border-b-2 border-orange-500 pb-1' : 'text-green-800 border-b-2 border-green-800 pb-1') 
                        : (isTransparent ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-green-800')
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions & Compliance */}
            <div className="flex items-center gap-6">
              
              {/* Compliance Text */}
              <div className={`hidden xl:block text-[9px] font-bold uppercase tracking-[0.15em] text-right leading-[1.4] border-r pr-6 py-1 transition-colors duration-300 ${
                isTransparent ? 'text-white/50 border-white/20' : 'text-gray-500 border-gray-300'
              }`}>
                12A Registered <br/> 
                80G Certified <br/> 
                CSR-1 (Sec. 135)
              </div>
              
              {/* Donate CTA Button */}
              <Link href="/donate" className={`hidden sm:inline-block px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm transform hover:-translate-y-0.5 ${
                isTransparent 
                  ? 'bg-[#F97316] hover:bg-orange-500 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-orange-500/20 hover:shadow-lg'
              }`}>
                Donate / Partner →
              </Link>
              
              {/* Mobile Hamburger Button */}
              <button 
                className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${isTransparent ? 'text-white hover:bg-white/10' : 'text-green-950 hover:bg-green-100'}`}
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#152E1C]/98 backdrop-blur-xl flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex justify-between items-center mb-10 mt-4">
            <div className="text-white font-bold text-lg tracking-wider">TSPT MENU</div>
            <button 
              className="text-white flex items-center gap-2 text-sm font-bold bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Close ✕
            </button>
          </div>
          
          <div className="flex flex-col gap-6 text-3xl font-serif text-white overflow-y-auto">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#F97316] transition"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-full h-px bg-white/20 my-4"></div>
            
            <Link 
              href="/register" 
              className="text-[#F97316] font-bold hover:text-orange-400 transition text-2xl" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply for Fellowship →
            </Link>
          </div>

          <div className="mt-auto pt-10 pb-4">
            <Link 
              href="/donate" 
              className="block w-full text-center bg-[#F97316] text-white font-bold py-4 rounded-full text-lg hover:bg-orange-600 transition shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate / Partner
            </Link>
          </div>
        </div>
      )}
    </>
  );
}