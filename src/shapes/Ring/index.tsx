import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledRing, StyledRingShape } from './styles';
import { defaultShapeColor } from '../constants';
import { Circle, Defs, Mask, Rect } from '../../tags';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Ring: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join());

  const hole = chance.integer({ min: 1, max: 4 });
  const ring = chance.integer({ min: 1, max: 2 });

  const calcRing = (50 / 2) * ring;
  const calcHole = (25 / 4) * hole;
  const resHole = calcRing > calcHole ? calcHole : 25 / 4;
  return (
    <StyledRing {...rest}>
      <StyledRingShape viewBox="0 0 100 100">
        <Defs>
          <Mask id={'ringhole' + resHole}>
            <Rect width={100} height={100} fill="white" />
            <Circle fill="black" cx={50} cy={50} r={resHole} />
          </Mask>
        </Defs>
        <Circle
          cx={50}
          cy={50}
          r={calcRing}
          fill={rest.shapeColor || defaultShapeColor}
          mask={`url(#ringhole${resHole})`}
        />
      </StyledRingShape>
    </StyledRing>
  );
};

export default Ring;
