import React from 'react';
import { useEasterEgg } from '../hooks/useEasterEgg';

export const EasterEgg: React.FC = () => {
  const [show, dismiss] = useEasterEgg();

  return (
    <div className={`egg-overlay${show ? ' show' : ''}`} onClick={dismiss}>
      <img
        src="/IMG_20260119_110323751.gif"
        alt="Surprise cat"
        className="egg-img"
      />
    </div>
  );
};
