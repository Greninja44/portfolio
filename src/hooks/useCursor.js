import { useEffect } from 'react';
import { useStore } from '../store';

const lerp = (a, b, t) => a + (b - a) * t;

export function useCursor() {
  const setCursorHoverLabel = useStore((state) => state.setCursorHoverLabel);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let rafId;
    let mx = 0, my = 0;   // mouse (instant)
    let rx = 0, ry = 0;   // ring (lerped)
    let isClicking = false;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    if (!dot || !ring) return;

    const onMove = (e) => { 
      mx = e.clientX; 
      my = e.clientY; 
    };
    
    const onMouseDown = () => { isClicking = true; };
    const onMouseUp = () => { isClicking = false; };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const tick = () => {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);
      
      const scale = isClicking ? 1.4 : 1;
      
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%) scale(${scale})`;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) scale(${scale})`;
      
      rafId = requestAnimationFrame(tick);
    };
    
    // Initialize position instantly on first move
    const initPos = (e) => {
      mx = e.clientX; my = e.clientY;
      rx = mx; ry = my;
      window.removeEventListener('mousemove', initPos);
      tick();
    };
    window.addEventListener('mousemove', initPos);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', initPos);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return { setCursorHoverLabel };
}
