'use client';

import { useEffect, useState, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Image as ImageIcon, Music, Video as VideoIcon, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Category = 'photo' | 'audio' | 'video';

type Memory = {
  id: string;
  created_at: string;
  title: string;
  caption: string;
  media_url: string;
  category: Category;
};

const BUCKET = 'memories';
const TABLE = 'memories';

function getCardTilt(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) hash = (hash * 33 + id.charCodeAt(i)) % 1000;
  const tilts = [-2.2, 1.8, -1.2, 2.5, -2.8, 1.4];
  return tilts[Math.abs(hash) % tilts.length];
}

export default function VaultPage() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState<Category>('photo');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchMemories();
  }, []);

  async function fetchMemories() {
    setIsLoading(true);
    setLoadError(null);
    try {
      const { data, error } = await supabase
        .from(TABLE)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMemories((data as Memory[]) ?? []);
    } catch (err: any) {
      console.error('Fetch error:', err);
      setLoadError(err.message || 'Could not load vault memories.');
    } finally {
      setIsLoading(false);
    }
  }

  function resetForm() {
    setTitle('');
    setCaption('');
    setCategory('photo');
    setFile(null);
    setUploadError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function closeModal() {
    if (isUploading) return;
    setIsModalOpen(false);
    resetForm();
  }

  async function handleUpload(e: FormEvent) {
    e.preventDefault();
    setUploadError(null);

    if (!title.trim()) {
      setUploadError('Give this memory a title.');
      return;
    }
    if (!file) {
      setUploadError('Please select a file.');
      return;
    }

    setIsUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const safeName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `${category}/${safeName}`;

      const { error: uploadErr } = await supabase.storage
        .from(BUCKET)
        .upload(filePath, file);

      if (uploadErr) throw uploadErr;

      const { data: publicUrlData } = supabase.storage
        .from(BUCKET)
        .getPublicUrl(filePath);

      const media_url = publicUrlData.publicUrl;

      const { data: inserted, error: insertErr } = await supabase
        .from(TABLE)
        .insert([{ title: title.trim(), caption: caption.trim(), media_url, category }])
        .select()
        .single();

      if (insertErr) throw insertErr;

      setMemories((prev) => [inserted as Memory, ...prev]);
      closeModal();
    } catch (err: any) {
      console.error('Upload error:', err);
      setUploadError(err.message || 'Upload failed.');
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#070a13] text-[#e8e4d9] pb-32 selection:bg-[#c9a876]/30">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-serif-vintage { font-family: 'Fraunces', serif; }
        .font-mono-retro { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Retro Grain Texture */}
      <div 
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #c9a876 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#070a13]/70 border-b border-[#1c2438]/70">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <Link
            href="/"
            aria-label="Back to Sanctuary"
            className="group flex items-center gap-2 text-[#8890a8] hover:text-[#c9a876] transition-colors"
          >
            <span className="w-8 h-8 rounded-full border border-[#1c2438] group-hover:border-[#c9a876]/40 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] font-mono-retro uppercase tracking-widest hidden sm:inline">
              Sanctuary
            </span>
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 pl-3 pr-4 py-2 rounded-full border border-[#c9a876]/30 text-[#c9a876] hover:bg-[#c9a876]/10 hover:border-[#c9a876]/60 transition-all text-[11px] font-mono-retro uppercase tracking-wider"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Save a memory</span>
          </button>
        </div>
      </header>

      {/* Title */}
      <div className="max-w-4xl mx-auto px-6 pt-12 pb-10 text-center">
        <p className="text-xs font-mono-retro tracking-[0.3em] text-[#c9a876] uppercase">
          OUR LITTLE ARCHIVE
        </p>
        <h1 className="font-handwriting text-6xl md:text-8xl text-[#f3ede2] mt-1 drop-shadow-sm">
          The Memory Vault
        </h1>
        <p className="text-sm font-serif-vintage italic text-[#8e97af] mt-2 max-w-md mx-auto">
          Polaroids, tiny voice notes, and all the moments that made my heart quietly fall for you.
        </p>
      </div>

      {/* Scrapbook Board */}
      <main className="max-w-6xl mx-auto px-6">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-24 text-[#8890a8]">
            <div className="w-9 h-9 border-2 border-[#1c2438] border-t-[#c9a876] rounded-full animate-spin mb-4" />
            <p className="font-mono-retro text-xs tracking-widest uppercase">Opening the chest…</p>
          </div>
        )}

        {!isLoading && loadError && (
          <div className="max-w-md mx-auto p-6 bg-[#0e1322] border border-red-900/40 rounded-lg text-center">
            <p className="text-red-400 font-mono-retro text-xs">{loadError}</p>
            <button
              onClick={fetchMemories}
              className="mt-4 px-4 py-2 bg-[#1c2438] hover:bg-[#25304a] text-xs font-mono-retro rounded text-[#e8e4d9]"
            >
              Try Again
            </button>
          </div>
        )}

        {!isLoading && !loadError && memories.length === 0 && (
          <div className="max-w-md mx-auto p-16 border-2 border-dashed border-[#1c2438] rounded-xl text-center bg-[#0c101d]/60">
            <p className="font-handwriting text-4xl text-[#c9a876]">No tiny forever saved yet.</p>
            <p className="text-xs font-mono-retro text-[#8890a8] mt-2">
              Tap &apos;Save a tiny forever&apos; above and pin your first little memory, photo, video, or voice note.
            </p>
          </div>
        )}

        {/* Polaroid Scrapbook Grid with Translucent Dark Tint */}
        {!isLoading && !loadError && memories.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 pt-4">
            {memories.map((memory) => {
              const tilt = getCardTilt(memory.id);
              const dateStr = new Date(memory.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <div
                  key={memory.id}
                  className="group relative transition-all duration-300 hover:z-20 hover:scale-[1.03]"
                  style={{ transform: `rotate(${tilt}deg)` }}
                >
                  {/* Washi Tape Accent with Dark Gold Glass effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#c9a876]/20 backdrop-blur-md border-l border-r border-[#c9a876]/40 shadow-sm z-10 rotate-[-1deg]" />

                  {/* Dark Translucent Polaroid Frame (No white paper color!) */}
                  <div className="backdrop-blur-xl bg-[#10172a]/75 text-[#e8e4d9] p-4 pb-6 rounded-[3px] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.8)] border border-[#253354]/80 hover:border-[#c9a876]/50 transition-colors">
                    
                    {/* Media Window */}
                    <div className="relative aspect-square w-full bg-[#070a13] shadow-inner overflow-hidden border border-[#253354]/60 flex items-center justify-center">
                      {memory.category === 'photo' && (
                        <img
                          src={memory.media_url}
                          alt={memory.title}
                          className="w-full h-full object-cover filter contrast-[1.03]"
                        />
                      )}

                      {memory.category === 'video' && (
                        <video
                          controls
                          playsInline
                          src={memory.media_url}
                          className="w-full h-full object-cover"
                        />
                      )}

                      {memory.category === 'audio' && (
                        <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-[#0a0f1d] text-[#e8e4d9]">
                          <div className="w-full max-w-[210px] aspect-[16/10] bg-[#111827] rounded-md border border-[#2e3e66] p-2.5 flex flex-col justify-between shadow-lg mb-3">
                            <div className="flex justify-between items-center text-[9px] font-mono-retro text-[#c9a876] border-b border-[#1f2a44] pb-1">
                              <span>SIDE A</span>
                              <span>SANCTUARY REC</span>
                            </div>
                            <div className="flex justify-around items-center py-2">
                              <div className="w-7 h-7 rounded-full border-2 border-[#5a6b99] border-dashed animate-spin flex items-center justify-center" style={{ animationDuration: '4s' }}>
                                <div className="w-2 h-2 rounded-full bg-[#c9a876]" />
                              </div>
                              <div className="h-4 w-16 bg-[#1f2a44] rounded-sm" />
                              <div className="w-7 h-7 rounded-full border-2 border-[#5a6b99] border-dashed animate-spin flex items-center justify-center" style={{ animationDuration: '4s' }}>
                                <div className="w-2 h-2 rounded-full bg-[#c9a876]" />
                              </div>
                            </div>
                            <p className="text-[9px] font-mono-retro text-center text-[#8d9ab8] truncate">
                              {memory.title}
                            </p>
                          </div>
                          <audio controls src={memory.media_url} className="w-full h-9" />
                        </div>
                      )}
                    </div>

                    {/* Bottom Scrapbook Text Area */}
                    <div className="pt-4 text-left">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-serif-vintage font-semibold text-lg text-[#f4eee4] truncate">
                          {memory.title}
                        </h3>
                        <span className="font-mono-retro text-[10px] text-[#8e9bb5] tracking-wider shrink-0 ml-2">
                          {dateStr}
                        </span>
                      </div>

                      {memory.caption && (
                        <p className="font-handwriting text-2xl text-[#c7beaf] leading-snug">
                          {memory.caption}
                        </p>
                      )}

                      <div className="mt-3 pt-2 border-t border-[#1e2a47] flex justify-between items-center text-[9px] font-mono-retro text-[#71809e] uppercase tracking-wider">
                        <span className="text-[#c9a876]">{memory.category}</span>
                        <span className="opacity-60">MEM-NO.{memory.id.slice(0, 4)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Dark Translucent Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#0e162a]/90 backdrop-blur-2xl border border-[#243356] rounded-xl p-6 sm:p-8 shadow-2xl relative my-8 text-[#e8e4d9]"
          >
            <div className="flex items-center justify-between border-b border-[#1e2a47] pb-4 mb-6">
              <div>
                <p className="text-[10px] font-mono-retro tracking-widest text-[#c9a876] uppercase">New Keepsake</p>
                <h2 className="font-handwriting text-4xl text-[#f3ede2]">Pin to the Vault</h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                disabled={isUploading}
                className="p-1 rounded text-[#8890a8] hover:text-white hover:bg-[#1c2438]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpload} className="space-y-5">
              <div>
                <label className="block text-xs font-mono-retro tracking-wider text-[#8890a8] uppercase mb-2">
                  Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Midnight drive..."
                  className="w-full bg-[#070b16] border border-[#202d4c] focus:border-[#c9a876] rounded-lg px-4 py-3 text-sm text-[#e8e4d9] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-retro tracking-wider text-[#8890a8] uppercase mb-2">
                  Handwritten Note / Story
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="A few words you want to remember..."
                  rows={3}
                  className="w-full bg-[#070b16] border border-[#202d4c] focus:border-[#c9a876] rounded-lg px-4 py-3 text-sm text-[#e8e4d9] outline-none resize-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-retro tracking-wider text-[#8890a8] uppercase mb-2">
                  Memory Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => { setCategory('photo'); setFile(null); }}
                    className={`flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-lg border text-xs font-mono-retro transition-all ${
                      category === 'photo'
                        ? 'border-[#c9a876] bg-[#c9a876]/15 text-[#c9a876]'
                        : 'border-[#202d4c] bg-[#070b16] text-[#8890a8]'
                    }`}
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Photo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setCategory('video'); setFile(null); }}
                    className={`flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-lg border text-xs font-mono-retro transition-all ${
                      category === 'video'
                        ? 'border-[#c9a876] bg-[#c9a876]/15 text-[#c9a876]'
                        : 'border-[#202d4c] bg-[#070b16] text-[#8890a8]'
                    }`}
                  >
                    <VideoIcon className="w-4 h-4" />
                    <span>Video</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setCategory('audio'); setFile(null); }}
                    className={`flex flex-col items-center justify-center gap-1.5 py-2.5 rounded-lg border text-xs font-mono-retro transition-all ${
                      category === 'audio'
                        ? 'border-[#c9a876] bg-[#c9a876]/15 text-[#c9a876]'
                        : 'border-[#202d4c] bg-[#070b16] text-[#8890a8]'
                    }`}
                  >
                    <Music className="w-4 h-4" />
                    <span>Voice Note</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-retro tracking-wider text-[#8890a8] uppercase mb-2">
                  Select File ({category.toUpperCase()})
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  required
                  accept={
                    category === 'photo'
                      ? 'image/*'
                      : category === 'video'
                      ? 'video/*'
                      : 'audio/*'
                  }
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  className="w-full text-xs font-mono-retro text-[#8890a8] file:mr-3 file:py-2 file:px-3.5 file:rounded-md file:border-0 file:text-xs file:font-mono-retro file:bg-[#1a233a] file:text-[#e8e4d9] hover:file:bg-[#243254] cursor-pointer"
                />
              </div>

              {uploadError && (
                <p className="text-red-400 font-mono-retro text-xs bg-red-950/30 p-3 rounded border border-red-900/40">
                  {uploadError}
                </p>
              )}

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isUploading}
                  className="flex-1 py-3 bg-[#070b16] border border-[#202d4c] text-[#8890a8] hover:text-[#e8e4d9] rounded-lg font-mono-retro text-xs transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="flex-1 py-3 bg-[#c9a876] hover:bg-[#d8b888] text-[#070a13] font-semibold rounded-lg font-mono-retro text-xs uppercase tracking-wider transition-all disabled:opacity-50 shadow-md shadow-[#c9a876]/10"
                >
                  {isUploading ? 'Securing…' : 'Pin Memory'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}