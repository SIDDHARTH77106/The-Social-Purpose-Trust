import React from 'react';

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-40 selection:bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-green-800 mb-4">Our Three Flagship Programs</div>
            <h1 className="text-4xl font-serif leading-tight">From classroom to career — the full green pathway</h1>
          </div>
          <p className="text-gray-600">Each program addresses a distinct stage of the journey from climate awareness to green livelihood — designed so that together, they create an integrated ecosystem of impact.</p>
        </div>

        {/* Program 1: Carbon Smart Schools */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden mb-12 shadow-sm">
          <div className="p-10 lg:p-14">
            <div className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2">Program 01</div>
            <h2 className="text-3xl font-bold mb-4">Carbon Smart Schools</h2>
            <p className="text-gray-600 mb-4">India's schools are more than places of learning — they are the heart of their communities. Through Carbon Smart Schools, we work to solarise government schools end-to-end, while embedding clean energy education into the school environment itself.</p>
            <p className="text-gray-600 mb-8">Students don't just benefit from solar power — they learn what it means, how it works, and why it matters.</p>
          </div>
        </div>

        {/* Program 2: Carbon Smart Livelihoods */}
        <div className="bg-white rounded-3xl border border-orange-200 overflow-hidden mb-12 shadow-sm">
          <div className="p-10 lg:p-14">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Program 02</div>
            <h2 className="text-3xl font-bold mb-4">Carbon Smart Livelihoods</h2>
            <p className="text-gray-600 mb-4">We build green livelihood pathways for women, SHG members, and underserved youth — from the first conversation in a community to the first paycheck, and everything that needs to happen in between.</p>
          </div>
        </div>

        {/* Program 3: Fellowship */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-10 lg:p-14">
            <div className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2">Program 03</div>
            <h2 className="text-3xl font-bold mb-4">Carbon Smart India Fellowship</h2>
            <p className="text-gray-600 mb-8">A 12-month, field-based, purpose-driven fellowship that places young climate leaders at the frontlines of India's clean energy transition.</p>
          </div>
        </div>
      </div>
    </main>
  );
}