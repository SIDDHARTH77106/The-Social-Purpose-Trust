import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#0d1f12] text-white pt-24 pb-10 font-sans overflow-hidden border-t-0">
      
      {/* 3D Premium Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-600 via-orange-500 to-green-600 shadow-[0_5px_20px_rgba(249,115,22,0.4)]"></div>

      {/* Decorative Floral & Leaf Background Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0c5.5 0 10 4.5 10 10s-4.5 10-10 10S20 15.5 20 10 24.5 0 30 0zM15 30c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10zm30 0c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Glowing 3D Orbs for background depth */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              {/* Premium 3D Logo Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center p-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-md transform hover:scale-110 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(34,197,94,0.3)] transition-all duration-500 cursor-pointer group">
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-[-1]"></div>
                <Image 
                  src="/logo.png" 
                  alt="SPT Logo" 
                  width={70} 
                  height={70} 
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-green-200 drop-shadow-md">
                  THE SOCIAL PURPOSE
                  <br/>TRUST
                </h2>
                <p className="text-[11px] text-orange-400 font-extrabold uppercase tracking-[0.2em] mt-1 drop-shadow-sm">
                  Making India Carbon Smart
                </p>
              </div>
            </div>
            
            <p className="text-sm text-green-50 mb-8 leading-relaxed pr-4 font-light drop-shadow-sm">
              Empowering women and underserved youth to lead India&apos;s clean energy transition through green skills, livelihoods, and community action.
            </p>
            
            {/* 3D Glassmorphism Badges */}
            <div className="flex flex-wrap gap-3 text-[11px] font-bold text-orange-400 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border-t border-l border-white/20 border-b border-r border-black/40 shadow-[8px_8px_16px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.05)] w-max">
              <span className="hover:text-white transition-colors cursor-default">12A</span> 
              <span className="text-white/20">•</span> 
              <span className="hover:text-white transition-colors cursor-default">80G</span> 
              <span className="text-white/20">•</span> 
              <span className="hover:text-white transition-colors cursor-default">CSR-1</span> 
              <span className="text-white/20">•</span> 
              <span className="hover:text-white transition-colors cursor-default">Sec. 135</span>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-orange-500 mb-6 flex items-center gap-2 drop-shadow-md">
              <span className="w-2.5 h-2.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></span>
              Programs
            </h4>
            <ul className="space-y-5">
              <li className="group">
                <Link href="/programs/carbon-smart-schools" className="text-sm text-green-100/90 hover:text-white flex items-center gap-3 transition-all duration-300 transform group-hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-colors">🍃</div>
                  Carbon Smart Schools
                </Link>
              </li>
              <li className="group">
                <Link href="/programs/carbon-smart-livelihoods" className="text-sm text-green-100/90 hover:text-white flex items-center gap-3 transition-all duration-300 transform group-hover:translate-x-2">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-colors">🪴</div>
                  Carbon Smart Livelihoods
                </Link>
              </li>
              <li className="group">
                <Link href="/programs/carbon-smart-green-livelihood-fellowship" className="text-sm text-green-100/90 hover:text-white flex items-start gap-3 transition-all duration-300 transform group-hover:translate-x-2 leading-snug">
                  <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-colors shrink-0 mt-0.5">🌱</div>
                  <span>Carbon Smart Green Livelihood Fellowship</span>
                </Link>
              </li>
              <li className="pt-4">
                {/* 3D Push Button */}
                <Link href="/register" className="group relative inline-flex items-center gap-2 px-6 py-2.5 font-bold text-white bg-gradient-to-b from-orange-400 to-orange-600 rounded-xl border border-orange-400/50 shadow-[0_6px_0_#9a3412,0_10px_20px_rgba(234,88,12,0.4)] active:shadow-[0_0px_0_#9a3412,0_0px_0_rgba(234,88,12,0.4)] active:translate-y-[6px] hover:brightness-110 transition-all duration-150">
                  CSGLF — Apply Now 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Organisation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-orange-500 mb-6 drop-shadow-md">Organisation</h4>
            <ul className="space-y-4">
              {['About Us', 'Theory of Change', 'Impact & Evidence', 'Our Team'].map((item, idx) => (
                <li key={idx} className="group">
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`} className="text-sm text-green-100/90 group-hover:text-white transition-all duration-300 inline-block relative overflow-hidden pb-1">
                    <span className="relative z-10 group-hover:-translate-y-1 block transition-transform duration-300">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
              <li><span className="text-sm text-green-100/30 italic cursor-not-allowed">Annual Reports</span></li>
            </ul>
          </div>

          {/* Column 4: Support & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-orange-500 mb-6 drop-shadow-md">Support & Contact</h4>
            <ul className="space-y-4 mb-8">
              <li className="group"><Link href="/get-involved" className="text-sm font-bold text-orange-400 hover:text-orange-300 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all duration-300">Donate (80G)</Link></li>
              <li><Link href="/get-involved" className="text-sm text-green-100/90 hover:text-white hover:underline decoration-orange-500 underline-offset-4 transition-all">CSR Partnership</Link></li>
              <li><Link href="/register" className="text-sm text-green-100/90 hover:text-white hover:underline decoration-orange-500 underline-offset-4 transition-all">Volunteer</Link></li>
              <li><Link href="/get-involved" className="text-sm text-green-100/90 hover:text-white hover:underline decoration-orange-500 underline-offset-4 transition-all">Contact</Link></li>
            </ul>
            
            {/* 3D Contact Cards */}
            <div className="space-y-3 pt-5 border-t border-white/10">
              <a href="mailto:info@socialpurpose.org" className="group flex items-center gap-4 text-sm text-green-100/90 hover:text-white transition-all duration-300 bg-white/5 p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                info@socialpurpose.org
              </a>
              <a href="tel:+918587999521" className="group flex items-center gap-4 text-sm text-green-100/90 hover:text-white transition-all duration-300 bg-white/5 p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform">
                  📞
                </div>
                +91 858 7999 521
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-green-100/60 text-center md:text-left">
          <p className="drop-shadow-sm">© {new Date().getFullYear()} The Social Purpose Trust. All rights reserved. Registered Charitable Trust, India.</p>
          <div className="px-5 py-2.5 rounded-xl bg-black/30 border border-white/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <p className="tracking-widest font-medium text-[10px] uppercase text-green-100/80">
              12A <span className="text-orange-500 px-1">•</span> 
              80G Certified <span className="text-orange-500 px-1">•</span> 
              CSR-1 Registered <span className="text-orange-500 px-1">•</span> 
              Supporting UN SDGs 4, 5, 7, 8, 10, 13, 17
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}