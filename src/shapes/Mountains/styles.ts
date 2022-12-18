import { Span, Svg } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';
import { defaultBackgroundColor } from '../constants';

export const StyledMountains = styled(Span)<Shape & { index: number }>`
  width: 100%;
  font-size: 0;
  aspect-ratio: 1;
  transform: ${(props) => `scaleX(${props.index === 1 ? 1 : -1})`};
  background-color: ${(props) =>
    props.backgroundColor || defaultBackgroundColor};
`;

export const StyledMountainsShape = styled(Svg)`
  width: 100%;
  aspect-ratio: 1;
`;
