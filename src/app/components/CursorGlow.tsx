'use client';

import { useState } from 'react';

export default function CursorGlow({ children }: { children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
    onMouseMove={(e) =>
        setPosition({ x: e.clientX, y: e.clientY })
    }
    className="relative w-full h-full min-h-screen transition-colors duration-75 bg-[length:80px_80px] bg-[#0a0f0d] text-white"
    style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08) 10px, rgba(0,0,0,0.9) 150px)`
             
            }}
    >
    {children}
    </div>
  );
}