import React from 'react';

import type { FC } from 'react';
import { randomIntFromInterval } from '../../utils';
import type { Shape } from '../models';
import { defaultShapeColor } from '../constants';
import { StyledRing, StyledRingShape } from './styles';

const Ring: FC<Shape> = ({ children: _children, ...rest }) => {
  const hole = randomIntFromInterval(1, 4);
  const ring = randomIntFromInterval(1, 2);

  const calcRing = (50 / 2) * ring;
  const calcHole = (25 / 4) * hole;
  const resHole = calcRing > calcHole ? calcHole : 25 / 4;

  return (
    <StyledRing {...rest}>
      <StyledRingShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <defs>
          <mask id={'ringhole' + resHole}>
            <rect width={100} height={100} fill="white" />
            <circle
              fill="black"
              cx={50}
              cy={50}
              r={resHole}
              shapeRendering="crisp-edge"
            />
          </mask>
        </defs>
        <circle
          cx={50}
          cy={50}
          r={calcRing}
          fill={rest.shapeColor || defaultShapeColor}
          mask={`url(#ringhole${resHole})`}
        />
      </StyledRingShape>
    </StyledRing>
  );
};

export default Ring;
