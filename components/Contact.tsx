import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SectionHeader } from './SectionHeader';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const getCellHref = (cell: { k: string; v: string }) => {
    if (cell.k === 'Email') return `mailto:${cell.v}`;
    if (cell.k === 'GitHub') return `https://github.com/${cell.v}`;
    return undefined;
  };

  const isExternal = (k: string) => k === 'GitHub';

  return (
    <section id="contact" className="wrap contact">
      <SectionHeader label={t.contact.label} num={t.contact.num} />

      <div className="contact-hero reveal">
        <h2 className="contact-title">
          <span>{t.contact.t1}</span><br />
          <span className="out">{t.contact.t2}</span><br />
          <span className="em">{t.contact.t3}</span>
        </h2>
        <div className="col" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
          <span className="status">{t.contact.ready}</span>
        </div>
      </div>

      <div className="contact-grid">
        {t.contact.cells.map((cell, idx) => (
          <a
            key={idx}
            className="contact-cell"
            href={getCellHref(cell)}
            target={isExternal(cell.k) ? '_blank' : undefined}
            rel={isExternal(cell.k) ? 'noopener noreferrer' : undefined}
          >
            <span className="k">{cell.k}</span>
            <span className="v">{cell.v}</span>
            <span className="arrow">↗</span>
          </a>
        ))}
      </div>

      <footer className="site-footer">
        <div>{t.footer.copy}</div>
        <div className="time">{t.footer.made}</div>
        <div>{t.footer.egg}</div>
      </footer>
    </section>
  );
};
