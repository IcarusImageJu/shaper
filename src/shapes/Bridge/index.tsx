import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { StyledBridge, StyledBridgeShape } from './styles';
import { defaultShapeColor } from '../constants';
import { Circle, Defs, Mask, Rect } from '../../tags';

const Bridge: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  const hole = randomIntFromInterval(1, 2);
  const position = randomIntFromInterval(1, 2);
  return (
    <StyledBridge index={index} {...rest}>
      <StyledBridgeShape viewBox="0 0 100 100">
        <Defs>
          <Mask id={'hole' + hole}>
            <Rect width={100} height={100} fill="white" />
            <Circle
              fill="black"
              cx={50}
              cy={(100 / 2) * position}
              r={(50 / 2) * hole}
            />
          </Mask>
        </Defs>
        <Rect
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
