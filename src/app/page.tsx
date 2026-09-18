'use client';

import WelcomeModal from './WelcomeModal';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Image as ImageIcon, Sparkles, Zap, Smile, Heart } from 'lucide-react';

export default function SanctuaryDashboard() {
  const [myMood, setMyMood] = useState('Peaceful ✨');
  const [partnerMood] = useState('Scheming Smiles 😼');

  const portals = [
    {
      title: 'Soul Metro Line',
      tag: 'CHRONICLE',
      desc: 'Aapdi little love story — first smile thi lai ne badhi late-night bakwas sudhi.',
      href: '/timeline',
      icon: Compass,
      num: '01'
    },
    {
      title: 'Memory Vault',
      tag: 'ARCHIVE',
      desc: 'Tari photos, mara favorite moments, ane badhu je hu secretly forever mate sambhalu chu.',
      href: '/vault',
      icon: ImageIcon,
      num: '02'
    },
    {
      title: 'Creative Studio',
      tag: 'CANVAS',
      desc: 'Aapda “ek divas karishu” plans, cute escapes, ane thoda overdramatic dreams.',
      href: '/studio',
      icon: Sparkles,
      num: '03'
    },
    {
      title: 'Apni Jagya',
      tag: 'LOUNGE',
      desc: 'Jya kai prove karvani jarur nathi, bas hovu j kafi che — apna banne nu ek eklu, sukoon-bharyu khunu.',
      href: '/chaos',
      icon: Zap,
      num: '04'
    }
  ];

 
  return (
    <div className="min-h-screen bg-[#060b14] text-[#f8fafc] relative overflow-hidden font-sans pb-24">
      {/* Ambient Lighting */}
      <div className="fixed -top-36 -right-24 w-[550px] h-[550px] bg-[#d4a34b]/12 blur-[150px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 -left-28 w-[600px] h-[600px] bg-[#1e3a6e]/35 blur-[160px] pointer-events-none rounded-full" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#060b14]/80 border-b border-[#d4a34b]/15">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#d4a34b] to-[#f5e4bd] flex items-center justify-center text-[#060b14] font-bold text-xs shadow-[0_0_15px_rgba(212,163,75,0.4)]">
              ✦
            </div>
            <span className="font-serif text-lg tracking-wide font-medium text-white">Sanctuary</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#d4a34b] bg-[#0d172a] px-3.5 py-1.5 rounded-full border border-[#d4a34b]/20 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#d4a34b] animate-pulse" />
              BOND & FUTURE
            </span>
          </div>
        </div>
      </header>

      {/* Main Sanctuary Dashboard */}
      <main className="max-w-6xl mx-auto px-6 pt-12 relative z-10">
        {/* Cover / Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-[11px] font-mono tracking-[3px] text-[#d4a34b] uppercase bg-[#0d172a] px-3.5 py-1 rounded-full border border-[#d4a34b]/20">
            SANCTUARY // FOR VAIDUU
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold tracking-tight mt-5 text-white">
            A piece of forever,<br />
            <em className="text-[#f5e4bd] font-normal italic">carved out of time.</em>
          </h1>
          <p className="text-[#94a3b8] text-sm md:text-base mt-4 leading-relaxed">
            From strangers to inseparable souls — Vaiduu, every whisper, every laugh, and every quiet promise, safely kept right here.
          </p>
        </div>

        {/* Dual Live Mood Module */}
        <div className="mb-14 p-6 rounded-3xl border border-[#d4a34b]/20 bg-[#0d172a]/60 backdrop-blur-2xl grid grid-cols-1 md:grid-cols-2 gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-in fade-in duration-700">
          {/* User Mood Box */}
          <div className="p-4 rounded-2xl bg-[#060b14]/70 border border-[#d4a34b]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a34b]/10 border border-[#d4a34b]/25 flex items-center justify-center text-[#d4a34b]">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-wider text-[#94a3b8]">YOUR VIBE</p>
                <p className="text-sm font-medium text-white">{myMood}</p>
              </div>
            </div>
            <button 
              onClick={() => {
                const moods = ['Peaceful ✨', 'Missing Vaiduu 🤍', 'Caffeine Craving ☕', 'Plotting Adventures 🧭'];
                setMyMood(moods[(moods.indexOf(myMood) + 1) % moods.length]);
              }}
              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-[#d4a34b]/20 hover:bg-[#d4a34b]/10 transition-colors text-[#d4a34b]"
            >
              Switch
            </button>
          </div>

          {/* Partner Status Box */}
          <div className="p-4 rounded-2xl bg-[#060b14]/70 border border-[#d4a34b]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a34b]/10 border border-[#d4a34b]/25 flex items-center justify-center text-[#d4a34b]">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-wider text-[#94a3b8]">VAIDUU'S VIBE</p>
                <p className="text-sm font-medium text-white">{partnerMood}</p>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#d4a34b]/10 text-[#f5e4bd] border border-[#d4a34b]/20">
              In Sync
            </span>
          </div>
        </div>

        {/* 4 Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portals.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="block group focus:outline-none"
              >
                <div className="h-full p-7 rounded-3xl border border-[#d4a34b]/20 bg-[#0d172a]/65 backdrop-blur-2xl hover:border-[#d4a34b]/50 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_45px_rgba(212,163,75,0.12)] flex flex-col justify-between cursor-pointer active:scale-[0.98]">
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[10px] font-mono tracking-[2px] text-[#d4a34b] uppercase border border-[#d4a34b]/20 px-2.5 py-1 rounded-full bg-[#060b14]/60">
                        {card.tag}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#d4a34b]/10 border border-[#d4a34b]/25 flex items-center justify-center text-[#d4a34b] group-hover:bg-[#d4a34b] group-hover:text-[#060b14] transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h2 className="font-serif text-2xl font-medium text-white group-hover:text-[#f5e4bd] transition-colors">
                      {card.title}
                    </h2>
                    <p className="text-[#94a3b8] text-xs md:text-sm mt-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#d4a34b] group-hover:text-[#f5e4bd] flex items-center gap-1.5 transition-colors">
                      OPEN PORTAL →
                    </span>
                    <span className="text-xs font-mono text-[#475569]">{card.num}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="text-center font-handwriting text-2xl text-[#8890a8] mt-14">
          Banavyu, thodi shanti ane ghani mohabbat sathe — Bhavii, for Vaiduu.
        </p>
      </main>

      <WelcomeModal />
    </div>
  );
}