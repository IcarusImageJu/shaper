import { Span, Svg } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';
import { defaultBackgroundColor } from '../constants';

export const StyledRamp = styled(Span)<Shape & { index: number }>`
  width: 100%;
  font-size: 0;
  aspect-ratio: 1;
  transform: ${(props) => `rotate(${props.index * 90}deg)`};
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
`;

export const StyledRampShape = styled(Svg)`
  width: 100%;
  aspect-ratio: 1;
`;
