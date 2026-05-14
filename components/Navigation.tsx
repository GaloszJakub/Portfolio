import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Navigation: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="top">
      <div className="inner">
        <a href="#top" className="brand">
          <span className="sq" />
          <span>{t.brand}</span>
        </a>
        <div className="menu">
          <a href="#about" className="item">{t.nav.about}</a>
          <a href="#work" className="item">{t.nav.work}</a>
          <a href="#stack" className="item">{t.nav.stack}</a>
          <a href="#xp" className="item">{t.nav.xp}</a>
          <a href="#contact" className="item">{t.nav.contact}</a>
          <div className="lang">
            <button
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              className={language === 'pl' ? 'active' : ''}
              onClick={() => setLanguage('pl')}
            >
              PL
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
