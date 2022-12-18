import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { defaultTileSize } from './constants';
import type { ShaperProps } from './models';
import { handleThrottle } from './utils';

export const useShaperQty = ({ tileSize = defaultTileSize }: ShaperProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [qty, setQty] = useState(1);
  const throttleInProgress = useRef(false);

  const calcQty = useCallback(() => {
    if (ref.current) {
      const parent = ref.current;
      // take variation from the grid parent
      const firstChild = parent.children[0];
      let size = tileSize;
      if (firstChild) {
        size = firstChild.clientWidth;
      }
      const area = ref.current.clientWidth * ref.current.clientHeight;
      const res = Math.floor(area / (size * size) + parent.clientWidth / size);
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
