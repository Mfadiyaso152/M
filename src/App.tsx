import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WebsitesSection } from './components/WebsitesSection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Cairo'] flex flex-col selection:bg-teal-500 selection:text-white relative">
      
      {/* Light Programming & Cyber Grid Background with Vignette Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Cyber Hex / Tech Gradient glow spots */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-teal-200/25 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-cyan-200/25 via-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <WebsitesSection />
        </main>
      </div>
    </div>
  );
}
