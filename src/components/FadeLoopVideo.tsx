'use client';
import { useRef, useEffect } from 'react';

export default function FadeLoopVideo({ src, style }: { src: string; style?: React.CSSProperties }) {
  const vRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    const FADE = 0.5;
    let raf: number;
    const tick = () => {
      if (v.duration && !isNaN(v.duration)) {
        const t = v.currentTime;
        const d = v.duration;
        let op = 1;
        if (t < FADE) op = t / FADE;
        else if (t > d - FADE) op = Math.max(0, (d - t) / FADE);
        v.style.opacity = String(op);
      }
      raf = requestAnimationFrame(tick);
    };
    const onEnded = () => {
      v.style.opacity = '0';
      setTimeout(() => { v.currentTime = 0; v.play().catch(() => {}); }, 100);
    };
    const onCanPlay = () => { v.play().catch(() => {}); };
    v.addEventListener('ended', onEnded);
    v.addEventListener('canplay', onCanPlay);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      v.removeEventListener('ended', onEnded);
      v.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  return (
    <video
      ref={vRef}
      src={src}
      muted
      playsInline
      autoPlay
      preload="auto"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'cover',
        opacity: 0,
        transition: 'opacity 0.3s linear',
        filter: 'saturate(1.1) contrast(1.05)',
        ...style,
      }}
    />
  );
}
