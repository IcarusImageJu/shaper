import { Span } from '../../tags';
import styled from 'styled-components';
import { defaultShapeColor } from '../constants';
import type { Shape } from '../models';

export const StyledSquare = styled(Span)<Shape>`
  background-color: ${(props) => props.shapeColor || defaultShapeColor};
  width: 100%;
  aspect-ratio: 1;
  display: block;
`;
