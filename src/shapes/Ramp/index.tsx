import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledRamp, StyledRampShape } from './styles';
import { Circle, Defs, Mask, Rect } from '../../tags';

const Ramp: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);

  return (
    <StyledRamp index={index} {...rest}>
      <StyledRampShape viewBox="0 0 100 100">
        <Defs>
          <Mask id={'ramp'}>
            <Rect width={100} height={100} fill="white" />
            <Rect width={50} height={50} x={50} y={50} fill="black" />
            <Circle fill="black" cx={50} cy={100} r={50} />
          </Mask>
        </Defs>
        <Rect
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
