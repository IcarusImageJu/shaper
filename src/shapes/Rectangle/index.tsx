import React from 'react';
import type { FC } from 'react';
import { randomIntFromInterval } from '../../utils';
import type { Shape } from '../models';
import { RectangleShapeStyled, RectangleStyled } from './styles';

const Rectangle: FC<Shape> = ({ children: _children, ...rest }) => {
  const rotation = randomIntFromInterval(0, 3);
  const ratio = randomIntFromInterval(1, 3);

  return (
    <RectangleStyled {...rest} rotation={rotation} ratio={ratio}>
      <RectangleShapeStyled {...rest} rotation={rotation} ratio={ratio} />
    </RectangleStyled>
  );
};

export default Rectangle;
