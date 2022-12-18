import React from 'react';

import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledSeed, StyledSeedShape } from './styles';

const Seed: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 1);
  return (
    <StyledSeed index={index} {...rest}>
      <StyledSeedShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <defs>
          <mask id={'seed'}>
            <rect width={100} height={100} fill="black" />
            <circle
              fill="white"
              cx={100}
              cy={100}
              r={100}
              shapeRendering="crisp-edge"
            />
          </mask>
        </defs>
        <circle
          cy={0}
          cx={0}
          r={100}
          fill={rest.shapeColor || defaultShapeColor}
          shapeRendering="crisp-edge"
          mask={`url(#seed)`}
        />
      </StyledSeedShape>
    </StyledSeed>
  );
};

export default Seed;
