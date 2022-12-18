import React from 'react';
import type { FC } from 'react';
import Svg, { Circle, Defs, Mask, Rect } from 'react-native-svg';
import type { Shape } from '../models';
import { randomIntFromInterval } from '../../utils';
import { StyledRing } from './styles';
import { defaultShapeColor } from '../constants';

const Ring: FC<Shape> = ({ children: _children, ...rest }) => {
  const hole = randomIntFromInterval(1, 4);
  const ring = randomIntFromInterval(1, 2);

  const calcRing = (50 / 2) * ring;
  const calcHole = (25 / 4) * hole;
  const resHole = calcRing > calcHole ? calcHole : 25 / 4;
  return (
    <StyledRing {...rest}>
      <Svg viewBox="0 0 100 100">
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
      </Svg>
    </StyledRing>
  );
};

export default Ring;
