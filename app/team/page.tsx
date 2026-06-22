import React from 'react';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white py-24 selection:bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2">Our Team</div>
          <h1 className="text-4xl font-serif">Started by two. Driven by many.</h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Alok */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
            <div className="bg-green-900 p-10 pb-0">
              <div className="w-20 h-20 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-3xl font-serif text-white mb-6">A</div>
              <h2 className="text-2xl font-serif text-white mb-1">Alok</h2>
              <p className="text-sm text-white/60 mb-8">Co-Founder · Institutional Strategy & Government Partnerships</p>
            </div>
            <div className="p-10">
              <p className="text-sm text-gray-600 mb-4">Alok has always believed that the most important solutions are the ones built closest to the ground. With over a decade of experience in governance, sustainability, and youth development, he has worked at the intersection of policy and people.</p>
            </div>
          </div>

          {/* Arti */}
          <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200">
            <div className="bg-green-900 p-10 pb-0">
              <div className="w-20 h-20 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center text-3xl font-serif text-white mb-6">Ar</div>
              <h2 className="text-2xl font-serif text-white mb-1">Arti</h2>
              <p className="text-sm text-white/60 mb-8">Co-Founder · Program Design & Community Partnerships</p>
            </div>
            <div className="p-10">
              <p className="text-sm text-gray-600 mb-4">Arti has spent her career at the intersection of gender, education, and community development — and she has seen firsthand how much women are capable of when systems are built to include them rather than exclude them.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}