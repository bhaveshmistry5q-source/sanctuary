'use client';

import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let count = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      count++;
      if (count % 2 === 0) {
        const newSparkle: Sparkle = {
          id: Math.random(),
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          size: Math.random() * 3.5 + 1.5,
        };

        setSparkles((prev) => [...prev.slice(-18), newSparkle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles((prev) => (prev.length > 0 ? prev.slice(1) : []));
    }, 45);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* સેન્ટ્રલ ગોલ્ડન ડોટ - બોર્ડર વગર */}
      <div
        className="fixed w-2 h-2 rounded-full bg-[#f5e4bd] shadow-[0_0_10px_#d4a34b] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* પાછળ છૂટતા ગોલ્ડન સ્પાર્કલ્સ */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="fixed rounded-full bg-gradient-to-tr from-[#d4a34b] to-[#fff] pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            boxShadow: '0 0 6px rgba(212, 163, 75, 0.8)',
            animationDuration: '0.6s',
          }}
        />
      ))}
    </div>
  );
}