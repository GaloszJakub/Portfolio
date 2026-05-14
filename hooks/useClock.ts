import { useEffect, useState } from 'react';

/**
 * Returns a live-updating time string in HH:MM:SS format.
 */
export function useClock(): string {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`
      );
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
