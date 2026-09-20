import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Download, Terminal, CheckCircle2 } from 'lucide-react';

export default function DownloadAndInstallSection() {
  const [copied, setCopied] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState('unix');

  const unixCommand = 'curl -fsSL https://turfcode.dev/install.sh | bash';
  const windowsCommand = 'iwr -useb https://turfcode.dev/install.ps1 | iex';

  const activeCommand = currentPlatform === 'windows' ? windowsCommand : unixCommand;
  const activePrompt = currentPlatform === 'windows' ? 'PS>' : '$';

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="relative overflow-hidden py-16 sm:py-24 md:py-32 border-b border-[#193122] bg-[#060A07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          
          {/* Herdr-Inspired Massive Display Headline */}
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#F0FDF4] leading-[1.05] sm:leading-[0.98] break-words">
            Give your agents<br />
            somewhere to play.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg text-[#94A3B8] font-body max-w-2xl leading-relaxed">
            One command, and git merge collisions are history: the agent CLIs you already run keep coding at 250 tokens per second, but now you never drop the ball on conflicting diffs.
          </p>

          {/* Platform Tabs & Command Bar */}
          <div className="space-y-3 pt-2 max-w-2xl">
            
            {/* Clear Platform Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentPlatform('unix')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                  currentPlatform === 'unix'
                    ? 'bg-[#101C15] border-[#A2C304] text-[#A2C304] shadow-turf-glow'
                    : 'bg-[#0B130E] border-[#193122] text-[#94A3B8] hover:text-[#F0FDF4] hover:border-[#264A34]'
                }`}
              >
                macOS & Linux (bash)
              </button>

              <button
                type="button"
                onClick={() => setCurrentPlatform('windows')}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                  currentPlatform === 'windows'
                    ? 'bg-[#101C15] border-[#A2C304] text-[#A2C304] shadow-turf-glow'
                    : 'bg-[#0B130E] border-[#193122] text-[#94A3B8] hover:text-[#F0FDF4] hover:border-[#264A34]'
                }`}
              >
                Windows (PowerShell)
              </button>
            </div>

            {/* Unified Sleek Command Bar */}
            <div className="flex items-center justify-between p-2 sm:p-2.5 pl-3 sm:pl-5 rounded-lg bg-[#0B130E] border border-[#193122] font-mono text-xs sm:text-sm text-[#D4EC5B] focus-within:border-[#A2C304] transition-colors shadow-turf-card">
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto text-left py-1 min-w-0 flex-1">
                <span className="text-[#A2C304] select-none font-bold shrink-0">{activePrompt}</span>
                <code className="whitespace-nowrap text-[#F0FDF4] font-medium truncate sm:overflow-visible">{activeCommand}</code>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 sm:px-4 py-2 rounded bg-[#101C15] hover:bg-[#193122] text-[#A2C304] hover:text-[#B0D504] text-xs font-mono font-bold uppercase tracking-wider border border-[#193122] transition-colors shrink-0 ml-2 sm:ml-3 flex items-center gap-1.5"
                title="Copy install command"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Clean Direct Standalone Download Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#6B7280] pt-1 px-1">
              <span>Automatic architecture detection (x86_64 / arm64)</span>
              <a
                href="https://github.com/YugSrivastav/turfcode-site/releases/latest/download/turfcode-setup.exe"
                className="text-[#A2C304] hover:text-[#B0D504] hover:underline flex items-center gap-1 transition-colors font-medium shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Standalone Windows .exe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Quick-Start Launch Steps */}
          <div className="pt-8 sm:pt-10 border-t border-[#193122]/70 max-w-2xl">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#6B7280] mb-3">
              3-Step Hackathon Launch Sequence
            </div>
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs font-mono text-[#D4EC5B]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#101C15] border border-[#193122] text-[#A2C304] flex items-center justify-center font-bold text-[10px]">
                  1
                </span>
                <span>$ turf create</span>
              </div>
              <span className="text-[#193122] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#101C15] border border-[#193122] text-[#A2C304] flex items-center justify-center font-bold text-[10px]">
                  2
                </span>
                <span>$ turf join &lt;room&gt;</span>
              </div>
              <span className="text-[#193122] hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#101C15] border border-[#193122] text-[#A2C304] flex items-center justify-center font-bold text-[10px]">
                  3
                </span>
                <span>$ turf start</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side Watermark Graphic (Herdr Mascot Silhouette style) */}
      <div className="hidden lg:flex absolute right-[-40px] bottom-[-20px] top-0 w-1/2 items-end justify-end pointer-events-none select-none z-0 overflow-hidden pr-8 pb-4">
        {/* Giant Subtle ASCII Cat Watermark */}
        <div className="opacity-15 transform translate-x-8 translate-y-4">
          <pre className="font-mono text-[#A2C304] text-xs leading-[11px] scale-[1.8] origin-bottom-right">
{`
                  /\\_/\\
                 ( o.o )   HELLO /
                  > ^ <
                 /|   |\\
                (_|   |_)
`}
          </pre>
        </div>

        {/* Ambient Turf Green Radial Glow behind mascot */}
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#A2C304]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

    </section>
  );
}
