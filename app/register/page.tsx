"use client";

import React from 'react';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] pb-24 selection:bg-orange-200">
      
      {/* 1. Header Section - Fully responsive padding and text sizes */}
      <section className="bg-green-950 pt-16 pb-16 lg:pt-24 border-b-8 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Badges / Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-green-300 bg-green-900/50 border border-green-700 px-3 py-1.5 rounded-full">
              12A Registered
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-green-300 bg-green-900/50 border border-green-700 px-3 py-1.5 rounded-full">
              80G Certified
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-green-300 bg-green-900/50 border border-green-700 px-3 py-1.5 rounded-full">
              CSR-1 Compliant
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-orange-200 bg-orange-900/50 border border-orange-700 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
              Selected · Unlimited India Cohort
            </span>
          </div>

          <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-2">
            🌿 The Social Purpose Trust · Making India Carbon Smart
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight">
            Carbon Smart <br />
            <em className="text-orange-400">Green Skills Course</em>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-medium">
            — Register Your Interest
          </p>
          <p className="text-base text-white/70 mt-4 max-w-3xl leading-relaxed">
            A hybrid learning programme preparing young people in Delhi-NCR for careers in India's fastest-growing job market. Structured training. Real field exposure. Placement linkages.
          </p>
        </div>
      </section>

      {/* Main Content Area - Shifted slightly upward over the header for a modern look */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        
        {/* 2. Course Format Notice */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-10 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-2">
            📋 COURSE FORMAT — PLEASE READ BEFORE REGISTERING
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm mt-0.5">✓</span>
              <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">Virtual sessions</strong> — core learning modules delivered online via Google Meet / WhatsApp (Mon + Wed, 10am–12pm)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm mt-0.5">✓</span>
              <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">In-person at Ghaziabad office</strong> — mandatory 2 days per week (Friday + one Saturday per month). This is not optional — field exposure and in-person sessions are core to the programme.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm mt-0.5">✓</span>
              <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">Completion certificate</strong> from The Social Purpose Trust (Selected for Unlimited India Cohort)</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm mt-0.5">✓</span>
              <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">Placement linkages</strong> with solar, EV and green enterprises in Delhi-NCR</p>
            </li>
            <li className="flex items-start gap-3 pt-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm mt-0.5">✗</span>
              <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">No travel reimbursement provided</strong> — fellows must manage their own commute to Ghaziabad office on in-person days</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm mt-0.5">✗</span>
              <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-gray-900">No stipend provided</strong> — this is a skilling programme, not a paid role</p>
            </li>
          </ul>
        </div>

        {/* 3. Registration Form - Uses CSS Grid for responsiveness */}
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          
          {/* Section A: Your Details */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-100 pb-4">YOUR DETAILS</h3>
            
            {/* grid-cols-1 on mobile, grid-cols-2 on screens 'sm' and above */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-1">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">WhatsApp Number *</label>
                <p className="text-xs text-gray-500 mb-2">We'll send all course updates and dates here — no spam</p>
                <input type="tel" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Email Address *</label>
                {/* Spacer to keep inputs aligned on larger screens */}
                <div className="hidden sm:block h-[20px]"></div> 
                <input type="email" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">City / Area you're currently based in *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Age</label>
                <input type="number" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
              </div>

              <div className="sm:col-span-2 mt-2">
                <label className="block text-sm font-semibold text-gray-900 mb-1">Approximate distance from Ghaziabad (Raj Nagar / Vasundhara area) *</label>
                <p className="text-xs text-gray-500 mb-3">This helps us understand commute feasibility for in-person days</p>
                <div className="space-y-3">
                  {[
                    "Within Ghaziabad — I live locally (under 10 km)", 
                    "Nearby — Noida, Greater Noida, Delhi East (10–25 km)", 
                    "Further — Delhi Central / West / South, Faridabad (25–40 km)", 
                    "Outside NCR — Meerut, Hapur, Bulandshahr, other"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="distance" required className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Gender</label>
                <div className="flex flex-wrap gap-6">
                  {["Male", "Female", "Non-binary", "Prefer not to say"].map((option, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gender" className="text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section B: Your Background */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-100 pb-4">YOUR BACKGROUND</h3>
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Current status *</label>
                <div className="space-y-3">
                  {[
                    "Student — currently enrolled in college / university",
                    "Recent graduate — completed degree within last 2 years",
                    "Working professional — looking to upskill or switch sector",
                    "Job seeker — not currently working, actively looking",
                    "Homemaker / SHG member — seeking a new livelihood pathway",
                    "Other"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="status" required className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Highest qualification</label>
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition bg-white">
                  <option value="">Select your qualification</option>
                  {[
                    "10th pass", "12th pass", "Diploma / ITI", 
                    "B.Tech / B.E. (Engineering)", "B.Sc. / B.A. / B.Com", 
                    "BBA / BCA", "MBA / PGDM", "M.Tech / M.Sc.", 
                    "Other undergraduate", "Other postgraduate"
                  ].map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Field of study or current work</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">College or organisation (if applicable)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
                </div>
              </div>

            </div>
          </div>

          {/* Section C: Commute Confirmation */}
          <div className="bg-orange-50 rounded-2xl border border-orange-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-4 border-b border-orange-200 pb-4">COMMUTE CONFIRMATION</h3>
            
            {/* Alert Box inside form */}
            <div className="bg-orange-100/50 p-4 rounded-lg mb-6 text-sm text-orange-900 leading-relaxed">
              <strong>Important:</strong> The Green Skills Course requires you to attend the Ghaziabad office in person at least 2 days per week (typically Friday + one Saturday per month). Virtual sessions are in addition to — not a replacement for — in-person days. Please confirm you can commit to this before registering.
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Can you travel to our Ghaziabad office at least 2 days per week? *</label>
                <div className="space-y-3">
                  {[
                    "Yes — I can commute to Ghaziabad 2 days/week without reimbursement",
                    "Mostly yes — I may miss occasional in-person days due to distance but will try",
                    "Uncertain — I need to check before committing",
                    "No — distance makes it very difficult"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="commute_confirm" required className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">How will you travel to the Ghaziabad office?</label>
                <div className="space-y-3">
                  {[
                    "Own vehicle (2-wheeler)",
                    "Metro + auto",
                    "Bus / shared auto",
                    "Carpool with other fellows",
                    "I live very close — walking / cycle",
                    "Not sure yet"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="travel_mode" className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section D: Green Jobs Interest */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-100 pb-4">GREEN JOBS INTEREST</h3>
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Which green job areas interest you most? *</label>
                <p className="text-xs text-gray-500 mb-3">Select all that apply</p>
                <div className="space-y-3">
                  {[
                    "Solar energy — rooftop advisory, installation, assessment",
                    "Electric vehicles — EV tech, charging infrastructure, servicing",
                    "MSME decarbonisation — energy auditing, dedieselisation consulting",
                    "Carbon & ESG — carbon accounting, ESG reporting, climate advisory",
                    "Green construction — green buildings, energy efficiency",
                    "Circular economy — recycling, waste management, battery reuse",
                    "Exploring everything — I'm new to this space and want to learn"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 rounded text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">How familiar are you with green jobs right now?</label>
                <div className="space-y-3">
                  {[
                    "Complete beginner — I just heard the term",
                    "Some awareness — I've read about it but not worked in it",
                    "Moderate — I have studied or worked on related topics",
                    "Experienced — I already work in clean energy or sustainability"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="familiarity" className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">What is your primary goal from this course?</label>
                <div className="space-y-3">
                  {[
                    "Get a job in the green economy after completing the course",
                    "Add a recognised skill and certificate to my profile",
                    "Start my own green business or become a green entrepreneur",
                    "Explore green careers before deciding on a path",
                    "Switch from my current field into sustainability"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="goal" className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Section E: Schedule Availability */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-4 border-b border-gray-100 pb-4">SCHEDULE AVAILABILITY</h3>
            
            <p className="text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-md border border-gray-100 leading-relaxed">
              <strong>Course schedule:</strong> Virtual sessions — Monday + Wednesday, 10am–12pm online. In-person — every Friday 10am–2pm at Ghaziabad office + one Saturday per month (field visit day).
            </p>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Can you attend virtual sessions on Monday and Wednesday mornings (10am–12pm)? *</label>
                <div className="space-y-3">
                  {[
                    "Yes, both days",
                    "Usually — may miss occasionally",
                    "Only one of the two days",
                    "Morning doesn't work — need evening options"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="virtual_schedule" required className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Can you attend in-person at Ghaziabad every Friday (10am–2pm)? *</label>
                <div className="space-y-3">
                  {[
                    "Yes, every Friday",
                    "Most Fridays — may miss 1–2 per month",
                    "Fridays are difficult — another day works better"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="inperson_schedule" required className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">How many hours per week can you realistically commit?</label>
                <div className="space-y-3">
                  {[
                    "4–6 hours", 
                    "6–8 hours", 
                    "8–12 hours", 
                    "12+ hours — fully committed"
                  ].map((option, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer">
                      <input type="radio" name="hours_commit" className="mt-1 text-green-900 focus:ring-green-900" />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section F: Tell Us More */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-100 pb-4">TELL US MORE</h3>
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Why do you want to build green skills? *</label>
                <p className="text-xs text-gray-500 mb-2">2–4 sentences. Hindi or English — whichever feels natural.</p>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition resize-none"></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">How did you hear about this course?</label>
                <select className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition bg-white">
                  <option value="">Select one</option>
                  {[
                    "LinkedIn — personal post by founder",
                    "LinkedIn — The Social Purpose Trust page",
                    "Instagram",
                    "WhatsApp group / forward",
                    "College notice board / placement cell",
                    "NSS / NCC coordinator",
                    "Friend or family referral",
                    "SHG network",
                    "Other"
                  ].map((opt, i) => (
                     <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Do you know someone else who should register?</label>
                <input type="text" placeholder="Name & Number (Optional)" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Any questions or things you'd like us to know?</label>
                <textarea rows={3} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-900 focus:ring-1 focus:ring-green-900 outline-none transition resize-none"></textarea>
              </div>

            </div>
          </div>

          {/* Section G: Consent & Submit */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
            <h3 className="text-2xl font-serif text-gray-900 mb-6 border-b border-gray-100 pb-4">CONSENT</h3>
            
            <div className="space-y-4 mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 rounded text-green-900 focus:ring-green-900" />
                <span className="text-sm text-gray-700">I agree to be contacted by The Social Purpose Trust on WhatsApp and email with course details. *</span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 rounded text-green-900 focus:ring-green-900" />
                <span className="text-sm text-gray-700">I understand the course requires in-person attendance at Ghaziabad office 2 days per week, and no travel reimbursement or stipend is provided. *</span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1 rounded text-green-900 focus:ring-green-900" />
                <span className="text-sm text-gray-700">I am happy for my anonymised story to be used in TSPT's communications and reports (optional)</span>
              </label>
            </div>

            {/* Information Box */}
            <div className="bg-green-50 rounded-lg p-5 mb-8 border border-green-100">
              <h4 className="font-bold text-green-900 mb-2">What happens next:</h4>
              <p className="text-sm text-green-800 leading-relaxed">We'll WhatsApp you within 48 hours with course dates, the weekly schedule, and how to confirm your seat. Filling this form does not commit you to anything yet.</p>
            </div>

            {/* Submit Button & Email Link - Stacks on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button type="submit" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md font-bold text-center transition shadow-sm">
                Submit My Interest →
              </button>
              
              <p className="text-sm text-gray-500 text-center sm:text-right">
                Questions? Write to <br className="sm:hidden" />
                <a href="mailto:socialpurposestories@gmail.com" className="text-green-800 font-semibold hover:underline">socialpurposestories@gmail.com</a>
              </p>
            </div>
          </div>
          
        </form>
      </div>
    </main>
  );
}