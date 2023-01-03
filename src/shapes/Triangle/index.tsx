import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledTriangle, StyledTriangleShape } from './styles';
import { defaultShapeColor } from '../constants';
import { Polygon } from '../../tags';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Triangle: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join());
  const index = chance.integer({ min: 0, max: 3 });
  return (
    <StyledTriangle index={index} {...rest}>
      <StyledTriangleShape viewBox="0 0 100 100">
        <Polygon
          points="0,0 0,100 100,100"
          fill={rest.shapeColor || defaultShapeColor}
        />
      </StyledTriangleShape>
    </StyledTriangle>
  );
};

export default Triangle;
