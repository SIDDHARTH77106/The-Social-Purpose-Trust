import React from 'react';
import Link from 'next/link';

export default function OneMillionSolarPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-20">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto text-center">
        <p className="inline-block bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 shadow-sm">
          Program 01 · Renewable Energy
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-green-950 mb-8 leading-tight">
          1 Million Solar <br className="hidden sm:block"/>
          <span className="text-orange-500 italic">Initiative</span>
        </h1>
        <p className="text-xl sm:text-2xl font-serif text-gray-800 mb-6">
          Illuminating the Future with Solar Energy.
        </p>
      </section>

      {/* 2. Solar Saathi Program (Text Integration) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-10 sm:p-16 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-green-950 mb-6">The Solar Saathi Program</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                The Solar Saathi Program focuses on empowering local women to lead solar adoption efforts in their communities.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <span className="text-2xl">👩‍💼</span>
                  <div>
                    <strong className="text-gray-900 block text-lg">Empower Women</strong>
                    <p className="text-gray-600 font-light text-sm mt-1">Enable women to become solar entrepreneurs, fostering local leadership in solar energy.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-2xl">🏡</span>
                  <div>
                    <strong className="text-gray-900 block text-lg">Facilitate Adoption</strong>
                    <p className="text-gray-600 font-light text-sm mt-1">Support and guide households through the process of installing rooftop solar systems.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <strong className="text-gray-900 block text-lg">Provide Local Support</strong>
                    <p className="text-gray-600 font-light text-sm mt-1">Offer on-the-ground assistance and maintain community engagement.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-[2rem] p-8 h-full flex flex-col justify-center border border-orange-100">
               {/* Illustration Placeholder */}
               <div className="w-full h-64 bg-gradient-to-tr from-orange-200 to-yellow-100 rounded-xl mb-6 flex items-center justify-center text-4xl shadow-inner">
                 ☀️🌍
               </div>
               <h3 className="text-2xl font-bold text-center text-green-950">Solar Smart Fellowship</h3>
               <p className="text-center text-gray-600 text-sm mt-2 font-medium">Empowers individuals to become leaders in solar adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Problem & Stats */}
      <section className="py-20 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-green-950 mb-6">Transitioning to Solar: Empowering Rural India</h2>
        <p className="text-gray-600 font-light text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
          Despite government support, only 4.4% of rural households in India have adopted rooftop solar. High upfront costs and limited awareness are key obstacles—75% of rural families don&apos;t know about available subsidies, and even with 50-55% subsidy coverage, many can&apos;t afford the rest.
        </p>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center group">
            <span className="text-6xl font-serif text-green-700 mb-4 group-hover:scale-110 transition-transform">75%</span>
            <p className="text-gray-600 font-medium text-sm px-4">No knowledge about available subsidies</p>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-6xl font-serif text-green-700 mb-4 group-hover:scale-110 transition-transform flex items-baseline">
              <span className="text-2xl mr-1 font-sans font-bold text-gray-400">Only</span>4.4%
            </span>
            <p className="text-gray-600 font-medium text-sm px-4">Rural households adopted rooftop</p>
          </div>
          <div className="flex flex-col items-center group">
            <span className="text-6xl font-serif text-green-700 mb-4 group-hover:scale-110 transition-transform">55%</span>
            <p className="text-gray-600 font-medium text-sm px-4">No awareness about subsidy coverage</p>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-24 bg-[#E8A33A] text-green-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-white drop-shadow-sm">OUR APPROACH</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md">📚</div>
              <h3 className="font-bold text-lg mb-3">Education & Training</h3>
              <p className="text-sm font-medium text-gray-700">Provide comprehensive training for Solar Smart Fellows and Solar Saathis to become solar preneurs and community leaders.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md">🤝</div>
              <h3 className="font-bold text-lg mb-3">Support & Facilitation</h3>
              <p className="text-sm font-medium text-gray-700">Assist communities with understanding and accessing solar incentives and financing options.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md">👑</div>
              <h3 className="font-bold text-lg mb-3">Local Leadership</h3>
              <p className="text-sm font-medium text-gray-700">Foster long-term solar adoption and entrepreneurship to drive widespread environmental and economic benefits.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-green-800 text-white rounded-full flex items-center justify-center text-2xl mb-6 shadow-md">🌱</div>
              <h3 className="font-bold text-lg mb-3">Sustainable Impact</h3>
              <p className="text-sm font-medium text-gray-700">Empower local women and fellows to lead solar initiatives and support sustainable energy solutions.</p>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}