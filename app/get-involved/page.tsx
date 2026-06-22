import React from 'react';

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 selection:bg-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-xs font-bold uppercase tracking-widest text-green-800 mb-2 text-center lg:text-left">Get Involved</div>
        <h1 className="text-4xl font-serif mb-12 text-center lg:text-left">Join India's carbon smart movement</h1>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col shadow-sm">
            <div className="w-14 h-14 bg-orange-100 rounded-xl mb-6 flex items-center justify-center text-2xl">🤝</div>
            <h3 className="text-xl font-bold mb-3">Donate</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">Your donation funds green skilling sessions, fellowship stipends, solar awareness workshops, and community mobilisation efforts that directly change lives. Donations are eligible for 80G tax deductions.</p>
            <a href="mailto:info@socialpurpose.org" className="text-sm font-bold text-green-800 hover:text-green-600 transition flex items-center gap-2 w-max">
              Make a donation <span aria-hidden="true">→</span>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col shadow-sm">
            <div className="w-14 h-14 bg-green-100 rounded-xl mb-6 flex items-center justify-center text-2xl">🏢</div>
            <h3 className="text-xl font-bold mb-3">Partner & CSR</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">We are CSR-1 registered under Section 135. Corporates, foundations, and government bodies can co-fund programmes, sponsor fellowships, or co-design skilling initiatives aligned with your ESG and CSR mandate.</p>
            <a href="mailto:info@socialpurpose.org" className="text-sm font-bold text-green-800 hover:text-green-600 transition flex items-center gap-2 w-max">
              Explore CSR partnership <span aria-hidden="true">→</span>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 flex flex-col shadow-sm">
            <div className="w-14 h-14 bg-gray-100 rounded-xl mb-6 flex items-center justify-center text-2xl">🙋</div>
            <h3 className="text-xl font-bold mb-3">Volunteer</h3>
            <p className="text-sm text-gray-600 mb-8 flex-grow">Bring your skills to our community workshops, field programmes, and awareness campaigns. Whether you are a professional, student, or community leader — there is a role for you in India's green transition.</p>
            <a href="mailto:info@socialpurpose.org" className="text-sm font-bold text-green-800 hover:text-green-600 transition flex items-center gap-2 w-max">
              Volunteer with us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* CSR Section */}
        <div className="bg-green-900 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 justify-between text-white shadow-lg">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-serif mb-4">CSR & Institutional Partnerships</h2>
            <p className="text-base text-green-100/80 mb-8 leading-relaxed">
              The Social Purpose Trust is a registered charitable trust with all necessary compliance in place for corporate and institutional giving. We can structure partnerships around employee engagement, field programmes, skilling sponsorships, and impact reporting aligned to your ESG framework.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-md">12A Registered</span>
              <span className="text-xs font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-md">80G Certified</span>
              <span className="text-xs font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-md">CSR-1 Registered</span>
              <span className="text-xs font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-md">Section 135 Eligible</span>
              <span className="text-xs font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-md">Impact Reporting Available</span>
            </div>
          </div>
          <a href="mailto:info@socialpurpose.org" className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md text-sm font-bold transition whitespace-nowrap shrink-0">
            Get in Touch →
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Stay connected with the movement</h2>
              <p className="text-gray-500">Updates on programmes, field stories, and green livelihood opportunities — straight to your inbox.</p>
            </div>
            <form className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-5 py-3 border border-gray-300 rounded-md outline-none focus:border-green-900 focus:ring-1 focus:ring-green-900 w-full sm:w-80 text-sm transition" 
                required 
              />
              <button 
                type="submit" 
                className="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-md text-sm font-bold transition w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}