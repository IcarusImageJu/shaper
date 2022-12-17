import React from 'react';

import type { FC } from 'react';
import type { ShapeSelect } from './models';
import { randomIntFromInterval } from '../utils';

const ShapeRandomizer: FC<{ shapes: ShapeSelect[] }> = ({ shapes = [] }) => {
  const index = randomIntFromInterval(0, shapes.length - 1);
  const Shape = (shapes[index] as ShapeSelect).shape;

  return <Shape />;
};

export default ShapeRandomizer;
