import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SectionHeader } from './SectionHeader';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const m = t.about.meta;

  return (
    <section id="about" className="wrap">
      <SectionHeader label={t.about.label} num={t.about.num} />

      <div className="about">
        <div className="about-meta reveal">
          <dl>
            <dt>{m.name}</dt><dd>{m.nameVal}</dd>
            <dt>{m.role}</dt><dd>{m.roleVal}</dd>
            <dt>{m.loc}</dt><dd>{m.locVal}</dd>
            <dt>{m.lang}</dt><dd>{m.langVal}</dd>
            <dt>{m.edu}</dt><dd>{m.eduVal}</dd>
          </dl>
        </div>
        <div className="about-body reveal">
          <p className="lead">
            {t.about.lead} <em>{t.about.leadEm}</em>
          </p>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </div>
    </section>
  );
};
