import { Span, Svg } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';
import { defaultBackgroundColor } from '../constants';

export const StyledRing = styled(Span)<Shape>`
  width: 100%;
  font-size: 0;
  aspect-ratio: 1;
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
`;

export const StyledRingShape = styled(Svg)`
  width: 100%;
  aspect-ratio: 1;
`;
