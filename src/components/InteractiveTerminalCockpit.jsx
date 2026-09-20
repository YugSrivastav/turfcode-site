import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Lock, GitMerge, Users, ChevronLeft, ChevronRight, Play, RefreshCw, Send, CheckCircle2 } from 'lucide-react';

export default function InteractiveTerminalCockpit() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('cockpit'); // cockpit | chat
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'TURFCODE v1.0.0 — Concurrency Engine Initialized on port 7873' },
    { type: 'info', text: 'Room #ACE-SPADE paired (Host: Yug, Peers: Ayush, Krishna, Nakshatra)' },
    { type: 'shell', text: '$ turf status' },
    { type: 'output', text: 'Worktrees active: 4 | JIT Locks active: 1 | AST Conflict: 0' },
    { type: 'prompt', text: 'Ready. Type a command or use the quick simulation triggers below.' }
  ]);
  const [commandInput, setCommandInput] = useState('');
  const [activeLocks, setActiveLocks] = useState([
    { file: 'server/auth.js', owner: 'Ayush (agent-sonnet)', ttl: 12 },
    { file: 'client/App.jsx', owner: 'Krishna (agent-agy)', ttl: 8 },
  ]);
  const [teamChat, setTeamChat] = useState([
    { user: 'Yug', text: 'Starting auth & routes refactor.', time: '05:14' },
    { user: 'Ayush', text: 'Locks claimed on server/auth.js.', time: '05:15' },
    { user: 'Krishna', text: 'Updating dashboard colors to Turf pitch chartreuse.', time: '05:16' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const logContainerRef = useRef(null);

  // Auto-scroll terminal log to bottom on new output
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  // Tick lock TTL down
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLocks((prev) =>
        prev
          .map((lock) => ({ ...lock, ttl: Math.max(0, lock.ttl - 1) }))
          .filter((lock) => lock.ttl > 0)
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addLog = (type, text) => {
    setTerminalLogs((prev) => [...prev, { type, text }]);
  };

  const handleRunCommand = (cmd) => {
    const cleanCmd = cmd.trim();
    if (!cleanCmd) return;

    addLog('shell', `$ ${cleanCmd}`);

    if (cleanCmd === 'clear' || cleanCmd === 'cls') {
      setTerminalLogs([{ type: 'system', text: 'Terminal cleared.' }]);
      return;
    }

    if (cleanCmd === 'turf status' || cleanCmd === 'status') {
      addLog('info', '--- TURF CLUSTER STATUS ---');
      addLog('output', 'Connected Peers: 4/4 | JIT Micro-locks Active: ' + activeLocks.length);
      addLog('output', 'Worktrees: .turf/worktrees/{yug,ayush,krishna,nakshatra}');
      return;
    }

    if (cleanCmd.includes('lock')) {
      triggerSimulateLock();
      return;
    }

    if (cleanCmd.includes('peacemaker') || cleanCmd.includes('merge')) {
      triggerSimulateConflict();
      return;
    }

    if (cleanCmd === 'demo' || cleanCmd === 'f5') {
      triggerFullDemo();
      return;
    }

    if (cleanCmd === 'cat' || cleanCmd === 'turf cat' || cleanCmd === 'mascot') {
      triggerCatMascot();
      return;
    }

    // Default response
    addLog('output', `[turf] executed: "${cleanCmd}". Cluster state synchronized.`);
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    handleRunCommand(commandInput);
    setCommandInput('');
  };

  // Quick Action Triggers
  const triggerSimulateLock = () => {
    const newLock = { file: 'server/routes.js', owner: 'You (TurfCLI)', ttl: 15 };
    setActiveLocks((prev) => [newLock, ...prev.slice(0, 2)]);
    addLog('lock', '🔒 [LOCK ACQUIRED] server/routes.js reserved for 15s (Non-blocking)');
    addLog('output', 'Speculative worktree .turf/worktrees/local active.');
  };

  const triggerSimulateConflict = () => {
    addLog('warn', '⚠️ [AST COLLISION DETECTED] Two agents touched server/verify.js simultaneously!');
    addLog('info', 'Invoking Claude 3.5 Sonnet Peacemaker (3-Way Semantic AST Merger)...');
    setTimeout(() => {
      addLog('success', '✓ [PEACEMAKER MERGE SUCCESS] 3-way AST unified in 2.8s. node --check passed.');
      addLog('output', 'Worktree fast-forwarded to main. Zero lines lost.');
    }, 1000);
  };

  const triggerFullDemo = () => {
    addLog('system', '▶ RUNNING AUTOMATED STAGE DEMO (F5 TRIGGER)...');
    triggerSimulateLock();
    setTimeout(() => {
      triggerSimulateConflict();
    }, 1200);
  };

  const triggerCatMascot = () => {
    addLog('system', '   /\\_/\\');
    addLog('system', '  ( o.o )   HELLO /');
    addLog('system', '   > ^ <');
    addLog('system', '  /|   |\\');
    addLog('system', ' (_|   |_)');
    addLog('success', '✓ [TURF COMPANION] Daemon active on port 7873. Zero waitlists, ready to build.');
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setTeamChat((prev) => [
      ...prev,
      { user: 'You', text: chatInput.trim(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ]);
    setChatInput('');
  };

  return (
    <section id="simulator" className="py-20 md:py-28 border-b border-[#193122] bg-[#08100A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & Mode Explanation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101C15] border border-[#193122] text-xs font-mono text-[#A2C304]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Cockpit Simulator</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F0FDF4] mt-2">
              Experience the Terminal Cockpit
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl font-body mt-1">
              Test how Turfcode coordinates 4 simultaneous developers and their AI agents inside a persistent 3-pane Blessed TUI.
            </p>
          </div>

          {/* Quick Trigger Touch Buttons (Ideal for mobile QR viewers) */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <button
              onClick={triggerSimulateLock}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#D4EC5B] border border-[#193122] transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-[#A2C304]" />
              <span>Claim JIT Lock</span>
            </button>
            <button
              onClick={triggerSimulateConflict}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#D4EC5B] border border-[#193122] transition-colors"
            >
              <GitMerge className="w-3.5 h-3.5 text-[#A2C304]" />
              <span>Simulate Conflict</span>
            </button>
            <button
              onClick={triggerCatMascot}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#101C15] hover:bg-[#193122] text-[#D4EC5B] border border-[#193122] transition-colors"
            >
              <span>🐱 Turf Cat</span>
            </button>
            <button
              onClick={triggerFullDemo}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#A2C304] text-[#060A07] font-semibold hover:bg-[#B0D504] transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>F5 Stage Demo</span>
            </button>
          </div>
        </div>

        {/* The 3-Pane Cockpit Container */}
        <div className="rounded-2xl border border-[#193122] bg-[#060A07] shadow-2xl overflow-hidden flex flex-col h-[520px]">
          
          {/* Top Window Bar */}
          <div className="h-10 bg-[#0B130E] border-b border-[#193122] px-4 flex items-center justify-between text-xs font-mono select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-[#A2C304]/80"></span>
              <span className="ml-3 text-[#94A3B8] font-semibold hidden sm:inline">
                turfcode-cockpit — blessed v0.1.81 • room: #7873
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="flex items-center gap-1 text-[#D4EC5B] hover:text-[#A2C304] px-2 py-0.5 rounded border border-[#193122] bg-[#101C15]"
                title="Toggle Sidebar (Ctrl+B)"
              >
                {sidebarCollapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
                <span className="text-[10px]">Ctrl+B</span>
              </button>
              <span className="text-[11px] text-[#A2C304] font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#A2C304] animate-pulse"></span>
                LIVE
              </span>
            </div>
          </div>

          {/* Body: 3-Pane Cockpit */}
          <div className="flex-1 flex overflow-hidden">
            
            {/* PANE 1: Collapsible Sidebar (Herdr-style) */}
            <div
              className={`${
                sidebarCollapsed ? 'w-12' : 'w-56 sm:w-64'
              } bg-[#08100A] border-r border-[#193122] transition-all duration-200 flex flex-col p-3 overflow-y-auto shrink-0 select-none`}
            >
              {!sidebarCollapsed ? (
                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <div className="text-[10px] uppercase text-[#6B7280] font-bold tracking-wider mb-1.5">
                      Worktrees (4 Active)
                    </div>
                    <ul className="space-y-1 text-[#94A3B8]">
                      <li className="flex items-center justify-between text-[#A2C304]">
                        <span>• yug/concurrency</span>
                        <span className="text-[10px] text-[#D4EC5B]">main</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>• ayush/peacemaker</span>
                        <span className="text-[10px] text-[#6B7280]">wt-1</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>• krishna/frontend</span>
                        <span className="text-[10px] text-[#6B7280]">wt-2</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>• nakshatra/hooks</span>
                        <span className="text-[10px] text-[#6B7280]">wt-3</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase text-[#6B7280] font-bold tracking-wider mb-1.5 flex items-center justify-between">
                      <span>JIT Locks (15s)</span>
                      <span className="text-[#A2C304]">{activeLocks.length}</span>
                    </div>
                    {activeLocks.length === 0 ? (
                      <div className="text-[11px] text-[#6B7280] italic">No active locks.</div>
                    ) : (
                      <div className="space-y-1.5">
                        {activeLocks.map((lock, idx) => (
                          <div key={idx} className="p-2 rounded bg-[#101C15] border border-[#193122]">
                            <div className="text-[11px] font-semibold text-[#F0FDF4] truncate">{lock.file}</div>
                            <div className="flex items-center justify-between text-[10px] text-[#D4EC5B] mt-0.5">
                              <span className="truncate">{lock.owner}</span>
                              <span className="text-[#A2C304] font-bold font-mono">{lock.ttl}s</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center py-2 space-y-4 text-[#D4EC5B]">
                  <Lock className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold text-[#A2C304]">{activeLocks.length}</span>
                </div>
              )}
            </div>

            {/* PANE 2: Center Terminal (Shell & Real Logs) */}
            <div className="flex-1 flex flex-col bg-[#060A07] overflow-hidden">
              <div
                ref={logContainerRef}
                className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 crt-scanlines"
              >
                {terminalLogs.map((log, index) => {
                  let color = 'text-[#F0FDF4]';
                  if (log.type === 'system') color = 'text-[#A2C304] font-bold';
                  if (log.type === 'shell') color = 'text-[#D4EC5B] font-semibold';
                  if (log.type === 'lock') color = 'text-yellow-400 font-medium';
                  if (log.type === 'warn') color = 'text-amber-400 font-semibold';
                  if (log.type === 'success') color = 'text-[#A2C304] font-bold';
                  if (log.type === 'info') color = 'text-cyan-400';
                  if (log.type === 'prompt') color = 'text-[#6B7280] italic';

                  return (
                    <div key={index} className={`leading-relaxed ${color} break-all`}>
                      {log.text}
                    </div>
                  );
                })}
              </div>

              {/* Interactive Terminal Input */}
              <form
                onSubmit={handleCommandSubmit}
                className="h-12 bg-[#0B130E] border-t border-[#193122] px-3 flex items-center gap-2 shrink-0"
              >
                <span className="font-mono text-xs text-[#A2C304] font-bold select-none">$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder="type 'status', 'lock', 'peacemaker', or 'demo'..."
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-[#F0FDF4] placeholder-[#6B7280]"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 rounded bg-[#101C15] hover:bg-[#193122] text-[#A2C304] font-mono text-xs border border-[#193122]"
                >
                  Run
                </button>
              </form>
            </div>

            {/* PANE 3: Right Team Chat & Intent (Collapsible on mobile) */}
            <div className="hidden lg:flex w-64 bg-[#08100A] border-l border-[#193122] flex-col overflow-hidden shrink-0">
              <div className="p-2.5 bg-[#0B130E] border-b border-[#193122] font-mono text-xs font-semibold text-[#D4EC5B] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#A2C304]" />
                  Team Chat
                </span>
                <span className="text-[10px] text-[#6B7280]">4 online</span>
              </div>

              <div className="flex-1 p-3 overflow-y-auto space-y-2.5 font-mono text-xs">
                {teamChat.map((msg, idx) => (
                  <div key={idx} className="p-2 rounded bg-[#101C15] border border-[#193122]">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-[#A2C304]">{msg.user}</span>
                      <span className="text-[#6B7280]">{msg.time}</span>
                    </div>
                    <p className="text-[#F0FDF4] text-[11px] mt-1 font-body">{msg.text}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendChat} className="p-2 border-t border-[#193122] bg-[#0B130E] flex gap-1.5">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Chat with team..."
                  className="flex-1 bg-[#101C15] border border-[#193122] rounded px-2 py-1 text-xs text-[#F0FDF4] outline-none font-mono"
                />
                <button type="submit" className="p-1.5 rounded bg-[#A2C304] text-[#060A07]">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
