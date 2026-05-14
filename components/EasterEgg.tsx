import React from 'react';
import { useEasterEgg } from '../hooks/useEasterEgg';

export const EasterEgg: React.FC = () => {
  const [show, dismiss] = useEasterEgg();
  const base = import.meta.env.BASE_URL;

  return (
    <div className={`egg-overlay${show ? ' show' : ''}`} onClick={dismiss}>
      <img
        src={`${base}IMG_20260119_110323751.gif`}
        alt="Surprise cat"
        className="egg-img"
      />
    </div>
  );
};
