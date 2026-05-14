import { useEffect } from 'react';

/**
 * Observes elements with `.reveal` and `.reveal-stagger` classes
 * and adds `.in` class when they enter the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
