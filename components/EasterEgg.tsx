import React, { useEffect, useRef } from 'react';
import { useEasterEgg } from '../hooks/useEasterEgg';

export const EasterEgg: React.FC = () => {
  const [show, dismiss] = useEasterEgg();
  const base = import.meta.env.BASE_URL;
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!show) return;
    overlayRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, dismiss]);

  return (
    <div
      ref={overlayRef}
      className={`egg-overlay${show ? ' show' : ''}`}
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <img
        src={`${base}IMG_20260119_110323751.gif`}
        alt="Surprise cat — press Escape or click to close"
        className="egg-img"
      />
    </div>
  );
};
