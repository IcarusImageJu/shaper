import React from 'react';
import type { FC } from 'react';
import Svg, { Circle, Defs, Mask, Rect } from 'react-native-svg';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledRamp } from './styles';

const Ramp: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);

  return (
    <StyledRamp index={index} {...rest}>
      <Svg viewBox="0 0 100 100">
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
      </Svg>
    </StyledRamp>
  );
};

export default Ramp;
