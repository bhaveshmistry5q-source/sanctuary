'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface StopItem {
  id: number;
  date: string;
  milestone: string;
  title: string;
  note: string;
  // Desktop Coordinates (Horizontal)
  deskJunction: { left: number; top: number };
  deskCard: { left: number; top: number; rotate: number };
  deskBranch: string;
  // Mobile Coordinates (Vertical)
  mobJunction: { left: number; top: number };
  mobCard: { left: number; top: number; rotate: number };
  mobBranch: string;
}

const stops: StopItem[] = [
  {
    id: 1,
    date: '03 / 11 / 2023',
    milestone: 'MILESTONE #01',
    title: 'The first time I noticed your vibe',
    note: 'Jya thi aa aakhi vaat shuru thai, ane mane lage ke aa to koi naki-naki si feeling chhe.',
    deskJunction: { left: 240, top: 390 },
    deskCard: { left: 110, top: 445, rotate: -2 },
    deskBranch: 'M 240 390 Q 240 420 250 445',
    mobJunction: { left: 190, top: 160 },
    mobCard: { left: 195, top: 80, rotate: 2 },
    mobBranch: 'M 190 160 Q 200 130 210 120'
  },
  {
    id: 2,
    date: '18 / 11 / 2025',
    milestone: 'MILESTONE #02',
    title: 'Coffee, chitchat, and a little soft chaos',
    note: 'Ek quiet coffee ni ghadi, pan dil ma padi gayo. Tare sathe vaato thi khub sukoon malyo.',
    deskJunction: { left: 600, top: 315 },
    deskCard: { left: 465, top: 85, rotate: 2 },
    deskBranch: 'M 600 315 Q 600 235 600 190',
    mobJunction: { left: 130, top: 380 },
    mobCard: { left: 20, top: 330, rotate: -3 },
    mobBranch: 'M 130 380 Q 90 370 70 380'
  },
  {
    id: 3,
    date: '12 AM Chats',
    milestone: 'MILESTONE #03',
    title: 'Peak-level nonsense, maximum comfort',
    note: 'Bina topic na, bina logic na, bas hasya, bakwas ane ek aisi meethi raat jo saddi dil ma basa gayo.',
    deskJunction: { left: 960, top: 365 },
    deskCard: { left: 825, top: 425, rotate: -2 },
    deskBranch: 'M 960 365 Q 960 400 965 425',
    mobJunction: { left: 230, top: 620 },
    mobCard: { left: 210, top: 560, rotate: 2 },
    mobBranch: 'M 230 620 Q 240 600 250 600'
  },
  {
    id: 4,
    date: 'Board Result Days',
    milestone: 'MILESTONE #04',
    title: 'The all-nighter that made us feel safe',
    note: 'Result ni tension ma toh ghabrahat hato, pan tare sathe j aakhi raat pan sukoon bani gayo.',
    deskJunction: { left: 1280, top: 270 },
    deskCard: { left: 1140, top: 65, rotate: 2 },
    deskBranch: 'M 1280 270 Q 1280 190 1280 165',
    mobJunction: { left: 150, top: 860 },
    mobCard: { left: 25, top: 810, rotate: -2 },
    mobBranch: 'M 150 860 Q 110 850 90 860'
  }
];

export default function TimelineResponsive() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e9e5da] relative overflow-x-hidden font-sans pb-32 selection:bg-[#c9a876]/30">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-serif-vintage { font-family: 'Fraunces', serif; }
        .font-mono-retro { font-family: 'IBM Plex Mono', monospace; }
        .timeline-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0e1a]/85 border-b border-[#232b47]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono-retro uppercase tracking-widest text-[#8890a8] hover:text-[#c9a876] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sanctuary</span>
          </Link>
          <span className="font-handwriting text-2xl text-[#c9a876]">
            The path of us ~
          </span>
        </div>
      </header>

      {/* Heading Section */}
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-6 text-center relative z-10">
        <span className="text-[11px] font-mono-retro tracking-[0.2em] text-[#c9a876] uppercase">
          VAIDUU & ME // MEMORY MAP
        </span>
        <h1 className="font-serif-vintage italic text-3xl md:text-5xl text-white font-normal mt-2">
          Ek chhota sa <em className="text-[#c9a876] not-italic">smile</em> thi shuru thayeli vaat
        </h1>
        <p className="text-xs md:text-sm text-[#8890a8] mt-2 max-w-md mx-auto">
          Hasi, chhata, raat ni bakwas, ane aaje sudhi — badha pal ahiya aavya che aa little forever ma.
        </p>
      </div>

      {/* ========================================================
          1. LAPTOP / DESKTOP VIEW: HORIZONTAL SCROLL (Aadu)
      ======================================================== */}
      <div className="timeline-scroll hidden lg:block w-full overflow-x-auto py-10 px-8">
        <div className="relative w-[1560px] h-[640px] mx-auto">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1560 640">
            {/* Horizontal Winding Path */}
            <path
              d="M 50 410
                 C 125 410, 175 420, 240 390
                 C 365 335, 475 285, 600 315
                 C 735 345, 825 405, 960 365
                 C 1085 325, 1170 245, 1280 270
                 C 1350 285, 1395 250, 1440 220"
              stroke="rgba(201, 168, 118, 0.5)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="4 6"
            />
            {/* Branch Lines */}
            {stops.map((st) => (
              <path
                key={`desk-branch-${st.id}`}
                d={st.deskBranch}
                stroke="#232b47"
                strokeWidth="1.8"
                fill="none"
                strokeDasharray="2 4"
              />
            ))}
          </svg>

          {/* Points & Cards */}
          {stops.map((st) => (
            <div key={`desk-${st.id}`}>
              <div
                style={{ left: `${st.deskJunction.left}px`, top: `${st.deskJunction.top}px` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0e1a] border-2 border-[#c9a876] shadow-[0_0_12px_rgba(201,168,118,0.6)] z-20"
              />

              <div
                style={{
                  left: `${st.deskCard.left}px`,
                  top: `${st.deskCard.top}px`,
                  transform: `rotate(${st.deskCard.rotate}deg)`
                }}
                className="absolute w-[280px] bg-[#10152a] border border-[#232b47] hover:border-[#c9a876]/60 rounded-xl p-5 shadow-2xl z-10 transition-transform hover:scale-105"
              >
                <div className="flex justify-between items-center text-[10px] font-mono-retro text-[#8890a8] border-b border-[#232b47] pb-2 mb-2">
                  <span className="text-[#c9a876]">{st.date}</span>
                  <span>{st.milestone}</span>
                </div>
                <h3 className="font-serif-vintage text-lg text-white mb-1">{st.title}</h3>
                <p className="font-handwriting text-xl text-[#cfcabd] leading-snug">"{st.note}"</p>
              </div>
            </div>
          ))}

          {/* End Marker */}
          <div className="absolute top-[30px] left-[1440px] -translate-x-1/2 text-center z-10">
            <div className="w-4 h-4 rounded-full bg-[#0a0e1a] border-2 border-[#c9a876] mx-auto mb-1 animate-pulse" />
            <span className="font-handwriting text-2xl text-[#c9a876] whitespace-nowrap">Us & us ✦</span>
          </div>
        </div>
        <p className="text-center text-xs font-mono-retro text-[#8890a8]/60 mt-4">← Scroll horizontally on desktop →</p>
      </div>

      {/* ========================================================
          2. MOBILE VIEW: VERTICAL SCROLL (Ubhu)
      ======================================================== */}
      <div className="block lg:hidden relative w-full max-w-[390px] h-[1150px] mx-auto mt-4 px-2">
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 390 1150">
          {/* Vertical Winding Path */}
          <path
            d="M 190 30
             C 190 85, 190 125, 190 160
             C 190 255, 150 315, 130 380
             C 105 470, 195 555, 230 620
             C 275 710, 190 790, 150 860
             C 125 945, 165 1015, 190 1080"
            stroke="rgba(201, 168, 118, 0.45)"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="4 6"
          />
          {/* Mobile Branches */}
          {stops.map((st) => (
            <path
              key={`mob-branch-${st.id}`}
              d={st.mobBranch}
              stroke="#232b47"
              strokeWidth="1.8"
              fill="none"
              strokeDasharray="2 4"
            />
          ))}
        </svg>

        {/* Mobile Points & Cards */}
        {stops.map((st) => (
          <div key={`mob-${st.id}`}>
            <div
              style={{ left: `${st.mobJunction.left}px`, top: `${st.mobJunction.top}px` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#0a0e1a] border-2 border-[#c9a876] shadow-[0_0_10px_rgba(201,168,118,0.5)] z-20"
            />

            <div
              style={{
                left: `${st.mobCard.left}px`,
                top: `${st.mobCard.top}px`,
                transform: `rotate(${st.mobCard.rotate}deg)`
              }}
              className="absolute w-[165px] bg-[#10152a] border border-[#232b47] rounded-xl p-3 shadow-xl z-10"
            >
              <div className="flex justify-between items-center text-[8px] font-mono-retro text-[#8890a8] border-b border-[#232b47] pb-1 mb-1.5">
                <span className="text-[#c9a876]">{st.date}</span>
                <span>{st.milestone}</span>
              </div>
              <h3 className="font-serif-vintage text-sm text-white font-medium mb-0.5">{st.title}</h3>
              <p className="font-handwriting text-sm text-[#cfcabd] leading-tight">"{st.note}"</p>
            </div>
          </div>
        ))}

        {/* Mobile End Marker */}
        <div className="absolute top-[1090px] left-[190px] -translate-x-1/2 text-center z-10">
          <div className="w-3.5 h-3.5 rounded-full bg-[#0a0e1a] border-2 border-[#c9a876] mx-auto mb-1 animate-pulse" />
          <span className="font-handwriting text-lg text-[#c9a876] whitespace-nowrap">Us & us ✦</span>
        </div>
      </div>

    </div>
  );
}