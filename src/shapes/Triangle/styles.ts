import { Span } from '../../tags';
import styled from 'styled-components';
import type { Shape } from '../models';

export const StyledTriangle = styled(Span)<Shape & { index: number }>`
  width: 100%;
  aspect-ratio: 1;
  transform: ${(props) => `rotate(${props.index * 90}deg)`};
  border-left: 1px solid red;
  border-bottom: 1px solid red;
`;
