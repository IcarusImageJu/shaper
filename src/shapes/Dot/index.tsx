import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledDot, StyledDotShape } from './styles';

const Dot: FC<Shape> = ({ ...rest }) => {
  return (
    <StyledDot {...rest}>
      <StyledDotShape {...rest} />
    </StyledDot>
  );
};

export default Dot;
