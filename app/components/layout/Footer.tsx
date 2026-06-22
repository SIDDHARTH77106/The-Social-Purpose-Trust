import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A18] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-900 rounded-lg flex items-center justify-center font-bold">TSPT</div>
              <div>
                <h2 className="text-sm font-bold leading-tight">The Social Purpose Trust</h2>
                <p className="text-xs text-white/40">Making India Carbon Smart</p>
              </div>
            </div>
            <p className="text-sm text-white/50 mb-6 max-w-sm">Empowering women and underserved youth to lead India's clean energy transition through green skills, livelihoods, and community action.</p>
            <div className="space-y-2 mb-6">
              <a href="mailto:info@socialpurpose.org" className="block text-sm text-white/60 hover:text-white">✉ info@socialpurpose.org</a>
              <a href="tel:+918587999521" className="block text-sm text-white/60 hover:text-white">☏ +91 858 7999 521</a>
              <p className="text-sm text-white/60">📍 Ghaziabad, Uttar Pradesh, India</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#programs" className="text-sm text-white/60 hover:text-white transition">Carbon Smart Schools</a></li>
              <li><a href="#programs" className="text-sm text-white/60 hover:text-white transition">Carbon Smart Livelihoods</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Organisation</h4>
            <ul className="space-y-3">
              <li><a href="#team" className="text-sm text-white/60 hover:text-white transition">About Us</a></li>
              <li><a href="#approach" className="text-sm text-white/60 hover:text-white transition">Our Approach</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#get-involved" className="text-sm text-white/60 hover:text-white transition">Donate (80G)</a></li>
              <li><a href="#get-involved" className="text-sm text-white/60 hover:text-white transition">CSR Partnership</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 text-center md:text-left">
          <p>© {new Date().getFullYear()} The Social Purpose Trust. All rights reserved.</p>
          <p>12A · 80G Certified · CSR-1 Registered</p>
        </div>
      </div>
    </footer>
  );
}