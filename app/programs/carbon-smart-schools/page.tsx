import React from 'react';
import Link from 'next/link';

export default function CarbonSmartSchoolsPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-20">
      
      {/* 1. Header */}
      <section className="pt-32 pb-16 px-4 max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800 mb-6">Program 01</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-green-950 mb-8 leading-tight">
          Powering Schools. <br className="hidden sm:block"/>
          <span className="text-orange-500 italic">Inspiring Futures.</span>
        </h1>
        <p className="text-lg sm:text-xl text-green-900 font-medium italic mb-8 border-l-4 border-orange-400 pl-4 max-w-3xl mx-auto text-left sm:text-center sm:border-l-0 sm:border-t sm:pt-6">
          "When a school goes solar, the classroom lights up. When a child learns why, their thinking lights up. When they go home and tell their family, the community lights up."
        </p>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
          Carbon Smart Schools is how that chain reaction starts — at scale, with intention, and with the community at the centre.
        </p>
      </section>

      {/* 2. What We Do */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 sm:p-16 rounded-[2rem] shadow-sm border border-gray-100">
          <h2 className="text-3xl font-serif text-green-950 mb-6">What We Do</h2>
          <div className="space-y-6 text-gray-600 font-light text-base sm:text-lg leading-relaxed">
            <p>
              Carbon Smart Schools works end-to-end — from site assessment and solarisation to clean energy education and community activation — in government schools across Ghaziabad and partner districts in UP.
            </p>
            <p>
              In partnership with the <strong className="font-medium text-gray-900">District Administration of Ghaziabad</strong>, we have trained 70 school Principals on solar energy transition and climate education integration. This is the foundation of a programme designed to create systemic change in how schools engage with the green transition.
            </p>
            <p>
              We don't just install solar panels. We build understanding, ownership, and pride around them — so every solarised school becomes a living model of what a clean energy future looks like.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Four-Step Programme (Smooth Steps) */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-green-950">The Four-Step Programme</h2>
        </div>

        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-5xl font-serif text-orange-300">01</div>
            <div>
              <h3 className="text-2xl font-bold text-green-950 mb-3">Assessment & Solarisation</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Every school begins with a rigorous site assessment: current energy consumption, rooftop capacity, structural readiness, and alignment with PM Surya Ghar. We manage end-to-end solarisation — design, installation, commissioning, and formal handover with the District Administration. Every principal and SMC member receives a system orientation.
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-5xl font-serif text-orange-300">02</div>
            <div>
              <h3 className="text-2xl font-bold text-green-950 mb-3">Clean Energy Education for Students</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Once solarised, the school's solar system becomes its own teaching tool. We conduct interactive sessions for Classes 6–10 covering:
              </p>
              <ul className="space-y-2 text-gray-600 font-light text-sm">
                <li><span className="text-orange-500 mr-2">•</span> How solar energy works and why it matters</li>
                <li><span className="text-orange-500 mr-2">•</span> What the school's system produces vs fossil fuels</li>
                <li><span className="text-orange-500 mr-2">•</span> India's renewable energy commitments (SDG 7 & 13)</li>
                <li><span className="text-orange-500 mr-2">•</span> What students can do at home to drive change</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-5xl font-serif text-orange-300">03</div>
            <div>
              <h3 className="text-2xl font-bold text-green-950 mb-3">Principal Leadership & Institutional Integration</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                School leaders are climate change agents. We facilitated a dedicated training programme for 70 Principals, helping them champion climate education and embed sustainable practices. Climate action cannot be an external vertical — it must be woven into the institution's culture.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-5xl font-serif text-orange-300">04</div>
            <div>
              <h3 className="text-2xl font-bold text-green-950 mb-3">Community Activation & Solar Awareness</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Each school sits at the centre of a community. We activate that community through Solar Samvads with parents, SHG networks, and Panchayats. Schools that demonstrate strong community engagement become priority sites for our Carbon Smart Livelihoods programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Evidence & SDGs */}
      <section className="py-16 bg-[#152E1C] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl font-serif text-orange-400 mb-8">Field Evidence</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-3xl font-black mb-1">70</p>
                <p className="text-sm font-light text-green-100">School Principals trained in Ghaziabad in partnership with the District Administration.</p>
              </div>
              <div className="border-l-2 border-green-500 pl-4">
                <p className="text-3xl font-black mb-1">2,500</p>
                <p className="text-sm font-light text-green-100">Households reached across 15 villages in 3 days through the Solar Samvad Campaign.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-orange-400 mb-8">SDG Alignment</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-white mb-1">SDG 4 — Quality Education</h4>
                <p className="text-sm font-light text-green-100/70">Embedding climate and clean energy literacy into school curricula creates informed climate citizens.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">SDG 7 — Affordable & Clean Energy</h4>
                <p className="text-sm font-light text-green-100/70">Direct solar installation demonstrates clean energy in practice at the community level.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">SDG 13 — Climate Action</h4>
                <p className="text-sm font-light text-green-100/70">Building a generation that understands India's climate commitments and their role in them.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Partner CTA */}
      <section className="py-20 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif text-green-950 mb-6">Partner With Us</h2>
        <p className="text-gray-600 font-light mb-8">
          Corporates and institutional partners can sponsor end-to-end solarisation of one or more government schools — including installation, education programming, and impact documentation.
        </p>
        <Link href="/get-involved" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition shadow-sm">
          CSR & Institutional Partnership →
        </Link>
      </section>

    </main>
  );
}