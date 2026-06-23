import React from 'react';
import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] py-20 lg:py-32 selection:bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-800 bg-green-100 px-3 py-1.5 rounded-full mb-6 shadow-sm border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
            Our Flagship Initiatives
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
            From climate awareness to <em className="text-orange-500">green livelihood.</em>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Each program addresses a distinct stage of the journey — designed so that together, they create an integrated ecosystem of impact for a Carbon Smart India.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Program 1: 1 Million Solar Initiative */}
          <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row group transform hover:-translate-y-1">
            <div className="lg:w-5/12 bg-gray-100 relative overflow-hidden min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center text-orange-900/30 font-serif text-3xl p-8 text-center group-hover:scale-110 transition-transform duration-700">
                1 Million Solar Initiative
              </div>
            </div>
            <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-3 block">Program 01 · Renewable Energy</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">1 Million Solar Initiative</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Transforming Rural India with solar energy to combat climate change. Currently, only <strong className="text-gray-900">2.15%</strong> of rural households have adopted roof-top solar due to high upfront costs and lack of awareness about subsidies and incentives.
              </p>
              
              <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 mb-10">
                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider border-b border-orange-200 pb-2">Theory of Change</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg leading-none">⚡</span> 
                    <div>
                      <strong>Community Engagement:</strong> Inspire and equip local communities to adopt solar energy and benefit from available incentives.<br/>
                      <span className="text-gray-500 block mt-1">A. Education & Awareness: Provide clear information about the benefits of solar energy, subsidies, and financing options.</span>
                      <span className="text-gray-500 block mt-1">B. Hands-On Support: Assist communities with navigating subsidy applications and securing loans.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3"><span className="text-orange-500 font-bold text-lg leading-none">⚡</span> <strong>Infrastructure Enhancement:</strong> Building local capacity.</li>
                  <li className="flex items-start gap-3"><span className="text-orange-500 font-bold text-lg leading-none">⚡</span> <strong>Local Government Collaboration</strong></li>
                  <li className="flex items-start gap-3"><span className="text-orange-500 font-bold text-lg leading-none">⚡</span> <strong>Expanding Reach Through Partnerships</strong></li>
                </ul>
              </div>
              
              {/* Program 1 Links */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Link href="/programs/1-million-solar" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 group/btn">
                  Explore 1 Million Solar <span aria-hidden="true" className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/get-involved" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-orange-200 hover:border-orange-500 text-orange-700 px-8 py-4 rounded-xl font-bold transition-all">
                  Support This Mission
                </Link>
              </div>
            </div>
          </div>

          {/* Program 2: OffseTree Program */}
          <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row-reverse group transform hover:-translate-y-1">
            <div className="lg:w-5/12 bg-gray-100 relative overflow-hidden min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-500 flex items-center justify-center text-green-900/30 font-serif text-3xl p-8 text-center group-hover:scale-110 transition-transform duration-700">
                OffseTree Program
              </div>
            </div>
            <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3 block">Program 02 · Climate Action</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">OffseTree Program</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                <strong>OBJECTIVE:</strong> The OffseTree Program by The Social Purpose Trust is dedicated to improving India&apos;s green cover and combating climate change through targeted tree planting initiatives. Our goal is to promote miawaki plantation and plant over <strong className="text-gray-900">1 Million trees in upcoming 5 years</strong>, enhancing environmental health and supporting carbon offset efforts.
              </p>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-10">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider border-b border-green-200 pb-2">Ground Collaborations</h4>
                <div className="space-y-5">
                  <div>
                    <strong className="text-green-900 block text-sm mb-1">🤝 NSS NSUT COLLABORATION</strong>
                    <p className="text-sm text-gray-700 leading-relaxed">The Social Purpose Trust successfully completed the extensive plantation drive in Nanak Heri Village, Dwarka Delhi in collaboration with NSS NSUT CELL. We are grateful for tireless efforts of passionate NSS Volunteers.</p>
                  </div>
                  <div>
                    <strong className="text-green-900 block text-sm mb-1">🤝 VINCULAR TEAM COLLABORATION</strong>
                    <p className="text-sm text-gray-700 leading-relaxed">This collaborative effort not only enhanced the green cover of Utsav Park but also fostered a spirit of community engagement and environmental stewardship.</p>
                  </div>
                </div>
              </div>
              
              {/* Program 2 Links */}
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Link href="/programs/offsetree" className="inline-flex items-center justify-center gap-2 bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/30 hover:shadow-green-900/50 group/btn">
                  Explore OffseTree <span aria-hidden="true" className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
                <Link href="/get-involved" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-green-200 hover:border-green-800 text-green-800 px-8 py-4 rounded-xl font-bold transition-all">
                  Join Plantation Drive
                </Link>
              </div>
            </div>
          </div>

          {/* Program 3: Green Skills, Schools & Fellowship */}
          <div className="bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row group transform hover:-translate-y-1">
            <div className="lg:w-5/12 bg-gray-100 relative overflow-hidden min-h-[300px] lg:min-h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-blue-900/30 font-serif text-3xl p-8 text-center group-hover:scale-110 transition-transform duration-700">
                Education & Green Skills
              </div>
            </div>
            <div className="lg:w-7/12 p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3 block">Program 03 · Youth Empowerment</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Carbon Smart Schools & Livelihoods</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We build green pathways — from educating children in solarised schools to creating green livelihood opportunities for women, SHG members, and youth in the renewable energy sector.
              </p>
              
              {/* Premium Direct Links to Inner Pages */}
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {/* Carbon Smart Schools Link */}
                <Link href="/programs/carbon-smart-schools" className="block bg-gray-50 hover:bg-yellow-50 rounded-2xl p-6 border border-gray-200 hover:border-yellow-400 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                  <div className="text-3xl mb-4 transform group-hover/card:scale-110 transition-transform origin-left">🏫</div>
                  <strong className="text-gray-900 block mb-2 text-lg group-hover/card:text-yellow-700 transition-colors">Carbon Smart Schools</strong>
                  <p className="text-sm text-gray-600 mb-4">Powering Schools. Inspiring Futures through solar education.</p>
                  <span className="inline-flex bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-bold text-sm items-center gap-1 group-hover/card:bg-yellow-600 group-hover/card:text-white transition-colors">
                    Explore Schools <span className="group-hover/card:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>

                {/* Carbon Smart Livelihoods Link */}
                <Link href="/programs/carbon-smart-livelihoods" className="block bg-gray-50 hover:bg-orange-50 rounded-2xl p-6 border border-gray-200 hover:border-orange-400 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                  <div className="text-3xl mb-4 transform group-hover/card:scale-110 transition-transform origin-left">🎓</div>
                  <strong className="text-gray-900 block mb-2 text-lg group-hover/card:text-orange-700 transition-colors">Carbon Smart Livelihoods</strong>
                  <p className="text-sm text-gray-600 mb-4">Green skilling pathways for women and youth.</p>
                  <span className="inline-flex bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-bold text-sm items-center gap-1 group-hover/card:bg-orange-600 group-hover/card:text-white transition-colors">
                    Explore Livelihoods <span className="group-hover/card:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                
                {/* 12-Month Fellowship Link */}
                <div className="sm:col-span-2">
                  <Link href="/programs/carbon-smart-green-livelihood-fellowship" className="block bg-gray-50 hover:bg-green-50 rounded-2xl p-6 border border-gray-200 hover:border-green-400 transition-all duration-300 group/card shadow-sm hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl transform group-hover/card:scale-110 transition-transform origin-left">💼</div>
                      <div>
                        <strong className="text-gray-900 block mb-2 text-lg group-hover/card:text-green-800 transition-colors">12-Month Fellowship</strong>
                        <p className="text-sm text-gray-600 mb-4">A field-based, purpose-driven program placing young climate leaders at the frontlines of India's clean energy transition.</p>
                        <span className="inline-flex bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-sm items-center gap-1 group-hover/card:bg-green-800 group-hover/card:text-white transition-colors">
                          View Fellowship <span className="group-hover/card:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="mt-auto">
                <Link href="/register" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-gray-900/30 hover:shadow-gray-900/50 group/btn">
                  Register For Skilling Course <span aria-hidden="true" className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}