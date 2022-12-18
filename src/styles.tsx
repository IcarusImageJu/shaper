import styled from 'styled-components';
import { Div } from './tags';
import type { ShaperProps } from './models';
import { defaultTileSize } from './constants';

export const Container = styled(Div)<ShaperProps>`
  height: 100%;
  width: 100%;
  font-size: 0;
  display: grid;
  overflow: hidden;
  grid-template-columns: ${(props) =>
    `repeat(auto-fill, minmax(${props.tileSize || defaultTileSize}px, 1fr))`};
  *,
  & {
    box-sizing: content-box;
  }
`;
