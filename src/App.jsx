import React from 'react';
import NavigationHeader from './components/NavigationHeader';
import HeroSection from './components/HeroSection';
import ProductDetailsSection from './components/ProductDetailsSection';
import InteractiveTerminalCockpit from './components/InteractiveTerminalCockpit';
import DownloadAndInstallSection from './components/DownloadAndInstallSection';
import RetroWaitlistTerminal from './components/RetroWaitlistTerminal';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#060A07] text-[#F0FDF4] selection:bg-[#00E599]/30 selection:text-[#00E599]">
      {/* 1. Fixed Navigation Bar */}
      <NavigationHeader />

      <main className="flex-1">
        {/* 2. Section 1: Hero Landing Page */}
        <HeroSection />

        {/* 3. Section 2: Product Details & Concurrency Architecture */}
        <ProductDetailsSection />

        {/* 4. Section 3: Interactive TUI Cockpit & Mobile Touch Simulator */}
        <InteractiveTerminalCockpit />

        {/* 5. Section 4: Multi-Platform Download Matrix (.exe, curl, iwr) */}
        <DownloadAndInstallSection />

        {/* 6. Section 5: Early Access CRT Phosphor Waitlist Terminal */}
        <RetroWaitlistTerminal />
      </main>

      {/* 7. Footer */}
      <FooterSection />
    </div>
  );
}
