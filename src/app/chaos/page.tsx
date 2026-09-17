'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Sparkles, Clock } from 'lucide-react';

interface Moment {
  id: number;
  time: string;
  tag: string;
  title: string;
  story: string;
  vibe: 'late-night' | 'spontaneous' | 'caffeine';
}

const initialMoments: Moment[] = [
  {
    id: 1,
    time: 'Late Night • Zero sleep, max chaos',
    tag: 'NO SLEEP CLUB',
    title: 'Aakhri raat ni full drama session',
    story: 'Tari sathe bak-bak karta karta raat pan aagal thi khub j jati rahi. Baddha tension chodine bas hasya, vichar ane ek naki-naki si jojo jeva pal khatam thai gayo.',
    vibe: 'late-night'
  },
  {
    id: 2,
    time: 'Recent Night • 12:00 AM',
    tag: 'MIDNIGHT CALL',
    title: '30 minute ni baad 12 vagadya',
    story: 'Shuru ma bas ek sms hato, pan aje thi j vaat na natak ma 12 bajya ane aapde toh still galiyo ma fasi gayo. Aaj pan yaad che, tare sathe vaato thai to raat pan cute ban jaay.',
    vibe: 'late-night'
  },
  {
    id: 3,
    time: 'Call Recordings • Unfiltered',
    tag: 'NONSENSE TALK',
    title: 'Creepy level ni bakwas, but very cute',
    story: 'Koi topic na hato, koi logic na hato, bas hasya ane thoda awkward moment. Aaje jeva j sukhaad lagta hoy teva j gavan na vicharo hato, ane ma maru dil khush thai gayo.',
    vibe: 'spontaneous'
  },
  {
    id: 4,
    time: 'Random Evening • Self Roast',
    tag: 'HUMBLE BRAG',
    title: 'Mane khabar che, ma khud ni pan chuk chupaun',
    story: 'Apde badha ne ek j vaato keta, ke "aa love ni chiz toh khatarnak che"; pan ane to aaje bhi khud ma j aapi ne aave. Huh, Vaiduu sathe toh sab khatam.',
    vibe: 'spontaneous'
  },
  {
    id: 5,
    time: 'Daily Gossip Session',
    tag: 'DRAMA HQ',
    title: '"Apde chugli nai karvani" — pan repeat kariye',
    story: 'Aapde kevu zaraa-zaraa bolavanu chalu kare je, tyaare baddha no pretense kachhu na lage. Tane sathe je vaato thai, te to apna kunf na gangi ni j report che.',
    vibe: 'caffeine'
  }
];

export default function SukoonCorner() {
  const [moments, setMoments] = useState<Moment[]>(initialMoments);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [tag, setTag] = useState('BRAIN ROT');

  const handleAddMoment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newEntry: Moment = {
      id: Date.now(),
      time: 'Just now • zero plan, maximum vibes',
      tag: tag.toUpperCase() || 'BRAIN ROT',
      title: title.trim(),
      story: story.trim() || 'Bas ek nathi, ek chhota sa jhamela jo Vaiduu sathe bahu cute lagyo.',
      vibe: tag.toLowerCase().includes('call') ? 'late-night' : 'spontaneous'
    };

    setMoments([newEntry, ...moments]);
    setTitle('');
    setStory('');
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-[#f8fafc] relative overflow-x-hidden font-sans pb-32 selection:bg-[#d4a34b]/30">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-serif-title { font-family: 'Newsreader', serif; }
        .font-mono-retro { font-family: 'JetBrains Mono', monospace; }

        /* Ticket Stub Perforated Edges */
        .ticket-stub {
          background: #0d172a;
          background-image: radial-gradient(circle at 50% 0%, rgba(212, 163, 75, 0.05), transparent 70%);
          position: relative;
        }
        .ticket-stub::before, .ticket-stub::after {
          content: '';
          position: absolute;
          width: 22px;
          height: 22px;
          background-color: #060b14;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
        }
        .ticket-stub::before {
          left: -11px;
          box-shadow: inset -2px 0 5px rgba(0,0,0,0.5);
        }
        .ticket-stub::after {
          right: -11px;
          box-shadow: inset 2px 0 5px rgba(0,0,0,0.5);
        }
      `}</style>

      {/* Atmospheric Glows */}
      <div className="fixed -top-32 -right-20 w-[550px] h-[550px] bg-[#d4a34b]/12 blur-[160px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 -left-20 w-[600px] h-[600px] bg-[#1e3a6e]/30 blur-[180px] pointer-events-none rounded-full" />

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#060b14]/80 border-b border-[#d4a34b]/15">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono-retro uppercase tracking-widest text-[#94a3b8] hover:text-[#d4a34b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sanctuary</span>
          </Link>
          <span className="font-handwriting text-2xl text-[#d4a34b]">
            Just us, quietly ~
          </span>
        </div>
      </header>

      {/* Header Section */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d172a] border border-[#d4a34b]/30 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a34b]" />
          <span className="text-[11px] font-mono-retro tracking-[2px] text-[#d4a34b] uppercase">
            {moments.length} QUIET MOMENTS SAVED
          </span>
        </div>
        <h1 className="font-serif-title italic text-4xl md:text-5xl text-white font-normal mt-1">
          Sukoon Corner
        </h1>
        <p className="text-sm text-[#94a3b8] mt-2">
          Vaiduu &amp; Bhavii's little quiet corner — no plans, no pressure, just the small moments worth keeping.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-6 px-5 py-2.5 rounded-full bg-[#d4a34b] text-[#060b14] font-mono-retro font-bold text-xs tracking-wider flex items-center gap-2 mx-auto hover:bg-[#f5e4bd] transition-colors shadow-[0_0_20px_rgba(212,163,75,0.3)]"
        >
          <Plus className="w-4 h-4 stroke-[3]" /> ADD A QUIET MOMENT
        </button>
      </div>

      {/* Ticket Stubs Feed */}
      <main className="max-w-3xl mx-auto px-6 pt-6 relative z-10 space-y-6">
        {moments.map((item, idx) => (
          <div
            key={item.id}
            className="ticket-stub border border-[#d4a34b]/25 rounded-2xl p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#d4a34b]/50 transition-all duration-300"
          >
            {/* Top Row: Meta Info */}
            <div className="flex justify-between items-center border-b border-dashed border-[#d4a34b]/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-retro uppercase px-2.5 py-0.5 rounded bg-[#060b14] border border-[#d4a34b]/20 text-[#d4a34b]">
                  {item.tag}
                </span>
                <span className="text-xs text-[#94a3b8] font-mono-retro flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#d4a34b]" /> {item.time}
                </span>
              </div>
              <span className="text-xs font-mono-retro text-[#475569]">
                #{String(moments.length - idx).padStart(2, '0')}
              </span>
            </div>

            {/* Title & Story */}
            <div className="space-y-2">
              <h2 className="font-serif-title text-2xl text-white font-medium">
                {item.title}
              </h2>
              <p className="font-handwriting text-2xl md:text-[23px] text-[#ebd5b3] leading-relaxed">
                "{item.story}"
              </p>
            </div>

            {/* Bottom Stamp Marking */}
            <div className="mt-4 pt-3 flex justify-between items-center text-[11px] font-mono-retro text-[#64748b]">
              <span>STAMP: SUKOON APPROVED</span>
              <span className="text-[#d4a34b]/70 flex items-center gap-1">
                ✦ VAIDUU & BHAVII
              </span>
            </div>
          </div>
        ))}
      </main>

      {/* Modal: Add Moment */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d172a] border border-[#d4a34b]/40 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative">
            <h2 className="font-serif-title text-2xl text-white mb-1">
              Save this quiet moment
            </h2>
            <p className="text-xs text-[#94a3b8] mb-5">
              Any small thing. Any midnight thought. Any little proof that Vaiduu makes everything softer.
            </p>

            <form onSubmit={handleAddMoment} className="space-y-4">
              <div>
                <label className="text-[11px] font-mono-retro text-[#d4a34b] uppercase block mb-1">
                  Quick title
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 AM call, zero sleep, maximum grin..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#060b14] border border-[#d4a34b]/20 text-sm text-white focus:outline-none focus:border-[#d4a34b]"
                  required
                />
              </div>

              <div>
                <label className="text-[11px] font-mono-retro text-[#d4a34b] uppercase block mb-1">
                  What happened? (Tell it like the world is ending)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me the dumb little detail that made your heart do a tiny cartwheel..."
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#060b14] border border-[#d4a34b]/20 text-sm text-white focus:outline-none focus:border-[#d4a34b] resize-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono-retro text-[#d4a34b] uppercase block mb-1">
                  Mood / chaos level
                </label>
                <div className="flex gap-2 flex-wrap">
                  {['MIDNIGHT CALL', 'BRAIN ROT', 'CUTE KALESH', 'QUIET ROMANCE'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTag(t)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono-retro border transition-colors ${
                        tag === t
                          ? 'bg-[#d4a34b] text-[#060b14] font-bold border-[#d4a34b]'
                          : 'bg-[#060b14] text-[#94a3b8] border-white/10'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-white/10 text-xs font-mono-retro text-[#94a3b8] hover:text-white"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#d4a34b] text-[#060b14] text-xs font-mono-retro font-bold hover:bg-[#f5e4bd]"
                >
                  SAVE THIS MOMENT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}