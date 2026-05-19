import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SectionHeader } from './SectionHeader';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="stack" className="wrap">
      <SectionHeader label={t.stack.label} num={t.stack.num} />

      <h2 className="sectitle reveal">
        <span>{t.stack.t1}</span> <span className="em">{t.stack.t2}</span>{' '}
        <span>{t.stack.t3}</span> <span className="em">{t.stack.t4}</span>.
      </h2>

      <div className="stack-cols reveal-stagger">
        {t.stack.columns.map((col) => (
          <div className="stack-col" key={col.num}>
            <div className="head">
              <span className="title">{col.title}</span>
              <span className="num">{col.num}</span>
            </div>
            <ul>
              {col.items.map((item) => (
                <li key={item.name}>
                  <span className="nm">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
