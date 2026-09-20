# Turfcode — Official Website & Interactive Cockpit Simulator

> **Multi-Agent Concurrency Engine on the Pitch**  
> Built by **Team Ace of Spade** (Yug Srivastav, Ayush Singh, Krishna Tyagi, Nakshatra) for the Craftora Hackathon.

---

## 🌟 What is Turfcode?

Turfcode is a real-time multiplayer coordination engine designed for modern software teams vibe-coding with autonomous AI coding agents (Anthropic Claude Code, Google Antigravity/AGY, OpenAI Codex, Cursor).

When four developers prompt high-speed LLMs simultaneously, blind concurrency causes dozens of Git merge conflicts every hour. Turfcode solves this through:
1. **15-Second JIT Micro-Locks**: Non-blocking, anti-starvation file reservations.
2. **Speculative Worktree Sandboxes**: Instant `< 50ms` Git worktree forks (`.turf/worktrees/<agent>`).
3. **Claude 3.5 Sonnet AI Peacemaker**: Semantic 3-way AST conflict resolution with syntax verification.
4. **Persistent 3-Pane Cockpit TUI**: Authentic terminal interface inspired by Herdr, running on port `7873`.

---

## 🚀 Website Structure & Modules

Every file in this project is explicitly named so anyone (developers, designers, judges) can navigate with zero guesswork:

| File / Directory | Plain English Purpose |
| :--- | :--- |
| **`public/turfcode-logo.png`** | Official emerald green origami "T" with code brackets logo. |
| **`public/pitch-zidane-halftone.png`** | Sports editorial halftone graphic reflecting the "on the pitch" philosophy. |
| **`public/retro-crt-terminal-waitlist.png`** | Reference retro phosphor terminal waitlist graphic. |
| **`public/statue-cyberpunk-halftone.png`** | Cyberpunk dithered statue & code overlay visual. |
| **`src/components/NavigationHeader.jsx`** | Sticky top bar with pitch indicator and mobile drawer navigation. |
| **`src/components/HeroSection.jsx`** | Section 1: Hero thesis, 1-click install command bar, and mobile pitch button. |
| **`src/components/ProductDetailsSection.jsx`** | Section 2: Concurrency problem explanation, 4 architectural pillars, and team roster. |
| **`src/components/InteractiveTerminalCockpit.jsx`** | Section 3: Interactive 3-pane Blessed TUI simulator with touch triggers for mobile phones. |
| **`src/components/DownloadAndInstallSection.jsx`** | Section 4: Multi-platform matrix (`curl`, `iwr`, and standalone `.exe` download). |
| **`src/components/RetroWaitlistTerminal.jsx`** | Early access VIP pass generator styled as a retro CRT phosphor terminal. |
| **`src/components/FooterSection.jsx`** | Clean footer with GitHub repo links and hackathon sprint credits. |
| **`src/data/downloadCommands.js`** | Configuration data for Mac, Linux, and Windows download scripts. |
| **`src/data/productFeatures.js`** | Plain English copy detailing the problem, metrics, and team roles. |
| **`src/styles/design-tokens.css`** | CSS custom properties, halftone textures, and scanline effects. |

---

## 💻 Local Development & Build

### Prerequisites
- Node.js v18+ (tested on v20 and v22)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production (Edge Deployment)
```bash
npm run build
```
The output will be in `dist/`, ready to deploy to Cloudflare Pages, Vercel, or GitHub Pages.

---

## 🏆 Hackathon Credits

* **Yug Srivastav** — Team Lead / Concurrency & Systems
* **Ayush Singh** — AI Peacemaker & Verification Lead
* **Krishna Tyagi** — Frontend & UI Systems Lead
* **Nakshatra** — Agent Hooks & Worktree Lead
