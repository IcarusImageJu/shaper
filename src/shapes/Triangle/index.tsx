import React from 'react';

import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { StyledTriangle, StyledTriangleShape } from './styles';

const Triangle: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  return (
    <StyledTriangle index={index} {...rest}>
      <StyledTriangleShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <polygon points="0,0 0,100 100,100" fill={rest.shapeColor} />
      </StyledTriangleShape>
    </StyledTriangle>
  );
};

export default Triangle;
