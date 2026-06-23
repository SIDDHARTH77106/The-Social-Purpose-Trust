"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// 1. Ye Smooth Counter Component hai (Jab scroll karenge tab animate hoga)
const AnimatedCounter = ({ value, prefix = "", suffix = "", duration = 2500 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Ek baar trigger hone ke baad ruk jayega
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (smooth slow-down at the end)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString()}<span className="text-orange-500">{suffix}</span>
    </span>
  );
};

export default function ImpactPage() {
  // Maine numbers ko alag kar diya hai taaki animation smooth chale
  const pilotStats = [
    { prefix: "", num: 100, suffix: "+", title: "Youth Engaged", desc: "in our pilot programme, Ghaziabad" },
    { prefix: "", num: 30, suffix: "+", title: "Women Trained", desc: "through Carbon Smart Livelihoods pilot" },
    { prefix: "", num: 50, suffix: "%", title: "Active Earning Rate", desc: "of trained participants transitioned to income-generating roles" },
    { prefix: "₹", num: 8, suffix: "K+", title: "Avg. Monthly Earnings", desc: "for active participants in livelihood roles" },
    { prefix: "", num: 2500, suffix: "", title: "Households Reached", desc: "through Solar Samvad Campaign · 15 villages · 3 days" },
    { prefix: "", num: 70, suffix: "", title: "Principals Trained", desc: "on solar energy & climate education · District Admin Ghaziabad" },
    { prefix: "", num: 1, suffix: "", title: "Operational Centre", desc: "Green Skills Training Centre, Govindapuram — fully equipped" },
    { prefix: "", num: 2, suffix: "", title: "Government MoUs", desc: "District Administrations of Ghaziabad and Gautam Buddha Nagar" }
  ];

  const sdgContributions = [
    { id: "04", title: "Quality Education", desc: "70 school principals trained. Carbon Smart Schools programme building climate literacy in government school systems." },
    { id: "05", title: "Gender Equality", desc: "30+ women trained in green livelihoods. 50% transition to earning roles. Suman Devi — ₹8K+/month from home." },
    { id: "07", title: "Clean Energy", desc: "Solar Samvad campaign reached 2,500 households. PM Surya Ghar subsidy navigation support delivered." },
    { id: "08", title: "Decent Work", desc: "Active earning pathways created. Verified income of ₹8,000+ per month for active participants." },
    { id: "10", title: "Reduced Inequalities", desc: "All programmes targeted at semi-urban and peri-urban communities in western UP." },
    { id: "13", title: "Climate Action", desc: "Green Skills Training Centre operational. Fellowship placed youth at frontlines of clean energy adoption." },
    { id: "17", title: "Partnerships", desc: "MoUs with 2 district administrations. Partnerships with VINCULAR, SAY, Saarthak Collective." }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans">
      
      {/* 1. Page Header */}
      <section className="pt-32 pb-16 px-4 max-w-5xl mx-auto text-center border-b border-gray-200/50">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-6">Pilot Impact — Early Evidence</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-green-950 mb-8 leading-tight">
          Real numbers from our <br className="hidden sm:block"/> ground-level work
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
          We are at an early stage. These figures come from our pilot programmes and verified field activity. We share them with full transparency — not as proof of scale, but as evidence of a model that works and a team that executes.
        </p>
      </section>

      {/* 2. Verified Impact Grid (With Smooth Counter Animation) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-px bg-green-200 flex-grow max-w-[100px]"></div>
          <span className="text-sm font-bold text-green-800 uppercase tracking-widest px-4">Verified · 2024–25 Pilot</span>
          <div className="h-px bg-green-200 flex-grow max-w-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {pilotStats.map((stat, index) => (
            <div key={index} className="flex flex-col group text-center sm:text-left">
              {/* Animated Numbers */}
              <div className="text-6xl sm:text-7xl font-serif text-green-950 mb-2 transition-transform group-hover:-translate-y-1 duration-300">
                <AnimatedCounter value={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 border-t border-gray-200 pt-4 mt-2">
                {stat.title}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SDG Contribution */}
      <section className="py-24 bg-[#152E1C] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:w-1/2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-4 block">Global Alignment</span>
            <h2 className="text-4xl font-serif text-white">SDG Contribution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {sdgContributions.map((sdg, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="text-3xl font-serif text-orange-400 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all">
                  {sdg.id}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-100 mb-2 uppercase tracking-wide">SDG {sdg.id}: {sdg.title}</h4>
                  <p className="text-sm text-green-100/70 font-light leading-relaxed">
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Are Building Toward */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-start gap-12 sm:gap-16">
          <div className="sm:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-serif text-green-950 sticky top-32">
              What we are building toward
            </h2>
            <p className="text-sm text-gray-500 mt-4 italic">Targets for 2025–26</p>
          </div>
          
          <div className="sm:w-2/3 space-y-8 text-left">
            <div className="flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <span className="text-orange-500 text-xl font-bold">↗</span>
              <p className="text-lg text-gray-700 font-light leading-relaxed"><strong className="text-gray-900 font-medium">500+ women and youth</strong> skilled through Carbon Smart Livelihoods.</p>
            </div>
            <div className="flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <span className="text-orange-500 text-xl font-bold">↗</span>
              <p className="text-lg text-gray-700 font-light leading-relaxed"><strong className="text-gray-900 font-medium">10+ government schools</strong> solarised under Carbon Smart Schools.</p>
            </div>
            <div className="flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <span className="text-orange-500 text-xl font-bold">↗</span>
              <p className="text-lg text-gray-700 font-light leading-relaxed">Launch of the <strong className="text-gray-900 font-medium">second CSGLF cohort</strong>.</p>
            </div>
            <div className="flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <span className="text-orange-500 text-xl font-bold">↗</span>
              <p className="text-lg text-gray-700 font-light leading-relaxed">Establishment of the first formal <strong className="text-gray-900 font-medium">solar company placement partnerships</strong>.</p>
            </div>
            <div className="flex gap-4 items-start hover:-translate-y-1 transition-transform">
              <span className="text-orange-500 text-xl font-bold">↗</span>
              <p className="text-lg text-gray-700 font-light leading-relaxed"><strong className="text-gray-900 font-medium">Expansion</strong> of the Green Skills Training Centre to accommodate larger cohorts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-20 bg-orange-50 border-t border-orange-100/50 text-center px-4">
        <h2 className="text-3xl font-serif text-green-950 mb-6">Be part of the next milestone</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-light">Whether you are a corporation looking for verified CSR impact, or an individual wanting to support green livelihoods, join us in scaling this work.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/get-involved" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
            Partner With Us
          </Link>
          <Link href="/donate" className="bg-transparent border-2 border-green-900 text-green-950 hover:bg-green-50 px-8 py-4 rounded-full font-bold text-sm transition-all hover:-translate-y-1">
            Donate (80G)
          </Link>
        </div>
      </section>

    </main>
  );
}