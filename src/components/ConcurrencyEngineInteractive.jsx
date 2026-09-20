import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Check, 
  AlertTriangle, 
  ArrowRight, 
  Terminal, 
  Code2, 
  GitBranch, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function ConcurrencyEngineInteractive() {
  const [activeTab, setActiveTab] = useState('lock'); // 'lock' | 'worktree' | 'peacemaker' | 'tui'
  
  // Tab 1: Micro-Lock Interactive State
  const [lockTime, setLockTime] = useState(14.2);
  const [isLocked, setIsLocked] = useState(true);
  const [currentHolder, setCurrentHolder] = useState('Yug (Claude 3.5 Sonnet)');
  const [queue, setQueue] = useState(['Ayush (Cursor)', 'Krishna (Codex)']);
  const [alertNote, setAlertNote] = useState('');

  // Tab 3: AST Diff Toggle
  const [diffView, setDiffView] = useState('turfcode'); // 'git' | 'turfcode'

  // Tab 4: TUI Sidebar Toggle
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Countdown timer for Lock
  useEffect(() => {
    let timer;
    if (activeTab === 'lock' && isLocked) {
      timer = setInterval(() => {
        setLockTime((prev) => {
          if (prev <= 0.2) {
            if (queue.length > 0) {
              const next = queue[0];
              setQueue((q) => q.slice(1));
              setCurrentHolder(next);
              setAlertNote(`Lock handed off to ${next}! Zero collision.`);
              return 15.0;
            } else {
              setIsLocked(false);
              setCurrentHolder('None (File Idle)');
              setAlertNote('All edits landed cleanly. No locks held.');
              return 0.0;
            }
          }
          return +(prev - 0.2).toFixed(1);
        });
      }, 200);
    }
    return () => clearInterval(timer);
  }, [activeTab, isLocked, queue]);

  const handleSimulateCollision = () => {
    setIsLocked(true);
    setLockTime(15.0);
    const newAgent = `Nakshatra (#${Math.floor(Math.random() * 80 + 10)})`;
    setQueue((prev) => [...prev, newAgent]);
    setAlertNote(`⚡ Collision intercepted! ${newAgent} queued in FIFO. Zero work dropped.`);
  };

  const handleResetLock = () => {
    setIsLocked(true);
    setLockTime(14.8);
    setCurrentHolder('Yug (Claude 3.5 Sonnet)');
    setQueue(['Ayush (Cursor)', 'Krishna (Codex)']);
    setAlertNote('');
  };

  const tabs = [
    { id: 'lock', num: '01', label: '15s Micro-Locks', tag: 'DIBS ENGINE' },
    { id: 'worktree', num: '02', label: 'Worktree Sandboxes', tag: 'ZERO-WAIT FORK' },
    { id: 'peacemaker', num: '03', label: 'AST Peacemaker', tag: 'NO DUMB DIFFS' },
    { id: 'tui', num: '04', label: 'Blessed Cockpit', tag: 'SHELL NATIVE' },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#193122] bg-[#060A07]">
      
      {/* Neoclassical Phosphor Dither Artwork Background - Bold & Visible */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/concurrency-engine-bg.png"
          alt="Neoclassical Cyber Dither Background"
          className="w-full h-full object-cover object-center sm:object-right-top opacity-75 sm:opacity-85 filter contrast-110 brightness-105 mix-blend-screen"
        />
        {/* Subtle Edge Vignettes to Preserve Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A07]/50 via-[#060A07]/20 to-[#060A07]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060A07]/75 via-[#060A07]/15 to-[#060A07]/40"></div>
      </div>

      <div className="relative z-10 p-6 sm:p-10 lg:p-14 space-y-10">

        {/* Section Header: Bold, Informal, No Corporate Fluff */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A2C304]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest font-bold">HOW IT ACTUALLY SAVES YOUR REPO</span>
          </div>

          <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F0FDF4] tracking-tight leading-[1.08]">
            How Turfcode survives 8 AI agents vibe-coding at 3 AM.
          </h3>

          <p className="text-base sm:text-lg text-[#94A3B8] font-body leading-relaxed">
            Standard Git expects humans to think for 20 minutes between commits. AI agents dump 250 tokens per second across four terminals. When everyone hits save at once, chaos is the default. Here is how our four subsystems keep your project from blowing up.
          </p>
        </div>

        {/* Anti-Slop Navigation: Sleek Minimalist Pipeline Tabs (NO Chunky Bento Boxes!) */}
        <div className="border-b border-[#193122]/80 flex flex-wrap items-center gap-1 sm:gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group pb-3 pt-2 px-3 sm:px-4 text-left font-mono transition-all relative flex items-center gap-2 text-xs sm:text-sm ${
                  isActive
                    ? 'text-[#A2C304] font-bold'
                    : 'text-[#94A3B8] hover:text-[#F0FDF4]'
                }`}
              >
                <span className={`text-[10px] px-1.5 py-0.5 rounded border transition-colors ${
                  isActive
                    ? 'bg-[#A2C304]/10 text-[#A2C304] border-[#A2C304]/40'
                    : 'bg-[#101C15] text-[#6B7280] border-[#193122] group-hover:border-[#A2C304]/30'
                }`}>
                  {tab.num}
                </span>
                <span>{tab.label}</span>
                
                {/* Active Underline Pill */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A2C304] shadow-turf-glow"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage (Split View without Card-in-Card Bloat) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: The Real Hackathon Story in GenZ/Hacker Voice */}
          <div className="lg:col-span-6 space-y-6 text-left font-body">
            
            {activeTab === 'lock' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#A2C304] font-bold">
                    SYSTEM 01 // JUST-IN-TIME FILE DIBS
                  </div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#F0FDF4]">
                    15-second micro-locks: call dibs without gatekeeping.
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#D4EC5B]/90 font-mono bg-[#101C15]/60 backdrop-blur-sm border-l-2 border-[#A2C304] p-3 rounded-r-lg leading-relaxed">
                  "Ayush tells Claude to rewrite the database model. 2 seconds later, Krishna tells Cursor to add an auth route using that model. In normal Git, whoever saves second just erased 200 lines of code. It’s over."
                </p>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Turfcode slaps a 15-second lock on the file the millisecond an agent touches it. Changes land, lock releases immediately. And if an agent hangs on a rate limit or crashes, the 15-second watchdog timer automatically frees the file so your team never gets ghosted.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-[#86EFAC]/80">
                  <span>• 15s Watchdog Timeout</span>
                  <span>• Fair FIFO Queue</span>
                  <span>• Local Unix Socket IPC</span>
                </div>
              </div>
            )}

            {activeTab === 'worktree' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#A2C304] font-bold">
                    SYSTEM 02 // ZERO-WAIT SPECULATION
                  </div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#F0FDF4]">
                    Speculative worktrees: your agent never waits in line.
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#D4EC5B]/90 font-mono bg-[#101C15]/60 backdrop-blur-sm border-l-2 border-[#A2C304] p-3 rounded-r-lg leading-relaxed">
                  "If Ayush is editing auth.ts, what does Krishna's agent do? Sit there burning token budgets while staring at a loading spinner? No way."
                </p>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  When a lock is held, Turfcode forks an isolated Git worktree into <code className="text-[#A2C304]">.turf/worktrees/krishna</code> in under 50 milliseconds. The agent writes speculatively without touching the main branch. The second the lock clears, Turfcode auto-rebases and merges the work. Nobody stops coding.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-[#86EFAC]/80">
                  <span>• &lt; 50ms Worktree Fork</span>
                  <span>• Shared .git Storage</span>
                  <span>• Auto-Rebase on Unlock</span>
                </div>
              </div>
            )}

            {activeTab === 'peacemaker' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#A2C304] font-bold">
                    SYSTEM 03 // SEMANTIC AST MERGING
                  </div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#F0FDF4]">
                    Claude AST Peacemaker: no more dumb line-by-line diffs.
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#D4EC5B]/90 font-mono bg-[#101C15]/60 backdrop-blur-sm border-l-2 border-[#A2C304] p-3 rounded-r-lg leading-relaxed">
                  "Git’s diff engine was written 20 years ago. It has zero idea what an import statement is. Two agents add imports to line 4? Git flags a fatal conflict, drops &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD into your code, and breaks your build."
                </p>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Turfcode parses code as an Abstract Syntax Tree (AST), not text lines. Claude 3.5 Sonnet understands developer intent, merges exports intelligently, and runs an automated syntax check before anything touches disk. 100% clean builds.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-[#86EFAC]/80">
                  <span>• &lt; 1.4s Synthesis</span>
                  <span>• 100% Syntax Pre-Check</span>
                  <span>• Zero Destroyed Imports</span>
                </div>
              </div>
            )}

            {activeTab === 'tui' && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-[#A2C304] font-bold">
                    SYSTEM 04 // TERMINAL POWER-USER COCKPIT
                  </div>
                  <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#F0FDF4]">
                    3-pane Blessed TUI: zero web bloat, keyboard first.
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-[#D4EC5B]/90 font-mono bg-[#101C15]/60 backdrop-blur-sm border-l-2 border-[#A2C304] p-3 rounded-r-lg leading-relaxed">
                  "Nobody wants a slow Electron dashboard open when they are deep in the terminal zone. You want raw speed, zero latency, and zero distraction."
                </p>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Turfcode renders inside your shell using Node Blessed. Press <kbd className="px-1.5 py-0.5 rounded bg-[#101C15] border border-[#193122] text-[#A2C304] font-mono text-xs">Ctrl+B</kbd> to collapse telemetry and go full-width. It works with any agent you run: Claude Code, Codex, Agy, Cursor, or raw Neovim.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs text-[#86EFAC]/80">
                  <span>• Ctrl+B Sidebar Toggle</span>
                  <span>• Zero Agent Bias</span>
                  <span>• Instant Shell IPC</span>
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Clean Interactive Console (No Card-in-Card Nesting!) */}
          <div className="lg:col-span-6 bg-[#0B130E]/75 border border-[#193122]/80 rounded-2xl p-6 space-y-5 backdrop-blur-md shadow-2xl">
            
            {/* Interactive Tab 1: Micro-Lock HUD */}
            {activeTab === 'lock' && (
              <div className="space-y-5 font-mono text-xs">
                
                {/* Header row */}
                <div className="flex items-center justify-between border-b border-[#193122] pb-3 text-[#94A3B8]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A2C304] animate-pulse"></span>
                    <span className="text-[#F0FDF4] font-bold">FILE: src/auth/session.ts</span>
                  </span>
                  <span className="text-[#A2C304] font-bold">{lockTime.toFixed(1)}s TTL</span>
                </div>

                {/* Live Lock Status */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[#94A3B8]">
                    <span>Current Lock Holder:</span>
                    <span className="text-[#F0FDF4] font-semibold">{currentHolder}</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-[#16271D] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#A2C304] to-[#B0D504] h-full transition-all duration-200 ease-linear"
                      style={{ width: `${(lockTime / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* FIFO Queue list */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[#6B7280]">
                    <span>FIFO Queue ({queue.length} waiting):</span>
                    <span>Anti-Starvation: ON</span>
                  </div>

                  {queue.length === 0 ? (
                    <div className="p-3 rounded bg-[#060A07] border border-[#193122] text-[#6B7280] text-center">
                      Queue clear. Next claim is instant.
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {queue.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between px-3 py-2 rounded bg-[#060A07] border border-[#193122] text-[#D4EC5B]">
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#101C15] border border-[#193122] text-[#A2C304] text-[10px] flex items-center justify-center font-bold">
                              {idx + 1}
                            </span>
                            <span>{item}</span>
                          </span>
                          <span className="text-[10px] text-[#6B7280]">speculating</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {alertNote && (
                  <div className="p-2.5 rounded bg-[#101C15] border border-[#A2C304]/40 text-[#A2C304] text-[11px]">
                    {alertNote}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#193122]">
                  <button
                    onClick={handleSimulateCollision}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#A2C304] hover:bg-[#B0D504] text-[#060A07] font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Simulate Collision Claim</span>
                  </button>
                  <button
                    onClick={handleResetLock}
                    className="p-2.5 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#94A3B8] border border-[#193122] transition-colors"
                    title="Reset simulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            )}

            {/* Interactive Tab 2: Worktree Topology */}
            {activeTab === 'worktree' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <span className="text-[#F0FDF4] font-bold flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-[#A2C304]" />
                    <span>GIT WORKTREE TOPOLOGY</span>
                  </span>
                  <span className="text-[#A2C304] font-semibold">&lt; 50ms Fork</span>
                </div>

                <div className="space-y-2 text-[#94A3B8]">
                  <div className="p-2.5 rounded bg-[#060A07] border border-[#193122] flex items-center justify-between">
                    <div>
                      <span className="text-[#F0FDF4] font-bold">/main</span>
                      <span className="text-[#6B7280] ml-2">(locked by yug)</span>
                    </div>
                    <span className="text-red-400 text-[10px]">LOCKED</span>
                  </div>

                  <div className="pl-4 border-l border-[#193122] space-y-2">
                    <div className="p-2.5 rounded bg-[#060A07] border border-[#193122] flex items-center justify-between">
                      <div>
                        <div className="text-[#D4EC5B] font-semibold">.turf/worktrees/ayush/</div>
                        <div className="text-[10px] text-[#6B7280]">Writing: webhook payload (+32 lines)</div>
                      </div>
                      <span className="text-[#A2C304] text-[10px] font-bold">COOKING</span>
                    </div>

                    <div className="p-2.5 rounded bg-[#060A07] border border-[#193122] flex items-center justify-between">
                      <div>
                        <div className="text-[#D4EC5B] font-semibold">.turf/worktrees/krishna/</div>
                        <div className="text-[10px] text-[#6B7280]">Writing: stripe formatter (+54 lines)</div>
                      </div>
                      <span className="text-[#A2C304] text-[10px] font-bold">COOKING</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded bg-[#101C15] border border-[#193122] text-[11px] text-[#86EFAC] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#A2C304] shrink-0" />
                  <span>On unlock: both trees auto-rebase into trunk. Zero stalled tokens.</span>
                </div>
              </div>
            )}

            {/* Interactive Tab 3: AST Diff Viewer */}
            {activeTab === 'peacemaker' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <span className="text-[#F0FDF4] font-bold">RESOLVER INSPECTOR</span>
                  <div className="flex rounded bg-[#060A07] border border-[#193122] p-0.5">
                    <button
                      onClick={() => setDiffView('git')}
                      className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                        diffView === 'git'
                          ? 'bg-red-500/20 text-red-400 font-bold'
                          : 'text-[#6B7280] hover:text-[#94A3B8]'
                      }`}
                    >
                      Dumb Git
                    </button>
                    <button
                      onClick={() => setDiffView('turfcode')}
                      className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                        diffView === 'turfcode'
                          ? 'bg-[#A2C304]/20 text-[#A2C304] font-bold'
                          : 'text-[#6B7280] hover:text-[#94A3B8]'
                      }`}
                    >
                      Turfcode AST
                    </button>
                  </div>
                </div>

                {diffView === 'git' ? (
                  <div className="p-3.5 rounded bg-[#060A07] border border-red-500/40 space-y-1 text-[11px] overflow-x-auto text-[#D1D5DB]">
                    <div className="text-red-400 font-bold">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Ayush: Claude)</div>
                    <div>import &#123; createSession, verifyJWT &#125; from './auth';</div>
                    <div className="text-red-400 font-bold">=======</div>
                    <div>import &#123; createSession, refreshToken &#125; from './auth';</div>
                    <div className="text-red-400 font-bold">&gt;&gt;&gt;&gt;&gt;&gt;&gt; krishna-agent (Codex)</div>
                    <div className="text-red-400 text-[10px] pt-2 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Result: SyntaxError: Unexpected token '&lt;' (Build halted)</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded bg-[#060A07] border border-[#A2C304]/50 space-y-1 text-[11px] overflow-x-auto shadow-turf-glow">
                    <div className="text-[#A2C304] font-semibold flex items-center justify-between pb-1 text-[10px]">
                      <span>// ✅ AST Synthesized in 1.4s</span>
                      <span>Syntax Check: 100% PASS</span>
                    </div>
                    <div className="text-[#D4EC5B]">
                      import &#123; createSession, verifyJWT, refreshToken &#125; from './auth';
                    </div>
                    <div className="text-[#F0FDF4] pt-1">
                      export const handler = async (req, res) =&gt; &#123;
                    </div>
                    <div className="text-[#D4EC5B] pl-4">
                      const session = await createSession(req);
                    </div>
                    <div className="text-[#D4EC5B] pl-4">
                      return res.json(&#123; session, token: refreshToken(session) &#125;);
                    </div>
                    <div className="text-[#F0FDF4]">&#125;;</div>
                  </div>
                )}

                <div className="text-[11px] text-[#6B7280]">
                  Click the toggle above to see how normal Git breaks versus Turfcode.
                </div>
              </div>
            )}

            {/* Interactive Tab 4: TUI Preview */}
            {activeTab === 'tui' && (
              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <span className="text-[#F0FDF4] font-bold flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#A2C304]" />
                    <span>TURF TUI [ROOM: #PITCH]</span>
                  </span>
                  <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="px-2.5 py-1 rounded bg-[#101C15] text-[#A2C304] border border-[#193122] text-[10px]"
                  >
                    {sidebarCollapsed ? 'Expand (Ctrl+B)' : 'Collapse (Ctrl+B)'}
                  </button>
                </div>

                <div className="rounded bg-[#060A07] border border-[#193122] p-3 text-[11px] min-h-[160px] space-y-1.5">
                  <div className="text-[#6B7280]"># Turfcode IPC daemon listening on /tmp/turf.sock</div>
                  <div className="text-[#A2C304]">$ turf status --live</div>
                  <div className="text-[#D1D5DB]">
                    [03:14:23] Intercepted fs.writeFile on auth.ts<br />
                    [03:14:24] 15s watchdog lock active (Holder: Yug)<br />
                    [03:14:25] Ayush speculative worktree branched in 38ms
                  </div>
                  <div className="text-[#A2C304] flex items-center gap-1 pt-1">
                    <span>$</span>
                    <span className="w-2 h-3 bg-[#A2C304] animate-pulse"></span>
                  </div>
                </div>

                <div className="text-[11px] text-[#6B7280]">
                  Runs directly in your terminal. Zero Electron memory bloat.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
