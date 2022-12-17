import { Span, Svg } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';

export const StyledTriangle = styled(Span)<Shape & { index: number }>`
  width: 100%;
  font-size: 0;
  aspect-ratio: 1;
  transform: ${(props) => `rotate(${props.index * 90}deg)`};
`;

export const StyledTriangleShape = styled(Svg)`
  width: 100%;
  aspect-ratio: 1;
`;
