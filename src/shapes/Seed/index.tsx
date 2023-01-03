import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { defaultShapeColor } from '../constants';
import { StyledSeed, StyledSeedShape } from './styles';
import { Circle, Defs, Mask, Rect } from '../../tags';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Feather: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join());
  const index = chance.integer({ min: 0, max: 1 });

  return (
    <StyledSeed index={index} {...rest}>
      <StyledSeedShape viewBox="0 0 100 100">
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
      </StyledSeedShape>
    </StyledSeed>
  );
};

export default Feather;
