import React from 'react';

import type { FC } from 'react';
import type { ShaperProps } from '../models';

import ShapeRandomizer from './ShapeRandomizer';
import { useShapeSelector } from './useShapeSelector';
import { defaultSeed } from '../constants';

const ShapeSelector: FC<ShaperProps & { qty: number }> = ({
  qty = 100,
  seed = defaultSeed,
  ...rest
}) => {
  const { shapes } = useShapeSelector({ ...rest });

  return (
    <>
      {Array.from(Array(qty).keys()).map((key) => (
        <ShapeRandomizer
          {...rest}
          key={key}
          shapes={shapes}
          seed={[...seed, `${key}`]}
        />
      ))}
    </>
  );
};

export default ShapeSelector;
