"use client";
import React, { useRef } from 'react';

export default function AboutPage() {
  // Slider scroll logic
  const theoryRef = useRef(null);
  const teamRef = useRef(null);

  const slide = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const teamMembers = [
    { name: "Chirag Patel", role: "Tech & Innovation Lead" },
    { name: "Divyank Singh", role: "Tech for Impact Lead" },
    { name: "Shrey Singh", role: "Marketing Manager" },
    { name: "Richa Sharma", role: "Climate Research Intern" },
    { name: "Deendayal Verma", role: "Web Development Intern" },
    { name: "Chahat Saini", role: "Graphic Design Intern" },
    { name: "Priyam Gupta", role: "Data Analyst Intern" },
    { name: "Divyanshi Saini", role: "Field Support Intern" },
    { name: "Adarsh Kumar", role: "Climate Research Intern" },
    { name: "Kunal Sharma", role: "Social Media Intern" }
  ];

  const theoryOfChange = [
    {
      step: "01",
      title: "Community Engagement",
      objective: "Inspire and equip local communities to adopt solar energy.",
      points: [
        "Education & Awareness: Provide clear information about benefits.",
        "Hands-On Support: Assist with navigating subsidy applications."
      ]
    },
    {
      step: "02",
      title: "Infrastructure Enhancement",
      objective: "Develop the systems needed to support solar deployment.",
      points: [
        "Streamlined Access: Simplify application & approval processes.",
        "Reliable Installations: Ensure high quality systems."
      ]
    },
    {
      step: "03",
      title: "Local Govt. Collaboration",
      objective: "Partner with local governments to promote initiatives.",
      points: [
        "Policy Support: Integrate solar into climate strategies.",
        "Resource Optimization: Effective use of resources for projects."
      ]
    },
    {
      step: "04",
      title: "Expanding Reach",
      objective: "Broaden the impact through strategic alliances.",
      points: [
        "Building Partnerships: Collaborate with banks, NGOs, stakeholders.",
        "Sharing Best Practices: Disseminate successful strategies."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 overflow-hidden font-sans">
      
      {/* 1. Header (Who We Are - V2 Content) */}
      <section className="pt-24 pb-12 text-center px-4 max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800 mb-4">Who We Are</p>
        <h1 className="text-4xl sm:text-5xl font-serif text-green-950 mb-6 leading-tight">
          Building a <span className="text-orange-500 italic">Carbon Smart</span> India
        </h1>
        <p className="text-base text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
          The Social Purpose Trust is a registered charitable trust headquartered in Ghaziabad, Uttar Pradesh. We operate from our Green Skills Training Centre, Govindapuram — building community-rooted green livelihood ecosystems for women and underserved youth across UP and Delhi-NCR.
        </p>
      </section>

      {/* 2. Vision & Mission (Smooth Text Flow) */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 justify-center items-start text-center md:text-left">
          <div className="flex-1">
            <span className="text-3xl mb-4 block text-orange-400">👁️</span>
            <h3 className="text-2xl font-serif text-green-950 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed font-light sm:text-lg">
              An India where women and underserved youth are not just witnesses to the clean energy transition — but its builders, beneficiaries, and leaders.
            </p>
          </div>
          <div className="flex-1">
            <span className="text-3xl mb-4 block text-green-500">🚀</span>
            <h3 className="text-2xl font-serif text-green-950 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed font-light sm:text-lg">
              To empower women and underserved youth across India to participate in and lead the clean energy transition through practical green skills, local livelihood opportunities, and community-rooted green workforce ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Values (V2 Content - 5 Values) */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 mt-8">
        <div className="mb-12">
          <h2 className="text-3xl font-serif text-green-950 mb-2">Our Values</h2>
          <p className="text-gray-500 text-sm">The principles that guide our work on the ground.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold text-green-900 mb-2">Inclusion</h4>
            <p className="text-sm text-gray-600 font-light">Every design decision we make starts with: who is this for, and who might it miss?</p>
          </div>
          <div>
            <h4 className="font-bold text-green-900 mb-2">Hands-On Learning</h4>
            <p className="text-sm text-gray-600 font-light">Learning that leads to earning. Practical, local, real.</p>
          </div>
          <div>
            <h4 className="font-bold text-green-900 mb-2">Community Trust</h4>
            <p className="text-sm text-gray-600 font-light">We earn our place over time, through consistency and respect. We don't parachute in solutions.</p>
          </div>
          <div>
            <h4 className="font-bold text-green-900 mb-2">Transparency</h4>
            <p className="text-sm text-gray-600 font-light">We share only what is verified. We acknowledge what is in progress.</p>
          </div>
          <div>
            <h4 className="font-bold text-green-900 mb-2">Systemic Thinking</h4>
            <p className="text-sm text-gray-600 font-light">We design programmes that reinforce each other — every intervention creates conditions for the next.</p>
          </div>
        </div>
      </section>

      {/* 4. Theory of Change - SLIDER */}
      <section className="py-16 pl-4 sm:pl-6 lg:pl-8 max-w-[100vw] overflow-hidden bg-white">
        <div className="flex justify-between items-end pr-4 sm:pr-8 max-w-6xl mx-auto mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-green-950">Theory of Change</h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">Swipe to explore our strategic framework.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => slide(theoryRef, 'left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-950 hover:text-white transition duration-300">←</button>
            <button onClick={() => slide(theoryRef, 'right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-950 hover:text-white transition duration-300">→</button>
          </div>
        </div>

        <div 
          ref={theoryRef} 
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-6 pr-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {theoryOfChange.map((item, index) => (
            <div key={index} className="min-w-[85vw] sm:min-w-[320px] max-w-[320px] snap-start flex flex-col justify-start">
              <span className="text-4xl font-serif text-orange-200 mb-4">{item.step}</span>
              <h3 className="text-lg font-bold text-green-900 mb-2">{item.title}</h3>
              <p className="text-orange-600 font-medium mb-4 text-sm">{item.objective}</p>
              <ul className="space-y-3 text-gray-600 font-light text-sm">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-orange-500 mt-0.5">•</span> <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Journey (Why We Started) */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-green-950 mb-8">Why We Started</h2>
        <p className="text-2xl sm:text-3xl font-serif text-orange-500 italic mb-8 leading-relaxed">
          "India is building a green economy. But who is deciding who gets to participate in it?"
        </p>
        <p className="text-gray-600 leading-relaxed font-light text-sm sm:text-base">
          That question came from different directions for each founder. For Alok, it was the lived experience of Delhi's pollution crisis and the Sikkim floods. For Arti, it was nine years of working with women in SHG networks who demonstrated capabilities every day that formal systems were not designed to recognise. Together, they founded The Social Purpose Trust in 2024 to build the pathway that India's green economy is not building for itself.
        </p>
      </section>

      {/* 6. Founders Showcase (V2 Updated Bios) */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-green-950">Founding Leaders</h2>
        </div>

        {/* Arti's Story */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <div className="md:w-4/12 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl shadow-orange-500/10">
               <img src="/arti-singh.jpg" alt="Arti Singh" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="md:w-8/12">
            <h3 className="text-3xl font-serif text-green-950 mb-1">Arti Singh</h3>
            <p className="text-orange-600 font-bold uppercase tracking-wider text-xs mb-6">Co-Founder, CEO</p>
            <div className="space-y-4 text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              <p>Arti Singh has spent nine years at the intersection of gender, education, community development, and maternal health. As CEO, she leads programme design, community partnerships, and field operations—building partnerships with the District Administration of Ghaziabad and establishing the Green Skills Training Centre.</p>
              <p>Her prior experience spans Room to Read, Tata Trusts, Piramal Foundation, and Vibha. She holds a Master's in Social Work from IIS University, Jaipur.</p>
              <div className="bg-white p-4 rounded-xl border border-gray-100 inline-block mt-4">
                <p className="text-xs font-bold text-green-900 mb-2 uppercase tracking-widest">Fellowships & Recognition</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Gandhi Fellow — Piramal Foundation</li>
                  <li>• Youth Leaders for Climate Action Fellow</li>
                  <li>• Atlas Corps Virtual Leadership Institute Scholar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Alok's Story */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-4/12 flex justify-center">
             <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl shadow-green-900/10">
               <img src="/alok-rai.jpg" alt="Alok Rai" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="md:w-8/12">
            <h3 className="text-3xl font-serif text-green-950 mb-1">Alok Rai</h3>
            <p className="text-orange-600 font-bold uppercase tracking-wider text-xs mb-6">Co-Founder, COO</p>
            <div className="space-y-4 text-gray-600 font-light text-sm sm:text-base leading-relaxed">
              <p>Alok Rai's path from electrical engineering to social entrepreneurship was shaped by years working on education reform in Delhi governance, firsthand encounters with the 2023 Sikkim floods, and Bhutan's sustainable living norms.</p>
              <p>He leads institutional strategy and government partnerships, securing MoUs with District Administrations of Ghaziabad and Gautam Buddha Nagar. He is also the Founder of Surya Sangam and serves as a Member of the National Youth Advisory Council, Government of India.</p>
              <div className="bg-white p-4 rounded-xl border border-gray-100 inline-block mt-4">
                <p className="text-xs font-bold text-green-900 mb-2 uppercase tracking-widest">Awards & Recognition</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Indira Gandhi NSS National Award — President of India</li>
                  <li>• Karmaveer Chakra Award — iCONGO & UNOSDP</li>
                  <li>• ALS South Asia Fellow — University of Chicago</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Ecosystem & Partners (Clean Text Layout) */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-green-950 mb-8">Our Ecosystem & Partners</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">District Administration, Ghaziabad</span>
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">District Administration, GB Nagar</span>
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">VINCULAR</span>
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">SAY Step Ahead Youth</span>
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">Saarthak Collective</span>
            <span className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200">Surya Sangam</span>
          </div>
        </div>
      </section>

      {/* 8. Team - SLIDER */}
      <section className="py-16 pl-4 sm:pl-6 lg:pl-8 max-w-[100vw] overflow-hidden">
        <div className="flex justify-between items-end pr-4 sm:pr-8 max-w-6xl mx-auto mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-green-950">Meet Our Core Team</h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">The dedicated minds building a Carbon Smart India.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => slide(teamRef, 'left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-950 hover:text-white transition duration-300">←</button>
            <button onClick={() => slide(teamRef, 'right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-950 hover:text-white transition duration-300">→</button>
          </div>
        </div>

        <div 
          ref={teamRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pr-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="min-w-[160px] snap-start flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-900/5 text-green-900 rounded-full flex items-center justify-center text-2xl font-serif mb-4 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                {member.name.charAt(0)}
              </div>
              <h4 className="text-base font-medium text-green-950 mb-1">{member.name}</h4>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-orange-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Compliance & Registration (V2 Update) */}
      <section className="py-16 bg-[#152E1C] text-green-100/80 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-white mb-8">Compliance & Registration</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-b border-green-800 pb-10">
            <div>
              <p className="text-xl font-bold text-orange-400 mb-1">12A</p>
              <p className="text-xs font-light">Income Exempt</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-400 mb-1">80G</p>
              <p className="text-xs font-light">50% Tax Deduction</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-400 mb-1">CSR-1</p>
              <p className="text-xs font-light">Sec 135 Eligible</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-400 mb-1">NGO Darpan</p>
              <p className="text-xs font-light">Registered</p>
            </div>
          </div>
          <div className="text-sm font-light space-y-2">
            <p><strong className="text-white">Registered Office:</strong> 109, Shivaay Apartment, Sewak Park, Delhi 110059</p>
            <p><strong className="text-white">Operational HQ:</strong> Green Skills Training Centre, Govindapuram, Ghaziabad, UP</p>
            <p className="pt-4 mt-4 border-t border-green-800/50 text-xs text-green-200">Bank details available upon request for direct donations.</p>
          </div>
        </div>
      </section>

    </main>
  );
}