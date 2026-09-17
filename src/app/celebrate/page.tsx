'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  text: string;
}

export default function CelebratePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: "Hey there! Tell me what kind of vibe you want to create today. Whether it's an inside joke, a milestone, or just reminding them how special they are—I'm here to build the narrative with you."
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [soundtrack, setSoundtrack] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMsg: Message = { id: Date.now().toString(), role: 'user', text: userText };
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let reply = "I love this direction. I'll structure a cinematic three-part reveal: an opening dedicated note, a synchronized photo reel, and your background track unlocked at the end.";
      
      const lower = userText.toLowerCase();
      if (lower.includes('idea') || lower.includes('confused') || lower.includes('help')) {
        reply = "Here's a concept: 'The Distance Chronicles'. We highlight the exact days spent apart, your favorite video call memories, and an interactive 'Open When You Miss Me' card stack. Drop your favorite pictures below!";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'assistant', text: reply }]);
      setLoading(false);
    }, 900);
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...names]);
    }
  };

  const handleGenerate = () => {
    const token = Math.random().toString(36).substring(2, 9);
    setGeneratedUrl(`intentx.space/celebrate/${token}`);
  };

  return (
    <div className="min-h-screen bg-[#07040d] text-slate-100 font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden pb-16">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e1338_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Navigation */}
      <header className="border-b border-white/5 bg-black/30 backdrop-blur-2xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/dashboard" 
            className="text-xs font-mono tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← WORKSPACE
          </Link>
          <div className="flex items-center gap-2 text-xs font-mono text-pink-400">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
            CREATIVE ENGINE ONLINE
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 relative z-10 max-w-5xl">
        {/* Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Celebration Studio
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-2 max-w-xl mx-auto font-light">
            Collaborate with the AI to curate an aesthetic, private celebration space without touching a line of code.
          </p>
        </motion.div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: AI Creative Chat Partner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 flex flex-col h-[540px] rounded-3xl border border-white/10 bg-[#0e081a]/70 backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            {/* Chat Bar */}
            <div className="p-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  AI
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Creative Brain</h3>
                  <p className="text-[11px] text-slate-400">Context aware • Ready to assist</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-slate-400 uppercase tracking-widest">
                v2.4 Core
              </span>
            </div>

            {/* Conversation Timeline */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl text-xs md:text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-br-sm shadow-[0_4px_20px_rgba(244,63,94,0.25)] font-normal'
                          : 'bg-white/[0.05] border border-white/10 text-slate-200 rounded-bl-sm backdrop-blur-md'
                      }`}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {loading && (
                <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 w-fit text-slate-400 text-xs">
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-1 text-[11px] font-mono tracking-wider">THINKING...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-3.5 border-t border-white/10 bg-black/40 flex gap-2">
              <input
                type="text"
                placeholder="Ask for an idea, suggest a theme, or describe the mood..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-slate-500 focus:outline-none focus:border-pink-500/60 text-xs md:text-sm transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 active:scale-95 text-white text-xs font-mono font-bold tracking-widest transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)]"
              >
                SEND
              </button>
            </form>
          </motion.div>

          {/* Right: Media & Sound Integration Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="p-6 rounded-3xl border border-white/10 bg-[#0e081a]/70 backdrop-blur-2xl space-y-6 shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="text-xs font-mono tracking-widest text-slate-400 uppercase">ASSET REPOSITORY</h3>
                <span className="text-[11px] text-pink-400 font-mono">STEP 02</span>
              </div>

              {/* Photos Reel */}
              <div>
                <label className="block text-xs text-slate-300 font-medium mb-2">Moments & Photographs</label>
                <label className="flex flex-col items-center justify-center border border-dashed border-white/20 hover:border-pink-500/50 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl p-6 cursor-pointer transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-slate-300">Drop high-res images here</span>
                  <span className="text-[10px] text-slate-500 mt-0.5">Captures, polaroids, screenshots</span>
                  <input type="file" multiple accept="image/*" onChange={handleFiles} className="hidden" />
                </label>

                {uploadedFiles.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 max-h-24 overflow-y-auto">
                    {uploadedFiles.map((file, i) => (
                      <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-pink-300 border border-white/10">
                        {file}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Soundtrack */}
              <div>
                <label className="block text-xs text-slate-300 font-medium mb-2">Soundtrack Link (Spotify / Audio Track)</label>
                <input
                  type="url"
                  placeholder="https://open.spotify.com/track/..."
                  value={soundtrack}
                  onChange={(e) => setSoundtrack(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black/40 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 text-xs font-mono transition-colors"
                />
              </div>
            </div>

            {/* Creation Trigger */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-[0_0_35px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.55)] transition-all"
            >
              Compile Custom Page ✨
            </motion.button>
          </motion.div>
        </div>

        {/* Destination Output */}
        {generatedUrl && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 p-6 rounded-3xl border border-emerald-500/25 bg-emerald-950/20 backdrop-blur-xl text-center"
          >
            <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
              Live Link Generated
            </p>
            <p className="text-slate-300 text-xs md:text-sm mt-1">
              Your surprise is ready to be experienced:
            </p>
            <div className="mt-3 inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-black/80 border border-emerald-500/30 text-emerald-300 font-mono text-xs md:text-sm">
              <span>{generatedUrl}</span>
              <button 
                onClick={() => alert("Copied link to clipboard!")}
                className="text-[11px] font-bold text-black bg-emerald-400 px-3 py-1 rounded-lg hover:bg-emerald-300 transition-colors"
              >
                Copy
              </button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}