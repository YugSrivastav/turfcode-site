import React from 'react';
import { Terminal, Github, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#060A07] border-t border-[#193122] py-12 text-xs font-mono text-[#6B7280]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo and Tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/turfcode-logo.png"
              alt="Turfcode Logo"
              className="w-8 h-8 object-contain"
            />
            <div>
              <div className="font-display font-bold text-sm text-[#F0FDF4]">
                TURFCODE
              </div>
              <div className="text-[11px] text-[#D4EC5B]/70">
                Multi-Agent Concurrency on the Pitch
              </div>
            </div>
          </div>

          {/* Nav Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[#94A3B8]">
            <a href="#" className="hover:text-[#A2C304] transition-colors">
              Top
            </a>
            <a href="#product" className="hover:text-[#A2C304] transition-colors">
              Architecture
            </a>
            <a href="#simulator" className="hover:text-[#A2C304] transition-colors">
              TUI Simulator
            </a>
            <a href="#download" className="hover:text-[#A2C304] transition-colors">
              Install
            </a>
          </div>

          {/* GitHub Repo */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/YugSrivastav/turfcode-site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#101C15] border border-[#193122] text-[#D4EC5B] hover:text-[#A2C304] hover:border-[#A2C304]/40 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>YugSrivastav/turfcode-site</span>
            </a>
          </div>

        </div>

        <div className="border-t border-[#193122]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <div>
            Built with dedication for Craftora Hackathon by <span className="text-[#F0FDF4] font-semibold">Team Ace of Spade</span>.
          </div>
          <div>
            Node.js v20+ • Blessed TUI • Claude 3.5 Sonnet Peacemaker
          </div>
        </div>
      </div>
    </footer>
  );
}
