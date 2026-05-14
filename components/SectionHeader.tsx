import React from 'react';

interface SectionHeaderProps {
  label: string;
  num: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, num }) => (
  <div className="seclabel reveal">
    <div className="name"><span className="acc">▍</span> {label}</div>
    <div className="num">{num}</div>
  </div>
);
