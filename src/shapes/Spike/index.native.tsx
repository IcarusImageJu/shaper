import React from 'react';
import type { FC } from 'react';
import Svg, { Polygon } from 'react-native-svg';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { StyledSpike } from './styles';
import { defaultShapeColor } from '../constants';

const Triangle: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 3);
  return (
    <StyledSpike index={index} {...rest}>
      <Svg viewBox="0 0 100 100">
        <Polygon
          points="0,0 0,100 100,50"
          fill={rest.shapeColor || defaultShapeColor}
        />
      </Svg>
    </StyledSpike>
  );
};

export default Triangle;
