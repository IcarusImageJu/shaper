import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { defaultShapeColor } from '../constants';
import { StyledMountains, StyledMountainsShape } from './styles';
import { Polygon } from '../../tags';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Mountains: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join);
  const index = chance.integer({ min: 0, max: 1 });
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
