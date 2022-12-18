import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { defaultTileSize } from './constants';
import type { ShaperProps } from './models';
import { handleThrottle } from './utils';

export const useShaperQty = ({ tileSize = defaultTileSize }: ShaperProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [qty, setQty] = useState(1);
  const throttleInProgress = useRef(false);

  const calcQty = useCallback(() => {
    const parent = ref.current;
    if (parent) {
      // take variation from the grid parent
      let size = tileSize;
      const area = parent.clientWidth * parent.clientHeight;
      const res = Math.floor(
        area / (size * size) + (parent.clientWidth * 2) / size
      );
      setQty(res);
    }
  }, [tileSize]);

  const handleThrottleCalc = useCallback(
    () => handleThrottle({ ref: throttleInProgress, cb: calcQty }),
    [calcQty]
  );

  useLayoutEffect(() => {
    handleThrottleCalc();
    window.addEventListener('resize', handleThrottleCalc);
    return () => {
      window.removeEventListener('resize', handleThrottleCalc);
    };
  }, [handleThrottleCalc, ref]);

  return { qty, ref, refresh: () => {} };
};
