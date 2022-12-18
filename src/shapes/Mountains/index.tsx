import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledMountains, StyledMountainsShape } from './styles';
import { Polygon } from '../../tags';

const Mountains: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 1);
  return (
    <StyledMountains index={index} {...rest}>
      <StyledMountainsShape viewBox="0 0 100 100">
        <Polygon
          points="0,100 100,100 75,0 50,50 25,25"
          fill={rest.shapeColor || defaultShapeColor}
        />
      </StyledMountainsShape>
    </StyledMountains>
  );
};

export default Mountains;
