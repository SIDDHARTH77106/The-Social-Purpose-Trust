import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#152E1C] text-white pt-20 pb-10 border-t-8 border-orange-500 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand (Takes up more space) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl shadow-inner">🌳</div>
              <div>
                <h2 className="text-lg font-black leading-tight tracking-wide">THE SOCIAL PURPOSE TRUST</h2>
                <p className="text-[10px] text-orange-400 font-bold uppercase tracking-widest">Making India Carbon Smart</p>
              </div>
            </div>
            <p className="text-sm text-green-100/70 mb-8 leading-relaxed pr-4">
              Empowering women and underserved youth to lead India's clean energy transition through green skills, livelihoods, and community action.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-orange-400 bg-white/5 p-3 rounded-lg w-max border border-white/10">
              <span>12A</span> <span className="text-white/30">•</span> 
              <span>80G</span> <span className="text-white/30">•</span> 
              <span>CSR-1</span> <span className="text-white/30">•</span> 
              <span>Sec. 135</span>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><Link href="/programs/carbon-smart-schools" className="text-sm text-green-100/80 hover:text-white transition">Carbon Smart Schools</Link></li>
              <li><Link href="/programs/carbon-smart-livelihoods" className="text-sm text-green-100/80 hover:text-white transition">Carbon Smart Livelihoods</Link></li>
              <li><Link href="/programs/carbon-smart-green-livelihood-fellowship" className="text-sm text-green-100/80 hover:text-white transition leading-snug block">Carbon Smart Green Livelihood Fellowship</Link></li>
              <li><Link href="/register" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition">CSGLF — Apply Now →</Link></li>
            </ul>
          </div>

          {/* Column 3: Organisation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">Organisation</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-green-100/80 hover:text-white transition">About Us</Link></li>
              <li><Link href="/about#theory" className="text-sm text-green-100/80 hover:text-white transition">Theory of Change</Link></li>
              <li><Link href="/impact" className="text-sm text-green-100/80 hover:text-white transition">Impact & Evidence</Link></li>
              <li><Link href="/about#team" className="text-sm text-green-100/80 hover:text-white transition">Our Team</Link></li>
              <li className="text-sm text-green-100/40 italic">Annual Reports</li>
            </ul>
          </div>

          {/* Column 4: Support & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6">Support & Contact</h4>
            <ul className="space-y-4 mb-8">
              <li><Link href="/donate" className="text-sm font-bold text-white hover:text-orange-400 transition">Donate (80G)</Link></li>
              <li><Link href="/get-involved" className="text-sm text-green-100/80 hover:text-white transition">CSR Partnership</Link></li>
              <li><Link href="/register" className="text-sm text-green-100/80 hover:text-white transition">Volunteer</Link></li>
              <li><Link href="/contact" className="text-sm text-green-100/80 hover:text-white transition">Contact</Link></li>
            </ul>
            <div className="space-y-2 pt-4 border-t border-white/10">
              <a href="mailto:info@socialpurpose.org" className="block text-sm text-green-100/80 hover:text-white transition">info@socialpurpose.org</a>
              <a href="tel:+918587999521" className="block text-sm text-green-100/80 hover:text-white transition">+91 858 7999 521</a>
              <p className="text-sm text-green-100/80">Ghaziabad, Uttar Pradesh, India</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-100/50 text-center md:text-left">
          <p>© {new Date().getFullYear()} The Social Purpose Trust. All rights reserved. Registered Charitable Trust, India.</p>
          <p className="tracking-wide">12A · 80G Certified · CSR-1 Registered · Supporting UN SDGs 4, 5, 7, 8, 10, 13, 17</p>
        </div>
        
      </div>
    </footer>
  );
}