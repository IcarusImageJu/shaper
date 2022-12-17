import React from 'react';

import type { FC } from 'react';
import type { ShaperProps } from '../models';

import ShapeRandomizer from './ShapeRandomizer';
import { useShapeSelector } from './useShapeSelector';

const ShapeSelector: FC<ShaperProps & { qty: number }> = ({
  qty = 100,
  ...rest
}) => {
  const { shapes } = useShapeSelector({ ...rest });

  return (
    <>
      {Array.from(Array(qty).keys()).map((key) => (
        <ShapeRandomizer key={key} shapes={shapes} />
      ))}
    </>
  );
};

export default ShapeSelector;
