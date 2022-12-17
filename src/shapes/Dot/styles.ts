import { Span } from '../../tags';
import styled from 'styled-components';
import { defaultBackgroundColor, defaultShapeColor } from '../constants';
import type { Shape } from '../models';

export const StyledDot = styled(Span)<Shape>`
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
  width: 100%;
  aspect-ratio: 1;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDotShape = styled(Span)<Shape>`
  display: block;
  border-radius: 1000%;
  width: 50%;
  aspect-ratio: 1;
  background-color: ${(props) => props.shapeColor || defaultShapeColor};
`;
