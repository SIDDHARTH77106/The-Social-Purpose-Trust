"use client";
import React, { useState } from 'react';

export default function RegisterPage() {
  // State to handle conditional questions based on application type
  const [appType, setAppType] = useState('');
  const [isStudent, setIsStudent] = useState('');

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-gray-900 selection:bg-orange-200 pb-24 font-sans">
      
      {/* 1. Header (Smooth & Typography Focused) */}
      <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-6">Join The Movement</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-green-950 mb-6 leading-tight">
          Be part of India's green transition — <br className="hidden sm:block"/><span className="text-orange-500 italic">from the ground up</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
          Apply for the Carbon Smart Green Livelihood Fellowship, an internship at our Ghaziabad office, or a volunteering role. Fill in the form below and our team will be in touch within 5 working days.
        </p>
      </section>

      {/* 2. Seamless Form Section (No heavy boxes) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
          
          {/* Q1: Role Selection */}
          <div className="space-y-4">
            <label className="block text-xl font-serif text-green-950 mb-4">What are you applying for? <span className="text-orange-500">*</span></label>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { id: 'fellowship', title: 'Fellowship', desc: 'Carbon Smart Green Livelihood Fellowship (6 months)' },
                { id: 'internship', title: 'Internship', desc: 'At TSP Ghaziabad (8+ weeks)' },
                { id: 'volunteer', title: 'Volunteering', desc: 'Short-term or ongoing roles' }
              ].map((role) => (
                <label 
                  key={role.id} 
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                    appType === role.id 
                      ? 'bg-green-50 border-green-800 shadow-sm' 
                      : 'bg-white border-gray-200 hover:border-green-300'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="application_type" 
                    value={role.id}
                    required
                    className="sr-only"
                    onChange={(e) => setAppType(e.target.value)}
                  />
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mb-3 ${appType === role.id ? 'border-green-800' : 'border-gray-300'}`}>
                    {appType === role.id && <div className="w-3 h-3 bg-green-800 rounded-full"></div>}
                  </div>
                  <h4 className={`font-bold ${appType === role.id ? 'text-green-900' : 'text-gray-900'}`}>{role.title}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{role.desc}</p>
                </label>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-200/60"></div>

          {/* Personal Details */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-green-950">Personal Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Full Name <span className="text-orange-500">*</span></label>
                <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email Address <span className="text-orange-500">*</span></label>
                <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Phone Number <span className="text-orange-500">*</span></label>
                <input type="tel" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">Age <span className="text-orange-500">*</span></label>
                  <input type="number" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">City & State <span className="text-orange-500">*</span></label>
                  <input type="text" required placeholder="e.g. Ghaziabad, UP" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200/60"></div>

          {/* Education & Background */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-green-950">Background</h3>
            
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Highest Education Qualification <span className="text-orange-500">*</span></label>
              <input type="text" required placeholder="e.g. B.Tech, B.A., 12th Pass" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-2xl">
              <label className="block text-sm font-bold text-gray-900 mb-4">Are you currently a student? <span className="text-orange-500">*</span></label>
              <div className="flex gap-6 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="is_student" value="yes" onChange={() => setIsStudent('yes')} required className="text-green-800 focus:ring-green-800" />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="is_student" value="no" onChange={() => setIsStudent('no')} required className="text-green-800 focus:ring-green-800" />
                  <span className="text-sm text-gray-700">No</span>
                </label>
              </div>
              
              {isStudent === 'yes' && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Which Institution / College?</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
                </div>
              )}
            </div>
          </div>

          <div className="w-full h-px bg-gray-200/60"></div>

          {/* Experience & Motivation */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-green-950">Your Motivation</h3>
            
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Why do you want to join The Social Purpose Trust? <span className="text-orange-500">*</span></label>
              <p className="text-xs text-gray-500 mb-3 font-light">Please answer in 3–5 sentences.</p>
              <textarea rows={4} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition resize-none"></textarea>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">What skills or experience do you bring to this role? <span className="text-orange-500">*</span></label>
              <textarea rows={3} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition resize-none"></textarea>
            </div>
          </div>

          {/* CONDITIONAL QUESTIONS BASED ON Q1 */}
          {appType === 'fellowship' && (
            <div className="p-6 bg-orange-50 border border-orange-100 rounded-2xl animate-in fade-in duration-500">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 rounded text-orange-600 focus:ring-orange-600 w-4 h-4" />
                <span className="text-sm font-bold text-gray-900 leading-relaxed">
                  I confirm that I am able to commit 6 months to this fellowship, with significant time spent in Ghaziabad and western UP field sites. <span className="text-orange-500">*</span>
                </span>
              </label>
            </div>
          )}

          {appType === 'internship' && (
            <div className="p-6 bg-green-50 border border-green-100 rounded-2xl space-y-6 animate-in fade-in duration-500">
              <div>
                <label className="block text-sm font-bold text-green-950 mb-2">When can you start and for how long? <span className="text-orange-500">*</span></label>
                <input type="text" required placeholder="e.g. Mid-July for 3 months" className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-green-950 mb-3">Primary Area of Interest <span className="text-orange-500">*</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Field Work & Mobilisation", "Communications & Content", "Research & Data", "Programme Support", "Other"].map((area, i) => (
                    <label key={i} className="flex items-center gap-2 cursor-pointer bg-white px-4 py-3 rounded-xl border border-green-200 hover:border-green-500 transition">
                      <input type="radio" name="intern_interest" required className="text-green-800 focus:ring-green-800" />
                      <span className="text-sm text-gray-700 font-medium">{area}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="w-full h-px bg-gray-200/60"></div>

          {/* Final Details */}
          <div className="space-y-8 pb-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">How did you hear about us? <span className="text-orange-500">*</span></label>
              <select required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition appearance-none">
                <option value="">Select an option</option>
                <option value="linkedin">LinkedIn</option>
                <option value="instagram">Instagram / Social Media</option>
                <option value="college">College / University</option>
                <option value="word_of_mouth">Friend / Word of Mouth</option>
                <option value="shg">SHG Network</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Anything else you would like us to know?</label>
              <textarea rows={3} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-green-800 focus:ring-1 focus:ring-green-800 outline-none transition resize-none" placeholder="Optional"></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8 border-t border-gray-200">
            <button type="submit" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300">
              Submit Application
            </button>
            <p className="text-xs text-gray-500 mt-4 font-light">Our team will review your application and respond within 5 working days.</p>
          </div>

        </form>
      </section>

    </main>
  );
}