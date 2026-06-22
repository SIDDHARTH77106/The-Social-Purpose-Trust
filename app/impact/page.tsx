import React from 'react';

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-orange-50/50 py-24 selection:bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:text-left">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-2">Pilot Impact — Early Evidence</div>
          <h1 className="text-4xl font-serif mb-4">Real numbers from our ground-level work</h1>
          <p className="text-gray-600 max-w-2xl mx-auto sm:mx-0">
            These figures are drawn from our pilot programmes. We are committed to transparency — as our reach scales, these numbers will grow. We share only what is verified.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="text-5xl font-serif text-gray-900 mb-2">100<em className="not-italic text-orange-500">+</em></div>
            <p className="text-sm text-gray-600 mb-4"><strong className="text-gray-900 block mb-1">Youth Engaged</strong>in our pilot programme across communities</p>
            <p className="text-xs italic text-green-700 font-medium">Verified · Pilot 2024–25</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="text-5xl font-serif text-gray-900 mb-2">30<em className="not-italic text-orange-500">+</em></div>
            <p className="text-sm text-gray-600 mb-4"><strong className="text-gray-900 block mb-1">Women Trained</strong>through the Carbon Smart Livelihoods pilot</p>
            <p className="text-xs italic text-green-700 font-medium">Verified · Pilot 2024–25</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="text-5xl font-serif text-gray-900 mb-2">50<em className="not-italic text-orange-500">%</em></div>
            <p className="text-sm text-gray-600 mb-4"><strong className="text-gray-900 block mb-1">Active Earning Rate</strong>of trained pilot participants transitioned to income roles</p>
            <p className="text-xs italic text-green-700 font-medium">Verified · Pilot 2024–25</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="text-5xl font-serif text-gray-900 mb-2">₹8<em className="not-italic text-orange-500">K+</em></div>
            <p className="text-sm text-gray-600 mb-4"><strong className="text-gray-900 block mb-1">Average Monthly Earnings</strong>for active participants in livelihood roles</p>
            <p className="text-xs italic text-green-700 font-medium">Verified · Pilot 2024–25</p>
          </div>
        </div>
      </div>
    </main>
  );
}