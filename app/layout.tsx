import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 
import Preloader from './components/Preloader';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: "The Social Purpose Trust",
  description: "Making India's Green Economy Work for Everyone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans bg-[#F7F5F0] text-gray-900 antialiased relative`}>
        
        {/* Top Navigation */}
        <Navbar />
        
        {/* Main Page Content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating WhatsApp Button (Hamesha screen ke upar float karega) */}
        <WhatsAppButton />
        {/* Preloader (Page load hone par dikhega) */}
        <Preloader />
        
      </body>
    </html>
  );
}