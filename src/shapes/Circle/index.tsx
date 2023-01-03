import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledCircle, StyledCircleShape } from './styles';

const Circle: FC<Shape> = ({ ...rest }) => {
  return (
    <StyledCircle {...rest}>
      <StyledCircleShape {...rest} />
    </StyledCircle>
  );
};

export default Circle;
