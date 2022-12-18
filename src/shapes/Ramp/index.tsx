import React from 'react';

import type { FC } from 'react';
import { randomIntFromInterval } from '../../utils';
import type { Shape } from '../models';
import { defaultShapeColor } from '../constants';
import { StyledRamp, StyledRampShape } from './styles';

const Ramp: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  return (
    <StyledRamp {...rest} index={index}>
      <StyledRampShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <defs>
          <mask id={'ramp'}>
            <rect width={100} height={100} fill="white" />
            <rect width={50} height={50} x={50} y={50} fill="black" />
            <circle
              fill="black"
              cx={50}
              cy={100}
              r={50}
              shapeRendering="crisp-edge"
            />
          </mask>
        </defs>
        <rect
          fill={rest.shapeColor || defaultShapeColor}
          x={0}
          y={0}
          width={100}
          height={100}
          mask={`url(#ramp)`}
        />
      </StyledRampShape>
    </StyledRamp>
  );
};

export default Ramp;
