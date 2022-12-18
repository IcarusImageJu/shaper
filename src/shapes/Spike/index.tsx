import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { StyledSpike, StyledSpikeShape } from './styles';
import { defaultShapeColor } from '../constants';
import { Polygon } from '../../tags';

const Spike: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  return (
    <StyledSpike index={index} {...rest}>
      <StyledSpikeShape viewBox="0 0 100 100">
        <Polygon
          points="0,0 0,100 100,50"
          fill={rest.shapeColor || defaultShapeColor}
        />
      </StyledSpikeShape>
    </StyledSpike>
  );
};

export default Spike;
