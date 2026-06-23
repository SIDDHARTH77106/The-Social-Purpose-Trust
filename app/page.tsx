import React from 'react';
import Link from 'next/link';
import Hero from './components/home/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] selection:bg-orange-200 pb-20">
      
      {/* 1. HERO SECTION */}
      <Hero />
      
      {/* 2. WHO WE ARE (Brief Teaser linking to About Page) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-gray-200">
        <span className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2 block">Our Purpose</span>
        <h2 className="text-3xl font-serif text-gray-900 mb-6">Building a Carbon Smart India</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          The Social Purpose Trust is committed to reversing climate change and fostering sustainable practices. We are a dedicated team empowering communities to adopt a solar lifestyle for a greener, more resilient future.
        </p>
        <Link href="/about" className="inline-block text-sm font-bold text-orange-600 hover:text-orange-800 border-b-2 border-orange-600 hover:border-orange-800 pb-1 transition">
          Discover Our Story & Team →
        </Link>
      </section>

      {/* 3. PROGRAMS: 1 Million Solar & OffseTree */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2 block">Our Initiatives</span>
            <h2 className="text-4xl font-serif text-gray-900">Choose Your Favourite Program</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 1 Million Solar */}
            <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 w-max">Renewable Energy</span>
              <h3 className="text-3xl font-serif text-gray-900 mb-4">1 Million Solar Initiative</h3>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Transforming Rural India With Solar Energy To Combat Climate Change.</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Only <strong>2.15%</strong> of households have adopted roof top solar due to high up front costs and lack of awareness about subsidies and incentives.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-orange-200 mb-6 flex-grow">
                <h4 className="font-bold text-gray-900 mb-4 text-lg border-b border-gray-100 pb-2">Theory of Change</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li>
                    <strong className="text-gray-900 block mb-1">⚡ Community Engagement:</strong> 
                    Inspire and equip local communities to adopt solar energy.<br/>
                    <em>A. Education & Awareness:</em> Provide clear information about the benefits of solar.<br/>
                    <em>B. Hands-On Support:</em> Assist communities with navigating subsidy applications.
                  </li>
                  <li><strong className="text-gray-900">⚡ Infrastructure Enhancement</strong></li>
                  <li><strong className="text-gray-900">⚡ Local Government Collaboration</strong></li>
                  <li><strong className="text-gray-900">⚡ Expanding Reach Through Partnerships</strong></li>
                </ul>
              </div>
              <p className="text-sm font-bold text-orange-800 bg-orange-100 p-4 rounded-lg text-center">JOIN US IN OUR MISSION TO EQUIP 1 MILLION RURAL HOMES WITH CLEAN, AFFORDABLE SOLAR ENERGY.</p>
            </div>

            {/* OffseTree */}
            <div className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <span className="bg-green-700 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6 w-max">Climate Action</span>
              <h3 className="text-3xl font-serif text-gray-900 mb-4">OffseTree Program</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                <strong>OBJECTIVE:</strong> The OffseTree Program by The Social Purpose Trust is dedicated to improving India’s green cover and combating climate change through targeted tree planting initiatives. Our goal is to promote miawaki plantation and plant over <strong>1 Million trees in upcoming 5 years</strong>, enhancing environmental health and supporting carbon offset efforts.
              </p>
              <div className="space-y-6 flex-grow">
                <div className="bg-white p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">🤝 NSS NSUT COLLABORATION</h4>
                  <p className="text-sm text-gray-600">The Social Purpose Trust successfully completed the extensive plantation drive in Nanak Heri Village, Dwarka Delhi in collaboration with NSS NSUT CELL. We are grateful for tireless efforts of passionate NSS Volunteers of NSS NSUT CELL.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">🤝 VINCULAR TEAM COLLABORATION</h4>
                  <p className="text-sm text-gray-600">This collaborative effort not only enhanced the green cover of Utsav Park but also fostered a spirit of community engagement and environmental stewardship. A heartfelt thank you to Shubham Singh, Karan Negi and VINCULAR team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* DEDICATED BUTTON TO GO TO MAIN PROGRAMS PAGE */}
          <div className="mt-16 text-center">
            <Link href="/programs" className="inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1 hover:shadow-xl group">
              Explore All Detailed Programs 
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. GET CERTIFIED / EDUCATION SECTION */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2 block">Learn & Grow</span>
              <h2 className="text-3xl sm:text-4xl font-serif mb-4">Not only learn !! also GET CERTIFIED WITH TSP&apos;s program</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our courses, quizzes, and certifications are part of a broader social purpose to build a knowledgeable, skilled, and enriched community. 
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-orange-400 mb-3">Welcome to the Carbon smart quiz</h4>
                <p className="text-sm text-gray-300">This quiz is designed to test your knowledge on topics like Carbon Smart India, Solar Saathi, Sustainable Development, and Offsetree.</p>
              </div>

              <h4 className="font-bold text-white mb-4">We aim to:</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <p className="text-sm text-gray-300"><strong>Empower Individuals:</strong> Providing tools and knowledge to enhance personal and professional lives.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <p className="text-sm text-gray-300"><strong>Foster Community Spirit:</strong> Encouraging active participation and leadership in community service.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <p className="text-sm text-gray-300"><strong>Promote Climatic Growth:</strong> Deepening understanding and development towards sustanaible practices.</p>
                </li>
              </ul>
              
              <Link href="/register" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-md font-bold transition inline-block">
                Take the Quiz / Register →
              </Link>
            </div>
            
            {/* Impact Stats visually appealing */}
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <h3 className="text-2xl font-serif mb-8 text-orange-400">Our Mission Impact</h3>
              <div className="space-y-10">
                <div>
                  <div className="text-5xl font-serif text-white mb-2">1,000,000</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest font-bold">Household Target</div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <div className="text-5xl font-serif text-white">2.15<span className="text-orange-400">%</span></div>
                    <div className="text-sm text-gray-400 font-medium pb-1">Current Adoption</div>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[2.15%] rounded-full relative">
                      <span className="absolute right-0 top-0 w-2 h-2 bg-white rounded-full animate-ping"></span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 text-right">Join us to equip 1 Million homes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / GET INVOLVED */}
      <section className="py-20 bg-orange-50 border-t border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">You give but little when you give of your possessions.</h2>
          <p className="text-lg text-gray-600 mb-10 italic">&quot;It is when you give of yourself that you truly give.&quot;</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-involved" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg shadow-md transition flex items-center justify-center">
              Donate Now
            </Link>
            <Link href="/get-involved" className="bg-white border-2 border-green-900 text-green-900 hover:bg-green-50 px-8 py-4 rounded-md font-bold text-lg transition flex items-center justify-center">
              Volunteer With Us
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500">For Careers & Opportunities, check our <Link href="/careers" className="text-orange-600 underline hover:text-orange-800">Job Board</Link>.</p>
        </div>
      </section>

    </main>
  );
}