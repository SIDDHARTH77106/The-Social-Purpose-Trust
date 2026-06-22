import React from 'react';

export default function ContactPage() {
  const subjects = [
    "CSR Partnership Enquiry",
    "Donation / 80G Receipt",
    "Carbon Smart Green Livelihood Fellowship Query",
    "Internship Application",
    "Volunteering",
    "School / Institution Partnership",
    "Media / Press",
    "General"
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'X / Twitter', url: '#' },
    { name: 'YouTube', url: '#' }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 font-sans pb-24">
      
      {/* 1. Header (Smooth Typography) */}
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-800 mb-6">Contact Us</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-green-950 mb-6 leading-tight">
          Get in touch
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
          We are a small, accessible team. Write to us directly — we respond within 3 working days.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Info & Map */}
          <div className="space-y-12 flex flex-col">
            
            {/* Direct Contact (Large Text) */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 border-b border-gray-200 pb-3">Direct Connect</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Email</p>
                  <a href="mailto:info@socialpurpose.org" className="text-2xl sm:text-3xl font-serif text-green-900 hover:text-orange-600 transition">
                    info@socialpurpose.org
                  </a>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">Phone</p>
                  <a href="tel:+918587999521" className="text-2xl sm:text-3xl font-serif text-green-900 hover:text-orange-600 transition">
                    +91 858 7999 521
                  </a>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 border-b border-gray-200 pb-3">Our Locations</h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Operational HQ</p>
                  <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                    Green Skills Training Centre,<br />
                    Govindapuram, Ghaziabad,<br />
                    Uttar Pradesh
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-2">Registered Office</p>
                  <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                    109, Shivaay Apartment,<br />
                    Sewak Park, Delhi 110059
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Google Map Embed */}
            <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 relative group">
              {/* Google Maps iframe for Ghaziabad/Delhi region */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112030.82512686735!2d77.387814!3d28.667236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              ></iframe>
              {/* Floating label */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-green-900 shadow-sm pointer-events-none">
                📍 Ghaziabad HQ
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 border-b border-gray-200 pb-3">Social Media</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-green-800 transition">
                    {link.name} <span className="text-gray-300 mx-1">/</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Form & Media Info */}
          <div className="flex flex-col">
            <div className="bg-white p-8 sm:p-12 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 sticky top-24">
              <h2 className="text-2xl font-serif text-green-950 mb-8">Send us a message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-700 focus:bg-white transition" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-700 focus:bg-white transition" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-700 focus:bg-white transition" placeholder="jane@example.com" />
                </div>

                {/* V2 Specific Dropdown */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Subject</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-700 focus:bg-white transition text-gray-700 appearance-none cursor-pointer">
                    <option value="">Select a subject...</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Your Message</label>
                  <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-green-700 focus:bg-white transition resize-none" placeholder="How can we collaborate?"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-full transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-300">
                  Send Message
                </button>
              </form>

              {/* V2 Media Enquiries Box */}
              <div className="mt-10 bg-[#152E1C] p-6 rounded-2xl text-white">
                <h4 className="text-orange-400 font-bold mb-2">For Media Enquiries</h4>
                <p className="text-sm text-green-100/80 font-light leading-relaxed">
                  For press interviews, programme documentation visits, or coverage of our work — please write to us with <strong className="text-white">'Media'</strong> in the subject line.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}