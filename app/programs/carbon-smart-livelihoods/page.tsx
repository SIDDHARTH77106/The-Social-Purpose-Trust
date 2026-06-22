import React from 'react';
import Link from 'next/link';

export default function CarbonSmartLivelihoodsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-20">
      
      {/* 1. Header */}
      <section className="pt-32 pb-16 px-4 max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800 mb-6">Program 02</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-green-950 mb-8 leading-tight">
          Carbon Smart <br className="hidden sm:block"/>
          <span className="text-orange-500 italic">Livelihoods</span>
        </h1>
        <p className="text-xl sm:text-2xl font-serif text-gray-800 mb-4">
          One skill. One livelihood. One woman at a time.
        </p>
        <p className="text-lg text-orange-600 font-medium italic mb-8">
          Until the green workforce looks like India actually does.
        </p>
        <div className="max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-gray-600 font-light leading-relaxed text-left sm:text-center">
          <p>
            Women make up only <strong className="font-medium text-gray-900">11%</strong> of India's renewable energy workforce. Not because they aren't capable. Not because they aren't interested. Because the pathway was never built for them.
          </p>
          <p>
            Carbon Smart Livelihoods is that pathway. Built from the ground up. Delivered from our Green Skills Training Centre in Govindapuram, Ghaziabad.
          </p>
        </div>
      </section>

      {/* 2. The Surya Shakti Kendra Model */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 p-10 sm:p-16 rounded-[2rem] border border-orange-100">
          <h2 className="text-3xl font-serif text-green-950 mb-6">The Surya Shakti Kendra Model</h2>
          <p className="text-gray-700 font-light text-base sm:text-lg leading-relaxed mb-6">
            At the heart of Carbon Smart Livelihoods is the Surya Shakti Kendra — our community-embedded green skills centre in Govindapuram, Ghaziabad. Equipped with tablets, solar training kits, and digital learning infrastructure, the Kendra is the physical and institutional anchor for everything we do.
          </p>
          <p className="text-gray-700 font-light text-base sm:text-lg leading-relaxed">
            It is not just a training room. It is a demonstration space, a community meeting point, and a launchpad for green livelihoods. It signals to the community that the green economy has arrived in their neighbourhood — and that there is a place for them in it.
          </p>
        </div>
      </section>

      {/* 3. The Programme Journey (Clean Grid) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-green-950">The Programme Journey</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition">
            <span className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2 block">Stage 1</span>
            <h3 className="text-xl font-bold text-green-950 mb-4">Community Mobilisation & Outreach</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              We reach participants through SHG federation meetings, Anganwadi networks, college campus visits, and door-to-door campaigns. Our Solar Samvad Campaign model demonstrates what community-scale mobilisation looks like. Our field coordinators and Surya Preraks are at the front of this outreach.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition">
            <span className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2 block">Stage 2</span>
            <h3 className="text-xl font-bold text-green-950 mb-4">Practical Green Skilling</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
              Built on the Learn–Practice–Reflect–Grow model. Delivered in Hindi. 4–6 weeks structured training + 4 weeks field placement. Focus areas:
            </p>
            <ul className="text-xs text-gray-500 space-y-2 font-medium">
              <li>• Solar Energy Fundamentals</li>
              <li>• Digital Literacy (CRM, Smartphones)</li>
              <li>• Communication & Soft Skills</li>
              <li>• Green Entrepreneurship</li>
              <li>• AI-Enabled Learning Modules</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition">
            <span className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2 block">Stage 3</span>
            <h3 className="text-xl font-bold text-green-950 mb-4">Livelihood Placement</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
              Skilling without opportunity is incomplete. Participants are linked to income-generating roles through our growing ecosystem (MoUs with Ghaziabad & GB Nagar admins). Roles include:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-50 text-green-900 rounded text-[10px] font-bold uppercase">Solar Calling Agent</span>
              <span className="px-2 py-1 bg-green-50 text-green-900 rounded text-[10px] font-bold uppercase">Installation Support</span>
              <span className="px-2 py-1 bg-green-50 text-green-900 rounded text-[10px] font-bold uppercase">Surya Prerak</span>
              <span className="px-2 py-1 bg-green-50 text-green-900 rounded text-[10px] font-bold uppercase">Green Entrepreneur</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition">
            <span className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2 block">Stage 4</span>
            <h3 className="text-xl font-bold text-green-950 mb-4">Ecosystem Support & Compounding</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Participants remain connected to the TSP network after placement — for peer learning, advanced skilling, and referrals. A calling agent can grow into a team leader. A team leader becomes a facilitator for the next cohort. Every trained participant becomes a mobiliser.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Suman Devi Testimonial */}
      <section className="py-20 bg-[#152E1C] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-3xl block mb-6">💬</span>
          <p className="text-xl sm:text-2xl font-serif text-white italic leading-relaxed mb-8">
            "Suman Devi had never worked outside her home. As a homemaker in Rajapur with no prior technical background, the idea of earning in a technical field felt far away. Today she earns ₹8,000+ a month — from home — connecting households to solar energy solutions."
          </p>
          <p className="text-lg font-medium text-orange-400 mb-2">
            "Pehle darr lagta tha. Ab accha lag rha hai ghar se hi paise kama sakti hun."
          </p>
          <p className="text-sm text-green-100/70 font-light">
            — Suman Devi, Homemaker, Rajapur · Participant
          </p>
        </div>
      </section>

      {/* 5. SDGs & CTA */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-serif text-green-950 mb-8">Aligned with Global Goals</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700">SDG 5: Gender Equality</span>
          <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700">SDG 8: Decent Work</span>
          <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-700">SDG 10: Reduced Inequalities</span>
        </div>

        <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-serif text-green-950 mb-4">Partner With Us</h2>
          <p className="text-gray-600 font-light text-sm mb-8 max-w-2xl mx-auto">
            Solar companies, EV businesses, housing firms, and foundations can sponsor skilling cohorts, co-design curricula, or fund Surya Shakti Kendra infrastructure.
          </p>
          <Link href="/get-involved" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition shadow-sm">
            Become an Ecosystem Partner →
          </Link>
        </div>
      </section>

    </main>
  );
}