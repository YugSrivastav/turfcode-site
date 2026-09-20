import React, { useState, useRef } from 'react';
import { Copy, Check, Play, Download, Volume2, VolumeX } from 'lucide-react';
import { theProblemCrisis } from '../data/productFeatures';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const defaultCommand = 'curl -fsSL https://turfcode.dev/install.sh | bash';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(defaultCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#193122] bg-[#060A07]">
      
      {/* BACKGROUND VIDEO LAYER (Full bleed behind the hero section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Desktop Landscape Video (Laptops & Desktops) */}
        <video
          ref={desktopVideoRef}
          src="/landing-video-desktop.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center opacity-60 filter brightness-90 contrast-115"
        />

        {/* Mobile Portrait Video (Smartphones) */}
        <video
          ref={mobileVideoRef}
          src="/landing-video-mobile.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center opacity-65 filter brightness-90 contrast-115"
        />

        {/* Cinematic Dark Turf Overlays to maintain WCAG AAA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A07]/80 via-[#060A07]/50 to-[#060A07]/95"></div>
        <div className="absolute inset-0 bg-pitch-dots opacity-30"></div>
        <div className="absolute inset-0 bg-turf-radial"></div>
      </div>

      {/* FOREGROUND HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Hackathon Stage Pitch Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101C15]/90 border border-[#193122] text-xs font-mono text-[#86EFAC] shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse"></span>
            <span>Craftora 9-Hour Build Sprint • Team Ace of Spade</span>
            <span className="text-[#6B7280]">|</span>
            <span className="text-[#00E599] font-semibold">Port 7873</span>
          </div>

          {/* Main Value Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08] text-[#F0FDF4] drop-shadow-md">
            Real-Time Concurrency for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E599] via-[#22C55E] to-[#86EFAC]">
              Multi-Agent
            </span>{' '}
            Engineering
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-body leading-relaxed drop-shadow-sm">
            When four developers vibe-code simultaneously with Claude, AGY, and Codex, Git merge collisions ruin the sprint. Turfcode orchestrates JIT micro-locks and semantic AST mergers in real time.
          </p>

          {/* Quick Copy Install Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="flex items-center justify-between p-2 pl-4 rounded-xl bg-[#0B130E]/95 border border-[#193122] shadow-turf-card focus-within:border-[#00E599] transition-colors backdrop-blur-md">
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
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#86EFAC]/70 mt-2">
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
              href="#download"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C15]/90 hover:bg-[#193122] text-[#F0FDF4] font-medium text-sm font-mono border border-[#193122] transition-all hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-[#00E599]" />
              Download CLI & App
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 max-w-3xl mx-auto">
            {theProblemCrisis.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0B130E]/90 border border-[#193122] text-left hover-lift backdrop-blur-md"
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

      {/* Floating Audio Toggle for Background Video */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B130E]/80 hover:bg-[#101C15] border border-[#193122] text-[#86EFAC] text-[11px] font-mono backdrop-blur-md transition-colors shadow-sm"
          title={isMuted ? 'Unmute background video' : 'Mute background video'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#6B7280]" /> : <Volume2 className="w-3.5 h-3.5 text-[#00E599]" />}
          <span>{isMuted ? 'Audio Off' : 'Audio On'}</span>
        </button>
      </div>

    </section>
  );
}
