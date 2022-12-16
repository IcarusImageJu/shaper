import { Span } from '../../tags';
import styled from 'styled-components';
import { defaultColor } from '../constants';
import type { Shape } from '../models';

export const StyledSquare = styled(Span)<Shape>`
  background-color: ${(props) => props.shapeColor || defaultColor};
  width: 100%;
  aspect-ratio: 1;
  display: block;
`;
