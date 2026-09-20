import React, { useState, useRef } from 'react';
import { Copy, Check, Play, Download, Volume2, VolumeX, ArrowRight, Zap, Shield, GitBranch, Terminal } from 'lucide-react';
import RotatingWord from './RotatingWord';

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

  const rotatingWords = [
    'Multi-Agent',
    'Vibe-Coding',
    'Late-Night',
    'Agent-Swarm',
    'Full-Throttle',
    'Zero-Conflict',
  ];

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-between border-b border-[#193122] bg-[#060A07]">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={desktopVideoRef}
          src="/landing-video-desktop.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center opacity-40 filter brightness-75 contrast-125"
        />

        <video
          ref={mobileVideoRef}
          src="/landing-video-mobile.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center opacity-45 filter brightness-75 contrast-125"
        />

        {/* Cinematic contrast scrims */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A07]/90 via-[#060A07]/60 to-[#060A07]"></div>
        <div className="absolute inset-0 bg-pitch-dots opacity-20"></div>
        <div className="absolute inset-0 bg-turf-radial"></div>
      </div>

      {/* Main Hero Stage */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10 sm:pb-12 text-center flex-1 flex flex-col justify-center items-center space-y-6 sm:space-y-8">
        
        {/* Hackathon Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#101C15]/90 border border-[#193122] text-[11px] sm:text-xs font-mono text-[#D4EC5B] shadow-sm backdrop-blur-md max-w-full">
          <span className="w-2 h-2 rounded-full bg-[#A2C304] animate-ping shrink-0"></span>
          <span className="font-semibold tracking-wide">Craftora 9-Hour Sprint</span>
          <span className="text-[#6B7280]">•</span>
          <span className="text-[#94A3B8] truncate">Team Ace of Spade</span>
        </div>

        {/* Dynamic GenZ Headline with Rotating Value Word */}
        <h1 className="font-display font-extrabold text-[28px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.12] sm:leading-[1.05] text-[#F0FDF4] max-w-4xl px-2 break-words">
          Real-time concurrency for{' '}
          <span className="block mt-1 sm:mt-2">
            <RotatingWord words={rotatingWords} interval={2200} />
          </span>
          <span className="text-[20px] sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#94A3B8] block mt-1.5 sm:mt-2">
            sprints without cooked git merges.
          </span>
        </h1>

        {/* Subtitle with Informal Voice */}
        <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto font-body leading-relaxed px-2">
          Git was made in 2005 for people who commit twice a day. When 4 of you vibe-code with Claude and Cursor at 250 tokens a second, normal Git just dies. Turfcode intercepts edits with 15s micro-locks so nobody overwrites each other.
        </p>

        {/* Sleek Command Console Bar */}
        <div className="w-full max-w-xl space-y-2 pt-1 sm:pt-2">
          <div className="flex items-center justify-between p-2 pl-3 sm:pl-4 rounded-xl bg-[#0B130E]/95 border border-[#193122] shadow-turf-card focus-within:border-[#A2C304] transition-colors backdrop-blur-md">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto text-left font-mono text-xs sm:text-sm text-[#D4EC5B] py-1 min-w-0 flex-1 no-scrollbar">
              <span className="text-[#A2C304] select-none font-bold shrink-0">$</span>
              <code className="whitespace-nowrap text-[#F0FDF4]">{defaultCommand}</code>
            </div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#A2C304] text-xs font-mono font-bold border border-[#193122] transition-colors shrink-0 ml-2"
              title="Copy installation command"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#A2C304]" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#A2C304]" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-1 text-[11px] font-mono text-[#6B7280]">
            <span>macOS, Linux, WSL2</span>
            <a href="#download" className="text-[#A2C304] hover:underline flex items-center gap-1">
              <span>Windows .exe & PowerShell</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-md">
          <a
            href="#simulator"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#A2C304] hover:bg-[#B0D504] text-[#060A07] font-bold text-sm font-mono shadow-turf-glow transition-all hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Launch TUI Simulator</span>
          </a>
          <a
            href="#download"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101C15] hover:bg-[#193122] text-[#F0FDF4] font-medium text-sm font-mono border border-[#193122] transition-all hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-[#A2C304]" />
            <span>Get CLI Binary</span>
          </a>
        </div>

      </div>

      {/* Sleek Live Telemetry Ticker Strip (Anti-Bento: Clean 2x2 on Mobile, 1-line on Desktop) */}
      <div className="relative z-10 w-full border-t border-[#193122] bg-[#060A07]/90 backdrop-blur-md py-3.5 sm:py-4 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:flex md:flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono">
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A2C304] shrink-0"></span>
            <span className="text-[#6B7280] uppercase tracking-wider text-[10px]">Speed:</span>
            <span className="text-[#F0FDF4] font-bold">250 tok/s</span>
            <span className="text-[#6B7280] hidden lg:inline">per active agent</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A2C304] shrink-0"></span>
            <span className="text-[#6B7280] uppercase tracking-wider text-[10px]">Lock Guard:</span>
            <span className="text-[#F0FDF4] font-bold">15s Auto-TTL</span>
            <span className="text-[#6B7280] hidden lg:inline">zero starvation</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A2C304] shrink-0"></span>
            <span className="text-[#6B7280] uppercase tracking-wider text-[10px]">Peacemaker:</span>
            <span className="text-[#F0FDF4] font-bold">&lt; 1.4s</span>
            <span className="text-[#6B7280] hidden lg:inline">AST semantic merge</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A2C304] shrink-0"></span>
            <span className="text-[#6B7280] uppercase tracking-wider text-[10px]">Merge Trauma:</span>
            <span className="text-[#A2C304] font-bold">0 dropped lines</span>
          </div>

        </div>
      </div>

      {/* Floating Audio Toggle for Background Video - Tucked at Top-Right Corner */}
      <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20">
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0B130E]/80 hover:bg-[#101C15] border border-[#193122] text-[#D4EC5B] text-[10px] sm:text-[11px] font-mono backdrop-blur-md transition-colors shadow-sm"
          title={isMuted ? 'Unmute background video' : 'Mute background video'}
        >
          {isMuted ? <VolumeX className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#6B7280]" /> : <Volume2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#A2C304]" />}
          <span>{isMuted ? 'Audio Off' : 'Audio On'}</span>
        </button>
      </div>

    </section>
  );
}
