'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function SurpriseViewer({ params }: { params: { code: string } }) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-[#06030b] text-white selection:bg-pink-500 selection:text-white relative overflow-hidden font-sans flex flex-col justify-between">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1338_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Top Header */}
      <header className="p-6 flex justify-between items-center z-20">
        <Link href="/" className="text-xs font-mono text-slate-500 hover:text-white transition-colors">
          INTENTX // DEDICATED TRANSMISSION
        </Link>
        <span className="text-[10px] font-mono border border-white/10 px-2.5 py-1 rounded-full bg-white/5 text-slate-400">
          ID: {params.code}
        </span>
      </header>

      {/* Main Experience */}
      <main className="container mx-auto px-6 py-8 flex-1 flex flex-col items-center justify-center relative z-10 max-w-2xl text-center">
        <AnimatePresence mode="wait">
          {!unlocked ? (
            /* Locked State */
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-8 md:p-12 rounded-3xl border border-white/10 bg-[#0d0718]/80 backdrop-blur-2xl shadow-2xl flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-cyan-400 flex items-center justify-center text-2xl mb-6 shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                ✨
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                Someone Made This Just For You
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-md font-light leading-relaxed">
                A private celebration crafted with shared memories, unfiltered words, and zero distance.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setUnlocked(true)}
                className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_25px_rgba(236,72,153,0.35)] transition-all"
              >
                Tap To Open Surprise
              </motion.button>
            </motion.div>
          ) : (
            /* Unlocked Reveal State */
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full space-y-8"
            >
              {/* Note Card */}
              <div className="p-8 md:p-10 rounded-3xl border border-pink-500/20 bg-[#0d0718]/90 backdrop-blur-2xl shadow-2xl text-left">
                <span className="text-[10px] font-mono tracking-widest text-pink-400 uppercase">// DEDICATED NOTE</span>
                <h1 className="text-2xl md:text-4xl font-bold mt-2 text-white leading-tight">
                  Happy Milestone, Bestie! 🎉
                </h1>
                
                <p className="text-slate-300 mt-5 leading-relaxed text-sm md:text-base font-light">
                  Even when miles keep us in different cities, nothing changes how much our bond matters. 
                  Thank you for always being one call away, for the late-night laughter, and for being the truest friend.
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Forever grateful for us</span>
                  <span className="font-mono text-pink-400">Always Connected ∞</span>
                </div>
              </div>

              {/* Photo Showcase Card */}
              <div className="p-6 rounded-3xl border border-white/10 bg-[#0d0718]/70 backdrop-blur-xl">
                <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-slate-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-pink-400 mb-2 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-xs font-mono">Shared Photo Deck Stream</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="p-6 text-center text-xs text-slate-600 z-10 font-mono">
        INTENTX SECURE TRANSMISSION
      </footer>
    </div>
  );
}