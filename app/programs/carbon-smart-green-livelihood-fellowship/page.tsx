"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function FellowshipPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is this fellowship paid?",
      a: "✎ PLACEHOLDER: Confirm stipend structure with leadership. Describe accurately once confirmed."
    },
    {
      q: "Do I need a solar or technical background?",
      a: "No. We train from the ground up at our Green Skills Training Centre. What matters is commitment and a willingness to learn in the field."
    },
    {
      q: "Is it fully in-person?",
      a: "No. The fellowship is hybrid — in-person at our Govindapuram centre for the first phase, then field immersion with hybrid check-ins, and remote learning modules throughout. Fellows should expect to spend significant time in Ghaziabad and western UP field sites."
    },
    {
      q: "What happens after the fellowship?",
      a: "Active placement support through the TSP network — introductions to solar companies, development sector employers, skilling organisations, and further education opportunities. Fellows also have the option to continue as field coordinators or Surya Preraks within TSP programmes."
    },
    {
      q: "Can I apply if I am in my final year of college?",
      a: "Yes. You can apply in your final year and join after completing your degree. We ask only that fellows can commit fully during the programme."
    },
    {
      q: "Where is the base location?",
      a: "Green Skills Training Centre, Govindapuram, Ghaziabad, Uttar Pradesh. Ghaziabad is well-connected to Delhi by Metro."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-20">
      
      {/* 1. Header Section */}
      <section className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800 mb-6">
          Program 03 · Now Recruiting
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-green-950 mb-8 leading-tight">
          Carbon Smart Green <br className="hidden sm:block"/> 
          <span className="text-orange-500 italic">Livelihood Fellowship</span>
        </h1>
        <p className="text-xl sm:text-2xl font-serif text-gray-800 mb-6">
          Empowering Youth. Enabling Green Futures.
        </p>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
          India's green economy needs leaders who have been in the field — who have sat in a Solar Sabha, listened to a family navigate a subsidy application, trained a woman as a calling agent from scratch, and come back the next day more committed than before. The Carbon Smart Green Livelihood Fellowship trains those leaders.
        </p>
      </section>

      {/* 2. About & At-a-Glance (Smooth Two-Column Layout) */}
      <section className="py-16 border-t border-gray-200/60 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-serif text-green-950 mb-6">About the Fellowship</h2>
            <div className="space-y-6 text-gray-600 font-light text-base sm:text-lg leading-relaxed">
              <p>
                The Carbon Smart Green Livelihood Fellowship (CSGLF) is a 6-month hybrid fellowship that places motivated young people at the frontlines of India's green livelihood transition — combining in-person training at our Ghaziabad centre with field immersion and self-directed learning.
              </p>
              <p>
                Fellows build technical solar skills, community mobilisation capabilities, and green entrepreneurship thinking — and leave with a certified pathway into the green economy, a verified impact record, and an active professional network.
              </p>
              <p>
                The fellowship is open to individuals aged 18–30 from any background. No prior technical knowledge required. What matters is commitment, curiosity, and a genuine desire to work on something that matters.
              </p>
            </div>
          </div>

          <div className="lg:w-2/5 bg-white/50 backdrop-blur-sm p-8 sm:p-10 rounded-[2rem] border border-gray-100/50">
            <h3 className="text-xl font-serif text-green-950 mb-8">Fellowship At-a-Glance</h3>
            <ul className="space-y-6">
              <li className="flex flex-col border-b border-gray-100 pb-4">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">Duration</span>
                <span className="text-gray-900 font-medium">6 months</span>
              </li>
              <li className="flex flex-col border-b border-gray-100 pb-4">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">Format</span>
                <span className="text-gray-900 font-medium">Hybrid — in-person at Govindapuram, field immersion + remote learning</span>
              </li>
              <li className="flex flex-col border-b border-gray-100 pb-4">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">Base Location</span>
                <span className="text-gray-900 font-medium">Green Skills Training Centre, Ghaziabad, UP</span>
              </li>
              <li className="flex flex-col border-b border-gray-100 pb-4">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">Eligibility</span>
                <span className="text-gray-900 font-medium">Ages 18–30 · Any educational background</span>
              </li>
              <li className="flex flex-col pb-2">
                <span className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-1">Stipend & Benefits</span>
                <span className="text-gray-500 font-medium italic text-sm">✎ PLACEHOLDER: Confirm stipend value with leadership</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. The Three-Phase Journey (Smooth Timeline) */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-green-950 mb-4">The Three-Phase Journey</h2>
          <p className="text-gray-600">A structured 6-month path from foundation to field leadership.</p>
        </div>

        <div className="space-y-16 pl-4 md:pl-0">
          
          {/* Phase 1 */}
          <div className="relative border-l border-green-200 pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-2"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2">Months 1–2</p>
            <h3 className="text-2xl font-serif text-green-950 mb-2">Phase 1 — Foundation & Green Skills</h3>
            <p className="text-sm font-medium text-gray-500 mb-6 italic">Location: In-person at Green Skills Training Centre, Ghaziabad</p>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              The fellowship begins at our Ghaziabad centre — where fellows go from first principles to field-ready in eight weeks. This phase builds the technical, interpersonal, and self-awareness foundations.
            </p>
            <ul className="space-y-3 text-sm text-gray-700 font-light">
              <li><strong className="font-medium text-gray-900">Solar Energy Fundamentals:</strong> systems, components, installation, maintenance.</li>
              <li><strong className="font-medium text-gray-900">Green Livelihoods Ecosystem:</strong> India's clean energy economy and opportunities.</li>
              <li><strong className="font-medium text-gray-900">Community Facilitation Skills:</strong> running a Solar Sabha, listening without an agenda.</li>
              <li><strong className="font-medium text-gray-900">Leadership Labs & Reflection:</strong> emotional intelligence, values-based decision making.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="relative border-l border-green-200 pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-2"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2">Months 3–4</p>
            <h3 className="text-2xl font-serif text-green-950 mb-2">Phase 2 — Field Immersion & Community Action</h3>
            <p className="text-sm font-medium text-gray-500 mb-6 italic">Format: Field + hybrid check-ins with Ghaziabad centre</p>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              Phase 2 is where learning meets reality. Fellows are deployed into field territories — conducting Solar Samvads, supporting families through PM Surya Ghar applications, and mobilising women into skilling cohorts.
            </p>
            <ul className="space-y-3 text-sm text-gray-700 font-light">
              <li><strong className="font-medium text-gray-900">Solar Samvad facilitation:</strong> structured community dialogue sessions.</li>
              <li><strong className="font-medium text-gray-900">Subsidy navigation support:</strong> PM Surya Ghar application assistance.</li>
              <li><strong className="font-medium text-gray-900">Women's cohort mobilisation:</strong> enrolling participants for Carbon Smart Livelihoods.</li>
              <li><strong className="font-medium text-gray-900">Weekly field reporting:</strong> peer learning via hybrid check-ins + 1-on-1 mentorship.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="relative border-l border-green-200 pl-8 md:pl-12">
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[9px] top-2"></div>
            <p className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2">Months 5–6</p>
            <h3 className="text-2xl font-serif text-green-950 mb-2">Phase 3 — Leadership, Impact & Transition</h3>
            <p className="text-sm font-medium text-gray-500 mb-6 italic">Format: Hybrid — field leadership + structured remote learning</p>
            <p className="text-gray-600 font-light mb-6 leading-relaxed">
              In Phase 3, fellows transition from learners to leaders. Each fellow owns a defined territory and a set of impact targets. They also begin planning their post-fellowship pathway.
            </p>
            <ul className="space-y-3 text-sm text-gray-700 font-light">
              <li><strong className="font-medium text-gray-900">Territory leadership:</strong> accountable for measurable field impact.</li>
              <li><strong className="font-medium text-gray-900">Mini-project design:</strong> designing a specific community intervention.</li>
              <li><strong className="font-medium text-gray-900">Personal impact blueprint:</strong> designing their post-fellowship plan & Capstone.</li>
              <li><strong className="font-medium text-gray-900">Post-fellowship placement support:</strong> active introductions to green jobs.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 4. Outcomes & Target Audience (Clean Text Flow) */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl font-serif text-green-950 mb-6">What Fellows Walk Away With</h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">Certified skills in solar technology, community mobilisation, and green livelihood facilitation.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">Verified, documented field impact across 6 months.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">Professional network in India's green economy — solar companies, NGOs, district government.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">Active post-fellowship placement introductions from the TSP network.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">A peer cohort — green economy professionals for life.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif text-green-950 mb-6">Who Should Apply</h2>
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-6">
              You do not need a technical degree, a perfect CV, or prior NGO experience. You need genuine motivation, willingness to work in Ghaziabad and western UP, openness to field work, and a learning orientation.
            </p>
            <p className="text-gray-900 font-medium text-sm sm:text-base leading-relaxed border-l-2 border-orange-300 pl-4">
              We especially encourage applications from women, first-generation graduates, students of government colleges, and young people from semi-urban and rural backgrounds.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Frequently Asked Questions (Smooth Accordion) */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-green-950 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-6 flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-gray-900 group-hover:text-green-800 transition pr-4">{faq.q}</span>
                <span className="text-2xl text-gray-400 font-light transition-transform duration-300 transform">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SDG & CTA Section */}
      <section className="bg-[#152E1C] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-xs font-bold uppercase tracking-widest text-orange-400">
            <span>SDG 7 — Clean Energy</span>
            <span className="text-white/20">•</span>
            <span>SDG 8 — Decent Work</span>
            <span className="text-white/20">•</span>
            <span>SDG 13 — Climate Action</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif mb-8 leading-tight">
            Applications for the current <br className="hidden sm:block"/> cohort are open.
          </h2>
          <p className="text-green-100/70 mb-10 text-sm">✎ PLACEHOLDER: Add application deadline and cohort start date once confirmed by leadership</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition shadow-sm">
              Apply Now →
            </Link>
          </div>
          
          <p className="text-sm text-green-100/50 mt-10">
            Queries: <a href="mailto:info@socialpurpose.org" className="hover:text-white transition">info@socialpurpose.org</a>
          </p>
        </div>
      </section>

    </main>
  );
}