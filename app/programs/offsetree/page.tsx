import React from 'react';
import Link from 'next/link';

export default function OffseTreePage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-green-200 font-sans pb-20">
      
      {/* 1. Hero Image Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Aap yahan background image add kar sakte hain */}
        <div className="absolute inset-0 bg-[#2D4A22]">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <h1 className="relative z-10 text-5xl sm:text-7xl font-serif text-white tracking-wide shadow-black drop-shadow-xl">
          OffseTree
        </h1>
      </section>

      {/* 2. Our Mission & Big Number */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-green-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 font-light text-lg leading-relaxed mb-6">
              The <strong className="font-medium text-gray-900">OffseTree Program</strong> by The Social Purpose Trust is dedicated to improving India&apos;s green cover and combating climate change through targeted tree planting initiatives. Our goal is to promote miyawaki plantation and plant over <strong className="font-medium text-gray-900">1 million trees in upcoming 5 years</strong>, enhancing environmental health and supporting carbon offset efforts.
            </p>
            <p className="text-gray-700 font-light text-lg leading-relaxed">
              Our tree plantation projects often involve local communities, providing them with employment opportunities and fostering a sense of ownership and responsibility towards the environment.
            </p>
          </div>
          
          <div className="lg:w-1/2 text-center">
            <h3 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#2D7A4D] mb-4">1,000,000</h3>
            <p className="text-gray-500 font-medium mb-6 uppercase tracking-widest text-sm">In upcoming 5 years</p>
            <h4 className="text-3xl sm:text-4xl font-serif text-gray-900 leading-tight">Planting Trees for Offsetting Carbon Emission</h4>
          </div>
        </div>
      </section>

      {/* 3. Key Components (The Yellow/Green Box from Screenshot) */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
          <div className="bg-[#F2C55C] p-10 lg:p-16 grid sm:grid-cols-3 gap-10 text-center">
            
            <div className="flex flex-col items-center group">
              <div className="text-6xl mb-6 text-green-800 group-hover:scale-110 transition-transform">🌱</div>
              <h4 className="font-bold text-green-900 mb-4 text-lg">Strategic Planting Initiatives</h4>
              <p className="text-xs text-green-950/80 font-medium leading-relaxed">
                <strong className="text-green-900">Locations:</strong> Identify and prepare optimal planting sites.<br/>
                <strong className="text-green-900">Events:</strong> Organize community and partner-led planting days to achieve our target.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="text-6xl mb-6 text-green-800 group-hover:scale-110 transition-transform">👥</div>
              <h4 className="font-bold text-green-900 mb-4 text-lg">Community Engagement</h4>
              <p className="text-xs text-green-950/80 font-medium leading-relaxed">
                <strong className="text-green-900">Volunteers:</strong> Mobilize local volunteers to participate in the planting process.<br/>
                <strong className="text-green-900">Education:</strong> Raise awareness about the benefits of tree planting for carbon offsetting.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="text-6xl mb-6 text-green-800 group-hover:scale-110 transition-transform">🔍</div>
              <h4 className="font-bold text-green-900 mb-4 text-lg">Monitoring & Support</h4>
              <p className="text-xs text-green-950/80 font-medium leading-relaxed">
                <strong className="text-green-900">Care:</strong> Provide ongoing support and maintenance to ensure healthy growth.<br/>
                <strong className="text-green-900">Impact Tracking:</strong> Monitor and report on the progress and impact of the program.
              </p>
            </div>
            
          </div>
          <div className="bg-[#3D784A] text-white text-center py-6">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-widest uppercase">Key Components</h2>
          </div>
        </div>
      </section>

      {/* 4. Get Involved */}
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">GET INVOLVED</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24">
          <div className="flex flex-col items-center max-w-xs">
            <Link href="/get-involved" className="w-32 h-32 bg-[#F2C55C] hover:bg-orange-400 text-green-900 rounded-full flex flex-col items-center justify-center transition-all shadow-md hover:shadow-lg hover:-translate-y-2 mb-6">
              <span className="text-4xl mb-1">🤝</span>
              <span className="font-bold text-sm uppercase">Join Us</span>
            </Link>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">Participate in tree planting events or support the initiative through donations.</p>
          </div>
          
          <div className="flex flex-col items-center max-w-xs">
            <Link href="/contact" className="w-32 h-32 bg-[#F2C55C] hover:bg-orange-400 text-green-900 rounded-full flex flex-col items-center justify-center transition-all shadow-md hover:shadow-lg hover:-translate-y-2 mb-6">
              <span className="text-4xl mb-1">📱</span>
              <span className="font-bold text-sm uppercase">Follow Us</span>
            </Link>
            <p className="text-sm text-gray-700 font-medium leading-relaxed">Stay updated on our planting activities and the positive impact on the environment.</p>
          </div>
        </div>
      </section>

      {/* 5. Our Campaigns */}
      <section className="py-24 bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-16">OUR CAMPAIGNS</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Campaign 01 */}
            <div className="bg-[#3D784A] p-10 flex flex-col justify-center text-white h-full min-h-[300px]">
              <span className="text-6xl font-light mb-4">01</span>
              <h3 className="font-bold text-xl mb-6">Plantation drive in collaboration with VINCULAR</h3>
              <p className="text-sm font-medium leading-relaxed opacity-90">The Social Purpose Trust successfully completed the plantation drive in collaboration with VINCULAR in Utsav Park, New Ganesh Nagar, Delhi. We planted 100 saplings, taking a significant step.</p>
            </div>
            
            {/* Image Placeholder 1 */}
            <div className="bg-gray-800 min-h-[300px] flex items-center justify-center">
              <span className="text-gray-500 font-serif italic">Image Placeholder (Campaign 1)</span>
            </div>
            
            {/* Campaign 02 */}
            <div className="bg-[#3D784A] p-10 flex flex-col justify-center text-white h-full min-h-[300px]">
              <span className="text-6xl font-light mb-4">02</span>
              <h3 className="font-bold text-xl mb-6">Plantation drive-NSS NSUT</h3>
              <p className="text-sm font-medium leading-relaxed opacity-90">The Social Purpose Trust successfully completed the extensive plantation drive in Nanak Heri Village, Dwarka Delhi in collaboration with NSS NSUT CELL. We are grateful for tireless efforts of passionate NSS Volunteers.</p>
            </div>

            {/* Image Placeholder 2 */}
            <div className="bg-gray-800 min-h-[300px] flex items-center justify-center">
              <span className="text-gray-500 font-serif italic">Image Placeholder (Campaign 2)</span>
            </div>

            {/* Campaign 03 */}
            <div className="bg-[#2D5A37] p-10 flex flex-col justify-center text-white h-full min-h-[300px]">
              <span className="text-6xl font-light text-green-200 mb-4">03</span>
              <h3 className="font-bold text-2xl uppercase">AND MUCH MORE EVENTS AND CAMPAIGNS TO COME</h3>
            </div>

            {/* Image Placeholder 3 */}
            <div className="bg-gray-800 min-h-[300px] flex items-center justify-center relative overflow-hidden group">
              <span className="text-gray-500 font-serif italic z-10 relative">Image Placeholder (Future)</span>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}