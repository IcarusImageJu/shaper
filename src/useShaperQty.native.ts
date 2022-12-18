import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Dimensions, MeasureOnSuccessCallback, View } from 'react-native';
import { defaultTileSize } from './constants';
import type { ShaperProps } from './models';
import { handleThrottle } from './utils';

export const useShaperQty = ({ tileSize = defaultTileSize }: ShaperProps) => {
  const ref = useRef<null | View>(null);
  const [qty, setQty] = useState(1);
  const throttleInProgress = useRef(false);

  const calcQty: MeasureOnSuccessCallback = useCallback(
    (_x, _y, width, height) => {
      const area = width * height;
      const res = Math.floor(
        area / (tileSize * tileSize) + (width * 2) / tileSize
      );
      setQty(res > 1 ? res : 1);
    },
    [tileSize]
  );

  const handleThrottleCalc: MeasureOnSuccessCallback = useCallback(
    (x, y, width, height, pageX, pageY) =>
      handleThrottle({
        ref: throttleInProgress,
        cb: () => calcQty(x, y, width, height, pageX, pageY),
      }),
    [calcQty]
  );

  // I haven't found yet why i need this trick to calc correctly
  const refresh = useCallback(() => {
    ref.current?.measure(handleThrottleCalc);
  }, [handleThrottleCalc]);

  useLayoutEffect(() => {
    if (ref.current) {
      setTimeout(refresh, 500);
    }
  }, [refresh]);

  useLayoutEffect(() => {
    ref.current?.measure(handleThrottleCalc);

    const subscription = Dimensions.addEventListener('change', () => {
      ref.current?.measure(handleThrottleCalc);
    });
    return () => {
      subscription.remove();
    };
  }, [handleThrottleCalc, ref]);

  return { qty, ref };
};
