import React from 'react';
import { useStore } from '../store';
import { useCursor } from '../hooks/useCursor';

export default function Cursor() {
  useCursor();
  const hoverLabel = useStore(state => state.cursorHoverLabel);

  return (
    <div className="hidden md:block pointer-events-none z-[10000] fixed top-0 left-0 w-full h-full overflow-hidden mix-blend-difference">
      {/* Outer Ring */}
      <div 
        id="cursor-ring"
        className="absolute top-0 left-0 w-[32px] h-[32px] rounded-full border-[1.5px] border-white flex items-center justify-center transition-all duration-300 ease-out will-change-transform"
        style={{
          transformOrigin: 'center center',
          ...(hoverLabel ? {
            width: '72px',
            height: '72px',
            backgroundColor: 'transparent',
            borderColor: 'white',
          } : {})
        }}
      >
        {hoverLabel && (
          <span className="text-white font-sans font-medium text-[10px] leading-none select-none uppercase tracking-widest">
            {hoverLabel}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div 
        id="cursor-dot"
        className="absolute top-0 left-0 w-[6px] h-[6px] bg-white rounded-full transition-transform duration-300 ease-out will-change-transform"
        style={{
          transformOrigin: 'center center',
          ...(hoverLabel ? { transform: 'scale(0)' } : {})
        }}
      />
    </div>
  );
}
