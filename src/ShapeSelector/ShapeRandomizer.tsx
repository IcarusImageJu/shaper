import React from 'react';

import type { FC } from 'react';
import type { ShapeSelect } from './models';
import type { ShaperProps } from '../models';
import { useShapeRandomizer } from './useShapeRandomizer';

const ShapeRandomizer: FC<ShaperProps & { shapes: ShapeSelect[] }> = ({
  shapes = [],
  seed,
  ...rest
}) => {
  const { Shape, shapeColor, backgroundColor } = useShapeRandomizer({
    shapes,
    seed,
    ...rest,
  });

  return (
    <Shape
      shapeColor={shapeColor}
      backgroundColor={backgroundColor}
      seed={seed}
    />
  );
};

export default ShapeRandomizer;
