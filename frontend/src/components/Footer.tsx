"use client";

import { AtSign, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1800AC] border-t-[3px] border-[#1C1C17] w-full py-8 px-6 z-50 shadow-[0_-4px_0_0_rgba(28,28,23,1)] relative text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Save The Date Badge */}
        <div className="font-bebas text-2xl tracking-widest text-[#1800AC] bg-[#B5F43C] px-6 py-1.5 border-[3px] border-[#1C1C17] shadow-brutal rotate-2 select-none">
          SAVE THE DATE!
        </div>

        {/* Social Handle */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-bebas text-2xl tracking-widest text-white hover:text-[#FF87DA] transition-all hover:scale-105 group"
        >
          <div className="bg-white text-[#1800AC] p-1.5 rounded-full border-2 border-[#1C1C17] group-hover:rotate-12 transition-transform">
            <AtSign className="w-5 h-5" />
          </div>
          <span>@cs2026.my.id</span>
          <ExternalLink className="w-4 h-4 opacity-75" />
        </a>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-6 font-jakarta font-bold text-xs tracking-wider uppercase">
          <a href="#" className="hover:text-[#B5F43C] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#B5F43C] transition-colors">
            Code of Conduct
          </a>
          <a href="#" className="hover:text-[#B5F43C] transition-colors">
            Contact HQ
          </a>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-white/20 text-center font-jakarta font-bold text-xs text-white/70">
        © 2026 CYBERPOP MISSION CONTROL. ALL RIGHTS RESERVED. NO RE-ENTRY WITHOUT STICKERS.
      </div>
    </footer>
  );
}
