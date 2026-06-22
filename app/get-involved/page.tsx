import React from 'react';
import Link from 'next/link';

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-20">
      
      {/* 1. Header Section (Smooth & Typography Focused) */}
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800 mb-6">Get Involved</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-green-950 mb-8 leading-tight">
          Join India's <span className="text-orange-500 italic">carbon smart</span> movement
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
          Whether you are a corporation, a student, a professional, or an individual — there is a meaningful role for you in this work.
        </p>
      </section>

      {/* 2. CSR & Institutional Partnership (Premium Dark Section) */}
      <section className="py-20 bg-[#152E1C] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/5">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4 block">Corporate Partnerships</span>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">CSR & Institutional Partnership</h2>
            <p className="text-green-100/80 font-light leading-relaxed mb-8 text-sm sm:text-base">
              The Social Purpose Trust is fully compliant for receiving CSR funds under the Companies Act 2013. We build structured, ESG-aligned partnerships with verified impact reporting.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">12A</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">80G</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">CSR-1</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase border border-white/20">Sec. 135</span>
            </div>
            <a href="mailto:info@socialpurpose.org" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-sm transition">
              Contact: info@socialpurpose.org
            </a>
          </div>
          
          <div className="lg:w-3/5">
            <h3 className="text-xl font-bold text-orange-400 mb-6 border-b border-white/10 pb-4">What we offer CSR partners:</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <span className="text-orange-500 font-bold mt-1 group-hover:translate-x-1 transition">→</span>
                <div>
                  <h4 className="font-bold text-white mb-1">School solarisation</h4>
                  <p className="text-sm font-light text-green-100/70">Sponsor one or more government schools end-to-end.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="text-orange-500 font-bold mt-1 group-hover:translate-x-1 transition">→</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Skilling cohort sponsorship</h4>
                  <p className="text-sm font-light text-green-100/70">Fund a defined cohort through Carbon Smart Livelihoods.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="text-orange-500 font-bold mt-1 group-hover:translate-x-1 transition">→</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Fellowship co-creation</h4>
                  <p className="text-sm font-light text-green-100/70">Co-fund a CSGLF cohort aligned to your workforce needs.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="text-orange-500 font-bold mt-1 group-hover:translate-x-1 transition">→</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Employee volunteering days</h4>
                  <p className="text-sm font-light text-green-100/70">Structured engagement at our Ghaziabad centre.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="text-orange-500 font-bold mt-1 group-hover:translate-x-1 transition">→</span>
                <div>
                  <h4 className="font-bold text-white mb-1">Impact documentation</h4>
                  <p className="text-sm font-light text-green-100/70">Verified CSR report with SDG mapping and beneficiary data.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Volunteer & Intern (Smooth Split Layout, No Boxes) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Volunteer */}
          <div>
            <span className="text-3xl mb-4 block">🙋🏽‍♀️</span>
            <h2 className="text-3xl font-serif text-green-950 mb-4">Volunteer</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              We welcome students, graduates, and professionals who want to contribute real skills to our work in Ghaziabad. Delhi-NCR students especially welcome — Ghaziabad is well connected by Metro.
            </p>
            <h4 className="font-bold text-green-900 mb-4 text-sm uppercase tracking-wider">Opportunities include:</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-light mb-8">
              <li className="flex gap-2"><span className="text-orange-500">•</span> Community outreach and Solar Samvad facilitation</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Content, communications, and impact storytelling</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Research, monitoring, and evaluation</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Solar literacy facilitation at Carbon Smart Schools</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Fellowship support and peer mentoring</li>
            </ul>
            <Link href="/register" className="inline-block border-b-2 border-green-900 text-green-900 font-bold pb-1 hover:text-orange-600 hover:border-orange-600 transition">
              Apply to Volunteer →
            </Link>
          </div>

          {/* Intern */}
          <div>
            <span className="text-3xl mb-4 block">💼</span>
            <h2 className="text-3xl font-serif text-green-950 mb-4">Intern at TSP</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Structured internships at our Govindapuram, Ghaziabad office for students and early-career professionals. Real work. Real responsibility. Direct founder mentorship.
            </p>
            <h4 className="font-bold text-green-900 mb-4 text-sm uppercase tracking-wider">What you will actually do:</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-light mb-8">
              <li className="flex gap-2"><span className="text-orange-500">•</span> Field work with communities in western UP</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Programme support (Schools, Livelihoods, Fellowship)</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Content, communications, social media</li>
              <li className="flex gap-2"><span className="text-orange-500">•</span> Research and monitoring & evaluation</li>
            </ul>
            <Link href="/register" className="inline-block border-b-2 border-green-900 text-green-900 font-bold pb-1 hover:text-orange-600 hover:border-orange-600 transition">
              Apply for Internship →
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Donate CTA Banner */}
      <section className="py-20 bg-orange-50 border-y border-orange-100 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4 block">80G Certified</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-green-950 mb-6">Fund the Green Transition</h2>
          <p className="text-gray-600 font-light mb-8 text-sm sm:text-base leading-relaxed">
            Your donation funds green skilling sessions, fellowship stipends, solar awareness workshops, and community mobilisation that directly changes lives. 50% tax deduction available for Indian donors.
          </p>
          <Link href="/donate" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition shadow-sm">
            Donate Now →
          </Link>
        </div>
      </section>

    </main>
  );
}