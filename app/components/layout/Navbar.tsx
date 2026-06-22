"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center text-white font-bold">
                TSPT
              </div>
              <div>
                <h1 className="text-sm font-bold leading-tight text-gray-900">The Social Purpose Trust</h1>
                <p className="text-xs text-gray-500">Making India Carbon Smart</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-600 items-center">
              <Link href="/programs" className="hover:text-green-700 transition">Programs</Link>
              <Link href="/impact" className="hover:text-green-700 transition">Impact</Link>
              <Link href="/team" className="hover:text-green-700 transition">About Us</Link>
              <Link href="/get-involved" className="hover:text-green-700 transition">Get Involved</Link>
              {/* Highlighted Register Link in Desktop Nav */}
              <Link href="/register" className="text-orange-600 font-bold hover:text-orange-700 transition">
                Register
              </Link>
            </div>

            {/* Actions & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <span className="hidden xl:inline-block text-[10px] font-bold bg-green-100 text-green-800 px-2 py-1 rounded border border-green-200 tracking-wider">
                12A · 80G · CSR-1
              </span>
              <Link href="/get-involved" className="hidden sm:inline-block bg-green-900 hover:bg-green-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition">
                Donate / Partner
              </Link>
              
              {/* Hamburger Button for Mobile */}
              <button 
                className="lg:hidden p-2 text-gray-600"
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
        <div className="fixed inset-0 z-[100] bg-green-950/95 backdrop-blur-md flex flex-col p-6">
          <button 
            className="self-end text-white flex items-center gap-2 text-sm font-medium mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            Close
          </button>
          <div className="flex flex-col gap-6 text-2xl font-serif text-white">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
            <Link href="/impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</Link>
            <Link href="/team" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/get-involved" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</Link>
            {/* Highlighted Register Link in Mobile Nav */}
            <Link href="/register" className="text-orange-400 font-bold" onClick={() => setIsMobileMenuOpen(false)}>Register for Course</Link>
          </div>
        </div>
      )}
    </>
  );
}