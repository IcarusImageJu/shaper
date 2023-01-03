import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { RectangleShapeStyled, RectangleStyled } from './styles';
import Chance from 'chance';
import { defaultSeed } from '../../constants';

const Rectangle: FC<Shape> = ({ seed = defaultSeed, ...rest }) => {
  const chance = new Chance(seed.join());
  const rotation = chance.integer({ min: 0, max: 3 });
  const ratio = chance.integer({ min: 1, max: 3 });

  return (
    <RectangleStyled {...rest} rotation={rotation} ratio={ratio}>
      <RectangleShapeStyled {...rest} rotation={rotation} ratio={ratio} />
    </RectangleStyled>
  );
};

export default Rectangle;
