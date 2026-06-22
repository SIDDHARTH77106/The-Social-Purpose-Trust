import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="bg-green-950 pt-16 pb-16 lg:pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-green-300 bg-green-900/50 border border-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                3 Flagship Programs · Now Active
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                India's green economy is growing.<br />
                <em className="text-orange-400">We are making sure<br />no one gets left behind.</em>
              </h1>
              <p className="text-base sm:text-lg text-white/70 mb-4 max-w-xl">
                <strong className="text-white font-semibold">4 million+ green jobs</strong> are coming to India by 2030. But without deliberate action, women and underserved youth will be left behind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="#programs" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium text-center transition">
                  Explore Our Programs
                </a>
                <a href="#get-involved" className="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium text-center transition border border-white">
                  Partner / Donate
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 w-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
                <div className="border-b border-white/10 pb-6">
                  <div className="text-3xl sm:text-4xl font-serif text-white mb-1">4<span className="text-orange-400">M+</span></div>
                  <div className="text-sm text-white/60"><strong className="text-white/90 block">Green jobs projected by 2030</strong></div>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <div className="text-3xl sm:text-4xl font-serif text-white mb-1">11<span className="text-orange-400">%</span></div>
                  <div className="text-sm text-white/60"><strong className="text-white/90 block">Women in India's renewable energy sector</strong></div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-serif text-white mb-1">1<span className="text-orange-400">L+</span></div>
                  <div className="text-sm text-white/60"><strong className="text-white/90 block">Target beneficiaries</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG TICKER */}
      <div className="bg-orange-500 overflow-hidden h-10 sm:h-12 flex items-center">
        <div className="flex whitespace-nowrap animate-ticker">
          {[1, 2].map((i) => (
            <div key={i} className="flex">
              {['SDG 4 — QUALITY EDUCATION', 'SDG 5 — GENDER EQUALITY', 'SDG 7 — AFFORDABLE CLEAN ENERGY', 'SDG 8 — DECENT WORK', 'SDG 10 — REDUCED INEQUALITIES', 'SDG 13 — CLIMATE ACTION'].map((sdg, idx) => (
                <span key={idx} className="inline-flex items-center gap-2 px-4 sm:px-8 text-[10px] sm:text-xs font-bold text-white tracking-widest border-r border-white/30">
                  {sdg}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}