"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar ko 0 se 100 tak smoothly badhane ke liye
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Speed of progress (randomized slightly for a realistic feel)
        return prev + Math.floor(Math.random() * 10) + 5; 
      });
    }, 100);

    // 1.8 seconds tak preloader dikhega, phir fade out hona shuru hoga
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      // Fade out animation (700ms) khatam hone ke baad component hatega
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out bg-gradient-to-br from-white via-[#F4FBF6] to-[#E6F4EA] ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Decorative subtle background element */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col items-center px-4 relative z-10">
        
        {/* Logo Container with a soft green shadow */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6 drop-shadow-[0_10px_20px_rgba(21,46,28,0.1)] transition-transform duration-1000 animate-pulse">
          <Image 
            src="/logo.png" 
            alt="The Social Purpose Trust Logo" 
            fill
            sizes="(max-width: 768px) 96px, 128px"
            className="object-contain"
            priority
          />
        </div>
        
        {/* Brand Name (Deep Forest Green) */}
        <h1 className="text-xl sm:text-2xl font-black tracking-[0.25em] text-[#152E1C] uppercase text-center mb-3">
          The Social Purpose Trust
        </h1>
        
        {/* Premium NGO Slogan (Emerald Green, Serif & Italic) */}
        <p className="text-sm sm:text-lg font-serif italic text-green-700/80 text-center max-w-md leading-relaxed mb-10">
          "Empowering Communities. Enabling Green Futures."
        </p>
        
        {/* Progress Bar Container (Light Green Track) */}
        <div className="w-48 sm:w-64 h-[4px] bg-green-100 rounded-full overflow-hidden relative shadow-inner">
          {/* Animated Progress Line (Rich Green Gradient) */}
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-[#152E1C] rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(21,46,28,0.5)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        {/* Loading Percentage Text */}
        <div className="mt-4 text-[10px] sm:text-xs font-bold tracking-widest text-[#152E1C]/60 uppercase">
          {Math.min(progress, 100)}% Initiating
        </div>

      </div>
    </div>
  );
}