/**
 * Download commands and URLs for all supported platforms.
 * Readable by developers and non-technical stakeholders alike.
 */
export const downloadPlatforms = [
  {
    id: 'mac',
    name: 'macOS',
    subtitle: 'Apple Silicon & Intel',
    badge: 'Universal Binary',
    command: 'curl -fsSL https://turfcode.dev/install.sh | bash',
    shell: 'Terminal / zsh',
    iconName: 'Apple',
  },
  {
    id: 'linux',
    name: 'Linux',
    subtitle: 'Ubuntu, Debian, Fedora, Arch',
    badge: 'x86_64 / arm64',
    command: 'curl -fsSL https://turfcode.dev/install.sh | bash',
    shell: 'Bash / Zsh',
    iconName: 'Terminal',
  },
  {
    id: 'windows-curl',
    name: 'Windows (PowerShell)',
    subtitle: 'Windows 10 / 11 Native',
    badge: 'Instant CLI',
    command: 'iwr -useb https://turfcode.dev/install.ps1 | iex',
    shell: 'PowerShell / Windows Terminal',
    iconName: 'Command',
  },
  {
    id: 'windows-exe',
    name: 'Windows Desktop (.exe)',
    subtitle: 'Standalone Installer Package',
    badge: 'Direct Download',
    downloadUrl: 'https://github.com/YugSrivastav/turfcode-site/releases/latest/download/turfcode-setup.exe',
    fileName: 'turfcode-setup.exe',
    shell: 'Click & Run GUI / CLI',
    iconName: 'Download',
  },
];

export const quickStartCommands = [
  { step: '1', label: 'Create a collaborative room', cmd: 'turf create' },
  { step: '2', label: 'Teammates join via IP / Code', cmd: 'turf join <room-code>' },
  { step: '3', label: 'Launch multi-agent vibe coding', cmd: 'turf start' },
];
