import React from 'react';

import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../utils';
import { StyledTriangle } from './styles';

const Triangle: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  return <StyledTriangle index={index} {...rest} />;
};

export default Triangle;
