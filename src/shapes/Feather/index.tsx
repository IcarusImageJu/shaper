import React from 'react';

import type { FC } from 'react';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { defaultShapeColor } from '../constants';
import { StyledFeather, StyledFeatherShape } from './styles';

const Feather: FC<Shape> = ({ children: _children, ...rest }) => {
  const index = randomIntFromInterval(0, 1);
  return (
    <StyledFeather index={index} {...rest}>
      <StyledFeatherShape viewBox="0 0 100 100" preserveAspectRatio="true">
        <defs>
          <mask id={'feather'}>
            <rect width={100} height={100} fill="black" />
            <circle
              fill="white"
              cx={100}
              cy={100}
              r={100}
              shapeRendering="crisp-edge"
            />
            <polygon fill="black" points="100,0 0,100 0,95" />
            <polygon fill="black" points="20,0 50,40 40,0" />
            <polygon fill="black" points="50,0 60,30 55,0" />
            <polygon fill="black" points="100,50 60,50 100,60" />
          </mask>
        </defs>
        <circle
          cy={0}
          cx={0}
          r={100}
          fill={rest.shapeColor || defaultShapeColor}
          shapeRendering="crisp-edge"
          mask={`url(#feather)`}
        />
      </StyledFeatherShape>
    </StyledFeather>
  );
};

export default Feather;
