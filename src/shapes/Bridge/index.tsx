import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledBridge, StyledBridgeShape } from './styles';
import { defaultShapeColor } from '../constants';
import { Circle, Defs, Mask, Rect } from '../../tags';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Bridge: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join);
  const index = chance.integer({ min: 0, max: 3 });
  const hole = chance.integer({ min: 1, max: 2 });
  const position = chance.integer({ min: 1, max: 2 });
  return (
    <StyledBridge index={index} {...rest}>
      <StyledBridgeShape viewBox="0 0 100 100">
        <Defs>
          <Mask id={'hole' + hole}>
            <Rect width={100} height={100} fill="white" />
            <Circle
              fill="black"
              cx={50}
              cy={(100 / 2) * position}
              r={(50 / 2) * hole}
            />
          </Mask>
        </Defs>
        <Rect
          fill={rest.shapeColor || defaultShapeColor}
          x={0}
          y={50}
          width={100}
          height={50}
          mask={`url(#hole${hole})`}
        />
      </StyledBridgeShape>
    </StyledBridge>
  );
};

export default Bridge;
