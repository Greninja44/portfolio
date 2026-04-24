import { useState, useCallback } from 'react';

export function useSignalNoise() {
  const [isBursting, setIsBursting] = useState(false);

  const triggerBurst = useCallback(() => {
    setIsBursting(true);
    setTimeout(() => {
      setIsBursting(false);
    }, 120);
  }, []);

  return { isBursting, triggerBurst };
}
