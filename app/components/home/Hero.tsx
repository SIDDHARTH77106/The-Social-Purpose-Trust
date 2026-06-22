import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      {/* COMPLETELY NEW BACKGROUND: Rich Forest Green with Modern Grid Pattern */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0B2C1A]">
        
        {/* Modern Grid Texture (Adds a premium tech/NGO feel) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] z-0"></div>

        {/* Vibrant Glowing Orbs for Depth */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Bright Green Glow on Top Left */}
          <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-[#16A34A] rounded-full blur-[150px] opacity-30"></div>
          {/* Warm Orange Glow on Bottom Right */}
          <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[60%] bg-[#F97316] rounded-full blur-[160px] opacity-20"></div>
        </div>
        
        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-green-100 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md shadow-lg">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_#f97316]"></span>
                3 Flagship Programs · Operational in Ghaziabad
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.15] drop-shadow-sm">
                India's green economy is growing.<br />
                <span className="text-[#FF8A3D] italic block mt-2 drop-shadow-md">We are making sure no one gets left behind.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-green-50/90 mb-6 max-w-xl font-light leading-relaxed">
                <strong className="text-white font-medium tracking-wide">4 million+ green jobs</strong> are coming to India by 2030. Without deliberate action, women and underserved youth will be left behind.
              </p>
              
              <div className="relative mb-10 pl-5 py-2">
                {/* Custom Orange Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF8A3D] to-transparent rounded-full"></div>
                <p className="text-lg text-orange-100/90 font-medium italic">
                  Join us in our mission to change that — one skill, one livelihood, one community at a time.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="#programs" className="bg-[#FF8A3D] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-sm text-center transition-all shadow-[0_4px_14px_0_rgba(255,138,61,0.39)] hover:shadow-[0_6px_20px_rgba(255,138,61,0.23)] hover:-translate-y-0.5 duration-300">
                  Explore Our Programs →
                </Link>
                <Link href="/get-involved" className="bg-white/5 hover:bg-white/15 text-white px-8 py-4 rounded-full font-bold text-sm text-center transition-all border border-white/30 backdrop-blur-sm">
                  Partner / Donate
                </Link>
              </div>
            </div>
            
            {/* Right Stats */}
            <div className="lg:col-span-5 w-full mt-10 lg:mt-0">
              <div className="flex flex-col gap-10 pl-0 lg:pl-12 lg:border-l border-white/10 relative">
                
                {/* Glowing border line */}
                <div className="hidden lg:block absolute left-[-1px] top-[10%] h-[80%] w-[2px] bg-gradient-to-b from-transparent via-[#FF8A3D]/40 to-transparent"></div>

                <div className="group cursor-default">
                  <div className="text-5xl sm:text-6xl font-serif text-white mb-2 group-hover:scale-105 transition-transform origin-left drop-shadow-md">
                    4<span className="text-[#FF8A3D]">M+</span>
                  </div>
                  <div className="text-sm font-bold text-white tracking-widest uppercase mb-1">Green jobs by 2030</div>
                  <div className="text-xs text-green-100/70 font-light leading-relaxed">India's clean energy transition is creating an entirely new workforce.</div>
                </div>

                <div className="group cursor-default">
                  <div className="text-5xl sm:text-6xl font-serif text-white mb-2 group-hover:scale-105 transition-transform origin-left drop-shadow-md">
                    11<span className="text-[#FF8A3D]">%</span>
                  </div>
                  <div className="text-sm font-bold text-white tracking-widest uppercase mb-1">Women in RE sector</div>
                  <div className="text-xs text-green-100/70 font-light leading-relaxed">A gap that is not an accident — and one we are actively closing.</div>
                </div>

                <div className="group cursor-default">
                  <div className="text-5xl sm:text-6xl font-serif text-white mb-2 group-hover:scale-105 transition-transform origin-left drop-shadow-md">
                    1<span className="text-[#FF8A3D]">L+</span>
                  </div>
                  <div className="text-sm font-bold text-white tracking-widest uppercase mb-1">Target Beneficiaries</div>
                  <div className="text-xs text-green-100/70 font-light leading-relaxed">Women and underserved youth we aim to skill and place.</div>
                </div>
                
                <p className="text-[9px] text-green-100/40 uppercase tracking-widest mt-2 border-t border-white/10 pt-4 inline-block">Source: IEA Rooftop Solar Report</p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SDG TICKER STRIP (Premium Solid Orange) */}
      <div className="bg-[#E67525] overflow-hidden py-3.5 flex items-center shadow-inner">
        <div className="flex whitespace-nowrap animate-ticker hover:[animation-play-state:paused] transition-all">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex">
              {[
                'SDG 4 — Quality Education', 
                'SDG 5 — Gender Equality', 
                'SDG 7 — Affordable & Clean Energy', 
                'SDG 8 — Decent Work & Economic Growth', 
                'SDG 10 — Reduced Inequalities', 
                'SDG 13 — Climate Action',
                'SDG 17 — Partnerships'
              ].map((sdg, idx) => (
                <span key={idx} className="inline-flex items-center text-[11px] sm:text-xs font-bold text-white uppercase tracking-widest px-8 drop-shadow-sm">
                  {sdg} <span className="ml-16 text-white/40">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}