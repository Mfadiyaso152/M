import React from 'react';
import { MessageCircle, ShieldCheck, Terminal } from 'lucide-react';

export function Navbar() {
  const whatsappNumber = '966536894854';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('السلام عليكم، أرغب في طلب مشروع برمجي')}`;

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand: M with Cyber/Security Badge */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-indigo-600 to-cyan-500 rounded-2xl blur-[2px] opacity-70 group-hover:opacity-100 group-active:opacity-100 transition duration-300"></div>
              <div className="relative w-11 h-11 bg-white rounded-2xl flex items-center justify-center text-slate-900 font-black text-2xl tracking-tighter border border-slate-200 shadow-sm active:scale-95 transition-transform touch-manipulation">
                M
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-600 font-mono text-xs hidden sm:flex">
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-teal-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Secure Dev</span>
              </span>
            </div>
          </div>

          {/* Action Button: WhatsApp Icon Only with tactile mobile feedback */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-300 hover:border-emerald-500 active:border-emerald-600 text-emerald-600 hover:text-white active:text-white hover:bg-emerald-600 active:bg-emerald-700 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-emerald-500/20 active:scale-90 touch-manipulation"
            title="طلب مشروع (0536894854)"
            aria-label="طلب مشروع عبر واتساب"
          >
            <MessageCircle className="w-6 h-6 transform group-hover:rotate-12 group-active:rotate-12 transition-transform duration-200" />
          </a>

        </div>
      </div>
    </header>
  );
}
