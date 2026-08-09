"use client";

import { useState } from "react";
import { Menu, X, Sparkles, Zap } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Lineup", href: "#" },
    { name: "Workshops", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Tickets", href: "#" },
  ];

  return (
    <>
      {/* Mobile Top Navigation */}
      <header className="fixed top-0 w-full z-[100] flex justify-between items-center px-4 py-3 bg-[#FBF9F0] border-b-[3px] border-[#1C1C17] shadow-brutal-sm md:hidden">
        <div className="font-bebas text-2xl tracking-wider text-[#1800AC] uppercase italic flex items-center gap-1">
          <Zap className="w-5 h-5 text-[#FF66C4] fill-[#FF66C4]" />
          CYBERPOP 2026
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="w-10 h-10 border-[3px] border-[#1C1C17] bg-[#FF87DA] rounded-full shadow-brutal-sm flex items-center justify-center active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-[#1C1C17]" />
          ) : (
            <Menu className="w-5 h-5 text-[#1C1C17]" />
          )}
        </button>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[55px] bg-[#1C1C17]/80 backdrop-blur-sm z-[90] md:hidden flex flex-col p-6 animate-in fade-in duration-200">
          <div className="bg-[#FBF9F0] border-[3px] border-[#1C1C17] rounded-xl p-6 shadow-brutal-lg flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-rubik text-xl font-bold text-[#1C1C17] hover:text-[#FF66C4] py-2 border-b-2 border-dashed border-[#1C1C17]/30 flex justify-between items-center"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-4 h-4 text-[#B5F43C]" />
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const formEl = document.getElementById("register-form");
                formEl?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-2 w-full bg-[#1800AC] text-white font-bebas text-2xl py-3 border-[3px] border-[#1C1C17] shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all rounded-lg"
            >
              PRE-REGISTER NOW
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation Header */}
      <nav className="hidden md:flex fixed top-0 w-full z-[100] justify-between items-center px-8 py-4 bg-[#FBF9F0] border-b-[3px] border-[#1C1C17] shadow-brutal-sm">
        <div className="font-bebas text-3xl tracking-widest text-[#1800AC] uppercase italic flex items-center gap-2">
          <span className="bg-[#B5F43C] border-2 border-[#1C1C17] p-1 rounded-md rotate-[-6deg] shadow-brutal-sm inline-block">
            <Zap className="w-5 h-5 text-[#1C1C17] fill-[#1C1C17]" />
          </span>
          CYBERPOP 2026
        </div>
        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1C1C17] font-jakarta font-bold text-sm tracking-wider uppercase hover:text-[#FF66C4] transition-all hover:-rotate-2 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={() => {
            const formEl = document.getElementById("register-form");
            formEl?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#1800AC] text-white font-jakarta font-extrabold text-sm tracking-widest px-6 py-2.5 border-[3px] border-[#1C1C17] shadow-brutal hover:bg-[#FF66C4] hover:text-[#1C1C17] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer rounded-md uppercase"
        >
          PRE-REGISTER
        </button>
      </nav>
    </>
  );
}
