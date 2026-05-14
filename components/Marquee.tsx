import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Marquee: React.FC = () => {
  const { t } = useLanguage();
  const items = t.marquee;

  return (
    <div className="marquee">
      <div className="marquee-track" aria-hidden="true">
        <span>
          {items[0]}
          <span className="alt">{items[1]}</span>
          {items[2]}
          <span className="alt">{items[3]}</span>
          {items[4]}
        </span>
        <span>
          {items[0]}
          <span className="alt">{items[1]}</span>
          {items[2]}
          <span className="alt">{items[3]}</span>
          {items[4]}
        </span>
      </div>
    </div>
  );
};
