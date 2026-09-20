import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { teamRoster, theProblemCrisis } from '../data/productFeatures';
import ConcurrencyEngineInteractive from './ConcurrencyEngineInteractive';

export default function ProductDetailsSection() {
  return (
    <section id="product" className="py-20 md:py-28 border-b border-[#193122] bg-[#060A07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Section Header & The Crisis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C15] border border-[#193122] text-xs font-mono text-[#00E599]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{theProblemCrisis.badge}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F0FDF4] tracking-tight leading-tight">
              Why 4-Person Vibe Coding Breaks Git
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] font-body leading-relaxed">
              {theProblemCrisis.explanation}
            </p>
            <div className="p-5 rounded-xl bg-[#0B130E] border-l-4 border-l-[#00E599] border-y border-r border-[#193122] space-y-2 font-mono text-xs sm:text-sm">
              <div className="text-[#00E599] font-semibold">The Cold Technical Reality:</div>
              <p className="text-[#86EFAC]/80 leading-relaxed font-body">
                File locks prevent simultaneous overwrites, but AST drift breaks code silently. If Ayush modifies an auth signature while Yug's agent writes a caller using the old signature, both compile in isolation — but the whole app crashes when merged.
              </p>
            </div>
          </div>

          {/* Halftone Sports Editorial Visual (Zidane Volley / Pitch Aesthetic - Full Photo) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-[#193122] bg-[#0B130E] shadow-turf-card hover:border-[#264A34] transition-all">
              <img
                src="/pitch-zidane-halftone.png"
                alt="Zidane Halftone UEFA Champions League Editorial"
                className="w-full h-auto object-contain block transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>

        {/* The Interactive Concurrency Engine Architecture Deep-Dive */}
        <ConcurrencyEngineInteractive />

        {/* Team Ace of Spade Roster */}
        <div className="p-8 rounded-2xl bg-[#0B130E] border border-[#193122] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#193122] pb-6">
            <div>
              <h4 className="font-display font-bold text-xl text-[#F0FDF4]">
                Team Ace of Spade
              </h4>
              <p className="text-xs font-mono text-[#86EFAC] mt-1">
                Engineers behind the 9-Hour Turfcode Sprint
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded bg-[#101C15] border border-[#193122] text-[#94A3B8]">
              Craftora Hackathon
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamRoster.map((member, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#101C15] border border-[#193122]/60 hover:border-[#00E599]/40 transition-colors"
              >
                <div className="font-display font-bold text-sm text-[#F0FDF4]">
                  {member.name}
                </div>
                <div className="text-xs font-mono text-[#00E599] mt-0.5">
                  {member.role}
                </div>
                <div className="text-[11px] text-[#6B7280] font-body mt-1">
                  {member.focus}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
