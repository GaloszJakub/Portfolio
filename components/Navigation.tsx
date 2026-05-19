import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="top" aria-label="Main navigation">
      <div className="inner">
        <a href="#top" className="brand">
          <span className="sq" aria-hidden="true" />
          <span>{t.brand}</span>
        </a>
        <div className="menu" role="list">
          <a href="#about" className="item" role="listitem">{t.nav.about}</a>
          <a href="#work" className="item" role="listitem">{t.nav.work}</a>
          <a href="#stack" className="item" role="listitem">{t.nav.stack}</a>
          <a href="#xp" className="item" role="listitem">{t.nav.xp}</a>
          <a href="#contact" className="item" role="listitem">{t.nav.contact}</a>
          <div className="lang" role="group" aria-label="Language selector">
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className={language === 'pl' ? 'active' : ''}
              onClick={() => setLanguage('pl')}
              aria-pressed={language === 'pl'}
              aria-label="Switch to Polish"
            >
              PL
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
