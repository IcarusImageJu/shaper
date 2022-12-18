import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledFeather, StyledFeatherShape } from './styles';
import { Circle, Defs, Mask, Polygon, Rect } from '../../tags';

const Feather: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 1);
  return (
    <StyledFeather index={index} {...rest}>
      <StyledFeatherShape viewBox="0 0 100 100">
        <Defs>
          <Mask id={'feather'}>
            <Rect width={100} height={100} fill="black" />
            <Circle fill="white" cx={100} cy={100} r={100} />
            <Polygon fill="black" points="100,0 0,100 0,95" />
            <Polygon fill="black" points="20,0 50,40 40,0" />
            <Polygon fill="black" points="50,0 60,30 55,0" />
            <Polygon fill="black" points="100,50 60,50 100,60" />
          </Mask>
        </Defs>
        <Circle
          cy={0}
          cx={0}
          r={100}
          fill={rest.shapeColor || defaultShapeColor}
          mask={`url(#feather)`}
        />
      </StyledFeatherShape>
    </StyledFeather>
  );
};

export default Feather;
