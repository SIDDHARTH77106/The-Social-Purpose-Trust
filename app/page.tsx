import Hero from './components/home/Hero';
// Import other components as you create them
// import About from '../components/home/About';
// import Programs from '../components/home/Programs';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-orange-200">
      <Hero />
      
      {/* Aapne pichle message mein jo code dekha tha (Who We Are, Programs, etc.) 
        wo sab aap alag-alag components (jaise <About />, <Programs />) 
        bana kar yahan import kar lijiye. 
        
        Tailwind classes puri tarah se mobile-responsive hain.
      */}
      
      <section id="programs" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
             (Programs, Impact, Team, and other sections go here...)<br/>
             Create them as separate components in <code className="bg-gray-200 px-2 rounded">components/home/</code> and drop them here.
          </div>
      </section>

    </main>
  );
}