import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledSpike, StyledSpikeShape } from './styles';
import { defaultShapeColor } from '../constants';
import { Polygon } from '../../tags';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Spike: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join());
  const index = chance.integer({ min: 0, max: 3 });
  return (
    <StyledSpike index={index} {...rest}>
      <StyledSpikeShape viewBox="0 0 100 100">
        <Polygon
          points="0,0 0,100 100,50"
          fill={rest.shapeColor || defaultShapeColor}
        />
      </StyledSpikeShape>
    </StyledSpike>
  );
};

export default Spike;
