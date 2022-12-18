import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { defaultTileSize } from './constants';
import type { ShaperProps } from './models';
import { handleThrottle } from './utils';

export const useShaperQty = ({ tileSize = defaultTileSize }: ShaperProps) => {
  const ref = useRef<null | HTMLDivElement>(null);
  const [qty, setQty] = useState(1);
  const throttleInProgress = useRef(false);

  const calcQty = useCallback(() => {
    // Have to type because of tsconfig not including "DOM" lib
    // can't include DOM Lib because it brokes too much other stuff than just this line
    const parent = ref.current as
      | { clientWidth: number; clientHeight: number }
      | undefined;
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
