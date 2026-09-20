import React, { useState } from 'react';
import { Copy, Check, Terminal, Play, QrCode, ArrowDown } from 'lucide-react';
import { theProblemCrisis } from '../data/productFeatures';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const defaultCommand = 'curl -fsSL https://turfcode.dev/install.sh | bash';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(defaultCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#193122] bg-turf-radial bg-pitch-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Hackathon Stage Pitch Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101C15] border border-[#193122] text-xs font-mono text-[#86EFAC] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
            <span>Craftora 9-Hour Build Sprint • Team Ace of Spade</span>
            <span className="text-[#6B7280]">|</span>
            <span className="text-[#00E599] font-semibold">Port 7873</span>
          </div>

          {/* Main Value Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-[#F0FDF4]">
            Real-Time Concurrency for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] via-[#22C55E] to-[#86EFAC]">
              Multi-Agent
            </span>{' '}
            Engineering
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-body leading-relaxed">
            When four developers vibe-code simultaneously with Claude, AGY, and Codex, Git merge collisions ruin the sprint. Turfcode orchestrates JIT micro-locks and semantic AST mergers in real time.
          </p>

          {/* Quick Copy Install Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="flex items-center justify-between p-2 pl-4 rounded-xl bg-[#0B130E] border border-[#193122] shadow-turf-card focus-within:border-[#00E599] transition-colors">
              <div className="flex items-center gap-3 overflow-x-auto text-left font-mono text-xs sm:text-sm text-[#86EFAC] py-1">
                <span className="text-[#00E599] select-none">$</span>
                <code className="whitespace-nowrap">{defaultCommand}</code>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#F0FDF4] text-xs font-mono border border-[#193122] transition-colors shrink-0 ml-2"
                title="Copy installation command"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#00E599]" />
                    <span className="text-[#00E599]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#94A3B8]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#6B7280] mt-2">
              <span>Supports macOS (arm/x86)</span>
              <span>•</span>
              <span>Linux</span>
              <span>•</span>
              <a href="#download" className="text-[#00E599] hover:underline">Windows .exe & PowerShell</a>
            </div>
          </div>

          {/* Mobile QR & Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#simulator"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00E599] hover:bg-[#22C55E] text-[#060A07] font-semibold text-sm font-mono shadow-turf-glow transition-all hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-current" />
              Try Mobile TUI Simulator
            </a>
            <a
              href="#waitlist"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C15] hover:bg-[#193122] text-[#F0FDF4] font-medium text-sm font-mono border border-[#193122] transition-all hover:-translate-y-0.5"
            >
              <QrCode className="w-4 h-4 text-[#00E599]" />
              Join Hackathon Early Access
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 max-w-3xl mx-auto">
            {theProblemCrisis.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0B130E] border border-[#193122] text-left hover-lift"
              >
                <div className="font-display font-bold text-2xl text-[#00E599]">
                  {stat.value}
                </div>
                <div className="font-mono text-xs font-semibold text-[#F0FDF4] mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#6B7280] font-body mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
