import React from 'react';
import { useLanguage } from '../LanguageContext';
import { SectionHeader } from './SectionHeader';
import { projectPatterns } from './ProjectPatterns';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projects = t.work.projects;

  return (
    <section id="work" className="wrap">
      <SectionHeader label={t.work.label} num={t.work.num} />

      <h2 className="sectitle reveal">
        <span>{t.work.t1}</span><br />
        <span className="out">{t.work.t2}</span> <span>{t.work.t3}</span>
      </h2>

      <div className="work-grid">
        {projects.map((proj, idx) => {
          const url = proj.liveUrl || proj.github || '#';
          return (
            <a
              key={proj.id}
              className={`work-card${proj.featured ? ' feature' : ''}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectPatterns[idx]}
              {proj.featured ? (
                <div className="body">
                  <div className="top">
                    <span className="num">N° {proj.id} · Featured</span>
                    <span>{proj.year}</span>
                  </div>
                  <div className="wc-name">{proj.title}</div>
                  <div className="desc">{proj.description}</div>
                  <div className="wc-stack">
                    {proj.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </div>
              ) : (
                <>
                  <div className="top">
                    <span className="num">N° {proj.id}</span>
                    <span>{proj.year}</span>
                  </div>
                  <div className="wc-name">{proj.title}</div>
                  <div className="desc">{proj.description}</div>
                  <div className="wc-stack">
                    {proj.stack.map((s) => <span key={s}>{s}</span>)}
                  </div>
                </>
              )}
              <div className="arrow">↗</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
