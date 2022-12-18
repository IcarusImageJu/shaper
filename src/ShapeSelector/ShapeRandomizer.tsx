import React from 'react';

import type { FC } from 'react';
import type { ShapeSelect } from './models';
import type { ShaperProps } from '../models';
import { useShapeRandomizer } from './useShapeRandomizer';

const ShapeRandomizer: FC<ShaperProps & { shapes: ShapeSelect[] }> = ({
  shapes = [],
  ...rest
}) => {
  const { Shape, shapeColor, backgroundColor } = useShapeRandomizer({
    shapes,
    ...rest,
  });

  return <Shape shapeColor={shapeColor} backgroundColor={backgroundColor} />;
};

export default ShapeRandomizer;
