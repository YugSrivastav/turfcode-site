/**
 * Plain English product details and technical specifications for Turfcode.
 * Structured so non-developers, judges, and engineers understand immediately.
 */

export const productSummary = {
  name: 'Turfcode',
  tagline: 'Real-Time Concurrency for Multi-Agent Software Teams',
  shortDescription:
    'Autonomous AI coding agents generate thousands of lines of code in seconds. Turfcode coordinates multiple developers and their agents in real time, preventing Git merge collisions before they happen.',
  hackathonEvent: 'Craftora Hackathon — Team Ace of Spade',
};

export const theProblemCrisis = {
  title: 'The Multi-Agent Collision Crisis',
  badge: 'The Real Problem',
  explanation:
    'Git was invented in 2005 for humans who commit twice a day. When four developers vibe-code together using Claude Code, AGY, Codex, or Cursor, agents write code at 250 tokens per second. Blind concurrency causes catastrophic merge conflicts, broken AST imports, and hours of wasted debugging.',
  stats: [
    { label: 'Token Velocity', value: '250 tok/s', detail: 'Per active agent' },
    { label: 'Git Collisions', value: '20 / hr', detail: 'Without coordination' },
    { label: 'Turfcode Lock TTL', value: '15 sec', detail: 'Zero developer stall' },
    { label: 'Peacemaker Latency', value: '< 4 sec', detail: 'Semantic 3-way merge' },
  ],
};

export const corePillars = [
  {
    number: '01',
    title: '15-Second JIT Micro-Locks',
    subtitle: 'Zero-blocking file protection',
    description:
      'Instead of locking files for hours, Turfcode claims lightweight 15-second Just-In-Time locks right when an agent starts editing, releasing automatically the moment changes land. Anti-starvation queueing ensures all teammates get fair turns.',
    metric: '15s TTL',
    tag: 'Concurrency Engine',
  },
  {
    number: '02',
    title: 'Speculative Worktree Sandboxes',
    subtitle: 'Agents keep moving without waiting',
    description:
      'If another teammate is currently modifying a file, your agent is never blocked. Turfcode automatically spins up an isolated Git worktree (.turf/worktrees/<agent>), allowing speculative coding that merges back cleanly when ready.',
    metric: '< 50ms Fork',
    tag: 'Git Worktrees',
  },
  {
    number: '03',
    title: 'Claude 3.5 Sonnet AI Peacemaker',
    subtitle: 'Semantic 3-way AST conflict resolution',
    description:
      'When two agents modify intersecting logic, the AI Peacemaker analyzes AST syntax trees and intent, producing a clean semantic merge in under 4 seconds. Guarded by an automated syntax checker and structural fallback.',
    metric: '100% Syntax Checked',
    tag: 'AI Peacemaker',
  },
  {
    number: '04',
    title: 'Persistent 3-Pane Cockpit TUI',
    subtitle: 'Built for terminal power-users',
    description:
      'Developers live in terminal windows. Turfcode features a native Blessed TUI inspired by Herdr, featuring a collapsible sidebar (Ctrl+B), authentic native shell with zero agent bias, live file lock monitors, and team chat.',
    metric: 'Blessed TUI + Port 7873',
    tag: 'Terminal Native',
  },
];

export const teamRoster = [
  { name: 'Yug Srivastav', role: 'Team Lead / Concurrency & Systems', focus: 'Daemon, JIT Locks, FIFO Queue' },
  { name: 'Ayush Singh', role: 'AI Peacemaker & Verification Lead', focus: '3-Way Semantic Merging & Fallback' },
  { name: 'Krishna Tyagi', role: 'Frontend & UI Systems Lead', focus: 'Vite Client, TUI Simulator, Design Tokens' },
  { name: 'Nakshatra', role: 'Agent Hooks & Worktree Lead', focus: 'PreToolUse Hooks, Worktree Sandboxes' },
];
