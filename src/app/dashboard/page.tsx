'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  // તારું નામ અને તારી બેસ્ટ ફ્રેન્ડનું નામ અહીં લખી શકો છો
  const user1 = "Bhavii";
  const user2 = "Vaiduu";

  // ડેમો ચેક કરવા માટે: ક્લિક કરવાથી યુઝર બદલાશે
  const [currentUser, setCurrentUser] = useState(user1);

  const toggleUser = () => {
    setCurrentUser(prev => prev === user1 ? user2 : user1);
  };

  return (
    <div className="min-h-screen bg-[#06030b] text-white selection:bg-pink-500 selection:text-white relative overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f133815_1px,transparent_1px),linear-gradient(to_bottom,#1f133815_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-pink-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

      {/* Top Navbar */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>Intent</span>
            <span className="text-pink-500">X</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleUser}
              title="Click to preview switch profile"
              className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 transition-colors"
            >
              Switch: <span className="text-pink-400 font-bold">{currentUser}</span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 border border-white/20 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              {currentUser.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="container mx-auto px-6 py-10 relative z-10 max-w-5xl">
        
        {/* Dynamic Personalized Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-r from-pink-950/40 via-purple-950/30 to-black/60 p-8 backdrop-blur-xl mb-10">
          <div className="relative z-10">
            <span className="text-[11px] font-mono tracking-widest text-pink-400 uppercase">// PRIVATE VAULT ACCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Hey {currentUser}, your universe is synced ✨
            </h2>
            <p className="text-slate-300 mt-2 text-sm md:text-base max-w-xl leading-relaxed">
              Everything we plan, laugh about, and keep safe stays right here.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Primary Action Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Add Memory Card */}
          <Link 
            href="/memories/create"
            className="group p-6 rounded-2xl border border-white/10 bg-[#0d0718]/70 hover:border-pink-500/50 hover:bg-black/90 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-pink-400 transition-colors">UPLOAD →</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Add New Memory</h3>
            <p className="text-slate-400 text-sm mt-1">Upload photos, snapshots, and thoughts to keep forever.</p>
          </Link>

          {/* Surprise Studio Card */}
          <Link 
            href="/celebrate"
            className="group p-6 rounded-2xl border border-white/10 bg-[#0d0718]/70 hover:border-cyan-500/50 hover:bg-black/90 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">GENERATE →</span>
            </div>
            <h3 className="text-lg font-semibold text-white">Create Surprise Site</h3>
            <p className="text-slate-400 text-sm mt-1">Build dedicated customized web surprises for upcoming days.</p>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/memories"
            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all flex items-center justify-between text-slate-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-pink-400 text-lg">◈</span>
              <span className="font-medium text-sm">Open Memory Vault</span>
            </div>
            <span className="text-xs font-mono text-slate-500">VIEW ALL</span>
          </Link>

          <Link 
            href="/timeline"
            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all flex items-center justify-between text-slate-200"
          >
            <div className="flex items-center gap-3">
              <span className="text-purple-400 text-lg">◈</span>
              <span className="font-medium text-sm">Our Timeline & Milestones</span>
            </div>
            <span className="text-xs font-mono text-slate-500">EXPLORE</span>
          </Link>
        </div>

      </main>
    </div>
  );
}