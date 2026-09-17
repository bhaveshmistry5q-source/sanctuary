'use client';

import { useState, useEffect } from 'react';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if modal was already seen
    const hasSeen = localStorage.getItem('sanctuary_welcome_seen');
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('sanctuary_welcome_seen', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-[#0e162a] border border-[#d4a34b]/30 p-6 md:p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
        <h3 className="font-serif-vintage text-2xl text-[#f5e4bd] mb-2">
          Hello Vaiduu ✨
        </h3>
        <p className="font-handwriting text-xl text-[#94a3b8] mb-6">
          A piece of forever, carved out of time.
        </p>

        <button
          onClick={handleClose}
          className="w-full py-2.5 bg-[#d4a34b] text-[#060b14] font-mono-retro font-semibold rounded-xl text-xs uppercase tracking-wider hover:brightness-110 transition-all"
        >
          Enter Sanctuary
        </button>
      </div>
    </div>
  );
}