import React from 'react';
import { ArrowLeft, ShieldCheck, Terminal, Lock, Code2, KeyRound, Cpu, ShieldAlert } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('websites');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 text-slate-900 border-b border-slate-200/80">
      
      {/* Subtle Matrix/Circuit Light Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      
      {/* Dynamic Animated Ambient Orbs for Mobile & Desktop */}
      <div className="absolute -top-24 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-teal-300/25 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7 sm:space-y-8">
        
        {/* Security & Dev Tag with mobile glowing pulse */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-slate-300/80 text-slate-700 text-xs sm:text-sm font-mono shadow-xs backdrop-blur-md transition-all active:scale-95 touch-manipulation">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>&lt; M / Full Stack & Cyber Secure Dev &gt;</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-slate-950">
          حول افكارك الى <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-cyan-600">موقع احترافي</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          تطوير وبرمجة مواقع ويب متكاملة بأحدث التقنيات مع أعلى معايير الحماية والأمان السيبراني والأداء السريع.
        </p>

        {/* Single CTA Button with tactile touch response */}
        <div className="flex items-center justify-center pt-1">
          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2.5 px-9 py-4 rounded-2xl bg-gradient-to-r from-teal-600 via-indigo-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-base shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 active:scale-95 active:shadow-md touch-manipulation"
          >
            <span>استعرض المواقع</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 group-active:-translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Security & Code Showcase Card with Mobile Glow */}
        <div className="pt-3 max-w-lg mx-auto">
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-5 shadow-2xl text-right font-mono text-xs space-y-2 border border-slate-800 relative overflow-hidden group transition-all duration-300 active:border-teal-500/60">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 via-indigo-400 to-cyan-400"></div>
            
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-[11px] text-teal-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-teal-400" />
                <span>cyber_sec_shield.ts</span>
              </span>
            </div>

            <div className="space-y-1 text-right text-xs pt-1">
              <p className="text-indigo-300">const securityConfig = &#123;</p>
              <p className="pr-4 text-slate-300">developer: <span className="text-teal-300">'M'</span>,</p>
              <p className="pr-4 text-slate-300">encryption: <span className="text-cyan-300">'AES-256 / SSL'</span>,</p>
              <p className="pr-4 text-slate-300">firewall: <span className="text-emerald-400">'Active'</span>,</p>
              <p className="pr-4 text-slate-300">status: <span className="text-emerald-400">'100% Secure'</span></p>
              <p className="text-indigo-300">&#125;;</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
