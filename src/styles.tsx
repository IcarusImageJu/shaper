import styled from 'styled-components';
import { Div } from './tags';
import type { ShaperProps } from './models';

export const Container = styled(Div)<ShaperProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(auto-fill, minmax(${props.tileSize || 50}px, 1fr))`};
`;
