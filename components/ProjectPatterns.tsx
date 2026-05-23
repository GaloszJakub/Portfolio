import React from 'react';

const ACCENT = '#ff3c20';

export const projectPatterns: React.ReactNode[] = [
  <svg key="p1" className="pattern" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="none" stroke={ACCENT} strokeWidth="1" />
    <circle cx="50" cy="50" r="36" fill="none" stroke={ACCENT} strokeWidth="1" />
    <circle cx="50" cy="50" r="24" fill="none" stroke={ACCENT} strokeWidth="1" />
    <circle cx="50" cy="50" r="12" fill={ACCENT} />
  </svg>,
  <svg key="p2" className="pattern" viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" fill="none" stroke={ACCENT} strokeWidth="1" />
    <rect x="22" y="22" width="56" height="56" fill="none" stroke={ACCENT} strokeWidth="1" />
    <rect x="34" y="34" width="32" height="32" fill={ACCENT} />
  </svg>,
  <svg key="p3" className="pattern" viewBox="0 0 100 100">
    <path d="M10,90 L50,10 L90,90 Z" fill="none" stroke={ACCENT} strokeWidth="1" />
    <path d="M25,80 L50,30 L75,80 Z" fill={ACCENT} />
  </svg>,
  <svg key="p4" className="pattern" viewBox="0 0 100 100">
    <line x1="10" y1="20" x2="90" y2="20" stroke={ACCENT} strokeWidth="1" />
    <line x1="10" y1="40" x2="90" y2="40" stroke={ACCENT} strokeWidth="1" />
    <line x1="10" y1="60" x2="90" y2="60" stroke={ACCENT} strokeWidth="1" />
    <line x1="10" y1="80" x2="90" y2="80" stroke={ACCENT} strokeWidth="1" />
    <circle cx="30" cy="40" r="5" fill={ACCENT} />
    <circle cx="60" cy="60" r="5" fill={ACCENT} />
    <circle cx="75" cy="20" r="5" fill={ACCENT} />
  </svg>,
  <svg key="p5" className="pattern" viewBox="0 0 100 100">
    <circle cx="50" cy="60" r="30" fill={ACCENT} />
    <path d="M50,60 Q50,30 30,20 Q50,40 50,60 Q50,40 70,20 Q50,30 50,60 Z" fill={ACCENT} />
  </svg>,
  <svg key="p6" className="pattern" viewBox="0 0 100 100">
    <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="none" stroke={ACCENT} strokeWidth="1" />
    <path d="M50,25 L75,50 L50,75 L25,50 Z" fill="none" stroke={ACCENT} strokeWidth="1" />
    <circle cx="50" cy="50" r="10" fill={ACCENT} />
  </svg>,
];
