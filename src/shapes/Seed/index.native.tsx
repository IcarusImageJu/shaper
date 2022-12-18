import React from 'react';
import type { FC } from 'react';
import Svg, { Circle, Defs, Mask, Rect } from 'react-native-svg';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledSeed } from './styles';

const Feather: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 1);
  return (
    <StyledSeed index={index} {...rest}>
      <Svg viewBox="0 0 100 100">
        <Defs>
          <Mask id={'seed'}>
            <Rect width={100} height={100} fill="black" />
            <Circle fill="white" cx={100} cy={100} r={100} />
          </Mask>
        </Defs>
        <Circle
          cy={0}
          cx={0}
          r={100}
          fill={rest.shapeColor || defaultShapeColor}
          mask={`url(#seed)`}
        />
      </Svg>
    </StyledSeed>
  );
};

export default Feather;
