'use client';

import { useState } from 'react';
import { KeyRound, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function handleLogin() {
    setError('');

    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    let authenticatedUser: string | null = null;
    if (cleanUser === 'bhavii' && cleanPass === 'vaiduu25') {
      authenticatedUser = 'Bhavii';
    } else if (cleanUser === 'vaiduu' && cleanPass === 'bhavii06') {
      authenticatedUser = 'Vaiduu';
    }

    if (authenticatedUser) {
      setIsSuccess(true);
      localStorage.setItem('sanctuary_user', authenticatedUser);
      localStorage.setItem('sanctuary_auth', 'true');

      window.location.href = '/';
    } else {
      setError('Invalid username or secret passcode.');
    }
  }

  return (
    <div className="min-h-screen bg-[#070a14] text-[#e2ded2] flex items-center justify-center p-4 relative overflow-hidden selection:bg-[#c9a876]/30">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-serif-vintage { font-family: 'Fraunces', serif; }
        .font-mono-retro { font-family: 'IBM Plex Mono', monospace; }
        * { cursor: auto !important; }
      `}</style>

      {/* Atmospheric Soft Light Behind Glass */}
      <div className="pointer-events-none fixed top-[20%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[#1b2747]/30 blur-[130px]" />
      <div className="pointer-events-none fixed bottom-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[#c9a876]/10 blur-[140px]" />

      {/* Login Card */}
      <div className="w-full max-w-sm bg-[#0e162a]/80 backdrop-blur-2xl border border-[#243254]/80 rounded-2xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 transition-all">
        
        {/* Header Icon */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-[#c9a876]/10 border border-[#c9a876]/30 flex items-center justify-center mx-auto mb-3 text-[#c9a876]">
            {isSuccess ? <ShieldCheck className="w-6 h-6 animate-pulse" /> : <KeyRound className="w-5 h-5" />}
          </div>
          <p className="text-[10px] font-mono-retro tracking-[0.25em] text-[#c9a876] uppercase">
            Restricted Entry
          </p>
          <h1 className="font-serif-vintage text-2xl text-[#f5f1e8] font-medium mt-1">
            Sanctuary
          </h1>
          <p className="font-handwriting text-xl text-[#8e9bb5] mt-1">
            Only for the two of us.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-mono-retro uppercase tracking-wider text-[#8e9bb5] mb-1.5">
              Identity
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full bg-[#070b16]/80 border border-[#243254] focus:border-[#c9a876] rounded-xl px-3.5 py-2.5 text-sm text-[#e2ded2] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono-retro uppercase tracking-wider text-[#8e9bb5] mb-1.5">
              Secret Passcode
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#070b16]/80 border border-[#243254] focus:border-[#c9a876] rounded-xl px-3.5 py-2.5 text-sm text-[#e2ded2] outline-none transition-colors font-mono-retro"
            />
          </div>

          {error && (
            <p className="text-xs font-mono-retro text-red-400 bg-red-950/30 border border-red-500/30 p-2.5 rounded-lg text-center">
              {error}
            </p>
          )}

          <button
            type="button"
            onClick={handleLogin}
            disabled={isSuccess}
            className="w-full mt-2 py-3 bg-gradient-to-r from-[#c9a876] to-[#b8935c] text-[#070a14] font-semibold rounded-xl font-mono-retro text-xs uppercase tracking-wider transition-all hover:brightness-110 shadow-lg shadow-[#c9a876]/15 disabled:opacity-75"
          >
            {isSuccess ? 'Unlocking Archive…' : 'Enter Sanctuary'}
          </button>
        </div>

        <p className="text-[10px] font-mono-retro text-center text-[#556380] mt-6 tracking-wide">
          SESSION SAVED LOCALLY
        </p>
      </div>
    </div>
  );
}