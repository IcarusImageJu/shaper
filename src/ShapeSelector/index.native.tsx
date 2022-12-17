import React from 'react';

import type { FC } from 'react';
import type { ShaperProps } from '../models';

import ShapeRandomizer from './ShapeRandomizer';
import { Span } from '../tags';
import { useShapeSelector } from './useShapeSelector';

const ShapeSelector: FC<ShaperProps & { qty: number }> = ({
  tileSize,
  qty = 100,
  ...rest
}) => {
  const { shapes } = useShapeSelector({ tileSize, ...rest });
  return (
    <>
      {Array.from(Array(qty).keys()).map((key) => (
        <Span key={key} style={{ width: tileSize }}>
          <ShapeRandomizer shapes={shapes} />
        </Span>
      ))}
    </>
  );
};

export default ShapeSelector;
