import React from 'react';
import type { FC } from 'react';
import type { Shape } from '../models';
import { StyledSquare } from './styles';

const Square: FC<Shape> = ({ children: _children, ...rest }) => {
  return <StyledSquare {...rest} />;
};

export default Square;
