import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2 } from 'lucide-react';

export default function LandingVideoShowcase() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (desktopVideoRef.current) desktopVideoRef.current.muted = nextMuted;
    if (mobileVideoRef.current) mobileVideoRef.current.muted = nextMuted;
  };

  const togglePlay = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);
    if (desktopVideoRef.current) {
      nextPlaying ? desktopVideoRef.current.play() : desktopVideoRef.current.pause();
    }
    if (mobileVideoRef.current) {
      nextPlaying ? mobileVideoRef.current.play() : mobileVideoRef.current.pause();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-6 pb-2">
      <div className="relative rounded-2xl bg-[#0B130E] border border-[#193122] shadow-turf-card overflow-hidden group">
        
        {/* Window Top Bar */}
        <div className="h-9 bg-[#060A07] border-b border-[#193122] px-4 flex items-center justify-between text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E599]/80"></span>
            <span className="ml-2 text-[#86EFAC]/70 text-[11px] hidden sm:inline">
              turfcode-live-experience.mp4
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="p-1 rounded text-[#86EFAC] hover:text-[#00E599] hover:bg-[#101C15] transition-colors"
              title={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1 rounded text-[#86EFAC] hover:text-[#00E599] hover:bg-[#101C15] transition-colors"
              title={isMuted ? 'Unmute audio' : 'Mute audio'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <span className="text-[10px] text-[#00E599] font-semibold px-2 py-0.5 rounded bg-[#101C15] border border-[#193122]">
              HD
            </span>
          </div>
        </div>

        {/* Video Player Display */}
        <div className="relative bg-[#060A07] flex items-center justify-center overflow-hidden">
          
          {/* LAPTOP / DESKTOP VIEW ONLY (Horizontal / 16:9 Landscape) */}
          <div className="hidden md:block w-full">
            <video
              ref={desktopVideoRef}
              src="/landing-video-desktop.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-auto max-h-[480px] object-cover mx-auto"
            />
          </div>

          {/* MOBILE VIEW ONLY (Vertical / 9:16 Portrait) */}
          <div className="block md:hidden w-full py-4 px-2">
            <div className="w-full max-w-[280px] mx-auto rounded-xl overflow-hidden border border-[#193122] shadow-2xl bg-black">
              <video
                ref={mobileVideoRef}
                src="/landing-video-mobile.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
            <div className="text-center font-mono text-[10px] text-[#86EFAC]/70 mt-2">
              Mobile Experience Preview
            </div>
          </div>

          {/* Subtle Ambient Turf Green Glow at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#060A07] to-transparent pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
}
