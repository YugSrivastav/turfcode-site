import React, { useState } from 'react';
import { Terminal, Download, Menu, X } from 'lucide-react';

export default function NavigationHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#060A07]/90 backdrop-blur-md border-b border-[#193122]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Brand Title */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/turfcode-logo.png"
            alt="Turfcode Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-[#F0FDF4] group-hover:text-[#A2C304] transition-colors">
              TURFCODE
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4EC5B]/70">
              Team Ace of Spade
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#product" className="text-[#94A3B8] hover:text-[#A2C304] transition-colors">
            Architecture
          </a>
          <a href="#simulator" className="text-[#94A3B8] hover:text-[#A2C304] transition-colors flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#A2C304]" />
            Interactive TUI
          </a>
          <a href="#download" className="text-[#94A3B8] hover:text-[#A2C304] transition-colors">
            Downloads
          </a>
          <a
            href="#download"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#A2C304] text-[#060A07] font-semibold font-mono text-xs hover:bg-[#B0D504] transition-all hover:shadow-turf-glow"
          >
            <Download className="w-3.5 h-3.5" />
            Get Turfcode
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#download"
            className="px-3 py-1.5 rounded bg-[#A2C304] text-[#060A07] font-bold text-xs font-mono"
          >
            Install
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D4EC5B] hover:text-[#A2C304] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B130E] border-b border-[#193122] px-4 pt-3 pb-6 space-y-3 font-mono text-sm">
          <a
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-[#94A3B8] hover:bg-[#101C15] hover:text-[#A2C304]"
          >
            1. Product Architecture
          </a>
          <a
            href="#simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-[#94A3B8] hover:bg-[#101C15] hover:text-[#A2C304]"
          >
            2. Mobile TUI Simulator
          </a>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded text-[#94A3B8] hover:bg-[#101C15] hover:text-[#A2C304]"
          >
            3. Download Matrix (Linux/Mac/Win)
          </a>
        </div>
      )}
    </header>
  );
}
