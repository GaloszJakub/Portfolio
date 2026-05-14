import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="xp" className="wrap">
      <SectionHeader label={t.xp.label} num={t.xp.num} />

      <h2 className="sectitle reveal">
        <span>{t.xp.t1}</span> <span className="em">{t.xp.t2}</span>
      </h2>

      <div className="xp">
        {t.xp.items.map((item, idx) => (
          <div className="xp-row reveal" key={idx}>
            <div className="yrs">{item.yrs}</div>
            <div>
              <div className="role">{item.role}</div>
              <div className="place">{item.place}</div>
            </div>
            <div className="note">{item.note}</div>
            <div className="tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
