import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  GitBranch, 
  Cpu, 
  Terminal, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Zap,
  Play,
  RotateCcw,
  Maximize2
} from 'lucide-react';

export default function ConcurrencyEngineInteractive() {
  const [activeTab, setActiveTab] = useState('lock');
  
  // Tab 1: Micro-Lock Interactive State
  const [lockTime, setLockTime] = useState(14);
  const [isLocked, setIsLocked] = useState(true);
  const [queue, setQueue] = useState(['Agent-Ayush', 'Agent-Krishna']);
  const [collisionSimulated, setCollisionSimulated] = useState(false);

  // Tab 3: AST Diff Toggle
  const [diffView, setDiffView] = useState('turfcode'); // 'git' | 'turfcode'

  // Tab 4: TUI Sidebar Toggle
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Countdown timer effect for Tab 1
  useEffect(() => {
    let timer;
    if (activeTab === 'lock' && isLocked) {
      timer = setInterval(() => {
        setLockTime((prev) => {
          if (prev <= 1) {
            // Cycle queue
            if (queue.length > 0) {
              const nextAgent = queue[0];
              setQueue((q) => q.slice(1));
              return 15;
            } else {
              setIsLocked(false);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeTab, isLocked, queue]);

  const handleSimulateCollision = () => {
    setCollisionSimulated(true);
    setIsLocked(true);
    setLockTime(15);
    setQueue((prev) => [...prev, `Agent-Nakshatra (#${Math.floor(Math.random() * 800 + 100)})`]);
    setTimeout(() => setCollisionSimulated(false), 3000);
  };

  const handleResetLock = () => {
    setIsLocked(true);
    setLockTime(15);
    setQueue(['Agent-Ayush', 'Agent-Krishna']);
  };

  const systems = [
    {
      id: 'lock',
      icon: Lock,
      number: '01',
      title: '15s JIT Micro-Locks',
      tag: 'Lock Engine',
      metric: '15s TTL',
      oneLiner: 'Microsecond file ownership that expires automatically.',
    },
    {
      id: 'worktree',
      icon: GitBranch,
      number: '02',
      title: 'Speculative Sandboxes',
      tag: 'Git Worktrees',
      metric: '< 50ms Fork',
      oneLiner: 'Never wait for a lock. Fork an isolated tree in 50ms.',
    },
    {
      id: 'peacemaker',
      icon: Cpu,
      number: '03',
      title: 'AI AST Peacemaker',
      tag: 'Syntax Merge',
      metric: '< 4s AST Diff',
      oneLiner: 'Semantic reconciliation instead of broken text markers.',
    },
    {
      id: 'tui',
      icon: Terminal,
      number: '04',
      title: '3-Pane Cockpit TUI',
      tag: 'Blessed Port 7873',
      metric: 'Zero Latency',
      oneLiner: 'Keyboard-driven terminal cockpit with live lock telemetry.',
    },
  ];

  return (
    <div className="space-y-10 relative">
      {/* Neoclassical Dithered Statues & Green Phosphor Background */}
      <div className="absolute -inset-x-4 -inset-y-8 sm:-inset-x-8 sm:-inset-y-12 pointer-events-none select-none z-0 overflow-hidden rounded-3xl">
        <img
          src="/concurrency-engine-bg.png"
          alt="Classical Statues Over Digital Green Concurrency Pantheon"
          className="w-full h-full object-cover object-top opacity-30 filter contrast-125 brightness-95 mix-blend-screen"
        />
        {/* Deep Contrast Vignettes & Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060A07] via-[#060A07]/75 to-[#060A07]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060A07] via-transparent to-[#060A07]"></div>
      </div>

      <div className="relative z-10 space-y-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#193122]">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C15] border border-[#193122] text-xs font-mono text-[#00E599]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW IT ACTUALLY WORKS UNDER THE HOOD</span>
          </div>
          <h3 className="font-display font-bold text-3xl sm:text-5xl text-[#F0FDF4] tracking-tight leading-tight">
            How Turfcode Survives 8 AI Agents at 3 AM
          </h3>
          <p className="text-base text-[#94A3B8] font-body leading-relaxed">
            Standard Git assumes human developers think for 20 minutes between commits. Autonomous agents generate 250 tokens per second across multiple terminals. Here is how our four core subsystems stop repos from turning into smoking craters.
          </p>
        </div>

        {/* Live Status indicator badge */}
        <div className="shrink-0 font-mono text-xs px-4 py-2.5 rounded-xl bg-[#0B130E] border border-[#193122] text-[#86EFAC] flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse"></span>
          <span>Engine Status: Active (Port 7873)</span>
        </div>
      </div>

      {/* Interactive Tabs Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {systems.map((sys) => {
          const Icon = sys.icon;
          const isActive = activeTab === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => setActiveTab(sys.id)}
              className={`p-4 sm:p-5 rounded-xl text-left transition-all border relative flex flex-col justify-between space-y-3 ${
                isActive
                  ? 'bg-[#101C15] border-[#00E599] shadow-turf-glow ring-1 ring-[#00E599]/50'
                  : 'bg-[#0B130E] border-[#193122] hover:border-[#264A34] hover:bg-[#0E1711]'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                  isActive ? 'bg-[#00E599] text-[#060A07]' : 'bg-[#16271D] text-[#86EFAC]'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-[11px] text-[#86EFAC]/70">
                  {sys.number}
                </span>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#00E599]">
                  {sys.tag}
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-[#F0FDF4] mt-0.5">
                  {sys.title}
                </div>
                <div className="font-mono text-xs text-[#86EFAC] mt-1 font-semibold">
                  {sys.metric}
                </div>
              </div>

              {isActive && (
                <div className="absolute -bottom-px left-6 right-6 h-0.5 bg-[#00E599]"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active System Deep-Dive Workbench (Asymmetric 2-Column Inspector) */}
      <div className="rounded-2xl bg-[#0B130E] border border-[#193122] overflow-hidden shadow-turf-card">
        
        {/* Subsystem 1: 15-Second JIT Micro-Locks */}
        {activeTab === 'lock' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#193122]">
            {/* Story & Technical Breakdown */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#00E599] uppercase tracking-wider">
                  Subsystem 01 / Mutual Exclusion
                </span>
                <h4 className="font-display font-bold text-2xl text-[#F0FDF4]">
                  Just-In-Time 15s Micro-Locks
                </h4>
                <p className="text-xs font-mono text-[#86EFAC]">
                  Anti-starvation FIFO queue over local Unix domain socket
                </p>
              </div>

              {/* The Hackathon War Story */}
              <div className="p-4 rounded-xl bg-[#101C15] border-l-4 border-l-[#EF4444] border-y border-r border-[#193122] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F87171]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>The Hackathon Disaster It Prevents:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] font-body leading-relaxed">
                  Ayush tells Claude to refactor the database schema. Three seconds later, Krishna tells Codex to add an endpoint touching the same model. Without Turfcode, whoever saves second silently overwrites the first. Git records a corrupted tree, and the team spends two hours hunting broken imports.
                </p>
              </div>

              {/* Technical Spec */}
              <div className="space-y-3 font-body text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                <p>
                  Turfcode intercepts agent tool execution at the filesystem hook level before write operations sync to disk. It registers a non-blocking 15-second claim.
                </p>
                <p>
                  The moment changes are committed, the lock yields automatically. If an agent crashes or stalls on an LLM rate-limit, the 15-second watchdog expires, ensuring nobody ever blocks a teammate indefinitely.
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">TTL Expiry</div>
                  <div className="font-mono font-bold text-sm text-[#00E599] mt-0.5">15.00s</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Scheduling</div>
                  <div className="font-mono font-bold text-sm text-[#F0FDF4] mt-0.5">FIFO Fair</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Transport</div>
                  <div className="font-mono font-bold text-sm text-[#86EFAC] mt-0.5">Unix IPC</div>
                </div>
              </div>
            </div>

            {/* Interactive Lock Simulator Sandbox */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#060A07] flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00E599]"></span>
                    <span className="font-mono text-xs font-bold text-[#F0FDF4]">
                      LIVE LOCK SIMULATOR
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#6B7280]">
                    target: src/auth/jwt.ts
                  </span>
                </div>

                {/* Main Lock Card */}
                <div className="p-5 rounded-xl bg-[#0B130E] border border-[#193122] space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg border ${
                        isLocked 
                          ? 'bg-[#EF4444]/10 border-[#EF4444]/40 text-[#F87171]' 
                          : 'bg-[#00E599]/10 border-[#00E599]/40 text-[#00E599]'
                      }`}>
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-[#F0FDF4]">
                          {isLocked ? 'ACTIVE LOCK HELD' : 'FILE UNLOCKED (IDLE)'}
                        </div>
                        <div className="text-[11px] font-mono text-[#86EFAC]/70">
                          {isLocked ? 'Owner: Agent-Yug (Claude 3.5 Sonnet)' : 'Available for immediate claims'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-lg text-[#00E599]">
                        {lockTime.toFixed(1)}s
                      </div>
                      <div className="text-[10px] font-mono text-[#6B7280]">Watchdog TTL</div>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full bg-[#16271D] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#00E599] to-[#22C55E] h-full transition-all duration-1000 ease-linear"
                      style={{ width: `${(lockTime / 15) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Fair FIFO Queue Box */}
                <div className="p-4 rounded-xl bg-[#0B130E] border border-[#193122] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#86EFAC] font-semibold">
                      FIFO Queue ({queue.length} agents waiting)
                    </span>
                    <span className="text-[#6B7280]">Anti-Starvation Guard: ON</span>
                  </div>

                  {queue.length === 0 ? (
                    <div className="text-xs font-mono text-[#6B7280] py-2 text-center">
                      Queue empty. Next incoming claim will be granted instantly.
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {queue.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between px-3 py-2 rounded bg-[#101C15] border border-[#193122] text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#193122] text-[#00E599] flex items-center justify-center text-[10px] font-bold">
                              {idx + 1}
                            </span>
                            <span className="text-[#F0FDF4]">{item}</span>
                          </div>
                          <span className="text-[11px] text-[#86EFAC]/60">queued</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Simulation Interactive Controls */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#193122]">
                <button
                  onClick={handleSimulateCollision}
                  className="px-4 py-2 rounded-lg bg-[#00E599] hover:bg-[#22C55E] text-[#060A07] font-mono text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Simulate Concurrent Edit</span>
                </button>
                <button
                  onClick={handleResetLock}
                  className="px-3 py-2 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#86EFAC] font-mono text-xs border border-[#193122] transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset State</span>
                </button>
                {collisionSimulated && (
                  <span className="text-xs font-mono text-[#00E599] animate-pulse">
                    Conflict queued cleanly! Zero developer stall.
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Subsystem 2: Speculative Worktrees */}
        {activeTab === 'worktree' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#193122]">
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#00E599] uppercase tracking-wider">
                  Subsystem 02 / Zero Agent Stall
                </span>
                <h4 className="font-display font-bold text-2xl text-[#F0FDF4]">
                  Speculative Worktree Sandboxes
                </h4>
                <p className="text-xs font-mono text-[#86EFAC]">
                  Ephemeral git worktrees created in less than 50 milliseconds
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101C15] border-l-4 border-l-[#F59E0B] border-y border-r border-[#193122] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FBBF24]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>The Real Developer Problem:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] font-body leading-relaxed">
                  Locking files works, but what happens to the second agent while waiting 15 seconds? In standard setups, the agent freezes, times out, or throws an unhandled filesystem exception, breaking your flow.
                </p>
              </div>

              <div className="space-y-3 font-body text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                <p>
                  Turfcode never lets an AI agent idle. When a file lock is held, Turfcode immediately executes a lightweight Git worktree clone under <code className="text-[#86EFAC] bg-[#101C15] px-1.5 py-0.5 rounded border border-[#193122]">.turf/worktrees/&lt;agent&gt;</code>.
                </p>
                <p>
                  The agent writes speculatively into this isolated sandbox without touching your working directory. The moment the lock clears, Turfcode auto-rebases and merges the speculative changes back into the trunk.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Fork Speed</div>
                  <div className="font-mono font-bold text-sm text-[#00E599] mt-0.5">&lt; 50ms</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Storage Cost</div>
                  <div className="font-mono font-bold text-sm text-[#F0FDF4] mt-0.5">Shared .git</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Rebase Mode</div>
                  <div className="font-mono font-bold text-sm text-[#86EFAC] mt-0.5">Autonomous</div>
                </div>
              </div>
            </div>

            {/* Interactive Worktree Diagram */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#060A07] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-[#00E599]" />
                    <span className="font-mono text-xs font-bold text-[#F0FDF4]">
                      WORKTREE SANDBOX TOPOLOGY
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#86EFAC]">
                    Branch isolation active
                  </span>
                </div>

                {/* Visual File Tree of Git Worktrees */}
                <div className="p-4 rounded-xl bg-[#0B130E] border border-[#193122] font-mono text-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#F0FDF4] font-bold">
                    <span className="text-[#00E599]">●</span>
                    <span>/repo (Main Working Tree - Locked)</span>
                  </div>
                  
                  <div className="pl-6 border-l border-[#193122] space-y-2 text-[#94A3B8]">
                    <div className="flex items-center justify-between py-1 px-2.5 rounded bg-[#101C15] border border-[#193122]">
                      <span className="text-[#F0FDF4]">src/api/payment.ts</span>
                      <span className="text-[#F87171] text-[11px]">locked by Yug</span>
                    </div>

                    <div className="pt-2 text-[11px] uppercase tracking-wider text-[#00E599] font-semibold">
                      └─ .turf/worktrees (Zero-Delay Speculative Sandboxes)
                    </div>

                    <div className="pl-4 space-y-1.5 border-l border-[#193122]">
                      <div className="p-2 rounded bg-[#060A07] border border-[#193122] flex items-center justify-between">
                        <div>
                          <div className="text-[#86EFAC] font-medium">agent-ayush-worktree/</div>
                          <div className="text-[10px] text-[#6B7280]">Writing: webhook verification (+32 lines)</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#00E599]/10 text-[#00E599] text-[10px] border border-[#00E599]/30">
                          speculating
                        </span>
                      </div>

                      <div className="p-2 rounded bg-[#060A07] border border-[#193122] flex items-center justify-between">
                        <div>
                          <div className="text-[#86EFAC] font-medium">agent-krishna-worktree/</div>
                          <div className="text-[10px] text-[#6B7280]">Writing: stripe payload formatter (+54 lines)</div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#00E599]/10 text-[#00E599] text-[10px] border border-[#00E599]/30">
                          speculating
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#101C15] border border-[#193122] text-xs font-mono text-[#86EFAC]/90 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00E599] shrink-0" />
                  <span>When main lock clears: both worktrees rebase cleanly without human Git intervention.</span>
                </div>
              </div>

              <div className="text-xs font-mono text-[#6B7280] pt-4 border-t border-[#193122]">
                Zero disk duplication: Git worktrees link objects to the main repository object store.
              </div>
            </div>
          </div>
        )}

        {/* Subsystem 3: AI AST Peacemaker */}
        {activeTab === 'peacemaker' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#193122]">
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#00E599] uppercase tracking-wider">
                  Subsystem 03 / Semantic Resolution
                </span>
                <h4 className="font-display font-bold text-2xl text-[#F0FDF4]">
                  Claude 3.5 Sonnet AST Peacemaker
                </h4>
                <p className="text-xs font-mono text-[#86EFAC]">
                  Syntax-tree reconciliation instead of destructive line conflicts
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101C15] border-l-4 border-l-[#3B82F6] border-y border-r border-[#193122] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#60A5FA]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Why Standard Git Fails With AI Agents:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] font-body leading-relaxed">
                  Git diff algorithms look at text lines, not programming language semantics. If two agents add imports on lines 1 through 5, Git drops ugly conflict markers and destroys compiler builds.
                </p>
              </div>

              <div className="space-y-3 font-body text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                <p>
                  The Turfcode Peacemaker parses the Abstract Syntax Tree (AST) of the Base, Left, and Right versions. Claude 3.5 Sonnet understands code intent, merges logic without duplicating exports, and preserves both developers' features.
                </p>
                <p>
                  Every synthesized merge is run through an automated syntax linter before hitting disk. If a syntax check ever fails, Turfcode safely isolates the patch for human review instead of corrupting the repository.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Resolution Latency</div>
                  <div className="font-mono font-bold text-sm text-[#00E599] mt-0.5">&lt; 3.2s</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Syntax Guarantee</div>
                  <div className="font-mono font-bold text-sm text-[#F0FDF4] mt-0.5">100% Pre-Check</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Fallback Safety</div>
                  <div className="font-mono font-bold text-sm text-[#86EFAC] mt-0.5">Zero-Loss Patch</div>
                </div>
              </div>
            </div>

            {/* Interactive Code Comparison Viewer */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#060A07] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#F0FDF4]">
                      CODE RESOLUTION INSPECTOR
                    </span>
                  </div>
                  
                  {/* View Mode Toggle */}
                  <div className="flex rounded-lg bg-[#0B130E] border border-[#193122] p-0.5 text-xs font-mono">
                    <button
                      onClick={() => setDiffView('git')}
                      className={`px-3 py-1 rounded transition-colors ${
                        diffView === 'git'
                          ? 'bg-[#EF4444]/20 text-[#F87171] font-bold'
                          : 'text-[#6B7280] hover:text-[#94A3B8]'
                      }`}
                    >
                      Dumb Git Conflict
                    </button>
                    <button
                      onClick={() => setDiffView('turfcode')}
                      className={`px-3 py-1 rounded transition-colors ${
                        diffView === 'turfcode'
                          ? 'bg-[#00E599]/20 text-[#00E599] font-bold'
                          : 'text-[#6B7280] hover:text-[#94A3B8]'
                      }`}
                    >
                      Turfcode AST Merge
                    </button>
                  </div>
                </div>

                {/* Code Diff Display */}
                {diffView === 'git' ? (
                  <div className="p-4 rounded-xl bg-[#0B130E] border border-[#EF4444]/40 font-mono text-xs space-y-1 overflow-x-auto">
                    <div className="text-[#6B7280] pb-2 text-[11px]">
                      // Git text-based collision: Broke build, requires manual triage
                    </div>
                    <div className="text-[#F87171] font-bold">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Ayush: Claude Code)</div>
                    <div className="text-[#D1D5DB]">import &#123; createSession, verifyJWT &#125; from './auth';</div>
                    <div className="text-[#D1D5DB]">export const handler = async (req) =&gt; &#123;</div>
                    <div className="text-[#F87171] font-bold">=======</div>
                    <div className="text-[#D1D5DB]">import &#123; createSession, refreshToken &#125; from './auth';</div>
                    <div className="text-[#D1D5DB]">export const handler = async (req, res) =&gt; &#123;</div>
                    <div className="text-[#F87171] font-bold">&gt;&gt;&gt;&gt;&gt;&gt;&gt; krishna-agent (Codex)</div>
                    <div className="text-[#F87171] text-[11px] pt-2 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Result: SyntaxError: Unexpected token &lt; (Build halted)</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#0B130E] border border-[#00E599]/50 font-mono text-xs space-y-1 overflow-x-auto shadow-turf-glow">
                    <div className="text-[#00E599] pb-2 text-[11px] flex items-center justify-between">
                      <span>// ✅ Semantic AST Synthesis (Validated in 1.4s)</span>
                      <span className="text-[#86EFAC]/70">Syntax Valid: 100%</span>
                    </div>
                    <div className="text-[#86EFAC] font-semibold">
                      import &#123; createSession, verifyJWT, refreshToken &#125; from './auth';
                    </div>
                    <div className="text-[#F0FDF4] pt-1">
                      export const handler = async (req, res) =&gt; &#123;
                    </div>
                    <div className="text-[#86EFAC] pl-4">
                      const session = await createSession(req);
                    </div>
                    <div className="text-[#86EFAC] pl-4">
                      const verified = await verifyJWT(session.token);
                    </div>
                    <div className="text-[#86EFAC] pl-4">
                      return res.json(&#123; session, token: refreshToken(verified) &#125;);
                    </div>
                    <div className="text-[#F0FDF4]">&#125;;</div>
                    <div className="text-[#00E599] text-[11px] pt-3 flex items-center gap-1.5 border-t border-[#193122] mt-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Both features merged cleanly without syntax collisions or lost code.</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] pt-4 border-t border-[#193122]">
                <span>Engine: AST Parser + Claude 3.5 Sonnet API</span>
                <button
                  onClick={() => setDiffView(diffView === 'git' ? 'turfcode' : 'git')}
                  className="text-[#00E599] hover:underline"
                >
                  Click to switch comparison
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Subsystem 4: Persistent 3-Pane Cockpit TUI */}
        {activeTab === 'tui' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#193122]">
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#00E599] uppercase tracking-wider">
                  Subsystem 04 / Developer Experience
                </span>
                <h4 className="font-display font-bold text-2xl text-[#F0FDF4]">
                  Persistent 3-Pane Cockpit TUI
                </h4>
                <p className="text-xs font-mono text-[#86EFAC]">
                  Keyboard-first Blessed terminal running on localhost:7873
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#101C15] border-l-4 border-l-[#10B981] border-y border-r border-[#193122] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#34D399]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Built for Engineers Who Live in Shells:</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D1D5DB] font-body leading-relaxed">
                  Web apps force you to leave your editor and lose context. Turfcode renders directly inside your terminal using Node Blessed. Zero agent bias: it seamlessly supervises Claude Code, Codex, Agy, Cursor, or raw Neovim sessions.
                </p>
              </div>

              <div className="space-y-3 font-body text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                <p>
                  Press <kbd className="px-2 py-0.5 rounded bg-[#16271D] border border-[#193122] font-mono text-[#00E599] text-xs">Ctrl+B</kbd> anytime to collapse the telemetry sidebar and reclaim 100% of your terminal width for pure coding.
                </p>
                <p>
                  Live lock monitors on the left show which files teammates are touching in real time. The center pane gives you an authentic, zero-overhead shell, while the right pane keeps team chat right beside your cursor.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Shortcut</div>
                  <div className="font-mono font-bold text-sm text-[#00E599] mt-0.5">Ctrl+B Toggle</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Renderer</div>
                  <div className="font-mono font-bold text-sm text-[#F0FDF4] mt-0.5">Node Blessed</div>
                </div>
                <div className="p-3 rounded-lg bg-[#060A07] border border-[#193122] text-center">
                  <div className="font-mono text-[10px] text-[#6B7280] uppercase">Telemetry</div>
                  <div className="font-mono font-bold text-sm text-[#86EFAC] mt-0.5">WebSocket IPC</div>
                </div>
              </div>
            </div>

            {/* Interactive TUI Simulator Widget */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-[#060A07] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#193122] pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#00E599]" />
                    <span className="font-mono text-xs font-bold text-[#F0FDF4]">
                      BLESSED TUI COCKPIT PREVIEW
                    </span>
                  </div>
                  <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    className="px-2.5 py-1 rounded bg-[#101C15] hover:bg-[#193122] text-[#00E599] border border-[#193122] font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                  >
                    <span>{sidebarCollapsed ? 'Expand Sidebar (Ctrl+B)' : 'Collapse Sidebar (Ctrl+B)'}</span>
                  </button>
                </div>

                {/* Simulated 3-Pane / Collapsible Box */}
                <div className="rounded-xl border border-[#193122] bg-[#0B130E] overflow-hidden font-mono text-xs">
                  {/* TUI Title Bar */}
                  <div className="bg-[#101C15] px-3 py-1.5 border-b border-[#193122] flex items-center justify-between text-[11px] text-[#86EFAC]">
                    <span>TURFCODE COCKPIT [ROOM: #7873-PITCH]</span>
                    <span className="text-[#00E599]">● DAEMON SYNCED</span>
                  </div>

                  {/* Body Panes */}
                  <div className="grid grid-cols-12 min-h-[190px]">
                    {/* Collapsible Left Pane */}
                    {!sidebarCollapsed && (
                      <div className="col-span-4 border-r border-[#193122] p-3 space-y-2 bg-[#08120B]">
                        <div className="text-[10px] uppercase tracking-wider text-[#00E599] font-bold">
                          ACTIVE LOCKS
                        </div>
                        <div className="space-y-1 text-[11px]">
                          <div className="p-1 rounded bg-[#101C15] border border-[#193122] text-[#86EFAC]">
                            auth.ts (11s)
                          </div>
                          <div className="p-1 rounded bg-[#101C15] border border-[#193122] text-[#6B7280]">
                            routes.ts (idle)
                          </div>
                        </div>
                        <div className="text-[10px] text-[#6B7280] pt-2">
                          4 Agents Connected
                        </div>
                      </div>
                    )}

                    {/* Main Shell Pane */}
                    <div className={`${sidebarCollapsed ? 'col-span-12' : 'col-span-8'} p-3 space-y-2 bg-[#060A07]`}>
                      <div className="text-[10px] text-[#6B7280]">
                        # Native Shell with Zero Agent Bias
                      </div>
                      <div className="text-[#00E599]">
                        $ turf status --live
                      </div>
                      <div className="text-[#D1D5DB] text-[11px] leading-relaxed">
                        [03:14:22] IPC socket ready: /tmp/turf-7873.sock<br />
                        [03:14:23] Claude-3.5 tool call intercepted: fs.writeFile<br />
                        [03:14:24] Lock claimed: auth.ts (15s watchdog)<br />
                        [03:14:25] Rebased speculative worktree in 41ms
                      </div>
                      <div className="flex items-center gap-1 text-[#00E599] pt-2">
                        <span>$</span>
                        <span className="w-2 h-3.5 bg-[#00E599] animate-pulse inline-block"></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#86EFAC]/80">
                  Tip: Use the button above to simulate the <kbd className="text-[#00E599]">Ctrl+B</kbd> sidebar collapse!
                </div>
              </div>

              <div className="text-xs font-mono text-[#6B7280] pt-4 border-t border-[#193122]">
                Port 7873 WebSocket • Standalone Node Blessed executable • Zero browser dependencies
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Field Rules of the Turf: 4 Unbreakable Engineering Truths */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        <div className="p-5 rounded-xl bg-[#0B130E] border border-[#193122] space-y-2">
          <div className="font-mono text-xs font-bold text-[#00E599]">RULE 01</div>
          <div className="font-display font-bold text-base text-[#F0FDF4]">
            Zero Human Blocking
          </div>
          <p className="text-xs text-[#94A3B8] font-body leading-relaxed">
            If a teammate holds a file lock, your agent writes in a sandbox worktree immediately. You never stare at a loading spinner.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#0B130E] border border-[#193122] space-y-2">
          <div className="font-mono text-xs font-bold text-[#00E599]">RULE 02</div>
          <div className="font-display font-bold text-base text-[#F0FDF4]">
            No Blind Force Pushes
          </div>
          <p className="text-xs text-[#94A3B8] font-body leading-relaxed">
            In hackathon war rooms, panicking developers type git push --force. Turfcode rejects remote overrides without peer lock release.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#0B130E] border border-[#193122] space-y-2">
          <div className="font-mono text-xs font-bold text-[#00E599]">RULE 03</div>
          <div className="font-display font-bold text-base text-[#F0FDF4]">
            Syntax First, Merge Second
          </div>
          <p className="text-xs text-[#94A3B8] font-body leading-relaxed">
            Text diffs are blind. Turfcode runs an automated syntax and AST linter on every synthesized merge before touching disk.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[#0B130E] border border-[#193122] space-y-2">
          <div className="font-mono text-xs font-bold text-[#00E599]">RULE 04</div>
          <div className="font-display font-bold text-base text-[#F0FDF4]">
            Zero Agent Bias
          </div>
          <p className="text-xs text-[#94A3B8] font-body leading-relaxed">
            Claude Code, Codex, Agy, Cursor, or raw Neovim. Turfcode coordinates at the operating system and git layer, not inside prompt text.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
