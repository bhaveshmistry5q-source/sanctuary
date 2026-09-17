'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Heart, MapPin, Plus, Route, Sparkles } from 'lucide-react';

interface BucketItem {
  id: number;
  text: string;
  category: string;
  done: boolean;
}

interface StickyNote {
  id: number;
  rotation: string;
  from: string;
  message: string;
  color: 'amber' | 'gold' | 'rose';
}

interface RoadmapStep {
  id: number;
  label: string;
  title: string;
  detail: string;
  status: 'Next' | 'Dreaming' | 'In motion';
}

const initialBucketList: BucketItem[] = [
  { id: 1, text: 'Watch the sunrise together from a quiet hilltop', category: 'ESCAPE', done: false },
  { id: 2, text: 'Take one unplanned late-night drive with the windows down', category: 'ROADTRIP', done: true },
  { id: 3, text: 'Turn our favorite photos into one tangible memory scrapbook', category: 'KEEPSAKE', done: false },
  { id: 4, text: 'Spend an entire afternoon in a tiny café without rushing', category: 'DATE', done: true },
  { id: 5, text: 'Sit on a cold rooftop and replay the good songs together', category: 'NIGHTS', done: false },
];

const initialNotes: StickyNote[] = [
  {
    id: 1,
    rotation: '-rotate-2',
    from: 'For Vaiduu',
    message: 'Even the boring days feel golden when I am with you. That is my tiny little cheat code for happiness.',
    color: 'gold',
  },
  {
    id: 2,
    rotation: 'rotate-3',
    from: 'Gentle Reminder',
    message: 'Slow plans are still good plans. We are allowed to take our time and still build something beautiful.',
    color: 'amber',
  },
  {
    id: 3,
    rotation: '-rotate-1',
    from: 'Next Stop',
    message: 'One long getaway, one quiet corner, and one beautiful little forever to keep hiding inside my chest.',
    color: 'rose',
  },
];

const roadmapItems: RoadmapStep[] = [
  {
    id: 1,
    label: 'APR',
    title: 'Sunset escape',
    detail: 'Plan the first slow road trip and pin all the places we want to get lost in together.',
    status: 'Next',
  },
  {
    id: 2,
    label: 'MAY',
    title: 'Memory curation',
    detail: 'Collect our favorite little moments, inside jokes, and photo frames into one cozy archive of us.',
    status: 'Dreaming',
  },
  {
    id: 3,
    label: 'JUN',
    title: 'Mini celebration',
    detail: 'Build a soft, unforgettable date night with music, snacks, and a few very dramatic surprises.',
    status: 'In motion',
  },
  {
    id: 4,
    label: 'AUG',
    title: 'Big dream board',
    detail: 'Turn the long-term dreams into one beautiful visual map of all the things I want to do with you.',
    status: 'Dreaming',
  },
];

export default function CreativeStudio() {
  const [bucketList, setBucketList] = useState<BucketItem[]>(initialBucketList);
  const [notes, setNotes] = useState<StickyNote[]>(initialNotes);
  const [newGoal, setNewGoal] = useState('');
  const [newNote, setNewNote] = useState('');

  const toggleBucket = (id: number) => {
    setBucketList((current) =>
      current.map((item) => (item.id === id ? { ...item, done: !item.done } : item)),
    );
  };

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoal.trim()) return;

    setBucketList((current) => [
      ...current,
      { id: Date.now(), text: newGoal.trim(), category: 'FUTURE', done: false },
    ]);
    setNewGoal('');
  };

  const addStickyNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const rotations = ['-rotate-2', 'rotate-2', '-rotate-3', 'rotate-3'];
    const colors: Array<'amber' | 'gold' | 'rose'> = ['amber', 'gold', 'rose'];

    setNotes((current) => [
      {
        id: Date.now(),
        rotation: rotations[Math.floor(Math.random() * rotations.length)],
        from: 'Pinned Note',
        message: newNote.trim(),
        color: colors[Math.floor(Math.random() * colors.length)],
      },
      ...current,
    ]);
    setNewNote('');
  };

  return (
    <div className="min-h-screen bg-[#060b14] text-[#f8fafc] relative overflow-x-hidden font-sans pb-24">
      <div className="fixed -top-32 -right-20 w-[550px] h-[550px] bg-[#d4a34b]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 -left-24 w-[600px] h-[600px] bg-[#1e3a6e]/25 blur-[160px] pointer-events-none rounded-full" />

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#060b14]/80 border-b border-[#d4a34b]/15">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-[11px] font-mono-retro uppercase tracking-[2px] text-[#94a3b8] hover:text-[#d4a34b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sanctuary</span>
          </Link>
          <span className="font-handwriting text-3xl text-[#d4a34b]">Future Canvas &amp; Scribbles</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[11px] font-mono-retro tracking-[3px] text-[#d4a34b] uppercase">Sanctuary // Creative Studio</span>
          <h1 className="font-serif-vintage text-4xl md:text-6xl text-white mt-4 leading-none">Creative Studio</h1>
          <p className="text-sm md:text-base text-[#94a3b8] mt-4 leading-relaxed">
            A place for all the tiny forever plans, the silly little escapes, and the stuff I keep wanting to do with you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <section className="xl:col-span-7 rounded-[28px] border border-[#d4a34b]/20 bg-[#0d172a]/60 backdrop-blur-2xl p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#d4a34b]" />
                <h2 className="font-serif-vintage text-2xl text-white">Our Bucket List</h2>
              </div>
              <span className="text-[10px] font-mono-retro tracking-[2px] text-[#d4a34b] bg-[#060b14] px-3 py-1.5 rounded-full border border-[#d4a34b]/20">
                {bucketList.filter((item) => item.done).length}/{bucketList.length} COMPLETED
              </span>
            </div>

            <form onSubmit={addGoal} className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder='Add your next little "forever" plan...'
                className="flex-1 px-4 py-3 rounded-xl bg-[#060b14]/70 border border-[#d4a34b]/20 text-sm text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#d4a34b]"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-[#d4a34b] text-[#060b14] font-bold text-[11px] font-mono-retro tracking-[2px] flex items-center justify-center gap-2 hover:bg-[#f5e4bd] transition-colors"
              >
                <Plus className="w-4 h-4" />
                ADD
              </button>
            </form>

            <div className="space-y-3">
              {bucketList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleBucket(item.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    item.done
                      ? 'bg-[#060b14]/40 border-white/5 opacity-70'
                      : 'bg-[#060b14]/80 border-[#d4a34b]/20 hover:border-[#d4a34b]/50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        item.done ? 'bg-[#d4a34b] border-[#d4a34b] text-[#060b14]' : 'border-[#d4a34b]/40 bg-transparent'
                      }`}
                    >
                      {item.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={`text-sm md:text-[15px] ${item.done ? 'line-through text-[#64748b]' : 'text-slate-100'}`}>
                      {item.text}
                    </span>
                  </div>

                  <span className="ml-4 shrink-0 text-[10px] font-mono-retro tracking-[2px] text-[#d4a34b] bg-[#0d172a] px-2 py-1 rounded border border-[#d4a34b]/10">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <aside className="xl:col-span-5 space-y-8">
            <div className="rounded-[28px] border border-[#d4a34b]/20 bg-[#0d172a]/60 backdrop-blur-2xl p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4 text-[#d4a34b]" />
                <h2 className="font-serif-vintage text-2xl text-white">Pinned Notes</h2>
              </div>

              <form onSubmit={addStickyNote} className="mb-6">
                <div className="relative">
                  <textarea
                    rows={3}
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Write a little note for Vaiduu..."
                    className="w-full px-4 py-3 rounded-xl bg-[#060b14]/70 border border-[#d4a34b]/20 text-sm text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#d4a34b] resize-none"
                  />
                  <button
                    type="submit"
                    className="absolute bottom-3 right-3 text-[10px] font-mono-retro tracking-[2px] px-3 py-1.5 rounded bg-[#d4a34b] text-[#060b14] font-bold hover:bg-[#f5e4bd]"
                  >
                    PIN
                  </button>
                </div>
              </form>

              <div className="space-y-4">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className={`p-5 rounded-2xl border shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:rotate-0 ${note.rotation} ${
                      note.color === 'gold'
                        ? 'bg-[#1e1912] border-[#d4a34b]/40 text-[#f5e4bd]'
                        : note.color === 'amber'
                          ? 'bg-[#1b1510] border-[#e59842]/40 text-[#fae5cb]'
                          : 'bg-[#1f1317] border-[#e07a9e]/30 text-[#fedee7]'
                    }`}
                  >
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                      <span className="text-[10px] font-mono-retro tracking-[2px] uppercase text-[#d4a34b]">
                        {note.from}
                      </span>
                      <Heart className="w-3 h-3 text-[#d4a34b]" />
                    </div>
                    <p className="font-handwriting text-2xl leading-relaxed text-slate-100">“{note.message}”</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#d4a34b]/20 bg-[#0d172a]/60 backdrop-blur-2xl p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 mb-5">
                <Route className="w-4 h-4 text-[#d4a34b]" />
                <h2 className="font-serif-vintage text-2xl text-white">Roadmap</h2>
              </div>

              <div className="relative pl-7 space-y-5 before:absolute before:left-2 before:top-1 before:bottom-1 before:w-px before:bg-[#d4a34b]/25">
                {roadmapItems.map((step) => (
                  <div key={step.id} className="relative">
                    <span className="absolute -left-[1.85rem] top-1.5 w-3.5 h-3.5 rounded-full border border-[#d4a34b] bg-[#060b14]" />
                    <div className="rounded-2xl border border-[#d4a34b]/15 bg-[#060b14]/60 p-3.5">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-[10px] font-mono-retro tracking-[2px] text-[#d4a34b]">{step.label}</span>
                        <span className="text-[10px] font-mono-retro tracking-[2px] text-[#f5e4bd] uppercase border border-[#d4a34b]/20 rounded-full px-2 py-1">
                          {step.status}
                        </span>
                      </div>
                      <h3 className="font-serif-vintage text-xl text-white">{step.title}</h3>
                      <p className="text-sm text-[#94a3b8] mt-2 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
