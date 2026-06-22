import React from 'react';

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-24">
      
      {/* 1. Header (Smooth & Typography Focused) */}
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-6">Support Our Mission</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-green-950 mb-8 leading-tight">
          Support the work that creates <br className="hidden sm:block"/> <span className="text-orange-500 italic">equitable green futures</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
          The green economy is growing fast. The community-level work that makes it equitable — the skilling, the outreach, the trust-building, the last-mile support — grows only when people decide to fund it. Your donation goes directly to that work.
        </p>
      </section>

      {/* 2. Donation Details (Clean Split Layout) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Bank Details (Box-free text flow) */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif text-green-950 mb-8">How to Donate</h2>
            
            <div className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-2">Direct Bank Transfer</h3>
              <div className="space-y-4 font-light text-gray-800 text-lg">
                <p><strong className="font-medium text-gray-900">Account Name:</strong> The Social Purpose Trust</p>
                <p><strong className="font-medium text-gray-900">Account Number:</strong> 42970590274</p>
                <p><strong className="font-medium text-gray-900">IFSC Code:</strong> SBIN0010650</p>
                <p className="text-sm text-gray-500 pt-2"><strong className="font-medium text-gray-700">Bank:</strong> State Bank of India · <strong className="font-medium text-gray-700">Branch:</strong> NSIT, New Delhi</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 border-b border-gray-200 pb-2">Via Cheque</h3>
              <p className="font-light text-gray-800 text-lg mb-2">
                Payable to: <strong className="font-medium text-gray-900">'The Social Purpose Trust'</strong>
              </p>
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Mail to: 109, Shivaay Apartment, Sewak Park, Delhi 110059
              </p>
            </div>
            
            {/* International Donations Placeholder */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400 italic">
                ✎ PLACEHOLDER: Confirm FCRA status with legal team. Update this section accordingly before launch.
              </p>
            </div>
          </div>

          {/* Right: 80G & Instructions (Dark Premium Panel) */}
          <div className="lg:w-1/2">
            <div className="bg-[#152E1C] rounded-[2rem] p-8 sm:p-12 text-white sticky top-32 shadow-xl">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-8">
                📄
              </div>
              <h3 className="text-2xl font-serif mb-4 text-orange-400">80G Tax Benefit</h3>
              <p className="text-green-100/80 font-light leading-relaxed mb-8">
                All donations are eligible for a 50% tax deduction under Section 80G of the Income Tax Act, 1961. We issue 80G receipts within 7 working days of a confirmed donation.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8">
                <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">After transferring, please email:</h4>
                <ul className="space-y-2 text-sm text-green-100/70 font-light">
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Full Name</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> PAN Number</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Amount Donated</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Mode of Payment / Transaction ID</li>
                </ul>
              </div>

              <a href="mailto:info@socialpurpose.org?subject=Donation%20%2F%2080G%20Receipt" className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-bold transition">
                Email info@socialpurpose.org →
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}