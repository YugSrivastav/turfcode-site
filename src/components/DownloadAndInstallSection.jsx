import React, { useState } from 'react';
import { Download, Copy, Check, Terminal, Apple, Command, ArrowRight, ShieldCheck } from 'lucide-react';
import { downloadPlatforms, quickStartCommands } from '../data/downloadCommands';

export default function DownloadAndInstallSection() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="download" className="py-20 md:py-28 border-b border-[#193122] bg-[#060A07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C15] border border-[#193122] text-xs font-mono text-[#00E599]">
            <Download className="w-3.5 h-3.5" />
            <span>Distribution Matrix</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F0FDF4] tracking-tight">
            Install Turfcode on Any Machine
          </h2>
          <p className="text-base text-[#94A3B8] font-body">
            One-line installers for macOS, Linux, and Windows PowerShell, plus standalone Windows executables.
          </p>
        </div>

        {/* 4-Platform Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#0B130E] border border-[#193122] hover:border-[#264A34] transition-all flex flex-col justify-between space-y-6 hover-lift"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#101C15] border border-[#193122] flex items-center justify-center text-[#00E599]">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#F0FDF4]">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-[#86EFAC]/70 font-mono">
                        {platform.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#101C15] text-[#00E599] border border-[#193122]">
                    {platform.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#6B7280]">
                  Target shell: <span className="text-[#F0FDF4]">{platform.shell}</span>
                </div>
              </div>

              {/* Command or Download Button */}
              {platform.command ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#101C15] border border-[#193122] font-mono text-xs text-[#86EFAC] overflow-x-auto">
                    <code className="whitespace-nowrap">{platform.command}</code>
                    <button
                      onClick={() => handleCopy(platform.id, platform.command)}
                      className="ml-3 p-1.5 rounded bg-[#193122] hover:bg-[#264A34] text-[#F0FDF4] transition-colors shrink-0"
                      title="Copy command"
                    >
                      {copiedId === platform.id ? (
                        <Check className="w-4 h-4 text-[#00E599]" />
                      ) : (
                        <Copy className="w-4 h-4 text-[#94A3B8]" />
                      )}
                    </button>
                  </div>
                  <div className="text-[11px] text-[#6B7280] font-mono">
                    Auto-configures bin path & background daemon.
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <a
                    href={platform.downloadUrl}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#00E599] hover:bg-[#22C55E] text-[#060A07] font-semibold text-sm font-mono shadow-turf-glow transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download {platform.fileName} (Direct)
                  </a>
                  <div className="text-[11px] text-[#6B7280] font-mono text-center">
                    Signed standalone binary • 64-bit Windows
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick-Start 3-Step Guide */}
        <div className="p-8 rounded-2xl bg-[#0B130E] border border-[#193122] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#193122] pb-4">
            <h4 className="font-display font-bold text-lg text-[#F0FDF4]">
              3-Step Hackathon Launch Sequence
            </h4>
            <span className="font-mono text-xs text-[#00E599]">
              Zero config needed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickStartCommands.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-[#101C15] border border-[#193122] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00E599] text-[#060A07] font-bold font-mono text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-[#F0FDF4] font-body">
                    {item.label}
                  </span>
                </div>
                <div className="p-2 rounded bg-[#060A07] border border-[#193122] font-mono text-xs text-[#00E599] select-all">
                  $ {item.cmd}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
