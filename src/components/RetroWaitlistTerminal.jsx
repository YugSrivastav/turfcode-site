import React, { useState } from 'react';
import { Check, Sparkles, Terminal } from 'lucide-react';

export default function RetroWaitlistTerminal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('early sneak peeks');
  const [submitted, setSubmitted] = useState(false);
  const [passToken, setPassToken] = useState('');

  const asciiCat = `
      /\\_/\\
     ( o.o )   HELLO /
      > ^ <
     /|   |\\
    (_|   |_)
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    const token = `TURF-${Math.floor(1000 + Math.random() * 9000)}-${name ? name.toUpperCase().slice(0, 4) : 'PASS'}`;
    setPassToken(token);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-[#060A07] border-b border-[#193122] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C15] border border-[#193122] text-xs font-mono text-[#00E599]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hackathon Early Access</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#F0FDF4]">
            Claim Your Turf Early Access Token
          </h2>
          <p className="text-sm text-[#94A3B8] font-body">
            Audience & judges: register via this authentic CRT terminal to unlock private beta clusters.
          </p>
        </div>

        {/* Retro CRT Phosphor Green Container (Matching image asset) */}
        <div className="relative rounded-2xl border-2 border-dashed border-[#00E599]/60 bg-[#08120B] p-6 sm:p-10 shadow-turf-glow crt-scanlines overflow-hidden">
          
          <div className="flex items-center justify-between border-b border-[#193122] pb-4 mb-6 font-mono">
            <span className="text-xs text-[#00E599] font-bold tracking-widest uppercase">
              WAITLIST SIGNUP — PORT 7873
            </span>
            <span className="text-[11px] text-[#86EFAC]/70">
              [ OK ] initializing signup session...
            </span>
          </div>

          {!submitted ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Terminal Form */}
              <form onSubmit={handleSubmit} className="md:col-span-7 space-y-5 font-mono text-xs sm:text-sm">
                
                {/* Name field */}
                <div className="space-y-1.5">
                  <label className="text-[#86EFAC] block">
                    me@turfcode:~$ <span className="text-[#F0FDF4]">whoami</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="> enter your name or handle"
                    className="w-full bg-[#0B1A10] border border-[#193122] focus:border-[#00E599] rounded-lg px-3 py-2 text-[#00E599] placeholder-[#6B7280] outline-none font-mono text-xs sm:text-sm transition-colors"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-1.5">
                  <label className="text-[#86EFAC] block">
                    me@turfcode:~$ <span className="text-[#F0FDF4]">mail --address</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="> email@domain.com"
                    className="w-full bg-[#0B1A10] border border-[#193122] focus:border-[#00E599] rounded-lg px-3 py-2 text-[#00E599] placeholder-[#6B7280] outline-none font-mono text-xs sm:text-sm transition-colors"
                  />
                </div>

                {/* Mode toggle */}
                <div className="space-y-2">
                  <div className="text-[#86EFAC]">
                    me@turfcode:~$ <span className="text-[#F0FDF4]">subscribe --mode</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => setMode('early sneak peeks')}
                      className={`px-3 py-1.5 rounded text-xs font-mono text-left transition-colors flex items-center gap-2 ${
                        mode === 'early sneak peeks'
                          ? 'bg-[#00E599] text-[#060A07] font-bold'
                          : 'bg-[#101C15] text-[#94A3B8] border border-[#193122]'
                      }`}
                    >
                      <span>[•]</span> early sneak peeks
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('launch-day email only')}
                      className={`px-3 py-1.5 rounded text-xs font-mono text-left transition-colors flex items-center gap-2 ${
                        mode === 'launch-day email only'
                          ? 'bg-[#00E599] text-[#060A07] font-bold'
                          : 'bg-[#101C15] text-[#94A3B8] border border-[#193122]'
                      }`}
                    >
                      <span>[ ]</span> launch-day email only
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#00E599] hover:bg-[#22C55E] text-[#060A07] font-bold font-mono text-xs tracking-wider uppercase transition-all shadow-turf-glow hover:scale-[1.02]"
                  >
                    Submit Waitlist
                  </button>
                </div>

              </form>

              {/* Right Column: ASCII Mascot */}
              <div className="md:col-span-5 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#193122] pt-6 md:pt-0 md:pl-6">
                <pre className="font-mono text-[#00E599] text-xs sm:text-sm leading-tight select-none">
                  {asciiCat}
                </pre>
                <div className="text-[11px] font-mono text-[#86EFAC]/70 mt-3 text-center">
                  Turfcode Daemon Listening • 15s Locks
                </div>
              </div>

            </div>
          ) : (
            <div className="py-8 text-center space-y-4 font-mono">
              <div className="w-12 h-12 rounded-full bg-[#00E599]/20 text-[#00E599] mx-auto flex items-center justify-center border border-[#00E599]">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F0FDF4]">
                ACCESS GRANTED — WELCOME TO TURF
              </h3>
              <p className="text-xs text-[#86EFAC] max-w-md mx-auto">
                Your email ({email}) has been assigned an early access VIP token for Craftora Hackathon.
              </p>
              <div className="p-4 rounded-xl bg-[#060A07] border border-[#00E599] max-w-sm mx-auto">
                <div className="text-[10px] uppercase text-[#6B7280]">Your VIP Access Pass</div>
                <div className="text-lg font-bold text-[#00E599] mt-1 select-all">{passToken}</div>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#6B7280] hover:text-[#00E599] underline pt-2"
              >
                Register another teammate
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
