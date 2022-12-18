import React from 'react';

import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledSpike, StyledSpikeShape } from './styles';

const Spike: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  return (
    <StyledSpike index={index} {...rest}>
      <StyledSpikeShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <polygon
          points="0,0 0,100 100,50"
          fill={rest.shapeColor || defaultShapeColor}
          shapeRendering="crisp-edge"
        />
      </StyledSpikeShape>
    </StyledSpike>
  );
};

export default Spike;
