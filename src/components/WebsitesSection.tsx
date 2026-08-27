import React from 'react';
import { websiteProjects } from '../data/initialData';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export function WebsitesSection() {
  return (
    <section id="websites" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Clean Section Header */}
        <div className="border-b border-slate-200/80 pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                المواقع المبرمجة
              </h2>
            </div>
          </div>
        </div>

        {/* Websites Grid with Mobile-First Interactive Tap Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {websiteProjects.map((site, index) => (
            <a
              key={site.id}
              href={site.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-teal-500 active:border-teal-600 shadow-sm hover:shadow-xl active:shadow-md hover:shadow-teal-500/10 transition-all duration-300 flex flex-col justify-between space-y-4 cursor-pointer overflow-hidden transform hover:-translate-y-1.5 active:scale-[0.98] active:bg-slate-50/80 touch-manipulation select-none"
            >
              {/* Cybersecurity Top Accent Line on Hover/Active */}
              <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-teal-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>

              {/* Mobile Ambient Glow Corner */}
              <div className="absolute -right-12 -top-12 w-28 h-28 bg-teal-500/10 rounded-full blur-xl pointer-events-none group-active:bg-teal-500/25 transition-all"></div>

              <div className="space-y-3 relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-teal-50 group-active:bg-teal-100 text-slate-700 group-hover:text-teal-700 group-active:text-teal-800 flex items-center justify-center font-mono text-xs font-bold border border-slate-200 group-hover:border-teal-200 transition-colors shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-teal-700 group-active:text-teal-800 transition-colors leading-snug">
                      {site.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-teal-600 group-active:text-teal-700 group-hover:border-teal-300 group-active:border-teal-400 group-hover:bg-teal-50/50 group-active:bg-teal-100/60 shrink-0 transition-all duration-200 group-hover:rotate-45 group-active:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {site.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
