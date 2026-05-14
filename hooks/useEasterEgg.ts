import { useEffect, useState, useCallback } from 'react';

const TRIGGER_WORD = 'kot';
const BUFFER_SIZE = 8;

/**
 * Listens for the user typing "kuba" anywhere on the page.
 * Returns [isVisible, dismiss] tuple.
 */
export function useEasterEgg(): [boolean, () => void] {
  const [show, setShow] = useState(false);
  const dismiss = useCallback(() => setShow(false), []);

  useEffect(() => {
    let buf = '';

    const handleKey = (e: KeyboardEvent) => {
      if (show) {
        setShow(false);
        return;
      }
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-BUFFER_SIZE);
      if (buf.endsWith(TRIGGER_WORD)) {
        setShow(true);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [show]);

  return [show, dismiss];
}
