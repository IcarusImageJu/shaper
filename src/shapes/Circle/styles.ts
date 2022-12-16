import { Span } from '../../tags';
import styled from 'styled-components';
import { defaultBackgroundColor, defaultColor } from '../constants';
import type { Shape } from '../models';

export const StyledCircle = styled(Span)<Shape>`
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
  width: 100%;
  aspect-ratio: 1;
  display: block;
`;

export const StyledCircleShape = styled(Span)<Shape>`
  display: block;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1;
  background-color: ${(props) => props.shapeColor || defaultColor};
`;
