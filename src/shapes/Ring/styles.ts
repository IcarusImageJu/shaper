import { Span, Svg } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';

export const StyledRing = styled(Span)<Shape>`
  width: 100%;
  font-size: 0;
  aspect-ratio: 1;
`;

export const StyledRingShape = styled(Svg)`
  width: 100%;
  aspect-ratio: 1;
`;
