import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useClock } from '../hooks/useClock';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const time = useClock();

  return (
    <header className="hero wrap" id="top">
      <div className="hero-top">
        <div><b>{t.meta.role}</b>{t.meta.roleVal}</div>
        <div><b>{t.meta.based}</b>{t.meta.basedVal}</div>
        <div><b>{t.meta.exp}</b>{t.meta.expVal}</div>
        <div><b>{t.meta.idx}</b>{t.meta.idxVal}</div>
      </div>

      <h1 className="display reveal">
        <span className="l1">
          <span className="split">
            <span>
              {t.hero.l1}
              <span style={{ display: 'inline-block', width: '.2em' }} />
              <span className="strike">{t.hero.strike}</span>
              <span style={{ display: 'inline-block', width: '.2em' }} />
            </span>
          </span>
        </span>
        <span className="l2">
          <span className="split">
            <span>
              <span className="acc">{t.hero.l2acc}</span> {t.hero.l2}
            </span>
          </span>
        </span>
      </h1>

      <div className="hero-bottom">
        <p className="desc reveal">{t.hero.tag}</p>
        <div className="col">
          <b>{t.hero.avail}</b>
          <span className="status">{t.hero.status}</span>
        </div>
        <div className="col">
          <b>{t.hero.local}</b>
          <span>{time} CET</span>
        </div>
      </div>
    </header>
  );
};
