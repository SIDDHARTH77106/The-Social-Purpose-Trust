import React from 'react';
import Link from 'next/link';

export default function CareerPage() {
  // Aapke purane data se li gayi jobs ki list
  const jobListings = [
    { title: "IT Support Specialist", category: "IT Support", type: "Internship" },
    { title: "Video editing & Production", category: "Video Editing", type: "Internship" },
    { title: "Research & Advocacy", category: "Research & Advocacy", type: "Internship" },
    { title: "Event & Community Manager", category: "Events and Community", type: "Internship" },
    { title: "Grant writing specialist", category: "Grant writing", type: "Internship" },
    { title: "App Developer", category: "App development", type: "Internship" },
    { title: "Graphic Designer", category: "Graphic Design", type: "Internship" },
    { title: "Data Analyst", category: "Data Analytics", type: "Internship" },
    { title: "Digital Marketer", category: "Digital Marketing", type: "Internship" },
    { title: "Machine Learning Specialist", category: "Machine learning", type: "Internship" }
  ];

  // Aapke purane data se li gayi categories
  const categories = [
    "All Job Category", "App development", "Data Analytics", "Digital Marketing", 
    "Events and Community", "Grant writing", "Graphic Design", "IT Support", 
    "Machine learning", "Research & Advocacy", "Video editing", "Web development"
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] pb-24 selection:bg-orange-200">
      
      {/* Header Section */}
      <section className="bg-green-950 pt-16 pb-16 lg:pt-24 border-b-8 border-orange-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-green-400 mb-4">
            Join Our Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight">
            Careers at The Social Purpose Trust
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-medium">
            Be a part of a dedicated team committed to making a positive impact and building a Carbon Smart India.
          </p>
        </div>
      </section>

      {/* Main Job Board Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters - Card-free clear layout */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-2">
                Filter by Category
              </h3>
              <ul className="space-y-1 mb-8">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className={`text-sm w-full text-left px-3 py-2.5 rounded-md transition ${index === 0 ? 'bg-green-900/10 text-green-900 font-bold' : 'text-gray-600 hover:bg-gray-200/50 hover:text-green-800'}`}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 border-b border-gray-300 pb-2">
                Job Type
              </h3>
              <select className="w-full bg-white border border-gray-300 text-gray-700 text-sm rounded-md px-4 py-3 outline-none focus:border-green-800 transition">
                <option>All Job Type</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          {/* Clean List View Layout */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              {jobListings.map((job, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 hover:bg-gray-50 transition group ${index !== jobListings.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  {/* Job Info */}
                  <div className="mb-4 sm:mb-0">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-800 transition">
                      {job.title}
                    </h4>
                    <div className="flex items-center flex-wrap gap-3">
                      <span className="text-xs font-bold uppercase tracking-wide text-orange-700 bg-orange-100 px-2.5 py-1 rounded-sm">
                        {job.type}
                      </span>
                      <span className="text-gray-300">|</span>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {job.category}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    <Link 
                      href="/register" 
                      className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-sm font-bold text-green-900 border-2 border-green-900 rounded-full hover:bg-green-900 hover:text-white transition-colors duration-300"
                    >
                      Apply Now <span className="ml-2 font-normal">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-8 text-center">
              <button className="text-green-800 hover:text-orange-600 font-bold text-sm transition flex items-center justify-center mx-auto gap-2">
                Load more jobs <span className="text-lg">↓</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}