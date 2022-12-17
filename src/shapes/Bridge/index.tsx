import React from 'react';

import type { FC } from 'react';
import { randomIntFromInterval } from '../../utils';
import type { Shape } from '../models';
import { StyledBridge, StyledBridgeShape } from './styles';
import { defaultShapeColor } from '../constants';

const Bridge: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  const hole = randomIntFromInterval(1, 2);
  const position = randomIntFromInterval(1, 2);
  return (
    <StyledBridge {...rest} index={index}>
      <StyledBridgeShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <defs>
          <mask id={'hole' + hole}>
            <rect width={100} height={100} fill="white" />
            <circle
              fill="black"
              cx={50}
              cy={(100 / 2) * position}
              r={(50 / 2) * hole}
              shapeRendering="crisp-edge"
            />
          </mask>
        </defs>
        <rect
          fill={rest.shapeColor || defaultShapeColor}
          x={0}
          y={50}
          width={100}
          height={50}
          mask={`url(#hole${hole})`}
        />
      </StyledBridgeShape>
    </StyledBridge>
  );
};

export default Bridge;
